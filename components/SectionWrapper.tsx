
import React from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, id }) => {
  // Container variants for staggered entrance
  const containerVariants = {
    hidden: { 
      opacity: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
        staggerDirection: -1
      }
    },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.15
      }
    },
    exit: {
      opacity: 0,
      filter: 'blur(10px)',
      transition: { 
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      key={id}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="h-screen w-full flex flex-col justify-center items-center px-6 md:px-24 overflow-hidden relative"
    >
      {children}
    </motion.div>
  );
};

export default SectionWrapper;
