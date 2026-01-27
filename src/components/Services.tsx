import { useTranslation } from "react-i18next";
import serviceLeadImg from "@/assets/service-lead.png";
import serviceSchedulingImg from "@/assets/service-scheduling.png";
import serviceSupportImg from "@/assets/service-support.png";

const images = [serviceLeadImg, serviceSchedulingImg, serviceSupportImg];

export const Services = () => {
  const { t } = useTranslation();
  const items = t("services.items", { returnObjects: true }) as Array<{
    title: string;
    description: string;
    tags: string[];
  }>;

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="section-label mb-4">{t("services.label")}</p>
          <h2 className="section-title mb-6">
            {t("services.title")}{" "}
            <span className="text-muted-foreground">{t("services.titleHighlight")}</span>
          </h2>
          <p className="section-subtitle mx-auto">{t("services.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-10 border border-border shadow-card card-hover text-center flex flex-col items-center"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="w-24 h-24 rounded-2xl overflow-hidden mb-6 shadow-lg">
                <img 
                  src={images[index]} 
                  alt={service.title}
                  width={96}
                  height={96}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{service.description}</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {service.tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-md bg-secondary text-secondary-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
