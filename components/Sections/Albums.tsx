
import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { ALBUMS } from '../../constants';
import { AlbumData } from '../../types';

const Albums: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedAlbum, setSelectedAlbum] = useState<AlbumData | null>(null);

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      scale: 1, 
      filter: 'blur(0px)',
      transition: { duration: 0.5 } 
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full relative">
      <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-syncopate font-bold mb-12 text-center">
        DISCOGRAPHY
      </motion.h2>

      <div className="relative group/nav">
        {/* Navigation Buttons */}
        <button 
          onClick={() => scroll('left')}
          className="absolute left-[-40px] top-1/2 -translate-y-1/2 z-10 p-2 text-white/40 hover:text-[#C0C0C0] transition-colors hidden md:block"
        >
          <ChevronLeft size={48} strokeWidth={1} />
        </button>
        <button 
          onClick={() => scroll('right')}
          className="absolute right-[-40px] top-1/2 -translate-y-1/2 z-10 p-2 text-white/40 hover:text-[#C0C0C0] transition-colors hidden md:block"
        >
          <ChevronRight size={48} strokeWidth={1} />
        </button>

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-8 pb-12 snap-x px-4 no-scrollbar scroll-smooth"
        >
          {ALBUMS.map((album, i) => (
            <motion.div
              key={album.title}
              variants={itemVariants}
              whileHover={{ 
                y: -15, 
                scale: 1.05,
                transition: { type: 'spring', stiffness: 300, damping: 20 }
              }}
              className="flex-shrink-0 w-64 md:w-80 snap-center"
            >
              <div className="aspect-square bg-white/5 border border-white/10 rounded-lg overflow-hidden mb-4 group relative cursor-pointer shadow-2xl">
                <img 
                  src={album.image} 
                  alt={album.title} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out" 
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6 backdrop-blur-[2px]">
                  <motion.button 
                    whileHover={{ scale: 1.1, backgroundColor: '#ffffff' }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedAlbum(album)}
                    className="px-6 py-3 bg-[#C0C0C0] text-black font-syncopate text-[10px] font-bold tracking-widest shadow-[0_0_20px_rgba(192,192,192,0.3)]"
                  >
                    LEARN MORE
                  </motion.button>
                </div>
              </div>
              <h3 className="text-xl font-syncopate font-bold">{album.title}</h3>
              <p className="text-sm text-[#C0C0C0] font-bold mb-2">{album.year}</p>
              <p className="text-xs text-white/60 line-clamp-2">{album.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Album Detail Modal */}
      <AnimatePresence>
        {selectedAlbum && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/95 backdrop-blur-xl"
            onClick={() => setSelectedAlbum(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              className="bg-black border border-white/10 w-full max-w-5xl rounded-2xl overflow-hidden relative shadow-[0_0_100px_rgba(192,192,192,0.1)] flex flex-col md:flex-row h-full max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button 
                onClick={() => setSelectedAlbum(null)}
                className="absolute top-6 right-6 z-10 text-white/40 hover:text-white transition-colors"
              >
                <X size={32} />
              </button>

              {/* Album Art Section */}
              <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
                <img 
                  src={selectedAlbum.image} 
                  alt={selectedAlbum.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-4xl md:text-6xl font-syncopate font-black text-white">{selectedAlbum.title}</h3>
                  <div className="flex gap-4 mt-2">
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded text-xs font-syncopate text-[#C0C0C0] border border-white/10">
                      {selectedAlbum.year}
                    </span>
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded text-xs font-syncopate text-[#C0C0C0] border border-white/10">
                      {selectedAlbum.genre}
                    </span>
                  </div>
                </div>
              </div>

              {/* Album Info Section */}
              <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto no-scrollbar bg-black">
                <div className="space-y-12">
                  <div>
                    <h4 className="text-[10px] font-syncopate tracking-[0.4em] text-[#C0C0C0] mb-4">THE_STORY</h4>
                    <p className="text-lg text-white/80 font-light leading-relaxed">
                      {selectedAlbum.description}
                    </p>
                  </div>

                  {selectedAlbum.tracklist && (
                    <div>
                      <h4 className="text-[10px] font-syncopate tracking-[0.4em] text-[#C0C0C0] mb-6 uppercase">TRACKLISTING</h4>
                      <div className="space-y-4">
                        {selectedAlbum.tracklist.map((track, idx) => (
                          <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * idx }}
                            key={track} 
                            className="group flex items-center justify-between border-b border-white/5 pb-2"
                          >
                            <span className="font-syncopate text-xs text-white/30 group-hover:text-[#C0C0C0] transition-colors">
                              {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                            </span>
                            <span className="text-sm font-semibold tracking-wide group-hover:translate-x-2 transition-transform duration-300">
                              {track}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="pt-8">
                    <button className="w-full py-4 border-2 border-white/10 hover:border-[#C0C0C0] text-[#C0C0C0] hover:text-white font-syncopate text-xs tracking-widest transition-all">
                      LISTEN ON STREAMING PLATFORMS
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Albums;
