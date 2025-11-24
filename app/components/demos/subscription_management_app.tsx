import React, { useState } from 'react';
import PrototypeShowcase from '../PrototypeShowcase';

const SubscriptionManager = () => {
  const [currentView, setCurrentView] = useState('details'); // 'details' or 'edit'
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState('variant-1');
  
  // Original subscription data
  const subscriptionData = {
    id: 'HP-1027-S-1',
    patient: 'Austin Walker',
    patientId: '100062672',
    product: 'MigraCream™',
    medications: [
      { name: 'Ketorolac', dose: 1, unit: '%' },
      { name: 'Metoclopramide', dose: 0.5, unit: '%' },
      { name: 'Lidocaine', dose: 4, unit: '%' }
    ],
    quantity: 1,
    supply: 'every 90 days',
    billingCycle: 'every 90 days',
    nextBilledDate: '10/13/2025',
    disease: 'Migraine',
    status: 'Awaiting Review',
    refills: '--',
    formFactor: 'Creams',
    treatmentType: 'Prescription medication',
    treatmentUse: 'Abortive/PRN (As Needed)',
    patientDirections: 'Apply thin layer to affected area as needed for migraine pain. Do not exceed 4 applications per day.',
    pharmacyNotes: 'Patient has sensitive skin - please use hypoallergenic base if available.'
  };

  // Available variants for the product
  const availableVariants = [
    {
      id: 'variant-1',
      name: 'Standard Strength',
      sku: 'KETxLIDxMET001-004-005CRMCPD90-90',
      medications: [
        { name: 'Ketorolac', dose: 1, unit: '%' },
        { name: 'Metoclopramide', dose: 0.5, unit: '%' },
        { name: 'Lidocaine', dose: 4, unit: '%' }
      ],
      quantity: 1,
      supply: '90 days',
      refills: 3,
      treatmentType: 'Prescription medication',
      treatmentUse: 'Abortive/PRN (As Needed)'
    },
    {
      id: 'variant-2',
      name: 'Double Strength',
      sku: 'KETxLIDxMET002-008-010CRMCPD90-90',
      medications: [
        { name: 'Ketorolac', dose: 2, unit: '%' },
        { name: 'Metoclopramide', dose: 1, unit: '%' },
        { name: 'Lidocaine', dose: 8, unit: '%' }
      ],
      quantity: 1,
      supply: '90 days',
      refills: 3,
      treatmentType: 'Prescription medication',
      treatmentUse: 'Abortive/PRN (As Needed)'
    }
  ];

  // Editable form data - initialized with original subscription data
  const [editData, setEditData] = useState({
    treatmentType: subscriptionData.treatmentType,
    treatmentUse: subscriptionData.treatmentUse,
    medications: [...subscriptionData.medications],
    quantity: subscriptionData.quantity,
    supply: '90 days', // Convert from 'every 90 days' to '90 days'
    refills: 3, // Convert from '--' to actual number
    patientDirections: subscriptionData.patientDirections,
    pharmacyNotes: subscriptionData.pharmacyNotes
  });

  // Handler functions
  const handleEditClick = () => {
    setCurrentView('edit');
  };

  const handleVariantChange = (variantId: string) => {
    const selectedVariantData = availableVariants.find(v => v.id === variantId);
    if (selectedVariantData) {
      setSelectedVariant(variantId);
      setEditData({
        ...editData,
        treatmentType: selectedVariantData.treatmentType,
        treatmentUse: selectedVariantData.treatmentUse,
        medications: [...selectedVariantData.medications],
        quantity: selectedVariantData.quantity,
        supply: selectedVariantData.supply,
        refills: selectedVariantData.refills
      });
    }
  };

  const handleSaveChanges = () => {
    console.log('Saving changes:', editData);
    setCurrentView('details');
  };

  const handleCancel = () => {
    // Reset edit data to original values
    setEditData({
      treatmentType: subscriptionData.treatmentType,
      treatmentUse: subscriptionData.treatmentUse,
      medications: [...subscriptionData.medications],
      quantity: subscriptionData.quantity,
      supply: '90 days',
      refills: 3,
      patientDirections: subscriptionData.patientDirections,
      pharmacyNotes: subscriptionData.pharmacyNotes
    });
    setSelectedVariant('variant-1');
    setCurrentView('details');
  };

  const handleSaveAsVariant = () => {
    console.log('Saving as new variant (hidden from store):', editData);
    setShowDropdown(false);
    setCurrentView('details');
  };

  const handleApprove = () => {
    console.log('Approving subscription');
  };

  const handleDenyRequest = () => {
    console.log('Denying subscription');
  };

  const updateMedicationDose = (index: number, newDose: string) => {
    const updatedMedications = [...editData.medications];
    updatedMedications[index].dose = parseFloat(newDose);
    setEditData({ ...editData, medications: updatedMedications });
  };

  const updateMedicationUnit = (index: number, newUnit: string) => {
    const updatedMedications = [...editData.medications];
    updatedMedications[index].unit = newUnit;
    setEditData({ ...editData, medications: updatedMedications });
  };

  // Details View
  if (currentView === 'details') {
    return (
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200 p-6 m-4">
        {/* Header */}
        <div className="flex items-center mb-6 pb-4 border-b border-gray-200">
          <button className="text-blue-600 text-sm mr-4 hover:text-blue-800 flex items-center">
            ← Back to Subscriptions
          </button>
        </div>

        {/* Patient Info */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            {subscriptionData.patient} <span className="text-gray-500 text-lg">(Dosespot Patient ID {subscriptionData.patientId})</span>
          </h1>
        </div>

        {/* Subscription Details Card */}
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Subscription</h2>
          
          <div className="space-y-6">
            {/* Basic Info */}
            <div>
              <div className="text-sm font-medium text-gray-700 mb-1">Subscription ID</div>
              <div className="text-gray-900">{subscriptionData.id}</div>
            </div>

            <div>
              <div className="text-sm font-medium text-gray-700 mb-1">Status</div>
              <div className="text-orange-600 font-medium">{subscriptionData.status}</div>
            </div>

            {/* Product Details Section */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-md font-semibold text-gray-900 mb-4">Product Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm font-medium text-gray-700 mb-1">Product</div>
                  <div className="text-gray-900">{subscriptionData.product}</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-700 mb-1">Form Factor</div>
                  <div className="text-gray-900">{subscriptionData.formFactor}</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-700 mb-1">Disease State</div>
                  <div className="text-gray-900">{subscriptionData.disease}</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-700 mb-1">Treatment Type</div>
                  <div className="text-gray-900">{subscriptionData.treatmentType}</div>
                </div>
              </div>
            </div>

            {/* Medication Composition Section */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-md font-semibold text-gray-900 mb-4">Medication Composition</h3>
              <div className="space-y-3">
                {subscriptionData.medications.map((med, index) => (
                  <div key={med.name} className="flex justify-between items-center bg-white p-3 rounded border">
                    <div className="font-medium text-gray-900">{med.name}</div>
                    <div className="text-gray-700">{med.dose}{med.unit}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Prescription Details Section */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-md font-semibold text-gray-900 mb-4">Prescription Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm font-medium text-gray-700 mb-1">Quantity</div>
                  <div className="text-gray-900">{subscriptionData.quantity}</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-700 mb-1">Supply Duration</div>
                  <div className="text-gray-900">{subscriptionData.supply}</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-700 mb-1">Refills</div>
                  <div className="text-gray-900">{subscriptionData.refills}</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-700 mb-1">Treatment Use</div>
                  <div className="text-gray-900">{subscriptionData.treatmentUse}</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-700 mb-1">Next billed date</div>
                  <div className="text-gray-900">{subscriptionData.nextBilledDate}</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-700 mb-1">Billing cycle</div>
                  <div className="text-gray-900">{subscriptionData.billingCycle}</div>
                </div>
              </div>
            </div>

            {/* Instructions Section */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-md font-semibold text-gray-900 mb-4">Instructions</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-medium text-gray-700 mb-2">Patient Directions</div>
                  <div className="text-gray-900 text-sm bg-white p-3 rounded border">
                    {subscriptionData.patientDirections}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-700 mb-2">Notes to Pharmacy</div>
                  <div className="text-gray-900 text-sm bg-white p-3 rounded border">
                    {subscriptionData.pharmacyNotes}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <button 
            onClick={handleApprove}
            className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 font-medium"
          >
            Approve
          </button>
          <button 
            onClick={handleDenyRequest}
            className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 font-medium"
          >
            Deny request
          </button>
          <button 
            onClick={handleEditClick}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
          >
            Edit Request
          </button>
        </div>
      </div>
    );
  }

  // Edit View
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200 p-6 m-4">
      {/* Header with dropdown menu */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
        <div className="flex items-center">
          <button 
            onClick={handleCancel}
            className="text-blue-600 text-sm mr-4 hover:text-blue-800 flex items-center"
          >
            ← Back to Subscription
          </button>
          <h1 className="text-2xl font-semibold text-gray-900">Edit Subscription Request</h1>
        </div>
        
        {/* Three dots menu */}
        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full focus:outline-none"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
          </button>
          
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-10">
              <button
                onClick={handleSaveAsVariant}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
              >
                Save as new variant
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="space-y-8">
        {/* Variant Selection */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Select Product Variant</h2>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-2">Available Variants</label>
            <select 
              value={selectedVariant}
              onChange={(e) => handleVariantChange(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {availableVariants.map((variant) => (
                <option key={variant.id} value={variant.id}>
                  {variant.name} - {variant.medications.map(med => `${med.name} ${med.dose}${med.unit}`).join(' + ')}
                </option>
              ))}
            </select>
            <div className="text-xs text-gray-500 italic mt-1">
              Changing variant will update all form fields with the selected variant's values
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Product Details</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Product Name</label>
              <input 
                type="text" 
                value={subscriptionData.product} 
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-500 cursor-not-allowed" 
                disabled 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Form Factor</label>
              <input 
                type="text" 
                value={subscriptionData.formFactor} 
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-500 cursor-not-allowed" 
                disabled 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Disease State</label>
              <input 
                type="text" 
                value={subscriptionData.disease} 
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-500 cursor-not-allowed" 
                disabled 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Treatment Type</label>
              <select 
                value={editData.treatmentType}
                onChange={(e) => setEditData({...editData, treatmentType: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option>Prescription medication</option>
                <option>Topical treatment</option>
                <option>Supplement</option>
                <option>Compound Medication</option>
              </select>
            </div>
          </div>
        </div>

        {/* Medication Composition */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Medication Composition</h2>
          <div className="space-y-4">
            {editData.medications.map((medication, index) => (
              <div key={medication.name}>
                <div className="grid grid-cols-3 gap-4 items-end">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Medication Name</label>
                    <input 
                      type="text" 
                      value={medication.name} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-500 cursor-not-allowed" 
                      disabled 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Dosage</label>
                    <input 
                      type="number" 
                      value={medication.dose} 
                      onChange={(e) => updateMedicationDose(index, e.target.value)}
                      step="0.1" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Units</label>
                    <select 
                      value={medication.unit}
                      onChange={(e) => updateMedicationUnit(index, e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option>%</option>
                      <option>mg</option>
                      <option>ml</option>
                    </select>
                  </div>
                </div>
                <div className="text-xs text-gray-500 italic mt-1 ml-0">
                  Original: {subscriptionData.medications[index].dose}{subscriptionData.medications[index].unit}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Prescription Details */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Prescription Details</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
              <input 
                type="number" 
                value={editData.quantity} 
                onChange={(e) => setEditData({...editData, quantity: parseInt(e.target.value)})}
                min="1" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
              />
              <div className="text-xs text-gray-500 italic mt-1">Original: {subscriptionData.quantity}</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Supply Duration</label>
              <select 
                value={editData.supply}
                onChange={(e) => setEditData({...editData, supply: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option>30 days</option>
                <option>60 days</option>
                <option>90 days</option>
              </select>
              <div className="text-xs text-gray-500 italic mt-1">Original: 90 days</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Refills</label>
              <input 
                type="number" 
                value={editData.refills} 
                onChange={(e) => setEditData({...editData, refills: parseInt(e.target.value)})}
                min="0" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
              />
              <div className="text-xs text-gray-500 italic mt-1">Original: {subscriptionData.refills}</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Treatment Use</label>
              <select 
                value={editData.treatmentUse}
                onChange={(e) => setEditData({...editData, treatmentUse: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option>Abortive/PRN (As Needed)</option>
                <option>Abortive/Fixed Schedule</option>
                <option>Adjunctive/Daily</option>
                <option>Adjunctive/PRN</option>
                <option>Breakthrough/PRN</option>
                <option>Maintenance/BID</option>
                <option>Maintenance/Daily</option>
                <option>Maintenance/QID</option>
                <option>Maintenance/TID</option>
                <option>Preventative/Cyclic</option>
                <option>Preventative/Daily</option>
                <option>Preventative/Seasonal</option>
                <option>Rescue/Emergency</option>
              </select>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Instructions</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Patient Directions</label>
              <textarea
                value={editData.patientDirections}
                onChange={(e) => setEditData({...editData, patientDirections: e.target.value})}
                rows={3} 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                placeholder="Enter patient directions for medication use..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Notes to Pharmacy</label>
              <textarea
                value={editData.pharmacyNotes}
                onChange={(e) => setEditData({...editData, pharmacyNotes: e.target.value})}
                rows={3} 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                placeholder="Enter any special instructions for pharmacy..."
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action Buttons */}
      <div className="flex space-x-3 mt-8 pt-6 border-t border-gray-200">
        <button 
          onClick={handleSaveChanges}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
        >
          Save Changes
        </button>
        <button 
          onClick={handleCancel}
          className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 font-medium"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

// Wrap the component with PrototypeShowcase
const SubscriptionManagementApp = () => {
  return (
    <PrototypeShowcase
      title="Subscription Management"
      description="Demonstrates variant-based subscription architecture with clinical workflow integration. Providers can select between pre-configured variants or customize medication dosages while maintaining audit trail compliance."
    >
      <SubscriptionManager />
    </PrototypeShowcase>
  );
};

export default SubscriptionManagementApp;