
import React from 'react';
import { Check, X } from 'lucide-react';

interface PricingFeatureProps {
  feature: string;
  available: boolean;
}

const PricingFeature: React.FC<PricingFeatureProps> = ({ feature, available }) => {
  return (
    <div className="flex items-center">
      <div className={`${available ? 'bg-green-100' : 'bg-red-100'} p-1 rounded-full mr-3`}>
        {available ? (
          <Check className="h-4 w-4 text-green-600" />
        ) : (
          <X className="h-4 w-4 text-red-500" />
        )}
      </div>
      <p className={`${available ? 'text-gray-700' : 'text-gray-500 text-sm'} ${!available && 'opacity-60'}`}>
        {feature}
      </p>
    </div>
  );
};

export default PricingFeature;
