
import React from 'react';

const NavBar: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white py-4 shadow-sm sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="font-poppins font-bold text-2xl text-intellexa-blue">
            Intellexa<span className="text-intellexa-pink">.</span>
          </h1>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => scrollToSection('features')} 
            className="text-gray-700 hover:text-intellexa-blue transition-colors cursor-pointer"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('pricing')} 
            className="text-gray-700 hover:text-intellexa-blue transition-colors cursor-pointer"
          >
            Pricing
          </button>
          <button 
            onClick={() => scrollToSection('testimonials')} 
            className="text-gray-700 hover:text-intellexa-blue transition-colors cursor-pointer"
          >
            Testimonials
          </button>
          <button 
            onClick={() => scrollToSection('faq')} 
            className="text-gray-700 hover:text-intellexa-blue transition-colors cursor-pointer"
          >
            FAQ
          </button>
        </div>
        
        <button 
          onClick={() => scrollToSection('pricing')}
          className="bg-intellexa-pink text-white px-4 py-2 rounded-lg font-medium hover:bg-intellexa-violet transition-colors duration-300"
        >
          Buy Now
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
