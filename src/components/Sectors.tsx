import sector1 from "@/assets/facility.png";
import sector2 from "@/assets/mainte.png";
import sector3 from "@/assets/logistic.png";

export const Sectors = () => {
  const sectors = [
    {
      name: "Facility Management",
      description:
        "Managing distributed assets, service requests, and technical operations at scale.",
      img: sector1,
    },
    {
      name: "Maintenance & Repair",
      description:
        "Operating under reactive and preventive maintenance conditions with minimal tolerance for downtime.",
      img: sector2,
    },
    {
      name: "Logistics & Warehousing",
      description:
        "Coordinating workforce, equipment, and operational flows under strict timelines.",
      img: sector3,
    },
  ];

  return (
    <section
      id="sectors"
      className="
        bg-muted/30
        pt-12
        md:pt-16
        pb-20
      "
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="section-label mb-3">Sectors</p>

          <h2 className="section-title mb-4">
            Automation for{" "}
            <span className="text-muted-foreground">critical industries</span>
          </h2>

          <p className="section-subtitle mx-auto">
            We design and implement intelligent automation systems for complex,
            time-critical environments.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {sectors.map((sec) => (
            <div
              key={sec.name}
              className="
                group bg-card rounded-xl p-8 border border-border shadow-sm
                transition-all duration-300 hover:-translate-y-2
                hover:shadow-xl hover:border-accent/40 hover:shadow-accent/20
              "
            >
              <div className="flex justify-center">
                <img
                  src={sec.img}
                  alt={sec.name}
                  className="
                    h-20 w-20 rounded-full object-cover shadow-md mb-6
                    transition-all duration-300 group-hover:scale-110
                  "
                />
              </div>

              <h3 className="text-xl font-semibold mb-3 text-center text-foreground">
                {sec.name}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed text-center">
                {sec.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
