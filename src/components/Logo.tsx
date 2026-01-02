import { useEffect, useState } from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const Logo = ({ className = "", size = "md" }: LogoProps) => {
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    // Rotate and change color every 2 seconds
    const interval = setInterval(() => {
      setCycle((prev) => prev + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const isEvenCycle = cycle % 2 === 0;
  const rotation = cycle * 360;

  const sizeClasses = {
    sm: "h-4",
    md: "h-5",
    lg: "h-6",
  };

  const textSizes = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  const letterSpacing = {
    sm: "tracking-[0.12em]",
    md: "tracking-[0.14em]",
    lg: "tracking-[0.16em]",
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Animated Icon Mark */}
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${sizeClasses[size]} w-auto`}
        aria-hidden="true"
      >
        {/* Outer hexagonal frame - static position, animated color */}
        <path
          d="M16 2L28 9V23L16 30L4 23V9L16 2Z"
          strokeWidth="1.5"
          fill="none"
          style={{
            stroke: isEvenCycle ? "#1a1a1a" : "#ffffff",
            transition: "stroke 1.8s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
        
        {/* Inner rotating group - lines and center node */}
        <g
          style={{
            transform: `rotate(${rotation}deg)`,
            transformOrigin: "16px 16px",
            transition: "transform 1.8s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {/* Center node */}
          <circle
            cx="16"
            cy="16"
            r="2.5"
            style={{
              fill: isEvenCycle ? "#1a1a1a" : "#ffffff",
              transition: "fill 1.8s cubic-bezier(0.4, 0, 0.2, 1)",
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
              stroke: isEvenCycle ? "#1a1a1a" : "#ffffff",
              transition: "stroke 1.8s cubic-bezier(0.4, 0, 0.2, 1)",
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
              stroke: isEvenCycle ? "#1a1a1a" : "#ffffff",
              transition: "stroke 1.8s cubic-bezier(0.4, 0, 0.2, 1)",
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
              stroke: isEvenCycle ? "#1a1a1a" : "#ffffff",
              transition: "stroke 1.8s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          />
        </g>
      </svg>

      {/* Wordmark - Industrial Sans-Serif */}
      <span
        className={`font-semibold uppercase ${textSizes[size]} ${letterSpacing[size]}`}
        style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
      >
        <span 
          className="font-semibold"
          style={{
            color: isEvenCycle ? "#1a1a1a" : "#ffffff",
            transition: "color 1.8s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          OVELON
        </span>
        <span 
          className="font-normal ml-1.5"
          style={{
            color: isEvenCycle ? "#4a4a4a" : "#d0d0d0",
            transition: "color 1.8s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          PRIME
        </span>
      </span>
    </div>
  );
};
