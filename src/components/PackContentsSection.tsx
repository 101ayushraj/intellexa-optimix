
import React from 'react';
import { FileText, BookOpen, CheckCircle, BookCheck, BrainCircuit, FileCheck, Send, CalendarCheck, Zap, List } from 'lucide-react';

const PackContentsSection: React.FC = () => {
  const contents = [
    {
      title: "Full Syllabus Tracker",
      description: "Keep track of your progress and ensure you cover every topic in the syllabus.",
      icon: <CheckCircle className="h-12 w-12 p-2 bg-blue-100 text-intellexa-blue rounded-lg" />,
    },
    {
      title: "PYQs with Solutions",
      description: "Topic-wise and year-wise previous year questions with detailed solutions.",
      icon: <FileCheck className="h-12 w-12 p-2 bg-purple-100 text-intellexa-violet rounded-lg" />,
    },
    {
      title: "Detailed Notes & Short Notes",
      description: "Comprehensive notes for deep learning and concise notes for quick revision.",
      icon: <BookOpen className="h-12 w-12 p-2 bg-pink-100 text-intellexa-pink rounded-lg" />,
    },
    {
      title: "Formula Notebook",
      description: "All essential formulas organized by subject and topic for quick reference.",
      icon: <FileText className="h-12 w-12 p-2 bg-green-100 text-green-600 rounded-lg" />,
    },
    {
      title: "Mind Maps",
      description: "Visual learning aids to boost retention and understand complex relationships between concepts.",
      icon: <BrainCircuit className="h-12 w-12 p-2 bg-orange-100 text-orange-500 rounded-lg" />,
    },
    {
      title: "Cheat Sheets",
      description: "Compact, high-density information sheets for last-minute revision.",
      icon: <List className="h-12 w-12 p-2 bg-red-100 text-red-500 rounded-lg" />,
    },
    {
      title: "Study Planner",
      description: "Customizable study schedules to optimize your preparation time.",
      icon: <CalendarCheck className="h-12 w-12 p-2 bg-indigo-100 text-indigo-500 rounded-lg" />,
    },
    {
      title: "Crash Course Content",
      description: "Intensive, focused material for rapid learning and last-minute preparation.",
      icon: <Zap className="h-12 w-12 p-2 bg-yellow-100 text-yellow-600 rounded-lg" />,
    },
    {
      title: "Test Series with Solutions",
      description: "Practice tests that simulate real exam conditions with detailed solution explanations.",
      icon: <BookCheck className="h-12 w-12 p-2 bg-yellow-100 text-yellow-600 rounded-lg" />,
    },
    {
      title: "Instant Digital Delivery",
      description: "Get all materials delivered instantly to your WhatsApp and Email after purchase.",
      icon: <Send className="h-12 w-12 p-2 bg-teal-100 text-teal-600 rounded-lg" />,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-heading">What's Inside the Intellexa Study Pack?</h2>
          <p className="section-subheading">
            Our comprehensive pack contains everything you need to excel in your JEE preparation.
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-intellexa-light to-white p-8 rounded-2xl shadow-lg">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contents.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-intellexa-dark mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 bg-intellexa-blue/10 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-intellexa-blue mb-3 flex items-center">
              <CheckCircle className="h-6 w-6 mr-2" /> Everything You Need in One Place
            </h3>
            <p className="text-gray-700">
              No need to search elsewhere or buy multiple resources. Intellexa Study Pack is designed to be your one-stop solution for JEE preparation. All materials are meticulously organized and structured for maximum learning efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackContentsSection;
