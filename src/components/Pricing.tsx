import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const Pricing = () => {
  const { t } = useTranslation();

  // Same behavior as header "Get in touch"
  const openIntroductionCall = () => {
    window.dispatchEvent(new Event("open-booking-modal"));
  };

  const plans = [
    {
      key: "focused",
      name: t("pricing.focused.name"),
      description: t("pricing.focused.description"),
      price: "$1,999",
      subPriceLabel: "one-time fee",
      period: t("pricing.focused.period"),
      priceLabel: t("pricing.focused.priceLabel"),
      features: t("pricing.focused.features", {
        returnObjects: true,
      }) as string[],
      cta: t("pricing.focused.cta"),
      popular: false,
      href: "/intake",
    },
    {
      key: "enterprise",
      name: t("pricing.enterprise.name"),
      description: t("pricing.enterprise.description"),
      price: "Custom Service",
      subPriceLabel: "one-time fee", // ✅ REQUIRED
      period: "",
      priceLabel: t("pricing.enterprise.priceLabel"),
      features: t("pricing.enterprise.features", {
        returnObjects: true,
      }) as string[],
      cta: t("pricing.enterprise.cta"),
      popular: true,
      badge: t("pricing.enterprise.badge"),
      href: "/intake2",
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="section-label mb-4">
            {t("pricing.label")}
          </p>
          <h2 className="section-title mb-6">
            {t("pricing.title")}
          </h2>
          <p className="section-subtitle mx-auto">
            {t("pricing.subtitle")}
          </p>
        </div>

        {/* PRICING CARDS */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.key}
              className={cn(
                "relative bg-card rounded-xl pt-12 p-8 border shadow-card card-hover flex flex-col",
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

              {/* TITLE */}
              <h3 className="text-xl font-semibold text-foreground mb-2 text-center">
                {plan.name}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-sm text-muted-foreground mb-6 text-center">
                {plan.description}
              </p>

              {/* PRICE */}
              <div className="mb-6 text-center">
                {plan.priceLabel && (
                  <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">
                    {plan.priceLabel}
                  </p>
                )}

                <span className="text-4xl font-bold text-foreground">
                  {plan.price}
                </span>

                {plan.subPriceLabel && (
                  <p className="text-xs text-muted-foreground mt-1">
                    {plan.subPriceLabel}
                  </p>
                )}

                {plan.period && (
                  <span className="text-muted-foreground ml-2">
                    {plan.period}
                  </span>
                )}
              </div>

              {/* FEATURES */}
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

              {/* CARD CTA */}
              <Button
                variant={plan.popular ? "default" : "outline"}
                className="w-full mt-auto"
                asChild
              >
                <Link to={plan.href}>
                  {plan.cta}
                </Link>
              </Button>

              <p className="text-[11px] text-muted-foreground text-center mt-3">
                {t("pricing.reviewNote")}
              </p>
            </div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto mb-8">
            {t("pricing.securityNote")}
          </p>
          <p className="text-base text-foreground mb-4">
            {t("pricing.unsureText")}
          </p>

          <div className="flex justify-center">
            <Button size="lg" onClick={openIntroductionCall}>
              {t("pricing.talkToExpert")}
            </Button>
          </div>

          <p className="text-xs text-muted-foreground mt-3">
            {t("pricing.intakeNote")}
          </p>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
