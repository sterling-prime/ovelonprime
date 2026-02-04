import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { ScrollReveal } from "./ScrollReveal";

export const IndustrialTrustStrip = () => {
  const { t } = useTranslation();
  
  const brands = [
    "DOWNER GROUP",
    "GXO LOGISTICS",
    "JLL",
    "SCHNEIDER ELECTRIC",
    "BALFOUR BEATTY",
    "CUSHMAN & WAKEFIELD",
    "SIEMENS",
    "KONE",
  ];

  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let position = 0;
    let rafId: number;
    const speed = 0.3;

    const animate = () => {
      position -= speed;
      if (Math.abs(position) >= track.scrollWidth / 2) {
        position = 0;
      }
      track.style.transform = `translateX(${position}px)`;
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="w-full overflow-hidden px-6">

        {/* SECTION LABEL */}
        <ScrollReveal variant="fade-up">
          <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground text-center mb-14">
            {t("industrialTrust.heading")}
          </p>
        </ScrollReveal>

        {/* MARQUEE */}
        <ScrollReveal variant="fade-in" delay={200}>
          <div className="overflow-hidden w-full">
            <div ref={trackRef} className="flex gap-16 w-max">
              {[...brands, ...brands].map((brand, index) => (
                <span
                  key={index}
                  className="text-base font-medium tracking-[0.32em] text-foreground/40 whitespace-nowrap select-none"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* DISCLAIMER */}
        <ScrollReveal variant="fade-up" delay={300}>
          <p className="mt-16 text-xs text-muted-foreground text-center leading-relaxed max-w-sm mx-auto">
            {t("industrialTrust.disclaimer")}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};
