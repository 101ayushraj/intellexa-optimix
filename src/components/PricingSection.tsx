import React from 'react';
import { Badge, Crown, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PricingCard from './pricing/PricingCard';
import SatisfactionGuarantee from './pricing/SatisfactionGuarantee';
import { 
  basicFeatures, 
  standardFeatures, 
  premiumFeatures, 
  commonBenefits,
  paymentLinks
} from './pricing/pricingData';

const PricingSection: React.FC = () => {
  const navigate = useNavigate();

  const handlePurchase = (price: string) => {
    window.location.href = paymentLinks[price];
  };

  // Define the plans and their features
  const plans = [
    {
      id: 'basic',
      name: 'Basic Pack',
      description: 'Essential materials for JEE preparation',
      originalPrice: '999',
      price: '499',
      discount: '50%',
      features: [...basicFeatures],
      unavailableFeatures: [...standardFeatures, ...premiumFeatures],
      isPopular: false,
      icon: <Badge className="h-5 w-5" />
    },
    {
      id: 'standard',
      name: 'Standard Pack',
      description: 'Comprehensive preparation materials',
      originalPrice: '1599',
      price: '797',
      discount: '50%',
      features: [...basicFeatures, ...standardFeatures],
      unavailableFeatures: [...premiumFeatures],
      isPopular: true,
      icon: <Check className="h-5 w-5" />
    },
    {
      id: 'premium',
      name: 'Premium Pack',
      description: 'Complete preparation for JEE & Advanced',
      originalPrice: '2599',
      price: '999',
      discount: '62%',
      features: [...basicFeatures, ...standardFeatures, ...premiumFeatures],
      unavailableFeatures: [],
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
          <p className="text-intellexa-blue font-medium text-lg mt-4">
            <span className="bg-yellow-100 px-3 py-1 rounded-full">Limited Time Offer: Discounted prices for first 250 buyers only!</span>
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <PricingCard
              key={plan.id}
              {...plan}
              commonBenefits={commonBenefits}
              onPurchase={handlePurchase}
            />
          ))}
        </div>
        
        <SatisfactionGuarantee />
      </div>
    </section>
  );
};

export default PricingSection;
