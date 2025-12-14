import { X } from "lucide-react";
import { useEffect } from "react";
import { createPortal } from "react-dom";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999]">
      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* MODAL */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[95vw]
          max-w-6xl
          h-[85vh]
          bg-white
          rounded-2xl
          shadow-2xl
          overflow-hidden
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
          src="https://cal.com/ovelon-prime/introduction-call
            ?embed=true
            &embed_type=inline
            &theme=light
            &layout=month_view
            &hide_event_type_details=false"
          className="w-full h-[calc(100%-64px)]"
          frameBorder="0"
          allow="camera; microphone"
        />
      </div>
    </div>,
    document.body
  );
};
