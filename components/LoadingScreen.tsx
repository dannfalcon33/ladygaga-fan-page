import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface LoadingScreenProps {
  onFinished: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onFinished }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onFinished, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 30);
    return () => clearInterval(timer);
  }, [onFinished]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-100 bg-black flex flex-col items-center justify-center"
    >
      <motion.h2
        initial={{ opacity: 0, letterSpacing: "1em" }}
        animate={{ opacity: 1, letterSpacing: "0.4em" }}
        className="text-white font-syncopate text-xl md:text-3xl font-bold mb-12 text-center"
      >
        I'M BORN THIS WAY
      </motion.h2>

      <div className="w-64 md:w-96 h-1 bg-white/10 overflow-hidden relative rounded-full">
        <motion.div
          className="absolute top-0 left-0 h-full bg-linear-to-r from-[#e5e7eb] via-[#9ca3af] to-[#e5e7eb] shadow-[0_0_15px_rgba(255,255,255,0.5)]"
          style={{ width: `${progress}%` }}
          transition={{ type: "spring", stiffness: 50 }}
        />
      </div>

      <div className="mt-4 font-syncopate text-[10px] text-white/40 tracking-[0.5em]">
        LOADING_SYSTEM_{progress}%
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
