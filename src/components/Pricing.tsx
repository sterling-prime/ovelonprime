import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Focused Automation Engagement",
    description:
      "A fixed-scope automation engagement designed to remove a specific operational bottleneck with measurable impact.",
    price: "$1,999",
    period: "one-time fee",
    priceLabel: "Starting from",
    features: [
      "Single high-impact automation",
      "Process & intake mapping",
      "Implementation & deployment",
      "Documentation & handover",
      "Post-deployment validation",
    ],
    cta: "Request Engagement Details",
    popular: false,
  },
  {
    name: "Enterprise Automation Program",
    description:
      "Tailor-made automation systems for complex organizations with advanced governance, compliance, and scale requirements.",
    price: "Custom Service",
    period: "one-time fee",
    priceLabel: "Tailored pricing",
    features: [
      "Multi-system automation architecture",
      "Custom integrations & workflows",
      "Dedicated implementation support",
      "Compliance-aware system design",
      "Custom SLA & governance framework",
    ],
    cta: "Get a Quote",
    popular: true,
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="section-label mb-4">Pricing</p>
          <h2 className="section-title mb-6">
            Engagement-based pricing, built around outcomes
          </h2>
          <p className="section-subtitle mx-auto">
            Clearly scoped automation engagements focused on reliability,
            measurable impact, and long-term operational value.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative bg-card rounded-xl pt-12 p-8 border shadow-card card-hover flex flex-col",
                plan.popular
                  ? "border-accent ring-2 ring-accent/20"
                  : "border-border"
              )}
            >
              {/* Enterprise Badge */}
              {plan.popular && (
                <div className="absolute top-2 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 text-[11px] font-medium bg-accent/90 text-accent-foreground rounded-full">
                    Enterprise
                  </span>
                </div>
              )}

              {/* Title */}
              <h3 className="text-xl font-semibold text-foreground mb-2 text-center">
                {plan.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-6 text-center">
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-6 text-center">
                {plan.priceLabel && (
                  <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">
                    {plan.priceLabel}
                  </p>
                )}

                <span className="text-4xl font-bold text-foreground">
                  {plan.price}
                </span>

                <span className="text-muted-foreground ml-2">
                  {plan.period}
                </span>
              </div>

              {/* Features */}
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
              <Button
                variant={plan.popular ? "default" : "outline"}
                className="w-full mt-auto"
                asChild
              >
                <a data-cal-link="ovelon-prime/introduction-call">
                  {plan.cta}
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom Trust & CTA */}
        <div className="mt-16 text-center">

          <p className="text-sm text-muted-foreground max-w-2xl mx-auto mb-8">
            Every engagement is built with enterprise-grade security,
            data protection, and operational compliance.
          </p>

          <p className="text-base text-foreground mb-4">
            Not sure which automation engagement fits your operation?
          </p>

          <div className="flex justify-center">
            <Button size="lg" asChild>
              <a data-cal-link="ovelon-prime/introduction-call">
                Book Strategic Call
              </a>
            </Button>
          </div>

          <p className="text-xs text-muted-foreground mt-3">
            40-minute scoping call · No sales pressure · Directly with an automation expert
          </p>

        </div>

      </div>
    </section>
  );
};
