"use client";

import React from 'react';
import CalloutBox from './CalloutBox';
import dynamic from 'next/dynamic';

// Dynamic imports for demos to avoid SSR issues and reduce bundle size
const PharmacyFulfillmentDemo = dynamic(() => import('./demos/PharmacyFulfillmentDemo'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg" />,
  ssr: false
});

export interface ArticleSectionData {
  type: 'heading' | 'paragraph' | 'list' | 'callout' | 'metrics' | 'link' | 'prototype';
  level?: 2 | 3; // for heading type
  content: string | string[];
  variant?: 'blue' | 'gray' | 'green'; // for callout type
  title?: string; // for callout and metrics types
  href?: string; // for link type
  ordered?: boolean; // for list type
  componentName?: string; // for prototype type
}

interface ArticleSectionProps {
  section: ArticleSectionData;
}

export default function ArticleSection({ section }: ArticleSectionProps) {
  switch (section.type) {
    case 'heading':
      const HeadingTag = `h${section.level || 2}` as keyof JSX.IntrinsicElements;
      const headingClasses = section.level === 3
        ? 'text-2xl font-semibold mb-4 mt-8'
        : 'text-3xl font-bold mb-6 mt-12';
      return (
        <HeadingTag className={headingClasses}>
          {section.content as string}
        </HeadingTag>
      );

    case 'paragraph':
      return (
        <p className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
          {section.content as string}
        </p>
      );

    case 'list':
      const ListTag = section.ordered ? 'ol' : 'ul';
      const listClasses = section.ordered
        ? 'list-decimal list-inside space-y-2 mb-6'
        : 'list-disc list-inside space-y-2 mb-6';
      return (
        <ListTag className={listClasses}>
          {(section.content as string[]).map((item, index) => (
            <li key={index} className="text-lg text-gray-700 dark:text-gray-300">
              {item}
            </li>
          ))}
        </ListTag>
      );

    case 'callout':
      return (
        <CalloutBox variant={section.variant} title={section.title}>
          {Array.isArray(section.content) ? (
            <ul className="list-disc list-inside space-y-2">
              {section.content.map((item, index) => (
                <li key={index} className="text-gray-700 dark:text-gray-300">
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-700 dark:text-gray-300">{section.content}</p>
          )}
        </CalloutBox>
      );

    case 'metrics':
      return (
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-8">
          {section.title && (
            <h3 className="text-2xl font-semibold mb-4">{section.title}</h3>
          )}
          <ul className="space-y-3">
            {(section.content as string[]).map((metric, index) => (
              <li
                key={index}
                className="text-lg text-gray-700 dark:text-gray-300"
                dangerouslySetInnerHTML={{ __html: metric }}
              />
            ))}
          </ul>
        </div>
      );

    case 'link':
      return (
        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-l-4 border-green-500 my-8">
          {section.title && (
            <h3 className="text-xl font-semibold mb-3">{section.title}</h3>
          )}
          <a
            href={section.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline text-lg"
          >
            {section.content as string}
          </a>
        </div>
      );



    case 'prototype':
      if (section.componentName === 'PharmacyFulfillmentDemo') {
        return <PharmacyFulfillmentDemo />;
      }
      return (
        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded text-yellow-800">
          Prototype component "{section.componentName}" not found.
        </div>
      );

    default:
      return null;
  }
}
