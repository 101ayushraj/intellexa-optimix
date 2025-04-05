
import React from 'react';
import { Badge as UIBadge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import CTAButton from '@/components/CTAButton';
import PricingFeature from './PricingFeature';

interface PricingCardProps {
  id: string;
  name: string;
  description: string;
  originalPrice: string;
  price: string;
  discount: string;
  features: string[];
  unavailableFeatures: string[];
  isPopular: boolean;
  icon: React.ReactNode;
  commonBenefits: string[];
  onPurchase: (price: string) => void;
}

const PricingCard: React.FC<PricingCardProps> = ({
  id,
  name,
  description,
  originalPrice,
  price,
  discount,
  features,
  unavailableFeatures,
  isPopular,
  icon,
  commonBenefits,
  onPurchase,
}) => {
  return (
    <div className="relative">
      {isPopular && (
        <div className="absolute -top-4 inset-x-0 flex justify-center">
          <UIBadge className="bg-intellexa-pink text-white px-3 py-1 text-sm font-semibold">
            Most Popular
          </UIBadge>
        </div>
      )}
      
      <Card 
        className="overflow-hidden h-full transition-all duration-300 
          border hover:border-intellexa-blue/70 hover:shadow-lg
          hover:transform hover:scale-[1.05] hover:shadow-xl"
      >
        <CardHeader className={`${isPopular ? 'bg-intellexa-light' : ''}`}>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl font-bold text-intellexa-dark flex items-center gap-2">
                <span className={`p-1.5 rounded-full ${isPopular ? 'bg-intellexa-blue text-white' : 'bg-intellexa-light'}`}>
                  {icon}
                </span>
                {name}
              </CardTitle>
              <CardDescription className="mt-2">{description}</CardDescription>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="pt-6">
          <div className="flex items-center mb-6">
            <p className="text-gray-400 line-through text-lg">₹{originalPrice}</p>
            <p className="text-3xl md:text-4xl font-bold text-intellexa-dark ml-3">₹{price}</p>
            <span className="ml-2 bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">
              SAVE {discount}
            </span>
          </div>
          
          <div className="space-y-3 mb-8">
            {/* Available features first */}
            {features.map((feature, index) => (
              <PricingFeature key={`feature-${index}`} feature={feature} available={true} />
            ))}
            
            {/* Common benefits */}
            {commonBenefits.map((benefit, index) => (
              <PricingFeature key={`common-${index}`} feature={benefit} available={true} />
            ))}
            
            {/* Unavailable features at the end */}
            {unavailableFeatures.map((feature, index) => (
              <PricingFeature key={`unavailable-${index}`} feature={feature} available={false} />
            ))}
          </div>
        </CardContent>
        
        <CardFooter className="flex-col pt-0">
          <CTAButton 
            text={`Buy Now @ ₹${price}`}
            onClick={() => onPurchase(price)}
            className="w-full justify-center bg-intellexa-pink hover:bg-intellexa-violet text-white"
            type="cta"
            animate={true}
          />
        </CardFooter>
      </Card>
    </div>
  );
};

export default PricingCard;
