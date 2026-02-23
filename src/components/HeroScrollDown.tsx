import { useTranslation } from "react-i18next";

const isMobile = () =>
  typeof window !== "undefined" &&
  /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

export const HeroScrollDown = () => {
  const { t } = useTranslation();

  const handleClick = () => {
    const target = document.getElementById("video-section");
    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    if (isMobile()) {
      (window as any).__playVideoWithSound?.();
      return;
    }

    window.dispatchEvent(new Event("play-hero-video"));
  };

  return (
    <div className="absolute bottom-2 left-0 right-0 flex justify-center z-10 pb-safe pointer-events-none">
      <button
        type="button"
        onClick={handleClick}
        aria-label={t("explore")}
        className="group flex flex-col items-center gap-1 pointer-events-auto focus:outline-none"
      >
        <div className="relative">
          {/* Pulse rings */}
          <span className="absolute inset-0 rounded-full bg-foreground/10 animate-[ping_2s_ease-in-out_infinite]" />
          <span className="absolute inset-0 rounded-full bg-foreground/5 animate-[ping_2s_ease-in-out_infinite_0.5s]" />

          {/* Main button */}
          <span className="relative inline-flex items-center justify-center w-6 h-10 md:w-7 md:h-11 rounded-full bg-foreground/15 backdrop-blur-sm border border-foreground/30 shadow-lg transition-all duration-500 ease-out group-hover:scale-105 group-hover:bg-foreground/20 group-hover:border-foreground/40">
            {/* Inner highlight */}
            <span className="absolute inset-1 rounded-full bg-gradient-to-b from-foreground/15 to-transparent" />

            {/* Animated dot */}
            <span className="relative flex items-center justify-center w-full h-full">
              <span className="absolute top-2.5 w-1 h-1 bg-foreground/50 rounded-full animate-scroll-dot" />
            </span>
          </span>
        </div>

        {/* Label - more visible grey text */}
        <span className="text-[9px] md:text-[10px] tracking-widest uppercase font-medium text-foreground/50 transition-all duration-300 group-hover:tracking-wider group-hover:text-foreground/70">
          Scroll
        </span>
      </button>

      {/* Keyframes */}
      <style>{`
        @keyframes scroll-dot {
          0% { 
            transform: translateY(0); 
            opacity: 0;
          }
          50% { 
            opacity: 1;
          }
          100% { 
            transform: translateY(6px); 
            opacity: 0;
          }
        }

        .animate-scroll-dot { 
          animation: scroll-dot 2s ease-in-out infinite; 
        }
      `}</style>
    </div>
  );
};