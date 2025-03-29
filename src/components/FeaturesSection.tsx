
import React from 'react';
import { Clock, BookOpen, FileText, BrainCircuit, Users, Check } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: "Everything in One Pack",
      description: "No more searching across multiple websites. Get all your study materials in one organized pack.",
      icon: <FileText className="h-10 w-10 text-intellexa-blue" />,
    },
    {
      title: "Designed by Experts & Toppers",
      description: "Created by those who cracked JEE & NEET with top ranks and experienced educators.",
      icon: <Users className="h-10 w-10 text-intellexa-blue" />,
    },
    {
      title: "Save 100+ Hours",
      description: "Stop wasting time searching for materials. Start using that time for actual learning.",
      icon: <Clock className="h-10 w-10 text-intellexa-blue" />,
    },
    {
      title: "Topic-Wise PYQs & Mind Maps",
      description: "Master every concept with organized previous year questions and visual learning aids.",
      icon: <BrainCircuit className="h-10 w-10 text-intellexa-blue" />,
    },
    {
      title: "100% Exam Coverage",
      description: "Comprehensive coverage of the entire JEE & NEET syllabus with no important concept left out.",
      icon: <BookOpen className="h-10 w-10 text-intellexa-blue" />,
    },
    {
      title: "Instant Digital Delivery",
      description: "Receive your complete study pack immediately via WhatsApp and Email after purchase.",
      icon: <Check className="h-10 w-10 text-intellexa-blue" />,
    },
  ];

  return (
    <section id="features" className="py-20 bg-intellexa-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-heading">Why Choose Intellexa?</h2>
          <p className="section-subheading">
            Our study pack is designed to optimize your preparation and maximize your results. Here's why students love Intellexa:
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-intellexa-dark mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
