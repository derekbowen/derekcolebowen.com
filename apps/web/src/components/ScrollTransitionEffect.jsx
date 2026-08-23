import React, { useEffect, useState } from 'react';

const ScrollTransitionEffect = ({ onComplete }) => {
  const [phase, setPhase] = useState('idle'); // 'idle', 'scanlines', 'chromatic', 'static', 'fadeout'

  useEffect(() => {
    const handleScroll = (e) => {
      // Prevent default scroll behavior during transition
      if (phase !== 'idle') {
        e.preventDefault();
        return;
      }

      // Start transition sequence
      setPhase('scanlines');
      document.body.style.overflow = 'hidden';

      // Sequence timing
      setTimeout(() => setPhase('chromatic'), 250);
      setTimeout(() => setPhase('static'), 450);
      setTimeout(() => setPhase('fadeout'), 700);
      
      setTimeout(() => {
        document.body.style.overflow = '';
        onComplete();
      }, 1000);
    };

    // Listen for various scroll events
    window.addEventListener('wheel', handleScroll, { passive: false, once: true });
    window.addEventListener('touchmove', handleScroll, { passive: false, once: true });
    window.addEventListener('keydown', (e) => {
      if (['ArrowDown', 'ArrowUp', 'Space', 'PageDown', 'PageUp'].includes(e.code)) {
        handleScroll(e);
      }
    }, { once: true });

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
      document.body.style.overflow = '';
    };
  }, [phase, onComplete]);

  if (phase === 'idle') return null;

  return (
    <div 
      className={`fixed inset-0 z-[110] pointer-events-none transition-opacity duration-300 ${
        phase === 'fadeout' ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Scanlines Effect */}
      {(phase === 'scanlines' || phase === 'chromatic') && (
        <div className="absolute inset-0 glitch-scanlines opacity-50" />
      )}

      {/* Chromatic Aberration Effect */}
      {phase === 'chromatic' && (
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm glitch-chromatic flex items-center justify-center">
          <div className="w-full h-full bg-gradient-to-tr from-red-500/20 to-cyan-500/20 mix-blend-overlay" />
        </div>
      )}

      {/* TV Static Effect */}
      {(phase === 'static' || phase === 'fadeout') && (
        <div className="absolute inset-0 glitch-static bg-black" />
      )}
    </div>
  );
};

export default ScrollTransitionEffect;