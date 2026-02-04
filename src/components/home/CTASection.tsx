"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto glass-card p-12 rounded-3xl text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Scale Your Startup?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/contact">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-10 py-5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-lg shadow-lg shadow-cyan-500/30 cursor-pointer">Get Started Today</motion.div>
            </Link>
            <Link href="/services">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-10 py-5 rounded-full glass-card text-white font-semibold text-lg cursor-pointer">View Pricing</motion.div>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
