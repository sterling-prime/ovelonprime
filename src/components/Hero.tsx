import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import heroBg from "@/assets/chipAI2.png";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24">
        <div className="max-w-4xl mx-auto space-y-8">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-badge-bg border border-border animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-badge-dot" />
            <span className="text-sm font-medium text-muted-foreground">
              {t("hero.badge")}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight animate-fade-in [animation-delay:120ms] opacity-0">
            {t("hero.title")}{" "}
            <span className="block text-muted-foreground">
              {t("hero.titleHighlight")}
            </span>
          </h1>

          {/* Primary subline */}
          <p className="mt-6 text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto animate-fade-in opacity-0 [animation-delay:240ms]">
            {t("hero.subtitle")}
          </p>

          {/* Secondary subline (short, decisive) */}
          <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto animate-fade-in opacity-0 [animation-delay:300ms]">
            {t("hero.subtitle2")}
          </p>

          {/* CTA */}
    <div className="pt-4 animate-fade-in [animation-delay:340ms] opacity-0">
    <Button
      size="lg"
      variant="default"
      className="group hover:bg-accent hover:text-accent-foreground transition-colors"
      asChild
    >
      <a href="#services">
        {t("hero.cta")}
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </a>
    </Button>
  </div>

          {/* Trust line / Anchor */}
          <div className="pt-10 animate-fade-in opacity-0 [animation-delay:420ms]">
            <p className="inline-block text-sm font-semibold tracking-widest text-foreground/90 
             border-b border-foreground/50 pb-1">
              {t("hero.trustline")}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
