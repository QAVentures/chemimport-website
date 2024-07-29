'use client';

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface IFormInputs {
  email: string;
}

export default function NewsletterPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error('Subscription failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Subscription failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-primary mb-8">Chemical Industry Newsletter</h1>
      
      {isSubmitted ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          <h2 className="font-bold text-xl mb-2">Thank you for subscribing!</h2>
          <p>You&apos;ve successfully subscribed to the KSY Group newsletter. Check your email for a confirmation message with more details about what to expect.</p>
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
          <button 
            type="submit" 
            className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark disabled:bg-gray-400"
            disabled={isLoading}
          >
            {isLoading ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
      )}
            
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">What You&apos;ll Receive</h2>
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