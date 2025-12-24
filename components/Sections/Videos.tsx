
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Play } from 'lucide-react';
import { VIDEOS_ROADMAP } from '../../constants';

const Videos: React.FC = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <div className="w-full h-full pt-20 pb-20 overflow-y-auto no-scrollbar relative max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <motion.h2 
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-7xl font-syncopate font-black mb-4 tracking-tighter"
        >
          CINEMA ROADMAP
        </motion.h2>
        <motion.p 
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="text-[#C0C0C0] font-syncopate text-xs tracking-[0.5em] uppercase"
        >
          Visual Legacy: 2008 — PRESENT
        </motion.p>
      </div>

      <div className="relative">
        {/* Central Roadmap Line */}
        <motion.div 
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#C0C0C0] to-transparent origin-top -translate-x-1/2 hidden md:block"
        />

        <div className="space-y-16 md:space-y-32 relative z-10">
          {VIDEOS_ROADMAP.map((video, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div 
                key={video.title}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col md:flex-row items-center justify-center w-full ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Video Card Container */}
                <div className={`w-full md:w-[45%] ${isEven ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="light-border-container group">
                    <div className="light-beam" />
                    <div className="card-inner p-1 overflow-hidden">
                      <div className="flex flex-col bg-black/60 backdrop-blur-md rounded-lg overflow-hidden border border-white/5">
                        
                        {/* Thumbnail */}
                        <div className="relative aspect-video overflow-hidden">
                          <img 
                            src={video.thumbnail} 
                            alt={video.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <a 
                              href={video.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="w-12 h-12 md:w-16 md:h-16 bg-[#C0C0C0] rounded-full flex items-center justify-center text-black shadow-[0_0_20px_rgba(192,192,192,0.4)] transition-transform hover:scale-110"
                            >
                              <Play size={24} fill="currentColor" />
                            </a>
                          </div>
                          <div className="absolute top-3 left-3 bg-black/80 px-2 py-1 border border-white/10 rounded">
                            <span className="text-[7px] font-syncopate text-white/50 tracking-widest">{video.year}</span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-5 md:p-6">
                          <h3 className="text-xl md:text-2xl font-syncopate font-black mb-3 group-hover:text-[#C0C0C0] transition-colors">
                            {video.title}
                          </h3>
                          <p className="text-xs md:text-sm text-white/50 font-light leading-relaxed line-clamp-3">
                            {video.description}
                          </p>
                          <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center">
                            <span className="text-[8px] font-syncopate text-white/30 tracking-[0.2em]">DIRECTOR_CUT</span>
                            <a 
                              href={video.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[10px] font-syncopate font-bold text-[#C0C0C0] hover:text-white transition-colors flex items-center gap-2"
                            >
                              VIEW <ExternalLink size={12} />
                            </a>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

                {/* Vertical Timeline Node */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    className="w-10 h-10 bg-black border-2 border-[#C0C0C0] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(192,192,192,0.3)]"
                  >
                    <span className="text-[8px] font-syncopate font-bold text-white">{video.year.slice(2)}</span>
                  </motion.div>
                </div>

                {/* Spacer */}
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="mt-24 text-center">
        <div className="inline-block px-8 py-3 border border-white/10 rounded-full backdrop-blur-sm">
          <p className="text-[10px] font-syncopate tracking-[0.4em] text-white/40 uppercase">Video Archive Complete</p>
        </div>
      </div>
    </div>
  );
};

export default Videos;
