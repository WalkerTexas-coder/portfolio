import React, { useState } from 'react';
import { Settings, MessageSquare, Save, Plus, Trash2, Send, Loader2, Edit3 } from 'lucide-react';

type ChatSetting = {
  id: string;
  name: string;
  prompt: string;
  temperature: number;
  topK: number;
  topP: number;
  maxTokens: number;
};

type Message = {
  id: number;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  isError?: boolean;
};

type ChatHistory = {
  id: string;
  title: string;
  date: string;
  messages: Message[];
  settingId: string;
  settingName: string;
};

const HealthPlatformAIApp = () => {
  const [activeView, setActiveView] = useState('settings');
  const [activeTab, setActiveTab] = useState('shipping');
  const [isLoading, setIsLoading] = useState(false);
  const [currentInput, setCurrentInput] = useState('');
  const [showNewChatModal, setShowNewChatModal] = useState(false);

  // Messages for the current conversation
  const [messages, setMessages] = useState<Message[]>([]);

  // Chat history for sidebar
  const [chatHistory, setChatHistory] = useState<ChatHistory[]>([]);
  const [currentChatId, setCurrentChatId] = useState<string | null>(null);

  // Chat Settings
  const [chatSettings, setChatSettings] = useState<ChatSetting[]>([
    {
      id: 'clinical-standard',
      name: 'Clinical Assessment - Standard',
      prompt: 'You are a knowledgeable medical assistant helping healthcare providers with patient assessments. Focus on gathering comprehensive information, identifying potential concerns, and suggesting appropriate follow-up questions. Always recommend patients consult with their healthcare provider for medical decisions.',
      temperature: 0.3,
      topK: 40,
      topP: 0.9,
      maxTokens: 2000
    },
    {
      id: 'clinical-creative',
      name: 'Clinical Assessment - Creative',
      prompt: 'You are a knowledgeable medical assistant helping healthcare providers with patient assessments. Focus on gathering comprehensive information, identifying potential concerns, and suggesting appropriate follow-up questions. Always recommend patients consult with their healthcare provider for medical decisions.',
      temperature: 0.8,
      topK: 60,
      topP: 0.95,
      maxTokens: 2500
    },
    {
      id: 'treatment-conservative',
      name: 'Treatment Planning - Conservative',
      prompt: 'You are assisting healthcare providers with treatment planning and medication management. Provide evidence-based information, consider contraindications, and help identify potential drug interactions. Always defer final medical decisions to licensed healthcare providers.',
      temperature: 0.2,
      topK: 30,
      topP: 0.85,
      maxTokens: 2000
    },
    {
      id: 'treatment-creative',
      name: 'Treatment Planning - Creative',
      prompt: 'You are assisting healthcare providers with treatment planning and medication management. Provide evidence-based information, consider contraindications, and help identify potential drug interactions. Always defer final medical decisions to licensed healthcare providers.',
      temperature: 0.7,
      topK: 50,
      topP: 0.9,
      maxTokens: 2500
    },
    {
      id: 'patient-education',
      name: 'Patient Education - Standard',
      prompt: 'You are helping educate patients about their conditions and treatments. Use clear, non-technical language while remaining medically accurate. Encourage adherence to treatment plans and emphasize the importance of regular provider communication.',
      temperature: 0.4,
      topK: 40,
      topP: 0.9,
      maxTokens: 1800
    }
  ]);

  const [newChatSetting, setNewChatSetting] = useState<Omit<ChatSetting, 'id'>>({
    name: '',
    prompt: '',
    temperature: 0.5,
    topK: 40,
    topP: 0.9,
    maxTokens: 2000
  });
  const [isAddingSetting, setIsAddingSetting] = useState(false);
  const [editingSetting, setEditingSetting] = useState<ChatSetting | null>(null);
  const [defaultSetting, setDefaultSetting] = useState('clinical-standard');
  const [selectedSettingForNewChat, setSelectedSettingForNewChat] = useState('clinical-standard');

  const addChatSetting = () => {
    if (newChatSetting.name && newChatSetting.prompt) {
      const id = newChatSetting.name.toLowerCase().replace(/[^a-z0-9]/g, '-');
      setChatSettings([...chatSettings, { ...newChatSetting, id }]);
      setNewChatSetting({ name: '', prompt: '', temperature: 0.5, topK: 40, topP: 0.9, maxTokens: 2000 });
      setIsAddingSetting(false);
    }
  };

  const updateChatSetting = () => {
    if (editingSetting && editingSetting.name && editingSetting.prompt) {
      setChatSettings(chatSettings.map(setting => 
        setting.id === editingSetting.id ? editingSetting : setting
      ));
      setEditingSetting(null);
    }
  };

  const deleteChatSetting = (id: string) => {
    setChatSettings(chatSettings.filter(p => p.id !== id));
    if (defaultSetting === id) {
      setDefaultSetting(chatSettings[0]?.id || '');
    }
  };

  const startNewChat = () => {
    setShowNewChatModal(true);
  };

  const createNewChat = () => {
    const selectedSetting = chatSettings.find(c => c.id === selectedSettingForNewChat);
    if (!selectedSetting) return;

    const newChatId = `chat-${Date.now()}`;
    const newChat = {
      id: newChatId,
      title: 'New Conversation',
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      messages: [],
      settingId: selectedSetting.id,
      settingName: selectedSetting.name
    };
    
    setChatHistory([newChat, ...chatHistory]);
    setCurrentChatId(newChatId);
    setMessages([]);
    setShowNewChatModal(false);
  };

  const switchToChat = (chatId: string) => {
    const chat = chatHistory.find(c => c.id === chatId);
    if (chat) {
      setCurrentChatId(chatId);
      setMessages(chat.messages || []);
    }
  };

  const getCurrentChatSetting = () => {
    const currentChat = chatHistory.find(c => c.id === currentChatId);
    if (currentChat) {
      return chatSettings.find(c => c.id === currentChat.settingId);
    }
    return null;
  };

  const sendMessage = async () => {
    if (!currentInput.trim() || isLoading || !currentChatId) return;

    const currentChatSetting = getCurrentChatSetting();
    if (!currentChatSetting) return;

    const userMessage = {
      id: Date.now(),
      role: 'user' as const,
      content: currentInput.trim(),
      timestamp: new Date()
    };

    // Add user message to conversation
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setCurrentInput('');
    setIsLoading(true);

    try {
      // Prepare messages for API (include conversation history)
      const recentMessages = messages.slice(-10).map(msg => ({
        role: msg.role === 'assistant' ? 'assistant' as const : 'user' as const,
        content: msg.content
      }));

      // Add new message
      const allMessages = [...recentMessages, { role: 'user' as const, content: userMessage.content }];

      // Call Claude API with the chat settings
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: currentChatSetting.maxTokens,
          temperature: currentChatSetting.temperature,
          top_k: currentChatSetting.topK,
          top_p: currentChatSetting.topP,
          system: currentChatSetting.prompt,
          messages: allMessages
        })
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();
      const assistantResponse = data.content[0].text;

      const assistantMessage: Message = {
        id: Date.now() + 1,
        role: 'assistant',
        content: assistantResponse,
        timestamp: new Date()
      };

      // Update messages
      const finalMessages = [...updatedMessages, assistantMessage];
      setMessages(finalMessages);

      // Update chat history
      setChatHistory(prev => prev.map(chat => 
        chat.id === currentChatId 
          ? { 
              ...chat, 
              messages: finalMessages, 
              title: chat.title === 'New Conversation' ? userMessage.content.slice(0, 40) + '...' : chat.title 
            }
          : chat
      ));

    } catch (error) {
      console.error('Error sending message:', error);
      
      const errorMessage: Message = {
        id: Date.now() + 1,
        role: 'assistant',
        content: 'I apologize, but I encountered an error while processing your request. Please try again.',
        timestamp: new Date(),
        isError: true
      };

      setMessages([...updatedMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const renderStoreSettings = () => (
    <div className="max-w-4xl mx-auto bg-white min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <h1 className="text-2xl font-semibold text-gray-900">Store settings</h1>
        <div className="text-sm text-gray-600">Austin Walker</div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8 px-6">
          <button
            onClick={() => setActiveTab('shipping')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'shipping' 
                ? 'border-blue-500 text-blue-600' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Shipping rules
          </button>
          <button
            onClick={() => setActiveTab('ai')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'ai' 
                ? 'border-blue-500 text-blue-600' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            HealthPlatform AI
          </button>
        </nav>
      </div>

      {/* Content */}
      <div className="p-6">
        {activeTab === 'shipping' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Paid shipping</h3>
              <p className="text-sm text-gray-600 mb-4">Enable shipping calculation for this product.</p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Default shipping price</label>
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-2">$</span>
                    <input type="text" defaultValue="00.00" className="border border-gray-300 rounded px-3 py-2 w-32" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'ai' && (
          <div className="space-y-8">
            {/* Default Chat Setting */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Default Settings</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Default chat settings for new conversations</label>
                  <select
                    value={defaultSetting}
                    onChange={(e) => setDefaultSetting(e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-2 w-full max-w-md"
                  >
                    {chatSettings.map(setting => (
                      <option key={setting.id} value={setting.id}>{setting.name}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Chat Settings Management */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">Chat Settings</h3>
                <button
                  onClick={() => setIsAddingSetting(true)}
                  className="flex items-center space-x-2 text-blue-600 hover:text-blue-700"
                >
                  <Plus className="h-4 w-4" />
                  <span className="text-sm">Add Settings</span>
                </button>
              </div>

              {(isAddingSetting || editingSetting) && (
                <div className="bg-gray-50 border border-gray-200 rounded-md p-6 mb-6">
                  <h4 className="font-medium text-gray-900 mb-4">
                    {isAddingSetting ? 'Add New Settings' : 'Edit Settings'}
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Settings Name</label>
                      <input
                        type="text"
                        value={isAddingSetting ? newChatSetting.name : editingSetting?.name || ''}
                        onChange={(e) => isAddingSetting
                          ? setNewChatSetting({...newChatSetting, name: e.target.value})
                          : editingSetting && setEditingSetting({...editingSetting, name: e.target.value})
                        }
                        className="border border-gray-300 rounded-md px-3 py-2 w-full"
                        placeholder="e.g., Treatment Planning - Creative"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">System Prompt</label>
                      <textarea
                        value={isAddingSetting ? newChatSetting.prompt : editingSetting?.prompt || ''}
                        onChange={(e) => isAddingSetting
                          ? setNewChatSetting({...newChatSetting, prompt: e.target.value})
                          : editingSetting && setEditingSetting({...editingSetting, prompt: e.target.value})
                        }
                        rows={4}
                        className="border border-gray-300 rounded-md px-3 py-2 w-full"
                        placeholder="Enter the system prompt instructions..."
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Temperature</label>
                        <input
                          type="number"
                          min="0"
                          max="2"
                          step="0.1"
                          value={isAddingSetting ? newChatSetting.temperature : editingSetting?.temperature || 0.5}
                          onChange={(e) => {
                            const value = parseFloat(e.target.value);
                            isAddingSetting
                              ? setNewChatSetting({...newChatSetting, temperature: value})
                              : editingSetting && setEditingSetting({...editingSetting, temperature: value});
                          }}
                          className="border border-gray-300 rounded-md px-3 py-2 w-full"
                        />
                        <p className="text-xs text-gray-500 mt-1">0.0 = deterministic, 2.0 = very creative</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Max Tokens</label>
                        <input
                          type="number"
                          min="100"
                          max="4000"
                          step="100"
                          value={isAddingSetting ? newChatSetting.maxTokens : editingSetting?.maxTokens || 2000}
                          onChange={(e) => {
                            const value = parseInt(e.target.value);
                            isAddingSetting
                              ? setNewChatSetting({...newChatSetting, maxTokens: value})
                              : editingSetting && setEditingSetting({...editingSetting, maxTokens: value});
                          }}
                          className="border border-gray-300 rounded-md px-3 py-2 w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Top K</label>
                        <input
                          type="number"
                          min="1"
                          max="100"
                          value={isAddingSetting ? newChatSetting.topK : editingSetting?.topK || 40}
                          onChange={(e) => {
                            const value = parseInt(e.target.value);
                            isAddingSetting
                              ? setNewChatSetting({...newChatSetting, topK: value})
                              : editingSetting && setEditingSetting({...editingSetting, topK: value});
                          }}
                          className="border border-gray-300 rounded-md px-3 py-2 w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Top P</label>
                        <input
                          type="number"
                          min="0"
                          max="1"
                          step="0.1"
                          value={isAddingSetting ? newChatSetting.topP : editingSetting?.topP || 0.9}
                          onChange={(e) => {
                            const value = parseFloat(e.target.value);
                            isAddingSetting
                              ? setNewChatSetting({...newChatSetting, topP: value})
                              : editingSetting && setEditingSetting({...editingSetting, topP: value});
                          }}
                          className="border border-gray-300 rounded-md px-3 py-2 w-full"
                        />
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button
                        onClick={isAddingSetting ? addChatSetting : updateChatSetting}
                        className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700"
                      >
                        {isAddingSetting ? 'Save Settings' : 'Update Settings'}
                      </button>
                      <button
                        onClick={() => {
                          setIsAddingSetting(false);
                          setEditingSetting(null);
                          setNewChatSetting({ name: '', prompt: '', temperature: 0.5, topK: 40, topP: 0.9, maxTokens: 2000 });
                        }}
                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm hover:bg-gray-400"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-3">
                {chatSettings.map(setting => (
                  <div key={setting.id} className="bg-white border border-gray-200 rounded-md p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{setting.name}</h4>
                        <p className="text-sm text-gray-600 mt-1 mb-2">{setting.prompt.substring(0, 150)}...</p>
                        <div className="flex space-x-4 text-xs text-gray-500">
                          <span>Temp: {setting.temperature}</span>
                          <span>Tokens: {setting.maxTokens}</span>
                          <span>Top K: {setting.topK}</span>
                          <span>Top P: {setting.topP}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2 ml-4">
                        <button
                          onClick={() => setEditingSetting(setting)}
                          className="text-blue-600 hover:text-blue-700"
                        >
                          <Edit3 className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => deleteChatSetting(setting.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end space-x-3 pt-6 border-t">
              <button className="bg-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-400">
                Discard
              </button>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                Save settings
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const renderNewChatModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Start New Chat</h3>
        <p className="text-sm text-gray-600 mb-4">Choose the chat settings for this conversation.</p>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Select Settings</label>
          <select
            value={selectedSettingForNewChat}
            onChange={(e) => setSelectedSettingForNewChat(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          >
            {chatSettings.map(setting => (
              <option key={setting.id} value={setting.id}>{setting.name}</option>
            ))}
          </select>
        </div>

        {selectedSettingForNewChat && (
          <div className="bg-gray-50 border border-gray-200 rounded-md p-3 mb-6">
            <div className="text-sm">
              <div className="font-medium text-gray-900 mb-1">
                {chatSettings.find(c => c.id === selectedSettingForNewChat)?.name}
              </div>
              <div className="text-gray-600 mb-2">
                {chatSettings.find(c => c.id === selectedSettingForNewChat)?.prompt.substring(0, 120)}...
              </div>
              <div className="flex space-x-3 text-xs text-gray-500">
                <span>Temp: {chatSettings.find(c => c.id === selectedSettingForNewChat)?.temperature}</span>
                <span>Tokens: {chatSettings.find(c => c.id === selectedSettingForNewChat)?.maxTokens}</span>
              </div>
            </div>
          </div>
        )}

        <div className="flex space-x-3">
          <button
            onClick={createNewChat}
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Start Chat
          </button>
          <button
            onClick={() => setShowNewChatModal(false)}
            className="flex-1 bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );

  const renderChatInterface = () => {
    const currentCombo = getCurrentChatSetting();
    
    return (
      <div className="max-w-full mx-auto bg-white min-h-screen">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <div className="flex items-center space-x-2 text-sm text-gray-600 mb-1">
              <span>Patients</span>
              <span>›</span>
              <span>Austin Walker</span>
            </div>
            <h1 className="text-2xl font-semibold text-gray-900">Austin Walker</h1>
          </div>
          <div className="text-sm text-gray-600">Austin Walker</div>
        </div>

        {/* Patient Tabs */}
        <div className="border-b border-gray-200 px-6">
          <nav className="flex space-x-8">
            <button className="py-4 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 text-sm">
              Patient overview
            </button>
            <button className="py-4 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 text-sm">
              Consultations
            </button>
            <button className="py-4 px-1 border-b-2 border-blue-500 text-blue-600 text-sm font-medium">
              HealthPlatform AI
            </button>
          </nav>
        </div>

        {/* Chat Interface */}
        <div className="flex h-[calc(100vh-200px)]">
          {/* Chat History Sidebar */}
          <div className="w-80 border-r border-gray-200 bg-gray-50">
            <div className="p-4">
              <button 
                onClick={startNewChat}
                className="w-full bg-blue-600 text-white rounded-md py-2 px-4 text-sm font-medium hover:bg-blue-700"
              >
                New chat
              </button>
            </div>
            <div className="px-4 pb-4">
              <h3 className="text-sm font-medium text-gray-900 mb-3">Chat history</h3>
              {chatHistory.length === 0 ? (
                <div className="text-sm text-gray-500 text-center py-4">
                  No conversations yet.<br/>Start a new chat to begin.
                </div>
              ) : (
                <div className="space-y-2">
                  {chatHistory.map(chat => (
                    <div 
                      key={chat.id}
                      onClick={() => switchToChat(chat.id)}
                      className={`border rounded-md p-3 cursor-pointer hover:bg-gray-50 ${
                        currentChatId === chat.id ? 'bg-white border-blue-200' : 'bg-white border-gray-200'
                      }`}
                    >
                      <div className="font-medium text-sm truncate">{chat.title}</div>
                      <div className="text-xs text-blue-600 mt-1">{chat.settingName}</div>
                      <div className="text-xs text-gray-500">{chat.date}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Main Chat Area */}
          <div className="flex-1 flex flex-col">
            {currentChatId && currentCombo ? (
              <>
                {/* Current Settings Display */}
                <div className="border-b border-gray-200 p-4 bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-900">{currentCombo.name}</div>
                      <div className="text-xs text-gray-600 mt-1">
                        Temperature: {currentCombo.temperature} | Max Tokens: {currentCombo.maxTokens}
                      </div>
                    </div>
                    <div className="text-xs text-gray-500">Settings locked for this conversation</div>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 p-6 overflow-y-auto">
                  {messages.length === 0 ? (
                    <div className="text-center">
                      <h2 className="text-xl font-semibold text-gray-900 mb-2">Talk to HealthPlatform AI</h2>
                      <p className="text-gray-600 mb-4">Ask questions, summarize patient history, or get help drafting a treatment plan.</p>
                      <div className="bg-blue-50 border border-blue-200 rounded-md p-3 text-sm text-blue-800 mb-6 max-w-2xl mx-auto">
                        <strong>Using:</strong> {currentCombo.name}
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4 max-w-4xl mx-auto">
                      {messages.map((message) => (
                        <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                          <div className={`max-w-3xl px-4 py-3 rounded-lg ${
                            message.role === 'user' 
                              ? 'bg-blue-600 text-white' 
                              : message.isError
                              ? 'bg-red-50 border border-red-200 text-red-800'
                              : 'bg-gray-100 text-gray-900'
                          }`}>
                            <div className="whitespace-pre-wrap">{message.content}</div>
                            <div className={`text-xs mt-2 ${
                              message.role === 'user' ? 'text-blue-100' : 'text-gray-500'
                            }`}>
                              {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                            </div>
                          </div>
                        </div>
                      ))}
                      {isLoading && (
                        <div className="flex justify-start">
                          <div className="bg-gray-100 text-gray-900 max-w-3xl px-4 py-3 rounded-lg">
                            <div className="flex items-center space-x-2">
                              <Loader2 className="h-4 w-4 animate-spin" />
                              <span>Thinking...</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Message Input */}
                <div className="border-t border-gray-200 p-4">
                  <div className="flex space-x-3 max-w-4xl mx-auto">
                    <textarea
                      value={currentInput}
                      onChange={(e) => setCurrentInput(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="How can I help you today?"
                      className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                      rows={1}
                      disabled={isLoading}
                    />
                    <button 
                      onClick={sendMessage}
                      disabled={!currentInput.trim() || isLoading}
                      className="bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                    >
                      {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                      <span>{isLoading ? 'Sending...' : 'Send'}</span>
                    </button>
                  </div>
                  <div className="text-xs text-gray-500 text-center mt-2">
                    Powered by Claude Sonnet 4 • {currentCombo.name}
                  </div>
                </div>
              </>
            ) : (
              // No chat selected state
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">Welcome to HealthPlatform AI</h2>
                  <p className="text-gray-600 mb-6">Select a conversation from the sidebar or start a new chat to begin.</p>
                  <button
                    onClick={startNewChat}
                    className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
                  >
                    Start New Chat
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* New Chat Modal */}
        {showNewChatModal && renderNewChatModal()}
      </div>
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navigation */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="flex space-x-4">
          <button
            onClick={() => setActiveView('settings')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md ${
              activeView === 'settings' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Settings className="h-4 w-4" />
            <span>Store Settings</span>
          </button>
          <button
            onClick={() => setActiveView('chat')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md ${
              activeView === 'chat' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <MessageSquare className="h-4 w-4" />
            <span>Patient Chat</span>
          </button>
        </div>
      </div>

      {/* Content */}
      {activeView === 'settings' ? renderStoreSettings() : renderChatInterface()}
    </div>
  );
};

export default HealthPlatformAIApp;