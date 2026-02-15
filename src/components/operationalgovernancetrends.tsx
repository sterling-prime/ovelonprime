import { useTranslation } from "react-i18next";
import { ClipboardCheck, Shield, AlertTriangle } from "lucide-react";
import { ScrollReveal, StaggerContainer } from "./ScrollReveal";

const icons = [ClipboardCheck, Shield, AlertTriangle];

export const OperationalGovernanceTrends = () => {
  const { t } = useTranslation();

  const columns = [
    { key: "column1", items: 5 },
    { key: "column2", items: 5 },
    { key: "column3", items: 5 },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <ScrollReveal
          variant="fade-up"
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="section-label mb-4">
            {t("governanceTrends.label", "GOVERNANCE")}
          </p>

          <h2 className="section-title mb-6 text-center">
            {t("governanceTrends.title")}
          </h2>

          <p className="section-subtitle mx-auto text-center">
            {t("governanceTrends.subtitle")}
          </p>
        </ScrollReveal>

        {/* CARDS GRID */}
        <StaggerContainer
          staggerDelay={150}
          baseDelay={100}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {columns.map((col, index) => {
            const Icon = icons[index];

            return (
              <div
                key={col.key}
                className="bg-card rounded-2xl p-8 border border-border shadow-card
                           card-hover flex flex-col h-full min-h-[400px] group"
              >
                {/* ICON */}
                <div
                  className="w-12 h-12 rounded-xl bg-secondary flex items-center
                             justify-center mb-6 mx-auto transition-colors
                             duration-300 group-hover:bg-[#3A8F94]/10"
                >
                  <Icon
                    className="w-6 h-6 text-foreground transition-colors
                               duration-300 group-hover:text-[#3A8F94]"
                  />
                </div>

                {/* TITLE (ALWAYS CENTERED) */}
                <h3 className="text-lg font-semibold text-foreground mb-6 text-center">
                  {t(`governanceTrends.${col.key}.title`)}
                </h3>

                {/* LIST */}
                <ul className="space-y-3 flex-grow">
                  {Array.from({ length: col.items }).map((_, i) => (
                    <li
                      key={i}
                      className="
                        grid grid-cols-[8px_1fr] gap-3
                        text-sm text-muted-foreground text-left
                        md:grid-cols-1 md:justify-items-center md:text-center
                      "
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                      <span className="block">
                        {t(`governanceTrends.${col.key}.items.${i}`)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </StaggerContainer>

        {/* BOTTOM — TRENDS */}
        <ScrollReveal
          variant="fade-up"
          delay={300}
          className="max-w-2xl mx-auto mt-16 text-center"
        >
          <p className="text-foreground text-lg leading-relaxed">
            {t("governanceTrends.trend1")}
          </p>

          <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
            {t("governanceTrends.trend2")}
          </p>
        </ScrollReveal>

      </div>
    </section>
  );
};
