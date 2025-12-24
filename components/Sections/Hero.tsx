
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface HeroProps {
  onCta: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCta }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  const pulseVariants = {
    animate: {
      textShadow: [
        "0 0 0px rgba(255,255,255,0)",
        "0 0 15px rgba(255,255,255,0.7)",
        "0 0 30px rgba(255,255,255,0.4)",
        "0 0 15px rgba(255,255,255,0.7)",
        "0 0 0px rgba(255,255,255,0)"
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="text-center">
      <motion.div variants={itemVariants}>
        <motion.h1 
          variants={pulseVariants}
          animate="animate"
          className="text-6xl md:text-9xl font-syncopate font-black tracking-tighter leading-none mb-6 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
        >
          LADY GAGA
        </motion.h1>
      </motion.div>
      
      <motion.p 
        variants={itemVariants}
        className="text-lg md:text-2xl font-light tracking-[0.4em] uppercase mb-12 text-white/70"
      >
        Little Monsters Unite
      </motion.p>

      <motion.button
        variants={itemVariants}
        whileHover={{ 
          scale: 1.05, 
          boxShadow: '0 0 40px rgba(255,255,255,0.4)',
          backgroundColor: '#ffffff',
          color: '#000'
        }}
        whileTap={{ scale: 0.95 }}
        onClick={onCta}
        className="px-10 py-5 bg-white text-black font-syncopate font-bold text-sm tracking-widest transition-all flex items-center gap-4 mx-auto border border-white/20"
      >
        ENTER THE WORLD <ChevronRight size={18} />
      </motion.button>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1.5, duration: 2 }}
        className="mt-8 text-[8px] font-syncopate tracking-[1em] text-white/50 uppercase"
      >
        Click to begin navigation
      </motion.div>
    </div>
  );
};

export default Hero;
