import React from 'react';

interface CalloutBoxProps {
  variant?: 'blue' | 'gray' | 'green';
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const variantStyles = {
  blue: {
    background: 'bg-blue-50 dark:bg-blue-900/20',
    border: 'border-blue-500',
  },
  gray: {
    background: 'bg-gray-50 dark:bg-gray-800',
    border: 'border-gray-400',
  },
  green: {
    background: 'bg-green-50 dark:bg-green-900/20',
    border: 'border-green-500',
  },
};

export default function CalloutBox({
  variant = 'blue',
  title,
  children,
  className = ''
}: CalloutBoxProps) {
  const styles = variantStyles[variant];

  return (
    <div
      className={`${styles.background} p-6 rounded-lg border-l-4 ${styles.border} my-8 ${className}`}
    >
      {title && (
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
      )}
      <div className="space-y-3">
        {children}
      </div>
    </div>
  );
}
