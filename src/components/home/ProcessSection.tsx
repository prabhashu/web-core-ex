"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Palette, Code as CodeIcon, Rocket } from 'lucide-react';

export default function ProcessSection() {
  const process = [
    { step: '01', title: 'Discovery & Strategy', description: 'We dive deep into your business goals, target audience, and competitive landscape to craft a winning strategy.', icon: Target },
    { step: '02', title: 'Design & Prototype', description: 'Our designers create stunning, user-centric interfaces with interactive prototypes for your feedback.', icon: Palette },
    { step: '03', title: 'Development & Testing', description: 'Expert developers build scalable solutions with rigorous testing to ensure flawless performance.', icon: CodeIcon },
    { step: '04', title: 'Launch & Growth', description: 'We launch your product and provide ongoing optimization to drive continuous growth and success.', icon: Rocket }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    visible: { transition: { staggerChildren: 0.15 } }
  };

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">Our Proven Process</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4 sm:mt-6"></div>
        </div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {process.map((phase, index) => (
            <motion.div key={index} variants={fadeInUp} className="glass-card p-6 sm:p-8 rounded-2xl hover:scale-105 transition-all duration-300 relative">
              <div className="text-5xl sm:text-6xl font-bold text-white/10 absolute top-4 right-4">{phase.step}</div>
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mb-4 sm:mb-6"><phase.icon size={28} className="sm:w-8 sm:h-8 text-white" /></div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">{phase.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed">{phase.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
