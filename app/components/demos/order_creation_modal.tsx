import React, { useState, useEffect, useRef } from 'react';
import { X, Plus, Trash2 } from 'lucide-react';

type CartItem = {
  id: number;
  productType: string;
  productName: string;
  variantName: string;
  price: number;
  priceType: string;
  quantity: number;
  requiresApproval: boolean;
  isRecurring: boolean;
  needsShipping: boolean;
  isAutoAdded?: boolean;
  diseaseState?: string | null;
};

const OrderCreationModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProductType, setSelectedProductType] = useState('');
  const [selectedDiseaseState, setSelectedDiseaseState] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');
  const [selectedVariant, setSelectedVariant] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [shippingAddress, setShippingAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  
  // Mock patient consultation history
  const [patientConsultationHistory, setPatientConsultationHistory] = useState([
    'migraine' // Austin has had a migraine consultation
  ]);

  const searchRef = useRef<HTMLDivElement>(null);

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearchResults(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShowSearchResults(false);
        setSearchTerm('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  // Consistent mock data
  const productTypes = [
    { value: 'physical', label: 'Physical Products (Prescriptions)', hasDisease: true },
    { value: 'service', label: 'Services & Consultations', hasDisease: true },
    { value: 'membership', label: 'Memberships', hasDisease: false },
    { value: 'lab', label: 'Lab Tests', hasDisease: false }
  ];

  const diseaseStates = [
    { value: 'migraine', label: 'Migraine' },
    { value: 'weight-management', label: 'Weight Management' },
    { value: 'mens-health', label: "Men's Health" },
    { value: 'womens-health', label: "Women's Health" },
    { value: 'general', label: 'General Health' }
  ];

  const products = {
    physical: [
      { value: 'sumatriptan', label: 'Sumatriptan', diseaseState: 'migraine' },
      { value: 'rizatriptan', label: 'Rizatriptan', diseaseState: 'migraine' },
      { value: 'semaglutide', label: 'Semaglutide', diseaseState: 'weight-management' },
      { value: 'phentermine', label: 'Phentermine', diseaseState: 'weight-management' },
      { value: 'sildenafil', label: 'Sildenafil', diseaseState: 'mens-health' },
      { value: 'tadalafil', label: 'Tadalafil', diseaseState: 'mens-health' },
      { value: 'estradiol', label: 'Estradiol', diseaseState: 'womens-health' },
      { value: 'progesterone', label: 'Progesterone', diseaseState: 'womens-health' }
    ],
    service: [
      { value: 'migraine-consultation', label: 'Migraine Consultation', diseaseState: 'migraine' },
      { value: 'weight-consultation', label: 'Weight Management Consultation', diseaseState: 'weight-management' },
      { value: 'mens-consultation', label: "Men's Health Consultation", diseaseState: 'mens-health' },
      { value: 'womens-consultation', label: "Women's Health Consultation", diseaseState: 'womens-health' },
      { value: 'follow-up', label: 'Follow-up Appointment', diseaseState: 'general' },
      { value: 'general-consultation', label: 'General Consultation', diseaseState: 'general' }
    ],
    membership: [
      { value: 'digital-ai', label: 'Digital AI Assessment' }
    ],
    lab: [
      { value: 'comprehensive-panel', label: 'Comprehensive Health Panel' },
      { value: 'hormone-panel', label: 'Hormone Optimization Panel' }
    ]
  };

  const variants = {
    'sumatriptan': [
      { value: 'sub-50mg', label: '50mg - 9 tablets (Subscription)', price: 1.00, type: 'subscription' },
      { value: 'otp-50mg', label: '50mg - 9 tablets (One-time)', price: 45.00, type: 'one-time' }
    ],
    'rizatriptan': [
      { value: 'sub-10mg', label: '10mg - 6 tablets (Subscription)', price: 1.00, type: 'subscription' },
      { value: 'otp-10mg', label: '10mg - 6 tablets (One-time)', price: 38.00, type: 'one-time' }
    ],
    'semaglutide': [
      { value: 'sub-injection', label: 'Weekly injection (Subscription)', price: 1.00, type: 'subscription' },
      { value: 'otp-injection', label: 'Weekly injection (One-time)', price: 180.00, type: 'one-time' }
    ],
    'phentermine': [
      { value: 'sub-37.5mg', label: '37.5mg - 30 tablets (Subscription)', price: 1.00, type: 'subscription' },
      { value: 'otp-37.5mg', label: '37.5mg - 30 tablets (One-time)', price: 55.00, type: 'one-time' }
    ],
    'sildenafil': [
      { value: 'sub-20mg', label: '20mg - 30 tablets (Subscription)', price: 1.00, type: 'subscription' },
      { value: 'otp-20mg', label: '20mg - 30 tablets (One-time)', price: 32.00, type: 'one-time' }
    ],
    'tadalafil': [
      { value: 'sub-10mg', label: '10mg - 30 tablets (Subscription)', price: 1.00, type: 'subscription' },
      { value: 'otp-10mg', label: '10mg - 30 tablets (One-time)', price: 42.00, type: 'one-time' }
    ],
    'estradiol': [
      { value: 'sub-gel', label: 'Gel pump (Subscription)', price: 1.00, type: 'subscription' },
      { value: 'otp-gel', label: 'Gel pump (One-time)', price: 65.00, type: 'one-time' }
    ],
    'progesterone': [
      { value: 'sub-100mg', label: '100mg - 30 capsules (Subscription)', price: 1.00, type: 'subscription' },
      { value: 'otp-100mg', label: '100mg - 30 capsules (One-time)', price: 48.00, type: 'one-time' }
    ],
    'migraine-consultation': [
      { value: 'initial', label: 'Initial Consultation', price: 25.00, type: 'one-time' }
    ],
    'weight-consultation': [
      { value: 'initial', label: 'Initial Consultation', price: 75.00, type: 'one-time' }
    ],
    'mens-consultation': [
      { value: 'initial', label: 'Initial Consultation', price: 50.00, type: 'one-time' }
    ],
    'womens-consultation': [
      { value: 'initial', label: 'Initial Consultation', price: 60.00, type: 'one-time' }
    ],
    'follow-up': [
      { value: '30min', label: '30 minutes', price: 99.00, type: 'one-time' }
    ],
    'general-consultation': [
      { value: 'standard', label: 'Standard Consultation', price: 25.00, type: 'one-time' }
    ],
    'digital-ai': [
      { value: 'monthly', label: 'Monthly', price: 40.00, type: 'recurring' },
      { value: 'annual', label: 'Annual', price: 400.00, type: 'recurring' }
    ],
    'comprehensive-panel': [
      { value: 'standard', label: 'Standard Panel', price: 150.00, type: 'one-time' }
    ],
    'hormone-panel': [
      { value: 'standard', label: 'Standard Panel', price: 200.00, type: 'one-time' }
    ]
  };

  const addresses = [
    { value: 'home', label: '123 Main St, Austin, TX 78701' },
    { value: 'work', label: '456 Business Ave, Austin, TX 78702' }
  ];

  const paymentMethods = [
    { value: 'card1', label: '**** **** **** 1234 (Visa)' },
    { value: 'card2', label: '**** **** **** 5678 (Mastercard)' }
  ];

  const addItemToCart = () => {
    if (!selectedProduct || !selectedVariant) return;

    const product = products[selectedProductType as keyof typeof products]?.find(p => p.value === selectedProduct);
    const variant = variants[selectedProduct as keyof typeof variants]?.find(v => v.value === selectedVariant);

    if (!product || !variant) return;

    let itemsToAdd: CartItem[] = [];

    // Auto-consultation logic for prescription items
    if (selectedProductType === 'physical' && 'diseaseState' in product && product.diseaseState) {
      const hasConsultation = patientConsultationHistory.includes(product.diseaseState as string);
      
      if (!hasConsultation) {
        // Find the consultation for this disease state
        const consultationKey = `${product.diseaseState}-consultation`;
        const consultationProduct = products.service.find(s => s.value === consultationKey);

        if (consultationProduct && variants[consultationKey as keyof typeof variants]) {
          const consultationVariant = variants[consultationKey as keyof typeof variants][0];
          
          const consultationItem: CartItem = {
            id: Date.now() - 1,
            productType: 'service',
            productName: consultationProduct.label,
            variantName: consultationVariant.label,
            price: consultationVariant.price,
            priceType: consultationVariant.type,
            quantity: 1,
            requiresApproval: false,
            isRecurring: false,
            needsShipping: false,
            isAutoAdded: true,
            diseaseState: product.diseaseState as string
          };
          
          itemsToAdd.push(consultationItem);
          setPatientConsultationHistory(prev => [...prev, product.diseaseState as string]);
        }
      }
    }
    
    // Add the main item
    const newItem = {
      id: Date.now(),
      productType: selectedProductType,
      productName: product.label,
      variantName: variant.label,
      price: variant.price,
      priceType: variant.type,
      quantity: quantity,
      requiresApproval: selectedProductType === 'physical' && variant.type === 'subscription',
      isRecurring: variant.type === 'recurring' || variant.type === 'subscription',
      needsShipping: selectedProductType === 'physical' || selectedProductType === 'lab',
      diseaseState: ('diseaseState' in product ? product.diseaseState : null) as string | null
    };

    itemsToAdd.push(newItem);
    setCartItems([...cartItems, ...itemsToAdd]);
    
    // Reset form
    setSelectedProductType('');
    setSelectedDiseaseState('');
    setSelectedProduct('');
    setSelectedVariant('');
    setQuantity(1);
    setSearchTerm('');
    setShowSearchResults(false);
  };

  const removeItem = (id: number) => {
    const itemToRemove = cartItems.find(item => item.id === id);
    
    // If removing a prescription item, check if we should also remove auto-added consultation
    if (itemToRemove && itemToRemove.productType === 'physical' && itemToRemove.diseaseState) {
      const otherRxInSameDiseaseState = cartItems.filter(item => 
        item.id !== id && 
        item.productType === 'physical' && 
        item.diseaseState === itemToRemove.diseaseState
      );
      
      // If no other prescriptions in this disease state, remove the auto-added consultation
      if (otherRxInSameDiseaseState.length === 0) {
        const autoConsultation = cartItems.find(item => 
          item.isAutoAdded && 
          item.diseaseState === itemToRemove.diseaseState
        );
        
        if (autoConsultation) {
          setCartItems(cartItems.filter(item => item.id !== id && item.id !== autoConsultation.id));
          setPatientConsultationHistory(prev => prev.filter(state => state !== itemToRemove.diseaseState));
          return;
        }
      }
    }
    
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const calculateTotals = () => {
    const immediate = cartItems.filter(item => !item.requiresApproval && item.priceType !== 'recurring' && item.priceType !== 'subscription');
    const pending = cartItems.filter(item => item.requiresApproval);
    const recurring = cartItems.filter(item => item.priceType === 'recurring');
    const subscription = cartItems.filter(item => item.priceType === 'subscription');

    return {
      immediateTotal: immediate.reduce((sum, item) => sum + (item.price * item.quantity), 0),
      pendingItems: pending,
      recurringItems: recurring,
      subscriptionItems: subscription,
      needsShipping: cartItems.some(item => item.needsShipping),
      needsPayment: immediate.length > 0
    };
  };

  const totals = calculateTotals();

  const getProductTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      physical: 'bg-blue-100 text-blue-800',
      service: 'bg-green-100 text-green-800',
      membership: 'bg-purple-100 text-purple-800',
      lab: 'bg-yellow-100 text-yellow-800'
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  const getProductTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      physical: 'Physical Product',
      service: 'Service',
      membership: 'Membership',
      lab: 'Lab Test'
    };
    return labels[type] || type;
  };

  // Search functionality
  const searchResults = searchTerm.length >= 2 ? (() => {
    const term = searchTerm.toLowerCase();
    const results: Array<{
      productType: string;
      value: string;
      label: string;
      diseaseState?: string;
      productTypeLabel: string;
    }> = [];

    // Search physical products
    products.physical.forEach(product => {
      if (product.label.toLowerCase().includes(term)) {
        results.push({
          productType: 'physical',
          value: product.value,
          label: product.label,
          diseaseState: product.diseaseState,
          productTypeLabel: getProductTypeLabel('physical')
        });
      }
    });

    // Search services
    products.service.forEach(product => {
      if (product.label.toLowerCase().includes(term)) {
        results.push({
          productType: 'service',
          value: product.value,
          label: product.label,
          diseaseState: 'diseaseState' in product ? product.diseaseState as string : undefined,
          productTypeLabel: getProductTypeLabel('service')
        });
      }
    });

    // Search memberships
    products.membership.forEach(product => {
      if (product.label.toLowerCase().includes(term)) {
        results.push({
          productType: 'membership',
          value: product.value,
          label: product.label,
          productTypeLabel: getProductTypeLabel('membership')
        });
      }
    });

    // Search labs
    products.lab.forEach(product => {
      if (product.label.toLowerCase().includes(term)) {
        results.push({
          productType: 'lab',
          value: product.value,
          label: product.label,
          productTypeLabel: getProductTypeLabel('lab')
        });
      }
    });

    return results;
  })() : [];

  const highlightSearchTerm = (text: string, term: string) => {
    if (!term) return text;

    const regex = new RegExp(`(${term})`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, index) =>
      regex.test(part) ? (
        <span key={index} className="bg-yellow-200 font-semibold">{part}</span>
      ) : (
        part
      )
    );
  };

  const selectSearchResult = (result: typeof searchResults[0]) => {
    setSelectedProductType(result.productType);
    if (result.diseaseState) {
      setSelectedDiseaseState(result.diseaseState);
    }
    setSelectedProduct(result.value);
    setSearchTerm('');
    setShowSearchResults(false);
  };

  if (!isOpen) {
    return (
      <div className="p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">Austin Walker - Orders</h1>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium text-gray-900">Order History</h2>
              <button 
                onClick={() => setIsOpen(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center gap-2"
              >
                <Plus size={16} />
                New order
              </button>
            </div>
            <div className="text-gray-500 text-center py-8">
              Previous orders would be displayed here...
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Austin Walker - Orders</h1>
        
        {/* Modal Overlay */}
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Create New Order</h2>
                <p className="text-sm text-gray-500">Patient: Austin Walker</p>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>
            </div>

            {/* Single Column Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
              
              {/* Product Selection Section */}
              <div className="mb-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Add Items to Order</h3>
                
                {/* Product Search */}
                <div className="mb-6 relative" ref={searchRef}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Quick Product Search
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Type to search products (e.g., 'Sumatriptan', 'Weight', 'Men's')..."
                      value={searchTerm}
                      onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setShowSearchResults(e.target.value.length >= 2);
                      }}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    {searchTerm && (
                      <button
                        onClick={() => {
                          setSearchTerm('');
                          setShowSearchResults(false);
                        }}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        <X size={16} />
                      </button>
                    )}
                  </div>
                  
                  {/* Search Results */}
                  {showSearchResults && searchResults.length > 0 && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-10 max-h-64 overflow-y-auto">
                      <div className="px-3 py-2 text-xs text-gray-500 bg-gray-50 border-b border-gray-200">
                        {searchResults.length} product{searchResults.length !== 1 ? 's' : ''} found
                      </div>
                      {searchResults.map((result, index) => (
                        <button
                          key={`${result.productType}-${result.value}`}
                          onClick={() => selectSearchResult(result)}
                          className="w-full text-left px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
                        >
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="font-medium text-gray-900">
                                {highlightSearchTerm(result.label, searchTerm)}
                              </div>
                              {result.diseaseState && (
                                <div className="text-sm text-gray-500 capitalize">
                                  {result.diseaseState.replace('-', ' ')}
                                </div>
                              )}
                            </div>
                            <span className={`px-2 py-1 text-xs rounded-full ${getProductTypeColor(result.productType)}`}>
                              {result.productTypeLabel}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                  
                  {showSearchResults && searchResults.length === 0 && searchTerm.length >= 2 && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-10 px-4 py-3 text-gray-500 text-sm">
                      No products found matching "{searchTerm}"
                    </div>
                  )}
                </div>

                <div className="text-center text-gray-400 text-sm mb-4">
                  — or browse categories —
                </div>
                
                <div className="space-y-4">
                  {/* Product Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Product Type
                    </label>
                    <select 
                      value={selectedProductType}
                      onChange={(e) => {
                        setSelectedProductType(e.target.value);
                        setSelectedDiseaseState('');
                        setSelectedProduct('');
                        setSelectedVariant('');
                      }}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                    >
                      <option value="">Select product type</option>
                      {productTypes.map(type => (
                        <option key={type.value} value={type.value}>{type.label}</option>
                      ))}
                    </select>
                  </div>

                  {/* Disease State - conditional */}
                  {selectedProductType && productTypes.find(pt => pt.value === selectedProductType)?.hasDisease && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Disease State
                      </label>
                      <select 
                        value={selectedDiseaseState}
                        onChange={(e) => {
                          setSelectedDiseaseState(e.target.value);
                          setSelectedProduct('');
                          setSelectedVariant('');
                        }}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                      >
                        <option value="">Select disease state</option>
                        {diseaseStates.map(state => (
                          <option key={state.value} value={state.value}>{state.label}</option>
                        ))}
                      </select>
                    </div>
                  )}

                  {/* Product */}
                  {selectedProductType && (
                    (!productTypes.find(pt => pt.value === selectedProductType)?.hasDisease || selectedDiseaseState) && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Product
                        </label>
                        <select 
                          value={selectedProduct}
                          onChange={(e) => {
                            setSelectedProduct(e.target.value);
                            setSelectedVariant('');
                          }}
                          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                        >
                          <option value="">Select product</option>
                          {products[selectedProductType as keyof typeof products]?.filter(p =>
                            !productTypes.find(pt => pt.value === selectedProductType)?.hasDisease || ('diseaseState' in p && p.diseaseState === selectedDiseaseState)
                          ).map(product => (
                            <option key={product.value} value={product.value}>{product.label}</option>
                          ))}
                        </select>
                      </div>
                    )
                  )}

                  {/* Variant */}
                  {selectedProduct && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Variant
                      </label>
                      <select 
                        value={selectedVariant}
                        onChange={(e) => setSelectedVariant(e.target.value)}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                        data-variant-select
                      >
                        <option value="">Select variant</option>
                        {variants[selectedProduct as keyof typeof variants]?.map(variant => (
                          <option key={variant.value} value={variant.value}>
                            {variant.label} - ${variant.price.toFixed(2)}{variant.type === 'recurring' ? '/month' : variant.type === 'subscription' ? '/cycle' : ''}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  {/* Quantity */}
                  {selectedVariant && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Quantity
                      </label>
                      <input 
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                      />
                    </div>
                  )}

                  {/* Add to Cart Button */}
                  {selectedVariant && (
                    <button 
                      onClick={addItemToCart}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm font-medium"
                    >
                      Add to Order
                    </button>
                  )}
                </div>
              </div>

              {/* Order Summary Section */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h3>
                
                {/* Order ID */}
                <div className="text-sm text-gray-500 mb-4">
                  Order ID: HP-[auto-generated]
                </div>

                {/* Cart Items */}
                {cartItems.length > 0 ? (
                  <div className="space-y-3 mb-6">
                    {cartItems.map(item => (
                      <div key={item.id} className={`border rounded-lg p-4 ${item.isAutoAdded ? 'border-blue-200 bg-blue-50' : 'border-gray-200'}`}>
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="font-medium text-gray-900">
                              {item.productName}
                              {item.isAutoAdded && (
                                <span className="ml-2 text-xs text-blue-600 font-medium">(Auto-added)</span>
                              )}
                            </div>
                            <div className="text-sm text-gray-500">{item.variantName}</div>
                            <span className={`inline-block px-2 py-1 text-xs rounded-full mt-1 ${getProductTypeColor(item.productType)}`}>
                              {getProductTypeLabel(item.productType)}
                            </span>
                          </div>
                          <div className="flex items-center gap-3 ml-4">
                            <div className="text-right">
                              <div className="font-medium">
                                ${(item.price * item.quantity).toFixed(2)}
                                {item.priceType === 'recurring' ? '/month' : item.priceType === 'subscription' ? '/cycle' : ''}
                              </div>
                              <div className="text-sm text-gray-500">Qty: {item.quantity}</div>
                            </div>
                            <button 
                              onClick={() => removeItem(item.id)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>
                        {item.requiresApproval && (
                          <div className="text-xs text-amber-600 bg-amber-50 px-2 py-1 rounded mt-2">
                            Requires prescriber approval before billing
                          </div>
                        )}
                        {item.isAutoAdded && (
                          <div className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded mt-1">
                            Required consultation for {item.diseaseState} prescriptions
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-gray-500 text-center py-8 border-2 border-dashed border-gray-200 rounded-lg mb-6">
                    No items added yet
                  </div>
                )}

                {/* Shipping & Payment */}
                {cartItems.length > 0 && (
                  <div className="space-y-4 mb-6">
                    {totals.needsShipping && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Shipping Address
                        </label>
                        <select 
                          value={shippingAddress}
                          onChange={(e) => setShippingAddress(e.target.value)}
                          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                        >
                          <option value="">Select shipping address</option>
                          {addresses.map(addr => (
                            <option key={addr.value} value={addr.value}>{addr.label}</option>
                          ))}
                        </select>
                      </div>
                    )}

                    {totals.needsPayment && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Payment Method
                        </label>
                        <select 
                          value={paymentMethod}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                        >
                          <option value="">Select payment method</option>
                          {paymentMethods.map(method => (
                            <option key={method.value} value={method.value}>{method.label}</option>
                          ))}
                        </select>
                      </div>
                    )}
                  </div>
                )}

                {/* Payment Breakdown */}
                {cartItems.length > 0 && (
                  <div className="border-t border-gray-200 pt-4 mb-6">
                    <h4 className="font-medium text-gray-900 mb-3">Payment Breakdown</h4>
                    
                    {totals.immediateTotal > 0 && (
                      <div className="mb-3">
                        <div className="text-sm font-medium text-gray-700">Immediate Charges:</div>
                        <div className="text-lg font-semibold text-gray-900">
                          ${totals.immediateTotal.toFixed(2)}
                        </div>
                        <div className="text-xs text-gray-500">Due at checkout</div>
                      </div>
                    )}

                    {totals.pendingItems.length > 0 && (
                      <div className="mb-3">
                        <div className="text-sm font-medium text-gray-700">Pending Approval:</div>
                        {totals.pendingItems.map(item => (
                          <div key={item.id} className="text-sm text-gray-600">
                            {item.productName} - ${(item.price * item.quantity).toFixed(2)}/cycle
                          </div>
                        ))}
                        <div className="text-xs text-gray-500">Charged after prescriber approval</div>
                      </div>
                    )}

                    {totals.subscriptionItems.length > 0 && (
                      <div className="mb-3">
                        <div className="text-sm font-medium text-gray-700">Subscription Charges:</div>
                        {totals.subscriptionItems.map(item => (
                          <div key={item.id} className="text-sm text-gray-600">
                            {item.productName} - ${(item.price * item.quantity).toFixed(2)}/cycle
                          </div>
                        ))}
                        <div className="text-xs text-gray-500">Recurring charges after approval</div>
                      </div>
                    )}

                    {totals.recurringItems.length > 0 && (
                      <div className="mb-3">
                        <div className="text-sm font-medium text-gray-700">Recurring Charges:</div>
                        {totals.recurringItems.map(item => (
                          <div key={item.id} className="text-sm text-gray-600">
                            {item.productName} - ${(item.price * item.quantity).toFixed(2)}/month
                          </div>
                        ))}
                        <div className="text-xs text-gray-500">Starts after initial payment</div>
                      </div>
                    )}
                  </div>
                )}

                {/* Create Order Button */}
                <button 
                  disabled={cartItems.length === 0 || (totals.needsShipping && !shippingAddress) || (totals.needsPayment && !paymentMethod)}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-2 px-4 rounded-md text-sm font-medium"
                >
                  Create Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCreationModal;