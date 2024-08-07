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
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleProductClick = (category) => {
    router.push(`/products?category=${encodeURIComponent(category)}`);
    setIsOpen(false);
    setIsProductsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setIsProductsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-purple-400 text-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-[75px]">
          <Link href="/" className="flex items-center">
            <Image src="/images/KSYLogo.png" alt="KSY Group" width={60} height={60} objectFit="contain" />
            <span className="ml-2 text-xl font-bold">KSY Group</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-white hover:text-purple-200">Home</Link>
            <div className="relative group">
              <button 
                className="text-white hover:text-purple-200 flex items-center"
                onClick={() => setIsProductsOpen(!isProductsOpen)}
              >
                Products
                <svg className="ml-1 h-4 w-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {isProductsOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    {productCategories.map((category, index) => (
                      <a
                        key={index}
                        href={`/products?category=${encodeURIComponent(category)}`}
                        className="block px-4 py-2 text-sm text-purple-700 hover:bg-purple-100 hover:text-purple-900"
                        role="menuitem"
                        onClick={() => handleProductClick(category)}
                      >
                        {category}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link href="/services" className="text-white hover:text-purple-200">Services</Link>
            <Link href="/about" className="text-white hover:text-purple-200">About</Link>
            <Link href="/newsletter" className="text-white hover:text-purple-200">Newsletter</Link>
            <Link href="/contact" className="text-white hover:text-purple-200">Contact</Link>
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-purple-200">
              <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden" ref={dropdownRef}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-purple-500">
            <Link href="/" className="block text-white hover:bg-purple-600 px-3 py-2" onClick={() => setIsOpen(false)}>Home</Link>
            <div className="relative">
              <button 
                onClick={() => setIsProductsOpen(!isProductsOpen)} 
                className="text-white hover:bg-purple-600 px-3 py-2 w-full text-left flex justify-between items-center"
              >
                Products
                <svg className="h-4 w-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {isProductsOpen && (
                <div className="px-4 py-2 bg-purple-600">
                  {productCategories.map((category, index) => (
                    <a
                      key={index} 
                      href={`/products?category=${encodeURIComponent(category)}`}
                      className="block text-sm text-white hover:bg-purple-700 py-1"
                      onClick={() => handleProductClick(category)}
                    >
                      {category}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <Link href="/services" className="block text-white hover:bg-purple-600 px-3 py-2" onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="/about" className="block text-white hover:bg-purple-600 px-3 py-2" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/newsletter" className="block text-white hover:bg-purple-600 px-3 py-2" onClick={() => setIsOpen(false)}>Newsletter</Link>
            <Link href="/contact" className="block text-white hover:bg-purple-600 px-3 py-2" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}