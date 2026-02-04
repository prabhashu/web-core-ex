"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

export default function TeamSection() {
  const team = [
    { 
      name: 'Tharindu Nawodha', 
      role: 'Co-Founder & Managing Director', 
      specialty: 'Cyber Security Engineer', 
      description: "As Co-Founder and Managing Director of WebCoreEx, I manage the company's operations, client relations, and strategic growth. I am committed to delivering innovative web development, digital marketing, and design solutions that drive success for our clients.", 
      image: 'Tharindu-Nawodha.jpg',
      linkedin: 'http://linkedin.com/in/nawodha-weerasooriya-ab482718a/' 
    }, 
    { 
      name: 'Prabhashu Samarakkodi', 
      role: 'Co-Founder & Technical Director', 
      specialty: 'Full-Stack Developer', 
      description: 'As Co-Founder and Technical Director, Prabashu leads all development and design projects, ensuring top- quality digital solutions for our clients. Visionary tech lead with 5+ years of experience building scalable platforms for startups. Expert in React, Node.js, and cloud infrastructure.', 
      image: 'Prabhashu.jpg',
      linkedin: 'https://www.linkedin.com/in/prabhashu-samarakkodi/' 
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="mb-12 sm:mb-20">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-center mb-12 sm:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">Meet Our Leadership</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4 sm:mt-6"></div>
        <p className="text-lg text-white/70 mt-4">Visionaries driving the future of Web Core EX</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-8 sm:mb-12 max-w-5x2 mx-auto">
        {team.map((member, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -10 }} 
            className="group relative glass-card p-6 sm:p-8 rounded-2xl text-center"
          >
            {/* Subtle Background Glow on Hover */}
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

            {/* Profile Image with Rotating Tech Ring */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/30 group-hover:border-cyan-400 transition-colors"
              ></motion.div>
              <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-gray-900 shadow-2xl">
                <Image 
                  src={`/team/${member.image}`} 
                  alt={member.name} 
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500" 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-cyan-400 font-semibold mb-2 text-sm sm:text-base">{member.role}</p>
              <p className="text-white/60 text-xs sm:text-sm font-medium uppercase tracking-wider mb-3 sm:mb-4">{member.specialty}</p>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6">{member.description}</p>

              {/* Connect Button */}
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={member.linkedin}
                className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-blue-600/90 hover:bg-blue-500 text-white font-medium text-xs sm:text-sm transition-colors shadow-lg shadow-blue-900/20"
              >
                <Linkedin size={14} /> Connect
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="glass-card p-8 sm:p-12 rounded-2xl text-center hover:bg-white/5 transition-colors"
      >
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Plus 20+ Talented Team Members</h3>
        <p className="text-sm sm:text-base text-white/70 max-w-3xl mx-auto">
          Our extended team includes expert developers, creative designers, strategic marketers, and dedicated project managers—all working together to bring your vision to life.
        </p>
      </motion.div>
    </section>
  );
}
