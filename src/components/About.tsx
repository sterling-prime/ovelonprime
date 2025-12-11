import aboutImage from "@/assets/manager.png";

const stats = [
  { value: "98%", label: "System Uptime" },
  { value: "150+", label: "Deployments" },
  { value: "12", label: "Industries Served" },
];

export const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="section-label mb-4">About Us</p>
          <h2 className="section-title mb-6">
            Built on expertise,{" "}
            <span className="text-muted-foreground">driven by precision</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ovelon Prime was founded on a simple premise: AI automation should
              be accessible, reliable, and tailored to the unique demands of
              critical industries.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our team combines deep domain expertise in industrial operations
              and healthcare with cutting-edge AI capabilities. We don't just
              deploy technology—we engineer solutions that integrate seamlessly
              with your existing workflows.
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
                alt="AI technology visualization"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="max-w-3xl mx-auto mt-16 text-center">
          <blockquote className="text-xl italic text-muted-foreground border-l-4 border-accent pl-6 text-left">
            "Precision is not optional. In industries where lives and
            livelihoods depend on every decision, our systems are engineered to
            exceed expectations."
          </blockquote>
          <p className="text-sm text-muted-foreground mt-4 text-left pl-6">
            Leadership Team · Ovelon Prime
          </p>
        </div>
      </div>
    </section>
  );
};
