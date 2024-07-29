import React from 'react';

const services = [
  {
    title: 'Chemical Importing',
    description: 'We specialize in sourcing and importing specialty chemicals from trusted global suppliers.',
    icon: '🧪'
  },
  {
    title: 'Consulting Services',
    description: 'Our expert team provides comprehensive consulting on regulatory compliance and supply chain optimization.',
    icon: '📊'
  },
  {
    title: 'Custom Solutions',
    description: 'We offer tailored chemical solutions and formulations to meet your specific industry requirements.',
    icon: '🔬'
  }
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-primary mb-8">Our Services</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="border rounded p-6">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}