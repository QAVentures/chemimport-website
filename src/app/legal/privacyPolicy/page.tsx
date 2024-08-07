'use client';
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-[#F5F7FA] min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-[#1E5C9B] mb-8 font-roboto-slab">ChemImport Privacy Policy</h1>
        <p className="text-lg text-gray-600 mb-8">Last updated: August 6, 2024</p>

        <div className="bg-white rounded-lg shadow-md p-8">
          <Section title="1. Introduction">
            <p>
              ChemImport ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy 
              explains how we collect, use, disclose, and safeguard your information when you visit our 
              website or use our services.
            </p>
          </Section>

          <Section title="2. Information We Collect">
            <p>We collect information that you provide directly to us, such as when you create an account, 
            place an order, sign up for our newsletter, or contact us. This may include:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company name</li>
              <li>Shipping and billing address</li>
              <li>Payment information</li>
            </ul>
            <p className="mt-4">We also automatically collect certain information about your device and how you interact with our website, including:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device type</li>
              <li>Pages visited</li>
              <li>Time spent on pages</li>
            </ul>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Process and fulfill your orders</li>
              <li>Communicate with you about your orders, account, or requests</li>
              <li>Send you marketing communications (if you've opted in)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </Section>

          <Section title="4. How We Share Your Information">
            <p>We may share your information with:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Service providers who perform services on our behalf</li>
              <li>Business partners, with your consent</li>
              <li>Legal authorities, when required by law or to protect our rights</li>
            </ul>
          </Section>

          <Section title="5. Your Choices">
            <p>
              You can opt out of receiving marketing communications from us at any time. You may also 
              request to access, correct, or delete your personal information.
            </p>
          </Section>

          <Section title="6. Data Security">
            <p>
              We implement appropriate technical and organizational measures to protect your personal 
              information from unauthorized access, disclosure, alteration, and destruction.
            </p>
          </Section>

          <Section title="7. International Data Transfers">
            <p>
              Your information may be transferred to and processed in countries other than your own. 
              We will take appropriate measures to protect your personal information in accordance 
              with this Privacy Policy.
            </p>
          </Section>

          <Section title="8. Children's Privacy">
            <p>
              Our website is not intended for children under 13 years of age. We do not knowingly 
              collect personal information from children under 13.
            </p>
          </Section>

          <Section title="9. Changes to This Privacy Policy">
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes 
              by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </Section>

          <Section title="10. Contact Us">
            <p>
              If you have any questions about this Privacy Policy, please contact us at 
              <a href="mailto:privacy@chemimport.com" className="text-[#1E5C9B] hover:underline"> privacy@chemimport.com</a>.
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
};

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="mb-8">
    <h2 className="text-2xl font-semibold text-[#1E5C9B] mb-4 font-roboto-slab">{title}</h2>
    <div className="text-gray-700 leading-relaxed">{children}</div>
  </section>
);

export default PrivacyPolicy;