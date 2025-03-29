
import React from 'react';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-white py-4 shadow-sm sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="font-poppins font-bold text-2xl text-intellexa-blue">
            Intellexa<span className="text-intellexa-pink">.</span>
          </h1>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-gray-700 hover:text-intellexa-blue transition-colors">Features</a>
          <a href="#pricing" className="text-gray-700 hover:text-intellexa-blue transition-colors">Pricing</a>
          <a href="#testimonials" className="text-gray-700 hover:text-intellexa-blue transition-colors">Testimonials</a>
          <a href="#faq" className="text-gray-700 hover:text-intellexa-blue transition-colors">FAQ</a>
        </div>
        
        <a 
          href="#buy-now" 
          className="bg-intellexa-pink text-white px-4 py-2 rounded-lg font-medium hover:bg-intellexa-violet transition-colors duration-300"
        >
          Buy Now
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
