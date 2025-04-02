
import React from 'react';
import NavBar from '@/components/NavBar';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const RefundPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      
      <div className="container-custom py-16">
        <Link to="/" className="flex items-center text-intellexa-blue hover:underline mb-8">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Home
        </Link>
        
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-intellexa-dark mb-2">Refund & Return Policy</h1>
          <p className="text-gray-600 mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8">
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-intellexa-dark mb-4">1. Digital Products</h2>
                <p className="text-gray-700 mb-4">
                  Intellexa provides digital educational products and services designed for JEE preparation. As our products are digital in nature and delivered instantly, they cannot be returned once purchased.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-intellexa-dark mb-4">2. Refund Policy</h2>
                <p className="text-gray-700 mb-4">
                  We want you to be completely satisfied with your purchase. If you are unhappy with our product for any reason, you may request a refund subject to the following conditions:
                </p>
                
                <ul className="list-disc pl-8 space-y-2 text-gray-700">
                  <li>
                    <strong>Refund Eligibility Period:</strong> Refund requests must be made within 7 days of the purchase date.
                  </li>
                  <li>
                    <strong>Refund Process:</strong> To request a refund, please email us at intellexa.shop@gmail.com with your order details and reason for the refund.
                  </li>
                  <li>
                    <strong>Processing Time:</strong> Refund requests are typically processed within 5-7 business days from the date of approval.
                  </li>
                  <li>
                    <strong>Refund Method:</strong> Refunds will be credited back to the original payment method used for the purchase.
                  </li>
                </ul>
              </section>
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-intellexa-dark mb-4">3. Exceptions</h2>
                <p className="text-gray-700 mb-4">
                  We may deny a refund request if:
                </p>
                
                <ul className="list-disc pl-8 space-y-2 text-gray-700">
                  <li>The refund request is made after the 7-day eligibility period has passed.</li>
                  <li>There is evidence of fraud or abuse of the refund policy.</li>
                  <li>The product has been substantially accessed, downloaded, or used.</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-intellexa-dark mb-4">4. Contact Us</h2>
                <p className="text-gray-700">
                  If you have any questions or concerns about our Refund Policy, please contact us at:
                </p>
                <p className="text-intellexa-blue mt-2">
                  <a href="mailto:intellexa.shop@gmail.com">intellexa.shop@gmail.com</a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="bg-intellexa-dark text-white py-6">
        <div className="container-custom text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Intellexa. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default RefundPolicyPage;
