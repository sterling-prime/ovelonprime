import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

type LanguageDropdownProps = {
  forceBlack?: boolean;
};

const languages = [
  { code: "EN", lang: "en", label: "English", flag: "🇬🇧" },
  { code: "DE", lang: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "FR", lang: "fr", label: "Français", flag: "🇫🇷" },
  { code: "ES", lang: "es", label: "Español", flag: "🇪🇸" },
  { code: "IT", lang: "it", label: "Italiano", flag: "🇮🇹" },
  { code: "PT", lang: "pt", label: "Português", flag: "🇵🇹" },
];

export const LanguageDropdown = ({
  forceBlack = false,
}: LanguageDropdownProps) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current =
    languages.find((l) => l.lang === i18n.language) || languages[0];

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      {/* TRIGGER */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`
          flex items-center gap-2
          text-sm font-medium tracking-wide
          transition-colors duration-200
          touch-manipulation

          ${
            forceBlack
              ? "!text-black hover:!text-black"
              : "text-white/80 hover:text-white"
          }
        `}
      >
        <span className="text-base leading-none">{current.flag}</span>
        <span>{current.code}</span>

        <svg
          className={`h-3 w-3 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.7a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
        </svg>
      </button>

      {/* DROPDOWN */}
      <div
        role="listbox"
        className={`
          absolute right-0 mt-3 z-50 min-w-[160px]
          rounded-md shadow-xl transition-all origin-top
          max-h-[300px] overflow-y-auto
          ${
            isOpen
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }
          ${
            forceBlack
              ? "bg-white border border-gray-200"
              : "bg-[#111] border border-white/10"
          }
        `}
      >
        {languages.map((l) => (
          <button
            key={l.code}
            onClick={() => {
              i18n.changeLanguage(l.lang);
              setIsOpen(false);
            }}
            role="option"
            aria-selected={l.lang === i18n.language}
            className={`
              w-full px-4 py-2 flex items-center gap-3
              text-sm transition-colors touch-manipulation
              ${
                forceBlack
                  ? "!text-black hover:bg-gray-100"
                  : "text-white/70 hover:text-white hover:bg-white/5"
              }
              ${l.lang === i18n.language ? (forceBlack ? "bg-gray-50" : "bg-white/10") : ""}
            `}
          >
            <span className="text-base">{l.flag}</span>
            <span>{l.code}</span>
            <span className="ml-auto text-xs opacity-60">
              {l.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};