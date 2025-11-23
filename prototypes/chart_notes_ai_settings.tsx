import React, { useState } from 'react';

const ChartNotesAISettings = () => {
  const [activeTab, setActiveTab] = useState('Chart Notes AI');
  const [settings, setSettings] = useState({
    model: 'claude-sonnet-4',
    temperature: 0.7
  });

  const tabs = [
    'Shipping rules',
    'HealthPlatform AI', 
    'Chart Notes AI',
    'Dosespot settings',
    'Pharmacies',
    'Discount Codes'
  ];

  const handleSaveSettings = () => {
    console.log('Saving Chart Notes AI settings:', settings);
    // Simulate save success
    alert('Chart Notes AI settings saved successfully!');
  };

  const handleModelChange = (e) => {
    setSettings(prev => ({
      ...prev,
      model: e.target.value
    }));
  };

  const handleTemperatureChange = (e) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && value >= 0 && value <= 1) {
      setSettings(prev => ({
        ...prev,
        temperature: value
      }));
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Store settings</h1>
          </div>
          <div className="text-sm text-gray-600">
            Austin Walker
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200 bg-white px-6">
        <nav className="flex space-x-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 px-1 text-sm font-medium whitespace-nowrap ${
                activeTab === tab
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* Chart Notes AI Configuration Content */}
      {activeTab === 'Chart Notes AI' && (
        <div className="px-6 py-8">
          <div className="max-w-2xl">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-6">Chart Notes AI Configuration</h2>
              
              <div className="space-y-6">
                {/* Model Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    AI Model
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="model"
                        value="claude-sonnet-4"
                        checked={settings.model === 'claude-sonnet-4'}
                        onChange={handleModelChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <span className="ml-3 text-sm text-gray-700">
                        <span className="font-medium">Claude Sonnet 4</span>
                        <span className="text-gray-500 ml-2">- Balanced performance and efficiency</span>
                      </span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="model"
                        value="claude-opus-4"
                        checked={settings.model === 'claude-opus-4'}
                        onChange={handleModelChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <span className="ml-3 text-sm text-gray-700">
                        <span className="font-medium">Claude Opus 4</span>
                        <span className="text-gray-500 ml-2">- Highest quality clinical reasoning</span>
                      </span>
                    </label>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Model selection affects AI reasoning quality and response generation speed for SOAP notes.
                  </p>
                </div>

                {/* Temperature */}
                <div>
                  <label htmlFor="temperature" className="block text-sm font-medium text-gray-700 mb-2">
                    Temperature
                  </label>
                  <input
                    type="number"
                    id="temperature"
                    min="0"
                    max="1"
                    step="0.1"
                    value={settings.temperature}
                    onChange={handleTemperatureChange}
                    className="w-32 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Response creativity (0.0 = deterministic, 1.0 = creative). Recommended: 0.3-0.7 for clinical documentation.
                  </p>
                </div>

                {/* Current Settings Summary */}
                <div className="bg-gray-50 rounded-md p-4 mt-6">
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Current Configuration</h3>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>
                      <span className="font-medium">Model:</span> {
                        settings.model === 'claude-sonnet-4' ? 'Claude Sonnet 4' : 'Claude Opus 4'
                      }
                    </div>
                    <div>
                      <span className="font-medium">Temperature:</span> {settings.temperature}
                    </div>
                  </div>
                </div>
              </div>

              {/* Save Button */}
              <div className="mt-8">
                <button
                  onClick={handleSaveSettings}
                  className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  Save settings
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Other Tabs Content (Placeholder) */}
      {activeTab !== 'Chart Notes AI' && (
        <div className="px-6 py-8">
          <div className="text-center py-8 text-gray-500">
            <h3 className="text-lg font-medium mb-2">{activeTab}</h3>
            <p>Content for {activeTab} would appear here.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChartNotesAISettings;