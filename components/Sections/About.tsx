import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import gagaCyber from "../assets/images/gaga-cyber.png";
import gagaAvant from "../assets/images/gaga-avant.png";
import gagaHolo from "../assets/images/gaga-holo.png";

const GAGA_LOOKS = [
  gagaCyber,
  gagaAvant,
  gagaHolo,
  gagaCyber,
  gagaAvant,
  gagaHolo,
];

const RevolverCarousel: React.FC = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev - 60); // 360 / 6 images = 60 degrees
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full aspect-[3/4] flex items-center justify-center perspective-[1500px]">
      <motion.div
        animate={{ rotateY: rotation }}
        transition={{ duration: 1.2, ease: [0.45, 0.05, 0.55, 0.95] }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-full h-full"
      >
        {GAGA_LOOKS.map((src, idx) => (
          <div
            key={idx}
            className="absolute inset-0 w-full h-full border border-white/10 rounded-lg overflow-hidden backface-hidden bg-black"
            style={{
              transform: `rotateY(${idx * 60}deg) translateZ(280px)`,
            }}
          >
            <img
              src={src}
              alt={`Gaga Look ${idx}`}
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute top-4 right-4 text-[8px] font-syncopate text-white/40 tracking-widest">
              CHAMBER_0{idx + 1}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Decorative center ring */}
      <div className="absolute w-24 h-24 border-2 border-white/5 rounded-full blur-xl pointer-events-none" />
    </div>
  );
};

const About: React.FC = () => {
  const itemVariants = {
    hidden: { opacity: 0, x: -30, filter: "blur(5px)" },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <motion.div variants={itemVariants} className="w-full">
        <RevolverCarousel />
      </motion.div>

      <div className="space-y-8">
        <motion.div variants={itemVariants}>
          <h4 className="text-[#C0C0C0] font-syncopate text-[10px] tracking-[0.5em] mb-4 uppercase">
            The Iconography
          </h4>
          <h2 className="text-4xl md:text-6xl font-syncopate font-black leading-tight tracking-tighter">
            MOTHER <br /> MONSTER
          </h2>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg text-white/70 leading-relaxed font-light"
        >
          Stefani Joanne Angelina Germanotta is not just a performer; she is a
          global phenomenon. Through avant-garde fashion and sonic innovation,
          she has rewritten the rules of pop stardom while championing the
          "Little Monsters" worldwide.
        </motion.p>

        <div className="grid grid-cols-2 gap-6 pt-4">
          <motion.div
            variants={itemVariants}
            className="border border-white/10 p-5 rounded-lg bg-white/5 hover:border-[#C0C0C0]/40 transition-all group backdrop-blur-md"
          >
            <p className="text-[9px] font-syncopate text-[#C0C0C0] mb-2 group-hover:text-white transition-colors uppercase tracking-widest">
              AWARDS
            </p>
            <p className="text-2xl font-black font-syncopate">13 GRAMMYS</p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="border border-white/10 p-5 rounded-lg bg-white/5 hover:border-[#C0C0C0]/40 transition-all group backdrop-blur-md"
          >
            <p className="text-[9px] font-syncopate text-[#C0C0C0] mb-2 group-hover:text-white transition-colors uppercase tracking-widest">
              ESTABLISHED
            </p>
            <p className="text-2xl font-black font-syncopate">NYC '08</p>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="pt-6">
          <div className="flex items-center gap-4 text-white/30 font-syncopate text-[8px] tracking-[0.8em] uppercase">
            <span>Identity</span>
            <div className="h-[1px] flex-grow bg-white/10" />
            <span>Legacy</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
