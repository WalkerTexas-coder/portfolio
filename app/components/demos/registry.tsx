'use client';

import dynamic from 'next/dynamic';

/**
 * Component Registry for Interactive Prototypes
 *
 * This registry maps component names to their dynamic imports, enabling
 * lazy loading and SSR disabling for all prototype demos.
 *
 * To add a new prototype:
 * 1. Create your component in app/components/demos/YourDemo.tsx
 * 2. Add an entry below: 'YourDemo': dynamic(() => import('./YourDemo'), { ... })
 * 3. Use it in JSON: { "type": "prototype", "componentName": "YourDemo" }
 */

// Shared loading state for all demos
const defaultLoadingComponent = () => (
  <div className="h-96 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-lg flex items-center justify-center">
    <div className="text-gray-500 dark:text-gray-400">Loading demo...</div>
  </div>
);

// Component registry - add new prototype demos here
export const demoRegistry = {
  // Currently Integrated Demos
  PharmacyFulfillmentDemo: dynamic(() => import('./PharmacyFulfillmentDemo'), {
    loading: defaultLoadingComponent,
    ssr: false
  }),

  // Subscription & Billing Management
  SubscriptionManagementApp: dynamic(() => import('./subscription_management_app'), {
    loading: defaultLoadingComponent,
    ssr: false
  }),
  SubscriptionModalOverride: dynamic(() => import('./subscription_modal_override'), {
    loading: defaultLoadingComponent,
    ssr: false
  }),
  EscalatingProtocolSubscription: dynamic(() => import('./escalating-protocol-subscription'), {
    loading: defaultLoadingComponent,
    ssr: false
  }),

  // Audit & Patient History
  PatientActionHistory: dynamic(() => import('./patient_action_history'), {
    loading: defaultLoadingComponent,
    ssr: false
  }),

  // Order Management
  OrderCreationModal: dynamic(() => import('./order_creation_modal'), {
    loading: defaultLoadingComponent,
    ssr: false
  }),
  OrderDeletionFixed: dynamic(() => import('./order-deletion-fixed'), {
    loading: defaultLoadingComponent,
    ssr: false
  }),

  // Pharmacy Management
  PharmacyManagement: dynamic(() => import('./pharmacy-management'), {
    loading: defaultLoadingComponent,
    ssr: false
  }),
  PharmacyFulfillmentUpdated: dynamic(() => import('./pharmacy-fulfillment-updated'), {
    loading: defaultLoadingComponent,
    ssr: false
  }),

  // Administrative Interfaces
  PatientAdminDocuments: dynamic(() => import('./patient-admin-documents'), {
    loading: defaultLoadingComponent,
    ssr: false
  }),

  // AI Features
  ChartNotesAISettings: dynamic(() => import('./chart_notes_ai_settings'), {
    loading: defaultLoadingComponent,
    ssr: false
  }),
  HealthplatformAISettings: dynamic(() => import('./healthplatform-ai-settings'), {
    loading: defaultLoadingComponent,
    ssr: false
  }),
  HealthplatformChatRebuilt: dynamic(() => import('./healthplatform-chat-rebuilt'), {
    loading: defaultLoadingComponent,
    ssr: false
  }),
  HealthplatformStoreSettings: dynamic(() => import('./healthplatform-store-settings'), {
    loading: defaultLoadingComponent,
    ssr: false
  }),

  // Product Configuration
  EscalatingDoseProductForm: dynamic(() => import('./escalating-dose-product-form'), {
    loading: defaultLoadingComponent,
    ssr: false
  }),
  AppointmentDisplayConcepts: dynamic(() => import('./appointment_display_concepts'), {
    loading: defaultLoadingComponent,
    ssr: false
  }),
} as const;

// TypeScript: Extract valid component names
export type DemoComponentName = keyof typeof demoRegistry;

// Helper to check if a component name is valid
export function isValidDemoComponent(name: string): name is DemoComponentName {
  return name in demoRegistry;
}
