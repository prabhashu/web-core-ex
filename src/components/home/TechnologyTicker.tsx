"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDocker, FaAws } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb } from 'react-icons/si';

export default function TechnologyTicker() {
  // --- Technologies with Official Logos & Colors ---
  const technologies = [
    { name: 'React', icon: FaReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'AWS', icon: FaAws, color: '#FF9900' },
    { name: 'Docker', icon: FaDocker, color: '#2496ED' },
  ];

  // Duplicate array for seamless loop
  const duplicatedTechnologies = [...technologies, ...technologies];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">Cutting-Edge Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4 sm:mt-6"></div>
          <p className="text-lg sm:text-xl text-white/70 mt-4">
            We use the modern, battle-tested stack that powers the world's best startups.
          </p>
        </motion.div>

        {/* Infinite Scroll Container */}
        <div className="relative w-full overflow-hidden mask-linear-fade py-4">
          <motion.div
            className="flex gap-6 sm:gap-8 w-max"
            animate={{
              x: ["0%", "-50%"], // Move exactly half the width (seamless loop)
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
            {duplicatedTechnologies.map((tech, index) => (
              <div
                key={index}
                className="glass-card p-6 sm:p-8 rounded-2xl flex flex-col items-center justify-center gap-4 w-32 sm:w-40 h-32 sm:h-40 hover:scale-110 transition-all duration-300 hover:bg-white/10"
              >
                <tech.icon size={48} color={tech.color} className="sm:w-14 sm:h-14 filter drop-shadow-lg" />
                <span className="text-white font-semibold text-sm sm:text-base whitespace-nowrap">{tech.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
