import { useTranslation } from "react-i18next";

const isMobile = () =>
  typeof window !== "undefined" &&
  /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

export const HeroScrollDown = () => {
  const { t } = useTranslation();

  const handleClick = () => {
    const target = document.getElementById("video-section");
    if (!target) return;

    // Scroll first
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // 🔑 MOBILE: play video with sound DIRECTLY (gesture-safe)
    if (isMobile()) {
      (window as any).__playVideoWithSound?.();
      return;
    }

    // 🖥 DESKTOP: dispatch event
    window.dispatchEvent(new Event("play-hero-video"));
  };

  return (
    <div 
      className="
        absolute 
        bottom-6
        sm:bottom-10
        left-0
        right-0
        flex
        justify-center
        z-20 
        pb-safe
        pointer-events-none
      "
    >
      <button
        type="button"
        onClick={handleClick}
        aria-label={t("explore")}
        className="
          group 
          flex flex-col items-center gap-2 sm:gap-3 
          focus:outline-none
          pointer-events-auto
        "
      >
        {/* Outer ring with pulse effect */}
        <div className="relative">
          {/* Pulse rings */}
          <span className="absolute inset-0 rounded-full border border-slate-400/30 animate-[ping_2s_ease-out_infinite]" />
          <span className="absolute inset-0 rounded-full border border-slate-400/20 animate-[ping_2s_ease-out_infinite_0.5s]" />
          
          {/* Main button container */}
          <span
            className="
              relative
              inline-flex
              items-center
              justify-center
              w-12 h-12
              sm:w-14 sm:h-14
              md:w-16 md:h-16
              rounded-full
              bg-white/10
              backdrop-blur-sm
              border border-slate-700/50
              shadow-lg
              transition-all duration-500 ease-out
              group-hover:bg-white/20
              group-hover:border-slate-600
              group-hover:shadow-xl
              group-hover:scale-110
            "
          >
            {/* Inner glow */}
            <span className="absolute inset-2 rounded-full bg-gradient-to-b from-white/10 to-transparent" />
            
            {/* Animated arrow container */}
            <span className="relative flex flex-col items-center justify-center gap-0.5">
              {/* Triple chevron animation */}
              <svg 
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-slate-800"
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* First chevron */}
                <path 
                  d="M6 9L12 15L18 9" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="opacity-40 animate-[scrollArrow1_1.5s_ease-in-out_infinite]"
                />
                {/* Second chevron */}
                <path 
                  d="M6 5L12 11L18 5" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="opacity-70 animate-[scrollArrow2_1.5s_ease-in-out_infinite]"
                />
                {/* Third chevron (main) */}
                <path 
                  d="M6 1L12 7L18 1" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="animate-[scrollArrow3_1.5s_ease-in-out_infinite]"
                />
              </svg>
            </span>
          </span>
        </div>

        {/* Label with reveal animation */}
        <span
          className="
            text-[9px]
            sm:text-[10px]
            md:text-xs
            tracking-[0.2em]
            sm:tracking-[0.25em]
            uppercase
            font-medium
            text-slate-700
            transition-all duration-300
            group-hover:tracking-[0.35em]
            group-hover:text-slate-900
          "
        >
          {t("explore")}
        </span>
      </button>

      {/* Custom keyframes injected via style tag */}
      <style>{`
        @keyframes scrollArrow1 {
          0%, 100% { 
            opacity: 0.3; 
            transform: translateY(0); 
          }
          50% { 
            opacity: 0.6; 
            transform: translateY(4px); 
          }
        }
        @keyframes scrollArrow2 {
          0%, 100% { 
            opacity: 0.5; 
            transform: translateY(0); 
          }
          50% { 
            opacity: 0.8; 
            transform: translateY(4px); 
          }
        }
        @keyframes scrollArrow3 {
          0%, 100% { 
            opacity: 0.8; 
            transform: translateY(0); 
          }
          50% { 
            opacity: 1; 
            transform: translateY(4px); 
          }
        }
      `}</style>
    </div>
  );
};
