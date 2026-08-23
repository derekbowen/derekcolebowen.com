import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen pt-32 pb-16 px-6">
      <Helmet>
        <title>Privacy Policy | Derek Bowen</title>
      </Helmet>

      <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Privacy <span className="text-[#ff00ff]">Policy</span>
          </h1>
          <p className="text-gray-400 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
              <p>We collect information that you provide directly to us, including when you fill out a contact form, subscribe to a newsletter, or interact with our services. This may include your name, email address, phone number, and any other information you choose to provide.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Communicate with you, respond to your inquiries, and provide customer support</li>
                <li>Send you technical notices, updates, and administrative messages</li>
                <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Information Sharing</h2>
              <p>We do not share your personal information with third parties except as described in this privacy policy or with your consent. We may share information with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Security</h2>
              <p>We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:derekcbowen@outlook.com" className="text-[#00d4ff] hover:underline">derekcbowen@outlook.com</a></p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;