"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Zap, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, categories } from './portfolioData';

export default function PortfolioContent() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  // --- Animation Variants ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <>
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10 sm:mb-16 pt-24"
      >
        <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold mb-6">
            Selected Works
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Built for <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Growth</span>
        </h1>
        <p className="text-xl text-white/60 max-w-2xl mx-auto">
          We don't just build websites; we build digital engines that drive revenue.
        </p>
      </motion.div>

      {/* --- FILTER TABS --- */}
      <div className="sticky top-24 z-30 sm:relative sm:top-0 -mx-4 px-4 sm:mx-0 sm:px-0 mb-12">
        <div className="flex overflow-x-auto pb-4 sm:pb-0 sm:flex-wrap sm:justify-center gap-3 no-scrollbar mask-linear-fade">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`
                flex-shrink-0 px-5 py-2 sm:px-6 sm:py-2.5 rounded-full text-sm font-medium transition-all duration-300 border whitespace-nowrap
                ${filter === cat 
                  ? 'bg-white text-gray-900 border-white shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-105' 
                  : 'bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:border-white/20 backdrop-blur-md'
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Real Projects Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
      >
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={index}
              layout
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, scale: 0.9 }}
              className="group relative"
            >
              <div className="h-full glass-card p-1 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col">
                
                {/* --- PROJECT IMAGE HEADER --- */}
                <div className={`h-48 rounded-2xl bg-gradient-to-br ${project.gradient} relative overflow-hidden flex flex-col justify-between group-hover:shadow-lg transition-all`}>
                    
                    <Image 
                      src={project.image} 
                      alt={`${project.title} Website Mockup`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>

                    <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                            <div className="p-2 bg-white/20 backdrop-blur-md rounded-lg text-white">
                                <project.icon size={24} />
                            </div>
                            <a 
                                href={project.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="p-2 bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-colors"
                                title="Visit Live Site"
                            >
                                <ExternalLink size={20} />
                            </a>
                        </div>
                        
                        <div>
                            <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-xs font-medium border border-white/10">
                                {project.category}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/50 text-sm mb-4">Client: {project.client}</p>
                  
                  <p className="text-white/70 text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                       <span key={i} className="text-[10px] px-2 py-1 rounded bg-white/5 text-white/40 border border-white/5 uppercase tracking-wider">
                          {tech}
                       </span>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                     <div className="flex items-center gap-2 text-green-400 text-xs font-bold">
                        <Zap size={14} />
                        <span>{project.results}</span>
                     </div>
                     
                     <a 
                       href={project.url}
                       target="_blank"
                       rel="noopener noreferrer" 
                       className="flex items-center gap-2 text-white text-sm font-semibold group-hover:gap-3 transition-all"
                     >
                        Visit Site <ArrowRight size={16} className="text-cyan-400" />
                     </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
