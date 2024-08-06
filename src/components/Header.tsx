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
<<<<<<< HEAD
    <div>
      {/* Updated contact section with 30px height and no padding */}
      {/* <div className="header-top bg-white text-purple-700 h-[30px] flex items-center">
        <div className="container-fluid p-0">
          <div className="row align-items-center h-full">
            <div className="col-md-6">
              <div className="d-flex">
                <a href="mailto:demo@gmail.com" className="d-flex align-items-center mr-4 text-purple-700 hover:text-purple-900">
                  <i className="fa fa-envelope mr-2"></i>
                  <span>demo@gmail.com</span>
                </a>
                <a href="tel:+01123455678990" className="d-flex align-items-center text-purple-700 hover:text-purple-900">
                  <i className="fa fa-phone mr-2"></i>
                  <span>+01 123455678990</span>
                </a>
              </div>
            </div>
            <div className="col-md-6 text-right">
              <div className="d-inline-block">
                <a href="#" className="p-2 text-purple-700 hover:text-purple-900"><i className="fa fa-twitter"></i></a>
                <a href="#" className="p-2 text-purple-700 hover:text-purple-900"><i className="fa fa-facebook"></i></a>
                <a href="#" className="p-2 text-purple-700 hover:text-purple-900"><i className="fa fa-linkedin"></i></a>
                <a href="#" className="p-2 text-purple-700 hover:text-purple-900"><i className="fa fa-instagram"></i></a>
=======
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
>>>>>>> 4c9ca7f09943d1b2096627e76da59974adbfebb7
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
<<<<<<< HEAD
      </div> */}

      {/* Navbar */}
      <div className="navbar bg-purple-400 text-white" style={{ height: '75px' }}>
      <div className="navbar-start">
        <header className="header_section">
          <div className="header_bottom">
            <div className="container-fluid">
              <nav className="navbar navbar-expand-lg custom_nav-container">
                <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                  </label>
                  {isOpen && (
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-purple-800 rounded-box w-64" ref={dropdownRef}>
                      <li><Link href="/" onClick={() => setIsOpen(false)} className="text-white hover:bg-purple-600">Home</Link></li>
                      <li>
                        <a className="text-white hover:bg-purple-600">Products</a>
                        <ul className="p-2 bg-purple-800">
                          {productCategories.map((category, index) => (
                            <li key={index}><a onClick={() => handleProductClick(category)} className="text-white hover:bg-purple-600">{category}</a></li>
                          ))}
                        </ul>
                      </li>
                      <li><Link href="/services" onClick={() => setIsOpen(false)} className="text-white hover:bg-purple-600">Services</Link></li>
                      <li><Link href="/about" onClick={() => setIsOpen(false)} className="text-white hover:bg-purple-600">About</Link></li>
                      <li><Link href="/newsletter" onClick={() => setIsOpen(false)} className="text-white hover:bg-purple-600">Newsletter</Link></li>
                      <li><Link href="/contact" onClick={() => setIsOpen(false)} className="text-white hover:bg-purple-600">Contact</Link></li>
                    </ul>
                  )}
                </div>
                <div className="flex justify-center items-center py-4">
                  <a href="/" className="block">
                    <img src="/images/KSYLogo.png" alt="Your Website Logo" style={{marginRight: '10px', width: '60px', height: '60px' }} />
                  </a>
                </div>
                <Link href="/" className="btn btn-ghost normal-case text-xl">KSY Group</Link>
              </nav>
            </div>
          </div>
        </header>
      </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link href="/" className="text-white hover:bg-purple-600">Home</Link></li>
            <li tabIndex={0}>
              <details>
                <summary className="text-white hover:bg-purple-600">Products</summary>
                <ul className="p-2 bg-purple-800 rounded-t-none w-64">
=======
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
>>>>>>> 4c9ca7f09943d1b2096627e76da59974adbfebb7
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