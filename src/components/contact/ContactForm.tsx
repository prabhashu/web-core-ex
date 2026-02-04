"use client";

import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    service: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // --- CREDENTIALS ---
    const SERVICE_ID = 'service_05pssxh';
    const TEMPLATE_ID = 'template_zxzmi7u';
    const PUBLIC_KEY = 'ghR_iPhymglFi6R2b';

    if (form.current) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
            setIsSuccess(true);
            setFormData({
              name: '', company: '', email: '', phone: '', country: '', 
              service: '', budget: '', timeline: '', message: ''
            });
            setIsSubmitting(false);
            
            setTimeout(() => setIsSuccess(false), 5000);
        }, (error) => {
            console.log(error.text);
            alert('Failed to send. Please check your connection and try again.');
            setIsSubmitting(false);
        });
    }
  };

  return (
    <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-card p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden"
    >
        {/* Success Overlay */}
        <AnimatePresence>
        {isSuccess && (
            <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gray-900/95 backdrop-blur-md z-50 flex flex-col items-center justify-center text-center p-8"
            >
            <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center mb-6"
            >
                <CheckCircle size={40} className="text-white" />
            </motion.div>
            <h3 className="text-3xl font-bold text-white mb-2">Message Sent!</h3>
            <p className="text-white/70">We will contact you at info@webcoreex.com shortly.</p>
            </motion.div>
        )}
        </AnimatePresence>

        <h2 className="text-3xl font-bold text-white mb-2">Send Us a Message</h2>
        <p className="text-white/70 mb-8">Fill out the form and we'll get back to you within 24 hours</p>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
            <label htmlFor="name" className="block text-white/80 mb-2 text-sm font-medium">Full Name *</label>
            <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all" placeholder="John Doe" />
            </div>
            <div>
            <label htmlFor="company" className="block text-white/80 mb-2 text-sm font-medium">Company Name *</label>
            <input type="text" id="company" name="company" required value={formData.company} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all" placeholder="Your Company" />
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
            <label htmlFor="email" className="block text-white/80 mb-2 text-sm font-medium">Email Address *</label>
            <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all" placeholder="john@company.com" />
            </div>
            <div>
            <label htmlFor="phone" className="block text-white/80 mb-2 text-sm font-medium">Phone Number</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all" placeholder="+1 (555) 000-0000" />
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
            <label htmlFor="country" className="block text-white/80 mb-2 text-sm font-medium">Target Country *</label>
            <select id="country" name="country" required value={formData.country} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all">
                <option value="" className="bg-gray-900">Select a country</option>
                <option value="USA" className="bg-gray-900">USA</option>
                <option value="UK" className="bg-gray-900">UK</option>
                <option value="Canada" className="bg-gray-900">Canada</option>
                <option value="Europe" className="bg-gray-900">Europe</option>
                <option value="Australia" className="bg-gray-900">Australia</option>
                <option value="Other" className="bg-gray-900">Other</option>
            </select>
            </div>
            <div>
            <label htmlFor="service" className="block text-white/80 mb-2 text-sm font-medium">Service Interested In *</label>
            <select id="service" name="service" required value={formData.service} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all">
                <option value="" className="bg-gray-900">Select a service</option>
                <option value="Web Development" className="bg-gray-900">Web Development</option>
                <option value="Social Media Marketing" className="bg-gray-900">Social Media Marketing</option>
                <option value="Design" className="bg-gray-900">Web & Graphic Design</option>
                <option value="All" className="bg-gray-900">All Services</option>
                <option value="Consultation" className="bg-gray-900">Just Consultation</option>
            </select>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
            <label htmlFor="budget" className="block text-white/80 mb-2 text-sm font-medium">Budget Range</label>
            <select id="budget" name="budget" value={formData.budget} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all">
                <option value="" className="bg-gray-900">Select budget range</option>
                <option value="<$1000" className="bg-gray-900">Less than $1,000</option>
                <option value="$1000-$5000" className="bg-gray-900">$1,000 - $5,000</option>
                <option value="$5000-$10000" className="bg-gray-900">$5,000 - $10,000</option>
                <option value=">$10000" className="bg-gray-900">More than $10,000</option>
            </select>
            </div>
            <div>
            <label htmlFor="timeline" className="block text-white/80 mb-2 text-sm font-medium">Project Timeline</label>
            <select id="timeline" name="timeline" value={formData.timeline} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all">
                <option value="" className="bg-gray-900">Select timeline</option>
                <option value="Urgent" className="bg-gray-900">Urgent (1-2 weeks)</option>
                <option value="Soon" className="bg-gray-900">Soon (1 month)</option>
                <option value="Flexible" className="bg-gray-900">Flexible (2-3 months)</option>
                <option value="Planning" className="bg-gray-900">Just Planning</option>
            </select>
            </div>
        </div>

        <div>
            <label htmlFor="message" className="block text-white/80 mb-2 text-sm font-medium">Project Details *</label>
            <textarea id="message" name="message" required value={formData.message} onChange={handleChange} rows={6} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none" placeholder="Tell us about your project, goals, and any specific requirements..." />
        </div>

        <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting} 
            type="submit" 
            className="w-full px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
            {isSubmitting ? (
                <> <Loader2 className="animate-spin" size={20} /> Sending... </>
            ) : (
                <> Send Message <Send size={20} /> </>
            )}
        </motion.button>

        <p className="text-white/40 text-xs text-center">
            By submitting this form, you agree to our privacy policy and terms of service.
        </p>
        </form>
    </motion.div>
  );
}
