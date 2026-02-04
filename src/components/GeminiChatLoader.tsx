"use client";

import React, { useState, useEffect, Suspense, lazy } from 'react';

// Lazy Load Chat (Critical for Performance)
const GeminiChat = lazy(() => import('./GeminiChat'));

export default function GeminiChatLoader() {
  const [isChatLoaded, setIsChatLoaded] = useState(false);

  useEffect(() => {
    // Wait 4 seconds after page load before loading the chat
    const timer = setTimeout(() => {
      setIsChatLoaded(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  if (!isChatLoaded) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <Suspense fallback={null}>
        <GeminiChat />
      </Suspense>
    </div>
  );
}
