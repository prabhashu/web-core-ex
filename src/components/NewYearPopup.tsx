import { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

const NewYearPopup = () => {
  const { width, height } = useWindowSize();
  const [showPopup, setShowPopup] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // New state for smooth entry transition

  useEffect(() => {
    // DEVELOPMENT MODE: Commented out so you can see it while testing.
    // Uncomment these 2 lines when you publish!
    // const hasSeenPopup = localStorage.getItem('seenNewYear2026');
    // if (hasSeenPopup) return;

    // Delay showing the popup for 1 second
    const timer = setTimeout(() => {
      setShowPopup(true);
      // Small delay to trigger the CSS transition
      setTimeout(() => setIsVisible(true), 50);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
        setShowPopup(false);
        // Uncomment this when you publish so users only see it once
        // localStorage.setItem('seenNewYear2026', 'true');
    }, 300); // Wait for exit animation
  };

  const handleClaimOffer = () => {
    // 1. PHONE NUMBER
    const phoneNumber = "94768052503";
    
    // 2. THE MESSAGE
    const message = "Hi! I saw your New Year 2026 offer on your website. I am interested in getting 20% off a new website.";
    
    // 3. Open WhatsApp in a new tab
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    handleClose();
  };

  if (!showPopup) return null;

  return (
    <>
      {/* Custom Styles for Animations */}
      <style>{`
        @keyframes popIn {
          0% { opacity: 0; transform: scale(0.5) translateY(20px); }
          80% { transform: scale(1.05) translateY(0); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes gradientText {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(200%) skewX(-15deg); }
        }
        .animate-pop-in {
          animation: popIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-gradient-text {
          background-size: 200% auto;
          animation: gradientText 3s linear infinite;
        }
        .btn-shimmer::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 50%;
          height: 100%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent);
          transform: skewX(-15deg);
          animation: shimmer 2.5s infinite;
        }
      `}</style>

      <div 
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${isVisible ? 'bg-black/80 backdrop-blur-sm' : 'bg-black/0 backdrop-blur-none'}`}
      >
        {/* Confetti Animation */}
        <Confetti width={width} height={height} numberOfPieces={300} gravity={0.15} />

        {/* Popup Card */}
        <div 
          className={`relative bg-white dark:bg-slate-900 rounded-2xl p-8 max-w-md w-full text-center shadow-2xl border-2 border-yellow-400 overflow-hidden ${isVisible ? 'animate-pop-in' : 'opacity-0 scale-90'}`}
        >
          
          {/* Close Button */}
          <button 
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 dark:hover:text-white transition hover:rotate-90 duration-300 z-10"
          >
            ✕
          </button>

          {/* Header Content */}
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-bold rounded-full mb-4 animate-pulse border border-yellow-300">
              🎉 HAPPY NEW YEAR
            </span>
            <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 mb-3 animate-gradient-text py-1">
              Welcome 2026!
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Let's build something amazing this year. Launch your startup with our special New Year package.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3">
            <button 
              onClick={handleClaimOffer}
              className="relative w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-lg rounded-xl shadow-lg transform transition hover:scale-[1.02] active:scale-95 btn-shimmer overflow-hidden"
            >
              🚀 Get 20% Off My Website
            </button>
            
            <button 
              onClick={handleClose}
              className="text-sm text-gray-500 hover:text-gray-800 dark:hover:text-gray-300 hover:underline transition-colors"
            >
              No thanks, just browsing
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewYearPopup;