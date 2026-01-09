import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import { X } from "lucide-react";
import { useMemo } from "react";

/* Video assets per language */
import introEN from "@/assets/intro-en.mp4";
import introDE from "@/assets/intro-de.mp4";
import introFR from "@/assets/intro-fr.mp4";
import introES from "@/assets/intro-es.mp4";
import introIT from "@/assets/intro-it.mp4";
import introPT from "@/assets/intro-pt.mp4";

const INTRO_VIDEOS: Record<string, string> = {
  en: introEN,
  de: introDE,
  nl: introDE,
  fr: introFR,
  es: introES,
  it: introIT,
  pt: introPT,
};

const resolveLang = (lng: string) => {
  const base = lng.split("-")[0];
  return INTRO_VIDEOS[base] ? base : "en";
};

interface SubmissionVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SubmissionVideoModal = ({
  isOpen,
  onClose,
}: SubmissionVideoModalProps) => {
  const { t, i18n } = useTranslation();
  
  const lang = resolveLang(i18n.language);
  const videoSrc = useMemo(() => INTRO_VIDEOS[lang], [lang]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-4xl animate-scale-in">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20"
          aria-label={t("simulator.close")}
        >
          <X className="w-6 h-6 text-white" />
        </button>

        {/* Video container */}
        <div className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
          <video
            src={videoSrc}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            controls
            playsInline
          />
        </div>
      </div>
    </div>,
    document.body
  );
};

export default SubmissionVideoModal;
