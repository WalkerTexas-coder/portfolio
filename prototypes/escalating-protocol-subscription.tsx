import React, { useState } from 'react';

export default function EscalatingProtocolSubscription() {
  const [showTransitionModal, setShowTransitionModal] = useState(false);
  const [showPauseModal, setShowPauseModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);

  const protocolData = {
    currentPhase: 2,
    totalPhases: 4,
    currentDosage: '0.5mg',
    nextDosage: '1.0mg',
    nextAdvanceDate: 'Oct 14, 2025',
    startDate: 'Aug 19, 2025',
    daysSinceStart: 56,
    nextBillDate: 'Oct 7, 2025'
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <button className="text-gray-500 hover:text-gray-700">← Back to Subscriptions</button>
      </div>

      {/* Protocol Progress Banner */}
      <div className="bg-blue-600 text-white p-6 rounded-lg mb-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-xl font-semibold">Semaglutide Escalating Protocol</h2>
            <p className="text-blue-100">Phase {protocolData.currentPhase} of {protocolData.totalPhases} - Week {Math.floor(protocolData.daysSinceStart / 7)}</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold">{protocolData.currentDosage}</p>
            <p className="text-blue-100 text-sm">Current dosage</p>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between text-sm text-blue-100 mb-2">
            <span>Protocol Progress</span>
            <span>{Math.round((protocolData.currentPhase / protocolData.totalPhases) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-blue-800 rounded-full h-3">
            <div 
              className="bg-white rounded-full h-3 transition-all duration-500" 
              style={{ width: `${(protocolData.currentPhase / protocolData.totalPhases) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Timeline */}
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <span>Started {protocolData.startDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
            <span>Next: {protocolData.nextDosage} on {protocolData.nextAdvanceDate}</span>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Subscription Details */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm">
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Subscription Details</h3>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-500">Subscription ID</label>
                  <p className="text-gray-900">HP-1081-S-1</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Protocol Type</label>
                  <p className="text-gray-900">Escalating GLP-1 Protocol</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-500">Current Product</label>
                  <p className="text-gray-900">Semaglutide - Phase 2</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Current Dosage</label>
                  <p className="text-gray-900">{protocolData.currentDosage}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-500">Supply</label>
                  <p className="text-gray-900">28 day (4 doses)</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Billing Cycle</label>
                  <p className="text-gray-900">Every 28 days</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-500">Next Billed Date</label>
                  <p className="text-gray-900">{protocolData.nextBillDate}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Status</label>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Active - Escalating
                  </span>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-500">Disease</label>
                <p className="text-gray-900">Weight Management</p>
              </div>
            </div>
          </div>
        </div>

        {/* Protocol Timeline */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Protocol Timeline</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">✓</div>
                <div>
                  <p className="font-medium text-green-700">Phase 1 - 0.25mg</p>
                  <p className="text-sm text-gray-500">Completed</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
                <div>
                  <p className="font-medium text-blue-700">Phase 2 - 0.5mg</p>
                  <p className="text-sm text-gray-500">Current (Week 2 of 4)</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-xs font-bold">3</div>
                <div>
                  <p className="font-medium text-gray-600">Phase 3 - 1.0mg</p>
                  <p className="text-sm text-gray-500">Starts {protocolData.nextAdvanceDate}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-xs font-bold">4</div>
                <div>
                  <p className="font-medium text-gray-600">Phase 4 - 1.5mg</p>
                  <p className="text-sm text-gray-500">Target dose</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mt-6">
        <button 
          onClick={() => setShowPauseModal(true)}
          className="px-4 py-2 border border-orange-300 text-orange-700 rounded-md hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        >
          Pause Subscription
        </button>
        
        <button 
          onClick={() => setShowTransitionModal(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Transition to Maintenance
        </button>
        
        <button 
          onClick={() => setShowCancelModal(true)}
          className="px-4 py-2 border border-red-300 text-red-700 rounded-md hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Cancel Subscription
        </button>
      </div>

      {/* Transition to Maintenance Modal */}
      {showTransitionModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h3 className="text-lg font-semibold mb-4">Transition to Maintenance Protocol</h3>
            <p className="text-gray-600 mb-4">
              This will stop the escalating protocol and maintain the patient on their current dosage ({protocolData.currentDosage}) indefinitely.
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-md p-3 mb-4">
              <h4 className="font-medium text-blue-900 mb-2">Maintenance Details:</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Dosage: {protocolData.currentDosage} (no further increases)</li>
                <li>• Billing: Continue every 28 days</li>
                <li>• Supply: 28-day supply (4 doses)</li>
                <li>• Next billing: {protocolData.nextBillDate}</li>
              </ul>
            </div>

            <div className="flex gap-3">
              <button 
                onClick={() => {
                  setShowTransitionModal(false);
                  // In real app, would trigger maintenance transition
                  alert('Patient transitioned to maintenance protocol');
                }}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Confirm Transition
              </button>
              <button 
                onClick={() => setShowTransitionModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Pause Modal */}
      {showPauseModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h3 className="text-lg font-semibold mb-4">Pause Subscription</h3>
            <p className="text-gray-600 mb-4">
              This will pause the subscription and protocol progression. The patient can resume at the same phase when ready.
            </p>
            
            <div className="bg-orange-50 border border-orange-200 rounded-md p-3 mb-4">
              <p className="text-sm text-orange-800">
                <strong>Note:</strong> Protocol timeline will be preserved. When resumed, patient will continue from Phase {protocolData.currentPhase} ({protocolData.currentDosage}).
              </p>
            </div>

            <div className="flex gap-3">
              <button 
                onClick={() => {
                  setShowPauseModal(false);
                  alert('Subscription paused');
                }}
                className="flex-1 px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700"
              >
                Pause Subscription
              </button>
              <button 
                onClick={() => setShowPauseModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cancel Modal */}
      {showCancelModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h3 className="text-lg font-semibold mb-4">Cancel Subscription</h3>
            <p className="text-gray-600 mb-4">
              This will permanently cancel the subscription and protocol. This action cannot be undone.
            </p>
            
            <div className="bg-red-50 border border-red-200 rounded-md p-3 mb-4">
              <p className="text-sm text-red-800">
                <strong>Warning:</strong> Patient will lose access to medication and protocol progress. Consider pausing instead of canceling.
              </p>
            </div>

            <div className="flex gap-3">
              <button 
                onClick={() => {
                  setShowCancelModal(false);
                  alert('Subscription canceled');
                }}
                className="flex-1 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                Cancel Subscription
              </button>
              <button 
                onClick={() => setShowCancelModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
              >
                Keep Active
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}