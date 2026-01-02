import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  const { i18n } = useTranslation();
  const scrollYRef = useRef(0);

  // Store scroll position when opening, restore when closing
  useEffect(() => {
    if (isOpen) {
      scrollYRef.current = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollYRef.current}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollYRef.current);
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Map i18n language to cal.com locale
  const calLocale = i18n.language === "en" ? "en" : i18n.language;

  return createPortal(
    <div className="fixed inset-0 z-[9999]">
      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
      />

      {/* MODAL */}
      <div
        className="
          fixed
          inset-x-0
          bottom-0
          bg-white
          rounded-t-2xl
          shadow-2xl
          h-[90vh]
          overflow-y-auto

          md:inset-auto
          md:top-1/2
          md:left-1/2
          md:-translate-x-1/2
          md:-translate-y-1/2
          md:w-[95vw]
          md:max-w-6xl
          md:h-[85vh]
          md:rounded-2xl
        "
      >
        {/* HEADER */}
        <div className="relative flex items-center px-6 py-4 border-b border-gray-200">
          <h2 className="absolute left-1/2 -translate-x-1/2 text-lg font-semibold text-gray-900">
            Strategic Consultation
          </h2>

          <button
            onClick={onClose}
            className="ml-auto p-2 rounded-full hover:bg-gray-100 transition"
          >
            <X className="h-5 w-5 text-gray-700" />
          </button>
        </div>

        {/* CAL.COM IFRAME with language */}
        <iframe
          src={`https://cal.com/ovelon-prime/introduction-call?embed=true&embed_type=inline&theme=light&locale=${calLocale}`}
          className="w-full h-[calc(100%-64px)]"
          frameBorder="0"
          allow="camera; microphone"
        />
      </div>
    </div>,
    document.body
  );
};
