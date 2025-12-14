import {
  Inbox,
  Calendar,
  HeadphonesIcon,
} from "lucide-react";

const services = [
  {
    icon: Inbox,
    title: "Intake Automation",
    description:
      "Automated intake of leads, service requests, and operational inquiries across web, email, and messaging channels — structured, qualified, and routed instantly.",
    tags: ["Smart Intake", "Lead Qualification", "System Routing"],
  },
  {
    icon: Calendar,
    title: "Scheduling Automation",
    description:
      "AI-driven scheduling that eliminates manual coordination through smart booking logic, automated confirmations, and calendar optimization across teams.",
    tags: ["Smart Scheduling", "Auto Confirmations", "Calendar Sync"],
  },
  {
    icon: HeadphonesIcon,
    title: "Customer Support Automation",
    description:
      "Intelligent customer support workflows combining AI chat, ticket routing, and escalation logic to resolve issues faster with full visibility.",
    tags: ["AI Support", "Ticket Routing", "Escalation Logic"],
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
            Automation for{" "}
            <span className="text-muted-foreground">
              critical operational workflows
            </span>
          </h2>
          <p className="section-subtitle mx-auto">
            We focus on the three operational areas that create the most friction,
            cost, and complexity — and automate them end to end.
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
