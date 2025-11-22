import React, { useState } from 'react';
import { Send, Package, Clock, CheckCircle, AlertCircle, Copy, Check } from 'lucide-react';

const PharmacyFulfillmentView = () => {
  const [selectedMedications, setSelectedMedications] = useState([]);
  const [currentPharmacyIndex, setCurrentPharmacyIndex] = useState(0);
  const [medicationStatuses, setMedicationStatuses] = useState({
    1: 'Ready to Send',
    2: 'Ready to Send', 
    3: 'Ready to Send',
    4: 'Ready to Send',
    5: 'Ready to Send',
    6: 'Ready to Send'
  });
  const [copiedField, setCopiedField] = useState(null);

  const approvedMedications = [
    {
      id: 1,
      orderId: 'HP-1020-S-1',
      orderType: 'Subscription',
      name: 'IndoRelief™ + Magnesium',
      dosage: 'Indomethacin 150mg + Magnesium 20mg + Rizatriptan 8mg',
      pharmacy: 'Crafted RX',
      approvalDate: '04/08/2025',
      prescriber: 'Dr. Austin Walker',
      quantity: '12 capsules',
      supply: 'Every 90 Days',
      pharmacyNotes: 'Compounded capsules. Store in cool, dry place. Patient has sensitivity to red dye - use white capsules only.',
      dispensingNotes: 'Take with food to reduce stomach irritation. Maximum 2 capsules per day. Call if severe nausea occurs.'
    },
    {
      id: 4,
      orderId: 'HP-1022-S-1',
      orderType: 'Subscription',
      name: 'Custom Migraine Complex',
      dosage: 'Propranolol 40mg + Magnesium 400mg',
      pharmacy: 'Crafted RX',
      approvalDate: '04/05/2025',
      prescriber: 'Dr. Austin Walker',
      quantity: '30 capsules',
      supply: 'Every 30 Days',
      pharmacyNotes: 'Special formulation. Use vegetarian capsules. Patient allergic to gelatin.',
      dispensingNotes: 'Take once daily with evening meal. Monitor blood pressure weekly.'
    },
    {
      id: 2,
      orderId: '#HP-1250-OTP-1',
      orderType: 'One-Time Purchase',
      name: 'Sumatriptan Injectable',
      dosage: '6mg/0.5mL auto-injector',
      pharmacy: 'TXPM/Greenwich',
      approvalDate: '04/07/2025',
      prescriber: 'Dr. Austin Walker',
      quantity: '2 injectors',
      supply: 'As needed',
      pharmacyNotes: 'Sterile compounding required. Temperature controlled shipping. Expiration 6 months from manufacture.',
      dispensingNotes: 'Inject subcutaneously at first sign of migraine. Wait 2 hours before second injection if needed.'
    },
    {
      id: 3,
      orderId: '#HP-1248-OTP-1',
      orderType: 'One-Time Purchase',
      name: 'Topiramate',
      dosage: '50mg twice daily',
      pharmacy: 'RX Outreach',
      approvalDate: '04/06/2025',
      prescriber: 'Dr. Austin Walker',
      quantity: '60 tablets',
      supply: 'Every 30 Days',
      pharmacyNotes: 'Generic formulation acceptable. Standard packaging.',
      dispensingNotes: 'Take with plenty of water. Avoid alcohol. Report any vision changes immediately.'
    },
    {
      id: 5,
      orderId: 'HP-1021-S-2',
      orderType: 'Subscription',
      name: 'NAD+ Injectable',
      dosage: '250mg/mL vial',
      pharmacy: 'TXPM/Greenwich',
      approvalDate: '04/04/2025',
      prescriber: 'Dr. Austin Walker',
      quantity: '1 vial',
      supply: 'Every 30 Days',
      pharmacyNotes: 'Peptide compounding. Store refrigerated. Sterile technique required.',
      dispensingNotes: 'Inject slowly over 30 seconds. Rotate injection sites. Keep refrigerated until use.'
    },
    {
      id: 6,
      orderId: '#HP-1247-OTP-1',
      orderType: 'One-Time Purchase',
      name: 'Sertraline',
      dosage: '50mg once daily',
      pharmacy: 'Patient local pharmacy',
      approvalDate: '04/03/2025',
      prescriber: 'Dr. Austin Walker',
      quantity: '30 tablets',
      supply: 'Every 30 Days',
      pharmacyNotes: 'Standard prescription. Send to patient local pharmacy per insurance.',
      dispensingNotes: 'Take with food if stomach upset occurs. May cause drowsiness initially.'
    }
  ];

  // Add status to medications
  const medicationsWithStatus = approvedMedications.map(med => ({
    ...med,
    status: medicationStatuses[med.id]
  }));

  // Group medications by pharmacy
  const medicationsByPharmacy = medicationsWithStatus.reduce((groups, med) => {
    const pharmacy = med.pharmacy;
    if (!groups[pharmacy]) {
      groups[pharmacy] = [];
    }
    groups[pharmacy].push(med);
    return groups;
  }, {});

  const pharmacyGroups = Object.entries(medicationsByPharmacy);
  const currentPharmacy = pharmacyGroups[currentPharmacyIndex];
  const currentPharmacyName = currentPharmacy ? currentPharmacy[0] : '';
  const currentMedications = currentPharmacy ? currentPharmacy[1] : [];

  // Check if all medications in current group are sent
  const allCurrentMedicationsSent = currentMedications.every(med => med.status === 'Sent to Pharmacy');

  const handleUpdateStatus = (medicationId, newStatus) => {
    setMedicationStatuses(prev => ({
      ...prev,
      [medicationId]: newStatus
    }));
    
    // Remove from selection if marking as sent
    if (newStatus === 'Sent to Pharmacy') {
      setSelectedMedications(prev => prev.filter(id => id !== medicationId));
    }
  };

  const handleSelectMedication = (id) => {
    setSelectedMedications(prev => 
      prev.includes(id) 
        ? prev.filter(medId => medId !== id)
        : [...prev, id]
    );
  };

  const handleBulkAction = (action) => {
    // Mark all selected medications as sent
    const updatedStatuses = { ...medicationStatuses };
    selectedMedications.forEach(medId => {
      updatedStatuses[medId] = 'Sent to Pharmacy';
    });
    setMedicationStatuses(updatedStatuses);
    setSelectedMedications([]);
    
    // Check if this completes the current pharmacy
    const currentMedIds = currentMedications.map(med => med.id);
    const allCurrentSent = currentMedIds.every(id => 
      selectedMedications.includes(id) || medicationStatuses[id] === 'Sent to Pharmacy'
    );
    
    // Auto-advance to next pharmacy if all current medications are now sent
    if (allCurrentSent && currentPharmacyIndex < pharmacyGroups.length - 1) {
      setTimeout(() => {
        setCurrentPharmacyIndex(prev => prev + 1);
      }, 1000); // Small delay to show the status update
    }
  };

  const handleCopyToClipboard = (text, fieldType, medicationId) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(`${fieldType}-${medicationId}`);
      setTimeout(() => setCopiedField(null), 2000);
    });
  };

  const handleNextPharmacy = () => {
    if (currentPharmacyIndex < pharmacyGroups.length - 1) {
      setCurrentPharmacyIndex(prev => prev + 1);
      setSelectedMedications([]);
    }
  };

  const handlePreviousPharmacy = () => {
    if (currentPharmacyIndex > 0) {
      setCurrentPharmacyIndex(prev => prev - 1);
      setSelectedMedications([]);
    }
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      'Ready to Send': { color: 'bg-blue-100 text-blue-800', icon: Send },
      'Sent to Pharmacy': { color: 'bg-yellow-100 text-yellow-800', icon: Clock },
      'Filled': { color: 'bg-green-100 text-green-800', icon: CheckCircle },
      'Pending Review': { color: 'bg-orange-100 text-orange-800', icon: AlertCircle }
    };
    
    const config = statusConfig[status] || { color: 'bg-gray-100 text-gray-800', icon: Package };
    const Icon = config.icon;
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.color}`}>
        <Icon className="w-3 h-3 mr-1" />
        {status}
      </span>
    );
  };

  const getOrderTypeBadge = (orderType) => {
    const colors = {
      'Subscription': 'bg-blue-100 text-blue-800',
      'One-Time Purchase': 'bg-purple-100 text-purple-800'
    };
    return colors[orderType] || 'bg-gray-100 text-gray-800';
  };

  const getPharmacyBadgeColor = (pharmacy) => {
    const colors = {
      'Crafted RX': 'bg-purple-100 text-purple-800',
      'RX Outreach': 'bg-blue-100 text-blue-800',
      'TXPM/Greenwich': 'bg-green-100 text-green-800',
      'Patient local pharmacy': 'bg-orange-100 text-orange-800'
    };
    return colors[pharmacy] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 mb-6">
      {/* Header */}
      <div className="border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-4 mb-2">
              <h3 className="text-lg font-medium text-gray-900">Pharmacy Fulfillment Queue</h3>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">
                  {currentPharmacyIndex + 1} of {pharmacyGroups.length} pharmacy orders
                </span>
                <div className="flex space-x-1">
                  {pharmacyGroups.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full ${
                        index === currentPharmacyIndex ? 'bg-blue-500' : 
                        index < currentPharmacyIndex ? 'bg-green-500' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <h4 className="text-lg font-semibold text-blue-600">{currentPharmacyName}</h4>
              <span className="text-sm text-gray-500">
                {currentMedications.length} medications ready to send
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={handlePreviousPharmacy}
              disabled={currentPharmacyIndex === 0}
              className="px-3 py-2 border border-gray-300 text-gray-700 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              Previous
            </button>
            {selectedMedications.length > 0 && (
              <button
                onClick={() => handleBulkAction('Mark as Sent')}
                className="px-3 py-2 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 flex items-center"
              >
                <CheckCircle className="w-4 h-4 mr-1" />
                Mark Sent ({selectedMedications.length})
              </button>
            )}
            {allCurrentMedicationsSent ? (
              <button
                onClick={handleNextPharmacy}
                disabled={currentPharmacyIndex === pharmacyGroups.length - 1}
                className="px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {currentPharmacyIndex === pharmacyGroups.length - 1 ? 'All Complete ✓' : 'Next Pharmacy →'}
              </button>
            ) : (
              <div className="text-sm text-gray-500">
                Mark all as sent to continue
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Medications Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedMedications(currentMedications.map(med => med.id));
                    } else {
                      setSelectedMedications([]);
                    }
                  }}
                  checked={selectedMedications.length === currentMedications.length && currentMedications.length > 0}
                />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Order ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Order Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Medication
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Pharmacy
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Pharmacy Notes
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Dispensing Notes
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Approval Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentMedications.map((medication) => (
              <tr key={medication.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    checked={selectedMedications.includes(medication.id)}
                    onChange={() => handleSelectMedication(medication.id)}
                  />
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">{medication.orderId}</div>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getOrderTypeBadge(medication.orderType)}`}>
                    {medication.orderType}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{medication.name}</div>
                    <div className="text-sm text-gray-500">{medication.dosage}</div>
                    <div className="text-xs text-gray-400 mt-1">
                      {medication.quantity} • {medication.supply}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPharmacyBadgeColor(medication.pharmacy)}`}>
                    {medication.pharmacy}
                  </span>
                </td>
                <td className="px-6 py-4">
                  {getStatusBadge(medication.status)}
                </td>
                <td className="px-6 py-4 max-w-xs">
                  <div className="flex items-start space-x-2">
                    <div className="text-sm text-gray-700 flex-1">
                      {medication.pharmacyNotes}
                    </div>
                    <button
                      onClick={() => handleCopyToClipboard(medication.pharmacyNotes, 'pharmacy', medication.id)}
                      className="flex-shrink-0 p-1 text-gray-400 hover:text-gray-600"
                      title="Copy pharmacy notes"
                    >
                      {copiedField === `pharmacy-${medication.id}` ? (
                        <Check className="w-4 h-4 text-green-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </td>
                <td className="px-6 py-4 max-w-xs">
                  <div className="flex items-start space-x-2">
                    <div className="text-sm text-gray-700 flex-1">
                      {medication.dispensingNotes}
                    </div>
                    <button
                      onClick={() => handleCopyToClipboard(medication.dispensingNotes, 'dispensing', medication.id)}
                      className="flex-shrink-0 p-1 text-gray-400 hover:text-gray-600"
                      title="Copy dispensing notes"
                    >
                      {copiedField === `dispensing-${medication.id}` ? (
                        <Check className="w-4 h-4 text-green-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {medication.approvalDate}
                  <div className="text-xs text-gray-400">by {medication.prescriber}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex space-x-2">
                    {medication.status === 'Ready to Send' && (
                      <button 
                        onClick={() => handleUpdateStatus(medication.id, 'Sent to Pharmacy')}
                        className="text-green-600 hover:text-green-800 text-sm flex items-center font-medium"
                      >
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Mark Sent
                      </button>
                    )}
                    {medication.status === 'Sent to Pharmacy' && (
                      <button 
                        onClick={() => handleUpdateStatus(medication.id, 'Ready to Send')}
                        className="text-orange-600 hover:text-orange-800 text-sm flex items-center font-medium"
                      >
                        <AlertCircle className="w-4 h-4 mr-1" />
                        Mark Unsent
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary Footer */}
      <div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div>
            Current pharmacy: {currentMedications.length} medications
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              Ready: {currentMedications.filter(m => m.status === 'Ready to Send').length}
            </span>
            <span className="flex items-center">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
              Sent: {currentMedications.filter(m => m.status === 'Sent to Pharmacy').length}
            </span>
          </div>
        </div>
      </div>

      {/* Dosespot Integration Notice */}
      <div className="bg-blue-50 border-t border-blue-200 px-6 py-3">
        <div className="flex items-center text-sm text-blue-800">
          <Package className="w-4 h-4 mr-2" />
          <span>
            <strong>Workflow:</strong> Send all medications for <strong>{currentPharmacyName}</strong> through DoseSpot below, 
            then mark each as sent above. Use copy buttons to transfer pharmacy and dispensing notes. Once all are marked sent, you can proceed to the next pharmacy.
          </span>
        </div>
      </div>
    </div>
  );
};

export default PharmacyFulfillmentView;