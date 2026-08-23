import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen pt-32 pb-16 px-6">
      <Helmet>
        <title>Terms of Service | Derek Bowen</title>
      </Helmet>

      <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Terms of <span className="text-[#00ff88]">Service</span>
          </h1>
          <p className="text-gray-400 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p>By accessing and using this website and associated services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this service.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Intellectual Property</h2>
              <p>The site and its original content, features, and functionality are owned by Derek Bowen and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. User Conduct</h2>
              <p>You agree to use the services only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the website. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Limitation of Liability</h2>
              <p>In no event shall Derek Bowen, nor any of his officers, directors and employees, be liable to you for anything arising out of or in any way connected with your use of this website, whether such liability is under contract, tort or otherwise.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Governing Law</h2>
              <p>These Terms shall be governed and construed in accordance with the laws of California, United States, without regard to its conflict of law provisions.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;