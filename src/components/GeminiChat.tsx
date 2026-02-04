"use client";

import React, { useState, useRef, useEffect, KeyboardEvent, ChangeEvent } from 'react';
import { MessageSquare, X, Send, Loader2, Bot, Sparkles, Trash2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface Message {
  text: string;
  sender: 'user' | 'ai';
}

const GeminiChat: React.FC = () => {
  // 1. Load history from LocalStorage if it exists
  const [messages, setMessages] = useState<Message[]>(() => {
    const saved = localStorage.getItem('chat_history');
    return saved ? JSON.parse(saved) : [
      { text: "Hi there! 👋 I'm the Web Core EX Assistant. How can I help launch your startup today?", sender: "ai" }
    ];
  });

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [input, setInput] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [hasOpenedAuto, setHasOpenedAuto] = useState<boolean>(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // 2. Save messages to LocalStorage whenever they change
  useEffect(() => {
    localStorage.setItem('chat_history', JSON.stringify(messages));
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // 3. Auto-Open after 5 seconds (Only once per session)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen && !hasOpenedAuto && messages.length === 1) {
        setIsOpen(true);
        setHasOpenedAuto(true);
        // Optional: Play a soft 'pop' sound here if you want
      }
    }, 5000); // 5000ms = 5 seconds
    return () => clearTimeout(timer);
  }, [isOpen, hasOpenedAuto, messages.length]);

  const clearChat = () => {
    const initialMsg: Message[] = [{ text: "Chat cleared. How can I help?", sender: "ai" }];
    setMessages(initialMsg);
    localStorage.removeItem('chat_history');
  };

  const sendMessage = async (textToSend: string) => {
    if (!textToSend.trim()) return;

    setMessages(prev => [...prev, { text: textToSend, sender: "user" }]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: textToSend }),
      });

      const data = await response.json();
      setMessages(prev => [...prev, { text: data.reply, sender: "ai" }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages(prev => [...prev, { text: "I'm having trouble connecting. Please email us at hello@webcoreex.com", sender: "ai" }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') sendMessage(input);
  };

  return (
    <>
      {/* TOGGLE BUTTON */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-cyan-500/50"
        >
          <div className="relative">
            <MessageSquare size={28} />
            {/* Red Notification Dot */}
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
          </div>
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-medium text-sm">
            Start Chat
          </span>
        </button>
      )}

      {/* CHAT WINDOW */}
      {isOpen && (
        <div className="w-[90vw] sm:w-[380px] h-[550px] max-h-[80vh] bg-gray-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-[fadeIn_0.3s_ease-out] font-sans">
          
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-cyan-900/80 to-blue-900/80 border-b border-white/10 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/10 rounded-lg relative">
                <Bot size={24} className="text-cyan-400" />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-gray-900 rounded-full"></div>
              </div>
              <div>
                <h3 className="text-white font-bold text-base">Web Core AI</h3>
                <p className="text-cyan-200/60 text-xs flex items-center gap-1">
                  <Sparkles size={10} /> Always active
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={clearChat}
                title="Clear Chat"
                className="text-white/50 hover:text-red-400 transition-colors p-2 hover:bg-white/10 rounded-full"
              >
                <Trash2 size={18} />
              </button>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/50 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-700">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-br-none'
                      : 'bg-white/10 text-gray-100 border border-white/5 rounded-bl-none'
                  }`}
                >
                  <div className="text-sm leading-relaxed">
                    <ReactMarkdown
                      components={{
                        p: ({node, ...props}: any) => <p className="mb-2 last:mb-0" {...props} />,
                        ul: ({node, ...props}: any) => <ul className="list-disc list-inside mb-2 space-y-1" {...props} />,
                        ol: ({node, ...props}: any) => <ol className="list-decimal list-inside mb-2 space-y-1" {...props} />,
                        li: ({node, ...props}: any) => <li className="ml-2" {...props} />,
                        strong: ({node, ...props}: any) => <span className="font-bold text-white" {...props} />,
                        a: ({node, ...props}: any) => <a className="underline hover:text-cyan-300 transition-colors" target="_blank" rel="noopener noreferrer" {...props} />,
                      }}
                    >
                      {msg.text}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>
            ))}
            
            {loading && (
              <div className="flex justify-start animate-pulse">
                <div className="bg-white/5 p-3 rounded-2xl rounded-bl-none flex items-center gap-2 border border-white/5">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions Chips */}
          <div className="px-4 pb-2 flex gap-2 overflow-x-auto scrollbar-none mask-linear-fade">
             {["Services", "Pricing", "About Us", "Contact"].map((q, i) => (
              <button
                key={i}
                onClick={() => sendMessage(q)}
                className="whitespace-nowrap px-3 py-1.5 bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/50 rounded-full text-xs text-cyan-100 transition-colors flex-shrink-0"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-white/10 bg-gray-900/50">
            <div className="flex gap-2 relative">
              <input
                type="text"
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-4 pr-12 py-3.5 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent text-sm transition-all"
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={loading}
              />
              <button
                onClick={() => sendMessage(input)}
                disabled={loading || !input.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 disabled:opacity-50 disabled:shadow-none transition-all"
              >
                {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GeminiChat;