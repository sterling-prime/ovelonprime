import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "EN", lang: "en" },
  { code: "DE", lang: "de" },
  { code: "FR", lang: "fr" },
  { code: "PL", lang: "pl" },
];

export const LanguageDropdown = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find((l) => l.lang === i18n.language) || languages[0];

  const handleLanguageChange = (lang: (typeof languages)[0]) => {
    i18n.changeLanguage(lang.lang);
    setIsOpen(false);
  };

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={dropdownRef} className="relative">
      {/* Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          flex items-center gap-1
          px-3 py-1.5
          text-sm font-medium tracking-wide
          text-gray-600
          border-b border-transparent
          hover:text-gray-900 hover:border-gray-400
          transition-all duration-200
        "
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span>{currentLang.code}</span>
        <svg
          className={`h-3 w-3 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown */}
      <div
        className={`
          absolute right-0 top-full mt-2 z-50
          min-w-[100px]
          bg-white border border-gray-200
          shadow-md
          overflow-hidden
          transition-all duration-200 origin-top
          ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
        `}
        role="listbox"
      >
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleLanguageChange(lang)}
            role="option"
            aria-selected={currentLang.code === lang.code}
            className={`
              w-full px-4 py-2.5
              text-left text-sm font-medium tracking-wide
              transition-colors duration-150
              ${
                currentLang.code === lang.code
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }
            `}
          >
            {lang.code}
          </button>
        ))}
      </div>
    </div>
  );
};
