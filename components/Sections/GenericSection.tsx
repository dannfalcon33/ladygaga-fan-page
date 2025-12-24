
import React from 'react';
import { motion } from 'framer-motion';

interface GenericSectionProps {
  title: string;
  subtitle: string;
  items: string[];
}

const GenericSection: React.FC<GenericSectionProps> = ({ title, subtitle, items }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5 } 
    }
  };

  return (
    <div className="text-center w-full max-w-4xl">
      <motion.h2 variants={itemVariants} className="text-5xl md:text-7xl font-syncopate font-bold mb-4">{title}</motion.h2>
      <motion.p variants={itemVariants} className="text-[#C0C0C0] font-syncopate text-sm tracking-[0.5em] mb-12 uppercase">{subtitle}</motion.p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, idx) => (
          <motion.div 
            key={idx} 
            variants={itemVariants}
            className="border border-white/10 p-8 rounded bg-white/5 hover:bg-white/10 hover:border-[#C0C0C0]/30 transition-all cursor-pointer group"
          >
            <div className="text-xs text-white/40 mb-4 font-syncopate group-hover:text-[#C0C0C0] transition-colors">
              {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
            </div>
            <div className="text-xl font-bold group-hover:text-[#C0C0C0] transition-colors">{item}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GenericSection;
