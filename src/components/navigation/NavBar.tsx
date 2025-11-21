'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;
  const isDevelopment = process.env.NODE_ENV === 'development';

  return (
    <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 text-white shadow-2xl sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-violet-600 font-bold text-lg sm:text-xl">V</span>
            </div>
            <span className="font-bold text-base sm:text-lg lg:text-xl tracking-tight">Volleyball Rotations</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <Link
              href="/learn"
              className={`px-3 py-2 lg:px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive('/learn')
                  ? 'bg-white/20 shadow-lg'
                  : 'hover:bg-white/10 hover:shadow-md'
              }`}
            >
              Learn
            </Link>
            <Link
              href="/practice"
              className={`px-3 py-2 lg:px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive('/practice')
                  ? 'bg-white/20 shadow-lg'
                  : 'hover:bg-white/10 hover:shadow-md'
              }`}
            >
              Practice
            </Link>
            <Link
              href="/learn/glossary"
              className={`px-3 py-2 lg:px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive('/learn/glossary')
                  ? 'bg-white/20 shadow-lg'
                  : 'hover:bg-white/10 hover:shadow-md'
              }`}
            >
              Glossary
            </Link>
            {isDevelopment && (
              <Link
                href="/editor"
                className={`px-3 py-2 lg:px-4 rounded-lg text-sm font-medium transition-all duration-200 border border-white/40 ${
                  isActive('/editor')
                    ? 'bg-white/20 shadow-lg'
                    : 'hover:bg-white/10 hover:shadow-md'
                }`}
              >
                Editor
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-1.5 sm:p-2 rounded-lg hover:bg-white/10 transition-all duration-200"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-3 sm:pb-4 space-y-1 sm:space-y-2 animate-fadeIn">
            <Link
              href="/learn"
              className="block px-3 py-2 sm:px-4 rounded-lg text-sm sm:text-base font-medium hover:bg-white/10 active:bg-white/20 transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Learn
            </Link>
            <Link
              href="/practice"
              className="block px-3 py-2 sm:px-4 rounded-lg text-sm sm:text-base font-medium hover:bg-white/10 active:bg-white/20 transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Practice
            </Link>
            <Link
              href="/learn/glossary"
              className="block px-3 py-2 sm:px-4 rounded-lg text-sm sm:text-base font-medium hover:bg-white/10 active:bg-white/20 transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Glossary
            </Link>
            {isDevelopment && (
              <Link
                href="/editor"
                className="block px-3 py-2 sm:px-4 rounded-lg text-sm sm:text-base font-medium hover:bg-white/10 active:bg-white/20 transition-all duration-200 border border-white/40"
                onClick={() => setIsMenuOpen(false)}
              >
                Editor
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
