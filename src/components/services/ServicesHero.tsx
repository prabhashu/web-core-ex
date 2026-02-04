"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function ServicesHero() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className="text-center mb-12 sm:mb-16 pt-20 sm:pt-24"
    >
      <div className="inline-block px-4 sm:px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
          Our Services
      </div>
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6 px-4">
        Comprehensive Digital Solutions
      </h1>
      <p className="text-base sm:text-xl text-white/80 max-w-3xl mx-auto px-4 mb-8">
        Everything your startup needs to launch, grow, and scale in one place
      </p>
    </motion.div>
  );
}
