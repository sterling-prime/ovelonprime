import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Privacy = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const howWeUseItems = t("privacy.sections.howWeUse.items", { returnObjects: true }) as string[];
  const dataSharingItems = t("privacy.sections.dataSharing.items", { returnObjects: true }) as string[];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

          <h1 className="text-4xl font-bold text-slate-900 text-center mb-4">
            {t("privacy.title")}
          </h1>

          <p className="text-slate-500 text-center mb-12">
            {t("privacy.lastUpdated")}
          </p>

          <div className="space-y-12 text-slate-700">

            {/* 1. INTRODUCTION */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-900">
                {t("privacy.sections.introduction.title")}
              </h2>
              <p className="leading-relaxed">
                {t("privacy.sections.introduction.p1")}
              </p>
              <p className="leading-relaxed mt-3">
                {t("privacy.sections.introduction.p2")}
              </p>
            </section>

            {/* 2. INFORMATION WE COLLECT */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-900">
                {t("privacy.sections.informationCollected.title")}
              </h2>

              <ul className="space-y-4">
                <li>
                  <strong className="text-slate-900">{t("privacy.sections.informationCollected.personal")}</strong>{" "}
                  {t("privacy.sections.informationCollected.personalDesc")}
                </li>

                <li>
                  <strong className="text-slate-900">{t("privacy.sections.informationCollected.business")}</strong>{" "}
                  {t("privacy.sections.informationCollected.businessDesc")}
                </li>

                <li>
                  <strong className="text-slate-900">{t("privacy.sections.informationCollected.technical")}</strong>{" "}
                  {t("privacy.sections.informationCollected.technicalDesc")}
                </li>
              </ul>

              <p className="leading-relaxed mt-4 text-sm text-slate-600">
                {t("privacy.sections.informationCollected.note")}
              </p>
            </section>

            {/* 3. HOW WE USE INFORMATION */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-900">
                {t("privacy.sections.howWeUse.title")}
              </h2>

              <ul className="space-y-3 list-disc pl-5">
                {howWeUseItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <p className="leading-relaxed mt-4 text-sm text-slate-600">
                {t("privacy.sections.howWeUse.note")}
              </p>
            </section>

            {/* 4. DATA SHARING */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-900">
                {t("privacy.sections.dataSharing.title")}
              </h2>

              <p className="leading-relaxed">
                {t("privacy.sections.dataSharing.p1")}
              </p>

              <p className="leading-relaxed mt-3">
                {t("privacy.sections.dataSharing.p2")}
              </p>

              <ul className="space-y-3 list-disc pl-5 mt-3">
                {dataSharingItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <p className="leading-relaxed mt-4">
                {t("privacy.sections.dataSharing.note")}
              </p>
            </section>

            {/* 5. DATA SECURITY */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-900">
                {t("privacy.sections.dataSecurity.title")}
              </h2>

              <p className="leading-relaxed">
                {t("privacy.sections.dataSecurity.p1")}
              </p>

              <p className="leading-relaxed mt-3">
                {t("privacy.sections.dataSecurity.p2")}
              </p>
            </section>

            {/* 6. DATA RETENTION & RIGHTS */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-900">
                {t("privacy.sections.dataRetention.title")}
              </h2>

              <p className="leading-relaxed">
                {t("privacy.sections.dataRetention.p1")}
              </p>

              <p className="leading-relaxed mt-3">
                {t("privacy.sections.dataRetention.p2")}
              </p>
            </section>

            {/* 7. CONTACT */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-900">
                {t("privacy.sections.contact.title")}
              </h2>

              <p className="leading-relaxed">
                {t("privacy.sections.contact.p1")}
              </p>

              <p className="mt-2 font-medium text-slate-900">
                support@ovelon-prime.com
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
