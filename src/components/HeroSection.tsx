
import React from 'react';
import CTAButton from './CTAButton';
import { ArrowRight, Check, Clock, BookOpen, FileText, BrainCircuit } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToPayment = () => {
    const element = document.getElementById('pricing');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-intellexa-light to-white pt-16 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
      
      <div className="container-custom">
        {/* Mission Statement */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-intellexa-blue mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700">
            At Intellexa, we help students save valuable time by providing the most relevant and 
            high-quality study materials in one place.
          </p>
        </div>
        
        {/* Main Hero Section */}
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
            
            {/* Key Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="flex items-start">
                <div className="bg-green-100 p-1 rounded-full mr-2 mt-1">
                  <Clock className="h-4 w-4 text-green-600" />
                </div>
                <p className="text-sm text-gray-700">Save hours with well-organized notes, mind maps & formula books</p>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 p-1 rounded-full mr-2 mt-1">
                  <FileText className="h-4 w-4 text-green-600" />
                </div>
                <p className="text-sm text-gray-700">Topic-wise & complete PYQs with detailed solutions</p>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 p-1 rounded-full mr-2 mt-1">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <p className="text-sm text-gray-700">Structured syllabus tracker for efficient planning</p>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 p-1 rounded-full mr-2 mt-1">
                  <BookOpen className="h-4 w-4 text-green-600" />
                </div>
                <p className="text-sm text-gray-700">Detailed & short notes for comprehensive revision</p>
              </div>
            </div>
            
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
                <p className="text-gray-500 line-through text-xl">₹999</p>
                <p className="text-3xl font-bold text-intellexa-dark">₹499 <span className="text-green-600 text-lg font-medium">only</span></p>
              </div>
              
              <CTAButton 
                text="Buy Now @ ₹499" 
                onClick={scrollToPayment}
                icon={<ArrowRight className="h-5 w-5" />}
              />
            </div>
            
            <div className="flex items-center text-sm">
              <CTAButton 
                text="View Sample Materials" 
                type="primary"
                className="py-2 px-4 text-sm"
                onClick={() => window.open("https://drive.google.com/drive/folders/1-rtrFgpMAe8a3C3_ys03RLIgUGfhiAxT?usp=sharing", "_blank")}
              />
            </div>
            
            <p className="text-red-500 font-medium flex items-center text-sm">
              <Clock className="h-4 w-4 mr-1" /> Offer ends soon! Buy now and start preparing.
            </p>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
            <div className="bg-white p-4 rounded-lg shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Student with JEE study materials" 
                className="rounded-lg z-10 relative w-full max-w-md object-cover"
              />
              <div className="bg-intellexa-blue/10 p-4 mt-4 rounded-lg">
                <h3 className="font-semibold text-intellexa-blue text-lg mb-2">Why Students Trust Us</h3>
                <p className="text-gray-700 text-sm">
                  We've carefully curated the best content from across the internet and structured it in the most 
                  efficient way for JEE preparation. Our materials are designed by top educators and successful 
                  JEE candidates to ensure you get the most relevant and effective study resources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
