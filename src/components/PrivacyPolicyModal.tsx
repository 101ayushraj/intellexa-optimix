
import React from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";

interface PrivacyPolicyModalProps {
  trigger: React.ReactNode;
}

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ trigger }) => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Privacy Policy</DialogTitle>
          <DialogDescription>
            Effective Date: {currentDate}
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-4 space-y-4 text-left">
          <div>
            <h3 className="text-lg font-semibold">1. Introduction</h3>
            <p className="mt-1">
              Welcome to <strong>Intellexa</strong> ("we," "our," "us"). We value your privacy and are committed to protecting your personal data. 
              This Privacy Policy outlines how we collect, use, and protect your information when you visit our website <strong>www.intellexa.shop</strong>.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">2. Information We Collect</h3>
            <p className="mt-1">We collect and process the following information when you use our website:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Personal Information:</strong> Name, email address, phone number, and payment details when you purchase a study pack.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, device information, and usage data to improve our website experience.</li>
              <li><strong>Transaction Data:</strong> Details of purchases, including the study pack ordered and payment method.</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">3. How We Use Your Information</h3>
            <p className="mt-1">We use the collected data for the following purposes:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>To process and fulfill your orders.</li>
              <li>To improve our website and services.</li>
              <li>To send updates, promotional offers, and newsletters (if you opt-in).</li>
              <li>To comply with legal obligations.</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">4. Payment Information</h3>
            <p className="mt-1">
              We use third-party payment gateways such as <strong>Razorpay</strong> to process transactions securely. 
              We do not store your payment details on our servers.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">5. Third-Party Content & Free Educational Resources</h3>
            <p className="mt-1">
              Some of our study materials contain free educational content sourced from other institutes. 
              We acknowledge their contributions and clarify that we do not claim ownership of such content. 
              These resources are used to provide students with a comprehensive learning experience.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">6. Data Security</h3>
            <p className="mt-1">
              We implement security measures to protect your data from unauthorized access, alteration, disclosure, or destruction.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">7. Sharing of Information</h3>
            <p className="mt-1">
              We do not sell or trade your personal information. However, we may share it with:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Payment providers</strong> (e.g., Razorpay) for transaction processing.</li>
              <li><strong>Legal authorities</strong> if required by law.</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">8. Cookies and Tracking Technologies</h3>
            <p className="mt-1">
              We use cookies to enhance user experience and analyze website traffic. 
              You can modify your browser settings to disable cookies if desired.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">9. Your Rights</h3>
            <p className="mt-1">You have the right to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Request access to your personal data.</li>
              <li>Request correction or deletion of your data.</li>
              <li>Opt out of marketing communications.</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">10. Changes to This Privacy Policy</h3>
            <p className="mt-1">
              We may update this policy from time to time. Any changes will be posted on this page.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">11. Contact Us</h3>
            <p className="mt-1">If you have any questions regarding this Privacy Policy, please contact us at:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Email:</strong> <a href="mailto:intellexa.shop@gmail.com" className="text-intellexa-blue hover:underline">intellexa.shop@gmail.com</a></li>
              <li><strong>Phone:</strong> +916203346070</li>
            </ul>
          </div>
          
          <p className="pt-4">
            By using our website, you agree to the terms outlined in this Privacy Policy.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyPolicyModal;
