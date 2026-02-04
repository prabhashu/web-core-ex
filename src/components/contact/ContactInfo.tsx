"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import { officeHours, socialLinks } from './contactData';

// --- Custom TikTok Icon ---
const TiktokIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function ContactInfo() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="space-y-8"
    >
        
        {/* Contact Information */}
        <motion.div variants={fadeInUp} className="glass-card p-8 rounded-3xl border border-white/10">
        <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
        <div className="space-y-6">
            <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                <MapPin size={24} className="text-white" />
            </div>
            <div>
                <h3 className="text-white font-semibold mb-1 text-lg">Headquarters</h3>
                <p className="text-white/70">Colombo, Sri Lanka</p>
                <p className="text-white/40 text-sm mt-1">Global operations • Serving 25+ countries</p>
            </div>
            </div>

            <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                <Mail size={24} className="text-white" />
            </div>
            <div>
                <h3 className="text-white font-semibold mb-1 text-lg">Email</h3>
                <p className="text-white/70 mb-1">info@webcoreex.com</p>
                <p className="text-white/40 text-sm mt-1">We reply within 24 hours</p>
            </div>
            </div>

            <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                <Phone size={24} className="text-white" />
            </div>
            <div>
                <h3 className="text-white font-semibold mb-1 text-lg">Phone</h3>
                <p className="text-white/70 mb-1">+94 72 872 5881 (Sri Lanka)</p>
                <p className="text-white/70">+94 77 589 6396 (Sri Lanka)</p>
                <p className="text-white/40 text-sm mt-1">Available 24/7 for urgent matters</p>
            </div>
            </div>
        </div>
        </motion.div>

        {/* Office Hours */}
        <motion.div variants={fadeInUp} className="glass-card p-8 rounded-3xl border border-white/10">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Clock size={28} className="text-cyan-400" /> Office Hours
        </h3>
        <div className="space-y-4">
            {officeHours.map((office, index) => (
            <motion.div 
                key={index} 
                whileHover={{ x: 5 }}
                className="flex justify-between items-center glass-card p-4 rounded-xl border border-white/5"
            >
                <div>
                <div className="text-white font-semibold">{office.region}</div>
                <div className="text-white/60 text-sm">{office.hours}</div>
                </div>
                <div className="flex items-center gap-2">
                {/* Animated Pulse for EVERYONE now */}
                <div className={`w-2 h-2 rounded-full ${office.active ? 'bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)]' : 'bg-green-400/50'}`}></div>
                <span className={`${office.active ? 'text-green-400 font-bold' : 'text-green-400/70'} text-sm`}>Available</span>
                </div>
            </motion.div>
            ))}
        </div>
        </motion.div>

        {/* Social Media */}
        <motion.div variants={fadeInUp} className="glass-card p-8 rounded-3xl border border-white/10">
        <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>
        <div className="grid grid-cols-2 gap-4">
            {socialLinks.map((social, idx) => (
            <motion.a 
                key={idx}
                href={social.link} 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                className="glass-card p-4 rounded-xl flex items-center gap-3 cursor-pointer"
            >
                <social.icon size={24} className={social.color} />
                <span className="text-white">{social.name}</span>
            </motion.a>
            ))}
             <motion.a 
                href="https://www.tiktok.com/@webcoreex" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                className="glass-card p-4 rounded-xl flex items-center gap-3 cursor-pointer"
            >
                <TiktokIcon size={24} className="text-cyan-400" />
                <span className="text-white">TikTok</span>
            </motion.a>
        </div>
        </motion.div>

    </motion.div>
  );
}
