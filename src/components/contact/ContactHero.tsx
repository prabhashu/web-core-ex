"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function ContactHero() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className="text-center mb-20 pt-24"
    >
      <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-semibold mb-6">
          Get in Touch
      </div>
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
        Let's Build Something Great
      </h1>
      <p className="text-xl text-white/80 max-w-3xl mx-auto">
        Your next chapter of growth starts here. We're ready to turn your vision into reality.
      </p>
      <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-8"></div>
    </motion.div>
  );
}
