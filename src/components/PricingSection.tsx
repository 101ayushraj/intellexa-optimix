
import React from 'react';
import { Badge, Crown, Check, Gift } from 'lucide-react';
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
        
        {/* Special Offer Section */}
        <div className="mt-16 bg-gradient-to-r from-intellexa-pink/10 to-intellexa-violet/10 border-2 border-intellexa-pink/20 p-8 rounded-2xl max-w-4xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center items-center mb-4">
              <Gift className="h-8 w-8 text-intellexa-pink mr-3" />
              <h3 className="text-3xl font-bold text-intellexa-dark">🎁 Special Offer for Premium Upgrade! 🎁</h3>
            </div>
            
            <p className="text-xl font-semibold text-intellexa-dark mb-6">
              Want to get the <span className="text-intellexa-pink">Premium Pack at the price of the Standard Pack</span>? Here's how:
            </p>
            
            <div className="bg-white p-6 rounded-xl shadow-md mb-6">
              <div className="space-y-4 text-left">
                <div className="flex items-start">
                  <span className="text-green-600 font-bold text-lg mr-3">✅</span>
                  <p className="text-gray-700">Buy the <strong>Standard Pack</strong> now</p>
                </div>
                
                <div className="flex items-start">
                  <span className="text-blue-600 font-bold text-lg mr-3">📧</span>
                  <div>
                    <p className="text-gray-700 font-medium">You'll instantly receive:</p>
                    <ul className="ml-4 mt-2 space-y-1 text-gray-600">
                      <li>– Your <strong>study material</strong></li>
                      <li>– A <strong>unique referral code</strong> in your Gmail</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-purple-600 font-bold text-lg mr-3">🎯</span>
                  <p className="text-gray-700">
                    If <strong>3 of your friends</strong> purchase using your referral code,
                  </p>
                </div>
                
                <div className="flex items-start">
                  <span className="text-yellow-600 font-bold text-lg mr-3">✨</span>
                  <p className="text-gray-700">
                    We'll <strong>upgrade you to the Premium Pack</strong> – absolutely FREE!
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-intellexa-blue/10 p-4 rounded-lg mb-6">
              <p className="text-intellexa-dark font-medium">
                💡 No extra cost. Just share and earn your upgrade.
              </p>
              <p className="text-intellexa-dark">
                This is your chance to get the <strong>best value</strong> with just one smart move!
              </p>
            </div>
            
            <button 
              onClick={() => handlePurchase('499')}
              className="bg-intellexa-pink hover:bg-intellexa-violet text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🛒 Buy Standard Pack Now & Unlock Premium with Referrals!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
