"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { industries } from './portfolioData';

export default function IndustriesSection() {
  const duplicatedIndustries = [...industries, ...industries];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="mb-24 overflow-hidden">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Industries We Serve
        </h2>
        <p className="text-base sm:text-xl text-white/70">
          Expertise across diverse sectors
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-6"></div>
      </motion.div>

      {/* Infinite Sliding Carousel */}
      <div className="relative w-full overflow-hidden mask-linear-fade py-4">
        <motion.div
          className="flex gap-6 w-max"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30, 
              ease: "linear",
            },
          }}
        >
          {duplicatedIndustries.map((industry, index) => (
            <div key={index} className="glass-card p-6 rounded-2xl w-48 sm:w-64 flex flex-col items-center justify-center text-center hover:bg-white/10 transition-colors">
              <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${industry.color} flex items-center justify-center mb-4 shadow-lg`}>
                <industry.icon size={28} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">
                {industry.name}
              </h3>
              <p className="text-white/60 text-sm">
                {industry.count}+ Projects
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
