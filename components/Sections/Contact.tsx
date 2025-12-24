
import React from 'react';
import { motion } from 'framer-motion';
import { Send, Instagram, Twitter, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5 } 
    }
  };

  const socials = [
    { icon: Instagram, url: 'https://instagram.com/ladygaga', label: 'INSTAGRAM' },
    { icon: Twitter, url: 'https://twitter.com/ladygaga', label: 'TWITTER' },
    { icon: Facebook, url: 'https://facebook.com/ladygaga', label: 'FACEBOOK' },
  ];

  return (
    <div className="max-w-2xl w-full">
      <motion.div variants={itemVariants} className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-syncopate font-bold mb-4">CONNECT</h2>
        <p className="text-white/60 tracking-widest uppercase text-sm">Join the Little Monsters Community</p>
      </motion.div>

      <form className="space-y-6 mb-16" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.input 
            variants={itemVariants}
            type="text" 
            placeholder="NAME" 
            className="w-full bg-white/5 border border-white/10 p-4 font-syncopate text-xs tracking-widest focus:border-[#C0C0C0] outline-none transition-colors"
          />
          <motion.input 
            variants={itemVariants}
            type="email" 
            placeholder="EMAIL" 
            className="w-full bg-white/5 border border-white/10 p-4 font-syncopate text-xs tracking-widest focus:border-[#C0C0C0] outline-none transition-colors"
          />
        </div>
        <motion.textarea 
          variants={itemVariants}
          rows={4} 
          placeholder="YOUR MESSAGE" 
          className="w-full bg-white/5 border border-white/10 p-4 font-syncopate text-xs tracking-widest focus:border-[#C0C0C0] outline-none transition-colors"
        />
        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.02, backgroundColor: '#d1d5db' }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-4 bg-[#C0C0C0] text-black font-syncopate font-bold tracking-widest flex items-center justify-center gap-3 transition-colors"
        >
          SEND MESSAGE <Send size={16} />
        </motion.button>
      </form>

      {/* Social Media Subsection */}
      <motion.div variants={itemVariants} className="pt-8 border-t border-white/10 text-center">
        <h4 className="text-[10px] font-syncopate tracking-[0.4em] text-white/40 mb-8 uppercase">Digital Presence</h4>
        <div className="flex justify-center gap-12">
          {socials.map((social) => (
            <motion.a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: '#C0C0C0' }}
              whileTap={{ scale: 0.9 }}
              className="flex flex-col items-center gap-3 text-white/60 transition-colors group"
            >
              <div className="p-4 border border-white/10 rounded-full group-hover:border-[#C0C0C0]/50 group-hover:bg-white/5 transition-all">
                <social.icon size={24} strokeWidth={1.5} />
              </div>
              <span className="text-[8px] font-syncopate tracking-[0.2em]">{social.label}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
