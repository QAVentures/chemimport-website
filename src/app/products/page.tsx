import React from 'react';
import Link from 'next/link';

const products = [
  { id: 1, name: 'Product 1', category: 'Organic Chemicals' },
  { id: 2, name: 'Product 2', category: 'Inorganic Chemicals' },
  { id: 3, name: 'Product 3', category: 'Specialty Chemicals' },
  { id: 4, name: 'Product 4', category: 'Organic Chemicals' },
  // Add more products as needed
];

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-primary mb-8">Our Products</h1>
      
      {/* Search and Filter */}
      <div className="mb-8">
        <input 
          type="text" 
          placeholder="Search products..." 
          className="w-full p-2 border rounded"
        />
      </div>
      
      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.category}</p>
            <Link href={`/products/${product.id}`} className="text-primary hover:underline">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}