import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Terms = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const websiteUseItems = t("terms.sections.websiteUse.items", { returnObjects: true }) as string[];
  const clientResponsibilitiesItems = t("terms.sections.clientResponsibilities.items", { returnObjects: true }) as string[];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

          <h1 className="text-4xl font-bold text-slate-900 text-center mb-4">
            {t("terms.title")}
          </h1>

          <p className="text-slate-500 text-center mb-12">
            {t("terms.lastUpdated")}
          </p>

          <div className="space-y-12 text-slate-700">

            {/* 1. INTRODUCTION */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-900">
                {t("terms.sections.introduction.title")}
              </h2>
              <p className="leading-relaxed">
                {t("terms.sections.introduction.p1")}
              </p>
              <p className="leading-relaxed mt-3">
                {t("terms.sections.introduction.p2")}
              </p>
            </section>

            {/* 2. SERVICES */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-900">
                {t("terms.sections.services.title")}
              </h2>
              <p className="leading-relaxed">
                {t("terms.sections.services.p1")}
              </p>
              <p className="leading-relaxed mt-3">
                {t("terms.sections.services.p2")}
              </p>
            </section>

            {/* 3. WEBSITE USE */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-900">
                {t("terms.sections.websiteUse.title")}
              </h2>
              <ul className="space-y-3 list-disc list-inside">
                {websiteUseItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            {/* 4. CLIENT RESPONSIBILITIES */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-900">
                {t("terms.sections.clientResponsibilities.title")}
              </h2>
              <ul className="space-y-3 list-disc list-inside">
                {clientResponsibilitiesItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            {/* 5. PAYMENTS */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-900">
                {t("terms.sections.payments.title")}
              </h2>
              <p className="leading-relaxed">
                {t("terms.sections.payments.p1")}
              </p>
              <p className="leading-relaxed mt-3">
                {t("terms.sections.payments.p2")}
              </p>
            </section>

            {/* 6. NO GUARANTEES */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-900">
                {t("terms.sections.noGuarantee.title")}
              </h2>
              <p className="leading-relaxed">
                {t("terms.sections.noGuarantee.p1")}
              </p>
            </section>

            {/* 7. IP */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-900">
                {t("terms.sections.ip.title")}
              </h2>
              <p className="leading-relaxed">
                {t("terms.sections.ip.p1")}
              </p>
              <p className="leading-relaxed mt-3">
                {t("terms.sections.ip.p2")}
              </p>
            </section>

            {/* 8. CONFIDENTIALITY */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-900">
                {t("terms.sections.confidentiality.title")}
              </h2>
              <p className="leading-relaxed">
                {t("terms.sections.confidentiality.p1")}
              </p>
            </section>

            {/* 9. LIABILITY */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-900">
                {t("terms.sections.liability.title")}
              </h2>
              <p className="leading-relaxed">
                {t("terms.sections.liability.p1")}
              </p>
              <p className="leading-relaxed mt-3">
                {t("terms.sections.liability.p2")}
              </p>
            </section>

            {/* 10. THIRD PARTIES */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-900">
                {t("terms.sections.thirdParty.title")}
              </h2>
              <p className="leading-relaxed">
                {t("terms.sections.thirdParty.p1")}
              </p>
            </section>

            {/* 11. TERMINATION */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-900">
                {t("terms.sections.termination.title")}
              </h2>
              <p className="leading-relaxed">
                {t("terms.sections.termination.p1")}
              </p>
            </section>

            {/* 12. GOVERNING LAW */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-900">
                {t("terms.sections.governingLaw.title")}
              </h2>
              <p className="leading-relaxed">
                {t("terms.sections.governingLaw.p1")}
              </p>
            </section>

            {/* 13. CHANGES */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-900">
                {t("terms.sections.changes.title")}
              </h2>
              <p className="leading-relaxed">
                {t("terms.sections.changes.p1")}
              </p>
            </section>

            {/* 14. CONTACT */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-900">
                {t("terms.sections.contactInfo.title")}
              </h2>
              <p className="leading-relaxed">
                {t("terms.sections.contactInfo.p1")}
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

export default Terms;
