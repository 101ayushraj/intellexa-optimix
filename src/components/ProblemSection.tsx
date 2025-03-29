
import React from 'react';
import { X, Check } from 'lucide-react';

const ProblemSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-heading">
            Are You Still Searching for Study Materials Instead of Studying?
          </h2>
          <p className="section-subheading">
            Most students waste 70% of their preparation time just looking for the right materials.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="bg-red-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Without Intellexa:</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-red-100 p-2 rounded-full mr-4 mt-1">
                  <X className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Hours Wasted on YouTube & Random Notes</p>
                  <p className="text-gray-600">Endless scrolling through videos and PDFs with no structure.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-red-100 p-2 rounded-full mr-4 mt-1">
                  <X className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Scattered PDFs & Unorganized Study Plans</p>
                  <p className="text-gray-600">No coherent system to follow, leading to confusion and gaps in learning.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-red-100 p-2 rounded-full mr-4 mt-1">
                  <X className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">No Clear Syllabus Tracker</p>
                  <p className="text-gray-600">Studying random topics without knowing what's important for the exam.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-red-100 p-2 rounded-full mr-4 mt-1">
                  <X className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Inconsistent Quality</p>
                  <p className="text-gray-600">Some free resources are good, others are misleading or outdated.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">With Intellexa Study Pack:</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">One Pack, Everything You Need</p>
                  <p className="text-gray-600">All materials structured and organized in a single comprehensive pack.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Complete Syllabus Coverage</p>
                  <p className="text-gray-600">Systematically covers every topic required for JEE & NEET exams.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Clear Study Roadmap</p>
                  <p className="text-gray-600">Know exactly what to study and when, with detailed tracking tools.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Expert-Curated Content</p>
                  <p className="text-gray-600">Materials designed by toppers and subject experts for maximum results.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-2xl font-bold text-intellexa-blue mb-4">Stop Wasting Time – Start Studying Smart!</p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join thousands of successful students who switched from aimless searching to structured learning with Intellexa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
