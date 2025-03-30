
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white py-4 shadow-sm sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/39356db0-a1f9-46e0-a0f3-e5e15eaa9c13.png" 
              alt="Intellexa Logo" 
              className="h-8 w-auto"
            />
            <span className="font-poppins font-bold text-xl md:text-2xl text-intellexa-blue">
              Intellexa<span className="text-intellexa-pink">.</span>
            </span>
          </a>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-intellexa-blue" />
          ) : (
            <Menu className="h-6 w-6 text-intellexa-blue" />
          )}
        </button>
        
        {/* Desktop menu */}
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
          className="hidden md:block bg-intellexa-pink text-white px-4 py-2 rounded-lg font-medium hover:bg-intellexa-violet transition-colors duration-300"
        >
          Buy Now
        </button>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md p-4 md:hidden z-50">
            <div className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('features')} 
                className="text-gray-700 hover:text-intellexa-blue transition-colors cursor-pointer py-2"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('pricing')} 
                className="text-gray-700 hover:text-intellexa-blue transition-colors cursor-pointer py-2"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')} 
                className="text-gray-700 hover:text-intellexa-blue transition-colors cursor-pointer py-2"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('faq')} 
                className="text-gray-700 hover:text-intellexa-blue transition-colors cursor-pointer py-2"
              >
                FAQ
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="bg-intellexa-pink text-white px-4 py-2 rounded-lg font-medium hover:bg-intellexa-violet transition-colors duration-300 mt-2"
              >
                Buy Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
