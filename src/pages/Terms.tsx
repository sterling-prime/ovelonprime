import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Terms = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const goBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  const websiteUseItems = t("terms.sections.websiteUse.items", {
    returnObjects: true,
  }) as string[];

  const clientResponsibilitiesItems = t(
    "terms.sections.clientResponsibilities.items",
    { returnObjects: true }
  ) as string[];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

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

          {/* TITLE */}
          <h1 className="text-4xl font-bold text-slate-900 text-center mb-4">
            {t("terms.title")}
          </h1>

          <p className="text-slate-500 text-center mb-12">
            {t("terms.lastUpdated")}
          </p>

          <div className="space-y-12 text-slate-700">

            {/* WEBSITE USE */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-900">
                {t("terms.sections.websiteUse.title")}
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                {websiteUseItems.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>

            {/* CLIENT RESPONSIBILITIES */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-900">
                {t("terms.sections.clientResponsibilities.title")}
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                {clientResponsibilitiesItems.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
