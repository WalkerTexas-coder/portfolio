/**
 * Demo Component Names
 *
 * This file contains just the component names for use in server components
 * (e.g., generateStaticParams) without importing the dynamic registry.
 */

export const demoComponentNames = [
  'PharmacyFulfillmentDemo',
  'SubscriptionManagementApp',
  'SubscriptionModalOverride',
  'EscalatingProtocolSubscription',
  'PatientActionHistory',
  'OrderCreationModal',
  'OrderDeletionFixed',
  'PharmacyManagement',
  'PharmacyFulfillmentUpdated',
  'PatientAdminDocuments',
  'ChartNotesAISettings',
  'HealthplatformAISettings',
  'HealthplatformChatRebuilt',
  'HealthplatformStoreSettings',
  'EscalatingDoseProductForm',
  'AppointmentDisplayConcepts',
] as const;

export type DemoComponentName = typeof demoComponentNames[number];
