'use client';
import React, { useState, useEffect, useRef } from 'react';
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
<<<<<<< HEAD
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDetailsElement>(null);

  const handleProductClick = (category: string) => {
    router.push(`/products?category=${encodeURIComponent(category)}`);
    closeSidebar();
    closeDropdowns();
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  const toggleProducts = () => setIsProductsOpen(!isProductsOpen);
  const closeDropdowns = () => {
    setIsProductsOpen(false);
    if (dropdownRef.current) dropdownRef.current.open = false;
=======
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLUListElement>(null);

  const handleProductClick = (category: string) => {
    router.push(`/products?category=${encodeURIComponent(category)}`);
    setIsOpen(false);
>>>>>>> 13d51cd4033c8e7e91045ec8be0ac9c06421463c
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
<<<<<<< HEAD
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        closeSidebar();
      }
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        closeDropdowns();
=======
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
>>>>>>> 13d51cd4033c8e7e91045ec8be0ac9c06421463c
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const SidebarLink: React.FC<{ href: string; onClick?: () => void; children: React.ReactNode }> = ({ href, onClick, children }) => (
    <li>
      <Link href={href} className="block py-2 px-4 hover:bg-gray-100" onClick={onClick}>
        {children}
      </Link>
    </li>
  );

  return (
<<<<<<< HEAD
    <header className="bg-white shadow-md relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            {/* Mobile menu button - now on the far left */}
            <button className="lg:hidden mr-4" onClick={toggleSidebar}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
=======
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
>>>>>>> 13d51cd4033c8e7e91045ec8be0ac9c06421463c
              </svg>
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image src="/images/KSY LOGO FILE.png" alt="KSY Group Logo" width={108} height={57} />
            </Link>
          </div>
<<<<<<< HEAD

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center space-x-4">
            <Link href="/" className="nav-link">Home</Link>
            <div className="relative group">
              <button onClick={toggleProducts} className="nav-link">
=======
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
>>>>>>> 13d51cd4033c8e7e91045ec8be0ac9c06421463c
                Products
                <svg className="w-4 h-4 ml-1 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
<<<<<<< HEAD
              {isProductsOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  {productCategories.map((category, index) => (
                    <li key={index}>
                      <a onClick={() => handleProductClick(category)} className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        {category}
                      </a>
                    </li>
=======
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
>>>>>>> 13d51cd4033c8e7e91045ec8be0ac9c06421463c
                  ))}
                </ul>
              )}
            </div>
<<<<<<< HEAD
            <Link href="/services" className="nav-link">Services</Link>
            <Link href="/about" className="nav-link">About</Link>
            <Link href="/newsletter" className="nav-link">Newsletter</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
          </nav>

          {/* <a className="hidden lg:inline-block btn btn-primary">Get a Quote</a> */}
=======
            <Link href="/services" className="block text-purple-700 hover:text-white hover:bg-purple-700 px-3 py-2 font-semibold text-lg">Services</Link>
            <Link href="/about" className="block text-purple-700 hover:text-white hover:bg-purple-700 px-3 py-2 font-semibold text-lg">About</Link>
            <Link href="/newsletter" className="block text-purple-700 hover:text-white hover:bg-purple-700 px-3 py-2 font-semibold text-lg">Newsletter</Link>
            <Link href="/contact" className="block text-purple-700 hover:text-white hover:bg-purple-700 px-3 py-2 font-semibold text-lg">Contact</Link>
          </div>
>>>>>>> 13d51cd4033c8e7e91045ec8be0ac9c06421463c
        </div>
      </div>

      {/* Mobile sidebar */}
      <div 
        ref={sidebarRef}
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4">
          <button className="absolute top-4 right-4" onClick={closeSidebar}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <ul className="mt-8">
            <SidebarLink href="/" onClick={closeSidebar}>Home</SidebarLink>
            <li>
              <button onClick={toggleProducts} className="flex justify-between items-center w-full py-2 px-4 hover:bg-gray-100">
                Products
                <svg className={`w-4 h-4 transition-transform duration-200 ${isProductsOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isProductsOpen && (
                <ul className="ml-4">
                  {productCategories.map((category, index) => (
                    <li key={index}>
                      <a onClick={() => handleProductClick(category)} className="block py-2 px-4 hover:bg-gray-100 cursor-pointer">
                        {category}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <SidebarLink href="/services" onClick={closeSidebar}>Services</SidebarLink>
            <SidebarLink href="/about" onClick={closeSidebar}>About</SidebarLink>
            <SidebarLink href="/newsletter" onClick={closeSidebar}>Newsletter</SidebarLink>
            <SidebarLink href="/contact" onClick={closeSidebar}>Contact</SidebarLink>
          </ul>
        </div>
      </div>
    </header>
  );
}

