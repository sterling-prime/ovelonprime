import { useEffect, useRef } from "react";

export const IndustrialTrustStrip = () => {
  const brands = [
    "DOWNER GROUP",
    "GXO LOGISTICS",
    "JLL",
    "SCHNEIDER ELECTRIC",
    "BALFOUR BEATTY",
    "GENERAL ELECTRIC",
    "VERSA MFG",
    "KONE",
    "DAIMLER",
    "SPIE",
  ];

  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let position = 0;
    let rafId: number;

    const speed = 0.3; // lager = trager, hoger = sneller

    const animate = () => {
      position -= speed;

      // reset zodra helft voorbij is
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
        <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground text-center mb-14">
          Trusted by operators in mission-critical environments
        </p>

        {/* MARQUEE */}
        <div className="overflow-hidden w-full">
          <div
            ref={trackRef}
            className="flex gap-16 w-max"
          >
            {[...brands, ...brands].map((brand, index) => (
              <span
                key={index}
                className="
                  text-base
                  font-medium
                  tracking-[0.32em]
                  text-foreground/40
                  whitespace-nowrap
                  select-none
                "
              >
                {brand}
              </span>
            ))}
          </div>
        </div>

        {/* DISCLAIMER */}
        <p className="mt-16 text-xs text-muted-foreground text-center leading-relaxed max-w-sm mx-auto">
          Representative operators from industrial, logistics, manufacturing,
          and infrastructure sectors. Engagements vary by scope and environment.
        </p>
      </div>
    </section>
  );
};
