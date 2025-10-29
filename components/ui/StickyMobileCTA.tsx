"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function StickyMobileCTA() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  // Don't show on the quote page itself
  if (pathname === "/get-quote") {
    return null;
  }

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 lg:hidden transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-white border-t-2 border-primary-yellow shadow-lg p-3">
        <div className="container-custom">
          <Link
            href="/get-quote"
            className="btn-primary w-full text-center text-lg font-bold shadow-xl"
          >
            Get Emergency Quote →
          </Link>
        </div>
      </div>
    </div>
  );
}
