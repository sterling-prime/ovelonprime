import { useTranslation } from "react-i18next";

export const BackToTop = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex justify-center py-8">
      <button
        type="button"
        onClick={scrollToTop}
        aria-label={t("backToTop")}
        className="group flex flex-col items-center gap-1 focus:outline-none"
      >
        <div className="relative">
          {/* Pulse rings */}
          <span className="absolute inset-0 rounded-full bg-foreground/10 animate-[ping_2s_ease-in-out_infinite]" />
          <span className="absolute inset-0 rounded-full bg-foreground/5 animate-[ping_2s_ease-in-out_infinite_0.5s]" />

          {/* Main button - mouse shape pointing up */}
          <span className="relative inline-flex items-center justify-center w-6 h-10 md:w-7 md:h-11 rounded-full bg-foreground/15 backdrop-blur-sm border border-foreground/30 shadow-lg transition-all duration-500 ease-out group-hover:scale-105 group-hover:bg-foreground/20 group-hover:border-foreground/40">
            {/* Inner highlight */}
            <span className="absolute inset-1 rounded-full bg-gradient-to-b from-foreground/15 to-transparent" />

            {/* Animated dot - simulates mouse scroll wheel going up */}
            <span className="relative flex items-center justify-center w-full h-full">
              <span className="absolute bottom-2.5 w-1 h-1 bg-foreground/50 rounded-full animate-scroll-up-dot" />
            </span>
          </span>
        </div>

        {/* Label */}
        <span className="text-[9px] md:text-[10px] tracking-widest uppercase font-medium text-foreground/50 transition-all duration-300 group-hover:tracking-wider group-hover:text-foreground/70">
          {t("backToTop")}
        </span>
      </button>

      {/* Keyframes */}
      <style>{`
        @keyframes scroll-up-dot {
          0% { 
            transform: translateY(0); 
            opacity: 0;
          }
          50% { 
            opacity: 1;
          }
          100% { 
            transform: translateY(-6px); 
            opacity: 0;
          }
        }

        .animate-scroll-up-dot { 
          animation: scroll-up-dot 2s ease-in-out infinite; 
        }
      `}</style>
    </div>
  );
};
