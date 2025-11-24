import React, { useState, useRef, useEffect } from 'react';
import { Send, Plus, X, FileText, MessageSquare, User, ShoppingCart, Upload, CheckCircle, Bot } from 'lucide-react';

// Interfaces
interface ContextItem {
  id: string;
  type: 'transcript' | 'labs' | 'document' | 'questionnaire' | 'demographics' | 'orders' | 'patient-uploads';
  name: string;
  date: string;
  preview?: string;
  selected: boolean;
}

interface Template {
  id: string;
  name: string;
  content: string;
  description: string;
}

interface Suggestion {
  id: string;
  type: 'template' | 'context';
  name: string;
  description?: string;
  content?: string;
  contextType?: string;
  data?: any;
}

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'claude';
  timestamp: Date;
  context?: ContextItem[];
}

interface ActiveCommand {
  type: 'template' | 'context' | null;
  position: number;
  query: string;
}

const HealthPlatformChatInterface: React.FC = () => {
  // Core state
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedContext, setSelectedContext] = useState<ContextItem[]>([]);
  const [cursorPosition, setCursorPosition] = useState(0);
  
  // Command and suggestion state
  const [activeCommand, setActiveCommand] = useState<ActiveCommand>({ type: null, position: 0, query: '' });
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(0);
  
  // UI state
  const [showContextModal, setShowContextModal] = useState(false);
  const [activeTab, setActiveTab] = useState('transcripts');
  const [isLoading, setIsLoading] = useState(false);
  
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Templates data
  const templates: Template[] = [
    {
      id: 'assessment',
      name: 'Patient Assessment',
      description: 'Comprehensive patient assessment template',
      content: `## Patient Assessment

**Chief Complaint:** 

**History of Present Illness:**

**Past Medical History:**

**Current Medications:**

**Allergies:**

**Physical Examination:**

**Assessment & Plan:**`
    },
    {
      id: 'treatment-plan',
      name: 'Treatment Plan',
      description: 'Treatment planning template',
      content: `## Treatment Plan

**Diagnosis:**

**Treatment Goals:**
1. 
2. 
3. 

**Recommended Interventions:**

**Follow-up Schedule:**

**Patient Education Points:**`
    },
    {
      id: 'consultation',
      name: 'Consultation Notes',
      description: 'General consultation documentation',
      content: `## Consultation Notes

**Date:** ${new Date().toLocaleDateString()}

**Consultation Type:**

**Clinical Findings:**

**Discussion Points:**

**Recommendations:**

**Next Steps:**`
    }
  ];

  // Mock context data
  const contextData = {
    transcripts: [
      {
        id: 'transcript-1',
        type: 'transcript' as const,
        name: 'Initial Consultation',
        date: '2025-08-25',
        preview: 'Patient presents with fatigue and weight concerns...',
        selected: false
      },
      {
        id: 'transcript-2', 
        type: 'transcript' as const,
        name: 'Follow-up Visit',
        date: '2025-08-20',
        preview: 'Patient reports improved energy levels after...',
        selected: false
      }
    ],
    labs: [
      {
        id: 'lab-1',
        type: 'labs' as const,
        name: 'Choose Health - Comprehensive Panel',
        date: '2025-08-24',
        preview: 'Complete metabolic panel, lipid profile, thyroid function',
        selected: false
      },
      {
        id: 'lab-2',
        type: 'labs' as const,
        name: 'Choose Health - Hormone Panel',
        date: '2025-08-20',
        preview: 'Testosterone, estradiol, cortisol, insulin levels',
        selected: false
      }
    ],
    documents: [
      {
        id: 'doc-1',
        type: 'document' as const,
        name: 'Lab Results Summary.pdf',
        date: '2025-08-24',
        selected: false
      },
      {
        id: 'doc-2',
        type: 'document' as const,
        name: 'Treatment Protocol.docx', 
        date: '2025-08-22',
        selected: false
      }
    ],
    questionnaires: [
      {
        id: 'quest-1',
        type: 'questionnaire' as const,
        name: 'General Health Questionnaire',
        date: '2025-08-26',
        preview: 'Completed 15 questions covering overall health status',
        selected: false
      },
      {
        id: 'quest-2',
        type: 'questionnaire' as const, 
        name: 'Peptide Therapy Questionnaire',
        date: '2025-08-25',
        preview: 'Completed 12 questions about therapy goals and concerns',
        selected: false
      }
    ],
    demographics: [
      {
        id: 'demo-1',
        type: 'demographics' as const,
        name: 'Patient Demographics',
        date: '2025-08-26',
        preview: 'Age, contact info, emergency contacts, insurance',
        selected: false
      }
    ],
    orders: [
      {
        id: 'order-1',
        type: 'orders' as const,
        name: 'Current Treatment Orders',
        date: '2025-08-25',
        preview: 'Active prescriptions and treatment protocols',
        selected: false
      }
    ],
    patientUploads: [
      {
        id: 'patient-1',
        type: 'patient-uploads' as const,
        name: 'MyChart Medical History.pdf',
        date: '2025-08-24',
        preview: 'Patient uploaded from external provider',
        selected: false
      }
    ]
  };

  const tabs = [
    { id: 'transcripts', name: 'Transcripts', icon: MessageSquare, count: contextData.transcripts.length },
    { id: 'labs', name: 'Lab Results', icon: FileText, count: contextData.labs.length },
    { id: 'documents', name: 'Documents', icon: FileText, count: contextData.documents.length },
    { id: 'questionnaires', name: 'Questionnaires', icon: CheckCircle, count: contextData.questionnaires.length },
    { id: 'demographics', name: 'Demographics', icon: User, count: contextData.demographics.length },
    { id: 'orders', name: 'Orders', icon: ShoppingCart, count: contextData.orders.length },
    { id: 'patientUploads', name: 'Patient Uploads', icon: Upload, count: contextData.patientUploads.length }
  ];

  // Command detection
  const detectCommand = (text: string, position: number): ActiveCommand => {
    const beforeCursor = text.substring(0, position);
    
    // Check for slash commands
    const slashMatch = beforeCursor.match(/\/(\w*)$/);
    if (slashMatch) {
      return {
        type: 'template',
        position: slashMatch.index!,
        query: slashMatch[1]
      };
    }
    
    // Check for @ mentions
    const atMatch = beforeCursor.match(/@(\w*)$/);
    if (atMatch) {
      return {
        type: 'context',
        position: atMatch.index!,
        query: atMatch[1]
      };
    }
    
    return { type: null, position: 0, query: '' };
  };

  // Generate suggestions
  const generateSuggestions = (command: ActiveCommand): Suggestion[] => {
    if (command.type === 'template') {
      return templates
        .filter(template => 
          template.name.toLowerCase().includes(command.query.toLowerCase()) ||
          template.description.toLowerCase().includes(command.query.toLowerCase())
        )
        .map(template => ({
          id: template.id,
          type: 'template',
          name: template.name,
          description: template.description,
          content: template.content
        }));
    }
    
    if (command.type === 'context') {
      const allContextItems = [
        ...contextData.transcripts,
        ...contextData.labs,
        ...contextData.documents,
        ...contextData.questionnaires,
        ...contextData.demographics,
        ...contextData.orders,
        ...contextData.patientUploads
      ];
      
      return allContextItems
        .filter(item => 
          item.name.toLowerCase().includes(command.query.toLowerCase()) ||
          item.type.toLowerCase().includes(command.query.toLowerCase())
        )
        .slice(0, 8)
        .map(item => ({
          id: item.id,
          type: 'context',
          name: item.name,
          description: `${item.type} - ${item.date}`,
          contextType: item.type,
          data: item
        }));
    }
    
    return [];
  };

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    const newPosition = e.target.selectionStart || 0;
    
    setMessage(newValue);
    setCursorPosition(newPosition);
    
    const command = detectCommand(newValue, newPosition);
    setActiveCommand(command);
    
    if (command.type) {
      const newSuggestions = generateSuggestions(command);
      setSuggestions(newSuggestions);
      setShowSuggestions(newSuggestions.length > 0);
      setSelectedSuggestionIndex(0);
    } else {
      setShowSuggestions(false);
      setSuggestions([]);
    }
  };

  // Handle suggestion selection
  const handleSuggestionAction = (suggestion: Suggestion) => {
    if (!inputRef.current) return;
    
    const input = inputRef.current;
    const currentValue = input.value;
    
    if (suggestion.type === 'template' && suggestion.content) {
      // Replace the slash command with template content
      const beforeCommand = currentValue.substring(0, activeCommand.position);
      const afterCommand = currentValue.substring(cursorPosition);
      const newValue = beforeCommand + suggestion.content + afterCommand;
      
      setMessage(newValue);
      setShowSuggestions(false);
      
      // Focus and position cursor after template
      setTimeout(() => {
        input.focus();
        const newPosition = beforeCommand.length + (suggestion.content?.length || 0);
        input.setSelectionRange(newPosition, newPosition);
      }, 0);
      
    } else if (suggestion.type === 'context' && suggestion.data) {
      // Add context item and replace @ mention
      const contextItem: ContextItem = { ...suggestion.data, selected: true };
      if (!selectedContext.find(c => c.id === contextItem.id)) {
        setSelectedContext(prev => [...prev, contextItem]);
      }
      
      // Replace @ mention with context reference
      const beforeCommand = currentValue.substring(0, activeCommand.position);
      const afterCommand = currentValue.substring(cursorPosition);
      const newValue = beforeCommand + `[${suggestion.name}] ` + afterCommand;
      
      setMessage(newValue);
      setShowSuggestions(false);
      
      setTimeout(() => {
        input.focus();
        const newPosition = beforeCommand.length + suggestion.name.length + 3;
        input.setSelectionRange(newPosition, newPosition);
      }, 0);
    }
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showSuggestions) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedSuggestionIndex(prev => 
          prev < suggestions.length - 1 ? prev + 1 : 0
        );
        break;
        
      case 'ArrowUp': 
        e.preventDefault();
        setSelectedSuggestionIndex(prev => 
          prev > 0 ? prev - 1 : suggestions.length - 1
        );
        break;
        
      case 'Enter':
      case 'Tab':
        e.preventDefault();
        if (suggestions[selectedSuggestionIndex]) {
          handleSuggestionAction(suggestions[selectedSuggestionIndex]);
        }
        break;
        
      case 'Escape':
        setShowSuggestions(false);
        break;
    }
  };

  // Send message
  const handleSendMessage = async () => {
    if (!message.trim() || isLoading) return;
    
    setIsLoading(true);
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: message,
      sender: 'user',
      timestamp: new Date(),
      context: selectedContext.length > 0 ? [...selectedContext] : undefined
    };
    
    setMessages(prev => [...prev, userMessage]);
    setMessage('');
    
    // Simulate Claude response
    setTimeout(() => {
      const claudeMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: `I understand you're asking about: "${userMessage.content}"\n\n${selectedContext.length > 0 ? `I have access to the following patient context:\n${selectedContext.map(c => `- ${c.name} (${c.date})`).join('\n')}\n\n` : ''}I'm ready to help with your clinical documentation and analysis. This is where I would provide a comprehensive response based on the patient context and your specific request.`,
        sender: 'claude',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, claudeMessage]);
      setIsLoading(false);
    }, 1500);
  };

  // Context management
  const handleContextToggle = (item: ContextItem) => {
    if (selectedContext.find(c => c.id === item.id)) {
      setSelectedContext(selectedContext.filter(c => c.id !== item.id));
    } else {
      setSelectedContext([...selectedContext, { ...item, selected: true }]);
    }
  };

  const removeContextItem = (itemId: string) => {
    setSelectedContext(selectedContext.filter(c => c.id !== itemId));
  };

  // Utility functions
  const getContextIcon = (type: string) => {
    switch (type) {
      case 'transcript': return MessageSquare;
      case 'labs': return FileText;
      case 'document': return FileText;
      case 'questionnaire': return CheckCircle;
      case 'demographics': return User;
      case 'orders': return ShoppingCart;
      case 'patient-uploads': return Upload;
      default: return FileText;
    }
  };

  const getContextColor = (type: string) => {
    switch (type) {
      case 'transcript': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'labs': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'document': return 'bg-green-100 text-green-800 border-green-200';
      case 'questionnaire': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'demographics': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'orders': return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      case 'patient-uploads': return 'bg-pink-100 text-pink-800 border-pink-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getCurrentItems = () => {
    switch (activeTab) {
      case 'transcripts': return contextData.transcripts;
      case 'labs': return contextData.labs;
      case 'documents': return contextData.documents;
      case 'questionnaires': return contextData.questionnaires;
      case 'demographics': return contextData.demographics;
      case 'orders': return contextData.orders;
      case 'patientUploads': return contextData.patientUploads;
      default: return [];
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200">
        <div className="p-6">
          <h1 className="text-xl font-semibold text-gray-900">HealthPlatform US</h1>
        </div>
        <nav className="mt-6">
          <div className="px-3">
            <div className="space-y-1">
              <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50">
                Dashboard
              </a>
              <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50">
                Appointments
              </a>
              <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50">
                Messages
              </a>
              <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-900 bg-gray-100 rounded-md">
                Patients
              </a>
            </div>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-lg font-semibold text-gray-900">Austin Walker (Dosespot Patient ID --)</h1>
              <div className="flex space-x-4 mt-2">
                <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded">HealthPlatform AI</span>
                <span className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded">Lab Tests</span>
                <span className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded">Orders</span>
              </div>
            </div>
            <span className="text-sm text-gray-500">DoseSpot</span>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex">
          {/* Chat History Sidebar */}
          <div className="w-64 bg-gray-50 border-r border-gray-200 p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-gray-900">Chat history</h3>
            </div>
            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md text-sm mb-4 hover:bg-blue-700">
              + New chat
            </button>
            <div className="text-xs text-gray-500">
              <p>Commands:</p>
              <p>• /assessment - Insert assessment template</p>
              <p>• @labs - Add lab context</p>
            </div>
          </div>

          {/* Main Chat Interface */}
          <div className="flex-1 flex flex-col relative">
            {/* Chat Messages */}
            <div className="flex-1 p-6 overflow-auto">
              {messages.length === 0 ? (
                <div className="text-center py-12">
                  <Bot className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">Talk to HealthPlatform AI</h2>
                  <p className="text-gray-500 mb-4">Ask questions, summarize patient history, or get help drafting a treatment plan.</p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-md mx-auto">
                    <p className="text-sm text-blue-800 font-medium mb-2">Try these commands:</p>
                    <div className="text-xs text-blue-700 space-y-1">
                      <p><code>/assessment</code> - Insert assessment template</p>
                      <p><code>@labs</code> - Add lab results context</p>
                      <p><code>@questionnaires</code> - Add questionnaire data</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4 max-w-4xl">
                  {messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-3xl p-4 rounded-lg ${
                        msg.sender === 'user' 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-white border border-gray-200'
                      }`}>
                        <div className="whitespace-pre-wrap">{msg.content}</div>
                        <div className={`text-xs mt-2 ${
                          msg.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                        }`}>
                          {msg.timestamp.toLocaleTimeString()}
                        </div>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center space-x-2">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                          <span className="text-gray-500">Claude is thinking...</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Suggestions Dropdown */}
            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute bottom-32 left-6 right-6 z-10">
                <div className="bg-white border border-gray-300 rounded-lg shadow-lg max-w-md">
                  {suggestions.map((suggestion, index) => (
                    <button
                      key={suggestion.id}
                      onClick={() => handleSuggestionAction(suggestion)}
                      className={`w-full text-left p-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 ${
                        index === selectedSuggestionIndex ? 'bg-blue-50 border-blue-200' : ''
                      }`}
                    >
                      <div className="font-medium text-gray-900">{suggestion.name}</div>
                      {suggestion.description && (
                        <div className="text-sm text-gray-500 mt-1">{suggestion.description}</div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Context Chips */}
            {selectedContext.length > 0 && (
              <div className="px-6 py-3 bg-white border-t border-gray-100">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-gray-700">Active Context ({selectedContext.length})</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedContext.map((item) => {
                    const Icon = getContextIcon(item.type);
                    return (
                      <div
                        key={item.id}
                        className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs border ${getContextColor(item.type)}`}
                      >
                        <Icon className="w-3 h-3" />
                        <span className="font-medium">{item.name}</span>
                        <span className="opacity-75">({item.date})</span>
                        <button
                          onClick={() => removeContextItem(item.id)}
                          className="ml-1 hover:bg-black hover:bg-opacity-10 rounded-full p-0.5"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Chat Input */}
            <div className="p-6 bg-white border-t border-gray-200">
              <div className="flex items-end gap-3">
                <div className="flex-1">
                  <textarea
                    ref={inputRef}
                    value={message}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    placeholder="How can I help you today? Try /assessment or @labs"
                    className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows={3}
                  />
                </div>
                <button
                  onClick={() => setShowContextModal(true)}
                  className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center justify-center"
                  title="Add patient context"
                >
                  <Plus className="w-4 h-4 text-gray-600" />
                </button>
                <button
                  onClick={handleSendMessage}
                  disabled={!message.trim() || isLoading}
                  className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <div className="mt-2 text-xs text-gray-500 text-center">
                Powered by Claude Sonnet 4 • Use / for templates, @ for context
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Context Selection Modal */}
      {showContextModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-4xl max-h-[80vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Add Patient Context</h3>
              <button
                onClick={() => setShowContextModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-6 overflow-x-auto">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 whitespace-nowrap flex-shrink-0 ${
                        activeTab === tab.id
                          ? 'border-blue-500 text-blue-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {tab.name}
                      <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-xs">
                        {tab.count}
                      </span>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Content */}
            <div className="p-6 max-h-96 overflow-auto">
              <div className="space-y-3">
                {getCurrentItems().map((item) => {
                  const isSelected = selectedContext.find(c => c.id === item.id);
                  const Icon = getContextIcon(item.type);
                  
                  return (
                    <div
                      key={item.id}
                      className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                        isSelected ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => handleContextToggle(item)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3">
                          <div className={`p-2 rounded ${isSelected ? 'bg-blue-100' : 'bg-gray-100'}`}>
                            <Icon className={`w-4 h-4 ${isSelected ? 'text-blue-600' : 'text-gray-600'}`} />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900">{item.name}</h4>
                            <p className="text-sm text-gray-500 mt-1">{item.date}</p>
                            {'preview' in item && item.preview && (
                              <p className="text-sm text-gray-600 mt-2">{item.preview}</p>
                            )}
                          </div>
                        </div>
                        {isSelected && (
                          <CheckCircle className="w-5 h-5 text-blue-600" />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between p-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                {selectedContext.length} items selected
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowContextModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setShowContextModal(false)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Apply Context
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HealthPlatformChatInterface;