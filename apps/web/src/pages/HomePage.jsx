import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import VenturesSection from '@/components/VenturesSection.jsx';
import LogisticsJourneySection from '@/components/LogisticsJourneySection.jsx';
import SkillsAndExpertiseSection from '@/components/SkillsAndExpertiseSection.jsx';
import FeaturedBooksSection from '@/components/FeaturedBooksSection.jsx';
import AuthorAndThoughtLeadershipSection from '@/components/AuthorAndThoughtLeadershipSection.jsx';
import FullStackProductsSection from '@/components/FullStackProductsSection.jsx';
import EducationAndCertificationsSection from '@/components/EducationAndCertificationsSection.jsx';
import ProfessionalSummarySection from '@/components/ProfessionalSummarySection.jsx';
import InteractiveContactSection from '@/components/InteractiveContactSection.jsx';
import MySpaceOverlay from '@/components/MySpaceOverlay.jsx';
import ScrollTransitionEffect from '@/components/ScrollTransitionEffect.jsx';
import NeonFlashingLetter from '@/components/NeonFlashingLetter.jsx';

const HomePage = () => {
  const [showMySpace, setShowMySpace] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  const handleTransitionComplete = () => {
    setShowMySpace(false);
    setIsTransitioning(false);
  };

  return (
    <>
      <Helmet>
        <title>Derek Bowen - Programmatic SEO & Logistics Operator</title>
        <meta name="description" content="Programmatic SEO + Logistics Operator Building Marketplaces. Versatile professional blending 20+ years logistics expertise with entrepreneurial success." />
      </Helmet>

      {/* Retro Overlay */}
      {showMySpace && (
        <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
          <MySpaceOverlay />
        </div>
      )}

      {/* Glitch Transition Manager */}
      {showMySpace && (
        <ScrollTransitionEffect 
          onComplete={handleTransitionComplete} 
        />
      )}

      {/* Modern Site Content */}
      <div 
        className={`min-h-screen bg-[#0A0E27] text-white transition-opacity duration-1000 ${
          showMySpace ? 'opacity-0 h-screen overflow-hidden fixed inset-0' : 'opacity-100 relative'
        }`}
      >
        {/* Animated Background */}
        <div className="animated-bg" />

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
          {/* Modern Hero Background Image */}
          <div 
            className="absolute inset-0 z-0 opacity-30 bg-cover bg-center bg-no-repeat mix-blend-luminosity"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1699060463533-94ceb428c67f")' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E27]/90 via-[#0A0E27]/70 to-[#0A0E27] z-0" />
          
          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center justify-center gap-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: showMySpace ? 0 : 1, y: showMySpace ? 50 : 0 }}
              transition={{ duration: 1, delay: showMySpace ? 0 : 0.2 }}
              className="w-full text-center"
            >
              <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: showMySpace ? 0 : 1, scale: showMySpace ? 0.9 : 1 }}
                transition={{ delay: showMySpace ? 0 : 0.4, duration: 0.8 }}
                className="text-7xl lg:text-9xl xl:text-[11rem] font-black mb-6 animate-glitch-flash leading-none tracking-tighter"
              >
                <span className="text-white">Derek</span><br/>
                <span className="neon-cyan text-[#00D9FF]">
                  <NeonFlashingLetter letter="B" />owen
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: showMySpace ? 0 : 1, y: showMySpace ? 20 : 0 }}
                transition={{ delay: showMySpace ? 0 : 0.7, duration: 0.8 }}
                className="mb-10"
              >
                <p className="text-xl lg:text-3xl text-gray-300 mb-4 font-medium">
                  Programmatic SEO <span className="text-[#00FF88]">+</span> Logistics Operator
                </p>
                <p className="text-lg text-gray-400 max-w-xl mx-auto uppercase tracking-widest text-sm">
                  Building Marketplaces & Scalable Systems
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: showMySpace ? 0 : 1 }}
                transition={{ delay: showMySpace ? 0 : 1.2, duration: 1 }}
                className="flex flex-col items-center gap-6"
              >
                <a 
                  href="https://www.linkedin.com/in/derekcbowen?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-4 rounded-full bg-[#00D9FF] text-[#0A0E27] font-bold text-lg hover:bg-[#00b8e6] hover:shadow-[0_0_30px_rgba(0,217,255,0.6)] transition-all duration-300 uppercase tracking-wider"
                >
                  Let's Connect
                </a>
                <Link 
                  to="/work-with-me"
                  className="text-gray-400 hover:text-[#00FF88] transition-colors border-b border-transparent hover:border-[#00FF88] pb-1"
                >
                  Work with me
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: showMySpace ? 0 : 1 }}
            transition={{ delay: showMySpace ? 0 : 1.7 }}
            onClick={scrollToContent}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-gray-500 hover:text-[#00D9FF] transition-colors cursor-pointer"
            >
              <span className="text-sm">Explore</span>
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </motion.button>
        </section>

        {/* Content Sections - Non-linear narrative flow */}
        <VenturesSection />
        <ProfessionalSummarySection />
        <FeaturedBooksSection />
        <LogisticsJourneySection />
        <SkillsAndExpertiseSection />
        <AuthorAndThoughtLeadershipSection />
        <FullStackProductsSection />
        <EducationAndCertificationsSection />

        {/* Interactive Contact */}
        <InteractiveContactSection />
      </div>
    </>
  );
};

export default HomePage;