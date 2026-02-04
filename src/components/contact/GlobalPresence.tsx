"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function GlobalPresence() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="mb-24">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="relative rounded-3xl border border-white/10 bg-gray-900/50 backdrop-blur-xl overflow-hidden min-h-auto py-16 lg:min-h-[500px] lg:py-0 flex items-center justify-center"
      >
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-gray-900/90 pointer-events-none"></div>

        <div className="relative z-10 w-full max-w-5xl px-6 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="text-center lg:text-left max-w-lg w-full">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-6 animate-pulse">
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  SYSTEM ONLINE: GLOBAL
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Command Center <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Global Operations</span>
              </h2>
              <p className="text-white/60 text-lg mb-8 leading-relaxed">
                  Operating from our strategic hub in Sri Lanka, we deploy digital solutions to partners across the USA, UK, and Europe with 24/7 efficiency.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-2xl font-bold text-white mb-1">25+</div>
                      <div className="text-xs text-white/40 uppercase tracking-wider">Countries Served</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-2xl font-bold text-white mb-1">24/7</div>
                      <div className="text-xs text-white/40 uppercase tracking-wider">Active Support</div>
                  </div>
              </div>
          </div>

          {/* Animated Orbital Map Visualization - Responsive Scaled */}
          <div className="relative w-full flex justify-center lg:justify-end">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 scale-75 sm:scale-100 flex-shrink-0">
                  {/* Core (Sri Lanka) */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.8)] z-20"></div>
                  
                  {/* Orbital Rings */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                  
                  {/* Orbiting Nodes (Satellites) */}
                  <motion.div 
                      className="absolute top-1/2 left-1/2 w-48 h-48 -ml-24 -mt-24"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                      <div className="absolute top-0 left-1/2 -ml-3 w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-md border border-purple-500/30">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                      </div>
                      <motion.div 
                          className="absolute -top-6 left-1/2 -ml-4 text-[10px] text-purple-300 font-mono"
                          animate={{ rotate: -360 }}
                          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      >
                          USA
                      </motion.div>
                  </motion.div>

                  <motion.div 
                      className="absolute top-1/2 left-1/2 w-72 h-72 -ml-36 -mt-36"
                      animate={{ rotate: -360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  >
                      <div className="absolute bottom-[15%] right-[10%] w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-md border border-blue-500/30">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      </div>
                      <motion.div 
                          className="absolute bottom-[8%] right-[5%] text-[10px] text-blue-300 font-mono"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      >
                          UK/EU
                      </motion.div>
                  </motion.div>
              </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
