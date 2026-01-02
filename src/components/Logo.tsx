import { useEffect, useState } from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const Logo = ({ className = "", size = "md" }: LogoProps) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // End animation state after completion
    const timer = setTimeout(() => setIsAnimating(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  const sizeClasses = {
    sm: "h-5",
    md: "h-6",
    lg: "h-8",
  };

  const textSizes = {
    sm: "text-base",
    md: "text-lg",
    lg: "text-xl",
  };

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Animated Icon Mark */}
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${sizeClasses[size]} w-auto`}
        aria-hidden="true"
      >
        {/* Outer hexagonal frame - static */}
        <path
          d="M16 2L28 9V23L16 30L4 23V9L16 2Z"
          strokeWidth="1.5"
          fill="none"
          style={{
            stroke: isAnimating ? "#000000" : "#ffffff",
            transition: "stroke 1.4s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
        
        {/* Inner rotating group - lines and center node */}
        <g
          style={{
            transform: isAnimating ? "rotate(0deg)" : "rotate(360deg)",
            transformOrigin: "16px 16px",
            transition: "transform 1.4s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {/* Center node */}
          <circle
            cx="16"
            cy="16"
            r="2.5"
            style={{
              fill: isAnimating ? "#000000" : "#ffffff",
              transition: "fill 1.4s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          />
          
          {/* Top line */}
          <line
            x1="16"
            y1="13.5"
            x2="16"
            y2="5.5"
            strokeWidth="1.5"
            style={{
              stroke: isAnimating ? "#000000" : "#ffffff",
              transition: "stroke 1.4s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          />
          
          {/* Bottom-right line */}
          <line
            x1="18.2"
            y1="17.8"
            x2="24.5"
            y2="21.5"
            strokeWidth="1.5"
            style={{
              stroke: isAnimating ? "#000000" : "#ffffff",
              transition: "stroke 1.4s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          />
          
          {/* Bottom-left line */}
          <line
            x1="13.8"
            y1="17.8"
            x2="7.5"
            y2="21.5"
            strokeWidth="1.5"
            style={{
              stroke: isAnimating ? "#000000" : "#ffffff",
              transition: "stroke 1.4s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          />
        </g>
      </svg>

      {/* Wordmark */}
      <span
        className={`font-semibold tracking-tight ${textSizes[size]}`}
        style={{
          opacity: isAnimating ? 0 : 1,
          transform: isAnimating ? "translateX(-6px)" : "translateX(0)",
          transition: "opacity 400ms ease-out 1s, transform 400ms ease-out 1s",
        }}
      >
        <span className="font-bold text-foreground">Ovelon</span>
        <span className="font-normal text-muted-foreground ml-1">Prime</span>
      </span>
    </div>
  );
};
