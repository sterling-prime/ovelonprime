import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface TypeformModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
  title?: string;
}

export const TypeformModal = ({ isOpen, onClose, url, title = "Engagement Assessment" }: TypeformModalProps) => {
  const scrollYRef = useRef(0);

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

  return createPortal(
    <div className="fixed inset-0 z-[9999]">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      <div
        className="
          fixed inset-x-0 bottom-0
          bg-card rounded-t-2xl shadow-2xl
          h-[92vh] overflow-hidden

          lg:inset-auto lg:top-1/2 lg:left-1/2
          lg:-translate-x-1/2 lg:-translate-y-1/2
          lg:w-[95vw] lg:max-w-3xl lg:h-[88vh]
          lg:rounded-2xl
        "
      >
        {/* Header */}
        <div className="relative flex items-center px-6 py-4 border-b border-border bg-muted/80">
          <h2 className="absolute left-1/2 -translate-x-1/2 text-base font-semibold text-foreground tracking-tight">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="ml-auto p-2 rounded-full hover:bg-muted transition"
            aria-label="Close"
          >
            <X className="h-5 w-5 text-muted-foreground" />
          </button>
        </div>

        {/* Typeform iframe */}
        <iframe
          src={url}
          className="w-full h-[calc(100%-56px)] border-0"
          allow="camera; microphone; autoplay; encrypted-media"
          title={title}
        />
      </div>
    </div>,
    document.body
  );
};
