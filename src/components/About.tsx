import aboutImage from "@/assets/manager.png";

const stats = [
  { value: "98%", label: "Operational System Uptime" },
  { value: "150+", label: "Automation Deployments" },
  { value: "12", label: "Critical Industries Served" },
];

export const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="section-label mb-4">About Us</p>
          <h2 className="section-title mb-6">
            Built on operational expertise,{" "}
            <span className="text-muted-foreground">driven by precision</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

          {/* Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ovelon Prime works with organizations operating under constant
              pressure — where downtime, delays, and manual processes directly
              impact cost, safety, and reliability.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              We combine deep operational domain expertise with advanced
              automation to design systems that integrate seamlessly into
              existing workflows, without disrupting critical operations.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-stat-value">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src={aboutImage}
                alt="Operations leadership overseeing complex automation systems"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>

        {/* Quote */}
        <div className="max-w-3xl mx-auto mt-16">
          <blockquote className="text-xl italic text-muted-foreground border-l-4 border-accent pl-6">
            “Precision is not optional. In environments where reliability
            determines outcomes, systems must be engineered to perform under
            pressure.”
          </blockquote>
          <p className="text-sm text-muted-foreground mt-4 pl-6">
            Leadership Team · Ovelon Prime
          </p>
        </div>

      </div>
    </section>
  );
};
