import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { translations } from "./translations";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translations.en },
      de: { translation: translations.de },
      fr: { translation: translations.fr },
      es: { translation: translations.es },
      it: { translation: translations.it },
      pt: { translation: translations.pt },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: true, // Enable HTML escaping for XSS protection
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;