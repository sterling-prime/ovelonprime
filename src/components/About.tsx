import { useTranslation } from "react-i18next";
import aboutImage from "@/assets/manager.png";

export const About = () => {
  const { t } = useTranslation();

  const stats = [
    { value: "98%", label: t("about.stats.uptime") },
    { value: "150+", label: t("about.stats.deployments") },
    { value: "12", label: t("about.stats.industries") },
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="section-label mb-4">{t("about.label")}</p>
          <h2 className="section-title mb-6">
            {t("about.title")}{" "}
            <span className="text-muted-foreground">{t("about.titleHighlight")}</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">{t("about.description1")}</p>
            <p className="text-muted-foreground leading-relaxed">{t("about.description2")}</p>

            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-stat-value">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img src={aboutImage} alt="Operations leadership" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-16">
          <blockquote className="text-xl italic text-muted-foreground border-l-4 border-accent pl-6">
            {t("about.quote")}
          </blockquote>
          <p className="text-sm text-muted-foreground mt-4 pl-6">{t("about.quoteAuthor")}</p>
        </div>
      </div>
    </section>
  );
};
