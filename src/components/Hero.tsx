import { useState } from "react";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import heroBg from "@/assets/u3714841198_Sleek_minimalistic_abstract_visual_inspired_by_he_53bffa3d-7c36-4acb-858b-afa6bbf35d2a_0.png";
import { ProjectSimulator } from "./ProjectSimulator";
import { HeroScrollDown } from "./HeroScrollDown";

export const Hero = () => {
  const { t } = useTranslation();
  const [simulatorOpen, setSimulatorOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* ===== Background ===== */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt=""
            className="
              w-full
              h-full
              object-cover
              brightness-[1.1]
              contrast-[1.15]
              saturate-[1.05]
            "
          />

          {/* Readability overlay — 6% */}
          <div className="absolute inset-0 bg-background/35" />

          {/* Subtle control-room gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background/10" />
        </div>

        {/* ===== Content ===== */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24">
          <div className="max-w-4xl mx-auto space-y-8">

            {/* ===== Badge ===== */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-badge-bg border border-border animate-fade-in scale-95 sm:scale-100">
              <span className="w-2 h-2 rounded-full bg-badge-dot" />
              <span className="text-sm font-medium text-muted-foreground">
                {t("hero.badge")}
              </span>
            </div>

            {/* ===== Headline ===== */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight animate-fade-in [animation-delay:120ms] opacity-0">
              {t("hero.title")}
              <span className="block text-foreground/70 mt-1 sm:mt-0">
                {t("hero.titleHighlight")}
              </span>
            </h1>

            {/* ===== Subline ===== */}
            {/* Desktop */}
            <p className="mt-6 text-lg sm:text-xl text-foreground/65 max-w-3xl mx-auto animate-fade-in opacity-0 [animation-delay:240ms] hidden sm:block">
              {t("hero.subtitle")}
            </p>

            {/* Mobile (short, higher contrast) */}
              <p className="mt-6 text-base text-foreground/80 max-w-xl mx-auto animate-fade-in opacity-0 [animation-delay:240ms] sm:hidden">
              {t("hero.subtitleMobile")}
             </p>

            {/* ===== Supporting line (desktop only) ===== */}
            <p className="text-base sm:text-lg text-foreground/55 max-w-2xl mx-auto animate-fade-in opacity-0 [animation-delay:300ms] hidden sm:block">
              {t("hero.subtitle2")}
            </p>

            {/* ===== CTA Buttons ===== */}
            <div className="pt-10 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in [animation-delay:340ms] opacity-0">
              <Button
                size="lg"
                className="
                  bg-slate-900
                  text-white
                  font-medium
                  px-6
                  py-3
                  rounded-md
                  transition-colors
                  hover:!bg-[#3A8F94]
                "
                asChild
              >
                <a href="#services" className="inline-flex items-center">
                  {t("hero.cta")}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => setSimulatorOpen(true)}
                className="
                  border-foreground/30
                  text-foreground
                  font-medium
                  px-6
                  py-3
                  rounded-md
                  transition-all
                  hover:bg-foreground/10
                  hover:border-foreground/50
                "
              >
                <Play className="mr-2 h-4 w-4" />
                {t("hero.simulatorCta")}
              </Button>
            </div>

          

          </div>
        </div>

        {/* Scroll Down Arrow - inside Hero for proper absolute positioning */}
        <HeroScrollDown />
      </section>

      {/* Project Simulator Modal */}
      <ProjectSimulator
        isOpen={simulatorOpen}
        onClose={() => setSimulatorOpen(false)}
      />
    </>
  );
};
