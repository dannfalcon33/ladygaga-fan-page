
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';
import { Section, NavOption } from '../types';
import { NAV_OPTIONS } from '../constants';

interface StarNavProps {
  onSelect: (section: Section) => void;
  activeSection: Section;
}

const StarNav: React.FC<StarNavProps> = ({ onSelect, activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="fixed bottom-8 right-8 z-50 flex flex-col items-end"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mb-4 flex flex-col items-end space-y-2"
          >
            {NAV_OPTIONS.map((opt, idx) => (
              <motion.button
                key={opt.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => onSelect(opt.id)}
                className={`text-right group flex items-center gap-3 transition-all duration-300 ${
                  activeSection === opt.id ? 'text-white' : 'text-white/60 hover:text-white'
                }`}
              >
                <span className={`text-sm font-syncopate uppercase tracking-widest bg-black/40 px-3 py-1 rounded backdrop-blur-sm border transition-all duration-300 ${
                  activeSection === opt.id ? 'border-white bg-white/10' : 'border-white/10 group-hover:border-[#C0C0C0]/60 group-hover:bg-[#C0C0C0]/5'
                }`}>
                  {opt.label}
                </span>
                <div className={`h-[2px] transition-all duration-300 ${activeSection === opt.id ? 'w-8 bg-white' : 'w-4 bg-white/40 group-hover:w-6 group-hover:bg-[#C0C0C0]'}`} />
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1, rotate: 144, borderColor: '#C0C0C0', boxShadow: '0 0 25px rgba(192,192,192,0.4)' }}
        whileTap={{ scale: 0.9 }}
        onClick={() => onSelect(Section.HERO)}
        className="bg-black/80 border-2 border-white/20 p-4 rounded-full backdrop-blur-md transition-colors"
      >
        <Star size={32} className="text-white hover:text-[#C0C0C0] transition-colors" />
      </motion.button>
    </div>
  );
};

export default StarNav;
