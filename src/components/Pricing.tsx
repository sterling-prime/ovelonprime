import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "On Time AI Service",
    description:
      "Instant AI automation that saves your team hours — delivered once, set forever.",
    price: "$1,999",
    period: "On Time",
    features: [
      "Single workflow automation",
      "Standard integrations",
      "Email support",
      "Monthly reporting",
      "99.5% uptime SLA",
    ],
    cta: "Book Call",
    href: "#contact",
    popular: false,
  },
  {
    name: "Professional",
    description:
      "Advanced AI automations that streamline multiple processes, and scale your operations.",
    price: "$2,999",
    period: "per month",
    features: [
      "Up to 5 workflow automations",
      "Custom integrations",
      "Priority support",
      "Real-time analytics",
      "99.9% uptime SLA",
      "Dedicated account manager",
    ],
    cta: "Book Call",
    href: "#contact",
    popular: true,
  },
  {
    name: "Enterprise",
    description:
      "Tailor-made AI systems engineered for complex organizations. We design, build, and deploy advanced automations.",
    price: "Custom",
    period: "tailored pricing",
    features: [
      "Unlimited automations",
      "Full system integration",
      "24/7 dedicated support",
      "Advanced compliance tools",
      "99.99% uptime SLA",
      "On-site implementation",
      "Custom SLA terms",
    ],
    cta: "Email Us",
    href: "mailto:support@ovelon-prime.com",
    popular: false,
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
            Transparent pricing,{" "}
            <span className="text-muted-foreground">predictable value</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Choose a package that aligns with your operational scale. 
            All plans include core security and compliance features.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
              {/* Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              {/* TITLE CENTERED */}
              <h3 className="text-xl font-semibold text-foreground mb-2 text-center">
                {plan.name}
              </h3>

              <p className="text-sm text-muted-foreground mb-6 text-center">
                {plan.description}
              </p>

              {/* PRICE CENTERED */}
              <div className="mb-6 text-center">
                <span className="text-4xl font-bold text-foreground">
                  {plan.price}
                </span>
                <span className="text-muted-foreground ml-2">{plan.period}</span>
              </div>

              {/* Features remain left-aligned */}
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

              {/* CTA */}
              <Button
                variant={plan.popular ? "default" : "outline"}
                className="w-full"
                asChild
              >
                <a href={plan.href}>{plan.cta}</a>
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          All plans include security audits, data encryption, and regulatory
          compliance support.
        </p>
      </div>
    </section>
  );
};
