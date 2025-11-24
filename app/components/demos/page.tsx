'use client';

import Link from 'next/link';
import { demoRegistry } from './registry';
import Navbar from '../Navbar';

// Organize demos by category based on registry comments
const demoCategories = {
  'Currently Integrated': [
    'PharmacyFulfillmentDemo',
  ],
  'Subscription & Billing Management': [
    'SubscriptionManagementApp',
    'SubscriptionModalOverride',
    'EscalatingProtocolSubscription',
  ],
  'Audit & Patient History': [
    'PatientActionHistory',
  ],
  'Order Management': [
    'OrderCreationModal',
    'OrderDeletionFixed',
  ],
  'Pharmacy Management': [
    'PharmacyManagement',
    'PharmacyFulfillmentUpdated',
  ],
  'Administrative Interfaces': [
    'PatientAdminDocuments',
  ],
  'AI Features': [
    'ChartNotesAISettings',
    'HealthplatformAISettings',
    'HealthplatformChatRebuilt',
    'HealthplatformStoreSettings',
  ],
  'Product Configuration': [
    'EscalatingDoseProductForm',
    'AppointmentDisplayConcepts',
  ],
};

// Convert camelCase to readable titles
function formatComponentName(name: string): string {
  return name
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase())
    .trim();
}

export default function DemosPage() {
  const totalDemos = Object.keys(demoRegistry).length;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />

      <div className="pt-32 pb-16 px-6 md:px-12">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Interactive Prototypes
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {totalDemos} working demos showcasing product features built for Teligant/Hedfirst platforms
            </p>
          </div>

          {/* Demo Categories */}
          <div className="space-y-12">
            {Object.entries(demoCategories).map(([category, demos]) => (
              <div key={category}>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-700 pb-2">
                  {category}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {demos.map((componentName) => (
                    <Link
                      key={componentName}
                      href={`/components/demos/${componentName}`}
                      className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700 group"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {formatComponentName(componentName)}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 font-mono">
                        {componentName}
                      </p>
                      <div className="mt-4 text-purple-600 dark:text-purple-400 text-sm font-medium">
                        View Demo →
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Back Link */}
          <div className="mt-12 pt-8 border-t border-gray-300 dark:border-gray-700">
            <Link
              href="/"
              className="text-purple-600 dark:text-purple-400 hover:underline"
            >
              ← Back to Portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
