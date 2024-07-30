'use client';
import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const productCategories = [
  "Organic Chemicals",
  "Inorganic Chemicals",
  "Agro Chemicals",
  "Cosmetic Chemicals",
  "Construction Chemicals",
  "Nutraceuticals"
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-content p-10">
      <div className="footer container mx-auto">
        <div>
          <span className="footer-title">KSY Group LLC</span> 
          <p className="max-w-xs mt-2">Your trusted partner in chemical distribution, providing innovative solutions and quality products to meet your industry needs.</p>
        </div> 
        <div>
          <span className="footer-title">Products</span> 
          {productCategories.map((category, index) => (
            <Link key={index} href={`/products/${category.toLowerCase().replace(/\s+/g, '-')}`} className="link link-hover">
              {category}
            </Link>
          ))}
        </div> 
        <div>
          <span className="footer-title">Company</span> 
          <Link href="/" className="link link-hover">Home</Link>
          <Link href="/about" className="link link-hover">About us</Link>
          <Link href="/services" className="link link-hover">Services</Link>
          <Link href="/contact" className="link link-hover">Contact</Link>
          <Link href="/newsletter" className="link link-hover">Newsletter</Link>
        </div> 
        <div>
          <span className="footer-title">Legal</span> 
          <Link href="/terms" className="link link-hover">Terms of use</Link>
          <Link href="/privacy" className="link link-hover">Privacy policy</Link>
          <Link href="/cookie-policy" className="link link-hover">Cookie policy</Link>
        </div>
      </div>
      <div className="footer container mx-auto mt-10 pt-10 border-t border-primary-content">
        <div className="md:place-self-center md:justify-self-start">
          <div className="grid grid-flow-col gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-square">
              <FaFacebookF size={24} />
            </a> 
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-square">
              <FaTwitter size={24} />
            </a> 
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-square">
              <FaLinkedinIn size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-square">
              <FaInstagram size={24} />
            </a>
          </div>
        </div> 
        <div className="md:place-self-center md:justify-self-end">
          <p>123 Chemical Lane, Molecule City, CH 12345</p>
          <p>Email: info@ksygroup.com | Phone: (123) 456-7890</p>
          <p>&copy; 2024 KSY Group LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}