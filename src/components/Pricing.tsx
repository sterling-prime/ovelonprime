import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "One-Time Prime Service",
    description:
      "A focused, one-off automation engagement designed to remove a specific operational bottleneck — delivered once, built to last.",
    price: "$1,999",
    period: "one-time",
    features: [
      "Single high-impact automation",
      "Strategic intake & process mapping",
      "Implementation & deployment",
      "Documentation & handover",
      "Post-deployment quality check",
    ],
    cta: "Request Prime Engagement",
    popular: false,
  },
  {
    name: "Enterprise Customized",
    description:
      "Tailor-made automation systems engineered for complex organizations with advanced requirements, governance, and scale.",
    price: "Custom",
    period: "tailored pricing",
    features: [
      "Multi-system automation architecture",
      "Custom integrations & workflows",
      "Dedicated implementation support",
      "Compliance-aware design",
      "Custom SLA & governance setup",
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
            Engagement-based pricing,{" "}
            <span className="text-muted-foreground">no subscriptions</span>
          </h2>
          <p className="section-subtitle mx-auto">
            We work on clearly scoped engagements — focused on outcomes,
            reliability, and long-term value.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative bg-card rounded-xl p-8 border shadow-card card-hover",
                plan.popular
                  ? "border-accent ring-2 ring-accent/20"
                  : "border-border"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full">
                    Enterprise
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
                <span className="text-4xl font-bold text-foreground">
                  {plan.price}
                </span>
                <span className="text-muted-foreground ml-2">
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
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

              {/* CTA — EXACT SAME BEHAVIOUR AS GET IN TOUCH */}
              <Button
                variant="outline"
                className="w-full"
                asChild
              >
                <a data-cal-link="ovelon-prime/introduction-call">
                  {plan.cta}
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom CTA — SAME STYLE / SAME BEHAVIOUR */}
        <p className="text-center text-sm text-muted-foreground mt-10">
          All engagements include security best practices, data protection, and
          compliance-aware implementation.
        </p>

        <div className="mt-6 flex justify-center">
          <Button variant="outline" size="lg" asChild>
            <a data-cal-link="ovelon-prime/introduction-call">
              Book Strategic Call
            </a>
          </Button>
        </div>

      </div>
    </section>
  );
};
