import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Mail, Phone, Calendar, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const InteractiveContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    setIsOpen(false);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        className="fixed bottom-24 md:bottom-8 right-4 md:right-8 z-50"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-gradient-to-br from-[#ff00ff] to-[#aa00aa] shadow-[0_0_20px_rgba(255,0,255,0.5)] flex items-center justify-center"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                <X className="w-6 h-6 text-white" />
              </motion.div>
            ) : (
              <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                <MessageSquare className="w-6 h-6 text-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-44 md:bottom-28 right-4 md:right-8 z-40 w-[calc(100vw-2rem)] sm:w-96 max-w-sm bg-[#0a0a0a]/95 backdrop-blur-xl border border-[#ff00ff]/30 rounded-2xl shadow-2xl shadow-[#ff00ff]/20 overflow-hidden"
          >
            <div className="p-6 border-b border-white/10 bg-gradient-to-r from-[#ff00ff]/10 to-transparent flex items-center gap-4">
              <img 
                src="https://horizons-cdn.hostinger.com/d0673265-adb7-4362-8cbb-bb439167c2b5/59b0610f463f778a6bc3df34cf4389fd.jpg" 
                alt="Derek Bowen" 
                className="w-12 h-12 rounded-full object-cover border-2 border-[#ff00ff] shadow-[0_0_10px_rgba(255,0,255,0.5)]"
              />
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Let's Collaborate</h3>
                <p className="text-sm text-gray-400">Drop me a message or schedule a time.</p>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex flex-col gap-3 mb-6">
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="mailto:derekcbowen@outlook.com" className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-sm text-gray-300">
                    <Mail className="w-4 h-4 text-[#00d4ff]" /> Email
                  </a>
                  <a href="tel:+19092728096" className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-sm text-gray-300">
                    <Phone className="w-4 h-4 text-[#00ff88]" /> Call
                  </a>
                  <a href="https://www.linkedin.com/in/derekcbowen?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-sm text-gray-300">
                    <Linkedin className="w-4 h-4 text-[#00d4ff]" /> Connect
                  </a>
                </div>
                <a href="https://tidycal.com/meetderek" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#ff00ff]/10 hover:bg-[#ff00ff]/20 border border-[#ff00ff]/30 transition-colors text-sm text-white font-medium shadow-[0_0_10px_rgba(255,0,255,0.1)]">
                  <Calendar className="w-4 h-4 text-[#ff00ff]" /> Book a Meeting
                </a>
              </div>

              <div className="relative flex items-center py-2 mb-4">
                <div className="flex-grow border-t border-white/10"></div>
                <span className="flex-shrink-0 mx-4 text-gray-500 text-xs">Or send a message</span>
                <div className="flex-grow border-t border-white/10"></div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input type="text" placeholder="Your Name" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#ff00ff] transition-colors" />
                </div>
                <div>
                  <input type="email" placeholder="Your Email" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#ff00ff] transition-colors" />
                </div>
                <div>
                  <textarea placeholder="Your Message" required rows={3} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#ff00ff] transition-colors resize-none" />
                </div>
                <Button type="submit" className="w-full bg-[#ff00ff] hover:bg-[#cc00cc] text-white font-semibold gap-2">
                  <Send className="w-4 h-4" /> Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default InteractiveContactButton;