
import React from 'react';
import { motion } from 'framer-motion';
import { ROADMAP_DATA } from '../../constants';

const History: React.FC = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <div className="w-full h-full pt-20 pb-20 overflow-y-auto no-scrollbar relative max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2 
          variants={itemVariants}
          className="text-4xl md:text-7xl font-syncopate font-black mb-4 tracking-tighter"
        >
          THE JOURNEY
        </motion.h2>
        <motion.p 
          variants={itemVariants}
          className="text-[#C0C0C0] font-syncopate text-xs tracking-[0.5em] uppercase"
        >
          Iconic Eras: 2008 — PRESENT
        </motion.p>
      </div>

      <div className="relative">
        {/* The Roadmap Central Line */}
        <motion.div 
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#C0C0C0] to-transparent origin-top -translate-x-1/2 hidden md:block"
        />

        <div className="space-y-12 md:space-y-24 relative z-10">
          {ROADMAP_DATA.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div 
                key={item.year}
                variants={itemVariants}
                className={`flex flex-col md:flex-row items-center justify-center w-full ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Content Card */}
                <div className={`w-full md:w-[45%] ${isEven ? 'md:pl-12 text-left' : 'md:pr-12 md:text-right'}`}>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="p-6 border border-white/10 bg-white/5 rounded-lg backdrop-blur-sm hover:border-[#C0C0C0]/40 transition-all group"
                  >
                    <div className={`flex items-baseline gap-4 mb-2 ${isEven ? 'justify-start' : 'md:justify-end'}`}>
                      <span className="text-3xl md:text-4xl font-syncopate font-black text-[#C0C0C0] group-hover:text-white transition-colors">{item.year}</span>
                      <h3 className="text-lg md:text-xl font-bold tracking-widest">{item.title}</h3>
                    </div>
                    <p className="text-sm text-white/60 leading-relaxed font-light">
                      {item.event}
                    </p>
                  </motion.div>
                </div>

                {/* Central Dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + (idx * 0.1) }}
                    className="w-4 h-4 bg-black border-2 border-[#C0C0C0] rounded-full shadow-[0_0_15px_rgba(192,192,192,0.8)]"
                  />
                </div>

                {/* Spacer for other side on desktop */}
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Decorative End Dot */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="mt-12 text-center"
      >
        <div className="w-2 h-2 bg-[#C0C0C0] rounded-full mx-auto animate-pulse" />
        <p className="mt-4 font-syncopate text-[8px] tracking-[1em] text-white/20 uppercase">To be continued...</p>
      </motion.div>
    </div>
  );
};

export default History;
