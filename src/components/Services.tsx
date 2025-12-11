import {
  Users,
  Calendar,
  HeadphonesIcon,
  GitBranch,
  ShieldCheck,
  FileText,
} from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Lead Intake Automation",
    description:
      "Capture and qualify leads automatically with intelligent forms, instant response systems, and seamless CRM integration.",
    tags: ["Smart Forms", "Lead Scoring", "CRM Sync"],
  },
  {
    icon: Calendar,
    title: "Scheduling Automation",
    description:
      "Eliminate scheduling conflicts with AI-powered booking, automatic reminders, and calendar optimization across teams.",
    tags: ["Smart Booking", "Auto Reminders", "Calendar Sync"],
  },
  {
    icon: HeadphonesIcon,
    title: "Customer Support Automation",
    description:
      "Deliver 24/7 support with intelligent chatbots, ticket routing, and escalation workflows that keep customers satisfied.",
    tags: ["AI Chatbots", "Ticket Routing", "Auto Escalation"],
  },
  {
    icon: GitBranch,
    title: "Complex Workflow Automation",
    description:
      "Orchestrate multi-step processes across departments with conditional logic, approvals, and real-time status tracking.",
    tags: ["Process Builder", "Approval Chains", "Status Tracking"],
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Safety Automation",
    description:
      "Maintain regulatory standards with automated audits, documentation workflows, and proactive compliance monitoring.",
    tags: ["Audit Trails", "Auto Documentation", "Risk Alerts"],
  },
  {
    icon: FileText,
    title: "Document & Report Automation",
    description:
      "Generate, process, and distribute documents automatically with templates, data extraction, and smart formatting.",
    tags: ["Auto Generation", "Data Extraction", "Smart Templates"],
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="section-label mb-4">What We Do</p>
          <h2 className="section-title mb-6">
            Automation solutions for{" "}
            <span className="text-muted-foreground">every business need</span>
          </h2>
          <p className="section-subtitle mx-auto">
            From lead capture to compliance, we build intelligent automation systems
            that scale with your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-card rounded-xl p-6 border border-border shadow-card card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground"
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
