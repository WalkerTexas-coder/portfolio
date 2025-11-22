import React, { useState } from 'react';
import { AlertTriangle, X } from 'lucide-react';

const AddSubscriptionModal = () => {
  const [diseaseState, setDiseaseState] = useState('Peptide Therapy');
  const [product, setProduct] = useState('AOD-9604/MOTs-C 5mL');
  const [variant, setVariant] = useState('AOD-9604 1.2 mg + MOTs-C 2 mg');
  const [shippingAddress, setShippingAddress] = useState('TX, Leander, 129 Purple Sandpiper Ln, 7...');
  const [paymentMethod, setPaymentMethod] = useState('6392');
  
  // Override functionality
  const [priceOverride, setPriceOverride] = useState(false);
  const [overridePrice, setOverridePrice] = useState('');
  const [overrideReason, setOverrideReason] = useState('');
  
  const originalPrice = 272.00;

  const handleOverrideToggle = () => {
    setPriceOverride(!priceOverride);
    if (priceOverride) {
      setOverridePrice('');
      setOverrideReason('');
    }
  };

  const handleAddSubscription = () => {
    if (priceOverride && overridePrice && overrideReason) {
      alert(`Subscription created with override: $${parseFloat(overridePrice).toFixed(2)}\nReason: ${overrideReason}`);
    } else {
      alert('Subscription created successfully!');
    }
  };

  // Approach 1: Integrated in Product Card
  const ProductCardIntegrated = () => (
    <div className="bg-gray-50 p-4 rounded-md">
      <div className="font-medium text-gray-900">AOD-9604/MOTs-C 5mL</div>
      <div className="text-sm text-gray-600">AOD-9604 1.2mg/MOTs-C 2mg</div>
      <div className="text-sm text-gray-600 mt-2">
        Supply: 30 day<br />
        Qty: 1 Injectable<br />
        Refills: 11
      </div>
      
      <div className="mt-3 border-t pt-3">
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold text-gray-900">
            {priceOverride && overridePrice ? (
              <div>
                <span className="line-through text-gray-400 text-sm">${originalPrice.toFixed(2)}</span>
                <span className="ml-2">${parseFloat(overridePrice).toFixed(2)}</span>
              </div>
            ) : (
              `$${originalPrice.toFixed(2)}`
            )}
          </div>
          <button
            onClick={handleOverrideToggle}
            className={`text-xs px-2 py-1 rounded flex items-center gap-1 ${
              priceOverride 
                ? 'bg-amber-100 text-amber-700 border border-amber-300' 
                : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            <AlertTriangle size={12} />
            {priceOverride ? 'Override Active' : 'Update Price'}
          </button>
        </div>
        
        {priceOverride && (
          <div className="mt-3 space-y-2">
            <div className="text-xs text-amber-700 bg-amber-100 p-2 rounded border border-amber-200">
              <AlertTriangle size={12} className="inline mr-1" />
              Price override will be logged for audit purposes.
            </div>
            
            <div className="flex gap-2">
              <div className="flex-1">
                <div className="relative">
                  <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">$</span>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    value={overridePrice}
                    onChange={(e) => setOverridePrice(e.target.value)}
                    placeholder="0.00"
                    className="w-full pl-6 pr-2 py-1 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
            
            <div>
              <textarea
                value={overrideReason}
                onChange={(e) => setOverrideReason(e.target.value)}
                placeholder="Reason for price override..."
                rows={2}
                className="w-full p-2 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );



  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Add New Subscription</h2>
            <button className="text-gray-400 hover:text-gray-600">
              <X size={24} />
            </button>
          </div>

          <div className="space-y-4">
            {/* Disease State */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Disease state</label>
              <select 
                value={diseaseState}
                onChange={(e) => setDiseaseState(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option>Peptide Therapy</option>
                <option>Weight Loss</option>
                <option>Hormone Therapy</option>
              </select>
            </div>

            {/* Product */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Product</label>
              <select 
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option>AOD-9604/MOTs-C 5mL</option>
                <option>BPC-157 5mL</option>
                <option>CJC/Ipamorelin 5mL</option>
              </select>
            </div>

            {/* Variant */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Variant</label>
              <select 
                value={variant}
                onChange={(e) => setVariant(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option>AOD-9604 1.2 mg + MOTs-C 2 mg</option>
                <option>AOD-9604 2.4 mg + MOTs-C 4 mg</option>
              </select>
            </div>

            {/* Product Details with Integrated Override */}
            <ProductCardIntegrated />

            {/* Shipping Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Shipping address</label>
              <div className="flex items-center gap-2">
                <select 
                  value={shippingAddress}
                  onChange={(e) => setShippingAddress(e.target.value)}
                  className="flex-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option>TX, Leander, 129 Purple Sandpiper Ln, 7...</option>
                </select>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium whitespace-nowrap">
                  + Add New Shipping Address
                </button>
              </div>
            </div>

            {/* Payment Method */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Payment method</label>
              <div className="flex items-center gap-2">
                <select 
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="flex-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  disabled={priceOverride && parseFloat(overridePrice) === 0}
                >
                  <option>6392</option>
                </select>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium whitespace-nowrap">
                  + Add New Payment Method
                </button>
              </div>
              {priceOverride && parseFloat(overridePrice) === 0 && (
                <p className="text-xs text-gray-500 mt-1">Payment method not required for $0.00 subscriptions</p>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-6">
            <button className="flex-1 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 font-medium">
              Cancel
            </button>
            <button 
              onClick={handleAddSubscription}
              disabled={priceOverride && (!overridePrice || !overrideReason.trim())}
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Add subscription
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSubscriptionModal;