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
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <Image src="/images/KSY LOGO FILE.png" alt="KSY Group" width={100} height={50} objectFit="contain" />
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-purple-700 hover:text-purple-900">Home</Link>
            <div className="relative group">
              <button className="text-purple-700 hover:text-purple-900 flex items-center">
                Products
                <svg className="ml-1 h-4 w-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-10">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  {productCategories.map((category, index) => (
                    <a
                      key={index}
                      href={`/products?category=${encodeURIComponent(category)}`}
                      className="block px-4 py-2 text-sm text-purple-700 hover:bg-purple-100 hover:text-purple-900"
                      role="menuitem"
                    >
                      {category}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <Link href="/services" className="text-purple-700 hover:text-purple-900">Services</Link>
            <Link href="/about" className="text-purple-700 hover:text-purple-900">About</Link>
            <Link href="/newsletter" className="text-purple-700 hover:text-purple-900">Newsletter</Link>
            <Link href="/contact" className="text-purple-700 hover:text-purple-900">Contact</Link>
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-purple-700 hover:text-purple-900">
              <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block text-purple-700 hover:text-purple-900 px-3 py-2">Home</Link>
            <div className="relative">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="text-purple-700 hover:text-purple-900 px-3 py-2 w-full text-left flex justify-between items-center"
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
                      className="block text-sm text-purple-700 hover:text-purple-900 py-1"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/services" className="block text-purple-700 hover:text-purple-900 px-3 py-2">Services</Link>
            <Link href="/about" className="block text-purple-700 hover:text-purple-900 px-3 py-2">About</Link>
            <Link href="/newsletter" className="block text-purple-700 hover:text-purple-900 px-3 py-2">Newsletter</Link>
            <Link href="/contact" className="block text-purple-700 hover:text-purple-900 px-3 py-2">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}