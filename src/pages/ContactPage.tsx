
import React from 'react';
import NavBar from '@/components/NavBar';
import { Mail, MapPin, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      
      <div className="container-custom py-16">
        <Link to="/" className="flex items-center text-intellexa-blue hover:underline mb-8">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Home
        </Link>
        
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-intellexa-dark mb-2">Contact Us</h1>
          <p className="text-gray-600 mb-8">
            Have questions or need assistance? We're here to help. Reach out to us using any of the methods below.
          </p>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-intellexa-light p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-intellexa-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-intellexa-dark mb-1">Business Address</h3>
                    <p className="text-gray-600">Intellexa</p>
                    <p className="text-gray-600">Hajipur, Vaishali, Bihar - 844503</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-intellexa-light p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-intellexa-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-intellexa-dark mb-1">Email Address</h3>
                    <a href="mailto:intellexa.shop@gmail.com" className="text-intellexa-blue hover:underline">
                      intellexa.shop@gmail.com
                    </a>
                    <p className="text-gray-500 text-sm mt-1">
                      We aim to respond within 24 hours on business days.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 pt-8 border-t border-gray-100">
                <h3 className="font-semibold text-intellexa-dark mb-3">Business Hours</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div>
                    <p className="font-medium">Monday - Friday:</p>
                    <p className="text-gray-600">9:00 AM - 6:00 PM</p>
                  </div>
                  <div>
                    <p className="font-medium">Saturday:</p>
                    <p className="text-gray-600">10:00 AM - 4:00 PM</p>
                  </div>
                  <div>
                    <p className="font-medium">Sunday:</p>
                    <p className="text-gray-600">Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="bg-intellexa-dark text-white py-6">
        <div className="container-custom text-center">
          <p className="text-gray-400">
            © 2021 Intellexa. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
