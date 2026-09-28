// components/Header.jsx
"use client";

import React, { useState } from "react";
import Link from "next/link";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white border-b border-neutral-800 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-white">
            AV Development
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-neutral-300 transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-neutral-300 transition-colors">
              About
            </Link>
            <Link href="/services" className="hover:text-neutral-300 transition-colors">
              Services
            </Link>
            <Link href="/projects" className="hover:text-neutral-300 transition-colors">
              Projects
            </Link>
            <Link href="/contact" className="hover:text-neutral-300 transition-colors">
              Contact
            </Link>
            <Link 
              href="/contact" 
              className="px-4 py-2 bg-white text-black rounded-lg hover:bg-neutral-200 transition-colors font-semibold"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="hover:text-neutral-300 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="hover:text-neutral-300 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/services" 
                className="hover:text-neutral-300 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/projects" 
                className="hover:text-neutral-300 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link 
                href="/contact" 
                className="hover:text-neutral-300 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                href="/contact" 
                className="px-4 py-2 bg-white text-black rounded-lg hover:bg-neutral-200 transition-colors font-semibold text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}