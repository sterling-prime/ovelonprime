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

  return (
    <section className="py-20 bg-background">
      <div className="mx-auto px-6 max-w-sm">

        {/* Section label */}
        <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground text-center mb-16">
          Trusted by operators in mission-critical environments
        </p>

        {/* Mobile-only list */}
        <div className="flex flex-col items-center space-y-10">
          {brands.map((brand) => (
            <span
              key={brand}
              className="
                text-base
                font-medium
                tracking-[0.32em]
                text-foreground/40
                text-center
                leading-relaxed
                select-none
              "
            >
              {brand}
            </span>
          ))}
        </div>

        {/* Compliance disclaimer */}
        <p className="mt-16 text-xs text-muted-foreground text-center leading-relaxed">
          Representative operators from industrial, logistics, manufacturing,
          and infrastructure sectors. Engagements vary by scope and environment.
        </p>
      </div>
    </section>
  );
};
