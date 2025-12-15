import { useState } from "react";
import { ChevronDown, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "EN", lang: "en", label: "English" },
  { code: "DE", lang: "de", label: "Deutsch" },
  { code: "FR", lang: "fr", label: "Français" },
  { code: "ES", lang: "es", label: "Español" },
  { code: "IT", lang: "it", label: "Italiano" },
  { code: "PL", lang: "pl", label: "Polski" },
];

export const LanguageDropdown = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  
  const currentLang = languages.find(l => l.lang === i18n.language) || languages[0];

  const handleLanguageChange = (lang: typeof languages[0]) => {
    i18n.changeLanguage(lang.lang);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-black transition rounded-md hover:bg-gray-100"
      >
        <Globe className="h-4 w-4" />
        <span>{currentLang.code}</span>
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)} 
          />
          <div className="absolute right-0 top-full mt-2 z-50 min-w-[140px] bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden animate-fade-in">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang)}
                className={`w-full px-4 py-2.5 text-left text-sm flex items-center justify-between hover:bg-gray-50 transition ${
                  currentLang.code === lang.code ? "bg-gray-50 text-primary font-medium" : "text-gray-700"
                }`}
              >
                <span>{lang.label}</span>
                <span className="text-xs text-gray-400">{lang.code}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
