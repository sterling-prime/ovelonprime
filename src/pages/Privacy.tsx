import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Privacy = () => {
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

  const howWeUseItems = t("privacy.sections.howWeUse.items", {
    returnObjects: true,
  }) as string[];

  const dataSharingItems = t("privacy.sections.dataSharing.items", {
    returnObjects: true,
  }) as string[];

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
            {t("privacy.title")}
          </h1>

          <p className="text-slate-500 text-center mb-12">
            {t("privacy.lastUpdated")}
          </p>

          <div className="space-y-12 text-slate-700">

            {/* INTRO */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-900">
                {t("privacy.sections.introduction.title")}
              </h2>
              <p>{t("privacy.sections.introduction.p1")}</p>
              <p className="mt-3">{t("privacy.sections.introduction.p2")}</p>
            </section>

            {/* INFORMATION COLLECTED */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-900">
                {t("privacy.sections.informationCollected.title")}
              </h2>

              <ul className="space-y-4">
                <li>
                  <strong>{t("privacy.sections.informationCollected.personal")}</strong>{" "}
                  {t("privacy.sections.informationCollected.personalDesc")}
                </li>
                <li>
                  <strong>{t("privacy.sections.informationCollected.business")}</strong>{" "}
                  {t("privacy.sections.informationCollected.businessDesc")}
                </li>
                <li>
                  <strong>{t("privacy.sections.informationCollected.technical")}</strong>{" "}
                  {t("privacy.sections.informationCollected.technicalDesc")}
                </li>
              </ul>

              <p className="mt-4 text-sm text-slate-600">
                {t("privacy.sections.informationCollected.note")}
              </p>
            </section>

            {/* HOW WE USE */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-900">
                {t("privacy.sections.howWeUse.title")}
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                {howWeUseItems.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>

            {/* DATA SHARING */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-900">
                {t("privacy.sections.dataSharing.title")}
              </h2>

              <p>{t("privacy.sections.dataSharing.p1")}</p>
              <p className="mt-3">{t("privacy.sections.dataSharing.p2")}</p>

              <ul className="list-disc pl-5 mt-3 space-y-2">
                {dataSharingItems.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>
            
            {/* DATA Securrity */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-900">
                {t("privacy.sections.dataSecurity.title")}
              </h2>

              <p>{t("privacy.sections.dataSecurity.p1")}</p>

              <p className="mt-3">
                {t("privacy.sections.dataSecurity.p2")}
              </p>

              
            </section>

            {/* DATA RETENTION */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-900">
                {t("privacy.sections.dataRetention.title")}
              </h2>

              <p>{t("privacy.sections.dataRetention.p1")}</p>

              <p className="mt-3">
                {t("privacy.sections.dataRetention.p2")}
              </p>

              
            </section>


            {/* CONTACT */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-900">
                {t("privacy.sections.contact.title")}
              </h2>
              <p>{t("privacy.sections.contact.p1")}</p>
              <p className="mt-2 font-medium text-slate-900">
                info@ovelon-prime.com
              </p>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
