// app/legal/termsOfUse/page.tsx
'use client';

import React from 'react';

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="mb-8">
    <h2 className="text-2xl font-semibold text-[#1E5C9B] mb-4 font-roboto-slab">{title}</h2>
    <div className="text-gray-700 leading-relaxed">{children}</div>
  </section>
);

export default function TermsOfUse() {
  return (
    <div className="bg-[#F5F7FA] min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-[#1E5C9B] mb-8 font-roboto-slab">ChemImport Terms of Use</h1>
        <p className="text-lg text-gray-600 mb-8">Last updated: August 6, 2024</p>

        <div className="bg-white rounded-lg shadow-md p-8">
          <Section title="1. Acceptance of Terms">
            <p>
              By accessing and using the ChemImport website (the "Site"), you accept and agree 
              to be bound by these Terms of Use. If you do not agree to these terms, please do 
              not use our Site.
            </p>
          </Section>

          <Section title="2. Use of the Site">
            <p>
              You agree to use the Site only for lawful purposes and in a way that does not 
              infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the Site.
            </p>
          </Section>

          <Section title="3. Intellectual Property">
            <p>
              The content on this Site, including without limitation, the text, software, scripts, 
              graphics, photos, sounds, music, videos, interactive features and the like and the 
              trademarks, service marks and logos contained therein, are owned by or licensed to 
              ChemImport, a subsidiary of KSY Group. This content is subject to copyright and other 
              intellectual property rights laws. All rights are reserved by KSY Group.
            </p>
          </Section>

          <Section title="4. Product Information">
            <p>
              While we strive to provide accurate product information, it is provided "as is" 
              without any representations or warranties, express or implied. ChemImport does not 
              warrant that product descriptions or other content of the site is accurate, complete, 
              reliable, current, or error-free.
            </p>
          </Section>

          <Section title="5. Pricing and Availability">
            <p>
              All prices are subject to change without notice. ChemImport reserves the right to 
              modify or discontinue any product without notice. We are not responsible if a product 
              is not available or if there are errors in pricing information.
            </p>
          </Section>

          <Section title="6. User Submissions">
            <p>
              Any material, information or idea you transmit to or post on this Site will be 
              treated as non-confidential and non-proprietary.
            </p>
          </Section>

          <Section title="7. Disclaimer of Warranties">
            <p>
              The Site is provided on an "as is" and "as available" basis without any warranties 
              of any kind, whether express or implied.
            </p>
          </Section>

          <Section title="8. Limitation of Liability">
            <p>
              In no event shall ChemImport or KSY Group be liable for any direct, indirect, 
              incidental, special or consequential damages arising out of or in any way connected 
              with the use of this Site.
            </p>
          </Section>

          <Section title="9. Indemnification">
            <p>
              You agree to indemnify and hold ChemImport and KSY Group harmless from any claim 
              or demand made by any third party due to or arising out of your use of the Site.
            </p>
          </Section>

          <Section title="10. Governing Law">
            <p>
              These Terms of Use shall be governed by and construed in accordance with the laws 
              of the State of Delaware, United States, without regard to its conflict of law provisions.
            </p>
          </Section>

          <Section title="11. Changes to Terms">
            <p>
              ChemImport reserves the right to modify these Terms of Use at any time. We will 
              post any changes on this page and update the "Last updated" date at the top of this page.
            </p>
          </Section>

          <Section title="12. Contact Information">
            <p>
              If you have any questions about these Terms of Use, please contact us at 
              <a href="mailto:legal@chemimport.com" className="text-[#1E5C9B] hover:underline"> legal@chemimport.com</a>.
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
}