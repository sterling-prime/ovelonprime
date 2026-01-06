import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft, Loader2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const FORM_URL = "https://cal.com/forms/35953db6-1b33-43bf-912a-77b157841bdd";

const Intake2 = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  // Set language from URL param if provided (only on initial load)
  useEffect(() => {
    const lang = searchParams.get("lang");
    if (lang && ["en", "de", "fr", "pl", "es", "it"].includes(lang)) {
      i18n.changeLanguage(lang);
    }
  }, [searchParams, i18n]);

  // Always start at top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  // Back navigation (same pattern everywhere)
  const goBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  // Map language for cal.com - reactively updates when i18n.language changes
  const calLocale = i18n.language.startsWith("en") ? "en" : i18n.language;
  const formUrlWithLang = `${FORM_URL}?locale=${calLocale}`;

  // Reset loading state when language changes
  useEffect(() => {
    setIsLoading(true);
  }, [calLocale]);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">

          {/* BACK BUTTON */}
          <div className="mb-8">
            <button
              onClick={goBack}
              aria-label={t("common.back")}
              className="
                group
                inline-flex
                items-center
                gap-2
                text-sm
                font-medium
                text-slate-600
                hover:text-slate-900
                transition-colors
              "
            >
              <ArrowLeft
                className="
                  h-4
                  w-4
                  transition-transform
                  duration-200
                  group-hover:-translate-x-1
                "
              />
              {t("common.back")}
            </button>
          </div>

          {/* PAGE HEADER */}
          <div className="text-center mb-14">
            <h1 className="text-4xl font-semibold text-slate-900 mb-4">
              {t("intake.title")}
            </h1>
            <p className="text-slate-600">
              {t("intake.subtitle")}
            </p>
          </div>

          {/* FORM CARD */}
          <div className="bg-slate-100 rounded-3xl p-10">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden relative">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
                  <Loader2 className="h-8 w-8 animate-spin text-slate-400" />
                </div>
              )}
              <iframe
                key={calLocale}
                src={formUrlWithLang}
                title={t("intake.title")}
                className="w-full min-h-[900px] border-0"
                onLoad={() => setIsLoading(false)}
              />
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Intake2;
