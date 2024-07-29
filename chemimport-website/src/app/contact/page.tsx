'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (data) => {
    // Here you would typically send the data to your API
    console.log(data);
    setIsSubmitted(true);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-primary mb-8">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          {isSubmitted ? (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
              Thank you for your message. We'll get back to you soon!
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2">Name</label>
                <input
                  {...register('name', { required: 'Name is required' })}
                  id="name"
                  className="w-full p-2 border rounded"
                />
                {errors.name && <p className="text-red-500">{errors.name.message}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2">Email</label>
                <input
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  id="email"
                  className="w-full p-2 border rounded"
                />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  id="message"
                  rows={4}
                  className="w-full p-2 border rounded"
                ></textarea>
                {errors.message && <p className="text-red-500">{errors.message.message}</p>}
              </div>
              <button type="submit" className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark">
                Send Message
              </button>
            </form>
          )}
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="mb-2"><strong>Address:</strong> 123 Chemical Lane, Molecule City, CH 12345</p>
          <p className="mb-2"><strong>Phone:</strong> (123) 456-7890</p>
          <p className="mb-2"><strong>Email:</strong> info@chemimport.com</p>
          <p className="mb-4"><strong>Business Hours:</strong> Monday - Friday: 9am - 5pm</p>
          <div className="bg-gray-200 h-64 rounded-lg">
            {/* Placeholder for map */}
            <p className="text-center pt-28">Map placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
}