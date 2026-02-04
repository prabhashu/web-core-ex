"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Code as CodeIcon, Palette, TrendingUp, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function ServicesSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">Your Digital Foundation Starts Here</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4 sm:mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="glass-card p-6 sm:p-8 rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mb-4 sm:mb-6"><CodeIcon size={28} className="sm:w-8 sm:h-8 text-white" /></div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Web Development</h3>
            <p className="text-sm sm:text-base text-white/70 mb-4 sm:mb-6">Scalable, secure, and lightning-fast digital solutions.</p>
            <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              <li className="flex items-start gap-2 text-white/80"><CheckCircle size={18} className="text-cyan-400 mt-1" /> Custom MVP Development</li>
              <li className="flex items-start gap-2 text-white/80"><CheckCircle size={18} className="text-cyan-400 mt-1" /> E-commerce Platforms</li>
              <li className="flex items-start gap-2 text-white/80"><CheckCircle size={18} className="text-cyan-400 mt-1" /> SaaS Applications</li>
            </ul>
            <Link href="/services"><div className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300 font-semibold hover:bg-cyan-500/30 transition-all text-center cursor-pointer">Learn More</div></Link>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.1 }} className="glass-card p-6 sm:p-8 rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-4 sm:mb-6"><Palette size={28} className="sm:w-8 sm:h-8 text-white" /></div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Web & Graphic Design</h3>
            <p className="text-sm sm:text-base text-white/70 mb-4 sm:mb-6">Stunning visuals and intuitive user experiences.</p>
            <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              <li className="flex items-start gap-2 text-white/80"><CheckCircle size={18} className="text-purple-400 mt-1" /> UI/UX Design</li>
              <li className="flex items-start gap-2 text-white/80"><CheckCircle size={18} className="text-purple-400 mt-1" /> Brand Identity</li>
              <li className="flex items-start gap-2 text-white/80"><CheckCircle size={18} className="text-purple-400 mt-1" /> Pitch Decks</li>
            </ul>
            <Link href="/services"><div className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 font-semibold hover:bg-purple-500/30 transition-all text-center cursor-pointer">Learn More</div></Link>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.2 }} className="glass-card p-6 sm:p-8 rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 md:col-span-2 lg:col-span-1">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-4 sm:mb-6"><TrendingUp size={28} className="sm:w-8 sm:h-8 text-white" /></div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Social Media Marketing</h3>
            <p className="text-sm sm:text-base text-white/70 mb-4 sm:mb-6">Targeted campaigns that drive real customer acquisition.</p>
            <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              <li className="flex items-start gap-2 text-white/80"><CheckCircle size={18} className="text-blue-400 mt-1" /> Strategy & Content</li>
              <li className="flex items-start gap-2 text-white/80"><CheckCircle size={18} className="text-blue-400 mt-1" /> Paid Ads</li>
              <li className="flex items-start gap-2 text-white/80"><CheckCircle size={18} className="text-blue-400 mt-1" /> Analytics</li>
            </ul>
            <Link href="/services"><div className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300 font-semibold hover:bg-blue-500/30 transition-all text-center cursor-pointer">Learn More</div></Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
