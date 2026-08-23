import React from 'react';
import { motion } from 'framer-motion';

const NeonFlashingLetter = ({ letter }) => {
  return (
    <motion.span
      animate={{
        opacity: [1, 0.9, 1, 0.4, 1, 0.8, 1, 0.2, 1, 1, 1],
        textShadow: [
          "0 0 10px rgba(0, 217, 255, 0.8), 0 0 20px rgba(0, 217, 255, 0.6), 0 0 30px rgba(0, 217, 255, 0.4)",
          "0 0 5px rgba(0, 217, 255, 0.5), 0 0 10px rgba(0, 217, 255, 0.3), 0 0 15px rgba(0, 217, 255, 0.1)",
          "0 0 10px rgba(0, 217, 255, 0.8), 0 0 20px rgba(0, 217, 255, 0.6), 0 0 30px rgba(0, 217, 255, 0.4)"
        ]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        times: [0, 0.1, 0.2, 0.25, 0.3, 0.4, 0.5, 0.55, 0.6, 0.8, 1]
      }}
      className="inline-block text-[#00D9FF]"
    >
      {letter}
    </motion.span>
  );
};

export default NeonFlashingLetter;