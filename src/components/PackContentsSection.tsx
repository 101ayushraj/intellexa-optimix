
import React from 'react';
import { FileText, BookOpen, BrainCircuit, CheckCircle, FileCheck, Calendar, Users } from 'lucide-react';

const PackContentsSection: React.FC = () => {
  const contents = [
    {
      title: "Chapterwise PYQs",
      description: "Topic-wise previous year questions for JEE Mains & Advanced.",
      icon: <FileCheck className="h-12 w-12 p-2 bg-purple-100 text-intellexa-violet rounded-lg" />,
    },
    {
      title: "JEE Mains PYQs as Question Paper",
      description: "Complete JEE Mains previous year papers organized by year.",
      icon: <FileCheck className="h-12 w-12 p-2 bg-blue-100 text-intellexa-blue rounded-lg" />,
    },
    {
      title: "JEE Advanced PYQs as Question Paper",
      description: "Complete JEE Advanced previous year papers organized by year.",
      icon: <FileCheck className="h-12 w-12 p-2 bg-pink-100 text-intellexa-pink rounded-lg" />,
    },
    {
      title: "All PYQs Solutions",
      description: "Detailed solutions to all previous year questions for better understanding.",
      icon: <FileCheck className="h-12 w-12 p-2 bg-green-100 text-green-600 rounded-lg" />,
    },
    {
      title: "Short Notes",
      description: "Concise notes covering key concepts and formulas for quick revision.",
      icon: <CheckCircle className="h-12 w-12 p-2 bg-blue-100 text-intellexa-blue rounded-lg" />,
    },
    {
      title: "Mind Maps",
      description: "Visual learning aids to understand connections between concepts and topics.",
      icon: <BrainCircuit className="h-12 w-12 p-2 bg-orange-100 text-orange-500 rounded-lg" />,
    },
    {
      title: "Detailed Notes",
      description: "Comprehensive notes with thorough explanations of concepts and examples.",
      icon: <BookOpen className="h-12 w-12 p-2 bg-pink-100 text-intellexa-pink rounded-lg" />,
    },
    {
      title: "Study Planner",
      description: "Structured study schedule to help you cover the entire syllabus efficiently.",
      icon: <Calendar className="h-12 w-12 p-2 bg-yellow-100 text-yellow-600 rounded-lg" />,
    },
    {
      title: "DPPs (Daily Practice Problems)",
      description: "Structured daily practice problems to strengthen concepts and increase speed.",
      icon: <FileText className="h-12 w-12 p-2 bg-green-100 text-green-600 rounded-lg" />,
    },
    {
      title: "Formula Sheets",
      description: "Quick reference materials with important formulas for rapid revision.",
      icon: <FileText className="h-12 w-12 p-2 bg-red-100 text-red-500 rounded-lg" />,
    },
    {
      title: "500+ Questions per Chapter Booklet",
      description: "Extensive practice material for each chapter to ensure thorough understanding.",
      icon: <FileCheck className="h-12 w-12 p-2 bg-indigo-100 text-indigo-600 rounded-lg" />,
    },
    {
      title: "40-day Crash Course",
      description: "Intensive short-term course designed for last-minute preparation and revision.",
      icon: <Calendar className="h-12 w-12 p-2 bg-indigo-100 text-indigo-600 rounded-lg" />,
    },
    {
      title: "Mentorship by NITians/IITians",
      description: "Personalized guidance and support from students who have successfully cracked JEE.",
      icon: <Users className="h-12 w-12 p-2 bg-blue-100 text-intellexa-blue rounded-lg" />,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-heading">What's Inside Our JEE Study Pack?</h2>
          <p className="section-subheading">
            Our meticulously designed study packs include everything you need for successful JEE preparation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contents.map((content, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4">
                {content.icon}
              </div>
              <h3 className="text-xl font-bold text-intellexa-dark mb-2">{content.title}</h3>
              <p className="text-gray-600">{content.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackContentsSection;
