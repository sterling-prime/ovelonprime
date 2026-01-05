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
              type="button"
              onClick={goBack}
              aria-label={t("common.back")}
              className="group inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
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

            {/* INTRODUCTION */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-900">
                {t("terms.sections.introduction.title")}
              </h2>
              <p>{t("terms.sections.introduction.p1")}</p>
              <p className="mt-3">{t("terms.sections.introduction.p2")}</p>
            </section>

            {/* SERVICES */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-900">
                {t("terms.sections.services.title")}
              </h2>
              <p>{t("terms.sections.services.p1")}</p>
              <p className="mt-3">{t("terms.sections.services.p2")}</p>
            </section>

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

            {/* PAYMENTS */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-900">
                {t("terms.sections.payments.title")}
              </h2>
              <p>{t("terms.sections.payments.p1")}</p>
              <p className="mt-3">{t("terms.sections.payments.p2")}</p>
            </section>

            {/* NO GUARANTEE */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-900">
                {t("terms.sections.noGuarantee.title")}
              </h2>
              <p>{t("terms.sections.noGuarantee.p1")}</p>
            </section>

            {/* INTELLECTUAL PROPERTY */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-900">
                {t("terms.sections.ip.title")}
              </h2>
              <p>{t("terms.sections.ip.p1")}</p>
              <p className="mt-3">{t("terms.sections.ip.p2")}</p>
            </section>

            {/* CONFIDENTIALITY */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-900">
                {t("terms.sections.confidentiality.title")}
              </h2>
              <p>{t("terms.sections.confidentiality.p1")}</p>
            </section>

            {/* LIABILITY */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-900">
                {t("terms.sections.liability.title")}
              </h2>
              <p>{t("terms.sections.liability.p1")}</p>
              <p className="mt-3">{t("terms.sections.liability.p2")}</p>
            </section>

            {/* THIRD PARTY */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-900">
                {t("terms.sections.thirdParty.title")}
              </h2>
              <p>{t("terms.sections.thirdParty.p1")}</p>
            </section>

            {/* TERMINATION */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-900">
                {t("terms.sections.termination.title")}
              </h2>
              <p>{t("terms.sections.termination.p1")}</p>
            </section>

            {/* GOVERNING LAW */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-900">
                {t("terms.sections.governingLaw.title")}
              </h2>
              <p>{t("terms.sections.governingLaw.p1")}</p>
            </section>

            {/* CHANGES */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-900">
                {t("terms.sections.changes.title")}
              </h2>
              <p>{t("terms.sections.changes.p1")}</p>
            </section>

            {/* CONTACT */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-900">
                {t("terms.sections.contactInfo.title")}
              </h2>
              <p>{t("terms.sections.contactInfo.p1")}</p>
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
