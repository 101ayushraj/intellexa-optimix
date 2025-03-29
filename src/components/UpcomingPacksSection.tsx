
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { ArrowRight } from 'lucide-react';

const UpcomingPacksSection: React.FC = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }
    
    // In a real implementation, you would send this to your backend
    toast({
      title: "Thank you!",
      description: "You'll be the first to know about our upcoming packs.",
    });
    
    setEmail('');
  };

  const upcomingPacks = [
    {
      title: "NEET Complete Pack",
      description: "Specialized for medical aspirants with biology focus",
      comingSoon: true,
    },
    {
      title: "Class 10th Complete Pack",
      description: "Foundation preparation for board exams",
      comingSoon: true,
    },
    {
      title: "Personal Mentor Section",
      description: "1:1 Support with experienced mentors",
      comingSoon: true,
    },
  ];

  return (
    <section className="py-20 bg-intellexa-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-heading">Expanding Beyond JEE!</h2>
          <p className="section-subheading">
            We're constantly working on new study packs to help more students succeed in their exams.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {upcomingPacks.map((pack, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-intellexa-blue"
            >
              <h3 className="text-xl font-bold text-intellexa-dark mb-3">{pack.title}</h3>
              <p className="text-gray-600 mb-4">{pack.description}</p>
              
              {pack.comingSoon && (
                <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">
                  Coming Soon
                </span>
              )}
            </div>
          ))}
        </div>
        
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold text-intellexa-dark mb-4 text-center">Be the First to Know – Stay Updated!</h3>
          <p className="text-gray-600 mb-6 text-center">
            Subscribe to our newsletter and be the first to know when we launch new study packs.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-intellexa-blue"
              required
            />
            <button
              type="submit"
              className="bg-intellexa-blue hover:bg-intellexa-purple text-white font-semibold px-6 py-3 rounded-lg transition-colors flex items-center justify-center"
            >
              Subscribe <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </form>
          
          <p className="text-xs text-gray-500 mt-4 text-center">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UpcomingPacksSection;
