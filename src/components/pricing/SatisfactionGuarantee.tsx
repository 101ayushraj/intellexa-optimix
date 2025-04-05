
import React from 'react';
import { AlertCircle } from 'lucide-react';

const SatisfactionGuarantee: React.FC = () => {
  return (
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
  );
};

export default SatisfactionGuarantee;
