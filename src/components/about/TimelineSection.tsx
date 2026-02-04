"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function TimelineSection() {
  const timeline = [
    { year: '2019', title: 'The Beginning', description: 'Founded in Colombo with a vision to bridge the gap between global quality and affordable pricing for startups.' },
    { year: '2020', title: 'First 50 Clients', description: 'Reached our first milestone of 50 happy clients across USA, UK, and Canada during a challenging year.' },
    { year: '2021', title: 'Team Expansion', description: 'Grew our team to 25+ talented designers, developers, and marketers to serve growing demand.' },
    { year: '2022', title: 'Global Recognition', description: 'Featured in top startup publications and won multiple awards for excellence in digital services.' },
    { year: '2023', title: '150+ Success Stories', description: 'Helped over 150 startups launch, scale, and secure funding with our comprehensive digital solutions.' },
    { year: '2024', title: 'Innovation & Growth', description: 'Expanding services with AI integration, advanced analytics, and enterprise-level solutions.' }
  ];

  return (
    <section className="mb-12 sm:mb-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 sm:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">Our Journey</h2>
        <p className="text-base sm:text-xl text-white/70">5 years of growth, innovation, and success</p>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4 sm:mt-6"></div>
      </motion.div>

      {/* Mobile Timeline */}
      <div className="md:hidden relative pl-8">
        <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-500"></div>
        <div className="space-y-8">
          {timeline.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-[1.875rem] top-2 w-5 h-5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 border-4 border-gray-900"></div>
              <div className="glass-card p-6 rounded-2xl">
                <div className="text-2xl font-bold text-cyan-400 mb-2">{item.year}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Desktop Timeline */}
      <div className="hidden md:block relative">
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-500 to-blue-500 origin-top"
        ></motion.div>

        <div className="space-y-12">
          {timeline.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <motion.div 
                  whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.08)" }}
                  className="glass-card p-8 rounded-2xl"
                >
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{item.year}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/70 leading-relaxed">{item.description}</p>
                </motion.div>
              </div>
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 border-4 border-gray-900 z-10 flex-shrink-0 shadow-[0_0_15px_rgba(6,182,212,0.5)]"
              ></motion.div>
              <div className="flex-1"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
