import React, { useState } from 'react';

export default function EscalatingDoseProductForm() {
  const [treatmentType, setTreatmentType] = useState('');
  const [autoAdvance, setAutoAdvance] = useState(false);
  const [showOnStore, setShowOnStore] = useState(true);
  const [requiresPrescription, setRequiresPrescription] = useState(true);

  const isEscalatingProtocol = treatmentType === 'escalating-dose-protocol';

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <button className="text-gray-500 hover:text-gray-700">← Back</button>
          <h1 className="text-2xl font-semibold">Add product</h1>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">On store</span>
          <button 
            onClick={() => setShowOnStore(!showOnStore)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${showOnStore ? 'bg-blue-600' : 'bg-gray-200'}`}
          >
            <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${showOnStore ? 'translate-x-6' : 'translate-x-1'}`} />
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="space-y-6">
        <section>
          <h2 className="text-lg font-medium mb-4">Product Details</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
              <input 
                type="text" 
                placeholder="Type product name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subtitle</label>
              <input 
                type="text" 
                placeholder="Short description"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Badge name</label>
              <input 
                type="text" 
                placeholder="e.g. Top Seller"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Slug</label>
              <div className="flex items-center">
                <span className="text-gray-500 text-sm mr-2">🔗</span>
                <input 
                  type="text" 
                  placeholder="product-slug"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Marketing Description</label>
              <textarea 
                rows={3}
                placeholder="Enter a simplified product description for customers, avoid product detail jargon etc"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </section>

        {/* Treatment Configuration */}
        <section className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Disease state</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Choose disease state</option>
              <option>Diabetes Management</option>
              <option>Weight Management</option>
              <option>General Health</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Treatment type</label>
            <select 
              value={treatmentType}
              onChange={(e) => setTreatmentType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select treatment type</option>
              <option value="prescription-medication">Prescription medication</option>
              <option value="topical-treatment">Topical treatment</option>
              <option value="supplement">Supplement</option>
              <option value="compound-medication">Compound Medication</option>
              <option value="escalating-dose-protocol">Escalating dose protocol</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Treatment Use</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Select treatment use</option>
              <option>Weight Management</option>
              <option>Diabetes Control</option>
              <option>Preventive/Cyclic medication</option>
            </select>
          </div>
        </section>

        {/* Pharmacy Partner */}
        <section>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Pharmacy partner</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Select a Pharmacy...</option>
              <option>Partner Pharmacy A</option>
              <option>Partner Pharmacy B</option>
            </select>
            <p className="text-sm text-gray-500 mt-1">Select the pharmacy partner responsible for fulfilling this product. This affects pricing, shipping, and compliance requirements.</p>
          </div>

          <div className="flex items-center gap-2 mt-4">
            <button 
              onClick={() => setRequiresPrescription(!requiresPrescription)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${requiresPrescription ? 'bg-blue-600' : 'bg-gray-200'}`}
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${requiresPrescription ? 'translate-x-6' : 'translate-x-1'}`} />
            </button>
            <span className="text-sm text-gray-700">This product requires a prescription</span>
          </div>

          {requiresPrescription && (
            <div className="mt-2 p-3 bg-orange-50 border border-orange-200 rounded-md">
              <p className="text-sm text-orange-800">
                <strong>Prescription Required:</strong> This product will require provider approval and will be fulfilled through the selected pharmacy partner.
              </p>
            </div>
          )}
        </section>

        {/* Primary product ingredients */}
        <section>
          <h3 className="text-lg font-medium mb-4">Primary product ingredients</h3>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Ingredient 1</label>
              <input 
                type="text" 
                placeholder="Medication/ingredient name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="text-blue-600 text-sm hover:text-blue-700">Add ingredient</button>
          </div>
        </section>

        {/* Product Variant - Enhanced for Escalating Protocols */}
        <section>
          <h3 className="text-lg font-medium mb-4">Product variant</h3>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-4">
              <button 
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors bg-blue-600`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6`} />
              </button>
              <span className="text-sm font-medium">Show on store</span>
            </div>

            {/* Standard Fields */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Form factor</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Injectable</option>
                  <option>Oral</option>
                  <option>Topical</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Units</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>mg</option>
                  <option>ml</option>
                  <option>units</option>
                </select>
              </div>
            </div>

            {/* Protocol-Specific Fields */}
            {isEscalatingProtocol && (
              <div className="space-y-4 p-4 bg-blue-50 border border-blue-200 rounded-md mb-4">
                <h4 className="font-medium text-blue-900">Protocol Configuration</h4>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Current Dosage</label>
                    <input 
                      type="text" 
                      placeholder="e.g., 0.25mg, 0.5mg, 1.0mg"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phase Duration (days)</label>
                    <input 
                      type="number" 
                      placeholder="28"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Billing Cycle (days)</label>
                    <input 
                      type="number" 
                      placeholder="28"
                      defaultValue="28"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Billing Offset (days before)</label>
                    <input 
                      type="number" 
                      placeholder="7"
                      defaultValue="7"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setAutoAdvance(!autoAdvance)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${autoAdvance ? 'bg-blue-600' : 'bg-gray-200'}`}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${autoAdvance ? 'translate-x-6' : 'translate-x-1'}`} />
                  </button>
                  <span className="text-sm text-gray-700">Automatically advance to next dosage</span>
                </div>

                {autoAdvance && (
                  <div className="space-y-4 ml-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Next Variant</label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                          <option value="">Select next variant...</option>
                          <option value="variant-1">Variant 1 (0.25mg) - Current</option>
                          <option value="variant-2">Variant 2 (0.5mg)</option>
                          <option value="variant-3">Variant 3 (1.0mg)</option>
                          <option value="variant-4">Variant 4 (1.5mg)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Cycles Before Advance</label>
                        <input 
                          type="number" 
                          placeholder="1"
                          defaultValue="1"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div className="p-3 bg-gray-50 border border-gray-200 rounded-md">
                      <p className="text-sm text-gray-700">
                        <strong>Protocol Logic:</strong> After the specified cycles, subscription will automatically advance to the selected variant. 
                        Select the same variant for maintenance (no progression).
                      </p>
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <h5 className="text-sm font-medium text-gray-700">Patient Guidance</h5>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                      <span className="text-sm text-gray-700">Recommended starting dosage for new patients</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                      <span className="text-sm text-gray-700">Suitable for patients transferring from other providers</span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Standard Variant Fields */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
                <input 
                  type="number" 
                  placeholder="1"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Supply</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>30 day</option>
                  <option>28 day</option>
                  <option>90 day</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Billing cycle</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Every 30 days</option>
                  <option>Every 28 days</option>
                  <option>Every 90 days</option>
                  <option>One Time Payment</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Refills</label>
                <input 
                  type="number" 
                  placeholder="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                <div className="relative">
                  <span className="absolute left-3 top-2 text-gray-500">$</span>
                  <input 
                    type="number" 
                    placeholder="221"
                    className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Compare at price</label>
                <div className="relative">
                  <span className="absolute left-3 top-2 text-gray-500">$</span>
                  <input 
                    type="number" 
                    placeholder="00.00"
                    className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            <button className="mt-4 text-blue-600 text-sm hover:text-blue-700">Add variant</button>
          </div>
        </section>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-6">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Save product
          </button>
          <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Discard
          </button>
        </div>
      </div>
    </div>
  );
}