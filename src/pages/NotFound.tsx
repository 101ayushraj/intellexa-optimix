
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import NavBar from '@/components/NavBar';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      
      <div className="container-custom py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-red-100 p-4 rounded-full inline-flex items-center justify-center mb-6">
            <AlertCircle className="h-8 w-8 text-red-600" />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-intellexa-dark mb-4">Page Not Found</h1>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden mt-8">
            <div className="p-8">
              <p className="text-xl text-gray-700 mb-6">
                The page you're looking for doesn't exist or has been moved.
              </p>
              
              <div className="bg-intellexa-light p-4 rounded-lg mb-6">
                <p className="text-intellexa-blue font-medium">
                  Try refreshing or going back to the home page
                </p>
              </div>
              
              <Link to="/">
                <Button className="w-full bg-intellexa-blue hover:bg-intellexa-blue/90">
                  Go Back to Home
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-8 bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
            <div className="flex items-center">
              <AlertCircle className="h-5 w-5 text-yellow-600 mr-3 flex-shrink-0" />
              <p className="text-gray-700 text-left">
                <span className="font-semibold">If you reached this page after payment:</span> Don't worry! Your payment was likely successful. Please go to the home page and check your email and WhatsApp for your study materials or contact our support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
