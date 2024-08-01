'use client';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
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

  // Close dropdown when clicking outside of it
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
    <div>
      {/* Updated contact section with 30px height and no padding */}
      <div className="header-top bg-white text-purple-700 h-[30px] flex items-center">
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
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="navbar bg-purple-700 text-white">
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
                  <Link href="/" className="btn btn-ghost normal-case text-xl">KSY Group LLC</Link>
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
                  {productCategories.map((category, index) => (
                    <li key={index}><a onClick={() => handleProductClick(category)} className="text-white hover:bg-purple-600">{category}</a></li>
                  ))}
                </ul>
              </details>
            </li>
            <li><Link href="/services" className="text-white hover:bg-purple-600">Services</Link></li>
            <li><Link href="/about" className="text-white hover:bg-purple-600">About</Link></li>
            <li><Link href="/newsletter" className="text-white hover:bg-purple-600">Newsletter</Link></li>
            <li><Link href="/contact" className="text-white hover:bg-purple-600">Contact</Link></li>
          </ul>
        </div>
        <div className="navbar-end flex items-center space-x-4">
          <div className="flex items-center mr-auto">
            <Link href="/contact" className="btn btn-ghost text-white border border-white rounded-full px-4 py-2 hover:bg-purple-600">Get a Quote</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
