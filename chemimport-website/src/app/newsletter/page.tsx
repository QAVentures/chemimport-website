'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function NewsletterPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (data) => {
    // Here you would typically send the data to your API
    console.log(data);
    setIsSubmitted(true);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-primary mb-8">Chemical Industry Newsletter</h1>
      
      {isSubmitted ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          Thank you for subscribing to our newsletter!
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md">
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Email Address</label>
            <input
              {...register('email', { 
                required: 'Email is required', 
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
              id="email"
              type="email"
              className="w-full p-2 border rounded"
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>
          <button type="submit" className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark">
            Subscribe
          </button>
        </form>
      )}
      
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">What You'll Receive</h2>
        <ul className="list-disc list-inside">
          <li>Monthly industry updates</li>
          <li>Exclusive offers and promotions</li>
          <li>Insights from chemical industry experts</li>
          <li>Information about new products and services</li>
        </ul>
      </div>
    </div>
  );
}