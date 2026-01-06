import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const FORM_URL = "https://cal.com/forms/483bf917-72c7-4e94-b500-6c5add086695";

const Intake = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();

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

  // Back navigation (same as Privacy)
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
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <iframe
                key={calLocale}
                src={formUrlWithLang}
                title={t("intake.title")}
                className="w-full min-h-[900px] border-0"
              />
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Intake;
