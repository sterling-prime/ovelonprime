import { useTranslation } from "react-i18next";

export const OperationalGovernanceTrends = () => {
  const { t } = useTranslation();

  return (
    <section className="py-28 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4">
            {t("governanceTrends.title")}
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            {t("governanceTrends.subtitle")}
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* COLUMN 1 */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4 text-center md:text-left">
              {t("governanceTrends.column1.title")}
            </h3>
            <ul className="space-y-3 text-slate-600 text-sm text-center md:text-left">
              <li>• {t("governanceTrends.column1.items.0")}</li>
              <li>• {t("governanceTrends.column1.items.1")}</li>
              <li>• {t("governanceTrends.column1.items.2")}</li>
              <li>• {t("governanceTrends.column1.items.3")}</li>
              <li>• {t("governanceTrends.column1.items.4")}</li>
            </ul>
          </div>

          {/* COLUMN 2 */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4 text-center md:text-left">
              {t("governanceTrends.column2.title")}
            </h3>
            <ul className="space-y-3 text-slate-600 text-sm text-center md:text-left">
              <li>• {t("governanceTrends.column2.items.0")}</li>
              <li>• {t("governanceTrends.column2.items.1")}</li>
              <li>• {t("governanceTrends.column2.items.2")}</li>
              <li>• {t("governanceTrends.column2.items.3")}</li>
              <li>• {t("governanceTrends.column2.items.4")}</li>
            </ul>
          </div>

          {/* COLUMN 3 */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4 text-center md:text-left">
              {t("governanceTrends.column3.title")}
            </h3>
            <ul className="space-y-3 text-slate-600 text-sm text-center md:text-left">
              <li>• {t("governanceTrends.column3.items.0")}</li>
              <li>• {t("governanceTrends.column3.items.1")}</li>
              <li>• {t("governanceTrends.column3.items.2")}</li>
              <li>• {t("governanceTrends.column3.items.3")}</li>
              <li>• {t("governanceTrends.column3.items.4")}</li>
            </ul>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="my-20 border-t border-slate-200" />

        {/* BOTTOM — TRENDS 2026+ */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-800 text-lg leading-relaxed">
            {t("governanceTrends.trend1")}
          </p>

          <p className="mt-6 text-slate-600 text-sm leading-relaxed">
            {t("governanceTrends.trend2")}
          </p>
        </div>

      </div>
    </section>
  );
};
