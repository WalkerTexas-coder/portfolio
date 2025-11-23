import React, { useState } from 'react';
import { Plus, Edit3, Trash2, Save, X } from 'lucide-react';

const PharmacyManagement = () => {
  const [activeTab, setActiveTab] = useState('pharmacies');
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingPharmacy, setEditingPharmacy] = useState(null);
  
  const [pharmacies, setPharmacies] = useState([
    {
      id: 1,
      name: "Crafted RX",
      address: "123 Main St, Austin, TX 78701",
      phone: "(512) 555-0123",
      pic: "Dr. Sarah Johnson, PharmD",
      shipstationStoreId: "12345"
    },
    {
      id: 2,
      name: "RX Outreach",
      address: "456 Oak Ave, Dallas, TX 75201",
      phone: "(214) 555-0456",
      pic: "Dr. Michael Chen, PharmD",
      shipstationStoreId: "67890"
    },
    {
      id: 3,
      name: "TXPM/Greenwich",
      address: "789 Pine St, Houston, TX 77001",
      phone: "(713) 555-0789",
      pic: "Dr. Emily Rodriguez, PharmD",
      shipstationStoreId: "54321"
    }
  ]);

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    pic: '',
    shipstationStoreId: ''
  });

  const handleAddPharmacy = () => {
    setFormData({ name: '', address: '', phone: '', pic: '', shipstationStoreId: '' });
    setEditingPharmacy(null);
    setShowAddForm(true);
  };

  const handleEditPharmacy = (pharmacy) => {
    setFormData({
      name: pharmacy.name,
      address: pharmacy.address,
      phone: pharmacy.phone,
      pic: pharmacy.pic,
      shipstationStoreId: pharmacy.shipstationStoreId
    });
    setEditingPharmacy(pharmacy);
    setShowAddForm(true);
  };

  const handleSavePharmacy = () => {
    if (editingPharmacy) {
      // Update existing pharmacy
      setPharmacies(pharmacies.map(p => 
        p.id === editingPharmacy.id 
          ? { ...editingPharmacy, ...formData }
          : p
      ));
    } else {
      // Add new pharmacy
      const newPharmacy = {
        id: Math.max(...pharmacies.map(p => p.id)) + 1,
        ...formData
      };
      setPharmacies([...pharmacies, newPharmacy]);
    }
    setShowAddForm(false);
    setEditingPharmacy(null);
  };

  const handleDeletePharmacy = (id) => {
    setPharmacies(pharmacies.filter(p => p.id !== id));
  };

  const handleCancel = () => {
    setShowAddForm(false);
    setEditingPharmacy(null);
    setFormData({ name: '', address: '', phone: '', pic: '', shipstationStoreId: '' });
  };

  const isFormValid = formData.name && formData.address && formData.phone && formData.pic && formData.shipstationStoreId;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-900">Store settings</h1>
          <div className="text-sm text-gray-500">Austin Walker</div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r border-gray-200 min-h-screen">
          <nav className="p-4 space-y-2">
            <div className="text-sm font-medium text-gray-900 mb-4">Navigation</div>
            <a href="#" className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-100 rounded">
              Dashboard
            </a>
            <a href="#" className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-100 rounded">
              Messages
            </a>
            <a href="#" className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-100 rounded">
              Patients
            </a>
            <a href="#" className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-100 rounded">
              Doctors
            </a>
            <a href="#" className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-100 rounded">
              Products
            </a>
            <a href="#" className="flex items-center px-3 py-2 text-white bg-blue-600 rounded">
              Store settings
            </a>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Store Settings Tabs */}
          <div className="mb-6">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                <div 
                  onClick={() => setActiveTab('shipping')}
                  className={`cursor-pointer whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'shipping'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Shipping rules
                </div>
                <div 
                  onClick={() => setActiveTab('pharmacies')}
                  className={`cursor-pointer whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'pharmacies'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Pharmacies
                </div>
              </nav>
            </div>
          </div>

          {activeTab === 'pharmacies' && (
            <div className="max-w-4xl">
              <div className="bg-white rounded-lg border border-gray-200">
                {/* Header */}
                <div className="border-b border-gray-200 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-900">Pharmacy Partners</h2>
                    <button 
                      onClick={handleAddPharmacy}
                      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center gap-2"
                    >
                      <Plus className="h-4 w-4" />
                      Add Pharmacy
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    Manage pharmacy partners and their ShipStation store IDs for prescription fulfillment.
                  </p>
                </div>

                {/* Add/Edit Form */}
                {showAddForm && (
                  <div className="border-b border-gray-200 px-6 py-4 bg-blue-50">
                    <h3 className="text-md font-medium text-gray-900 mb-4">
                      {editingPharmacy ? 'Edit Pharmacy' : 'Add New Pharmacy'}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Pharmacy Name *
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="e.g., Crafted RX"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          ShipStation Store ID *
                        </label>
                        <input
                          type="text"
                          value={formData.shipstationStoreId}
                          onChange={(e) => setFormData({...formData, shipstationStoreId: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="e.g., 12345"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="e.g., (512) 555-0123"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Address *
                        </label>
                        <input
                          type="text"
                          value={formData.address}
                          onChange={(e) => setFormData({...formData, address: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="e.g., 123 Main St, Austin, TX 78701"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Pharmacist in Charge (PIC) *
                        </label>
                        <input
                          type="text"
                          value={formData.pic}
                          onChange={(e) => setFormData({...formData, pic: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="e.g., Dr. Sarah Johnson, PharmD"
                        />
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <button 
                        onClick={handleSavePharmacy}
                        disabled={!isFormValid}
                        className={`px-4 py-2 rounded-md flex items-center gap-2 ${
                          isFormValid 
                            ? 'bg-blue-600 text-white hover:bg-blue-700' 
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                      >
                        <Save className="h-4 w-4" />
                        {editingPharmacy ? 'Update Pharmacy' : 'Save Pharmacy'}
                      </button>
                      <button 
                        onClick={handleCancel}
                        className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 flex items-center gap-2"
                      >
                        <X className="h-4 w-4" />
                        Cancel
                      </button>
                    </div>
                  </div>
                )}

                {/* Pharmacy List */}
                <div className="p-6">
                  {pharmacies.length === 0 ? (
                    <div className="text-center py-8">
                      <p className="text-gray-500">No pharmacy partners configured yet.</p>
                      <button 
                        onClick={handleAddPharmacy}
                        className="mt-2 text-blue-600 hover:text-blue-700"
                      >
                        Add your first pharmacy
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {pharmacies.map((pharmacy) => (
                        <div key={pharmacy.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <h3 className="text-lg font-medium text-gray-900">{pharmacy.name}</h3>
                              <p className="text-sm text-gray-600 mt-1">{pharmacy.address}</p>
                              <p className="text-sm text-gray-600">Phone: {pharmacy.phone}</p>
                              <p className="text-sm text-gray-600">PIC: {pharmacy.pic}</p>
                              <p className="text-sm text-blue-600 mt-2">
                                ShipStation Store ID: {pharmacy.shipstationStoreId}
                              </p>
                            </div>
                            <div className="flex gap-2 ml-4">
                              <button 
                                onClick={() => handleEditPharmacy(pharmacy)}
                                className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded"
                              >
                                <Edit3 className="h-4 w-4" />
                              </button>
                              <button 
                                onClick={() => handleDeletePharmacy(pharmacy.id)}
                                className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Save Settings Button */}
              <div className="mt-6 flex gap-3">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                  Save settings
                </button>
                <button className="text-gray-600 px-6 py-2 rounded-md hover:bg-gray-100">
                  Discard
                </button>
              </div>
            </div>
          )}

          {activeTab === 'shipping' && (
            <div className="max-w-4xl">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Shipping Rules</h2>
                <p className="text-gray-500">Shipping rules configuration would go here...</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PharmacyManagement;