'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function MedsComCaseStudy() {
  const [activePrototype, setActivePrototype] = useState<'selection' | 'dashboard'>('selection');
  const [strategyView, setStrategyView] = useState<'single-brand' | 'multi-brand'>('multi-brand');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-black text-white py-6 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Meds.com Product Expansion Case Study</h1>
              <p className="text-gray-300">Multi-Disease Platform Strategy: Weight Management & Hair Loss</p>
            </div>
            <Link
              href="/"
              className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium"
            >
              ← Portfolio
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Executive Summary */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Executive Summary</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              This case study explores <strong>two strategic approaches</strong> for Meds.com to expand beyond BlueChew's
              single-disease model (Sexual Health / ED) to capture Weight Management and Hair Loss markets. The analysis
              includes competitive research, financial modeling (LTV/CAC), interactive prototypes, and detailed implementation tickets.
            </p>

            {/* Strategy Toggle */}
            <div className="mb-6">
              <div className="flex items-center gap-4 bg-gray-50 p-2 rounded-lg inline-flex">
                <button
                  onClick={() => setStrategyView('single-brand')}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    strategyView === 'single-brand'
                      ? 'bg-white text-gray-900 shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Option A: BlueChew Expands
                </button>
                <button
                  onClick={() => setStrategyView('multi-brand')}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    strategyView === 'multi-brand'
                      ? 'bg-white text-gray-900 shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Option B: Meds.com Multi-Brand Platform
                </button>
              </div>
            </div>

            {strategyView === 'single-brand' && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <h3 className="font-bold text-blue-900 mb-3">Strategy: Single-Brand Expansion</h3>
                <p className="text-sm text-blue-800 mb-3">
                  Add Weight Management and Hair Loss categories directly to BlueChew, similar to how Hims expanded
                  from ED to multi-category offerings.
                </p>
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div className="bg-white rounded p-3 text-center">
                    <div className="text-2xl font-bold text-blue-600">3</div>
                    <div className="text-xs text-gray-700">Disease States</div>
                  </div>
                  <div className="bg-white rounded p-3 text-center">
                    <div className="text-2xl font-bold text-green-600">$750-950</div>
                    <div className="text-xs text-gray-700">Annual LTV</div>
                  </div>
                  <div className="bg-white rounded p-3 text-center">
                    <div className="text-2xl font-bold text-purple-600">3.5:1</div>
                    <div className="text-xs text-gray-700">LTV:CAC Ratio</div>
                  </div>
                </div>
              </div>
            )}

            {strategyView === 'multi-brand' && (
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
                <h3 className="font-bold text-purple-900 mb-3">Strategy: Multi-Brand Platform (30 Madison Model)</h3>
                <p className="text-sm text-purple-800 mb-3">
                  Launch separate brands for Weight Management and Hair Loss on shared multi-tenant infrastructure,
                  similar to 30 Madison's portfolio (Nurx, Keeps). Cross-sell existing BlueChew patients with
                  "seamless onboarding" (data porting), dramatically reducing CAC for new brands.
                </p>
                <div className="grid grid-cols-4 gap-4 mt-4">
                  <div className="bg-white rounded p-3 text-center">
                    <div className="text-2xl font-bold text-purple-600">3</div>
                    <div className="text-xs text-gray-700">Separate Brands</div>
                  </div>
                  <div className="bg-white rounded p-3 text-center">
                    <div className="text-2xl font-bold text-green-600">$1,890</div>
                    <div className="text-xs text-gray-700">Multi-Brand LTV</div>
                  </div>
                  <div className="bg-white rounded p-3 text-center">
                    <div className="text-2xl font-bold text-orange-600">-65%</div>
                    <div className="text-xs text-gray-700">CAC Reduction</div>
                  </div>
                  <div className="bg-white rounded p-3 text-center">
                    <div className="text-2xl font-bold text-blue-600">8.1:1</div>
                    <div className="text-xs text-gray-700">Blended LTV:CAC</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Competitor Research */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Competitor Research</h2>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Company</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Disease States</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Pricing Model</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Est. Monthly Revenue</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Key Differentiator</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900">BlueChew</div>
                      <div className="text-xs text-gray-600">Current State</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">Sexual Health (ED)</td>
                    <td className="px-6 py-4 text-sm text-gray-700">$20-90/mo subscription</td>
                    <td className="px-6 py-4 text-sm text-gray-700">$40-50/customer</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Chewable format, affordable</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900">Hims & Hers</div>
                      <div className="text-xs text-gray-600">Primary Competitor</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Sexual Health, Hair Loss, Skin, Weight Management, Mental Health
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">$25-300+/mo depending on category</td>
                    <td className="px-6 py-4 text-sm text-gray-700">$120-180/customer</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Multi-disease platform, gender-specific branding</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900">Keeps</div>
                      <div className="text-xs text-gray-600">Hair Loss Specialist</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">Hair Loss (Finasteride, Minoxidil)</td>
                    <td className="px-6 py-4 text-sm text-gray-700">$25-75/mo subscription</td>
                    <td className="px-6 py-4 text-sm text-gray-700">$45-60/customer</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Single-focus expertise, photo tracking</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900">Ro (Roman)</div>
                      <div className="text-xs text-gray-600">Men's Health Focused</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">Sexual Health, Hair Loss, Weight, Smoking Cessation</td>
                    <td className="px-6 py-4 text-sm text-gray-700">$30-400+/mo</td>
                    <td className="px-6 py-4 text-sm text-gray-700">$100-150/customer</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Men's health positioning, clinical credibility</td>
                  </tr>
                  <tr className="bg-purple-50 hover:bg-purple-100">
                    <td className="px-6 py-4">
                      <div className="font-medium text-purple-900">30 Madison</div>
                      <div className="text-xs text-purple-700">Multi-Brand Portfolio Model</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-purple-900">
                      Multiple brands: Nurx (women's health), Keeps (hair loss), Cove (migraine)
                    </td>
                    <td className="px-6 py-4 text-sm text-purple-900">Brand-specific pricing</td>
                    <td className="px-6 py-4 text-sm text-purple-900 font-medium">$150-200/customer (cross-brand)</td>
                    <td className="px-6 py-4 text-sm text-purple-900">
                      Multi-tenant platform, shared infrastructure, patient porting reduces CAC
                    </td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="px-6 py-4">
                      <div className="font-medium text-blue-900">BlueChew (Proposed)</div>
                      <div className="text-xs text-blue-700">With Expansion</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-blue-900 font-medium">
                      Sexual Health, Weight Management, Hair Loss
                    </td>
                    <td className="px-6 py-4 text-sm text-blue-900">$20-400/mo multi-category</td>
                    <td className="px-6 py-4 text-sm text-blue-900 font-medium">$80-120/customer</td>
                    <td className="px-6 py-4 text-sm text-blue-900">
                      Affordable multi-disease, proven brand trust
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-3">Key Insights</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Hims dominates single-brand multi-disease:</strong> 5+ categories, $120-180 monthly revenue per customer</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">•</span>
                  <span><strong>30 Madison proves multi-brand model:</strong> Portfolio of separate brands (Nurx, Keeps, Cove) on shared infrastructure, $150-200 cross-brand revenue</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Hair loss is proven:</strong> Keeps (30 Madison subsidiary) sustains business on single category at $45-60/mo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Weight management premium:</strong> $300-400/mo pricing demonstrates willingness to pay</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Meds.com's advantage:</strong> Already owns proven brand (BlueChew) + multi-tenant infrastructure (Teligant). Can replicate 30 Madison model.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-3">Strategic Rationale</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span><strong>Existing infrastructure:</strong> E-prescribing, pharmacy network, provider workflows already built</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span><strong>Customer trust:</strong> Proven brand in sensitive health category = easier cross-sell</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span><strong>Demographic overlap:</strong> Men 25-55 concerned with sexual health often care about weight/hair</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span><strong>Revenue diversification:</strong> Reduce reliance on single category, increase customer lifetime value</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Financial Modeling */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Financial Modeling: LTV & CAC Analysis</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Weight Management */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Weight Management</h3>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
                  High LTV
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Pricing Structure</h4>
                  <div className="bg-gray-50 rounded p-3 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Semaglutide (SEMA)</span>
                      <span className="font-medium">$299/mo</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tirzepatide (TIRZ)</span>
                      <span className="font-medium">$399/mo</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Average</span>
                      <span className="font-bold">$349/mo</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Customer Lifetime Value</h4>
                  <div className="bg-blue-50 rounded p-3 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Average subscription length</span>
                      <span className="font-medium">8 months</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Monthly revenue</span>
                      <span className="font-medium">$349</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Gross margin</span>
                      <span className="font-medium">35%</span>
                    </div>
                    <div className="flex justify-between border-t border-blue-200 pt-2">
                      <span className="text-gray-900 font-bold">Lifetime Value (LTV)</span>
                      <span className="font-bold text-blue-900">$978</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Customer Acquisition Cost</h4>
                  <div className="bg-gray-50 rounded p-3 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Paid advertising</span>
                      <span className="font-medium">$180</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Provider consultation</span>
                      <span className="font-medium">$40</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Onboarding costs</span>
                      <span className="font-medium">$30</span>
                    </div>
                    <div className="flex justify-between border-t border-gray-300 pt-2">
                      <span className="text-gray-900 font-bold">Total CAC</span>
                      <span className="font-bold">$250</span>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded p-4 text-center">
                  <div className="text-xs text-green-700 mb-1">LTV:CAC Ratio</div>
                  <div className="text-3xl font-bold text-green-900">3.9:1</div>
                  <div className="text-xs text-green-700 mt-1">Excellent unit economics</div>
                </div>
              </div>
            </div>

            {/* Hair Loss */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Hair Loss</h3>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                  Steady LTV
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Pricing Structure</h4>
                  <div className="bg-gray-50 rounded p-3 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Finasteride</span>
                      <span className="font-medium">$30/mo</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Minoxidil</span>
                      <span className="font-medium">$25/mo</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Combination Therapy</span>
                      <span className="font-medium">$50/mo</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Average</span>
                      <span className="font-bold">$35/mo</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Customer Lifetime Value</h4>
                  <div className="bg-blue-50 rounded p-3 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Average subscription length</span>
                      <span className="font-medium">18 months</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Monthly revenue</span>
                      <span className="font-medium">$35</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Gross margin</span>
                      <span className="font-medium">60%</span>
                    </div>
                    <div className="flex justify-between border-t border-blue-200 pt-2">
                      <span className="text-gray-900 font-bold">Lifetime Value (LTV)</span>
                      <span className="font-bold text-blue-900">$378</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Customer Acquisition Cost</h4>
                  <div className="bg-gray-50 rounded p-3 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Paid advertising</span>
                      <span className="font-medium">$80</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Provider consultation</span>
                      <span className="font-medium">$30</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Onboarding costs</span>
                      <span className="font-medium">$20</span>
                    </div>
                    <div className="flex justify-between border-t border-gray-300 pt-2">
                      <span className="text-gray-900 font-bold">Total CAC</span>
                      <span className="font-bold">$130</span>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded p-4 text-center">
                  <div className="text-xs text-green-700 mb-1">LTV:CAC Ratio</div>
                  <div className="text-3xl font-bold text-green-900">2.9:1</div>
                  <div className="text-xs text-green-700 mt-1">Healthy unit economics</div>
                </div>
              </div>
            </div>
          </div>

          {/* Strategy-Specific Financial Summary */}
          {strategyView === 'single-brand' && (
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Single-Brand Expansion Impact</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">$80-120</div>
                  <div className="text-sm opacity-90">Avg Monthly Revenue per Customer</div>
                  <div className="text-xs opacity-75 mt-1">(vs. $40-50 current)</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">$750-950</div>
                  <div className="text-sm opacity-90">Projected Annual LTV</div>
                  <div className="text-xs opacity-75 mt-1">(multi-disease customers)</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">3.5:1</div>
                  <div className="text-sm opacity-90">Target LTV:CAC Ratio</div>
                  <div className="text-xs opacity-75 mt-1">(blended across categories)</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">2.5x</div>
                  <div className="text-sm opacity-90">Revenue Multiplier</div>
                  <div className="text-xs opacity-75 mt-1">(vs. single-disease model)</div>
                </div>
              </div>
            </div>
          )}

          {strategyView === 'multi-brand' && (
            <div className="space-y-6">
              {/* Multi-Brand Financial Model */}
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">Multi-Brand Platform Economics (30 Madison Model)</h3>
                <p className="text-sm opacity-90 mb-6">
                  Three separate brands on shared infrastructure. Existing BlueChew patients cross-sold to new brands with "seamless onboarding" (data porting) - dramatically reducing CAC.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-sm font-medium opacity-75 mb-2">Brand 1: BlueChew</div>
                    <div className="text-xl font-bold">Sexual Health</div>
                    <div className="text-sm mt-2">$45/mo avg × 12 months</div>
                    <div className="text-2xl font-bold mt-2">$540 LTV</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-sm font-medium opacity-75 mb-2">Brand 2: WeightRx</div>
                    <div className="text-xl font-bold">Weight Management</div>
                    <div className="text-sm mt-2">$349/mo avg × 8 months</div>
                    <div className="text-2xl font-bold mt-2">$978 LTV</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-sm font-medium opacity-75 mb-2">Brand 3: GrowthRx</div>
                    <div className="text-xl font-bold">Hair Loss</div>
                    <div className="text-sm mt-2">$35/mo avg × 18 months</div>
                    <div className="text-2xl font-bold mt-2">$378 LTV</div>
                  </div>
                </div>

                <div className="border-t border-white/20 pt-6 grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">$1,890</div>
                    <div className="text-sm opacity-90">Combined Multi-Brand LTV</div>
                    <div className="text-xs opacity-75 mt-1">(patient uses all 3 brands)</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">$233</div>
                    <div className="text-sm opacity-90">Blended CAC</div>
                    <div className="text-xs opacity-75 mt-1">(65% reduction via patient porting)</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">8.1:1</div>
                    <div className="text-sm opacity-90">Blended LTV:CAC Ratio</div>
                    <div className="text-xs opacity-75 mt-1">(vs. 3.5:1 single-brand)</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">3.5x</div>
                    <div className="text-sm opacity-90">Revenue Multiplier</div>
                    <div className="text-xs opacity-75 mt-1">(vs. single-brand model)</div>
                  </div>
                </div>
              </div>

              {/* CAC Reduction Breakdown */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">How Multi-Brand Reduces CAC by 65%</h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Brand 1 Acquisition (BlueChew)</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Paid advertising</span>
                        <span className="font-medium">$150</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Provider consultation</span>
                        <span className="font-medium">$40</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Onboarding</span>
                        <span className="font-medium">$30</span>
                      </div>
                      <div className="flex justify-between border-t border-gray-200 pt-2 font-bold">
                        <span>Full CAC (First Brand)</span>
                        <span>$220</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Brand 2 & 3 Cross-Sell (WeightRx/GrowthRx)</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">In-app messaging + email</span>
                        <span className="font-medium">$15</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Provider consultation (discounted)</span>
                        <span className="font-medium">$30</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Data porting (automated)</span>
                        <span className="font-medium">$5</span>
                      </div>
                      <div className="flex justify-between border-t border-gray-200 pt-2 font-bold text-green-900">
                        <span>Reduced CAC (Cross-Sell)</span>
                        <span>$50</span>
                      </div>
                      <div className="text-xs text-green-700 mt-2">
                        <strong>77% cheaper</strong> than acquiring cold traffic
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-purple-50 border border-purple-200 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">Blended CAC Calculation</h4>
                  <p className="text-sm text-purple-800 mb-3">
                    Patient acquired through BlueChew ($220) then cross-sold to WeightRx ($50) and GrowthRx ($50):
                  </p>
                  <div className="text-sm font-mono bg-white rounded p-3 text-gray-900">
                    <div>Total CAC across 3 brands: $220 + $50 + $50 = <strong>$320</strong></div>
                    <div className="mt-1">Blended CAC per brand: $320 / 3 = <strong>$107</strong></div>
                    <div className="mt-2 text-purple-900">Compared to acquiring each brand separately: 3 × $220 = $660</div>
                    <div className="mt-1 font-bold text-green-900">Savings: <strong>$340 (51% reduction)</strong></div>
                  </div>
                </div>
              </div>

              {/* Patient Journey Visualization */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Patient Journey: Cross-Brand Migration</h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-900 flex-shrink-0">
                      1
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">Month 1-12: BlueChew Subscriber</div>
                      <div className="text-sm text-gray-600">Patient purchases ED medication through BlueChew. Platform collects medical history, preferences, payment info.</div>
                      <div className="text-xs text-blue-700 mt-1"><strong>LTV: $540</strong> • CAC: $220 • LTV:CAC = 2.5:1</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center font-bold text-purple-900 flex-shrink-0">
                      2
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">Month 6: Cross-Sell to WeightRx</div>
                      <div className="text-sm text-gray-600">In-app banner: "Struggling with weight? Try WeightRx - your BlueChew profile transfers over." Patient clicks, medical history auto-populated, one-click approval.</div>
                      <div className="text-xs text-purple-700 mt-1"><strong>LTV: $978</strong> • CAC: $50 (cross-sell) • LTV:CAC = 19.6:1</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center font-bold text-green-900 flex-shrink-0">
                      3
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">Month 18: Cross-Sell to GrowthRx</div>
                      <div className="text-sm text-gray-600">Email campaign: "Hair loss treatment starting at $30/mo - no new consultation needed." Patient data ported from BlueChew, instant prescription approval.</div>
                      <div className="text-xs text-green-700 mt-1"><strong>LTV: $378</strong> • CAC: $50 (cross-sell) • LTV:CAC = 7.6:1</div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 via-purple-50 to-green-50 border border-gray-200 rounded-lg">
                    <div className="font-bold text-gray-900 mb-2">Total Patient Lifetime Value Across All Brands</div>
                    <div className="text-3xl font-bold text-gray-900">$1,890</div>
                    <div className="text-sm text-gray-700 mt-2">Blended CAC: $107 per brand × 3 brands = $320 total</div>
                    <div className="text-sm font-bold text-green-900 mt-1">Overall LTV:CAC Ratio: <span className="text-2xl">5.9:1</span></div>
                    <div className="text-xs text-gray-600 mt-2">
                      *Assumes 25% of BlueChew patients adopt WeightRx, and 15% adopt GrowthRx within 24 months
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Interactive Prototypes */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Interactive Prototypes</h2>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <div className="flex items-center gap-4 mb-6">
              <button
                onClick={() => setActivePrototype('selection')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activePrototype === 'selection'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Multi-Disease Selection Flow
              </button>
              <button
                onClick={() => setActivePrototype('dashboard')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activePrototype === 'dashboard'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Patient Dashboard
              </button>
            </div>

            {activePrototype === 'selection' && (
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Multi-Disease Selection Flow</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Disease state tabs allow patients to browse Sexual Health, Weight Management, and Hair Loss medications.
                  Escalating dose protocols are clearly indicated for weight management options.
                </p>
                <div className="border border-gray-300 rounded-lg overflow-hidden bg-gray-100">
                  <iframe
                    src="/artifacts/meds/bluechew-multi-disease-selection"
                    className="w-full h-[800px]"
                    title="Multi-Disease Selection Prototype"
                  />
                </div>
                <div className="mt-4 text-center">
                  <Link
                    href="/artifacts/meds/bluechew-multi-disease-selection"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    Open in new tab
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                </div>
              </div>
            )}

            {activePrototype === 'dashboard' && (
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Multi-Subscription Patient Dashboard</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Patients can manage multiple concurrent subscriptions across different disease states. Each subscription
                  shows timeline progress, protocol phases, and contextual next steps.
                </p>
                <div className="border border-gray-300 rounded-lg overflow-hidden bg-gray-100">
                  <iframe
                    src="/artifacts/meds/bluechew-patient-dashboard"
                    className="w-full h-[800px]"
                    title="Patient Dashboard Prototype"
                  />
                </div>
                <div className="mt-4 text-center">
                  <Link
                    href="/artifacts/meds/bluechew-patient-dashboard"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    Open in new tab
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Implementation Tickets */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Implementation Tickets</h2>

          <div className="space-y-6">
            {/* Epic 1: Weight Management */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-purple-50 border-b border-purple-200 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-purple-700 uppercase tracking-wide">Epic</span>
                    <h3 className="text-lg font-bold text-gray-900 mt-1">Weight Management Disease State</h3>
                  </div>
                  <span className="px-3 py-1 bg-purple-600 text-white text-xs font-medium rounded-full">
                    13 Story Points
                  </span>
                </div>
              </div>
              <div className="p-6 space-y-4">
                {[
                  {
                    id: 'BC-401',
                    title: 'Create Weight Management disease state classification',
                    points: 2,
                    description: 'Add "Weight Management" to disease state enum and database schema. Update product catalog to support weight management medications.'
                  },
                  {
                    id: 'BC-402',
                    title: 'Build escalating dose protocol system for Semaglutide',
                    points: 5,
                    description: 'Implement 4-phase protocol: 0.25mg → 0.5mg → 1.0mg → 2.0mg with 28-day cycles. Auto-advancement logic, phase tracking, billing integration.'
                  },
                  {
                    id: 'BC-403',
                    title: 'Build escalating dose protocol system for Tirzepatide',
                    points: 3,
                    description: 'Similar to BC-402 but for Tirzepatide: 2.5mg → 5.0mg → 7.5mg → 10.0mg phases. Reuse protocol infrastructure.'
                  },
                  {
                    id: 'BC-404',
                    title: 'Add weight management tab to patient portal',
                    points: 2,
                    description: 'Update product selection UI with tabbed interface. Display protocol badges, pricing, and starting dose information.'
                  },
                  {
                    id: 'BC-405',
                    title: 'Update billing system to support protocol-based subscriptions',
                    points: 3,
                    description: 'Modify PayTheory integration to handle phase transitions, auto-advancing charges, and dosage-based pricing adjustments.'
                  }
                ].map((ticket) => (
                  <div key={ticket.id} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-all">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                          {ticket.id}
                        </span>
                        <h4 className="font-semibold text-gray-900">{ticket.title}</h4>
                      </div>
                      <span className="text-xs font-medium text-purple-700 bg-purple-50 px-2 py-1 rounded">
                        {ticket.points} pts
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 pl-16">{ticket.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Epic 2: Hair Loss */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-blue-50 border-b border-blue-200 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-blue-700 uppercase tracking-wide">Epic</span>
                    <h3 className="text-lg font-bold text-gray-900 mt-1">Hair Loss Disease State</h3>
                  </div>
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                    8 Story Points
                  </span>
                </div>
              </div>
              <div className="p-6 space-y-4">
                {[
                  {
                    id: 'BC-501',
                    title: 'Create Hair Loss disease state classification',
                    points: 2,
                    description: 'Add "Hair Loss" to disease state enum. Configure product catalog for Finasteride, Minoxidil, and combination therapy.'
                  },
                  {
                    id: 'BC-502',
                    title: 'Build Finasteride product configuration',
                    points: 2,
                    description: 'Create product variant for Finasteride 1mg daily. Standard monthly subscription at $30/mo. No protocol needed (static dosage).'
                  },
                  {
                    id: 'BC-503',
                    title: 'Build Minoxidil product configuration',
                    points: 2,
                    description: 'Create product variant for Minoxidil 5% solution. Standard monthly subscription at $25/mo.'
                  },
                  {
                    id: 'BC-504',
                    title: 'Build Combination Therapy product configuration',
                    points: 1,
                    description: 'Create bundled product combining Finasteride + Minoxidil at discounted rate ($50/mo vs. $55 separate).'
                  },
                  {
                    id: 'BC-505',
                    title: 'Add hair loss tab to patient portal product selection',
                    points: 1,
                    description: 'Update UI to include third disease state tab. Display three medication options with pricing and descriptions.'
                  }
                ].map((ticket) => (
                  <div key={ticket.id} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-all">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                          {ticket.id}
                        </span>
                        <h4 className="font-semibold text-gray-900">{ticket.title}</h4>
                      </div>
                      <span className="text-xs font-medium text-blue-700 bg-blue-50 px-2 py-1 rounded">
                        {ticket.points} pts
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 pl-16">{ticket.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Epic 3: Multi-Subscription Dashboard */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-green-50 border-b border-green-200 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-green-700 uppercase tracking-wide">Epic</span>
                    <h3 className="text-lg font-bold text-gray-900 mt-1">Multi-Subscription Patient Dashboard</h3>
                  </div>
                  <span className="px-3 py-1 bg-green-600 text-white text-xs font-medium rounded-full">
                    8 Story Points
                  </span>
                </div>
              </div>
              <div className="p-6 space-y-4">
                {[
                  {
                    id: 'BC-601',
                    title: 'Design multi-subscription UI architecture',
                    points: 2,
                    description: 'Create design system for displaying multiple concurrent subscriptions with different timelines, statuses, and protocols.'
                  },
                  {
                    id: 'BC-602',
                    title: 'Build subscription card component with timeline visualization',
                    points: 3,
                    description: 'Implement visual timeline showing Choose Plan → Medical Profile → Checkout → Verification → Medical Review → Delivery with conditional steps.'
                  },
                  {
                    id: 'BC-603',
                    title: 'Add protocol progress display for weight management subscriptions',
                    points: 2,
                    description: 'Show current phase, progress bar, next dosage, and advancement date within subscription cards.'
                  },
                  {
                    id: 'BC-604',
                    title: 'Implement contextual actions per subscription status',
                    points: 1,
                    description: 'Display appropriate CTAs based on status: Message Prescriber, Schedule Video Call, Track Shipment, Update Plan, etc.'
                  }
                ].map((ticket) => (
                  <div key={ticket.id} className="border border-gray-200 rounded-lg p-4 hover:border-green-300 transition-all">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                          {ticket.id}
                        </span>
                        <h4 className="font-semibold text-gray-900">{ticket.title}</h4>
                      </div>
                      <span className="text-xs font-medium text-green-700 bg-green-50 px-2 py-1 rounded">
                        {ticket.points} pts
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 pl-16">{ticket.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-6">
            <h3 className="font-bold text-gray-900 mb-4">Implementation Summary</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">29</div>
                <div className="text-sm text-gray-600">Total Story Points</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">14</div>
                <div className="text-sm text-gray-600">Implementation Tickets</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">6-8</div>
                <div className="text-sm text-gray-600">Weeks to Production</div>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-8">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">This Is What I'd Do at Meds.com</h2>
            <div className="space-y-3 text-gray-200">
              <p>
                <strong className="text-white">As a Product Manager at Meds.com, I would:</strong>
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 font-bold">→</span>
                  <span><strong className="text-white">Research competitors</strong> to identify market opportunities and validated business models</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 font-bold">→</span>
                  <span><strong className="text-white">Model unit economics</strong> (LTV, CAC, margins) to ensure profitable expansion</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 font-bold">→</span>
                  <span><strong className="text-white">Prototype product experiences</strong> matching existing design systems to demonstrate vision</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 font-bold">→</span>
                  <span><strong className="text-white">Break down implementation</strong> into detailed tickets with clear acceptance criteria</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 font-bold">→</span>
                  <span><strong className="text-white">Ship systematically</strong> while maintaining quality and regulatory compliance</span>
                </li>
              </ul>
              <p className="mt-4 text-gray-300">
                I built this exact expansion at Hedfirst—multi-disease platform supporting 499 medications across 39 disease states
                with escalating dose protocols, flexible subscription architecture, and multi-subscription patient management.
                Now I'm ready to bring that experience to BlueChew's proven business model.
              </p>
            </div>
          </div>
        </section>

        {/* Back to Portfolio */}
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
