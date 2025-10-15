'use client';

import { useState } from 'react';

export default function ShiftF1Banner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-red-600 to-orange-500 py-3">
      <div className="banner-scroll">
        <div className="banner-content whitespace-nowrap text-white font-semibold">
          <span className="inline-block px-8">
            🏁 Thank you to the Shift+F1 podcast (Drew Scanlon, Danny O'Dwyer & Rob Zacny) for the mention!
          </span>
          <span className="inline-block px-8">
            🏎️ Proudly sponsored by HireThisWalker.com
          </span>
          <span className="inline-block px-8">
            🏁 Thank you to the Shift+F1 podcast (Drew Scanlon, Danny O'Dwyer & Rob Zacny) for the mention!
          </span>
          <span className="inline-block px-8">
            🎧 A podcast about speedy race cars since 2014
          </span>
          <span className="inline-block px-8">
            🏎️ Proudly sponsored by HireThisWalker.com
          </span>
        </div>
      </div>

      {/* Close button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-white/80 transition-colors z-10"
        aria-label="Close banner"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}
