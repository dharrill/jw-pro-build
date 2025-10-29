import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", size = "sm" }: LogoProps) {
  const iconSizes = {
    sm: { width: "w-6", height: "h-6" },
    md: { width: "w-8", height: "h-8" },
    lg: { width: "w-10", height: "h-10" },
  };

  const textSizes = {
    sm: { jw: "text-sm", probuild: "text-lg" },
    md: { jw: "text-base", probuild: "text-xl" },
    lg: { jw: "text-lg", probuild: "text-2xl" },
  };

  const currentSizes = iconSizes[size];
  const currentTextSizes = textSizes[size];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Logo Icon - Small and compact */}
      <div className={`${currentSizes.width} ${currentSizes.height} flex-shrink-0`}>
        <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Bottom layer (gray) - wider base with wider trapezoid */}
          <path
            d="M15 95 L60 45 L105 95 L105 100 L15 100 Z"
            fill="#828282"
          />
          {/* Top layer (golden yellow) - house icon with prominent central peak and two symmetrical side peaks */}
          <path
            d="M25 85 L45 65 L60 75 L75 65 L95 85 L95 92 L25 92 Z"
            fill="#F2C94C"
          />
        </svg>
      </div>

      {/* Text - Compact two-line layout */}
      <div className="flex flex-col leading-none">
        <span className={`${currentTextSizes.jw} font-bold text-black`}>
          JW
        </span>
        <span className={`${currentTextSizes.probuild} font-bold text-black`}>
          ProBuild
        </span>
      </div>
    </div>
  );
}

