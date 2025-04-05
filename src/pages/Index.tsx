
import React from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import FeaturesSection from '@/components/FeaturesSection';
import PackContentsSection from '@/components/PackContentsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import UpcomingPacksSection from '@/components/UpcomingPacksSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import PrivacyPolicyModal from '@/components/PrivacyPolicyModal';
import { ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen">
      <NavBar />
      <HeroSection />
      <ProblemSection />
      <FeaturesSection />
      <PackContentsSection />
      <TestimonialsSection />
      <PricingSection />
      <UpcomingPacksSection />
      <FAQSection />
      <ContactSection />
      
      <footer className="bg-intellexa-dark text-white py-8">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold">Intellexa<span className="text-intellexa-pink">.</span></h2>
              <p className="text-gray-400 mt-1">Your path to JEE success</p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
              <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a>
              <a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a>
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
              <Link to="/refund-policy" className="text-gray-300 hover:text-white transition-colors">Refund Policy</Link>
              <PrivacyPolicyModal 
                trigger={
                  <button className="text-gray-300 hover:text-white transition-colors">
                    Privacy Policy
                  </button>
                } 
              />
            </div>
          </div>
          
          <hr className="border-gray-800 my-6" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2021 Intellexa. All rights reserved.
            </p>
            
            <div className="mt-4 md:mt-0 flex space-x-4">
              <button 
                onClick={scrollToTop}
                className="bg-intellexa-blue/20 hover:bg-intellexa-blue/30 text-white p-2 rounded-full transition-colors"
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
