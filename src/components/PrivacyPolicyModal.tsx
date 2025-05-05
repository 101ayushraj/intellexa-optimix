
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
            <h3 className="text-lg font-semibold">Courtesy & Legal Disclaimer – Please Read Carefully</h3>
            <p className="mt-1">
              At <strong>Intellexa</strong>, we are committed to supporting students by providing <strong>organized, high-quality, and time-saving study resources</strong> for JEE aspirants. The materials available in our study packs—such as previous year questions, notes, mind maps, and other preparatory content—have been <strong>collected, curated, modified, and structured</strong> to form a consolidated and accessible solution for students.
            </p>
            <p className="mt-2">
              We would like to clearly state that <strong>Intellexa does not claim to be the original creator of all individual pieces of content</strong> included in these packs. Much of the information has been <strong>sourced from freely available public domains, educational platforms, and open resources on the internet.</strong>
            </p>
            <p className="mt-2">
              Our pricing does <strong>not reflect ownership of any copyrighted educational content</strong>, but rather the <strong>significant time, effort, and expertise invested</strong> in:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Collecting scattered information from multiple sources</li>
              <li>Organizing the content into a logical, easy-to-follow structure</li>
              <li>Creating student-friendly layouts and visual study tools</li>
              <li>Updating material in alignment with the latest JEE syllabus and exam trends</li>
              <li>Designing value-added additions like syllabus trackers, mentorship, and mind maps</li>
            </ul>
            <p className="mt-2">
              We operate with a clear intention to <strong>help students reduce their search time, study more efficiently</strong>, and focus on actual learning instead of spending hours compiling resources.
            </p>
            <p className="mt-2">
              If you are a content creator, publisher, or rights holder and believe your work has been used inappropriately or without credit, please <strong>reach out to us directly</strong>. We are open to making necessary attributions, amendments, or removals upon valid request. Intellexa respects intellectual property rights and aims to <strong>foster a cooperative and ethical academic environment.</strong>
            </p>
            <p className="mt-2">
              Thank you for supporting Intellexa – a student-powered initiative made with passion, not profit.
            </p>
          </div>
          
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
              <li><strong>Personal Information:</strong> Name, email address, and payment details when you purchase a study pack.</li>
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
