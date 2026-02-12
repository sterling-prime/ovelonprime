import { Check } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { ScrollReveal, StaggerContainer } from "./ScrollReveal";
import { BookingModal } from "./BookingModal";
import { TypeformModal } from "./TypeformModal";

const TYPEFORM_URL = "https://form.typeform.com/to/xTB0o3Wd";
const ENTERPRISE_CAL_URL = "https://cal.com/ovelon-prime/enterprise-automation-program";

export const Pricing = () => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === "en";
  const focusedPrice = isEnglish ? "$4,999" : "€4.999";
  const [enterpriseBookingOpen, setEnterpriseBookingOpen] = useState(false);
  const [typeformOpen, setTypeformOpen] = useState(false);

  // Listen for chatbot events
  useEffect(() => {
    const handleOpenTypeform = () => setTypeformOpen(true);
    const handleOpenEnterprise = () => setEnterpriseBookingOpen(true);
    window.addEventListener("open-typeform-modal", handleOpenTypeform);
    window.addEventListener("open-enterprise-booking", handleOpenEnterprise);
    return () => {
      window.removeEventListener("open-typeform-modal", handleOpenTypeform);
      window.removeEventListener("open-enterprise-booking", handleOpenEnterprise);
    };
  }, []);

  const openTalkToExpert = () => {
    setEnterpriseBookingOpen(true);
  };

  const plans = [
    {
      key: "focused",
      name: t("pricing.focused.name"),
      description: t("pricing.focused.description"),
      price: focusedPrice,
      priceLabel: t("pricing.focused.priceLabel"),
      period: t("pricing.focused.period"),
      features: t("pricing.focused.features", {
        returnObjects: true,
      }) as string[],
      cta: t("pricing.focused.cta"), // Engagement Assessment
      popular: false,
    },
    {
      key: "enterprise",
      name: t("pricing.enterprise.name"),
      description: t("pricing.enterprise.description"),
      price: t("pricing.enterprise.price"),
      priceLabel: t("pricing.enterprise.priceLabel"),
      period: t("pricing.enterprise.period"),
      features: t("pricing.enterprise.features", {
        returnObjects: true,
      }) as string[],
      cta: t("pricing.enterprise.cta"), // Talk to Expert
      popular: true,
      badge: t("pricing.enterprise.badge"),
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <ScrollReveal
          variant="fade-up"
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="section-label mb-4">{t("pricing.label")}</p>
          <h2 className="section-title mb-6">{t("pricing.title")}</h2>
          <p className="section-subtitle mx-auto">
            {t("pricing.subtitle")}
          </p>
        </ScrollReveal>

        {/* PRICING CARDS */}
        <StaggerContainer
          staggerDelay={150}
          baseDelay={100}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch"
        >
          {plans.map((plan) => {
            const isEnterprise = plan.key === "enterprise";

            return (
              <div
                key={plan.key}
                className={cn(
                  "relative bg-card rounded-xl pt-12 p-8 border shadow-card card-hover flex flex-col h-full min-h-[600px]",
                  plan.popular
                    ? "border-accent ring-2 ring-accent/20"
                    : "border-border"
                )}
              >
                {plan.popular && (
                  <div className="absolute top-2 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 text-[11px] font-medium bg-accent/90 text-accent-foreground rounded-full">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <h3 className="text-xl font-semibold text-foreground mb-2 text-center">
                  {plan.name}
                </h3>

                <p className="text-sm text-muted-foreground mb-6 text-center">
                  {plan.description}
                </p>

                <div className="mb-6 text-center">
                  {plan.priceLabel && (
                    <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">
                      {plan.priceLabel}
                    </p>
                  )}

                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>

                  {plan.period && (
                    <p className="text-xs text-muted-foreground mt-1">
                      {plan.period}
                    </p>
                  )}
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <Check className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="flex-shrink-0">
                  {isEnterprise ? (
                    <Button
                      variant="default"
                      className="w-full"
                      onClick={openTalkToExpert}
                    >
                      {plan.cta}
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => setTypeformOpen(true)}
                    >
                      {plan.cta}
                    </Button>
                  )}

                  <p className="text-[11px] text-muted-foreground text-center mt-3">
                    {t("pricing.reviewNote")}
                  </p>
                </div>
              </div>
            );
          })}
        </StaggerContainer>
      </div>

      <BookingModal
        isOpen={enterpriseBookingOpen}
        onClose={() => setEnterpriseBookingOpen(false)}
        calUrl={ENTERPRISE_CAL_URL}
      />

      <TypeformModal
        isOpen={typeformOpen}
        onClose={() => setTypeformOpen(false)}
        url={TYPEFORM_URL}
        title={t("pricing.focused.cta")}
      />
    </section>
  );
};

export default Pricing;
