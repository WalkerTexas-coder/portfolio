'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface TimelineStep {
  label: string;
  completed: boolean;
  current: boolean;
}

interface Subscription {
  id: string;
  diseaseState: string;
  medication: string;
  dosage: string;
  status: string;
  statusColor: 'green' | 'blue' | 'orange' | 'red';
  bannerMessage: string;
  bannerType: 'success' | 'info' | 'warning';
  timeline: TimelineStep[];
  protocolInfo?: {
    currentPhase: number;
    totalPhases: number;
    nextDosage?: string;
  };
  actions: {
    primary?: string;
    secondary?: string;
  };
}

export default function BlueChewPatientDashboard() {
  const [showDrawer, setShowDrawer] = useState(false);

  const subscriptions: Subscription[] = [
    {
      id: 'BC-2041',
      diseaseState: 'Sexual Health',
      medication: 'Tadalafil Long-Lasting',
      dosage: '4 PACK 6 MG ($25/MO)',
      status: 'Medical Review',
      statusColor: 'blue',
      bannerMessage: 'Order has been placed! Your order will be shipped after your medical review is approved.',
      bannerType: 'success',
      timeline: [
        { label: 'Choose Plan', completed: true, current: false },
        { label: 'Medical Profile', completed: true, current: false },
        { label: 'Checkout', completed: true, current: false },
        { label: 'Verification', completed: true, current: false },
        { label: 'Medical Review', completed: false, current: true },
        { label: 'Delivery', completed: false, current: false }
      ],
      actions: {
        primary: 'Message Prescriber',
        secondary: 'Update Plan'
      }
    },
    {
      id: 'BC-2042-WM',
      diseaseState: 'Weight Management',
      medication: 'Compounded Semaglutide',
      dosage: 'Phase 1: 0.25mg',
      status: 'Video Consultation Required',
      statusColor: 'orange',
      bannerMessage: 'Medical review approved! Schedule your consultation to begin your protocol.',
      bannerType: 'info',
      timeline: [
        { label: 'Choose Plan', completed: true, current: false },
        { label: 'Medical Profile', completed: true, current: false },
        { label: 'Checkout', completed: true, current: false },
        { label: 'Verification', completed: true, current: false },
        { label: 'Medical Review', completed: true, current: false },
        { label: 'Video Consultation', completed: false, current: true },
        { label: 'Delivery', completed: false, current: false }
      ],
      protocolInfo: {
        currentPhase: 1,
        totalPhases: 4,
        nextDosage: '0.5mg (Phase 2)'
      },
      actions: {
        primary: 'Schedule Video Call',
        secondary: 'Message Prescriber'
      }
    },
    {
      id: 'BC-2043-WM',
      diseaseState: 'Weight Management',
      medication: 'Compounded Tirzepatide',
      dosage: 'Phase 2: 5.0mg',
      status: 'In Transit',
      statusColor: 'green',
      bannerMessage: 'Your medication is in transit. Expected delivery: Oct 18, 2025',
      bannerType: 'info',
      timeline: [
        { label: 'Choose Plan', completed: true, current: false },
        { label: 'Medical Profile', completed: true, current: false },
        { label: 'Checkout', completed: true, current: false },
        { label: 'Verification', completed: true, current: false },
        { label: 'Medical Review', completed: true, current: false },
        { label: 'At Pharmacy', completed: true, current: false },
        { label: 'In Transit', completed: false, current: true },
        { label: 'Delivered', completed: false, current: false }
      ],
      protocolInfo: {
        currentPhase: 2,
        totalPhases: 4,
        nextDosage: '7.5mg (Phase 3) - Nov 15, 2025'
      },
      actions: {
        primary: 'Track Shipment',
        secondary: 'View Protocol Details'
      }
    }
  ];

  const getBannerColor = (type: 'success' | 'info' | 'warning') => {
    switch (type) {
      case 'success':
        return 'bg-green-50 border-green-200';
      case 'info':
        return 'bg-blue-50 border-blue-200';
      case 'warning':
        return 'bg-orange-50 border-orange-200';
    }
  };

  const getBannerIconColor = (type: 'success' | 'info' | 'warning') => {
    switch (type) {
      case 'success':
        return 'bg-green-200 text-green-700';
      case 'info':
        return 'bg-blue-200 text-blue-700';
      case 'warning':
        return 'bg-orange-200 text-orange-700';
    }
  };

  const getBannerTextColor = (type: 'success' | 'info' | 'warning') => {
    switch (type) {
      case 'success':
        return 'text-green-900';
      case 'info':
        return 'text-blue-900';
      case 'warning':
        return 'text-orange-900';
    }
  };

  const getStatusBadgeColor = (color: 'green' | 'blue' | 'orange' | 'red') => {
    switch (color) {
      case 'green':
        return 'bg-green-100 text-green-800';
      case 'blue':
        return 'bg-blue-100 text-blue-800';
      case 'orange':
        return 'bg-orange-100 text-orange-800';
      case 'red':
        return 'bg-red-100 text-red-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-black text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowDrawer(!showDrawer)}
            className="text-white hover:text-gray-300 transition-colors"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <h1 className="text-xl font-bold tracking-wider">BLUECHEW</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="hover:text-gray-300 transition-colors" aria-label="Notifications">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
          <button
            onClick={() => setShowDrawer(!showDrawer)}
            className="hover:text-gray-300 transition-colors"
            aria-label="Account"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
        </div>
      </header>

      {/* Side Drawer */}
      {showDrawer && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setShowDrawer(false)}
          />
          <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <button
                  onClick={() => setShowDrawer(false)}
                  className="text-black hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <button className="hover:text-gray-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </button>
              </div>

              <button className="w-full py-3 px-4 mb-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                My Plans
              </button>

              <div className="space-y-6">
                <div>
                  <h3 className="font-bold mb-3 text-sm tracking-wide">Quick Actions</h3>
                  <ul className="space-y-3 text-sm">
                    <li><a href="#" className="hover:text-blue-600">Order Medication</a></li>
                    <li><a href="#" className="hover:text-blue-600">Message Provider</a></li>
                    <li><a href="#" className="hover:text-blue-600">Medical Records</a></li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold mb-3 text-sm tracking-wide">Account</h3>
                  <ul className="space-y-3 text-sm">
                    <li><a href="#" className="hover:text-blue-600">Profile Settings</a></li>
                    <li><a href="#" className="hover:text-blue-600">Payment Methods</a></li>
                    <li><a href="#" className="hover:text-blue-600">Shipping Address</a></li>
                    <li><a href="#" className="hover:text-blue-600">Logout</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Page Title */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">MY PLANS</h2>
          <p className="text-gray-700">Manage your active subscriptions and track your orders</p>
        </div>

        {/* Subscriptions */}
        <div className="space-y-6">
          {subscriptions.map((subscription) => (
            <div key={subscription.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              {/* Banner */}
              <div className={`p-4 border-b ${getBannerColor(subscription.bannerType)}`}>
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${getBannerIconColor(subscription.bannerType)}`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className={`font-medium ${getBannerTextColor(subscription.bannerType)}`}>
                      {subscription.bannerMessage}
                    </p>
                  </div>
                </div>
              </div>

              {/* Subscription Details */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{subscription.medication}</h3>
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getStatusBadgeColor(subscription.statusColor)}`}>
                        {subscription.status}
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm mb-1">{subscription.diseaseState}</p>
                    <p className="text-gray-600 text-sm">Order ID: {subscription.id}</p>
                    <p className="text-sm font-medium text-gray-800 mt-1">{subscription.dosage}</p>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                </div>

                {/* Protocol Info */}
                {subscription.protocolInfo && (
                  <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-blue-900">Escalating Dose Protocol</h4>
                      <span className="text-xs font-medium text-blue-700">
                        Phase {subscription.protocolInfo.currentPhase} of {subscription.protocolInfo.totalPhases}
                      </span>
                    </div>
                    <div className="w-full bg-blue-200 rounded-full h-2 mb-2">
                      <div
                        className="bg-blue-600 rounded-full h-2 transition-all"
                        style={{ width: `${(subscription.protocolInfo.currentPhase / subscription.protocolInfo.totalPhases) * 100}%` }}
                      />
                    </div>
                    {subscription.protocolInfo.nextDosage && (
                      <p className="text-sm text-blue-700">
                        Next: {subscription.protocolInfo.nextDosage}
                      </p>
                    )}
                  </div>
                )}

                {/* Timeline */}
                <div className="mb-6">
                  <div className="flex items-center justify-between relative">
                    {/* Progress Line */}
                    <div className="absolute top-3 left-0 right-0 h-0.5 bg-gray-200 z-0" />
                    <div
                      className="absolute top-3 left-0 h-0.5 bg-green-500 z-0 transition-all"
                      style={{
                        width: `${(subscription.timeline.filter(s => s.completed).length / subscription.timeline.length) * 100}%`
                      }}
                    />

                    {/* Steps */}
                    {subscription.timeline.map((step, index) => (
                      <div key={index} className="flex flex-col items-center relative z-10" style={{ flex: 1 }}>
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center mb-2 transition-all ${
                            step.completed
                              ? 'bg-green-500 text-white'
                              : step.current
                              ? 'bg-blue-500 text-white ring-4 ring-blue-100'
                              : 'bg-gray-200 text-gray-400'
                          }`}
                        >
                          {step.completed ? (
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          ) : step.current ? (
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                          ) : (
                            <div className="w-2 h-2 bg-gray-400 rounded-full" />
                          )}
                        </div>
                        <p
                          className={`text-xs text-center font-medium ${
                            step.completed
                              ? 'text-green-700'
                              : step.current
                              ? 'text-blue-700'
                              : 'text-gray-600'
                          }`}
                        >
                          {step.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  {subscription.actions.primary && (
                    <button className="flex-1 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                      {subscription.actions.primary}
                    </button>
                  )}
                  {subscription.actions.secondary && (
                    <button className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium text-sm">
                      {subscription.actions.secondary}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add New Subscription */}
        <div className="mt-8 text-center">
          <button className="px-6 py-3 border-2 border-dashed border-gray-300 text-gray-700 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all font-medium">
            + Add New Subscription
          </button>
        </div>

        {/* Back to Portfolio Link */}
        <div className="text-center pt-8 mt-8 border-t border-gray-200">
          <Link
            href="/"
            className="inline-block px-6 py-3 text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            ← Back to Austin Walker's Portfolio
          </Link>
        </div>
      </main>
    </div>
  );
}
