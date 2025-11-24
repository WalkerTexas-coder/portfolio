import React, { useState } from 'react';
import { Plus, Edit3, Trash2, Save } from 'lucide-react';

type Template = {
  id: number;
  name: string;
  content: string;
  lastModified: string;
};

const StoreSettings = () => {
  const [activeTab, setActiveTab] = useState('ai');
  const [systemRole, setSystemRole] = useState(true);
  const [maxTokens, setMaxTokens] = useState('8000');
  const [temperature, setTemperature] = useState('1');
  const [thinkingBudget, setThinkingBudget] = useState('2000');
  
  const [templates, setTemplates] = useState<Template[]>([
    {
      id: 1,
      name: 'Patient Assessment',
      content: `## Patient Assessment Template

**Chief Complaint:** 

**History of Present Illness:**

**Past Medical History:**

**Current Medications:**

**Allergies:**

**Physical Examination:**

**Assessment & Plan:**`,
      lastModified: '2025-01-15'
    },
    {
      id: 2,
      name: 'Treatment Plan',
      content: `## Treatment Plan Template

**Diagnosis:**

**Treatment Goals:**
1. 
2. 
3. 

**Recommended Interventions:**

**Follow-up Schedule:**

**Patient Education Points:**`,
      lastModified: '2025-01-14'
    },
    {
      id: 3,
      name: 'Consultation Note',
      content: `## Consultation Note Template

**Consultation Date:**

**Referring Provider:**

**Reason for Consultation:**

**Clinical Findings:**

**Recommendations:**

**Return to Care Instructions:**`,
      lastModified: '2025-01-12'
    }
  ]);
  
  const [showTemplateEditor, setShowTemplateEditor] = useState(false);
  const [editingTemplate, setEditingTemplate] = useState<Template | null>(null);
  const [newTemplateName, setNewTemplateName] = useState('');
  const [newTemplateContent, setNewTemplateContent] = useState('');

  const handleCreateTemplate = () => {
    setEditingTemplate(null);
    setNewTemplateName('');
    setNewTemplateContent('## New Template\n\n');
    setShowTemplateEditor(true);
  };

  const handleEditTemplate = (template: Template) => {
    setEditingTemplate(template);
    setNewTemplateName(template.name);
    setNewTemplateContent(template.content);
    setShowTemplateEditor(true);
  };

  const handleSaveTemplate = () => {
    if (editingTemplate) {
      setTemplates(templates.map(t => 
        t.id === editingTemplate.id 
          ? { ...t, name: newTemplateName, content: newTemplateContent, lastModified: new Date().toISOString().split('T')[0] }
          : t
      ));
    } else {
      const newTemplate = {
        id: Date.now(),
        name: newTemplateName,
        content: newTemplateContent,
        lastModified: new Date().toISOString().split('T')[0]
      };
      setTemplates([...templates, newTemplate]);
    }
    setShowTemplateEditor(false);
  };

  const handleDeleteTemplate = (templateId: number) => {
    setTemplates(templates.filter(t => t.id !== templateId));
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
                Messages
              </a>
              <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50">
                Products
              </a>
              <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50">
                Orders and Services
              </a>
              <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-900 bg-gray-100 rounded-md">
                Store settings
              </a>
              <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50">
                Medical Care
              </a>
              <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50">
                Patients
              </a>
              <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50">
                Users
              </a>
            </div>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Store settings</h2>
          
          {/* Tabs */}
          <div className="border-b border-gray-200 mb-6">
            <nav className="-mb-px flex space-x-8">
              <button 
                onClick={() => setActiveTab('shipping')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'shipping' 
                    ? 'border-blue-500 text-blue-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Shipping rules
              </button>
              <button 
                onClick={() => setActiveTab('ai')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'ai' 
                    ? 'border-blue-500 text-blue-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                HealthPlatform AI
              </button>
              <button 
                onClick={() => setActiveTab('dosespot')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'dosespot' 
                    ? 'border-blue-500 text-blue-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Dosespot settings
              </button>
            </nav>
          </div>

          {/* AI Configuration Content */}
          {activeTab === 'ai' && (
            <div className="space-y-8">
              {/* AI Configuration Section */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">AI Configuration</h3>
                
                <div className="space-y-6">
                  {/* System Role Toggle */}
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-sm font-medium text-gray-700">System Role</label>
                      <p className="text-sm text-gray-500">Enable system role.</p>
                    </div>
                    <div className="flex items-center">
                      <button
                        onClick={() => setSystemRole(!systemRole)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                          systemRole ? 'bg-blue-600' : 'bg-gray-200'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            systemRole ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  {/* System Role Text */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">System Role</label>
                    <textarea
                      className="w-full p-3 border border-gray-300 rounded-md h-32 text-sm"
                      value="You are Claude, AI medical assistant for HealthPlatform telehealth platform serving internal staff and healthcare professionals only—never patients directly.

**MISSION:** Transform patient data into evidence-based medical documentation using clinical reasoning, pattern recognition, and differential diagnosis. Evaluate symptoms critically, question self-diagnoses, maintain rigorous standards with confidence-weighted assessments.

**CLINICAL FRAMEWORK**"
                      readOnly
                    />
                    <p className="text-sm text-gray-500 mt-1">4097/5000</p>
                  </div>

                  {/* Configuration Settings */}
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Max Tokens per Message</label>
                      <input
                        type="number"
                        value={maxTokens}
                        onChange={(e) => setMaxTokens(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md"
                      />
                      <p className="text-sm text-gray-500 mt-1">Maximum length of AI responses (100-8000)</p>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Temperature</label>
                      <input
                        type="number"
                        value={temperature}
                        onChange={(e) => setTemperature(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md"
                        step="0.1"
                        min="0"
                        max="2"
                      />
                      <p className="text-sm text-gray-500 mt-1">Response creativity (0.0 = deterministic, 1.0 = creative)</p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Thinking Budget (Tokens)</label>
                    <input
                      type="number"
                      value={thinkingBudget}
                      onChange={(e) => setThinkingBudget(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-md"
                    />
                    <p className="text-sm text-gray-500 mt-1">Tokens allocated for extended thinking (1024-8000)</p>
                  </div>
                </div>
              </div>

              {/* Template Library Section */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900">Template Library</h3>
                  <button
                    onClick={handleCreateTemplate}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    <Plus size={16} />
                    New Template
                  </button>
                </div>

                {/* Templates Grid */}
                <div className="grid grid-cols-1 gap-4">
                  {templates.map((template) => (
                    <div key={template.id} className="border border-gray-200 rounded-lg p-4 bg-white">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 mb-1">{template.name}</h4>
                          <p className="text-sm text-gray-500 mb-2">Last modified: {template.lastModified}</p>
                          <div className="text-sm text-gray-600 bg-gray-50 p-2 rounded border max-h-24 overflow-hidden">
                            <pre className="whitespace-pre-wrap font-mono text-xs">{template.content.substring(0, 150)}...</pre>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 ml-4">
                          <button
                            onClick={() => handleEditTemplate(template)}
                            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded"
                          >
                            <Edit3 size={16} />
                          </button>
                          <button
                            onClick={() => handleDeleteTemplate(template.id)}
                            className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Save Button */}
              <div className="flex justify-start">
                <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Save settings
                </button>
              </div>
            </div>
          )}

          {/* Other tab contents */}
          {activeTab === 'shipping' && (
            <div className="text-gray-500">Shipping rules configuration would go here...</div>
          )}
          {activeTab === 'dosespot' && (
            <div className="text-gray-500">Dosespot settings would go here...</div>
          )}
        </div>
      </div>

      {/* Template Editor Modal */}
      {showTemplateEditor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[80vh] overflow-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">
                {editingTemplate ? 'Edit Template' : 'Create New Template'}
              </h3>
              <button
                onClick={() => setShowTemplateEditor(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <span className="sr-only">Close</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Template Name</label>
                <input
                  type="text"
                  value={newTemplateName}
                  onChange={(e) => setNewTemplateName(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter template name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Template Content (Markdown)</label>
                <textarea
                  value={newTemplateContent}
                  onChange={(e) => setNewTemplateContent(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md font-mono text-sm"
                  rows={12}
                  placeholder="Enter your template content in markdown format..."
                />
              </div>
            </div>
            
            <div className="flex items-center justify-end gap-3 mt-6">
              <button
                onClick={() => setShowTemplateEditor(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveTemplate}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                <Save size={16} className="inline mr-2" />
                Save Template
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StoreSettings;