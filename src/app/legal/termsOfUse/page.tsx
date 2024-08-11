'use client';
import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="font-sans text-black-600 text-base leading-[26px] bg-white">
      <section className="bg-white">
        <div className="container mx-auto px-4 md:px-14 flex justify-center pt-5 md:pt-8">
          <ol className="flex items-center text-sm">
            <li className="flex items-center">
              <a href="/" className="text-black-6000 hover:underline">Home Page</a>
              <span className="mx-2">/</span>
            </li>
            <li className="flex items-center">
              <span className="text-gray-500">Legal</span>
              <span className="mx-2">/</span>
            </li>
            <li className="text-gray-500">Terms and Conditions</li>
          </ol>
        </div>
      </section>

      <div className="container-fluid">
        <div className="row pb-7 bg-white">
          <div className="col text-center">
            <h1 className="text-4xl font-bold mb-3">Terms and Conditions</h1>
            <p className="mb-0">August 2024</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-6">
        <div className="flex flex-col md:flex-row">
          <div className="hidden md:block md:w-1/4 pr-8">
            <nav className="sticky top-20">
              <ul className="space-y-2 text-black">
                <li><a href="#platform-and-purpose" className="hover:underline">1. Platform and Purpose</a></li>
                <li><a href="#eligibility" className="hover:underline">2. Eligibility</a></li>
                <li><a href="#software-as-platform" className="hover:underline">3. Software as a Platform</a></li>
                <li><a href="#support" className="hover:underline">4. Support</a></li>
                <li><a href="#changes-to-terms" className="hover:underline">5. Changes to the Terms</a></li>
                <li><a href="#intellectual-property" className="hover:underline">6. Intellectual Property Right</a></li>
                <li><a href="#customer-obligations" className="hover:underline">7. Customer Obligations</a></li>
                <li><a href="#privacy-ai" className="hover:underline">8. Privacy and Artificial Intelligence</a></li>
                <li><a href="#confidentiality" className="hover:underline">9. Confidentiality</a></li>
                <li><a href="#warranties" className="hover:underline">10. Warranties</a></li>
                <li><a href="#indemnification" className="hover:underline">11. Indemnification</a></li>
                <li><a href="#disclaimer" className="hover:underline">12. Disclaimer of Warranties</a></li>
                <li><a href="#limitation-liability" className="hover:underline">13. Limitation of Liability</a></li>
                <li><a href="#fees-tax" className="hover:underline">14. Fees; Tax</a></li>
                <li><a href="#data-cleansing" className="hover:underline">15. Data Cleansing</a></li>
                <li><a href="#suspension" className="hover:underline">16. Suspension and Limitation Processes</a></li>
                <li><a href="#term-termination" className="hover:underline">17. Term; Termination</a></li>
                <li><a href="#governing-law" className="hover:underline">18. Governing Law</a></li>
                <li><a href="#arbitration" className="hover:underline">19. Arbitration</a></li>
                <li><a href="#force-majeure" className="hover:underline">20. Force Majeure</a></li>
                <li><a href="#legal-compliance" className="hover:underline">21. Compliance with Legal Requests</a></li>
                <li><a href="#miscellaneous" className="hover:underline">22. Miscellaneous</a></li>
                <li><a href="#contact-us" className="hover:underline">23. Contact Us</a></li>
              </ul>
            </nav>
          </div>

          <section className="w-full md:w-3/4">
            <div className="max-w-3xl">
              <p className="mb-4">
                For the previous version <a href="#" className="text-black-6000 hover:underline">click here</a>.
              </p>

              <p className="mb-8">
                Thank you for your interest in KSY Group. These terms and conditions (collectively, "<strong>Terms</strong>") along
                with the chosen plan and/or document incorporating such Terms ("<strong>Plan</strong>") shall govern the
                relationship, and constitute a legally binding agreement, between KSY Group Inc. ("<strong>KSY</strong>",
                "<strong>the Company</strong>", "<strong>we</strong>" or "<strong>us</strong>") and your company ("<strong>Customer</strong>") (collectively referred to as the
                "<strong>parties</strong>"). By accessing, using, downloading, or installing the Platform Customer
                acknowledges that Customer has read, will be bound by and will comply with these Terms and
                the <a href="#" className="text-black-6000 hover:underline">Privacy Notice</a> (which is incorporated herein by reference), both as may be amended at the
                sole discretion of KSY Group.
              </p>

              <h2 id="platform-and-purpose" className="text-2xl font-semibold mt-8 mb-4">1. Platform and Purpose</h2>
              <p className="mb-4">
                KSY Group operates a cutting-edge digital platform designed specifically for facilitating global chemical trade. Our purpose is to streamline the complex processes involved in importing and exporting chemicals, ensuring compliance with international regulations while optimizing efficiency and safety.
              </p>

              <h2 id="eligibility" className="text-2xl font-semibold mt-8 mb-4">2. Eligibility</h2>
              <p className="mb-4">
                To use KSY Group's services, users must be registered businesses with valid chemical handling licenses in their respective jurisdictions. We require proof of compliance with international chemical trade regulations and conduct regular audits to ensure ongoing eligibility.
              </p>

              <h2 id="software-as-platform" className="text-2xl font-semibold mt-8 mb-4">3. Software as a Platform</h2>
              <p className="mb-4">
                Our proprietary software integrates real-time global chemical market data, regulatory updates, and logistics management tools. It offers features such as automated customs documentation generation, chemical-specific shipping route optimization, and real-time tracking of shipments.
              </p>

              <h2 id="support" className="text-2xl font-semibold mt-8 mb-4">4. Support</h2>
              <p className="mb-4">
                We provide 24/7 expert support, including access to chemical regulatory specialists, logistics coordinators, and technical support for our platform. Users can schedule video consultations for complex chemical trade inquiries.
              </p>

              <h2 id="changes-to-terms" className="text-2xl font-semibold mt-8 mb-4">5. Changes to the Terms</h2>
              <p className="mb-4">
                Terms may be updated to reflect changes in international chemical trade laws. Users will be notified via the platform and email, with a 30-day notice period for significant changes affecting chemical import/export processes.
              </p>

              <h2 id="intellectual-property" className="text-2xl font-semibold mt-8 mb-4">6. Intellectual Property Rights</h2>
              <p className="mb-4">
                Our proprietary chemical trade algorithms, databases of global chemical regulations, and custom software interfaces are protected. Users are granted limited licenses to access these tools solely for facilitating trades through our platform.
              </p>

              <h2 id="customer-obligations" className="text-2xl font-semibold mt-8 mb-4">7. Customer Obligations</h2>
              <p className="mb-4">
                Customers must maintain accurate chemical inventories, provide detailed safety data sheets for all products, and promptly update any changes in their chemical handling certifications or trade permissions.
              </p>

              <h2 id="privacy-ai" className="text-2xl font-semibold mt-8 mb-4">8. Privacy and Artificial Intelligence</h2>
              <p className="mb-4">
                We employ AI for predictive analytics in chemical market trends and automated compliance checking. User data is anonymized for these processes, and customers can opt out of certain AI-driven features if desired.
              </p>

              <h2 id="confidentiality" className="text-2xl font-semibold mt-8 mb-4">9. Confidentiality</h2>
              <p className="mb-4">
                We implement multi-layered encryption for all chemical formulation data and trade route information. Non-disclosure agreements are required for all parties involved in transactions through our platform.
              </p>

              <h2 id="warranties" className="text-2xl font-semibold mt-8 mb-4">10. Warranties</h2>
              <p className="mb-4">
                We warrant that our platform complies with current international chemical trade regulations and that all featured chemicals meet specified purity standards. However, users are responsible for verifying the suitability of chemicals for their specific applications.
              </p>

              <h2 id="indemnification" className="text-2xl font-semibold mt-8 mb-4">11. Indemnification</h2>
              <p className="mb-4">
                Users agree to indemnify KSY Group against claims arising from misuse of chemicals, violations of trade regulations, or misrepresentation of chemical products in documentation provided through our platform.
              </p>

              <h2 id="disclaimer" className="text-2xl font-semibold mt-8 mb-4">12. Disclaimer of Warranties</h2>
              <p className="mb-4">
                While we strive for accuracy, we cannot guarantee against all risks inherent in international chemical trade. Users acknowledge the inherent complexities and potential hazards in chemical handling and transportation.
              </p>

              <h2 id="limitation-liability" className="text-2xl font-semibold mt-8 mb-4">13. Limitation of Liability</h2>
              <p className="mb-4">
                Our liability is limited to the value of the specific chemical shipment involved in a claim. We are not liable for consequential damages resulting from market fluctuations, regulatory changes, or misuse of chemicals by end-users.
              </p>

              <h2 id="fees-tax" className="text-2xl font-semibold mt-8 mb-4">14. Fees; Tax</h2>
              <p className="mb-4">
                Our fee structure is based on transaction volume and complexity of chemical shipments. Users are responsible for all import duties, export taxes, and chemical-specific tariffs, which our platform can help calculate but not guarantee.
              </p>

              <h2 id="data-cleansing" className="text-2xl font-semibold mt-8 mb-4">15. Data Cleansing</h2>
              <p className="mb-4">
                We regularly update our chemical databases to ensure accuracy of product information and compliance data. Users are required to verify their chemical inventory data quarterly and immediately report any discrepancies.
              </p>

              <h2 id="suspension" className="text-2xl font-semibold mt-8 mb-4">16. Suspension and Limitation Processes</h2>
              <p className="mb-4">
                Accounts may be suspended for violations of chemical trade regulations, discrepancies in documentation, or failure to maintain required certifications. Reinstatement requires a thorough review process and may involve regulatory authority approval.
              </p>

              <h2 id="term-termination" className="text-2xl font-semibold mt-8 mb-4">17. Term; Termination</h2>
              <p className="mb-4">
                Service agreements are renewed annually, contingent upon updated compliance verifications. Either party may terminate the agreement with 60 days' notice, subject to completion of any in-process chemical shipments.
              </p>

              <h2 id="governing-law" className="text-2xl font-semibold mt-8 mb-4">18. Governing Law</h2>
              <p className="mb-4">
                These terms are governed by international chemical trade laws and the laws of the State of Delaware, USA. Users agree to comply with all applicable local, national, and international laws governing chemical trade.
              </p>

              <h2 id="arbitration" className="text-2xl font-semibold mt-8 mb-4">19. Arbitration</h2>
              <p className="mb-4">
                Disputes will be resolved through binding arbitration, conducted by arbitrators with expertise in international chemical trade law. The arbitration will be held in a neutral location agreed upon by both parties.
              </p>

              <h2 id="force-majeure" className="text-2xl font-semibold mt-8 mb-4">20. Force Majeure</h2>
              <p className="mb-4">
                Force majeure events include global chemical supply chain disruptions, sudden changes in international trade policies affecting chemicals, and environmental disasters impacting chemical production or transportation.
              </p>

              <h2 id="legal-compliance" className="text-2xl font-semibold mt-8 mb-4">21. Compliance with Legal Requests</h2>
              <p className="mb-4">
                We cooperate fully with international chemical regulatory bodies and law enforcement agencies. Users will be notified of any legal requests for information unless prohibited by law or court order.
              </p>

              <h2 id="miscellaneous" className="text-2xl font-semibold mt-8 mb-4">22. Miscellaneous</h2>
              <p className="mb-4">
                These Terms constitute the entire agreement between the parties regarding the subject matter hereof. If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full force and effect.
              </p>

              <h2 id="contact-us" className="text-2xl font-semibold mt-8 mb-4">23. Contact Us</h2>
              <p>
                For inquiries regarding our chemical import/export services, these Terms and Conditions, or any other matters related to your use of the KSY Group platform, please contact us at:
              </p>
              <address>
                KSY Group Inc.<br />
                1234 Chemical Trade Avenue<br />
                Wilmington, DE 19801<br />
                United States<br /><br />
                Email: <a href="mailto:legal@ksygroup.com">legal@ksygroup.com</a><br />
                Phone: +1 (302) 555-7890<br />
                Website: <a href="https://www.ksygroup.com" target="_blank" rel="noopener noreferrer">www.ksygroup.com</a>
              </address>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;

