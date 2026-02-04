import { Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

export const faqs = [
    { question: 'What is your typical response time?', answer: 'We respond to all inquiries within 24 hours during business days, often much sooner.' },
    { question: 'Do you offer free consultations?', answer: 'Yes! We offer a free 30-minute consultation to discuss your project and provide initial recommendations.' },
    { question: 'What payment methods do you accept?', answer: 'We accept bank transfers, PayPal, Payoneer and major credit cards. Payment terms are flexible based on project scope.' },
    { question: 'Can we start with a small project first?', answer: 'Absolutely! We recommend starting with a pilot project to build trust and demonstrate value before committing to larger engagements.' }
];

export const officeHours = [
    { region: 'USA (EST)', hours: '9 AM - 6 PM', available: true, active: true },
    { region: 'UK (GMT)', hours: '9 AM - 6 PM', available: true, active: true },
    { region: 'Europe (CET)', hours: '9 AM - 6 PM', available: true, active: true },
    { region: 'Sri Lanka (IST)', hours: '24/7', available: true, active: true }
];

export const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, color: 'text-blue-400', link: 'https://www.linkedin.com/company/web-core-ex' },
    { name: 'Twitter', icon: Twitter, color: 'text-sky-400', link: '#' },
    { name: 'Facebook', icon: Facebook, color: 'text-blue-600', link: 'https://facebook.com/webcoreex' },
    { name: 'Instagram', icon: Instagram, color: 'text-pink-500', link: 'https://www.instagram.com/webcoreex/' }
    // TikTok handled separately due to custom icon
];
