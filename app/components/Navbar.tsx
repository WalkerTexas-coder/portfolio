'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-black/90 backdrop-blur-md py-3 shadow-md' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className={`text-xl font-bold ${scrolled ? 'text-foreground' : 'text-white'}`}>
          Austin Walker
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            href="#companies" 
            className={`hover:opacity-70 transition-opacity ${scrolled ? 'text-foreground' : 'text-white'}`}
          >
            Companies
          </Link>
          <Link 
            href="#projects" 
            className={`hover:opacity-70 transition-opacity ${scrolled ? 'text-foreground' : 'text-white'}`}
          >
            Projects
          </Link>
          <Link 
            href="#connect" 
            className={`hover:opacity-70 transition-opacity ${scrolled ? 'text-foreground' : 'text-white'}`}
          >
            Connect
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className={`w-6 h-6 ${scrolled ? 'text-foreground' : 'text-white'}`}
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-black py-4 px-6">
          <div className="flex flex-col space-y-4">
            <Link 
              href="#companies" 
              className="text-foreground hover:opacity-70 transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            >
              Companies
            </Link>
            <Link 
              href="#projects" 
              className="text-foreground hover:opacity-70 transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              href="#connect" 
              className="text-foreground hover:opacity-70 transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            >
              Connect
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
