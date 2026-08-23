import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FullStackProductCard = ({ 
  icon: Icon, 
  badge, 
  title, 
  description, 
  ctaText, 
  ctaLink, 
  accentColor = '#00D9FF',
  index = 0
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const isInternalLink = ctaLink.startsWith('/');

  const CardContent = () => (
    <>
      {/* Subtle background glow on hover */}
      <div 
        className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none blur-xl"
        style={{
          background: `linear-gradient(to bottom, ${accentColor}33, transparent)`
        }}
      />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-start justify-between mb-6">
          <div 
            className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
            style={{
              backgroundColor: `${accentColor}1A`,
              borderColor: isHovered ? `${accentColor}80` : `${accentColor}33`,
              borderWidth: '1px'
            }}
          >
            <Icon className="w-6 h-6" style={{ color: accentColor }} />
          </div>
          <span 
            className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full text-white transition-colors duration-300"
            style={{
              backgroundColor: `${accentColor}33`,
              borderColor: isHovered ? accentColor : `${accentColor}4D`,
              borderWidth: '1px'
            }}
          >
            {badge}
          </span>
        </div>

        <h3 
          className="text-2xl font-bold text-white mb-3 transition-colors duration-300"
          style={{ color: isHovered ? accentColor : 'white' }}
        >
          {title}
        </h3>
        
        <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
          {description}
        </p>

        <div
          className="mt-auto inline-flex items-center justify-between w-full px-6 py-4 rounded-lg font-bold transition-all duration-300 group/btn"
          style={{
            backgroundColor: isHovered ? accentColor : 'rgba(255,255,255,0.05)',
            borderColor: isHovered ? accentColor : 'rgba(255,255,255,0.1)',
            borderWidth: '1px',
            color: isHovered ? '#0A0E27' : 'white'
          }}
        >
          <span>{ctaText}</span>
          <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
        </div>
      </div>
    </>
  );

  const cardClasses = "group flex flex-col h-full bg-white/5 rounded-2xl border border-white/10 p-6 md:p-8 transition-all duration-300 relative overflow-hidden";
  const cardStyle = {
    borderColor: isHovered ? `${accentColor}80` : 'rgba(255,255,255,0.1)',
    backgroundColor: isHovered ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.05)'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="h-full"
    >
      {isInternalLink ? (
        <Link to={ctaLink} className={cardClasses} style={cardStyle}>
          <CardContent />
        </Link>
      ) : (
        <a href={ctaLink} target="_blank" rel="noopener noreferrer" className={cardClasses} style={cardStyle}>
          <CardContent />
        </a>
      )}
    </motion.div>
  );
};

export default FullStackProductCard;