import React from 'react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-primary mb-8">About ChemImport</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="mb-4">
            Founded in 2004, ChemImport has grown from a small local distributor to a leading chemical importer serving clients across the United States. Our journey has been driven by a passion for quality, innovation, and customer satisfaction.
          </p>
          <p>
            With two decades of experience, we've built strong relationships with global suppliers and local manufacturers, positioning us as a trusted name in the industry.
          </p>
        </div>
        <div className="relative h-64 md:h-auto">
          <Image src="/images/about-image.jpg" alt="ChemImport team" layout="fill" objectFit="cover" className="rounded-lg" />
        </div>
      </div>
      
      <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {['Quality', 'Reliability', 'Innovation', 'Sustainability'].map((value, index) => (
          <div key={index} className="border rounded p-4">
            <h3 className="text-xl font-semibold mb-2">{value}</h3>
            <p className="text-gray-600">Brief description of the value and its importance to our company.</p>
          </div>
        ))}
      </div>
    </div>
  );
}