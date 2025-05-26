
import React from 'react';
import { Badge, Crown, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PricingCard from './pricing/PricingCard';
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
      id: 'standard',
      name: 'Standard Pack',
      description: 'Comprehensive preparation materials',
      originalPrice: '799',
      price: '499',
      discount: '38%',
      features: [...basicFeatures, ...standardFeatures],
      unavailableFeatures: [...premiumFeatures],
      isPopular: false,
      icon: <Check className="h-5 w-5" />
    },
    {
      id: 'premium',
      name: 'Premium Pack',
      description: 'Complete preparation for JEE & Advanced',
      originalPrice: '999',
      price: '797',
      discount: '20%',
      features: [...basicFeatures, ...standardFeatures, ...premiumFeatures],
      unavailableFeatures: [],
      isPopular: true,
      icon: <Crown className="h-5 w-5" />
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="section-heading">Choose Your JEE Study Pack</h2>
          <p className="section-subheading mb-4">
            Select the package that best fits your preparation needs and goals.
          </p>
          <a 
            href="https://drive.google.com/drive/folders/1-rtrFgpMAe8a3C3_ys03RLIgUGfhiAxT?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-intellexa-blue hover:text-intellexa-violet inline-flex items-center transition-colors"
          >
            View Sample Materials
          </a>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <PricingCard
              key={plan.id}
              {...plan}
              commonBenefits={commonBenefits}
              onPurchase={handlePurchase}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
