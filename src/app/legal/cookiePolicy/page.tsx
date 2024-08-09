'use client';
import React from 'react';

const CookiePolicy: React.FC = () => {
  return (
    <div className="bg-[#F5F7FA] min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-[#1E5C9B] mb-8 font-roboto-slab">ChemImport Cookie Policy</h1>
        <p className="text-lg text-gray-600 mb-8">Last updated: August 6, 2024</p>

        <div className="bg-white rounded-lg shadow-md p-8">
          <Section title="1. Introduction">
            <p>
              This Cookie Policy (&quot;Policy&quot;) is an integral part of the ChemImport website (&quot;Site&quot;), 
              which is owned and operated exclusively by KSY Group. This Policy outlines our practices 
              regarding the use of cookies and similar technologies on our Site. By accessing or using 
              our Site, you expressly consent to the use of cookies in accordance with this Policy.
            </p>
            <p className="mt-4">
              <strong>KSY Group reserves the right to modify this Policy at any time without prior notice. 
              Your continued use of the Site following any changes constitutes your acceptance of such changes.</strong>
            </p>
          </Section>

          <Section title="2. What Are Cookies">
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you visit 
              a website. They are widely used to make websites work more efficiently and provide information 
              to the owners of the site. KSY Group employs cookies and similar technologies to collect and 
              store information when you visit our Site.
            </p>
          </Section>

          <Section title="3. How We Use Cookies">
            <p>KSY Group utilizes cookies for the following purposes:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>To enable and enhance certain functions of the Site</li>
              <li>To provide analytics and gather insights about Site usage</li>
              <li>To store your preferences and optimize your user experience</li>
              <li>To help us deliver relevant advertising and marketing communications</li>
              <li>To ensure the security and integrity of our Site</li>
            </ul>
          </Section>

          <Section title="4. Types of Cookies We Use">
            <p><strong>KSY Group employs the following types of cookies:</strong></p>
            <ul className="list-disc pl-6 mt-2">
              <li><strong>Essential Cookies:</strong> These cookies are strictly necessary for the operation of our Site. They enable core functionality such as security, network management, and accessibility.</li>
              <li><strong>Analytics Cookies:</strong> We use these cookies to collect information about how visitors use our Site, which allows us to improve our services and your user experience.</li>
              <li><strong>Functionality Cookies:</strong> These cookies allow the Site to remember choices you make and provide enhanced, more personal features.</li>
              <li><strong>Advertising Cookies:</strong> We may use these cookies to deliver advertisements that are more relevant to you and your interests.</li>
            </ul>
          </Section>

          <Section title="5. Your Choices Regarding Cookies">
            <p>
              While KSY Group requires the use of certain essential cookies for the proper functioning of 
              our Site, you have the right to accept or decline other types of cookies. You can modify your 
              browser settings to decline cookies if you prefer. However, this may prevent you from taking 
              full advantage of the Site and its features.
            </p>
            <p className="mt-4">
              <strong>By continuing to use our Site without changing your cookie settings, you are agreeing 
              to our use of cookies as described in this Policy.</strong>
            </p>
          </Section>

          <Section title="6. Third-Party Cookies">
            <p>
              KSY Group may allow third-party service providers to place cookies on our Site for the purposes 
              outlined in this Policy. These third-party cookies are governed by the respective privacy policies 
              of these third parties, and KSY Group does not have control over these cookies.
            </p>
          </Section>

          <Section title="7. Data Collection and Use">
            <p>
              <strong>All data collected through cookies on our Site is owned exclusively by KSY Group. 
              We reserve the right to use this data for any purpose we deem appropriate, in accordance 
              with applicable laws and regulations.</strong>
            </p>
          </Section>

          <Section title="8. Updates to This Cookie Policy">
            <p>
              KSY Group reserves the right to modify this Cookie Policy at any time, at its sole discretion. 
              Changes will be effective immediately upon posting on this Site. Your continued use of the Site 
              after any changes to this Policy constitutes your acceptance of such changes.
            </p>
          </Section>

          <Section title="9. Governing Law">
            <p>
              This Cookie Policy shall be governed by and construed in accordance with the laws of the State 
              of Delaware, United States, without regard to its conflict of law provisions. Any disputes arising 
              under or in connection with this Policy shall be subject to the exclusive jurisdiction of the 
              courts located in Delaware.
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

export default CookiePolicy;