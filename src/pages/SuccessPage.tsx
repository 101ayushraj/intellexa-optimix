
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import { Check } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const SuccessPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Show toast notification when the page loads
    toast.success("Payment successful! Your study pack is on the way.");
    
    // Log success for debugging
    console.log("Success page loaded, will redirect to thank-you page in 2 seconds");
    
    // Redirect to thank-you page after 2 seconds
    const timer = setTimeout(() => {
      console.log("Redirecting to thank-you page now");
      navigate('/thank-you');
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [navigate]);

  // Handle manual navigation if automatic redirect fails
  const handleManualRedirect = () => {
    navigate('/thank-you');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      
      <div className="container-custom py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-green-100 p-4 rounded-full inline-flex items-center justify-center mb-6">
            <Check className="h-8 w-8 text-green-600" />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-intellexa-dark mb-4">Payment Successful!</h1>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden mt-8">
            <div className="p-8">
              <p className="text-xl text-gray-700 mb-6">
                We're processing your order and will deliver your study pack shortly.
              </p>
              
              <div className="bg-intellexa-light p-4 rounded-lg mb-6">
                <p className="text-intellexa-blue font-medium">
                  Redirecting you to the thank you page...
                </p>
              </div>
              
              <Button 
                onClick={handleManualRedirect}
                className="w-full bg-intellexa-blue hover:bg-intellexa-blue/90"
              >
                Continue to Thank You Page
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
