
import React from 'react';
import { Phone, Mail, MessageSquare, Clock } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-intellexa-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-heading">Need Help? We're Just a Message Away!</h2>
          <p className="section-subheading">
            Our support team is ready to assist you with any questions you may have about the Intellexa Study Pack.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-intellexa-dark mb-6">Contact Us</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-intellexa-blue/10 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-intellexa-blue" />
                </div>
                <div>
                  <p className="font-semibold text-intellexa-dark">WhatsApp Support</p>
                  <p className="text-gray-600">+91 98765 43210</p>
                  <p className="text-sm text-gray-500 mt-1">Quick responses within 2 hours</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-intellexa-blue/10 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-intellexa-blue" />
                </div>
                <div>
                  <p className="font-semibold text-intellexa-dark">Email Support</p>
                  <p className="text-gray-600">support@intellexa.com</p>
                  <p className="text-sm text-gray-500 mt-1">We reply within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-intellexa-dark mb-6">Support Hours</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-intellexa-blue/10 p-3 rounded-full mr-4">
                  <MessageSquare className="h-6 w-6 text-intellexa-blue" />
                </div>
                <div>
                  <p className="font-semibold text-intellexa-dark">Chat Support</p>
                  <p className="text-gray-600">Available on WhatsApp</p>
                  <p className="text-sm text-gray-500 mt-1">Get instant help with your queries</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-intellexa-blue/10 p-3 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-intellexa-blue" />
                </div>
                <div>
                  <p className="font-semibold text-intellexa-dark">Working Hours</p>
                  <p className="text-gray-600">Monday to Saturday: 9AM - 8PM IST</p>
                  <p className="text-gray-600">Sunday: 10AM - 4PM IST</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-lg text-gray-700">
            We're committed to providing excellent support and ensuring your success with the Intellexa Study Pack.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
