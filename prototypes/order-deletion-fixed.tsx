import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, X, AlertTriangle, Check } from 'lucide-react';

const OrderDeletionMockup = () => {
  const [currentView, setCurrentView] = useState('index');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState('');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);
  const modalRef = useRef(null);

  // Make orders dynamic state instead of static
  const [orders, setOrders] = useState([
    { id: 'HP-1085', status: 'DENIED', product: 'AOD-9604 5mL', canDelete: true, type: 'One-time purchase', date: '08/26/2025', price: '$3.00', quantity: 1, disease: 'Peptide Therapy', requiresPrescription: 'Yes', patient: 'Austin Walker' },
    { id: 'HP-1101', status: 'DENIED', product: 'Bupropion SR', canDelete: true, type: 'Subscription', date: '08/25/2025', price: '$45.00', quantity: 1, disease: 'Depression', requiresPrescription: 'Yes', patient: 'Austin Walker' },
    { id: 'HP-1100', status: 'FAILED', product: 'passthrough-4', canDelete: true, type: 'Subscription', date: '08/24/2025', price: '$120.00', quantity: 2, disease: 'Hormone Therapy', requiresPrescription: 'Yes', patient: 'Austin Walker' },
    { id: 'HP-1099', status: 'PAID', product: 'Testosterone', canDelete: false, type: 'Subscription', date: '08/23/2025', price: '$89.00', quantity: 1, disease: 'Hypogonadism', requiresPrescription: 'Yes', patient: 'Austin Walker' },
    { id: 'HP-1098', status: 'NEW', product: 'HGH Therapy', canDelete: true, type: 'One-time purchase', date: '08/22/2025', price: '$250.00', quantity: 1, disease: 'Growth Hormone Deficiency', requiresPrescription: 'Yes', patient: 'Austin Walker' }
  ]);

  // Add click outside handler for dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Add escape key handler for modal
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && showConfirmation) {
        setShowConfirmation(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [showConfirmation]);

  // Focus management for modal
  useEffect(() => {
    if (showConfirmation && modalRef.current) {
      modalRef.current.focus();
    }
  }, [showConfirmation]);

  const handleRemoveClick = (orderId) => {
    const order = orders.find(o => o.id === orderId);
    setSelectedOrder(order);
    setSelectedOrderId(orderId);
    setShowConfirmation(true);
    setOpenDropdown(null); // Close dropdown when opening modal
  };

  const handleViewDetails = (orderId) => {
    const order = orders.find(o => o.id === orderId);
    setSelectedOrder(order);
    setCurrentView('details');
    setOpenDropdown(null); // Close dropdown when navigating
  };

  const handleConfirmDelete = () => {
    // Actually remove the order from state
    setOrders(prevOrders => prevOrders.filter(order => order.id !== selectedOrderId));
    setShowConfirmation(false);
    setShowSuccess(true);
    
    // If we're on details view and delete current order, go back to index
    if (currentView === 'details' && selectedOrder?.id === selectedOrderId) {
      setCurrentView('index');
      setSelectedOrder(null);
    }
    
    setTimeout(() => {
      setShowSuccess(false);
    }, 2000);
  };

  const ActionsDropdown = ({ order, isOpen, onToggle }) => (
    <div className="relative dropdown-container">
      <button 
        onClick={onToggle}
        className="flex items-center gap-1 px-3 py-1 text-sm text-gray-600 hover:text-gray-800"
        aria-label={`Actions for order ${order.id}`}
      >
        ⋯
      </button>
      {isOpen && (
        <div className="absolute right-0 top-8 bg-white border border-gray-200 rounded-md shadow-lg z-10 min-w-[150px]">
          <button 
            onClick={() => handleViewDetails(order.id)}
            className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-50"
          >
            View details
          </button>
          {order.canDelete ? (
            <button 
              onClick={() => handleRemoveClick(order.id)}
              className="block w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50"
            >
              Remove from record
            </button>
          ) : (
            <button 
              disabled
              className="block w-full px-4 py-2 text-left text-sm text-gray-400 cursor-not-allowed"
              title="Cannot delete orders with PAID status"
            >
              Remove from record
            </button>
          )}
        </div>
      )}
    </div>
  );

  const IndexView = () => {
    return (
      <div className="bg-white">
        <div className="border-b border-gray-200 px-6 py-4">
          <h1 className="text-xl font-semibold">Orders</h1>
        </div>
        
        <div className="p-6">
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">ORDER ID</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">PRODUCT</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">STATUS</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">TYPE</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={order.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 text-sm">{order.id}</td>
                    <td className="px-4 py-3 text-sm">{order.product}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        order.status === 'DENIED' || order.status === 'FAILED' 
                          ? 'bg-red-100 text-red-800' 
                          : order.status === 'PAID' 
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm">{order.type}</td>
                    <td className="px-4 py-3">
                      <ActionsDropdown 
                        order={order}
                        isOpen={openDropdown === index}
                        onToggle={() => setOpenDropdown(openDropdown === index ? null : index)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {orders.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No orders found
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const DetailsView = () => {
    if (!selectedOrder) {
      return (
        <div className="bg-white">
          <div className="border-b border-gray-200 px-6 py-4 flex items-center gap-4">
            <button 
              onClick={() => setCurrentView('index')}
              className="text-blue-600 hover:text-blue-800"
            >
              ← Back to Orders
            </button>
            <h1 className="text-xl font-semibold">Order Details</h1>
          </div>
          <div className="p-6">
            <div className="text-center py-8 text-gray-500">
              No order selected. Please select an order from the orders list.
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="bg-white">
        <div className="border-b border-gray-200 px-6 py-4 flex items-center gap-4">
          <button 
            onClick={() => setCurrentView('index')}
            className="text-blue-600 hover:text-blue-800"
          >
            ← Back to Orders
          </button>
          <h1 className="text-xl font-semibold">Order Details - {selectedOrder.id}</h1>
        </div>
        
        <div className="p-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-lg font-medium mb-4">Purchase Details</h2>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-600">Order</label>
                    <p className="font-medium">{selectedOrder.id}</p>
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">Order date</label>
                    <p>{selectedOrder.date}</p>
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">Status</label>
                    <p>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        selectedOrder.status === 'DENIED' || selectedOrder.status === 'FAILED' 
                          ? 'bg-red-100 text-red-800' 
                          : selectedOrder.status === 'PAID' 
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {selectedOrder.status}
                      </span>
                    </p>
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">Price</label>
                    <p>{selectedOrder.price}</p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-600">Product</label>
                    <p>{selectedOrder.product}</p>
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">Quantity</label>
                    <p>{selectedOrder.quantity}</p>
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">Disease</label>
                    <p>{selectedOrder.disease}</p>
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">Require prescription</label>
                    <p>{selectedOrder.requiresPrescription}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              {selectedOrder.canDelete ? (
                <button 
                  onClick={() => handleRemoveClick(selectedOrder.id)}
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 font-medium"
                >
                  Remove from Record
                </button>
              ) : (
                <button 
                  disabled
                  className="px-4 py-2 bg-gray-400 text-white rounded cursor-not-allowed font-medium"
                  title="Cannot delete orders with PAID status"
                >
                  Remove from Record
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Add the missing HistoryView component
  const HistoryView = () => {
    const historyEntries = [
      { date: 'Sep 04, 2025 9:15 AM', action: 'ORDER_REMOVED: Order HP-1089 removed from record by User: Austin Walker' },
      { date: 'Sep 03, 2025 4:37 PM', action: 'SUBSCRIPTION_DENIED: Subscription denied' },
      { date: 'Sep 03, 2025 4:13 PM', action: 'SUBSCRIPTION_DENIED: Subscription denied' },
      { date: 'Sep 03, 2025 10:11 AM', action: 'PAYMENT_STATUS_UPDATED: Payment status updated' },
      { date: 'Sep 03, 2025 10:05 AM', action: 'PAYMENT_STATUS_UPDATED: Payment status updated' },
      { date: 'Sep 03, 2025 10:04 AM', action: 'ORDER_PLACED: Order placed' },
      { date: 'Sep 03, 2025 10:04 AM', action: 'PAYMENT_METHOD_ADDED: New payment method added' },
      { date: 'Sep 03, 2025 10:04 AM', action: 'SUBSCRIPTION_CREATED: New subscription created' },
      { date: 'Sep 03, 2025 10:04 AM', action: 'CONSENT_ADDED: New consent added' },
      { date: 'Aug 28, 2025 2:53 PM', action: 'USER_LOGGED_OUT: User logged out successfully' },
      { date: 'Aug 28, 2025 9:12 AM', action: 'USER_LOGGED_IN: User logged in successfully' },
      { date: 'Aug 27, 2025 10:37 PM', action: 'USER_LOGGED_IN: User logged in successfully' },
      { date: 'Aug 27, 2025 2:17 PM', action: 'USER_LOGGED_OUT: User logged out successfully' }
    ];

    return (
      <div className="bg-white">
        <div className="border-b border-gray-200 px-6 py-4">
          <h1 className="text-xl font-semibold">History</h1>
        </div>
        
        <div className="p-6">
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="space-y-0">
              {historyEntries.map((entry, index) => (
                <div key={index} className={`p-4 border-b border-gray-100 last:border-b-0 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                  <div className="flex flex-col gap-1">
                    <div className="text-xs text-gray-500">{entry.date}</div>
                    <div className={`text-sm ${entry.action.includes('ORDER_REMOVED') ? 'text-red-700 font-medium' : 'text-gray-700'}`}>
                      {entry.action}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ConfirmationModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div 
        ref={modalRef}
        className="bg-white rounded-lg p-6 max-w-md w-full mx-4"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modal-title"
        aria-modal="true"
      >
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="text-red-600" size={24} />
          <h3 id="modal-title" className="text-lg font-semibold">Confirm Removal</h3>
        </div>
        
        <div className="mb-6">
          <p className="text-gray-700 mb-4">
            Are you sure you want to remove this order from the record? This action cannot be undone.
          </p>
          
          {selectedOrder && (
            <div className="bg-gray-50 p-4 rounded border">
              <div className="text-sm space-y-1">
                <p><strong>Order ID:</strong> {selectedOrder.id}</p>
                <p><strong>Patient:</strong> {selectedOrder.patient}</p>
                <p><strong>Product:</strong> {selectedOrder.product}</p>
                <p><strong>Status:</strong> 
                  <span className={`ml-2 px-2 py-1 rounded text-xs font-medium ${
                    selectedOrder.status === 'DENIED' || selectedOrder.status === 'FAILED' 
                      ? 'bg-red-100 text-red-800' 
                      : selectedOrder.status === 'PAID' 
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {selectedOrder.status}
                  </span>
                </p>
              </div>
            </div>
          )}
        </div>
        
        <div className="flex gap-3 justify-end">
          <button 
            onClick={() => setShowConfirmation(false)}
            className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50"
          >
            Cancel
          </button>
          <button 
            onClick={handleConfirmDelete}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Remove from Record
          </button>
        </div>
      </div>
    </div>
  );

  const SuccessMessage = () => (
    <div className="fixed top-4 right-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded flex items-center gap-2 z-50">
      <Check size={16} />
      <span>Order {selectedOrderId} successfully removed from record</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="flex gap-4">
          <button 
            onClick={() => setCurrentView('index')}
            className={`px-3 py-2 rounded text-sm font-medium ${
              currentView === 'index' 
                ? 'bg-blue-100 text-blue-700' 
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Orders Index
          </button>
          <button 
            onClick={() => setCurrentView('details')}
            className={`px-3 py-2 rounded text-sm font-medium ${
              currentView === 'details' 
                ? 'bg-blue-100 text-blue-700' 
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Order Details
          </button>
          <button 
            onClick={() => setCurrentView('history')}
            className={`px-3 py-2 rounded text-sm font-medium ${
              currentView === 'history' 
                ? 'bg-blue-100 text-blue-700' 
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            History
          </button>
        </div>
      </div>

      {/* Content */}
      {currentView === 'index' && <IndexView />}
      {currentView === 'details' && <DetailsView />}
      {currentView === 'history' && <HistoryView />}
      
      {/* Modals */}
      {showConfirmation && <ConfirmationModal />}
      {showSuccess && <SuccessMessage />}
    </div>
  );
};

export default OrderDeletionMockup;