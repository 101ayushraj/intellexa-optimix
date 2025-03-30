
import React from 'react';
import CTAButton from './CTAButton';
import { ArrowRight, Check, Clock } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToPayment = () => {
    const element = document.getElementById('pricing');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-intellexa-light to-white pt-16 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
      
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 space-y-6 mb-10 lg:mb-0">
            <div className="inline-block px-3 py-1 rounded-full bg-intellexa-light border border-intellexa-blue/20 text-intellexa-blue font-medium text-sm mb-2">
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" /> Limited Time Offer - 50% OFF
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-intellexa-dark leading-tight">
              Crack JEE with the 
              <span className="text-intellexa-blue"> Ultimate Study Pack</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-xl">
              Structured, Proven & Time-Saving – Stop Searching & Start Succeeding! Everything You Need in One Place.
            </p>
            
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="flex items-center text-sm text-gray-700">
                <div className="bg-green-100 p-1 rounded-full mr-2">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                1000+ Students Helped
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <div className="bg-green-100 p-1 rounded-full mr-2">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                50% Faster Preparation
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <div className="bg-green-100 p-1 rounded-full mr-2">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                100% JEE Syllabus
              </div>
            </div>
            
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex flex-col">
                <p className="text-gray-500 line-through text-xl">₹1599</p>
                <p className="text-3xl font-bold text-intellexa-dark">₹799 <span className="text-green-600 text-lg font-medium">only</span></p>
              </div>
              
              <CTAButton 
                text="Buy Now @ ₹799" 
                onClick={scrollToPayment}
                icon={<ArrowRight className="h-5 w-5" />}
              />
            </div>
            
            <p className="text-red-500 font-medium flex items-center text-sm">
              <Clock className="h-4 w-4 mr-1" /> Offer ends soon! Buy now and start preparing.
            </p>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="Student studying with JEE materials" 
              className="rounded-lg shadow-2xl z-10 relative w-full max-w-md object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
