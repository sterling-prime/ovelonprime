import { ChevronUp } from "lucide-react";
import { useTranslation } from "react-i18next";

export const BackToTop = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex justify-center mt-20">
      <button
        type="button"
        onClick={scrollToTop}
        aria-label={t("backToTop")}
        className="group flex items-center gap-2 text-black focus:outline-none"
      >
        <span className="relative inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-black animate-slow-breath">
          <ChevronUp className="w-5 h-5 text-black animate-chevron-up" />
        </span>

        <span className="text-sm tracking-wide">
          {t("backToTop")}
        </span>
      </button>
    </div>
  );
};
