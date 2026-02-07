import { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ScrollReveal } from "./ScrollReveal";
import { cn } from "@/lib/utils";

const painPoints = [
  "problem.pain1",
  "problem.pain2",
  "problem.pain3",
  "problem.pain4",
  "problem.pain5",
];

/** Individual pain-point with its own IntersectionObserver for dot-by-dot reveal */
const PainPointItem = ({
  painKey,
  index,
}: {
  painKey: string;
  index: number;
}) => {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3, rootMargin: "0px 0px -30px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "flex items-start gap-5 p-5 border border-primary-foreground/10 transition-all",
        isVisible
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-6"
      )}
      style={{
        transitionDuration: "700ms",
        transitionDelay: `${index * 120}ms`,
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      {/* Animated dot */}
      <div className="relative mt-1.5 shrink-0">
        {/* Pulse ring */}
        <div
          className={cn(
            "absolute inset-0 rounded-full bg-accent/30 transition-all",
            isVisible ? "scale-[2.5] opacity-0" : "scale-100 opacity-0"
          )}
          style={{
            transitionDuration: "1000ms",
            transitionDelay: `${index * 120 + 400}ms`,
          }}
        />
        {/* Core dot */}
        <div
          className={cn(
            "w-2.5 h-2.5 rounded-full transition-all",
            isVisible ? "bg-accent scale-100" : "bg-primary-foreground/20 scale-50"
          )}
          style={{
            transitionDuration: "500ms",
            transitionDelay: `${index * 120 + 200}ms`,
          }}
        />
      </div>

      {/* Connector line to next dot (except last) */}
      {index < painPoints.length - 1 && (
        <div
          className={cn(
            "absolute left-[29px] md:left-[29px] w-px bg-accent/20 transition-all origin-top",
            isVisible ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
          )}
          style={{
            top: "calc(100% - 4px)",
            height: "calc(100% - 28px)",
            transitionDuration: "600ms",
            transitionDelay: `${index * 120 + 500}ms`,
          }}
        />
      )}

      <span
        className={cn(
          "text-primary-foreground/70 font-light leading-relaxed transition-colors duration-500",
          isVisible && "hover:text-primary-foreground/90"
        )}
      >
        {t(painKey)}
      </span>
    </div>
  );
};

export const ProblemSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-32 px-6 md:px-12 bg-primary">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left column - Text */}
          <ScrollReveal variant="slide-left">
            <div>
              <span className="text-xs tracking-[0.4em] text-accent/80 uppercase mb-6 block">
                {t("problem.badge")}
              </span>
              <h2 className="text-3xl md:text-4xl font-light leading-tight mb-6 text-primary-foreground">
                {t("problem.title")}
              </h2>
              <p className="text-primary-foreground/50 font-light leading-relaxed">
                {t("problem.description")}
              </p>
            </div>
          </ScrollReveal>

          {/* Right column - Pain points with dot-by-dot reveal */}
          <div className="relative space-y-0">
            {painPoints.map((painKey, index) => (
              <PainPointItem key={index} painKey={painKey} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
