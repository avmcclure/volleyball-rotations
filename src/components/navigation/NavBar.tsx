'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-bold text-lg">V</span>
            </div>
            <span className="font-bold text-xl">Volleyball Rotations</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/learn"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/learn') ? 'bg-blue-700' : 'hover:bg-blue-500'
              }`}
            >
              Learn
            </Link>
            <Link
              href="/practice"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/practice') ? 'bg-blue-700' : 'hover:bg-blue-500'
              }`}
            >
              Practice
            </Link>
            <Link
              href="/learn/glossary"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/learn/glossary') ? 'bg-blue-700' : 'hover:bg-blue-500'
              }`}
            >
              Glossary
            </Link>
            <Link
              href="/editor"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors border border-white/30 ${
                isActive('/editor') ? 'bg-blue-700' : 'hover:bg-blue-500'
              }`}
            >
              Editor
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-blue-500 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="/learn"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Learn
            </Link>
            <Link
              href="/practice"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Practice
            </Link>
            <Link
              href="/learn/glossary"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Glossary
            </Link>
            <Link
              href="/editor"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-500 transition-colors border border-white/30"
              onClick={() => setIsMenuOpen(false)}
            >
              Editor
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
