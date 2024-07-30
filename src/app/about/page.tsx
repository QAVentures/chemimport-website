import React from 'react';
import Image from 'next/image';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const teamMembers = [
  {
    name: "Kathan",
    role: "Head of Business Development",
    image: "/images/kathan.jpg",
    linkedin: "https://www.linkedin.com/in/kathan",
    twitter: "https://twitter.com/kathan",
    email: "kathan@ksygroup.com"
  },
  {
    name: "Shivam",
    role: "Head of Marketing",
    image: "/images/shivam.jpg",
    linkedin: "https://www.linkedin.com/in/shivam",
    twitter: "https://twitter.com/shivam",
    email: "shivam@ksygroup.com"
  },
  {
    name: "Yash",
    role: "Head of Analytics",
    image: "/images/yash.jpg",
    linkedin: "https://www.linkedin.com/in/yash",
    twitter: "https://twitter.com/yash",
    email: "yash@ksygroup.com"
  }
];

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-primary mb-8 text-center">About KSY Group LLC</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
          <p className="mb-4 text-lg">
            Born from insight and forged in adversity, KSY Group LLC emerged during the tumultuous pandemic of 2020. As the world grappled with unprecedented supply chain disruptions, our founders saw not just challenges, but opportunities to revolutionize chemical distribution on a global scale.
          </p>
          <p className="mb-4 text-lg">
            The Suez Canal blockage in subsequent years only reinforced our vision: the world needed a more resilient, adaptable, and innovative approach to chemical sourcing and distribution. KSY Group LLC was poised to answer that call.
          </p>
          <p className="text-lg">
            Today, we stand as a testament to perseverance, expertise, and unwavering commitment to quality. While we currently focus on sourcing from India and importing to the US, our sights are set on a broader horizon - building a truly global presence in the chemical distribution landscape.
          </p>
        </div>
        <div className="relative h-96 md:h-auto">
          <Image 
            src="/images/global-chemical-distribution.jpg" 
            alt="Global Chemical Distribution" 
            layout="fill" 
            objectFit="cover" 
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
      
      <h2 className="text-3xl font-semibold mb-8 text-center">Our Core Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {[
          { title: 'Trust', description: 'We build lasting relationships based on transparency and reliability.' },
          { title: 'Expertise', description: 'Our team brings deep industry knowledge and innovative solutions to every challenge.' },
          { title: 'Agility', description: 'We adapt quickly to market changes, ensuring uninterrupted supply for our clients.' },
          { title: 'Quality', description: 'We maintain rigorous standards in all aspects of our operations, from sourcing to delivery.' }
        ].map((value, index) => (
          <div key={index} className="border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
            <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
            <p className="text-gray-600">{value.description}</p>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-semibold mb-8 text-center">Meet Our Leadership Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-4">
              <Image 
                src={member.image} 
                alt={member.name} 
                layout="fill" 
                objectFit="cover" 
                className="rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
            <p className="text-gray-600 mb-4">{member.role}</p>
            <div className="flex justify-center space-x-4">
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                <FaLinkedin size={24} />
              </a>
              <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                <FaTwitter size={24} />
              </a>
              <a href={`mailto:${member.email}`} className="text-gray-600 hover:text-gray-800">
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
        ))}
      </div>

      <section className="bg-gray-100 p-8 rounded-lg mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Commitment to Excellence</h2>
        <p className="text-lg mb-4">
          At KSY Group LLC, we understand that in the world of chemical distribution, precision and reliability are paramount. That's why we've built our reputation on:
        </p>
        <ul className="list-disc list-inside mb-4 text-lg">
          <li>Meticulous documentation and record-keeping</li>
          <li>Stringent quality control measures</li>
          <li>A customer-first approach to problem-solving</li>
          <li>Continuous learning and adaptation to industry best practices</li>
        </ul>
        <p className="text-lg">
          Our founders bring a wealth of experience and a fresh perspective to the industry, combining time-tested wisdom with innovative approaches to meet the evolving needs of our clients.
        </p>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-6">Join Us on Our Journey</h2>
        <p className="text-xl mb-8">
          As we expand our global footprint, we invite you to be part of our story. Experience the KSY Group LLC difference - where trust meets expertise, and where your chemical sourcing needs are not just met, but exceeded.
        </p>
        <a href="/contact" className="btn btn-primary btn-lg">Connect With Us Today</a>
      </section>
    </div>
  );
};

export default AboutPage;