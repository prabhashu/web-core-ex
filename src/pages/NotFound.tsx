import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Search } from 'lucide-react';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <>
      <SEO title="404 - Page Not Found | Web Core EX" description="The page you are looking for does not exist." />
      
      <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 -z-10"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px]"></div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="glass-card p-12 rounded-3xl text-center max-w-2xl w-full border border-white/10"
        >
          <motion.div 
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="text-9xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent mb-4"
          >
            404
          </motion.div>
          
          <h2 className="text-3xl font-bold text-white mb-4">Page Not Found</h2>
          <p className="text-white/60 mb-8 text-lg">
            Oops! The page you are looking for seems to have drifted into digital space.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25"
              >
                <Home size={20} /> Back to Home
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full glass-card text-white font-semibold flex items-center justify-center gap-2 hover:bg-white/10"
              >
                <Search size={20} /> Contact Support
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
}