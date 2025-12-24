import videoVHS from "./assets/video/video-frame.mp4";
import React from "react";
import { motion } from "framer-motion";

const VHSOverlay: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none">
      {/* Analog Noise Video Layer */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-[0.08] mix-blend-screen grayscale contrast-150"
      >
        <source src={videoVHS} type="video/mp4" />
      </video>

      {/* Scanline Pattern */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          background:
            "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))",
          backgroundSize: "100% 4px, 3px 100%",
        }}
      />

      {/* Subtle Grain and Flicker */}
      <motion.div
        animate={{
          opacity: [0.1, 0.15, 0.1],
          x: [0, 1, -1, 0],
        }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay"
      />

      {/* VHS Vignette */}
      <div className="absolute inset-0 shadow-[inner_0_0_150px_rgba(0,0,0,0.8)] pointer-events-none" />
    </div>
  );
};

export default VHSOverlay;
