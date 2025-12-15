import { X } from "lucide-react";
import { useEffect } from "react";
import { createPortal } from "react-dom";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  // ✅ MOBILE-SAFE body lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.position = "";
      document.body.style.width = "";
    }

    return () => {
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

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

        {/* CAL.COM IFRAME */}
        <iframe
          src="https://cal.com/ovelon-prime/introduction-call?embed=true&embed_type=inline&theme=light"
          className="w-full h-[calc(100%-64px)]"
          frameBorder="0"
          allow="camera; microphone"
        />
      </div>
    </div>,
    document.body
  );
};
