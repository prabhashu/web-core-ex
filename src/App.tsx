import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScrollReset from './components/ScrollReset';
import { Loader2 } from 'lucide-react';

// Import Cookie Consent & New Year Popup
import CookieConsent from './components/CookieConsent';
import NewYearPopup from './components/NewYearPopup'; // <--- 1. NEW IMPORT

// Lazy Load Pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Contact = lazy(() => import('./pages/Contact'));
const Privacy = lazy(() => import('./pages/Privacy'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Lazy Load Chat (Critical for Performance)
const GeminiChat = lazy(() => import('./components/GeminiChat'));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-900">
    <Loader2 className="w-10 h-10 text-cyan-500 animate-spin" />
  </div>
);

export default function App() {
  // State to delay the chat widget
  const [isChatLoaded, setIsChatLoaded] = useState(false);

  useEffect(() => {
    // Wait 4 seconds after page load before loading the chat
    const timer = setTimeout(() => {
      setIsChatLoaded(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative">

      <BrowserRouter>
      

        {/* PLACE IT HERE (Inside Router) */}
        

        <ScrollReset />
        <ScrollToTop />
        <Navbar />

        {/* Cookie Consent */}
        <CookieConsent />

        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>

        <Footer />

        {/* Only load chat after 4 seconds */}
        {isChatLoaded && (
          <div className="fixed bottom-5 right-5 z-50">
            <Suspense fallback={null}>
              <GeminiChat />
            </Suspense>
          </div>
        )}

      </BrowserRouter>
    </div>
  );
}