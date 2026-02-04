"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, DollarSign, Clock } from 'lucide-react';

export default function AboutSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="glass-card p-8 sm:p-12 md:p-16 rounded-3xl"
        >
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">More Than a Website.<br />A Digital Partner.</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-6 sm:mb-8"></div>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-white/80 text-center max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12">
            Your startup needs more than a website—it needs a digital partner. At Web Core EX, we combine the high standards of Silicon Valley with the agile, cost-effective talent of Sri Lanka.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mx-auto mb-4"><Globe size={32} className="sm:w-10 sm:h-10 text-white" /></div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Global Reach</h3>
              <p className="text-sm sm:text-base text-white/70">Serving startups across 25+ countries with localized expertise.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4"><DollarSign size={32} className="sm:w-10 sm:h-10 text-white" /></div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Smart Pricing</h3>
              <p className="text-sm sm:text-base text-white/70">40-60% cost savings compared to US/UK agencies.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4"><Clock size={32} className="sm:w-10 sm:h-10 text-white" /></div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Rapid Delivery</h3>
              <p className="text-sm sm:text-base text-white/70">Average MVP delivery in 6-8 weeks.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
