import {
  Inbox,
  Calendar,
  HeadphonesIcon,
} from "lucide-react";

const services = [
  {
    icon: Inbox,
    title: "Lead Intake Automation",
    description:
      "Automated capture, qualification, and routing of inbound leads and service requests — without manual handling.",
    tags: ["Smart Lead Capture", "Lead Qualification", "System Routing"],
  },
  {
    icon: Calendar,
    title: "Scheduling & Resource Automation",
    description:
      "Intelligent scheduling that optimizes people, assets, and time across complex operations. - minimizing conflicts and maximizing efficiency.",
    tags: ["Smart Scheduling", "Auto Confirmations", "Calendar Optimization"],
  },
  {
    icon: HeadphonesIcon,
    title: "Incident & Support Automation",
    description:
      "Automated incident handling, routing, and escalation for faster resolution and full operational visibility. -- reducing downtime and improving service levels.",
    tags: ["Bot Support", "Ticket Routing", "Escalation Methodology"],
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="section-label mb-4">What We Automate</p>
          <h2 className="section-title mb-6">
            Automation where{" "}
            <span className="text-muted-foreground">
              operational failure is not an option
            </span>
          </h2>
          <p className="section-subtitle mx-auto">
            We automate the workflows where downtime, delays,
            and errors are not an option.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="
                bg-card rounded-2xl p-10 border border-border 
                shadow-card card-hover text-center
                flex flex-col items-center
              "
              style={{ animationDelay: `${index * 120}ms` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-6 shadow-sm">
                <service.icon className="h-8 w-8 text-foreground" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 justify-center">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="
                      text-xs px-3 py-1 rounded-md 
                      bg-secondary text-secondary-foreground
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
