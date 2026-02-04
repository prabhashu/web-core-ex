"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Award, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import { motion, LazyMotion, domAnimation } from 'framer-motion';
import { FaReact, FaNodeJs } from 'react-icons/fa';

export default function HeroSection() {
  // Floating animation for icons
  const floatingIcon = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <LazyMotion features={domAnimation}>
      <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-20 px-4 overflow-hidden">
          
        {/* 1. BACKGROUND GRID (Fills empty space with texture) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

        {/* 2. GLOWING ORBS (Fills empty space with color) */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl md:blur-[128px] md:animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl md:blur-[128px] md:animate-pulse delay-1000"></div>

        {/* 3. FLOATING ICONS (Fills empty space with motion) */}
        <motion.div variants={floatingIcon} animate="animate" className="absolute top-1/3 left-[10%] text-cyan-400/20 hidden lg:block">
          <FaReact size={120} />
        </motion.div>
        <motion.div variants={floatingIcon} animate="animate" transition={{ delay: 1 }} className="absolute bottom-1/3 right-[10%] text-green-400/20 hidden lg:block">
          <FaNodeJs size={120} />
        </motion.div>

        {/* BACKGROUND IMAGE & OVERLAY */}
        <div className="absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black_85%,transparent)]">
          <Image
            src="/hero-bg.webp"
            alt="Web Core EX Digital Agency Background"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-blue-900/90 to-purple-900/95"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="glass-card p-8 sm:p-12 md:p-16 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden"
          >
            {/* Subtle sheen effect inside card */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>

            <div className="relative z-10">
              <div className="inline-block px-4 sm:px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-semibold mb-6">
                Trusted by 150+ Startups Worldwide
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-white leading-tight tracking-tight">
                Launch Your <br className="md:hidden" />
                <TypeAnimation
                  sequence={[
                    'Vision.', 3000,
                    'Startup.', 3000,
                    'Future.', 3000,
                    'Brand.', 3000,
                  ]}
                  wrapper="span"
                  speed={20}
                  repeat={Infinity}
                  className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
                />
                <br />
                Scale Globally.
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-6 max-w-3xl mx-auto leading-relaxed">
                World-class Web Design & Digital Marketing solutions crafted by a
                Sri Lankan powerhouse, built for global growth.
              </p>

              <p className="text-lg sm:text-xl md:text-2xl text-cyan-400 font-bold mb-8">
                Silicon Valley Quality. Smart Pricing. 24/7 Support.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <Link href="/contact" className="w-full sm:w-auto">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto px-10 py-5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all flex items-center justify-center gap-2"
                  >
                    Start Your Project <ArrowRight size={20} />
                  </motion.div>
                </Link>
                <Link href="/portfolio" className="w-full sm:w-auto">
                  <motion.div
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto px-10 py-5 rounded-full glass-card text-white font-semibold text-lg transition-all flex items-center justify-center gap-2 border border-white/20"
                  >
                    View Our Work <Award size={20} />
                  </motion.div>
                </Link>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 text-white/60 text-sm font-medium">
                <div className="flex items-center justify-center gap-2"><CheckCircle size={18} className="text-green-400" /><span>No Hidden Fees</span></div>
                <div className="flex items-center justify-center gap-2"><CheckCircle size={18} className="text-green-400" /><span>Money-Back Guarantee</span></div>
                <div className="flex items-center justify-center gap-2"><CheckCircle size={18} className="text-green-400" /><span>24/7 Support</span></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </LazyMotion>
  );
}
