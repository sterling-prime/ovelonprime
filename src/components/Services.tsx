import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ArrowUpRight } from "lucide-react";
import { ServiceDetailModal } from "./ServiceDetailModal";
import { ScrollReveal, StaggerContainer } from "./ScrollReveal";
import serviceLeadImg from "@/assets/service-lead.png?format=webp&quality=80";
import serviceSchedulingImg from "@/assets/service-scheduling.png?format=webp&quality=80";
import serviceSupportImg from "@/assets/service-support.png?format=webp&quality=80";
import serviceVoiceImg from "@/assets/service-phone.png?format=webp&quality=80";

const images = [
  serviceLeadImg,
  serviceSchedulingImg,
  serviceSupportImg,
  serviceVoiceImg
];

export const Services = () => {
  const { t } = useTranslation();
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const items = t("services.items", { returnObjects: true }) as Array<{
    title: string;
    description: string;
    tags: string[];
  }>;

  const handleCardClick = (index: number) => {
    setSelectedService(index);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <p className="section-label mb-4">{t("services.label")}</p>
          <h2 className="section-title mb-6">
            {t("services.title")}{" "}
            <span className="text-muted-foreground">{t("services.titleHighlight")}</span>
          </h2>
          <p className="section-subtitle mx-auto">{t("services.subtitle")}</p>
        </ScrollReveal>

        {/* 2x2 Grid */}
        <StaggerContainer 
          staggerDelay={120} 
          baseDelay={100}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8"
        >
          {items.map((service, index) => (
            <button
              key={index}
              onClick={() => handleCardClick(index)}
              className="group bg-card rounded-2xl p-10 border border-border shadow-card text-center flex flex-col items-center relative overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:border-accent/30 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background h-full min-h-[420px]"
              aria-label={`View details for ${service.title}`}
            >
              {/* Hover indicator */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-secondary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight className="w-4 h-4 text-foreground" />
              </div>

              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="w-24 h-24 rounded-2xl overflow-hidden mb-6 shadow-lg relative z-10 transition-transform duration-300 group-hover:scale-105 flex-shrink-0">
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
              <h3 className="text-xl font-semibold text-foreground mb-4 relative z-10 flex-shrink-0">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed relative z-10 flex-grow">{service.description}</p>
              <div className="flex flex-wrap gap-2 justify-center relative z-10 min-h-[32px] flex-shrink-0">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-md bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Click hint */}
              <span className="mt-6 text-xs text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10 flex-shrink-0">
                {t("services.clickToExplore", "Click to explore")}
              </span>
            </button>
          ))}
        </StaggerContainer>
      </div>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        isOpen={selectedService !== null}
        onClose={handleCloseModal}
        serviceIndex={selectedService}
        service={selectedService !== null ? items[selectedService] : null}
      />
    </section>
  );
};