import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

export const HeroScrollDown = () => {
  const { t } = useTranslation();

  const handleClick = () => {
    const target = document.getElementById("video-section");
    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Trigger video autoplay
    window.dispatchEvent(new Event("play-hero-video"));
  };

  return (
    <div className="absolute bottom-20 sm:bottom-10 left-1/2 -translate-x-1/2 z-20 pb-safe">
      <button
        type="button"
        onClick={handleClick}
        aria-label={t("explore")}
        className="
          group
          flex flex-col items-center gap-2
          text-black
          focus:outline-none
        "
      >
        {/* RING */}
        <span
          className="
            relative
            inline-flex
            items-center
            justify-center
            w-10 h-10
            sm:w-12 sm:h-12
            rounded-full
            border-2 border-black
            transition-all duration-300
            group-hover:scale-110
          "
        >
          {/* CHEVRON */}
          <ChevronDown
            className="
              w-4 h-4
              sm:w-5 sm:h-5
              text-black
              animate-chevron-down
            "
          />
        </span>

        {/* LABEL */}
        <span
          className="
            text-[10px]
            sm:text-xs
            tracking-widest
            uppercase
            font-medium
            transition-all
            group-hover:font-extrabold
          "
        >
          {t("explore")}
        </span>
      </button>
    </div>
  );
};
