'use client';
import React, { useState } from 'react';
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

  const handleProductClick = (category: string) => {
    router.push(`/products?category=${encodeURIComponent(category)}`);
    setIsOpen(false);
  };

  return (
    <div className="navbar bg-purple-700 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          {isOpen && (
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-purple-800 rounded-box w-52">
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
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="/" className="text-white hover:bg-purple-600">Home</Link></li>
          <li tabIndex={0}>
            <details>
              <summary className="text-white hover:bg-purple-600">Products</summary>
              <ul className="p-2 bg-purple-800 rounded-t-none">
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
      <div className="navbar-end">
        <Link href="/contact" className="btn btn-ghost text-white hover:bg-purple-600">Get a Quote</Link>
      </div>
    </div>
  );
}