
import React from 'react';
import NavBar from '@/components/NavBar';
import { Check, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ThankYouPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      
      <div className="container-custom py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-green-100 p-4 rounded-full inline-flex items-center justify-center mb-6">
            <Check className="h-8 w-8 text-green-600" />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-intellexa-dark mb-4">Thank You for Your Purchase! 🎉</h1>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden mt-8">
            <div className="p-8">
              <p className="text-xl text-gray-700 mb-6">
                Your study pack will be delivered instantly via WhatsApp & Email.
              </p>
              
              <div className="bg-intellexa-light p-4 rounded-lg mb-6">
                <p className="text-intellexa-blue font-medium">
                  Check your email inbox and WhatsApp for your study materials.
                </p>
              </div>
              
              <div className="flex flex-col space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-intellexa-dark mb-2">Need Help?</h3>
                  <p className="text-gray-600 mb-3">
                    If you face any issues with accessing your study pack, please contact our support team:
                  </p>
                  <a 
                    href="mailto:intellexa.shop@gmail.com" 
                    className="inline-flex items-center text-intellexa-blue hover:underline"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    intellexa.shop@gmail.com
                  </a>
                </div>
                
                <Link to="/">
                  <Button className="w-full bg-intellexa-blue hover:bg-intellexa-blue/90">
                    Go Back to Home
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          <p className="text-gray-500 mt-8">
            Your journey to JEE success starts now. Happy studying!
          </p>
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

export default ThankYouPage;
