'use client';

import Link from 'next/link';
import { demoRegistry, isValidDemoComponent, type DemoComponentName } from '../registry';
import Navbar from '../../Navbar';

interface DemoViewProps {
  componentName: string;
}

export default function DemoView({ componentName }: DemoViewProps) {
  // Validate component name
  if (!isValidDemoComponent(componentName)) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <div className="pt-32 pb-16 px-6 md:px-12">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Demo Not Found
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              The demo component &quot;{componentName}&quot; does not exist.
            </p>
            <Link
              href="/components/demos"
              className="text-purple-600 dark:text-purple-400 hover:underline"
            >
              ← Back to Demo Gallery
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Get the component from registry
  const DemoComponent = demoRegistry[componentName as DemoComponentName];

  // Format component name for display
  const displayName = componentName
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase())
    .trim();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />

      <div className="pt-32 pb-16 px-6 md:px-12">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-8">
            <Link
              href="/components/demos"
              className="text-purple-600 dark:text-purple-400 hover:underline mb-4 inline-block"
            >
              ← Back to Demo Gallery
            </Link>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              {displayName}
            </h1>
            <p className="text-gray-500 dark:text-gray-400 font-mono text-sm">
              {componentName}
            </p>
          </div>

          {/* Demo Container */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <DemoComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
