
import React, { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Section } from './types';
import BackgroundCarousel from './components/BackgroundCarousel';
import StarNav from './components/StarNav';
import SectionWrapper from './components/SectionWrapper';
import LoadingScreen from './components/LoadingScreen';
import VHSOverlay from './components/VHSOverlay';

// Sections
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import History from './components/Sections/History';
import Albums from './components/Sections/Albums';
import Contact from './components/Sections/Contact';
import Concerts from './components/Sections/Concerts';
import Videos from './components/Sections/Videos';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>(Section.HERO);
  const [isLoading, setIsLoading] = useState(true);

  const handleSectionChange = useCallback((section: Section) => {
    setActiveSection(section);
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case Section.HERO:
        return <Hero onCta={() => handleSectionChange(Section.ABOUT)} />;
      case Section.ABOUT:
        return <About />;
      case Section.HISTORY:
        return <History />;
      case Section.ALBUMS:
        return <Albums />;
      case Section.CONCERTS:
        return <Concerts />;
      case Section.VIDEOS:
        return <Videos />;
      case Section.CONTACT:
        return <Contact />;
      default:
        return <Hero onCta={() => handleSectionChange(Section.ABOUT)} />;
    }
  };

  return (
    <main className="relative h-screen w-full select-none overflow-hidden bg-black">
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onFinished={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
          <BackgroundCarousel />
          <VHSOverlay />
          
          {/* Decorative HUD Elements */}
          <div className="fixed top-8 left-8 z-40 mix-blend-difference pointer-events-none">
            <div className="font-syncopate text-[10px] tracking-widest text-white/40">
              SYSTEM_STATUS: ONLINE<br />
              ZONE: {activeSection.toUpperCase()}<br />
              USER: LITTLE_MONSTER
            </div>
          </div>

          <AnimatePresence mode="wait">
            <SectionWrapper key={activeSection} id={activeSection}>
              {renderSection()}
            </SectionWrapper>
          </AnimatePresence>

          <StarNav 
            activeSection={activeSection} 
            onSelect={handleSectionChange} 
          />

          {/* Frame border decor */}
          <div className="fixed inset-0 pointer-events-none border-[1px] border-white/5 z-30" />
          <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1px] h-8 bg-white/20 z-30" />
          <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-8 bg-white/20 z-30" />
        </>
      )}
    </main>
  );
};

export default App;
