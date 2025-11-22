import React, { useState } from 'react';
import { Search, Filter, ChevronDown, Clock, Activity } from 'lucide-react';

const PatientHistoryTab = () => {
  const [filterCategory, setFilterCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const historyEvents = [
    {
      id: 1,
      timestamp: '2025-09-03T14:30:00Z',
      category: 'clinical',
      action: 'AI_assessment_approved',
      title: 'AI Assessment Approved',
      actor: { name: 'Dr. Sarah Chen', role: 'Provider', id: 'dr_chen_123' },
      details: {
        assessmentType: 'Digital AI Assessment - Mental Health'
      }
    },
    {
      id: 2,
      timestamp: '2025-09-03T13:15:00Z',
      category: 'administrative',
      action: 'demographics_updated',
      title: 'Patient Demographics Updated',
      actor: { name: 'Jennifer Rodriguez', role: 'Store Admin', id: 'admin_jrod_456' },
      details: {
        fieldsChanged: 'phone, emergencyContact',
        changeReason: 'Patient request via phone call'
      }
    },
    {
      id: 3,
      timestamp: '2025-09-03T12:45:00Z',
      category: 'clinical',
      action: 'questionnaire_completed',
      title: 'Health Questionnaire Completed',
      actor: { name: 'Austin Walker', role: 'Patient', id: 'patient_aw_789' },
      details: {
        questionnaireName: 'PHQ-9 Depression Screening'
      }
    },
    {
      id: 4,
      timestamp: '2025-09-03T11:20:00Z',
      category: 'system',
      action: 'lab_kit_registered',
      title: 'Lab Kit Registered',
      actor: { name: 'System', role: 'Automated', id: 'system' },
      details: {
        kitType: 'Comprehensive Metabolic Panel',
        kitBarcode: '614100000029'
      }
    },
    {
      id: 5,
      timestamp: '2025-09-03T10:05:00Z',
      category: 'appointments',
      action: 'appointment_rescheduled',
      title: 'Appointment Rescheduled',
      actor: { name: 'Maria Santos', role: 'Customer Service', id: 'cs_maria_321' },
      details: {
        appointmentType: 'Follow-up Consultation',
        rescheduledFrom: '09/05/2025 2:00 PM',
        rescheduledTo: '09/07/2025 10:30 AM',
        reason: 'Patient scheduling conflict'
      }
    },
    {
      id: 6,
      timestamp: '2025-09-03T09:30:00Z',
      category: 'commerce',
      action: 'subscription_created',
      title: 'Subscription Created',
      actor: { name: 'Austin Walker', role: 'Patient', id: 'patient_aw_789' },
      details: {
        productName: 'Digital AI Assessment Membership',
        billingAmount: '$40.00 every 30 days'
      }
    },
    {
      id: 7,
      timestamp: '2025-09-03T09:15:00Z',
      category: 'commerce',
      action: 'payment_method_added',
      title: 'Payment Method Added',
      actor: { name: 'Austin Walker', role: 'Patient', id: 'patient_aw_789' },
      details: {
        paymentMethod: 'Visa ending in 9826',
        setAsDefault: 'Yes'
      }
    },
    {
      id: 8,
      timestamp: '2025-09-02T16:45:00Z',
      category: 'clinical',
      action: 'provider_notes_updated',
      title: 'Provider Notes Updated',
      actor: { name: 'Dr. Sarah Chen', role: 'Provider', id: 'dr_chen_123' },
      details: {
        noteType: 'Clinical Assessment'
      }
    }
  ];

  const categories = [
    { value: 'all', label: 'All Events', count: historyEvents.length },
    { value: 'clinical', label: 'Clinical', count: historyEvents.filter(e => e.category === 'clinical').length },
    { value: 'administrative', label: 'Administrative', count: historyEvents.filter(e => e.category === 'administrative').length },
    { value: 'commerce', label: 'Commerce', count: historyEvents.filter(e => e.category === 'commerce').length },
    { value: 'appointments', label: 'Appointments', count: historyEvents.filter(e => e.category === 'appointments').length },
    { value: 'system', label: 'System', count: historyEvents.filter(e => e.category === 'system').length }
  ];

  const filteredEvents = historyEvents.filter(event => {
    const matchesCategory = filterCategory === 'all' || event.category === filterCategory;
    const matchesSearch = searchTerm === '' || 
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.actor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      JSON.stringify(event.details).toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Patient History</h1>
            <p className="text-gray-600">Austin Walker - Complete Activity Timeline</p>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-5 h-5 text-gray-400" />
            <span className="text-sm text-gray-600">Real-time updates</span>
          </div>
        </div>

        {/* Search and Filter Controls */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search events, users, or details..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            <Filter className="w-4 h-4" />
            <span>Filters</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Filter Categories */}
        {showFilters && (
          <div className="mt-4 p-4 border border-gray-200 rounded-lg bg-gray-50">
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.value}
                  onClick={() => setFilterCategory(category.value)}
                  className={`px-3 py-1 rounded-full text-sm border transition-colors ${
                    filterCategory === category.value
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                  }`}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Events Timeline */}
      <div className="space-y-4">
        {filteredEvents.map(event => (
          <div key={event.id} className="bg-white p-4 hover:shadow-md transition-shadow">
            <div className="mb-3">
              <h3 className="font-semibold text-gray-900">{event.title}</h3>
            </div>

            {/* Event Details */}
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                <div>
                  <span className="font-medium text-gray-700">Actor:</span>
                  <span className="ml-2 text-gray-600">{event.actor.name}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Role:</span>
                  <span className="ml-2 text-gray-600">{event.actor.role}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Time:</span>
                  <span className="ml-2 text-gray-600">{formatTimestamp(event.timestamp)}</span>
                </div>
                {Object.entries(event.details).map(([key, value]) => (
                  <div key={key} className="md:col-span-3">
                    <span className="font-medium text-gray-700 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').toLowerCase()}:
                    </span>
                    <span className="ml-2 text-gray-600">
                      {Array.isArray(value) ? value.join(', ') : value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <div className="text-center py-12">
          <Activity className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No events found</h3>
          <p className="text-gray-600">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
};

export default PatientHistoryTab;