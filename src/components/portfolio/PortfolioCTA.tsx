"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PortfolioCTA() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section>
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="glass-card p-12 md:p-16 rounded-3xl text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Be Our Next Success Story?
        </h2>
        <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-3xl mx-auto">
          Let's discuss how we can help you achieve similar results for your startup
        </p>
        <Link href="/contact" className="inline-block">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all cursor-pointer"
          >
            Start Your Project
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}
