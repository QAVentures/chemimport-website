'use client';

import React, { useState , useRef , useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const productCategories = [
  { name: "Organic Chemicals", subtext: "Carbon-based compounds Bulk & Fine Chemicals", image: "/images/bulk-chemicals-home.jpeg" },
  { name: "Inorganic Chemicals", subtext: "Mineral-based chemicals for industrial use", image: "/images/inorganic-chemicals.jpg" },
  { name: "Agro Chemicals", subtext: "Enhancing agricultural productivity and crop protection", image: "/images/agro-chemicals.jpg" },
  { name: "Cosmetic Chemicals", subtext: "Innovative solutions for personal care products", image: "/images/cosmetic-chemicals.jpg" },
  { name: "Construction Chemicals", subtext: "Improving durability and performance in building materials", image: "/images/construction-chemicals.jpg" },
  { name: "Nutraceuticals", subtext: "Health-promoting compounds for dietary supplements", image: "/images/nutracuticals.jpg" }
];

export default function Home() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubscriptionStatus('success');
        setEmail('');
      } else {
        throw new Error('Subscription failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubscriptionStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  const Carousel = () => {
    const carouselRef = useRef<HTMLDivElement | null>(null);
    const [isPaused, setIsPaused] = useState(false);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        if (!isPaused && carouselRef.current) {
          const firstItem = carouselRef.current.querySelector('.carousel-item');
          if (firstItem) { // Add null check for firstItem
            carouselRef.current.appendChild(firstItem.cloneNode(true));
            carouselRef.current.removeChild(firstItem);
          }
        }
      }, 3000);
  
      return () => clearInterval(intervalId);
    }, [isPaused]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
    <section className="hero bg-base-200 py-10 md:py-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image src="/images/hero-image.jpg" alt="Chemical lab" width={600} height={400} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Your Global Partner in Chemical Distribution</h1>
          <p className="py-6">
            Connecting you with top manufacturers in Specialty, Organic, Inorganic, Agro Chemicals, Cosmetics, Construction Chemicals, and Nutraceuticals. Providing innovative solutions and quality products to meet your industry needs.
          </p>
          <Link href="/products" className="btn btn-primary">Explore Our Products</Link>
        </div>
      </div>
    </section>

      {/* Product Categories Section */}
      <section className="py-10 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Chemical Portfolio</h2>
          <div 
            ref={carouselRef}
            className="carousel carousel-center w-full p-4 space-x-4 bg-neutral rounded-box mx-auto"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {productCategories.map((category, index) => (
              <div key={index} className="carousel-item">
                <div className="card w-64 bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <figure className="px-4 pt-4">
                    <Image 
                      src={category.image} 
                      alt={category.name} 
                      width={300} 
                      height={200} 
                      className="rounded-xl object-cover w-full h-48" 
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title text-lg">{category.name}</h2>
                    <p className="text-sm">{category.subtext}</p>
                    <div className="card-actions justify-end mt-2">
                      <Link 
                        href={`/products/${category.name.toLowerCase().replace(/\s+/g, '-')}`} 
                        className="btn btn-primary btn-sm"
                      >
                        Explore
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section className="bg-base-200 py-10 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Chemical Importing', 'Consulting Services', 'Industry Newsletter'].map((service, index) => (
              <div key={index} className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">{service}</h2>
                  <p>Brief description of the service and its benefits.</p>
                  <div className="card-actions justify-end">
                    <Link href={`/services#${service.toLowerCase().replace(' ', '-')}`} className="btn btn-primary">Learn More</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Preview */}
      <section className="py-10 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-xl mb-8">With over 20 years of experience, we provide top-quality chemicals and expert consulting services.</p>
          <Link href="/about" className="btn btn-primary">Learn More</Link>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-primary text-primary-content py-10 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Stay Informed</h2>
          <p className="text-xl mb-8 text-center">Subscribe to our newsletter for the latest chemical industry updates and exclusive offers.</p>
          {subscriptionStatus === 'success' ? (
            <div className="alert alert-success">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>Thank you for subscribing! Check your email for a confirmation message.</span>
            </div>
          ) : subscriptionStatus === 'error' ? (
            <div className="alert alert-error">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>Oops! Something went wrong. Please try again later or contact us for assistance.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row justify-center items-center">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address" 
                className="input input-bordered w-full max-w-xs mb-2 sm:mb-0 sm:mr-2" 
                required
              />
              <button 
                type="submit" 
                className={`btn btn-secondary ${isLoading ? 'loading' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}