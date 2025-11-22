'use client';

import React, { useState } from 'react';
import Link from 'next/link';

type DiseaseState = 'sexual-health' | 'weight-management';

interface MedicationCard {
  id: string;
  code: string;
  fullName: string;
  description: string;
  startingDose?: string;
  pricePerMonth: number;
  isProtocol?: boolean;
}

export default function BlueChewMultiDiseaseSelection() {
  const [selectedDisease, setSelectedDisease] = useState<DiseaseState>('sexual-health');
  const [showDrawer, setShowDrawer] = useState(false);

  const sexualHealthMeds: MedicationCard[] = [
    {
      id: 'sil',
      code: 'SIL',
      fullName: 'Sildenafil',
      description: 'Generic Viagra',
      pricePerMonth: 20
    },
    {
      id: 'tad',
      code: 'TAD',
      fullName: 'Tadalafil',
      description: 'Generic Cialis',
      pricePerMonth: 25
    },
    {
      id: 'max',
      code: 'MAX',
      fullName: 'Tadalafil + Sildenafil',
      description: 'Combination Therapy',
      pricePerMonth: 45
    }
  ];

  const weightManagementMeds: MedicationCard[] = [
    {
      id: 'sema',
      code: 'SEMA',
      fullName: 'Compounded Semaglutide',
      description: 'Escalating Dose Protocol',
      startingDose: 'Starts at 0.25mg',
      pricePerMonth: 299,
      isProtocol: true
    },
    {
      id: 'tirz',
      code: 'TIRZ',
      fullName: 'Compounded Tirzepatide',
      description: 'Escalating Dose Protocol',
      startingDose: 'Starts at 2.5mg',
      pricePerMonth: 399,
      isProtocol: true
    }
  ];

  const currentMeds = selectedDisease === 'sexual-health' ? sexualHealthMeds : weightManagementMeds;

  return (
    <div className="min-h-screen bg-white">
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
          <button className="hover:text-gray-300 transition-colors" aria-label="Shopping cart">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
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
                  <h3 className="font-bold mb-3 text-sm tracking-wide">Shop BlueChew</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {sexualHealthMeds.map((med) => (
                      <div key={med.id} className="text-center">
                        <div className="bg-gray-100 rounded-lg p-4 mb-2 relative">
                          <div className="w-full h-24 bg-gray-200 rounded flex items-center justify-center">
                            <span className="text-2xl font-bold text-gray-400">{med.code}</span>
                          </div>
                          <div className="absolute bottom-2 right-2 w-8 h-8 bg-blue-500 rounded-full" />
                        </div>
                        <p className="text-xs font-bold">{med.code}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-bold mb-3 text-sm tracking-wide">Learn More</h3>
                  <ul className="space-y-3 text-sm">
                    <li><a href="#" className="hover:text-blue-600">About Us</a></li>
                    <li><a href="#" className="hover:text-blue-600">FAQs</a></li>
                    <li><a href="#" className="hover:text-blue-600">Reviews</a></li>
                    <li><a href="#" className="hover:text-blue-600">Contact Us</a></li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold mb-3 text-sm tracking-wide">Medical</h3>
                  <ul className="space-y-3 text-sm">
                    <li><a href="#" className="hover:text-blue-600">Orders</a></li>
                    <li><a href="#" className="hover:text-blue-600">Logout</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Page Title */}
        <h2 className="text-center text-3xl font-bold mb-8 tracking-wide">MY PLANS</h2>

        {/* Success Message */}
        <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-lg flex items-start gap-4">
          <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-green-900 mb-1">Order has been placed!</h3>
            <p className="text-green-800 text-sm">
              Your order will be shipped after your medical review is approved.
            </p>
          </div>
        </div>

        {/* Disease State Selector */}
        <div className="mb-8">
          <div className="flex items-center gap-4 border-b border-gray-200">
            <button
              onClick={() => setSelectedDisease('sexual-health')}
              className={`px-6 py-3 font-medium transition-all relative ${
                selectedDisease === 'sexual-health'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Sexual Health
            </button>
            <button
              onClick={() => setSelectedDisease('weight-management')}
              className={`px-6 py-3 font-medium transition-all relative ${
                selectedDisease === 'weight-management'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Weight Management
              <span className="ml-2 px-2 py-0.5 text-xs bg-blue-100 text-blue-700 rounded-full">NEW</span>
            </button>
          </div>
        </div>

        {/* Medication Carousel */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">
              {selectedDisease === 'sexual-health' ? 'Shop BlueChew' : 'Weight Management Options'}
            </h3>
            <div className="flex gap-2">
              <button className="w-8 h-8 rounded-full border border-gray-300 hover:bg-gray-50 flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="w-8 h-8 rounded-full border border-gray-300 hover:bg-gray-50 flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentMeds.map((med) => (
              <div
                key={med.id}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="bg-gray-100 rounded-lg p-8 mb-4 relative aspect-square flex items-center justify-center">
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 rounded flex items-center justify-center">
                    <span className="text-4xl font-bold text-gray-500">{med.code}</span>
                  </div>
                  <div className="absolute bottom-4 right-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                <h4 className="text-xl font-bold mb-1">{med.code}</h4>
                <p className="text-sm text-gray-700 mb-3">{med.fullName}</p>

                {med.isProtocol && (
                  <div className="mb-3 p-3 bg-blue-50 border border-blue-200 rounded-md">
                    <p className="text-xs font-semibold text-blue-900 mb-1">{med.description}</p>
                    <p className="text-xs text-blue-700">{med.startingDose}</p>
                  </div>
                )}

                {!med.isProtocol && (
                  <p className="text-sm text-gray-700 mb-3">{med.description}</p>
                )}

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                  <div>
                    <p className="text-sm text-gray-600">Starting at</p>
                    <p className="text-2xl font-bold text-gray-900">${med.pricePerMonth}<span className="text-sm font-normal text-gray-600">/mo</span></p>
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm group-hover:scale-105 transform">
                    Select
                  </button>
                </div>

                {med.isProtocol && (
                  <div className="mt-3 text-xs text-gray-600">
                    4-phase protocol • Auto-advancing dosage
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Info Section */}
        {selectedDisease === 'weight-management' && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h4 className="font-bold text-blue-900 mb-3">About Escalating Dose Protocols</h4>
            <div className="space-y-2 text-sm text-blue-800">
              <p>
                <strong>What is it?</strong> A structured medication plan that gradually increases your dosage over time,
                allowing your body to adjust safely while maximizing effectiveness.
              </p>
              <p>
                <strong>How it works:</strong> You'll start at a low dose and automatically advance through 4 phases.
                Each phase lasts 28 days. Your medication and billing adjust automatically with each phase.
              </p>
              <p>
                <strong>Medical supervision:</strong> Your provider monitors your progress and can adjust your protocol
                at any time based on your results and tolerance.
              </p>
            </div>
          </div>
        )}

        {/* Back to Portfolio Link */}
        <div className="text-center pt-8 border-t border-gray-200">
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
