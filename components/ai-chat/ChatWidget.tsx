"use client";

import { useState, useEffect, useRef } from "react";
import ChatWindow from "./ChatWindow";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);
  const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([
    {
      role: "assistant",
      content: "Hi! I'm here to help with your commercial apartment repair needs. Are you facing a bank-mandated inspection deadline?",
    },
  ]);

  useEffect(() => {
    // Auto-open after 30 seconds of engagement
    const timer = setTimeout(() => {
      if (!hasAutoOpened && !isOpen) {
        setIsOpen(true);
        setHasAutoOpened(true);
      }
    }, 30000);

    // Scroll-triggered opening (50% of page)
    const handleScroll = () => {
      if (!hasAutoOpened && !isOpen) {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        if (scrollPercent > 50) {
          setIsOpen(true);
          setHasAutoOpened(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasAutoOpened, isOpen]);

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <ChatWindow
          messages={messages}
          setMessages={setMessages}
          onClose={() => setIsOpen(false)}
        />
      )}

      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-primary-yellow rounded-full shadow-2xl hover:scale-110 transition-transform duration-200 flex items-center justify-center group"
          aria-label="Open chat"
        >
          <svg
            className="w-8 h-8 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>

          {/* Notification Pulse */}
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-red opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-accent-red"></span>
          </span>
        </button>
      )}
    </>
  );
}
