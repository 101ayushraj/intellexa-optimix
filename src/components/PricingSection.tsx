
import React from 'react';
import CTAButton from './CTAButton';
import { Check, X, AlertCircle, Badge, Crown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge as UIBadge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

const PricingSection: React.FC = () => {
  const navigate = useNavigate();

  const handlePurchase = (price: string) => {
    // Use different links based on the selected plan
    const links: Record<string, string> = {
      '497': 'https://rzp.io/rzp/XVTAEqif', // Replace with actual link for Basic
      '797': 'https://rzp.io/rzp/XVTAEqif', // Current link for Standard
      '997': 'https://rzp.io/rzp/XVTAEqif', // Replace with actual link for Premium
    };
    
    window.location.href = links[price];
  };

  // Common benefits across all plans
  const commonBenefits = [
    "Instant Digital Delivery",
    "Access on any device",
    "Study Planner",
  ];

  // All possible features to display in each plan
  const allFeatures = [
    "Syllabus Tracker",
    "PYQs without solution",
    "PYQs with solutions",
    "Short Notes",
    "Cheat Sheets",
    "Formula CUM Revision Sheets",
    "Chapterwise PYQs with solutions",
    "DPPs",
    "Mindmaps",
    "Detailed Notes",
    "Test Series",
    "ADV PYQs with solutions",
    "ADV PYQs without solutions",
    "Crash Course",
    "Popular Books",
  ];

  // Define the plans and their features
  const plans = [
    {
      id: 'basic',
      name: 'Basic Pack',
      description: 'Essential materials for JEE preparation',
      originalPrice: '999',
      price: '497',
      features: [
        "Syllabus Tracker",
        "PYQs without solution",
        "PYQs with solutions",
        "Short Notes",
        "Cheat Sheets",
        "Formula CUM Revision Sheets",
      ],
      isPopular: false,
      icon: <Badge className="h-5 w-5" />
    },
    {
      id: 'standard',
      name: 'Standard Pack',
      description: 'Comprehensive preparation materials',
      originalPrice: '1599',
      price: '797',
      features: [
        "Syllabus Tracker",
        "PYQs without solution",
        "PYQs with solutions",
        "Short Notes",
        "Cheat Sheets",
        "Formula CUM Revision Sheets",
        "Chapterwise PYQs with solutions",
        "DPPs",
        "Mindmaps",
        "Detailed Notes",
        "Test Series",
      ],
      isPopular: true,
      icon: <Check className="h-5 w-5" />
    },
    {
      id: 'premium',
      name: 'Premium Pack',
      description: 'Complete preparation for JEE & Advanced',
      originalPrice: '2599',
      price: '997',
      features: [
        "Syllabus Tracker",
        "PYQs without solution",
        "PYQs with solutions",
        "Short Notes",
        "Cheat Sheets",
        "Formula CUM Revision Sheets",
        "Chapterwise PYQs with solutions",
        "DPPs",
        "Mindmaps",
        "Detailed Notes",
        "Test Series",
        "ADV PYQs with solutions",
        "ADV PYQs without solutions",
        "Crash Course",
        "Popular Books",
      ],
      isPopular: false,
      icon: <Crown className="h-5 w-5" />
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-heading">Choose Your JEE Study Pack</h2>
          <p className="section-subheading">
            Select the package that best fits your preparation needs and goals.
          </p>
          <p className="text-intellexa-blue font-medium text-lg">
            <span className="bg-yellow-100 px-3 py-1 rounded-full">Limited Time Offer: Discounted prices for first 250 buyers only!</span>
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div key={plan.id} className="relative">
              {plan.isPopular && (
                <div className="absolute -top-4 inset-x-0 flex justify-center">
                  <UIBadge className="bg-intellexa-pink text-white px-3 py-1 text-sm font-semibold">
                    Most Popular
                  </UIBadge>
                </div>
              )}
              
              <Card 
                className={`overflow-hidden h-full transition-all duration-300 ${
                  plan.isPopular 
                    ? 'border-intellexa-blue shadow-lg scale-105 md:scale-105 z-10' 
                    : 'border hover:border-intellexa-blue/50 hover:shadow-md'
                } hover:transform hover:scale-[1.03] hover:shadow-xl`}
              >
                <CardHeader className={`${plan.isPopular ? 'bg-intellexa-light' : ''}`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl font-bold text-intellexa-dark flex items-center gap-2">
                        <span className={`p-1.5 rounded-full ${plan.isPopular ? 'bg-intellexa-blue text-white' : 'bg-intellexa-light'}`}>
                          {plan.icon}
                        </span>
                        {plan.name}
                      </CardTitle>
                      <CardDescription className="mt-2">{plan.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-6">
                  <div className="flex items-center mb-6">
                    <p className="text-gray-400 line-through text-lg">₹{plan.originalPrice}</p>
                    <p className="text-3xl md:text-4xl font-bold text-intellexa-dark ml-3">₹{plan.price}</p>
                    <span className="ml-2 bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">
                      SAVE {Math.round((1 - parseInt(plan.price) / parseInt(plan.originalPrice)) * 100)}%
                    </span>
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    {allFeatures.map((feature, index) => {
                      const included = plan.features.includes(feature);
                      return (
                        <div key={index} className={`flex items-center ${included ? '' : 'opacity-60'}`}>
                          <div className={`${included ? 'bg-green-100' : 'bg-red-100'} p-1 rounded-full mr-3`}>
                            {included ? 
                              <Check className="h-4 w-4 text-green-600" /> : 
                              <X className="h-4 w-4 text-red-500" />
                            }
                          </div>
                          <p className={`${included ? 'text-gray-700' : 'text-gray-500'}`}>{feature}</p>
                        </div>
                      );
                    })}
                    {commonBenefits.map((benefit, index) => (
                      <div key={`common-${index}`} className="flex items-center">
                        <div className="bg-green-100 p-1 rounded-full mr-3">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                        <p className="text-gray-700">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="flex-col pt-0">
                  <CTAButton 
                    text={`Buy Now @ ₹${plan.price}`}
                    onClick={() => handlePurchase(plan.price)}
                    className={`w-full justify-center ${plan.isPopular ? '' : 'bg-white border border-intellexa-blue text-intellexa-blue hover:bg-intellexa-light'}`}
                    type={plan.isPopular ? 'cta' : 'secondary'}
                    animate={plan.isPopular}
                  />
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-yellow-50 border border-yellow-200 p-6 rounded-lg max-w-3xl mx-auto">
          <div className="flex items-start">
            <AlertCircle className="h-5 w-5 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold text-gray-800 mb-2">100% Satisfaction Guarantee</p>
              <p className="text-gray-700">
                If you're not satisfied with the quality of our study materials, contact us within 7 days of purchase for a full refund.
              </p>
              <p className="mt-2 text-gray-600">
                <span className="font-medium">WhatsApp Support:</span> +916203346070
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
