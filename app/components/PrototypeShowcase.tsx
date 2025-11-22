"use client";

import React, { useState } from 'react';
import { Code, Eye, Info, AlertTriangle } from 'lucide-react';

interface PrototypeShowcaseProps {
    title: string;
    description?: string;
    sourceCode?: string;
    children: React.ReactNode;
}

export default function PrototypeShowcase({
    title,
    description,
    sourceCode,
    children
}: PrototypeShowcaseProps) {
    const [showSource, setShowSource] = useState(false);
    const [hasError, setHasError] = useState(false);

    // Simple error boundary implementation
    if (hasError) {
        return (
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8 text-center">
                <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-red-900 mb-2">Prototype Error</h3>
                <p className="text-red-700">Something went wrong while rendering this demo.</p>
                <button
                    onClick={() => setHasError(false)}
                    className="mt-4 px-4 py-2 bg-red-100 text-red-800 rounded hover:bg-red-200 transition-colors"
                >
                    Try Again
                </button>
            </div>
        );
    }

    return (
        <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden my-12 bg-white dark:bg-gray-900 shadow-sm">
            {/* Header */}
            <div className="bg-gray-50 dark:bg-gray-800 px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                <div>
                    <div className="flex items-center space-x-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                            Interactive Demo
                        </span>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
                    </div>
                </div>

                {sourceCode && (
                    <button
                        onClick={() => setShowSource(!showSource)}
                        className="flex items-center space-x-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                        {showSource ? (
                            <>
                                <Eye className="w-4 h-4" />
                                <span>View Demo</span>
                            </>
                        ) : (
                            <>
                                <Code className="w-4 h-4" />
                                <span>View Source</span>
                            </>
                        )}
                    </button>
                )}
            </div>

            {/* Instructions / Context */}
            {description && !showSource && (
                <div className="bg-blue-50 dark:bg-blue-900/20 px-6 py-3 border-b border-blue-100 dark:border-blue-800 flex items-start space-x-3">
                    <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-blue-800 dark:text-blue-200">{description}</p>
                </div>
            )}

            {/* Content Area */}
            <div className="relative min-h-[400px]">
                {showSource ? (
                    <div className="absolute inset-0 bg-gray-900 overflow-auto p-6">
                        <pre className="text-sm font-mono text-gray-300">
                            <code>{sourceCode}</code>
                        </pre>
                    </div>
                ) : (
                    <div className="p-6 bg-gray-50/50 dark:bg-gray-900/50">
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                            {children}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
