import { Home, Scissors, Layout, Zap, Smartphone, DollarSign, ExternalLink, Globe, Award, Users, TrendingUp } from 'lucide-react';

export const projects = [
    {
        title: 'Marina Buy House',
        client: 'Marina Real Estate',
        url: 'https://marina-buy-house.netlify.app/',
        image: '/portfolio/marina-house.webp',
        category: 'Real Estate',
        service: 'Lead Generation Web',
        description: 'A high-converting landing page designed for real estate investors. Focuses on building trust and capturing seller leads efficiently.',
        results: 'High Lead Volume',
        technologies: ['React', 'Forms', 'Tailwind'],
        gradient: 'from-teal-500 to-green-600',
        icon: Home
    },
    {
        title: 'Carrollwood Barbershop',
        client: 'Carrollwood Barbershop',
        url: 'https://carrollwood-barbershop.netlify.app/',
        image: '/portfolio/carrollwood.webp',
        category: 'Service Business',
        service: 'Business Website',
        description: 'A modern, masculine design for a local barbershop featuring service menus, gallery showcases, and location integration.',
        results: 'Increased Walk-ins',
        technologies: ['React', 'Framer Motion', 'SEO'],
        gradient: 'from-slate-600 to-gray-700',
        icon: Scissors
    },

    {
        title: 'Colom Brothers',
        client: 'Colom Brothers',
        url: 'https://colombrothers.netlify.app/',
        image: '/portfolio/colombrothers.webp',
        category: 'Web Design',
        service: 'Corporate Website',
        description: 'A sleek, professional corporate website designed to showcase business services and portfolio items with a focus on user experience and brand identity.',
        results: 'Improved Brand Visibility',
        technologies: ['React', 'Tailwind', 'Responsive Design'],
        gradient: 'from-indigo-500 to-purple-500',
        icon: Layout
    },
    {
        title: 'Brooklyn Pizza (App Version)',
        client: 'Brooklyn Pizza',
        url: 'https://brooklynpizza.netlify.app/',
        image: '/portfolio/brooklyn-app.webp',
        category: 'Web App',
        service: 'Progressive Web App',
        description: 'The app-like version of the main restaurant site, optimized for app-store-like performance on mobile browsers without installation.',
        results: 'Native-App Performance',
        technologies: ['PWA', 'React', 'Service Workers'],
        gradient: 'from-orange-400 to-amber-500',
        icon: Zap
    },
    {
        title: 'Big Plate',
        client: 'Big Plate Concept',
        url: 'https://big-plate.netlify.app/',
        image: '/portfolio/big-plate.webp',
        category: 'Food & Beverage',
        service: 'UI/UX Concept',
        description: 'A modern, minimalist food delivery concept focused on large-scale imagery and intuitive navigation for rapid ordering.',
        results: 'High-Conversion UI',
        technologies: ['React', 'Framer Motion', 'Styled Components'],
        gradient: 'from-red-500 to-rose-500',
        icon: Smartphone
    },
    {
        title: 'Lumire Web',
        client: 'Lumire Agency',
        url: 'https://lumire-web.netlify.app/',
        image: '/portfolio/lumire.webp',
        category: 'Web Design',
        service: 'Portfolio Development',
        description: 'A high-performance modern agency portfolio template featuring dark mode aesthetics, smooth scrolling animations, and glassmorphism UI.',
        results: 'Cutting-edge UX Design',
        technologies: ['React', 'Three.js', 'Tailwind'],
        gradient: 'from-purple-500 to-pink-500',
        icon: Layout
    },

];

export const categories = ['All', 'Food & Beverage', 'Real Estate', 'Service Business', 'Web Design', 'Web App'];

export const industries = [
    { name: 'Fintech', count: 25, icon: DollarSign, color: 'from-cyan-500 to-blue-500' },
    { name: 'E-commerce', count: 35, icon: ExternalLink, color: 'from-purple-500 to-pink-500' },
    { name: 'SaaS', count: 40, icon: Globe, color: 'from-blue-500 to-cyan-500' },
    { name: 'Healthcare', count: 15, icon: Award, color: 'from-green-500 to-emerald-500' },
    { name: 'Education', count: 20, icon: Users, color: 'from-yellow-500 to-orange-500' },
    { name: 'Food & Beverage', count: 15, icon: TrendingUp, color: 'from-red-500 to-pink-500' }
];
