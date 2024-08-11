'use client';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const productCategories = [
  "Organic Chemicals",
  "Inorganic Chemicals",
  "Agro Chemicals",
  "Cosmetic Chemicals",
  "Construction Chemicals",
  "Nutraceuticals"
];

export default function Header() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLUListElement>(null);

  const handleProductClick = (category: string) => {
    router.push(`/products?category=${encodeURIComponent(category)}`);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm py-0">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/KSY LOGO FILE.png"
              alt="KSY Logo"
              width={110}
              height={40}
              className="object-contain"
            />
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-purple-700 hover:text-white hover:bg-purple-700 font-semibold text-lg">Home</Link>
            <div className="relative group">
              <button 
                className="text-purple-700 hover:text-white hover:bg-purple-700 font-semibold text-lg flex items-center"
                onMouseEnter={() => dropdownRef.current?.classList.add('hover-contrast')}
                onMouseLeave={() => dropdownRef.current?.classList.remove('hover-contrast')}
              >
                Products
                <svg className="ml-1 h-4 w-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-10 hover-contrast" ref={dropdownRef}>
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  {productCategories.map((category, index) => (
                    <a
                      key={index}
                      href={`/products?category=${encodeURIComponent(category)}`}
                      className="block px-4 py-2 text-sm hover:bg-purple-700 hover:text-white font-semibold text-lg"
                      role="menuitem"
                      onMouseEnter={() => dropdownRef.current?.classList.add('hover-contrast')}
                      onMouseLeave={() => dropdownRef.current?.classList.remove('hover-contrast')}
                    >
                      {category}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <Link href="/services" className="text-purple-700 hover:text-white hover:bg-purple-700 font-semibold text-lg">Services</Link>
            <Link href="/about" className="text-purple-700 hover:text-white hover:bg-purple-700 font-semibold text-lg">About</Link>
            <Link href="/newsletter" className="text-purple-700 hover:text-white hover:bg-purple-700 font-semibold text-lg">Newsletter</Link>
            <Link href="/contact" className="text-purple-700 hover:text-white hover:bg-purple-700 font-semibold text-lg">Contact</Link>
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-purple-700 hover:text-white font-semibold text-lg">
              <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-0 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block text-purple-700 hover:text-white hover:bg-purple-700 px-3 py-2 font-semibold text-lg">Home</Link>
            <div className="relative">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="text-purple-700 hover:text-white px-3 py-2 w-full text-left flex justify-between items-center font-semibold text-lg"
              >
                Products
                <svg className="h-4 w-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {isOpen && (
                <div className="px-4 py-2">
                  {productCategories.map((category, index) => (
                    <Link 
                      key={index} 
                      href={`/products?category=${encodeURIComponent(category)}`}
                      className="block text-sm text-purple-700 hover:bg-purple-700 hover:text-white py-1 font-semibold text-lg"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/services" className="block text-purple-700 hover:text-white hover:bg-purple-700 px-3 py-2 font-semibold text-lg">Services</Link>
            <Link href="/about" className="block text-purple-700 hover:text-white hover:bg-purple-700 px-3 py-2 font-semibold text-lg">About</Link>
            <Link href="/newsletter" className="block text-purple-700 hover:text-white hover:bg-purple-700 px-3 py-2 font-semibold text-lg">Newsletter</Link>
            <Link href="/contact" className="block text-purple-700 hover:text-white hover:bg-purple-700 px-3 py-2 font-semibold text-lg">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}

