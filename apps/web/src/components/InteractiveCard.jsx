import React from 'react';
import { motion } from 'framer-motion';

const InteractiveCard = ({ 
  children, 
  className = '', 
  glowColor = 'blue',
  delay = 0,
  onClick
}) => {
  const glowColors = {
    blue: 'hover:shadow-[0_0_20px_rgba(0,212,255,0.3),0_0_40px_rgba(0,212,255,0.2)]',
    magenta: 'hover:shadow-[0_0_20px_rgba(255,0,255,0.3),0_0_40px_rgba(255,0,255,0.2)]',
    cyan: 'hover:shadow-[0_0_20px_rgba(0,255,136,0.3),0_0_40px_rgba(0,255,136,0.2)]',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.03, y: -5 }}
      onClick={onClick}
      className={`
        relative rounded-xl bg-gradient-to-br from-gray-900/90 to-gray-950/90 
        backdrop-blur-sm border border-gray-800/50
        shadow-lg transition-all duration-300 cursor-pointer
        ${glowColors[glowColor]}
        ${className}
      `}
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
      {children}
    </motion.div>
  );
};

export default InteractiveCard;