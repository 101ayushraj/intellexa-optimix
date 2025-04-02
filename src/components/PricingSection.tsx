import React from 'react';
import CTAButton from './CTAButton';
import { Check, Clock, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PricingSection: React.FC = () => {
  const navigate = useNavigate();

  const handlePurchase = () => {
    // Option 1: Open in the same tab (recommended for Razorpay integration)
    window.location.href = 'https://rzp.io/rzp/L5V7LvwQ';
    
    // Option 2: If you want to keep the original behavior of opening in a new tab
    // window.open('https://rzp.io/rzp/L5V7LvwQ', '_blank');
  };

  const benefits = [
    "Full Syllabus Tracker",
    "PYQs with Solutions (Topic-wise & Year-wise)",
    "Detailed Notes & Short Notes",
    "Formula Notebook",
    "Mind Maps",
    "Cheat Sheets",
    "Study Planner",
    "Crash Course Content",
    "Test Series with Solutions",
    "Instant Digital Delivery"
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-heading">Limited-Time Offer</h2>
          <p className="section-subheading">
            Invest in your success today – Get the complete Intellexa Study Pack at a special price!
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-intellexa-blue to-intellexa-violet rounded-2xl overflow-hidden shadow-xl">
            <div className="bg-white m-1 rounded-xl overflow-hidden">
              <div className="p-8">
                <div className="bg-red-100 text-red-700 px-4 py-2 rounded-full inline-flex items-center mb-6">
                  <Clock className="h-4 w-4 mr-1" /> 
                  <span className="font-medium text-sm">Limited-Time Offer – 50% OFF!</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-intellexa-dark mb-2">Complete JEE Study Pack</h3>
                <p className="text-gray-600 mb-6">Everything you need to ace your JEE exam in one comprehensive package</p>
                
                <div className="flex items-center mb-8">
                  <p className="text-gray-400 line-through text-2xl">₹1599</p>
                  <p className="text-3xl md:text-4xl font-bold text-intellexa-dark ml-3">₹799</p>
                  <span className="ml-2 bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">SAVE 50%</span>
                </div>
                
                <div className="space-y-3 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <div className="bg-green-100 p-1 rounded-full mr-3">
                        <Check className="h-4 w-4 text-green-600" />
                      </div>
                      <p className="text-gray-700">{benefit}</p>
                    </div>
                  ))}
                </div>
                
                <CTAButton 
                  text="Buy Now @ ₹799" 
                  onClick={handlePurchase}
                  className="w-full justify-center"
                />
                
                <div className="mt-4 flex items-start text-sm text-gray-500">
                  <AlertCircle className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                  <p>After purchase, you'll receive your study pack instantly via WhatsApp & Email.</p>
                </div>
              </div>
              
              <div className="bg-intellexa-light p-4 text-center">
                <p className="text-intellexa-blue font-medium">Only 20 packs left at this price!</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
            <div className="flex items-center">
              <AlertCircle className="h-5 w-5 text-yellow-600 mr-3 flex-shrink-0" />
              <p className="text-gray-700">
                <span className="font-semibold">100% Satisfaction Guarantee:</span> If you're not satisfied with the quality of our study materials, contact us within 7 days of purchase for a full refund.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
