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
  PharmacyFulfillmentDemo: dynamic(() => import('./PharmacyFulfillmentDemo'), {
    loading: defaultLoadingComponent,
    ssr: false
  }),

  // Add new prototypes below (alphabetically recommended)
  // Example:
  // SubscriptionManagementDemo: dynamic(() => import('./SubscriptionManagementDemo'), {
  //   loading: defaultLoadingComponent,
  //   ssr: false
  // }),
} as const;

// TypeScript: Extract valid component names
export type DemoComponentName = keyof typeof demoRegistry;

// Helper to check if a component name is valid
export function isValidDemoComponent(name: string): name is DemoComponentName {
  return name in demoRegistry;
}
