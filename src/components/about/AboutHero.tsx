"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function AboutHero() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="mb-12 sm:mb-20 pt-20 sm:pt-24">
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="glass-card p-8 sm:p-12 md:p-16 rounded-3xl text-center"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block px-4 sm:px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-semibold mb-4 sm:mb-6"
        >
            Our Story
        </motion.div>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
          From Colombo to the World Stage
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-6 sm:mb-8"></div>
        <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
          Web Core EX was founded on the principle that world-class digital
          services shouldn't break a startup's budget. Based in Colombo, Sri
          Lanka, we harness a deep pool of technical talent and an inherent
          culture of hard work to deliver projects that compete globally.
        </p>
      </motion.div>
    </section>
  );
}
