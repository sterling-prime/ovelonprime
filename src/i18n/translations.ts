export type Lang = "en";

type ServiceItem = {
  title: string;
  description: string;
  tags: string[];
};

type FAQItem = {
  question: string;
  answer: string;
};

export const translations: Record<Lang, any> = {
  /* ===================== EN ===================== */
  en: {
    nav: {
      services: "Sssssssservices",
      pricing: "Pricing",
      about: "About",
      contact: "Contact",
      cta: "Talk to Expert",
    },
    hero: {
      badge: "Outcome-Driven Critical Industries",
      title: "Operational complexity erodes",
      titleHighlight: "reliability and breaks execution discipline",
      subtitle:
        "When coordination turns manual, maintenance becomes reactive, and operations rely on workarounds, control is already lost.",
      subtitle2:
        "We restore predictable, disciplined execution inside live operations — without replacing core systems or disrupting daily workflows.",
      subtitleMobile: "When coordination turns manual, control is already lost.",
      cta: "Take Back Control Over Operations",
      trustline:
        "No rip-and-replace · No vendor lock-in · Operational outcomes first",
    },
    services: {
      label: "WHAT WE STABILIZE",
      title: "Operational reliability in environments",
      titleHighlight: "that cannot afford mistakes",
      subtitle:
        "We remove operational breakdowns caused by manual coordination, unclear execution, and reactive incident handling — restoring control, accountability, and predictable outcomes inside live operations.",
      items: [
        {
          title: "Request & Demand Handling",
          description:
            "Incoming requests are captured, validated, and routed consistently — without reliance on ad-hoc follow-up or individual judgment.",
          tags: ["Smart Intake control", "Qualification rules", "System Routing"],
        },
        {
          title: "Safety & Execution Standards",
          description:
            "Standardized visual instructions used to align operators, contractors, and teams on safety-critical procedures — reducing interpretation errors, deviations, and execution risk.",
          tags: [
            "HSE procedures",
            "ISO / VCA / OSHA alignment",
            "Operator & contractor onboarding",
          ],
        },
        {
          title: "Incident Handling & Escalation",
          description:
            "Issues are logged, classified, and escalated in a controlled manner — ensuring accountability, response clarity, and predictable resolution paths",
          tags: ["Issue classification", "Escalation paths", "Response ownership"],
        },
      ] as ServiceItem[],
    },
    about: {
      label: "About Us",
      title: "Built on operational expertise,",
      titleHighlight: "driven by precision",
      description1:
        "Ovelon Prime works with organizations operating under constant pressure — where downtime, delays, and manual processes directly impact cost, safety, and reliability.",
      description2:
        "We combine deep operational domain expertise with operational control layers to design systems that integrate seamlessly into existing workflows, without disrupting critical operations.",
      quote:
        "\"Precision is not optional. In environments where reliability determines outcomes, systems must be engineered to perform under pressure.\"",
      quoteAuthor: "Leadership Team · Ovelon Prime",
      stats: {
        uptime: "Operational System Uptime",
        deployments: "Automation Deployments",
        industries: "Critical Industries Served",
      },
    },
    pricing: {
      label: "Pricing",
      title: "Engagement-based pricing, with clearly defined outcomes",
      subtitle:
        "Clearly scoped engagements focused on improving reliability, reducing operational friction, and delivering measurable impact.",
      focused: {
        name: "Focused Operational Engagement",
        description:
          "A fixed-scope engagement designed to resolve a clearly defined operational bottleneck with measurable impact.",
        priceLabel: "Starting from",
        period: "one-time fee",
        cta: "Request Engagement Assessment",
        features: [
          "Single, clearly defined operational improvement",
          "Process & responsibility mapping",
          "Controlled implementation & rollout",
          "Documentation & operational handover",
          "Post-implementation validation",
        ],
      },
      enterprise: {
        name: "Enterprise Operational Program",
        description:
          "Tailored operational systems for complex organizations with strict governance, compliance, and continuity requirements.",
        priceLabel: "Tailored pricing",
        period: "one-time fee",
        cta: "Request Initial Assessment",
        badge: "Enterprise",
        features: [
          "Multi-system operational architecture",
          "Custom integrations across existing systems",
          "Dedicated implementation & transition support",
          "Compliance-aware operational design",
          "Custom SLA & governance framework",
        ],
      },
      securityNote:
        "Every engagement is built with enterprise-grade security, data protection, and operational compliance.",
      talkToExpert: "Talk to Expert",
      intakeNote:
        "Structured intake · No sales pressure · Directly with an experienced expert",
      reviewNote: "All requests are reviewed before scheduling.",
    },
    contact: {
      label: "ENGAGE",
      title: "Ready to regain control of",
      titleHighlight:" your operations?",
      subtitle: "All engagements are scoped upfront and subject to a formal review before continuation.",
      cta: "Schedule Consultation",
      guarantee: "No long-term commitments.",
      guaranteeHighlight: "Engagements continue only when operational value is demonstrated.",
      guaranteeSuffix: "on qualifying engagements.",
      enterpriseLabel: "Enterprise inquiries:",
    },
    faq: {
      title: "FAQs",
      category: "Engagement & Delivery",
      items: [
        {
          question: "How does Ovelon Prime work?",
          answer:
            "We start with a structured intake to understand the operational constraint. We design and validate a fixed-scope solution against real workflows. We implement, test under load, and hand over with full documentation.",
        },
        {
          question: "What industries do you specialize in?",
          answer:
            "We work with organizations operating in mission-critical environments, including manufacturing, logistics, and facility management. If delays, errors, or downtime directly impact safety, output, or continuity, we are in scope.",
        },
        {
          question: "Is this a subscription or ongoing service?",
          answer:
            "No. Engagements are fixed-scope and outcome-driven. There is no mandatory subscription, license dependency, or ongoing fee. You own the system after delivery.",
        },
        {
          question: "How long does a typical implementation take?",
          answer:
            "Most focused engagements are delivered within 12-16 days,depending on scope and system access. Enterprise programs follow a phased rollout aligned with operational priorities.",
        },
        {
          question: "Will this integrate with our existing systems?",
          answer:
            "Yes. Solutions are designed to integrate with existing systemswithout replacing core platforms. We work within your current tooling and data boundaries.",
        },
        {
          question: "Do we need to change our current workflows?",
          answer:
            "No. We design around your existing workflows. Where changes are required, they are minimal, documented, and validated with your operational teams before deployment.",
        },
        {
          question: "Who owns the automation after delivery?",
          answer:
            "You do. All systems, configurations, and documentation are handed over upon completion. There is no vendor lock-in. You retain full operational and technical ownership.",
        },
        {
          question: "How do you handle security and compliance?",
          answer:
            "Security and compliance are treated as design constraints, not afterthoughts. Every engagement is scoped around your existing security policies, access controls, and compliance requirements. We work within your approved infrastructure, data boundaries, and governance frameworks. No data is extracted or reused beyond the agreed scope, and all systems are delivered with full documentation to support internal audits, risk reviews, and handover.",
        },
        {
          question: "What level of internal involvement is required?",
          answer:
            "Minimal, structured involvement. We require limited input during intake to understand operational constraints and validate assumptions. Implementation is handled independently, with clear checkpoints for review and approval. Operational teams are not disrupted, and no ongoing internal resources are required after delivery.",
        },
        {
          question: "Is Ovelon Prime suitable for large enterprise environments?",
          answer:
            "Yes. We are designed for complex, multi-stakeholder environments with strict governance, compliance, and operational requirements. Engagements are structured to align with enterprise change management, security reviews, and phased rollouts — without forcing platform replacements or disrupting critical systems.",
        },
      ] as FAQItem[],
    },
    footer: {
      privacy: "Privacy",
      terms: "Terms",
      copyright: "Ovelon Prime. All rights reserved.",
    },
  },
};
  