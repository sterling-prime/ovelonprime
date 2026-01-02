import { useEffect, useState } from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const Logo = ({ className = "", size = "md" }: LogoProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    const timer = setTimeout(() => setIsLoaded(true), 50);
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
    <div
      className={`flex items-center gap-2.5 ${className}`}
      style={{
        opacity: isLoaded ? 1 : 0,
        transform: isLoaded ? "translateY(0)" : "translateY(4px)",
        transition: "opacity 400ms ease-out, transform 400ms ease-out",
      }}
    >
      {/* Abstract Icon Mark */}
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${sizeClasses[size]} w-auto`}
        aria-hidden="true"
      >
        {/* Outer hexagonal frame - represents system architecture */}
        <path
          d="M16 2L28 9V23L16 30L4 23V9L16 2Z"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          className="text-foreground"
          style={{
            strokeDasharray: isLoaded ? "0" : "100",
            strokeDashoffset: isLoaded ? "0" : "100",
            transition: "stroke-dasharray 500ms ease-out 100ms, stroke-dashoffset 500ms ease-out 100ms",
          }}
        />
        
        {/* Inner node network - represents operational connectivity */}
        <circle
          cx="16"
          cy="16"
          r="3"
          fill="currentColor"
          className="text-foreground"
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? "scale(1)" : "scale(0.5)",
            transformOrigin: "center",
            transition: "opacity 300ms ease-out 300ms, transform 300ms ease-out 300ms",
          }}
        />
        
        {/* Connecting lines from center to vertices */}
        <line
          x1="16"
          y1="13"
          x2="16"
          y2="5"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-foreground"
          style={{
            opacity: isLoaded ? 0.6 : 0,
            transition: "opacity 300ms ease-out 400ms",
          }}
        />
        <line
          x1="18.6"
          y1="17.5"
          x2="24"
          y2="21"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-foreground"
          style={{
            opacity: isLoaded ? 0.6 : 0,
            transition: "opacity 300ms ease-out 450ms",
          }}
        />
        <line
          x1="13.4"
          y1="17.5"
          x2="8"
          y2="21"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-foreground"
          style={{
            opacity: isLoaded ? 0.6 : 0,
            transition: "opacity 300ms ease-out 500ms",
          }}
        />
      </svg>

      {/* Wordmark */}
      <span
        className={`font-semibold tracking-tight text-foreground ${textSizes[size]}`}
        style={{
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? "translateX(0)" : "translateX(-8px)",
          transition: "opacity 350ms ease-out 200ms, transform 350ms ease-out 200ms",
        }}
      >
        <span className="font-bold">Ovelon</span>
        <span className="font-normal text-muted-foreground ml-1">Prime</span>
      </span>
    </div>
  );
};
