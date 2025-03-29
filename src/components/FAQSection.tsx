
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "Who is this pack for?",
      answer: "This pack is designed for any JEE/NEET aspirant who wants a complete, structured study resource. Whether you're starting your preparation or looking to streamline your revision process, the Intellexa Study Pack provides everything you need in one place.",
    },
    {
      question: "How will I receive my PDFs?",
      answer: "You'll receive all study materials instantly via WhatsApp and Email immediately after your purchase is confirmed. Simply provide your contact details during checkout, and we'll deliver everything right away.",
    },
    {
      question: "What makes Intellexa better than free resources?",
      answer: "While free resources are scattered across the internet with varying quality, Intellexa saves you time by providing structured, comprehensive, and expert-curated materials in one place. Our pack ensures complete syllabus coverage, organized in a way that optimizes your learning efficiency and retention.",
    },
    {
      question: "Can I share the pack with my friends?",
      answer: "Each purchase is for personal use only. Sharing or distributing the materials is not permitted as it violates our terms of service. We offer affordable pricing to make it accessible for all serious students.",
    },
    {
      question: "How long will I have access to the materials?",
      answer: "Once purchased, you'll have lifetime access to the current version of the Intellexa Study Pack. You can download and save all PDFs for your personal use anytime.",
    },
    {
      question: "Is there a refund policy?",
      answer: "Yes, we offer a 7-day satisfaction guarantee. If you're not satisfied with the quality of our study materials, contact us within 7 days of purchase for a full refund.",
    },
    {
      question: "Are the materials updated regularly?",
      answer: "Yes, we regularly update our study materials to reflect any changes in exam patterns or syllabi. When significant updates are made, existing customers receive notifications.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-heading">Frequently Asked Questions</h2>
          <p className="section-subheading">
            Got questions? We've got answers! Here are some common questions about the Intellexa Study Pack.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-intellexa-dark hover:bg-intellexa-light/50">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-white text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-10 text-center">
            <p className="text-gray-700">
              Still have questions? Feel free to reach out to us directly.
            </p>
            <a 
              href="#contact" 
              className="text-intellexa-blue hover:text-intellexa-purple font-medium underline inline-block mt-2"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
