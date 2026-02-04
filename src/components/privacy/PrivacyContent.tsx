"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Server, Mail } from 'lucide-react';

export default function PrivacyContent() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial="hidden" animate="visible" variants={fadeInUp}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Privacy Policy</h1>
          <p className="text-white/70 text-lg">Last Updated: December 2025</p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-6"></div>
        </motion.div>

        {/* Content Card */}
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          className="glass-card p-8 sm:p-12 rounded-3xl text-white/80 space-y-12 leading-relaxed"
        >
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Shield className="text-cyan-400" /> 1. Introduction
            </h2>
            <p>
              Welcome to <strong>Web Core EX</strong>. We respect your privacy and are committed to protecting your personal data. 
              This privacy policy will inform you as to how we look after your personal data when you visit our website 
              and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          {/* Data Collection */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Eye className="text-cyan-400" /> 2. Data We Collect
            </h2>
            <p className="mb-4">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:</p>
            <ul className="list-disc pl-6 space-y-2 text-white/70">
              <li><strong>Identity Data:</strong> Includes first name, last name, or similar identifier (via Contact Forms).</li>
              <li><strong>Contact Data:</strong> Includes email address and telephone number.</li>
              <li><strong>Technical Data:</strong> Includes internet protocol (IP) address, browser type and version, time zone setting and location, and operating system (via Google Analytics).</li>
            </ul>
          </section>

          {/* How We Use Data */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Server className="text-cyan-400" /> 3. How We Use Your Data
            </h2>
            <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-white/70">
              <li>To respond to your inquiries regarding our services.</li>
              <li>To provide the services you have requested (Web Development, Marketing, Design).</li>
              <li>To improve our website, products/services, marketing, and customer relationships.</li>
            </ul>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Lock className="text-cyan-400" /> 4. Cookies
            </h2>
            <p>
              We use cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site. You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies.
            </p>
          </section>

          {/* Contact Info */}
          <section className="border-t border-white/10 pt-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Mail className="text-cyan-400" /> 5. Contact Us
            </h2>
            <p className="mb-4">
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
            </p>
            <div className="bg-white/5 p-4 rounded-xl inline-block">
              <p className="text-cyan-400 font-bold">Web Core EX</p>
              <p>Email: <a href="mailto:hello@webcoreex.com" className="hover:text-white transition-colors">info@webcoreex.com</a></p>
              <p>Location: Sri Lanka</p>
            </div>
          </section>

        </motion.div>
      </div>
    </div>
  );
}
