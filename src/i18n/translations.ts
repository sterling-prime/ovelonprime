export type Lang = "en" | "de" | "fr" | "pl";

type ServiceItem = {
  title: string;
  description: string;
  tags: string[];
};

type FAQItem = {
  question: string;
  answer: string;
};

type TestimonialItem = {
  quote: string;
  name: string;
  title: string;
};

type SectorItem = {
  name: string;
  description: string;
};

type TrustItem = {
  text: string;
};

export const translations: Record<Lang, any> = {
  /* ===================== EN ===================== */
  
  en: {

    backToTop: "Back to top",
    explore: "Explore",

    common: {
    back: "Back",
    },

    nav: {
      services: "Services",
      pricing: "Pricing",
      about: "About",
      contact: "Contact",
      cta: "Talk to Expert",
      viewDemo: "View Demo",
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
      simulatorCta: "Demand & Execution Intake",
      
    },
    video: {
      title: "Designed for uninterrupted operations",
      subtitle: "See how Ovelon Prime supports mission-critical environments without disrupting live systems.",
      cta: "Operational Fit Session",
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
    sectors: {
      label: "Sectors",
      title: "Operational Reliability For",
      titleHighlight: "Mission-Critical Industries",
      subtitle: "We support operational environments where downtime, misalignment, or delayed response directly impacts safety, continuity, or output.",
      items: [
        {
          name: "Facility Management",
          description: "Managing distributed assets and service requests across complex facilities — with limited tolerance for delay or miscoordination.",
        },
        {
          name: "Maintenance & Repair",
          description: "Operating under constant pressure to prevent downtime across reactive and preventive maintenance — often with incomplete information and tight response windows.",
        },
        {
          name: "Logistics & Warehousing",
          description: "Coordinating workforce, equipment, and workflows under strict timelines and continuous operational pressure.",
        },
      ] as SectorItem[],
    },
    testimonials: {
      title: "Client Testimonials",
      items: [
        {
          quote: "Before Ovelon Prime, shift coordination depended on individual follow-up. Today, maintenance and planning execute predictably across all shifts — without manual intervention.",
          name: "Martin Keller",
          title: "Logistics Operations Lead",
        },
        {
          quote: "In our environment, delays directly affect safety and output. Ovelon Prime helped us standardize execution across teams, reducing response time by 45% without increasing operational risk.",
          name: "Alicia Zhang",
          title: "Director of Operations",
        },
        {
          quote: "We operate under continuous pressure. Since implementing the system, routing and escalation follow fixed rules — not assumptions. Downtime caused by coordination errors is no longer a factor.",
          name: "Daniel Hoffman",
          title: "Plant Manager",
        },
      ] as TestimonialItem[],
    },
    operationalTrust: {
      heading: "Designed for regulated & safety-critical environments",
      items: [
        { text: "ISO 27001-aligned security principles" },
        { text: "ISO 9001-style process control" },
        { text: "HSE-aware operational design" },
        { text: "Audit-ready documentation & controls" },
        { text: "Full client ownership — no black-box systems" },
      ] as TrustItem[],
      footer: "Designed for CISO-reviewed environments with internal security governance, access control policies, and change-management procedures.",
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
        '"Precision is not optional. In environments where reliability determines outcomes, systems must be engineered to perform under pressure."',
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
        price: "Custom Service",
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
      titleHighlight: " your operations?",
      subtitle: "All engagements are scoped upfront and subject to a formal review before continuation.",
      cta: "Schedule Consultation",
      guarantee: "No long-term commitments.",
      guaranteeHighlight: "Engagements continue only when operational value is demonstrated",
      guaranteeSuffix: " on qualifying engagements.",
      enterpriseLabel: "Enterprise inquiries: ",
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
            "Most focused engagements are delivered within 12-16 days, depending on scope and system access. Enterprise programs follow a phased rollout aligned with operational priorities.",
        },
        {
          question: "Will this integrate with our existing systems?",
          answer:
            "Yes. Solutions are designed to integrate with existing systems without replacing core platforms. We work within your current tooling and data boundaries.",
        },
        {
          question: "Do we need to change our current workflows?",
          answer:
            "No. We design around your existing workflows. Where changes are required, they are minimal, documented, and validated with your operational teams before deployment.",
        },
        {
          question: "Who owns the optimization after delivery?",
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
      tagline: "Enterprise operating systems built for clarity, control, and scale.",
    },
    industrialTrust: {
      heading: "Trusted by operators in mission-critical environments",
      disclaimer: "Representative operators from industrial, logistics, manufacturing, and infrastructure sectors. Engagements vary by scope and environment.",
    },
    intake: {
      title: "Consultation Qualification",
      subtitle: "Please complete the short intake below. All submissions are reviewed before scheduling.",
    },
    cookie: {
      message: "We use cookies to enhance your experience. By continuing to visit this site, you agree to our use of cookies.",
      accept: "Accept",
      decline: "Decline",
      learnMore: "Learn more",
    },
    privacy: {
      title: "Privacy Policy",
      lastUpdated: "Last Updated: 01.12.2025",
      sections: {
        introduction: {
          title: "1. Introduction",
          p1: "At Ovelon Prime, we take data protection and confidentiality seriously. This Privacy Policy explains how we collect, use, and safeguard personal and business information when you interact with our website, intake forms, and services.",
          p2: "We process data responsibly and only to the extent required to deliver our services, ensure operational integrity, and meet legal obligations.",
        },
        informationCollected: {
          title: "2. Information We Collect",
          personal: "Personal Information:",
          personalDesc: "Name, business email address, phone number, and information submitted via forms or direct correspondence.",
          business: "Business & Operational Information:",
          businessDesc: "Company name, business address or jurisdiction, industry classification, operational context, and compliance-related information voluntarily provided during intake.",
          technical: "Technical Information:",
          technicalDesc: "IP address, browser and device metadata, cookies, and basic usage analytics.",
          note: "We do not intentionally collect sensitive personal data unless explicitly required for compliance or service delivery.",
        },
        howWeUse: {
          title: "3. How We Use Your Information",
          items: [
            "Assessing and qualifying consultation requests",
            "Delivering and supporting operational automation services",
            "Communicating regarding engagements, updates, or clarifications",
            "Maintaining platform reliability, security, and performance",
            "Fulfilling legal, regulatory, or contractual obligations",
          ],
          note: "We do not use your data for unsolicited marketing, profiling, or third-party advertising purposes.",
        },
        dataSharing: {
          title: "4. Data Sharing & Disclosure",
          p1: "Ovelon Prime does not sell, rent, or trade personal or business data.",
          p2: "Information may only be shared when strictly necessary:",
          items: [
            "With vetted service providers required for service delivery",
            "To comply with legal or regulatory obligations",
            "To protect the security, integrity, or rights of our systems and clients",
          ],
          note: "Data is never shared for third-party marketing or promotional purposes.",
        },
        dataSecurity: {
          title: "5. Data Security",
          p1: "We apply industry-standard technical and organizational safeguards, including encryption, access controls, and secure infrastructure practices.",
          p2: "While no system can guarantee absolute security, we operate under strict internal protocols designed to minimize risk and protect confidentiality at all times.",
        },
        dataRetention: {
          title: "6. Data Retention & Your Rights",
          p1: "We retain data only for as long as necessary to fulfill the purposes outlined in this policy or to meet legal requirements.",
          p2: "You have the right to request access, correction, or deletion of your data, where applicable.",
        },
        contact: {
          title: "7. Contact",
          p1: "For questions regarding this Privacy Policy or data handling practices, please contact:",
        },
      },
    },
    terms: {
      title: "Terms & Conditions",
      lastUpdated: "Last Updated: 01 December 2025",
      sections: {
        introduction: {
          title: "1. Introduction",
          p1: "These Terms & Conditions (\"Terms\") govern your access to and use of the Ovelon Prime website, consultation processes, and professional automation services. By accessing the website or engaging our services, you agree to be bound by these Terms.",
          p2: "If you do not agree with these Terms, you must discontinue use of the website and services immediately.",
        },
        services: {
          title: "2. Services Provided",
          p1: "Ovelon Prime provides professional automation, systems design, and implementation services for industrial, logistics, facility management, infrastructure, and other operationally critical environments.",
          p2: "All services are delivered on a project or engagement basis. Specific scope, deliverables, assumptions, and timelines are defined per engagement and may evolve based on operational requirements.",
        },
        websiteUse: {
          title: "3. Use of the Website",
          items: [
            "You may not use the website for unlawful or fraudulent purposes.",
            "You may not attempt to gain unauthorized access to systems or data.",
            "You may not scrape, reverse-engineer, disrupt, or interfere with website functionality or security mechanisms.",
          ],
        },
        clientResponsibilities: {
          title: "4. Client Responsibilities",
          items: [
            "Providing accurate, complete, and up-to-date business information.",
            "Ensuring timely access to systems, data, and stakeholders when required for delivery.",
            "Maintaining internal security controls, credential management, and access governance.",
            "Using delivered systems in compliance with applicable laws, regulations, and internal policies.",
          ],
        },
        payments: {
          title: "5. Payments & Billing",
          p1: "Unless otherwise agreed in writing, payment is required prior to the commencement of services. Custom engagements require a signed proposal and a mutually agreed payment schedule.",
          p2: "Fees are non-refundable once work has commenced, except where explicitly stated otherwise in a written agreement.",
        },
        noGuarantee: {
          title: "6. No Guarantee of Outcomes",
          p1: "While Ovelon Prime designs systems with reliability, performance, and operational efficiency in mind, no guarantees are made regarding specific operational, financial, or performance outcomes.",
        },
        ip: {
          title: "7. Intellectual Property",
          p1: "Unless otherwise agreed in writing, all methodologies, architectures, workflows, documentation, diagrams, and technical materials developed by Ovelon Prime remain our intellectual property.",
          p2: "Clients are granted a non-transferable, non-exclusive license for internal business use only.",
        },
        confidentiality: {
          title: "8. Confidentiality",
          p1: "Both parties agree to maintain strict confidentiality of all non-public business, technical, operational, and commercial information exchanged during an engagement.",
        },
        liability: {
          title: "9. Limitation of Liability",
          p1: "To the maximum extent permitted by law, Ovelon Prime shall not be liable for any indirect, incidental, special, or consequential damages.",
          p2: "Total liability shall not exceed the total fees paid for the specific service giving rise to the claim.",
        },
        thirdParty: {
          title: "10. Third-Party Tools & Integrations",
          p1: "Services may involve integrations with third-party platforms or tools. Ovelon Prime is not responsible for third-party outages, changes, or policy decisions.",
        },
        termination: {
          title: "11. Termination",
          p1: "We reserve the right to suspend or terminate services in cases of non-payment, misuse, or material breach of these Terms.",
        },
        governingLaw: {
          title: "12. Governing Law",
          p1: "These Terms are governed by the laws of the jurisdiction in which Ovelon Prime is legally established, without regard to conflict-of-law principles.",
        },
        changes: {
          title: "13. Changes to These Terms",
          p1: "We may update these Terms from time to time. Continued use of the website or services constitutes acceptance of the updated Terms.",
        },
        contactInfo: {
          title: "14. Contact Information",
          p1: "For questions regarding these Terms, please contact:",
        },
      },
    },
    demo: {
      header: "Operational Trade-Off Analysis",
      close: "Close",
      beforeAlignment: "Before Alignment",
      afterAlignment: "After Alignment",
      tradeoff: "Trade-off",
      footer: "Representative operational scenarios from industrial, logistics, and facility environments.",
      intake: {
        title: "Work Intake & Demand Handling",
        metrics: {
          coordinationTime: "Coordination Time",
          reworkCycles: "Rework Cycles",
          ownership: "Ownership",
          ownershipValue: "Defined upfront",
        },
        before: {
          title: "Fragmented intake and reactive coordination",
          text: "Work enters through emails, calls, and informal channels. Information quality varies and ownership shifts during execution.",
          bullet1: "Multiple intake paths",
          bullet2: "Manual clarification loops",
          bullet3: "Priority driven by urgency",
          bullet4: "Execution depends on individuals",
          tradeoff: "Time lost to coordination and correction.",
        },
        after: {
          title: "Structured intake with controlled execution",
          text: "Requests follow a single intake path. Information is validated upfront and ownership is assigned before execution begins.",
          bullet1: "Single structured intake",
          bullet2: "Clear classification and routing",
          bullet3: "Ownership assigned once",
          bullet4: "Predictable execution flow",
          tradeoff: "Coordination drops, execution stabilizes.",
        },
      },
      safety: {
        title: "Safety & Execution Standards",
        metrics: {
          procedureDeviations: "Procedure Deviations",
          onboardingTime: "Onboarding Time",
          consistency: "Consistency",
          consistencyValue: "Standardized",
        },
        before: {
          title: "Interpretation-based execution",
          text: "Safety procedures exist across documents and tribal knowledge. Operators interpret standards differently.",
          bullet1: "Inconsistent procedures",
          bullet2: "High reliance on senior staff",
          bullet3: "Contractors onboarded informally",
          bullet4: "Audit exposure",
          tradeoff: "Safety depends on experience, not structure.",
        },
        after: {
          title: "Standardized execution with shared understanding",
          text: "Execution standards are clear, visual, and uniform across teams and contractor groups.",
          bullet1: "Uniform execution standards",
          bullet2: "Faster onboarding",
          bullet3: "Reduced interpretation errors",
          bullet4: "Aligned safety framework",
          tradeoff: "Safety becomes repeatable and auditable.",
        },
      },
      incident: {
        title: "Incident Handling & Escalation",
        metrics: {
          escalationLoops: "Escalation Loops",
          responseTime: "Response Time",
          accountability: "Accountability",
          accountabilityValue: "Explicit",
        },
        before: {
          title: "Reactive incident handling",
          text: "Incidents are reported inconsistently and escalated manually. Responsibility is unclear and visibility is limited.",
          bullet1: "Unclear escalation thresholds",
          bullet2: "Delayed handovers",
          bullet3: "Parallel communication threads",
          bullet4: "Limited management visibility",
          tradeoff: "Incidents consume attention instead of being resolved.",
        },
        after: {
          title: "Controlled escalation with clear accountability",
          text: "Incidents are logged, classified, and escalated through predefined paths. Each step has a clear owner and response window.",
          bullet1: "Defined escalation levels",
          bullet2: "Clear ownership per incident",
          bullet3: "Predictable response timelines",
          bullet4: "Full operational visibility",
          tradeoff: "Incidents are resolved systematically.",
        },
      },
    },
    simulator: {
      title: "Demand & Execution Intake",
      close: "Close",
      back: "Back",
      next: "Continue",
      requestReview: "Request Operational Review",
      submitError: "Failed to submit request. Please try again or contact support.",
      stepIndicator: "Step {{current}} of {{total}}",
      step1: {
        title: "Operational Context",
        description: "Let's start by understanding your operational environment. Select the options that best describe your organization.",
        industryLabel: "What industry do you operate in?",
        operationLabel: "What type of operations do you run?",
        operationHint: "Select all that apply",
        scaleLabel: "What is the scale of your operations?",
      },
      step2: {
        title: "Current Operating Model",
        description: "Help us understand how you handle day-to-day work today — no judgment, just clarity.",
        handlingLabel: "How are requests, tasks, or incidents currently handled?",
        handlingHint: "Select all methods in use",
        structureLabel: "What is the level of structure in your operations?",
        toolsLabel: "What tools or systems are in use?",
      },
      step3: {
        title: "Operational Hurdles & Pain Points",
        description: "Identify where work slows down or becomes unpredictable today.",
        frictionLabel: "What causes friction in your operations?",
        frictionHint: "Select all that apply",
        notesLabel: "Additional context (optional)",
        notesPlaceholder: "Describe specific challenges or context...",
      },
      step4: {
        title: "Constraints & Requirements",
        description: "Define the boundaries and requirements that affect your operations.",
        downtimeLabel: "How sensitive are your operations to downtime?",
        complianceLabel: "What safety or compliance frameworks apply?",
        complianceHint: "Select all that apply",
        complexityLabel: "How complex is internal coordination?",
      },
      step5: {
        title: "Summary & Reflection",
        description: "Here's a summary of what you've shared — a clear snapshot of your current operational reality.",
        noData: "No data to display. Go back and complete previous steps.",
        contextTitle: "Operational Context",
        modelTitle: "Current Operating Model",
        hurdlesTitle: "Identified Hurdles",
        constraintsTitle: "Constraints & Requirements",
        industry: "Industry",
        operations: "Operations",
        scale: "Scale",
        handling: "Request Handling",
        structure: "Structure Level",
        tools: "Tools",
        downtime: "Downtime Sensitivity",
        compliance: "Compliance",
        complexity: "Coordination Complexity",
        disclaimer: "This simulation is indicative and reflects user-provided information. It does not replace professional assessment. All findings are subject to formal review.",
      },
      industries: {
        manufacturing: "Manufacturing",
        logistics: "Logistics",
        facility: "Facility Management",
        infrastructure: "Infrastructure",
        energy: "Energy & Utilities",
        other: "Other",
      },
      operationTypes: {
        facility: "Facility Operations",
        logistics: "Logistics & Warehousing",
        maintenance: "Maintenance & Repair",
        production: "Production Lines",
        fieldService: "Field Service",
      },
      scales: {
        single: "Single Site",
        multi: "Multi-Site",
        distributed: "Distributed / Regional",
      },
      handlingMethods: {
        email: "Email",
        phone: "Phone Calls",
        tickets: "Ticketing System",
        verbal: "Verbal Handoffs",
        spreadsheets: "Spreadsheets",
        erp: "ERP / CMMS System",
      },
      structureLevels: {
        adhoc: {
          title: "Mostly Ad-Hoc",
          desc: "Work is handled as it comes, minimal standardization",
        },
        semiStructured: {
          title: "Semi-Structured",
          desc: "Some processes defined, but execution varies",
        },
        fullyStructured: {
          title: "Fully Structured",
          desc: "Clear processes with consistent execution",
        },
      },
      toolTypes: {
        manual: "Mostly Manual",
        semiAutomated: "Semi-Automated",
        fragmented: "Fragmented Systems",
        integrated: "Integrated Platform",
      },
      frictionPoints: {
        slowResponse: "Slow response times",
        unclearOwnership: "Unclear task ownership",
        manualCoordination: "Excessive manual coordination",
        inconsistentExecution: "Inconsistent execution",
        lackVisibility: "Lack of real-time visibility",
        escalationDelays: "Escalation delays",
        documentationGaps: "Documentation gaps",
        communicationBreakdown: "Communication breakdown",
      },
      downtimeLevels: {
        critical: {
          title: "Critical",
          desc: "Every minute of downtime costs significantly",
        },
        high: {
          title: "High",
          desc: "Downtime seriously impacts operations",
        },
        moderate: {
          title: "Moderate",
          desc: "Some tolerance, but affects productivity",
        },
        low: {
          title: "Low",
          desc: "Can manage short-term interruptions",
        },
      },
      complianceOptions: {
        iso: "ISO 9001 / 27001",
        hse: "HSE / Health & Safety",
        osha: "OSHA",
        vca: "VCA / SCC",
        gdpr: "GDPR / Data Protection",
        sectorSpecific: "Sector-Specific Regulations",
      },
      complexityLevels: {
        simple: "Simple",
        moderate: "Moderate",
        complex: "Complex",
        veryComplex: "Very Complex",
      },
      step6: {
        title: "Operational Analysis",
        description: "Based on the information provided, here is an executive-level operational analysis of your current state.",
        noData: "Insufficient data to generate analysis. Please complete previous steps.",
        observationsTitle: "Operational Observations",
        risksTitle: "Risk & Exposure Areas",
        readinessTitle: "Execution Readiness Assessment",
        advisoryTitle: "Advisory Direction (High-Level)",
        disclaimer: "This analysis is indicative and based on self-reported information. It does not replace professional assessment. All findings are subject to formal review before engagement.",
      },
      step7: {
        title: "Contact Details",
        description: "These details are required to attach the operational analysis to a formal review request.",
        personalTitle: "Personal Information",
        companyTitle: "Company Information",
        fullName: "Full Name",
        fullNamePlaceholder: "Enter your full name",
        email: "Email Address",
        emailPlaceholder: "Enter your business email",
        phone: "Phone Number",
        phonePlaceholder: "Enter your phone number",
        companyName: "Company Name",
        companyNamePlaceholder: "Enter company name",
        role: "Role / Function",
        rolePlaceholder: "e.g. Operations Manager",
        country: "Country",
        countryPlaceholder: "Enter country",
        city: "City",
        cityPlaceholder: "Enter city",
        requiredNote: "All fields marked with * are required. Your information will only be used to process this review request.",
      },
      submitting: "Submitting...",
      analysis: {
        observations: {
          industry: {
            manufacturing: "Operating in a manufacturing environment typically involves complex production scheduling, equipment maintenance cycles, and quality control requirements.",
            logistics: "Logistics operations require tight coordination across multiple stakeholders, time-critical deliveries, and real-time visibility across supply chains.",
            facility: "Facility management operations span multiple service categories and require coordination across internal teams and external contractors.",
            infrastructure: "Infrastructure operations often involve geographically distributed assets with varying maintenance requirements and regulatory oversight.",
            energy: "Energy sector operations require strict adherence to safety protocols, regulatory compliance, and continuous monitoring of critical systems.",
            other: "Operations span multiple domains with varying requirements for coordination, compliance, and execution control.",
          },
          scale: {
            single: "Single-site operations allow for centralized control but may still face coordination challenges across shifts and departments.",
            multi: "Multi-site operations introduce complexity in standardization, communication, and ensuring consistent execution across locations.",
            distributed: "Distributed or regional operations require robust coordination mechanisms to maintain visibility and control across dispersed teams.",
          },
          structure: {
            adhoc: "Ad-hoc operational structure suggests high dependency on individual judgment and potential inconsistency in execution.",
            semiStructured: "Semi-structured processes indicate partial standardization with room for variation, which may lead to inconsistent outcomes.",
            fullyStructured: "Fully structured operations provide a foundation for predictable execution, though effectiveness depends on adherence and enforcement.",
          },
          tools: {
            fragmented: "Fragmented tooling landscape typically leads to information silos, manual data reconciliation, and coordination overhead.",
            manual: "Heavy reliance on manual processes increases error risk and limits scalability of operations.",
          },
        },
        risks: {
          predictability: "Predictability risk: Inconsistent execution and unclear ownership patterns may lead to unpredictable operational outcomes.",
          coordination: "Coordination risk: Manual coordination and communication gaps can result in delays, errors, and escalation failures.",
          downtime: "Downtime exposure: High sensitivity to downtime combined with current operational patterns suggests elevated risk of costly disruptions.",
          compliance: "Compliance exposure: Gap between compliance requirements and current structure level may create audit and regulatory risks.",
          escalation: "Escalation risk: Delays in issue resolution and limited visibility may allow minor issues to escalate into significant operational problems.",
        },
        readiness: {
          high: "The organization appears reasonably prepared for operational change, with existing structure and tools providing a foundation for improvement initiatives.",
          moderate: "The organization shows mixed readiness indicators. Some foundational elements exist, but gaps in structure or tooling may require attention before scaling changes.",
          low: "Current operational patterns suggest limited readiness for scale or significant change without first addressing foundational coordination and structure gaps.",
        },
        advisory: {
          ownership: "Consider establishing clearer ownership structures and accountability frameworks to reduce coordination overhead and improve response predictability.",
          standardization: "Focus on standardizing core operational processes to reduce variation and establish consistent execution patterns across teams.",
          escalation: "Implement structured escalation pathways with defined response windows and clear ownership at each level.",
          compliance: "Align operational structure with compliance requirements to reduce audit exposure and ensure consistent adherence to regulatory standards.",
          scale: "For multi-site or distributed operations, prioritize mechanisms that ensure consistency and visibility across locations.",
        },
      },
    },
    submission: {
      title: "Submission Received",
      body1: "Your operational review has been submitted successfully.",
      body2: "Our team will carefully review your request and follow up accordingly.",
      body3: "To accelerate next steps, you may schedule a strategic consultation below.",
      scheduleBtn: "Schedule Strategic Consultation",
      closeBtn: "Close",
    },
  },
  de: {

    backToTop: "Nach oben",
    explore: "Entdecken",

    common: {
    back: "Zurück",
    },
    nav: {
      services: "Leistungen",
      pricing: "Preise",
      about: "Über uns",
      contact: "Kontakt",
      cta: "Experten kontaktieren",
      viewDemo: "Demo ansehen",
    },
    hero: {
      badge: "Ergebnisorientierte kritische Industrien",
      title: "Operative Komplexität untergräbt",
      titleHighlight: "Zuverlässigkeit und bricht die Ausführungsdisziplin",
      subtitle:
        "Wenn Koordination manuell wird, Wartung reaktiv erfolgt und Betriebsabläufe auf Workarounds basieren, ist die Kontrolle bereits verloren.",
      subtitle2:
        "Wir stellen vorhersehbare, disziplinierte Ausführung in laufenden Betrieben wieder her — ohne Kernsysteme zu ersetzen oder tägliche Arbeitsabläufe zu stören.",
      subtitleMobile: "Wenn Koordination manuell wird, ist die Kontrolle bereits verloren.",
      cta: "Kontrolle über den Betrieb zurückgewinnen",
      simulatorCta: "Bedarfs- & Ausführungsaufnahme",
      
    },
    video: {
      title: "Konzipiert für unterbrechungsfreien Betrieb",
      subtitle: "Sehen Sie, wie Ovelon Prime missionskritische Umgebungen unterstützt, ohne laufende Systeme zu stören.",
      cta: "Operative Eignungssitzung",
    },
    services: {
      label: "WAS WIR STABILISIEREN",
      title: "Operative Zuverlässigkeit in Umgebungen",
      titleHighlight: "die sich keine Fehler leisten können",
      subtitle:
        "Wir beseitigen operative Ausfälle, die durch manuelle Koordination, unklare Ausführung und reaktive Störungsbehandlung verursacht werden — und stellen Kontrolle, Verantwortlichkeit und vorhersehbare Ergebnisse in laufenden Betrieben wieder her.",
      items: [
        {
          title: "Anfragen- & Bedarfsmanagement",
          description:
            "Eingehende Anfragen werden erfasst, validiert und konsistent weitergeleitet — ohne Abhängigkeit von Ad-hoc-Nachverfolgung oder individueller Einschätzung.",
          tags: ["Intelligente Aufnahmesteuerung", "Qualifizierungsregeln", "Systemweiterleitung"],
        },
        {
          title: "Sicherheits- & Ausführungsstandards",
          description:
            "Standardisierte visuelle Anweisungen zur Abstimmung von Bedienern, Auftragnehmern und Teams bei sicherheitskritischen Verfahren — zur Reduzierung von Interpretationsfehlern, Abweichungen und Ausführungsrisiken.",
          tags: [
            "HSE-Verfahren",
            "ISO / VCA / OSHA-Konformität",
            "Bediener- & Auftragnehmereinführung",
          ],
        },
        {
          title: "Störungsmanagement & Eskalation",
          description:
            "Probleme werden kontrolliert protokolliert, klassifiziert und eskaliert — um Verantwortlichkeit, Reaktionsklarheit und vorhersehbare Lösungswege zu gewährleisten.",
          tags: ["Problemklassifizierung", "Eskalationspfade", "Reaktionsverantwortung"],
        },
      ] as ServiceItem[],
    },
    sectors: {
      label: "Branchen",
      title: "Operative Zuverlässigkeit für",
      titleHighlight: "missionskritische Industrien",
      subtitle: "Wir unterstützen operative Umgebungen, in denen Ausfallzeiten, Fehlausrichtung oder verzögerte Reaktionen direkt Sicherheit, Kontinuität oder Leistung beeinträchtigen.",
      items: [
        {
          name: "Gebäudemanagement",
          description: "Verwaltung verteilter Anlagen und Serviceanfragen in komplexen Einrichtungen — mit geringer Toleranz für Verzögerungen oder Fehlkoordination.",
        },
        {
          name: "Wartung & Reparatur",
          description: "Betrieb unter ständigem Druck zur Vermeidung von Ausfallzeiten bei reaktiver und präventiver Wartung — oft mit unvollständigen Informationen und engen Reaktionsfenstern.",
        },
        {
          name: "Logistik & Lagerhaltung",
          description: "Koordination von Personal, Ausrüstung und Arbeitsabläufen unter strengen Zeitvorgaben und kontinuierlichem operativem Druck.",
        },
      ] as SectorItem[],
    },
    testimonials: {
      title: "Kundenstimmen",
      items: [
        {
          quote: "Vor Ovelon Prime hing die Schichtkoordination von individueller Nachverfolgung ab. Heute werden Wartung und Planung über alle Schichten hinweg vorhersehbar ausgeführt — ohne manuelle Eingriffe.",
          name: "Martin Keller",
          title: "Leiter Logistikbetrieb",
        },
        {
          quote: "In unserer Umgebung wirken sich Verzögerungen direkt auf Sicherheit und Leistung aus. Ovelon Prime hat uns geholfen, die Ausführung teamübergreifend zu standardisieren und die Reaktionszeit um 45% zu reduzieren, ohne das operative Risiko zu erhöhen.",
          name: "Alicia Zhang",
          title: "Betriebsleiterin",
        },
        {
          quote: "Wir arbeiten unter ständigem Druck. Seit der Implementierung folgen Weiterleitung und Eskalation festen Regeln — nicht Annahmen. Ausfallzeiten durch Koordinationsfehler sind kein Faktor mehr.",
          name: "Daniel Hoffman",
          title: "Werksleiter",
        },
      ] as TestimonialItem[],
    },
    operationalTrust: {
      heading: "Konzipiert für regulierte & sicherheitskritische Umgebungen",
      items: [
        { text: "ISO 27001-konforme Sicherheitsprinzipien" },
        { text: "ISO 9001-orientierte Prozesskontrolle" },
        { text: "HSE-bewusstes operatives Design" },
        { text: "Prüfungsbereite Dokumentation & Kontrollen" },
        { text: "Vollständige Kundenhoheit — keine Black-Box-Systeme" },
      ] as TrustItem[],
      footer: "Konzipiert für CISO-geprüfte Umgebungen mit interner Sicherheitsgovernance, Zugriffskontrollrichtlinien und Change-Management-Verfahren.",
    },
    about: {
      label: "Über uns",
      title: "Aufgebaut auf operativer Expertise,",
      titleHighlight: "angetrieben von Präzision",
      description1:
        "Ovelon Prime arbeitet mit Organisationen, die unter ständigem Druck operieren — wo Ausfallzeiten, Verzögerungen und manuelle Prozesse direkt Kosten, Sicherheit und Zuverlässigkeit beeinflussen.",
      description2:
        "Wir kombinieren tiefes operatives Fachwissen mit operativen Kontrollebenen, um Systeme zu entwerfen, die sich nahtlos in bestehende Arbeitsabläufe integrieren, ohne kritische Abläufe zu stören.",
      quote:
        '"Präzision ist keine Option. In Umgebungen, in denen Zuverlässigkeit Ergebnisse bestimmt, müssen Systeme so konstruiert sein, dass sie unter Druck funktionieren."',
      quoteAuthor: "Führungsteam · Ovelon Prime",
      stats: {
        uptime: "Operative Systemverfügbarkeit",
        deployments: "Automatisierungsbereitstellungen",
        industries: "Kritische Branchen bedient",
      },
    },
    pricing: {
      label: "Preise",
      title: "Engagement-basierte Preisgestaltung mit klar definierten Ergebnissen",
      subtitle:
        "Klar abgegrenzte Engagements mit Fokus auf Zuverlässigkeitssteigerung, Reduzierung operativer Reibungsverluste und messbarer Wirkung.",
      focused: {
        name: "Fokussiertes operatives Engagement",
        description:
          "Ein fest umrissenes Engagement zur Lösung eines klar definierten operativen Engpasses mit messbarer Wirkung.",
        priceLabel: "Ab",
        period: "einmalige Gebühr",
        cta: "Engagement-Bewertung anfordern",
        features: [
          "Einzelne, klar definierte operative Verbesserung",
          "Prozess- & Verantwortlichkeitszuordnung",
          "Kontrollierte Implementierung & Einführung",
          "Dokumentation & operative Übergabe",
          "Validierung nach der Implementierung",
        ],
      },
      enterprise: {
        name: "Enterprise-Betriebsprogramm",
        description:
          "Maßgeschneiderte operative Systeme für komplexe Organisationen mit strengen Governance-, Compliance- und Kontinuitätsanforderungen.",
        priceLabel: "Individuelle Preisgestaltung",
        price: "Individuelle Leistung",
        period: "einmalige Gebühr",
        cta: "Erstbewertung anfordern",
        badge: "Enterprise",
        features: [
          "Multi-System-operative Architektur",
          "Kundenspezifische Integrationen über bestehende Systeme",
          "Dedizierte Implementierungs- & Übergangsunterstützung",
          "Compliance-bewusstes operatives Design",
          "Kundenspezifisches SLA- & Governance-Framework",
        ],
      },
      securityNote:
        "Jedes Engagement wird mit Enterprise-Sicherheit, Datenschutz und operativer Compliance erstellt.",
      talkToExpert: "Experten kontaktieren",
      intakeNote:
        "Strukturierte Aufnahme · Kein Verkaufsdruck · Direkt mit einem erfahrenen Experten",
      reviewNote: "Alle Anfragen werden vor der Terminplanung geprüft.",
    },
    contact: {
      label: "ENGAGEMENT",
      title: "Bereit, die Kontrolle über",
      titleHighlight: " Ihre Betriebsabläufe zurückzugewinnen?",
      subtitle: "Alle Engagements werden im Voraus festgelegt und unterliegen einer formellen Prüfung vor der Fortsetzung.",
      cta: "Beratung vereinbaren",
      guarantee: "Keine langfristigen Verpflichtungen.",
      guaranteeHighlight: "Engagements werden nur fortgesetzt, wenn operativer Mehrwert nachgewiesen wird",
      guaranteeSuffix: " bei qualifizierenden Engagements.",
      enterpriseLabel: "Enterprise-Anfragen: ",
    },
    faq: {
      title: "Häufig gestellte Fragen",
      category: "Engagement & Lieferung",
      items: [
        {
          question: "Wie funktioniert Ovelon Prime?",
          answer:
            "Wir beginnen mit einer strukturierten Aufnahme, um die operative Einschränkung zu verstehen. Wir entwerfen und validieren eine fest umrissene Lösung anhand realer Arbeitsabläufe. Wir implementieren, testen unter Last und übergeben mit vollständiger Dokumentation.",
        },
        {
          question: "Auf welche Branchen sind Sie spezialisiert?",
          answer:
            "Wir arbeiten mit Organisationen in missionskritischen Umgebungen, einschließlich Fertigung, Logistik und Gebäudemanagement. Wenn Verzögerungen, Fehler oder Ausfallzeiten direkt Sicherheit, Leistung oder Kontinuität beeinflussen, sind wir der richtige Partner.",
        },
        {
          question: "Ist dies ein Abonnement oder ein laufender Service?",
          answer:
            "Nein. Engagements haben einen festen Umfang und sind ergebnisorientiert. Es gibt kein obligatorisches Abonnement, keine Lizenzabhängigkeit und keine laufenden Gebühren. Nach der Lieferung gehört das System Ihnen.",
        },
        {
          question: "Wie lange dauert eine typische Implementierung?",
          answer:
            "Die meisten fokussierten Engagements werden innerhalb von 12-16 Tagen geliefert, abhängig von Umfang und Systemzugang. Enterprise-Programme folgen einem phasenweisen Rollout, der auf operative Prioritäten abgestimmt ist.",
        },
        {
          question: "Wird dies mit unseren bestehenden Systemen integriert?",
          answer:
            "Ja. Lösungen sind so konzipiert, dass sie sich in bestehende Systeme integrieren, ohne Kernplattformen zu ersetzen. Wir arbeiten innerhalb Ihrer aktuellen Tools und Datengrenzen.",
        },
        {
          question: "Müssen wir unsere aktuellen Arbeitsabläufe ändern?",
          answer:
            "Nein. Wir entwerfen um Ihre bestehenden Arbeitsabläufe herum. Wo Änderungen erforderlich sind, sind sie minimal, dokumentiert und werden mit Ihren operativen Teams vor der Bereitstellung validiert.",
        },
        {
          question: "Wem gehört die Optimierung nach der Lieferung?",
          answer:
            "Ihnen. Alle Systeme, Konfigurationen und Dokumentationen werden nach Abschluss übergeben. Es gibt keine Anbieterabhängigkeit. Sie behalten die vollständige operative und technische Eigentümerschaft.",
        },
        {
          question: "Wie gehen Sie mit Sicherheit und Compliance um?",
          answer:
            "Sicherheit und Compliance werden als Designvorgaben behandelt, nicht als Nachgedanken. Jedes Engagement wird um Ihre bestehenden Sicherheitsrichtlinien, Zugriffskontrollen und Compliance-Anforderungen herum gestaltet. Wir arbeiten innerhalb Ihrer genehmigten Infrastruktur, Datengrenzen und Governance-Frameworks. Es werden keine Daten über den vereinbarten Umfang hinaus extrahiert oder wiederverwendet, und alle Systeme werden mit vollständiger Dokumentation geliefert, um interne Audits, Risikobewertungen und Übergaben zu unterstützen.",
        },
        {
          question: "Welches Maß an interner Beteiligung ist erforderlich?",
          answer:
            "Minimale, strukturierte Beteiligung. Wir benötigen begrenzte Eingaben während der Aufnahme, um operative Einschränkungen zu verstehen und Annahmen zu validieren. Die Implementierung erfolgt unabhängig, mit klaren Prüfpunkten für Überprüfung und Genehmigung. Operative Teams werden nicht gestört, und nach der Lieferung sind keine laufenden internen Ressourcen erforderlich.",
        },
        {
          question: "Ist Ovelon Prime für große Unternehmensumgebungen geeignet?",
          answer:
            "Ja. Wir sind für komplexe Multi-Stakeholder-Umgebungen mit strengen Governance-, Compliance- und operativen Anforderungen konzipiert. Engagements sind so strukturiert, dass sie sich an Enterprise-Change-Management, Sicherheitsüberprüfungen und phasenweise Rollouts anpassen — ohne Plattformersetzungen zu erzwingen oder kritische Systeme zu stören.",
        },
      ] as FAQItem[],
    },
    footer: {
      privacy: "Datenschutz",
      terms: "AGB",
      copyright: "Ovelon Prime. Alle Rechte vorbehalten.",
      tagline: "Enterprise-Betriebssysteme für Klarheit, Kontrolle und Skalierbarkeit.",
    },
    industrialTrust: {
      heading: "Vertrauenswürdig für Betreiber in missionskritischen Umgebungen",
      disclaimer: "Repräsentative Betreiber aus Industrie-, Logistik-, Fertigungs- und Infrastruktursektoren. Engagements variieren nach Umfang und Umgebung.",
    },
    intake: {
      title: "Beratungsqualifizierung",
      subtitle: "Bitte füllen Sie das kurze Formular unten aus. Alle Einsendungen werden vor der Terminplanung geprüft.",
    },
    cookie: {
      message: "Wir verwenden Cookies, um Ihre Erfahrung zu verbessern. Durch die weitere Nutzung dieser Website stimmen Sie der Verwendung von Cookies zu.",
      accept: "Akzeptieren",
      decline: "Ablehnen",
      learnMore: "Mehr erfahren",
    },
    privacy: {
      title: "Datenschutzerklärung",
      lastUpdated: "Zuletzt aktualisiert: 01.01.2026",
      sections: {
        introduction: {
          title: "1. Einleitung",
          p1: "Bei Ovelon Prime nehmen wir Datenschutz und Vertraulichkeit ernst. Diese Datenschutzerklärung erklärt, wie wir persönliche und geschäftliche Informationen erfassen, verwenden und schützen, wenn Sie mit unserer Website, Aufnahmeformularen und Dienstleistungen interagieren.",
          p2: "Wir verarbeiten Daten verantwortungsvoll und nur in dem Umfang, der für die Erbringung unserer Dienstleistungen, die Gewährleistung der operativen Integrität und die Erfüllung gesetzlicher Verpflichtungen erforderlich ist.",
        },
        informationCollected: {
          title: "2. Erfasste Informationen",
          personal: "Persönliche Informationen:",
          personalDesc: "Name, geschäftliche E-Mail-Adresse, Telefonnummer und über Formulare oder direkte Korrespondenz übermittelte Informationen.",
          business: "Geschäfts- & Betriebsinformationen:",
          businessDesc: "Firmenname, Geschäftsadresse oder Rechtsordnung, Branchenklassifizierung, operativer Kontext und freiwillig während der Aufnahme bereitgestellte Compliance-bezogene Informationen.",
          technical: "Technische Informationen:",
          technicalDesc: "IP-Adresse, Browser- und Gerätemetadaten, Cookies und grundlegende Nutzungsanalysen.",
          note: "Wir erfassen keine sensiblen personenbezogenen Daten, es sei denn, dies ist ausdrücklich für Compliance oder Serviceerbringung erforderlich.",
        },
        howWeUse: {
          title: "3. Wie wir Ihre Informationen verwenden",
          items: [
            "Bewertung und Qualifizierung von Beratungsanfragen",
            "Bereitstellung und Unterstützung von Automatisierungsdiensten",
            "Kommunikation bezüglich Engagements, Updates oder Klärungen",
            "Aufrechterhaltung von Plattformzuverlässigkeit, Sicherheit und Leistung",
            "Erfüllung gesetzlicher, regulatorischer oder vertraglicher Verpflichtungen",
          ],
          note: "Wir verwenden Ihre Daten nicht für unaufgeforderte Marketingzwecke, Profiling oder Werbung durch Dritte.",
        },
        dataSharing: {
          title: "4. Datenweitergabe & Offenlegung",
          p1: "Ovelon Prime verkauft, vermietet oder handelt nicht mit persönlichen oder geschäftlichen Daten.",
          p2: "Informationen werden nur dann weitergegeben, wenn dies unbedingt erforderlich ist:",
          items: [
            "An geprüfte Dienstleister, die für die Serviceerbringung erforderlich sind",
            "Zur Erfüllung gesetzlicher oder regulatorischer Verpflichtungen",
            "Zum Schutz der Sicherheit, Integrität oder Rechte unserer Systeme und Kunden",
          ],
          note: "Daten werden niemals für Marketing- oder Werbezwecke Dritter weitergegeben.",
        },
        dataSecurity: {
          title: "5. Datensicherheit",
          p1: "Wir wenden branchenübliche technische und organisatorische Schutzmaßnahmen an, einschließlich Verschlüsselung, Zugriffskontrollen und sicherer Infrastrukturpraktiken.",
          p2: "Obwohl kein System absolute Sicherheit garantieren kann, arbeiten wir nach strengen internen Protokollen, die darauf ausgelegt sind, Risiken zu minimieren und die Vertraulichkeit jederzeit zu schützen.",
        },
        dataRetention: {
          title: "6. Datenspeicherung & Ihre Rechte",
          p1: "Wir speichern Daten nur so lange, wie es zur Erfüllung der in dieser Richtlinie dargelegten Zwecke oder zur Erfüllung gesetzlicher Anforderungen erforderlich ist.",
          p2: "Sie haben das Recht, Zugang, Berichtigung oder Löschung Ihrer Daten zu verlangen, sofern zutreffend.",
        },
        contact: {
          title: "7. Kontakt",
          p1: "Bei Fragen zu dieser Datenschutzerklärung oder zu Datenverarbeitungspraktiken wenden Sie sich bitte an:",
        },
      },
    },
    terms: {
      title: "Allgemeine Geschäftsbedingungen",
      lastUpdated: "Zuletzt aktualisiert: 01. Dezember 2025",
      sections: {
        introduction: {
          title: "1. Einleitung",
          p1: "Diese Allgemeinen Geschäftsbedingungen (\"AGB\") regeln Ihren Zugang zu und die Nutzung der Ovelon Prime-Website, der Beratungsprozesse und der professionellen Automatisierungsdienste. Durch den Zugriff auf die Website oder die Inanspruchnahme unserer Dienste erklären Sie sich mit diesen AGB einverstanden.",
          p2: "Wenn Sie mit diesen AGB nicht einverstanden sind, müssen Sie die Nutzung der Website und der Dienste unverzüglich einstellen.",
        },
        services: {
          title: "2. Erbrachte Dienstleistungen",
          p1: "Ovelon Prime bietet professionelle Automatisierung, Systemdesign und Implementierungsdienste für industrielle, logistische, Facility-Management-, Infrastruktur- und andere betriebskritische Umgebungen.",
          p2: "Alle Dienstleistungen werden auf Projekt- oder Engagement-Basis erbracht. Spezifischer Umfang, Liefergegenstände, Annahmen und Zeitpläne werden pro Engagement definiert und können sich basierend auf operativen Anforderungen entwickeln.",
        },
        websiteUse: {
          title: "3. Nutzung der Website",
          items: [
            "Sie dürfen die Website nicht für rechtswidrige oder betrügerische Zwecke nutzen.",
            "Sie dürfen nicht versuchen, unbefugten Zugang zu Systemen oder Daten zu erlangen.",
            "Sie dürfen die Website-Funktionalität oder Sicherheitsmechanismen nicht scrapen, reverse-engineeren, stören oder beeinträchtigen.",
          ],
        },
        clientResponsibilities: {
          title: "4. Kundenpflichten",
          items: [
            "Bereitstellung genauer, vollständiger und aktueller Geschäftsinformationen.",
            "Gewährleistung des rechtzeitigen Zugangs zu Systemen, Daten und Stakeholdern, wenn dies für die Lieferung erforderlich ist.",
            "Aufrechterhaltung interner Sicherheitskontrollen, Anmeldedatenverwaltung und Zugangsgovernance.",
            "Nutzung gelieferter Systeme in Übereinstimmung mit geltenden Gesetzen, Vorschriften und internen Richtlinien.",
          ],
        },
        payments: {
          title: "5. Zahlungen & Abrechnung",
          p1: "Sofern nicht schriftlich anders vereinbart, ist die Zahlung vor Beginn der Dienstleistungen erforderlich. Kundenspezifische Engagements erfordern einen unterzeichneten Vorschlag und einen gegenseitig vereinbarten Zahlungsplan.",
          p2: "Gebühren sind nach Arbeitsbeginn nicht erstattungsfähig, es sei denn, dies ist ausdrücklich in einer schriftlichen Vereinbarung anders angegeben.",
        },
        noGuarantee: {
          title: "6. Keine Ergebnisgarantie",
          p1: "Obwohl Ovelon Prime Systeme mit Blick auf Zuverlässigkeit, Leistung und operative Effizienz entwirft, werden keine Garantien für spezifische operative, finanzielle oder leistungsbezogene Ergebnisse gegeben.",
        },
        ip: {
          title: "7. Geistiges Eigentum",
          p1: "Sofern nicht schriftlich anders vereinbart, verbleiben alle von Ovelon Prime entwickelten Methoden, Architekturen, Workflows, Dokumentationen, Diagramme und technischen Materialien in unserem geistigen Eigentum.",
          p2: "Kunden wird eine nicht übertragbare, nicht-exklusive Lizenz nur für den internen Geschäftsgebrauch gewährt.",
        },
        confidentiality: {
          title: "8. Vertraulichkeit",
          p1: "Beide Parteien verpflichten sich, alle nicht-öffentlichen geschäftlichen, technischen, operativen und kommerziellen Informationen, die während eines Engagements ausgetauscht werden, streng vertraulich zu behandeln.",
        },
        liability: {
          title: "9. Haftungsbeschränkung",
          p1: "Im maximal gesetzlich zulässigen Umfang haftet Ovelon Prime nicht für indirekte, zufällige, besondere oder Folgeschäden.",
          p2: "Die Gesamthaftung darf die Gesamtgebühren für den spezifischen Service, der den Anspruch begründet, nicht übersteigen.",
        },
        thirdParty: {
          title: "10. Drittanbieter-Tools & Integrationen",
          p1: "Dienstleistungen können Integrationen mit Drittanbieterplattformen oder -tools beinhalten. Ovelon Prime ist nicht verantwortlich für Ausfälle, Änderungen oder Richtlinienentscheidungen Dritter.",
        },
        termination: {
          title: "11. Kündigung",
          p1: "Wir behalten uns das Recht vor, Dienstleistungen bei Nichtzahlung, Missbrauch oder wesentlicher Verletzung dieser AGB auszusetzen oder zu beenden.",
        },
        governingLaw: {
          title: "12. Anwendbares Recht",
          p1: "Diese AGB unterliegen den Gesetzen der Rechtsordnung, in der Ovelon Prime rechtlich ansässig ist, ohne Berücksichtigung von Kollisionsnormen.",
        },
        changes: {
          title: "13. Änderungen dieser AGB",
          p1: "Wir können diese AGB von Zeit zu Zeit aktualisieren. Die fortgesetzte Nutzung der Website oder der Dienste gilt als Annahme der aktualisierten AGB.",
        },
        contactInfo: {
          title: "14. Kontaktinformationen",
          p1: "Bei Fragen zu diesen AGB wenden Sie sich bitte an:",
        },
      },
    },
    demo: {
      header: "Operative Kompromissanalyse",
      close: "Schließen",
      beforeAlignment: "Vor der Ausrichtung",
      afterAlignment: "Nach der Ausrichtung",
      tradeoff: "Kompromiss",
      footer: "Repräsentative Betriebsszenarien aus Industrie-, Logistik- und Gebäudeumgebungen.",
      intake: {
        title: "Arbeitsaufnahme & Bedarfssteuerung",
        metrics: {
          coordinationTime: "Koordinationszeit",
          reworkCycles: "Nacharbeitszyklen",
          ownership: "Verantwortung",
          ownershipValue: "Vorab definiert",
        },
        before: {
          title: "Fragmentierte Aufnahme und reaktive Koordination",
          text: "Arbeit kommt über E-Mails, Anrufe und informelle Kanäle. Informationsqualität variiert und Verantwortung wechselt während der Ausführung.",
          bullet1: "Mehrere Aufnahmepfade",
          bullet2: "Manuelle Klärungsschleifen",
          bullet3: "Priorität durch Dringlichkeit",
          bullet4: "Ausführung hängt von Einzelpersonen ab",
          tradeoff: "Zeitverlust durch Koordination und Korrektur.",
        },
        after: {
          title: "Strukturierte Aufnahme mit kontrollierter Ausführung",
          text: "Anfragen folgen einem einzigen Aufnahmepfad. Informationen werden vorab validiert und Verantwortung wird vor Beginn der Ausführung zugewiesen.",
          bullet1: "Einzelne strukturierte Aufnahme",
          bullet2: "Klare Klassifizierung und Weiterleitung",
          bullet3: "Verantwortung einmal zugewiesen",
          bullet4: "Vorhersehbarer Ausführungsablauf",
          tradeoff: "Koordination sinkt, Ausführung stabilisiert sich.",
        },
      },
      safety: {
        title: "Sicherheits- & Ausführungsstandards",
        metrics: {
          procedureDeviations: "Verfahrensabweichungen",
          onboardingTime: "Einarbeitungszeit",
          consistency: "Konsistenz",
          consistencyValue: "Standardisiert",
        },
        before: {
          title: "Interpretationsbasierte Ausführung",
          text: "Sicherheitsverfahren existieren in Dokumenten und Erfahrungswissen. Bediener interpretieren Standards unterschiedlich.",
          bullet1: "Inkonsistente Verfahren",
          bullet2: "Hohe Abhängigkeit von erfahrenen Mitarbeitern",
          bullet3: "Auftragnehmer informell eingearbeitet",
          bullet4: "Audit-Risiko",
          tradeoff: "Sicherheit hängt von Erfahrung ab, nicht von Struktur.",
        },
        after: {
          title: "Standardisierte Ausführung mit gemeinsamen Verständnis",
          text: "Ausführungsstandards sind klar, visuell und einheitlich über Teams und Auftragnehmergruppen hinweg.",
          bullet1: "Einheitliche Ausführungsstandards",
          bullet2: "Schnellere Einarbeitung",
          bullet3: "Reduzierte Interpretationsfehler",
          bullet4: "Abgestimmtes Sicherheitsframework",
          tradeoff: "Sicherheit wird wiederholbar und prüfbar.",
        },
      },
      incident: {
        title: "Vorfallbehandlung & Eskalation",
        metrics: {
          escalationLoops: "Eskalationsschleifen",
          responseTime: "Reaktionszeit",
          accountability: "Verantwortlichkeit",
          accountabilityValue: "Explizit",
        },
        before: {
          title: "Reaktive Vorfallbehandlung",
          text: "Vorfälle werden inkonsistent gemeldet und manuell eskaliert. Verantwortung ist unklar und Sichtbarkeit begrenzt.",
          bullet1: "Unklare Eskalationsschwellen",
          bullet2: "Verzögerte Übergaben",
          bullet3: "Parallele Kommunikationsstränge",
          bullet4: "Begrenzte Management-Sichtbarkeit",
          tradeoff: "Vorfälle binden Aufmerksamkeit statt gelöst zu werden.",
        },
        after: {
          title: "Kontrollierte Eskalation mit klarer Verantwortlichkeit",
          text: "Vorfälle werden protokolliert, klassifiziert und über vordefinierte Pfade eskaliert. Jeder Schritt hat einen klaren Verantwortlichen und ein Reaktionszeitfenster.",
          bullet1: "Definierte Eskalationsstufen",
          bullet2: "Klare Verantwortung pro Vorfall",
          bullet3: "Vorhersehbare Reaktionszeiten",
          bullet4: "Volle operative Sichtbarkeit",
          tradeoff: "Vorfälle werden systematisch gelöst.",
        },
      },
    },
    simulator: {
      title: "Bedarfs- & Ausführungsaufnahme",
      close: "Schließen",
      back: "Zurück",
      next: "Weiter",
      requestReview: "Operative Bewertung anfordern",
      submitError: "Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder kontaktieren Sie den Support.",
      stepIndicator: "Schritt {{current}} von {{total}}",
      step1: {
        title: "Operativer Kontext",
        description: "Beginnen wir damit, Ihre operative Umgebung zu verstehen. Wählen Sie die Optionen, die Ihre Organisation am besten beschreiben.",
        industryLabel: "In welcher Branche sind Sie tätig?",
        operationLabel: "Welche Art von Operationen führen Sie durch?",
        operationHint: "Wählen Sie alle zutreffenden aus",
        scaleLabel: "Wie groß ist der Umfang Ihrer Operationen?",
      },
      step2: {
        title: "Aktuelles Betriebsmodell",
        description: "Helfen Sie uns zu verstehen, wie Sie heute den täglichen Betrieb handhaben — ohne Bewertung, nur Klarheit.",
        handlingLabel: "Wie werden Anfragen, Aufgaben oder Vorfälle derzeit bearbeitet?",
        handlingHint: "Wählen Sie alle verwendeten Methoden",
        structureLabel: "Wie strukturiert sind Ihre Abläufe?",
        toolsLabel: "Welche Werkzeuge oder Systeme werden verwendet?",
      },
      step3: {
        title: "Operative Hürden & Schmerzpunkte",
        description: "Identifizieren Sie, wo die Arbeit heute verlangsamt wird oder unvorhersehbar wird.",
        frictionLabel: "Was verursacht Reibung in Ihren Abläufen?",
        frictionHint: "Wählen Sie alle zutreffenden aus",
        notesLabel: "Zusätzlicher Kontext (optional)",
        notesPlaceholder: "Beschreiben Sie spezifische Herausforderungen oder Kontext...",
      },
      step4: {
        title: "Einschränkungen & Anforderungen",
        description: "Definieren Sie die Grenzen und Anforderungen, die Ihre Abläufe beeinflussen.",
        downtimeLabel: "Wie empfindlich sind Ihre Abläufe gegenüber Ausfallzeiten?",
        complianceLabel: "Welche Sicherheits- oder Compliance-Frameworks gelten?",
        complianceHint: "Wählen Sie alle zutreffenden aus",
        complexityLabel: "Wie komplex ist die interne Koordination?",
      },
      step5: {
        title: "Zusammenfassung & Reflexion",
        description: "Hier ist eine Zusammenfassung dessen, was Sie geteilt haben — ein klares Bild Ihrer aktuellen operativen Realität.",
        noData: "Keine Daten anzuzeigen. Gehen Sie zurück und vervollständigen Sie vorherige Schritte.",
        contextTitle: "Operativer Kontext",
        modelTitle: "Aktuelles Betriebsmodell",
        hurdlesTitle: "Identifizierte Hürden",
        constraintsTitle: "Einschränkungen & Anforderungen",
        industry: "Branche",
        operations: "Operationen",
        scale: "Umfang",
        handling: "Anfragebearbeitung",
        structure: "Strukturebene",
        tools: "Werkzeuge",
        downtime: "Ausfallempfindlichkeit",
        compliance: "Compliance",
        complexity: "Koordinationskomplexität",
        disclaimer: "Diese Simulation ist indikativ und spiegelt vom Benutzer bereitgestellte Informationen wider. Sie ersetzt keine professionelle Bewertung. Alle Erkenntnisse unterliegen einer formellen Überprüfung.",
      },
      industries: {
        manufacturing: "Fertigung",
        logistics: "Logistik",
        facility: "Gebäudemanagement",
        infrastructure: "Infrastruktur",
        energy: "Energie & Versorgung",
        other: "Andere",
      },
      operationTypes: {
        facility: "Gebäudebetrieb",
        logistics: "Logistik & Lagerhaltung",
        maintenance: "Wartung & Reparatur",
        production: "Produktionslinien",
        fieldService: "Außendienst",
      },
      scales: {
        single: "Einzelstandort",
        multi: "Mehrere Standorte",
        distributed: "Verteilt / Regional",
      },
      handlingMethods: {
        email: "E-Mail",
        phone: "Telefonanrufe",
        tickets: "Ticketsystem",
        verbal: "Mündliche Übergaben",
        spreadsheets: "Tabellenkalkulationen",
        erp: "ERP / CMMS-System",
      },
      structureLevels: {
        adhoc: {
          title: "Überwiegend Ad-Hoc",
          desc: "Arbeit wird bearbeitet, wie sie anfällt, minimale Standardisierung",
        },
        semiStructured: {
          title: "Teilweise strukturiert",
          desc: "Einige Prozesse definiert, aber Ausführung variiert",
        },
        fullyStructured: {
          title: "Vollständig strukturiert",
          desc: "Klare Prozesse mit konsistenter Ausführung",
        },
      },
      toolTypes: {
        manual: "Überwiegend manuell",
        semiAutomated: "Teilweise automatisiert",
        fragmented: "Fragmentierte Systeme",
        integrated: "Integrierte Plattform",
      },
      frictionPoints: {
        slowResponse: "Langsame Reaktionszeiten",
        unclearOwnership: "Unklare Aufgabenverantwortung",
        manualCoordination: "Übermäßige manuelle Koordination",
        inconsistentExecution: "Inkonsistente Ausführung",
        lackVisibility: "Mangel an Echtzeit-Sichtbarkeit",
        escalationDelays: "Eskalationsverzögerungen",
        documentationGaps: "Dokumentationslücken",
        communicationBreakdown: "Kommunikationszusammenbruch",
      },
      downtimeLevels: {
        critical: {
          title: "Kritisch",
          desc: "Jede Minute Ausfallzeit kostet erheblich",
        },
        high: {
          title: "Hoch",
          desc: "Ausfallzeiten beeinträchtigen den Betrieb ernsthaft",
        },
        moderate: {
          title: "Moderat",
          desc: "Gewisse Toleranz, aber beeinträchtigt Produktivität",
        },
        low: {
          title: "Niedrig",
          desc: "Kann kurzfristige Unterbrechungen bewältigen",
        },
      },
      complianceOptions: {
        iso: "ISO 9001 / 27001",
        hse: "HSE / Arbeitssicherheit",
        osha: "OSHA",
        vca: "VCA / SCC",
        gdpr: "DSGVO / Datenschutz",
        sectorSpecific: "Branchenspezifische Vorschriften",
      },
      complexityLevels: {
        simple: "Einfach",
        moderate: "Moderat",
        complex: "Komplex",
        veryComplex: "Sehr komplex",
      },
      step6: {
        title: "Operative Analyse",
        description: "Basierend auf den bereitgestellten Informationen hier eine Analyse Ihres aktuellen operativen Zustands auf Führungsebene.",
        noData: "Unzureichende Daten für die Analyse. Bitte vervollständigen Sie die vorherigen Schritte.",
        observationsTitle: "Operative Beobachtungen",
        risksTitle: "Risiko- & Expositionsbereiche",
        readinessTitle: "Bewertung der Ausführungsbereitschaft",
        advisoryTitle: "Beratungsrichtung (Überblick)",
        disclaimer: "Diese Analyse ist indikativ und basiert auf selbst gemeldeten Informationen. Sie ersetzt keine professionelle Bewertung. Alle Erkenntnisse unterliegen einer formellen Überprüfung.",
      },
      step7: {
        title: "Kontaktdaten",
        description: "Diese Angaben sind erforderlich, um die operative Analyse mit einem formellen Überprüfungsantrag zu verknüpfen.",
        personalTitle: "Persönliche Informationen",
        companyTitle: "Unternehmensinformationen",
        fullName: "Vollständiger Name",
        fullNamePlaceholder: "Geben Sie Ihren vollständigen Namen ein",
        email: "E-Mail-Adresse",
        emailPlaceholder: "Geben Sie Ihre geschäftliche E-Mail ein",
        phone: "Telefonnummer",
        phonePlaceholder: "Geben Sie Ihre Telefonnummer ein",
        companyName: "Firmenname",
        companyNamePlaceholder: "Firmenname eingeben",
        role: "Position / Funktion",
        rolePlaceholder: "z.B. Betriebsleiter",
        country: "Land",
        countryPlaceholder: "Land eingeben",
        city: "Stadt",
        cityPlaceholder: "Stadt eingeben",
        requiredNote: "Alle mit * markierten Felder sind Pflichtfelder. Ihre Daten werden nur zur Bearbeitung dieser Anfrage verwendet.",
      },
      submitting: "Wird gesendet...",
      analysis: {
        observations: {
          industry: {
            manufacturing: "Der Betrieb in einer Fertigungsumgebung umfasst typischerweise komplexe Produktionsplanung, Wartungszyklen und Qualitätskontrollanforderungen.",
            logistics: "Logistikoperationen erfordern enge Koordination zwischen mehreren Beteiligten, zeitkritische Lieferungen und Echtzeit-Sichtbarkeit über Lieferketten.",
            facility: "Facility-Management-Operationen umfassen mehrere Servicekategorien und erfordern Koordination zwischen internen Teams und externen Auftragnehmern.",
            infrastructure: "Infrastrukturoperationen umfassen oft geografisch verteilte Anlagen mit unterschiedlichen Wartungsanforderungen und behördlicher Aufsicht.",
            energy: "Energiesektoroperationen erfordern strikte Einhaltung von Sicherheitsprotokollen, regulatorische Compliance und kontinuierliche Überwachung kritischer Systeme.",
            other: "Operationen erstrecken sich über mehrere Bereiche mit unterschiedlichen Anforderungen an Koordination, Compliance und Ausführungskontrolle.",
          },
          scale: {
            single: "Einzelstandortoperationen ermöglichen zentralisierte Kontrolle, können aber dennoch Koordinationsherausforderungen über Schichten und Abteilungen hinweg haben.",
            multi: "Multi-Site-Operationen führen zu Komplexität bei Standardisierung, Kommunikation und konsistenter Ausführung über Standorte hinweg.",
            distributed: "Verteilte oder regionale Operationen erfordern robuste Koordinationsmechanismen zur Aufrechterhaltung von Sichtbarkeit und Kontrolle über verteilte Teams.",
          },
          structure: {
            adhoc: "Ad-hoc-Betriebsstruktur deutet auf hohe Abhängigkeit von individuellem Urteil und potenzielle Inkonsistenz bei der Ausführung hin.",
            semiStructured: "Semi-strukturierte Prozesse zeigen teilweise Standardisierung mit Raum für Variation, was zu inkonsistenten Ergebnissen führen kann.",
            fullyStructured: "Vollständig strukturierte Operationen bieten eine Grundlage für vorhersehbare Ausführung, wobei die Wirksamkeit von Einhaltung und Durchsetzung abhängt.",
          },
          tools: {
            fragmented: "Fragmentierte Tool-Landschaft führt typischerweise zu Informationssilos, manueller Datenabstimmung und Koordinationsaufwand.",
            manual: "Starke Abhängigkeit von manuellen Prozessen erhöht das Fehlerrisiko und begrenzt die Skalierbarkeit von Operationen.",
          },
        },
        risks: {
          predictability: "Vorhersagbarkeitsrisiko: Inkonsistente Ausführung und unklare Verantwortungsmuster können zu unvorhersehbaren operativen Ergebnissen führen.",
          coordination: "Koordinationsrisiko: Manuelle Koordination und Kommunikationslücken können zu Verzögerungen, Fehlern und Eskalationsversagen führen.",
          downtime: "Ausfallzeitexposition: Hohe Empfindlichkeit gegenüber Ausfallzeiten kombiniert mit aktuellen Betriebsmustern deutet auf erhöhtes Risiko kostspieliger Störungen hin.",
          compliance: "Compliance-Exposition: Lücke zwischen Compliance-Anforderungen und aktuellem Strukturniveau kann Audit- und regulatorische Risiken schaffen.",
          escalation: "Eskalationsrisiko: Verzögerungen bei der Problemlösung und begrenzte Sichtbarkeit können kleinere Probleme zu erheblichen operativen Problemen eskalieren lassen.",
        },
        readiness: {
          high: "Die Organisation erscheint angemessen auf operative Veränderungen vorbereitet, wobei bestehende Struktur und Tools eine Grundlage für Verbesserungsinitiativen bieten.",
          moderate: "Die Organisation zeigt gemischte Bereitschaftsindikatoren. Einige Grundelemente existieren, aber Lücken in Struktur oder Tools erfordern möglicherweise Aufmerksamkeit vor Skalierung.",
          low: "Aktuelle Betriebsmuster deuten auf begrenzte Bereitschaft für Skalierung oder signifikante Veränderungen hin, ohne zuerst grundlegende Koordinations- und Strukturlücken zu adressieren.",
        },
        advisory: {
          ownership: "Erwägen Sie die Etablierung klarerer Verantwortungsstrukturen und Rechenschaftsrahmen, um Koordinationsaufwand zu reduzieren und Reaktionsvorhersehbarkeit zu verbessern.",
          standardization: "Fokussieren Sie auf die Standardisierung von Kernbetriebsprozessen, um Variation zu reduzieren und konsistente Ausführungsmuster über Teams hinweg zu etablieren.",
          escalation: "Implementieren Sie strukturierte Eskalationspfade mit definierten Reaktionsfenstern und klarer Verantwortung auf jeder Ebene.",
          compliance: "Richten Sie die operative Struktur an Compliance-Anforderungen aus, um Audit-Exposition zu reduzieren und konsistente Einhaltung regulatorischer Standards sicherzustellen.",
          scale: "Für Multi-Site- oder verteilte Operationen priorisieren Sie Mechanismen, die Konsistenz und Sichtbarkeit über Standorte hinweg gewährleisten.",
        },
      },
    },
    submission: {
      title: "Anfrage eingereicht",
      body1: "Ihre operative Überprüfung wurde erfolgreich eingereicht.",
      body2: "Unser Team wird Ihre Anfrage sorgfältig prüfen und entsprechend nachfassen.",
      body3: "Um die nächsten Schritte zu beschleunigen, können Sie unten eine strategische Beratung vereinbaren.",
      scheduleBtn: "Strategische Beratung vereinbaren",
      closeBtn: "Schließen",
    },
  },
  fr: {

    backToTop: "Haut de page",
    explore: "Explorer",

    common: {
    back: "Retour",
    },
    nav: {
      services: "Services",
      pricing: "Tarifs",
      about: "À propos",
      contact: "Contact",
      cta: "Parler à un expert",
      viewDemo: "Voir la démo",
    },
    hero: {
      badge: "Industries critiques axées sur les résultats",
      title: "La complexité opérationnelle érode",
      titleHighlight: "la fiabilité et brise la discipline d'exécution",
      subtitle:
        "Lorsque la coordination devient manuelle, que la maintenance devient réactive et que les opérations reposent sur des solutions de contournement, le contrôle est déjà perdu.",
      subtitle2:
        "Nous restaurons une exécution prévisible et disciplinée au sein des opérations en cours — sans remplacer les systèmes de base ni perturber les flux de travail quotidiens.",
      subtitleMobile: "Lorsque la coordination devient manuelle, le contrôle est déjà perdu.",
      cta: "Reprenez le contrôle de vos opérations",
      simulatorCta: "Prise en charge Demande & Exécution",

    },
    video: {
      title: "Conçu pour des opérations ininterrompues",
      subtitle: "Découvrez comment Ovelon Prime soutient les environnements critiques sans perturber les systèmes en cours.",
      cta: "Session d'adéquation opérationnelle",
    },
    services: {
      label: "CE QUE NOUS STABILISONS",
      title: "Fiabilité opérationnelle dans les environnements",
      titleHighlight: "qui ne peuvent pas se permettre d'erreurs",
      subtitle:
        "Nous éliminons les pannes opérationnelles causées par la coordination manuelle, l'exécution floue et la gestion réactive des incidents — restaurant le contrôle, la responsabilité et les résultats prévisibles dans les opérations en cours.",
      items: [
        {
          title: "Gestion des demandes et des besoins",
          description:
            "Les demandes entrantes sont capturées, validées et acheminées de manière cohérente — sans dépendre du suivi ad hoc ou du jugement individuel.",
          tags: ["Contrôle d'admission intelligent", "Règles de qualification", "Routage système"],
        },
        {
          title: "Normes de sécurité et d'exécution",
          description:
            "Instructions visuelles standardisées utilisées pour aligner les opérateurs, les sous-traitants et les équipes sur les procédures critiques pour la sécurité — réduisant les erreurs d'interprétation, les écarts et les risques d'exécution.",
          tags: [
            "Procédures HSE",
            "Alignement ISO / VCA / OSHA",
            "Intégration opérateurs et sous-traitants",
          ],
        },
        {
          title: "Gestion des incidents et escalade",
          description:
            "Les problèmes sont enregistrés, classifiés et escaladés de manière contrôlée — assurant la responsabilité, la clarté de la réponse et des chemins de résolution prévisibles.",
          tags: ["Classification des problèmes", "Chemins d'escalade", "Propriété de la réponse"],
        },
      ] as ServiceItem[],
    },
    sectors: {
      label: "Secteurs",
      title: "Fiabilité opérationnelle pour",
      titleHighlight: "les industries critiques",
      subtitle: "Nous soutenons les environnements opérationnels où les temps d'arrêt, le désalignement ou les réponses retardées impactent directement la sécurité, la continuité ou la production.",
      items: [
        {
          name: "Gestion des installations",
          description: "Gestion des actifs distribués et des demandes de service dans des installations complexes — avec une faible tolérance aux retards ou à la mauvaise coordination.",
        },
        {
          name: "Maintenance et réparation",
          description: "Opérer sous pression constante pour prévenir les temps d'arrêt dans la maintenance réactive et préventive — souvent avec des informations incomplètes et des fenêtres de réponse serrées.",
        },
        {
          name: "Logistique et entreposage",
          description: "Coordination de la main-d'œuvre, des équipements et des flux de travail sous des délais stricts et une pression opérationnelle continue.",
        },
      ] as SectorItem[],
    },
    testimonials: {
      title: "Témoignages clients",
      items: [
        {
          quote: "Avant Ovelon Prime, la coordination des équipes dépendait du suivi individuel. Aujourd'hui, la maintenance et la planification s'exécutent de manière prévisible sur toutes les équipes — sans intervention manuelle.",
          name: "Martin Keller",
          title: "Responsable des opérations logistiques",
        },
        {
          quote: "Dans notre environnement, les retards affectent directement la sécurité et la production. Ovelon Prime nous a aidés à standardiser l'exécution entre les équipes, réduisant le temps de réponse de 45% sans augmenter le risque opérationnel.",
          name: "Alicia Zhang",
          title: "Directrice des opérations",
        },
        {
          quote: "Nous opérons sous pression continue. Depuis l'implémentation du système, le routage et l'escalade suivent des règles fixes — pas des suppositions. Les temps d'arrêt causés par les erreurs de coordination ne sont plus un facteur.",
          name: "Daniel Hoffman",
          title: "Directeur d'usine",
        },
      ] as TestimonialItem[],
    },
    operationalTrust: {
      heading: "Conçu pour les environnements réglementés et critiques pour la sécurité",
      items: [
        { text: "Principes de sécurité alignés ISO 27001" },
        { text: "Contrôle des processus style ISO 9001" },
        { text: "Conception opérationnelle sensible HSE" },
        { text: "Documentation et contrôles prêts pour l'audit" },
        { text: "Propriété totale du client — pas de systèmes boîte noire" },
      ] as TrustItem[],
      footer: "Conçu pour les environnements examinés par le RSSI avec gouvernance de sécurité interne, politiques de contrôle d'accès et procédures de gestion du changement.",
    },
    about: {
      label: "À propos",
      title: "Construit sur l'expertise opérationnelle,",
      titleHighlight: "guidé par la précision",
      description1:
        "Ovelon Prime travaille avec des organisations opérant sous pression constante — où les temps d'arrêt, les retards et les processus manuels impactent directement les coûts, la sécurité et la fiabilité.",
      description2:
        "Nous combinons une expertise approfondie du domaine opérationnel avec des couches de contrôle opérationnel pour concevoir des systèmes qui s'intègrent parfaitement dans les flux de travail existants, sans perturber les opérations critiques.",
      quote:
        '"La précision n\'est pas optionnelle. Dans les environnements où la fiabilité détermine les résultats, les systèmes doivent être conçus pour fonctionner sous pression."',
      quoteAuthor: "Équipe de direction · Ovelon Prime",
      stats: {
        uptime: "Disponibilité du système opérationnel",
        deployments: "Déploiements d'automatisation",
        industries: "Industries critiques servies",
      },
    },
    pricing: {
      label: "Tarifs",
      title: "Tarification basée sur l'engagement, avec des résultats clairement définis",
      subtitle:
        "Engagements clairement définis axés sur l'amélioration de la fiabilité, la réduction des frictions opérationnelles et la création d'un impact mesurable.",
      focused: {
        name: "Engagement opérationnel ciblé",
        description:
          "Un engagement à périmètre fixe conçu pour résoudre un goulot d'étranglement opérationnel clairement défini avec un impact mesurable.",
        priceLabel: "À partir de",
        period: "frais unique",
        cta: "Demander une évaluation d'engagement",
        features: [
          "Amélioration opérationnelle unique et clairement définie",
          "Cartographie des processus et des responsabilités",
          "Implémentation et déploiement contrôlés",
          "Documentation et transfert opérationnel",
          "Validation post-implémentation",
        ],
      },
      enterprise: {
        name: "Programme opérationnel Enterprise",
        description:
          "Systèmes opérationnels sur mesure pour les organisations complexes avec des exigences strictes de gouvernance, de conformité et de continuité.",
        priceLabel: "Tarification sur mesure",
        price: "Service personnalisé",
        period: "frais unique",
        cta: "Demander une évaluation initiale",
        badge: "Enterprise",
        features: [
          "Architecture opérationnelle multi-systèmes",
          "Intégrations personnalisées avec les systèmes existants",
          "Support dédié à l'implémentation et à la transition",
          "Conception opérationnelle sensible à la conformité",
          "Framework SLA et gouvernance personnalisé",
        ],
      },
      securityNote:
        "Chaque engagement est construit avec une sécurité de niveau entreprise, une protection des données et une conformité opérationnelle.",
      talkToExpert: "Parler à un expert",
      intakeNote:
        "Admission structurée · Pas de pression commerciale · Directement avec un expert expérimenté",
      reviewNote: "Toutes les demandes sont examinées avant la planification.",
    },
    contact: {
      label: "ENGAGEMENT",
      title: "Prêt à reprendre le contrôle de",
      titleHighlight: " vos opérations ?",
      subtitle: "Tous les engagements sont définis à l'avance et soumis à un examen formel avant continuation.",
      cta: "Planifier une consultation",
      guarantee: "Pas d'engagements à long terme.",
      guaranteeHighlight: "Les engagements se poursuivent uniquement lorsque la valeur opérationnelle est démontrée",
      guaranteeSuffix: " sur les engagements qualifiants.",
      enterpriseLabel: "Demandes Enterprise : ",
    },
    faq: {
      title: "Questions fréquentes",
      category: "Engagement et livraison",
      items: [
        {
          question: "Comment fonctionne Ovelon Prime ?",
          answer:
            "Nous commençons par une admission structurée pour comprendre la contrainte opérationnelle. Nous concevons et validons une solution à périmètre fixe par rapport aux flux de travail réels. Nous implémentons, testons en charge et transférons avec une documentation complète.",
        },
        {
          question: "Dans quelles industries êtes-vous spécialisés ?",
          answer:
            "Nous travaillons avec des organisations opérant dans des environnements critiques, notamment la fabrication, la logistique et la gestion des installations. Si les retards, les erreurs ou les temps d'arrêt impactent directement la sécurité, la production ou la continuité, nous sommes le bon partenaire.",
        },
        {
          question: "Est-ce un abonnement ou un service continu ?",
          answer:
            "Non. Les engagements ont un périmètre fixe et sont axés sur les résultats. Il n'y a pas d'abonnement obligatoire, de dépendance à une licence ou de frais continus. Vous êtes propriétaire du système après la livraison.",
        },
        {
          question: "Combien de temps dure une implémentation typique ?",
          answer:
            "La plupart des engagements ciblés sont livrés dans les 12-16 jours, selon le périmètre et l'accès aux systèmes. Les programmes Enterprise suivent un déploiement progressif aligné sur les priorités opérationnelles.",
        },
        {
          question: "Cela s'intégrera-t-il à nos systèmes existants ?",
          answer:
            "Oui. Les solutions sont conçues pour s'intégrer aux systèmes existants sans remplacer les plateformes de base. Nous travaillons dans vos outils actuels et limites de données.",
        },
        {
          question: "Devons-nous changer nos flux de travail actuels ?",
          answer:
            "Non. Nous concevons autour de vos flux de travail existants. Lorsque des changements sont nécessaires, ils sont minimaux, documentés et validés avec vos équipes opérationnelles avant le déploiement.",
        },
        {
          question: "À qui appartient l'optimisation après la livraison ?",
          answer:
            "À vous. Tous les systèmes, configurations et documentations sont transférés à l'achèvement. Il n'y a pas de dépendance fournisseur. Vous conservez la propriété opérationnelle et technique complète.",
        },
        {
          question: "Comment gérez-vous la sécurité et la conformité ?",
          answer:
            "La sécurité et la conformité sont traitées comme des contraintes de conception, pas comme des réflexions après coup. Chaque engagement est conçu autour de vos politiques de sécurité existantes, de vos contrôles d'accès et de vos exigences de conformité. Nous travaillons dans votre infrastructure approuvée, vos limites de données et vos cadres de gouvernance. Aucune donnée n'est extraite ou réutilisée au-delà du périmètre convenu, et tous les systèmes sont livrés avec une documentation complète pour soutenir les audits internes, les revues de risques et les transferts.",
        },
        {
          question: "Quel niveau d'implication interne est requis ?",
          answer:
            "Une implication minimale et structurée. Nous avons besoin d'une contribution limitée pendant l'admission pour comprendre les contraintes opérationnelles et valider les hypothèses. L'implémentation est gérée de manière indépendante, avec des points de contrôle clairs pour l'examen et l'approbation. Les équipes opérationnelles ne sont pas perturbées et aucune ressource interne continue n'est requise après la livraison.",
        },
        {
          question: "Ovelon Prime convient-il aux grands environnements d'entreprise ?",
          answer:
            "Oui. Nous sommes conçus pour des environnements multi-parties prenantes complexes avec des exigences strictes de gouvernance, de conformité et opérationnelles. Les engagements sont structurés pour s'aligner sur la gestion du changement d'entreprise, les revues de sécurité et les déploiements progressifs — sans forcer les remplacements de plateformes ni perturber les systèmes critiques.",
        },
      ] as FAQItem[],
    },
    footer: {
      privacy: "Confidentialité",
      terms: "Conditions",
      copyright: "Ovelon Prime. Tous droits réservés.",
      tagline: "Systèmes d'exploitation d'entreprise conçus pour la clarté, le contrôle et l'évolutivité.",
    },
    industrialTrust: {
      heading: "Approuvé par les opérateurs dans les environnements critiques",
      disclaimer: "Opérateurs représentatifs des secteurs industriel, logistique, manufacturier et infrastructure. Les engagements varient selon la portée et l'environnement.",
    },
    intake: {
      title: "Qualification de consultation",
      subtitle: "Veuillez remplir le court formulaire ci-dessous. Toutes les soumissions sont examinées avant la planification.",
    },
    cookie: {
      message: "Nous utilisons des cookies pour améliorer votre expérience. En continuant à visiter ce site, vous acceptez notre utilisation des cookies.",
      accept: "Accepter",
      decline: "Refuser",
      learnMore: "En savoir plus",
    },
    privacy: {
      title: "Politique de confidentialité",
      lastUpdated: "Dernière mise à jour : 01.12.2025",
      sections: {
        introduction: {
          title: "1. Introduction",
          p1: "Chez Ovelon Prime, nous prenons la protection des données et la confidentialité au sérieux. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons les informations personnelles et professionnelles lorsque vous interagissez avec notre site web, nos formulaires d'admission et nos services.",
          p2: "Nous traitons les données de manière responsable et uniquement dans la mesure nécessaire pour fournir nos services, assurer l'intégrité opérationnelle et respecter les obligations légales.",
        },
        informationCollected: {
          title: "2. Informations collectées",
          personal: "Informations personnelles :",
          personalDesc: "Nom, adresse e-mail professionnelle, numéro de téléphone et informations soumises via des formulaires ou une correspondance directe.",
          business: "Informations commerciales et opérationnelles :",
          businessDesc: "Nom de l'entreprise, adresse commerciale ou juridiction, classification sectorielle, contexte opérationnel et informations liées à la conformité fournies volontairement lors de l'admission.",
          technical: "Informations techniques :",
          technicalDesc: "Adresse IP, métadonnées du navigateur et de l'appareil, cookies et analyses d'utilisation de base.",
          note: "Nous ne collectons pas intentionnellement de données personnelles sensibles sauf si cela est explicitement requis pour la conformité ou la prestation de services.",
        },
        howWeUse: {
          title: "3. Comment nous utilisons vos informations",
          items: [
            "Évaluation et qualification des demandes de consultation",
            "Fourniture et support des services d'automatisation opérationnelle",
            "Communication concernant les engagements, mises à jour ou clarifications",
            "Maintien de la fiabilité, de la sécurité et des performances de la plateforme",
            "Respect des obligations légales, réglementaires ou contractuelles",
          ],
          note: "Nous n'utilisons pas vos données à des fins de marketing non sollicité, de profilage ou de publicité par des tiers.",
        },
        dataSharing: {
          title: "4. Partage et divulgation des données",
          p1: "Ovelon Prime ne vend, ne loue ni n'échange de données personnelles ou professionnelles.",
          p2: "Les informations ne peuvent être partagées que lorsque cela est strictement nécessaire :",
          items: [
            "Avec des prestataires de services vérifiés requis pour la prestation de services",
            "Pour se conformer aux obligations légales ou réglementaires",
            "Pour protéger la sécurité, l'intégrité ou les droits de nos systèmes et clients",
          ],
          note: "Les données ne sont jamais partagées à des fins de marketing ou de promotion par des tiers.",
        },
        dataSecurity: {
          title: "5. Sécurité des données",
          p1: "Nous appliquons des mesures de protection techniques et organisationnelles conformes aux normes de l'industrie, notamment le chiffrement, les contrôles d'accès et les pratiques d'infrastructure sécurisées.",
          p2: "Bien qu'aucun système ne puisse garantir une sécurité absolue, nous opérons selon des protocoles internes stricts conçus pour minimiser les risques et protéger la confidentialité à tout moment.",
        },
        dataRetention: {
          title: "6. Conservation des données et vos droits",
          p1: "Nous conservons les données uniquement le temps nécessaire pour remplir les objectifs décrits dans cette politique ou pour répondre aux exigences légales.",
          p2: "Vous avez le droit de demander l'accès, la correction ou la suppression de vos données, le cas échéant.",
        },
        contact: {
          title: "7. Contact",
          p1: "Pour toute question concernant cette politique de confidentialité ou les pratiques de traitement des données, veuillez contacter :",
        },
      },
    },
    terms: {
      title: "Conditions générales",
      lastUpdated: "Dernière mise à jour : 01 décembre 2025",
      sections: {
        introduction: {
          title: "1. Introduction",
          p1: "Ces conditions générales (\"Conditions\") régissent votre accès et votre utilisation du site web Ovelon Prime, des processus de consultation et des services d'automatisation professionnels. En accédant au site web ou en utilisant nos services, vous acceptez d'être lié par ces Conditions.",
          p2: "Si vous n'êtes pas d'accord avec ces Conditions, vous devez cesser immédiatement d'utiliser le site web et les services.",
        },
        services: {
          title: "2. Services fournis",
          p1: "Ovelon Prime fournit des services d'automatisation professionnelle, de conception de systèmes et d'implémentation pour les environnements industriels, logistiques, de gestion des installations, d'infrastructure et autres environnements critiques sur le plan opérationnel.",
          p2: "Tous les services sont fournis sur une base de projet ou d'engagement. Le périmètre spécifique, les livrables, les hypothèses et les délais sont définis par engagement et peuvent évoluer en fonction des exigences opérationnelles.",
        },
        websiteUse: {
          title: "3. Utilisation du site web",
          items: [
            "Vous ne pouvez pas utiliser le site web à des fins illégales ou frauduleuses.",
            "Vous ne pouvez pas tenter d'obtenir un accès non autorisé aux systèmes ou aux données.",
            "Vous ne pouvez pas scraper, faire de la rétro-ingénierie, perturber ou interférer avec la fonctionnalité ou les mécanismes de sécurité du site web.",
          ],
        },
        clientResponsibilities: {
          title: "4. Responsabilités du client",
          items: [
            "Fournir des informations commerciales exactes, complètes et à jour.",
            "Assurer un accès en temps opportun aux systèmes, données et parties prenantes lorsque requis pour la livraison.",
            "Maintenir les contrôles de sécurité internes, la gestion des identifiants et la gouvernance des accès.",
            "Utiliser les systèmes livrés en conformité avec les lois applicables, les réglementations et les politiques internes.",
          ],
        },
        payments: {
          title: "5. Paiements et facturation",
          p1: "Sauf accord écrit contraire, le paiement est requis avant le début des services. Les engagements personnalisés nécessitent une proposition signée et un calendrier de paiement convenu mutuellement.",
          p2: "Les frais ne sont pas remboursables une fois le travail commencé, sauf mention explicite contraire dans un accord écrit.",
        },
        noGuarantee: {
          title: "6. Aucune garantie de résultats",
          p1: "Bien qu'Ovelon Prime conçoive des systèmes en tenant compte de la fiabilité, des performances et de l'efficacité opérationnelle, aucune garantie n'est donnée concernant des résultats opérationnels, financiers ou de performance spécifiques.",
        },
        ip: {
          title: "7. Propriété intellectuelle",
          p1: "Sauf accord écrit contraire, toutes les méthodologies, architectures, workflows, documentations, diagrammes et matériaux techniques développés par Ovelon Prime restent notre propriété intellectuelle.",
          p2: "Les clients bénéficient d'une licence non transférable et non exclusive pour un usage commercial interne uniquement.",
        },
        confidentiality: {
          title: "8. Confidentialité",
          p1: "Les deux parties conviennent de maintenir une stricte confidentialité de toutes les informations commerciales, techniques, opérationnelles et commerciales non publiques échangées pendant un engagement.",
        },
        liability: {
          title: "9. Limitation de responsabilité",
          p1: "Dans la mesure maximale permise par la loi, Ovelon Prime ne sera pas responsable des dommages indirects, accessoires, spéciaux ou consécutifs.",
          p2: "La responsabilité totale ne dépassera pas le total des frais payés pour le service spécifique donnant lieu à la réclamation.",
        },
        thirdParty: {
          title: "10. Outils et intégrations tiers",
          p1: "Les services peuvent impliquer des intégrations avec des plateformes ou outils tiers. Ovelon Prime n'est pas responsable des pannes, changements ou décisions politiques des tiers.",
        },
        termination: {
          title: "11. Résiliation",
          p1: "Nous nous réservons le droit de suspendre ou de résilier les services en cas de non-paiement, d'utilisation abusive ou de violation substantielle de ces Conditions.",
        },
        governingLaw: {
          title: "12. Droit applicable",
          p1: "Ces Conditions sont régies par les lois de la juridiction dans laquelle Ovelon Prime est légalement établie, sans tenir compte des principes de conflit de lois.",
        },
        changes: {
          title: "13. Modifications de ces Conditions",
          p1: "Nous pouvons mettre à jour ces Conditions de temps à autre. L'utilisation continue du site web ou des services constitue l'acceptation des Conditions mises à jour.",
        },
        contactInfo: {
          title: "14. Informations de contact",
          p1: "Pour toute question concernant ces Conditions, veuillez contacter :",
        },
      },
    },
    demo: {
      header: "Analyse des compromis opérationnels",
      close: "Fermer",
      beforeAlignment: "Avant l'alignement",
      afterAlignment: "Après l'alignement",
      tradeoff: "Compromis",
      footer: "Scénarios opérationnels représentatifs des environnements industriels, logistiques et de gestion des installations.",
      intake: {
        title: "Gestion des demandes et de la charge",
        metrics: {
          coordinationTime: "Temps de coordination",
          reworkCycles: "Cycles de reprise",
          ownership: "Responsabilité",
          ownershipValue: "Définie en amont",
        },
        before: {
          title: "Prise en charge fragmentée et coordination réactive",
          text: "Le travail arrive par e-mails, appels et canaux informels. La qualité des informations varie et la responsabilité change pendant l'exécution.",
          bullet1: "Multiples voies d'entrée",
          bullet2: "Boucles de clarification manuelles",
          bullet3: "Priorité dictée par l'urgence",
          bullet4: "Exécution dépend des individus",
          tradeoff: "Temps perdu en coordination et correction.",
        },
        after: {
          title: "Prise en charge structurée avec exécution contrôlée",
          text: "Les demandes suivent un seul chemin d'entrée. Les informations sont validées en amont et la responsabilité est attribuée avant le début de l'exécution.",
          bullet1: "Entrée unique structurée",
          bullet2: "Classification et routage clairs",
          bullet3: "Responsabilité attribuée une fois",
          bullet4: "Flux d'exécution prévisible",
          tradeoff: "La coordination diminue, l'exécution se stabilise.",
        },
      },
      safety: {
        title: "Normes de sécurité et d'exécution",
        metrics: {
          procedureDeviations: "Écarts de procédure",
          onboardingTime: "Temps d'intégration",
          consistency: "Cohérence",
          consistencyValue: "Standardisée",
        },
        before: {
          title: "Exécution basée sur l'interprétation",
          text: "Les procédures de sécurité existent dans des documents et le savoir tacite. Les opérateurs interprètent les normes différemment.",
          bullet1: "Procédures incohérentes",
          bullet2: "Forte dépendance au personnel expérimenté",
          bullet3: "Sous-traitants intégrés de manière informelle",
          bullet4: "Exposition aux audits",
          tradeoff: "La sécurité dépend de l'expérience, pas de la structure.",
        },
        after: {
          title: "Exécution standardisée avec compréhension partagée",
          text: "Les normes d'exécution sont claires, visuelles et uniformes entre les équipes et les groupes de sous-traitants.",
          bullet1: "Normes d'exécution uniformes",
          bullet2: "Intégration plus rapide",
          bullet3: "Erreurs d'interprétation réduites",
          bullet4: "Cadre de sécurité aligné",
          tradeoff: "La sécurité devient reproductible et auditable.",
        },
      },
      incident: {
        title: "Gestion des incidents et escalade",
        metrics: {
          escalationLoops: "Boucles d'escalade",
          responseTime: "Temps de réponse",
          accountability: "Responsabilité",
          accountabilityValue: "Explicite",
        },
        before: {
          title: "Gestion réactive des incidents",
          text: "Les incidents sont signalés de manière incohérente et escaladés manuellement. La responsabilité est floue et la visibilité limitée.",
          bullet1: "Seuils d'escalade flous",
          bullet2: "Transferts retardés",
          bullet3: "Fils de communication parallèles",
          bullet4: "Visibilité de la direction limitée",
          tradeoff: "Les incidents consomment l'attention au lieu d'être résolus.",
        },
        after: {
          title: "Escalade contrôlée avec responsabilité claire",
          text: "Les incidents sont enregistrés, classifiés et escaladés via des chemins prédéfinis. Chaque étape a un responsable clair et une fenêtre de réponse.",
          bullet1: "Niveaux d'escalade définis",
          bullet2: "Responsabilité claire par incident",
          bullet3: "Délais de réponse prévisibles",
          bullet4: "Visibilité opérationnelle complète",
          tradeoff: "Les incidents sont résolus systématiquement.",
        },
      },
    },
    simulator: {
      title: "Prise en charge Demande & Exécution",
      close: "Fermer",
      back: "Retour",
      next: "Continuer",
      requestReview: "Demander une revue opérationnelle",
      submitError: "Échec de l'envoi de la demande. Veuillez réessayer ou contacter le support.",
      stepIndicator: "Étape {{current}} sur {{total}}",
      step1: {
        title: "Contexte opérationnel",
        description: "Commençons par comprendre votre environnement opérationnel. Sélectionnez les options qui décrivent le mieux votre organisation.",
        industryLabel: "Dans quel secteur opérez-vous ?",
        operationLabel: "Quel type d'opérations menez-vous ?",
        operationHint: "Sélectionnez tout ce qui s'applique",
        scaleLabel: "Quelle est l'échelle de vos opérations ?",
      },
      step2: {
        title: "Modèle opérationnel actuel",
        description: "Aidez-nous à comprendre comment vous gérez le travail quotidien aujourd'hui — sans jugement, juste de la clarté.",
        handlingLabel: "Comment les demandes, tâches ou incidents sont-ils actuellement traités ?",
        handlingHint: "Sélectionnez toutes les méthodes utilisées",
        structureLabel: "Quel est le niveau de structure dans vos opérations ?",
        toolsLabel: "Quels outils ou systèmes sont utilisés ?",
      },
      step3: {
        title: "Obstacles opérationnels et points de friction",
        description: "Identifiez où le travail ralentit ou devient imprévisible aujourd'hui.",
        frictionLabel: "Qu'est-ce qui cause des frictions dans vos opérations ?",
        frictionHint: "Sélectionnez tout ce qui s'applique",
        notesLabel: "Contexte supplémentaire (optionnel)",
        notesPlaceholder: "Décrivez des défis spécifiques ou le contexte...",
      },
      step4: {
        title: "Contraintes et exigences",
        description: "Définissez les limites et exigences qui affectent vos opérations.",
        downtimeLabel: "À quel point vos opérations sont-elles sensibles aux temps d'arrêt ?",
        complianceLabel: "Quels cadres de sécurité ou de conformité s'appliquent ?",
        complianceHint: "Sélectionnez tout ce qui s'applique",
        complexityLabel: "Quelle est la complexité de la coordination interne ?",
      },
      step5: {
        title: "Résumé et réflexion",
        description: "Voici un résumé de ce que vous avez partagé — un aperçu clair de votre réalité opérationnelle actuelle.",
        noData: "Aucune donnée à afficher. Revenez en arrière et complétez les étapes précédentes.",
        contextTitle: "Contexte opérationnel",
        modelTitle: "Modèle opérationnel actuel",
        hurdlesTitle: "Obstacles identifiés",
        constraintsTitle: "Contraintes et exigences",
        industry: "Secteur",
        operations: "Opérations",
        scale: "Échelle",
        handling: "Traitement des demandes",
        structure: "Niveau de structure",
        tools: "Outils",
        downtime: "Sensibilité aux temps d'arrêt",
        compliance: "Conformité",
        complexity: "Complexité de coordination",
        disclaimer: "Cette simulation est indicative et reflète les informations fournies par l'utilisateur. Elle ne remplace pas une évaluation professionnelle. Toutes les conclusions sont soumises à un examen formel.",
      },
      industries: {
        manufacturing: "Fabrication",
        logistics: "Logistique",
        facility: "Gestion des installations",
        infrastructure: "Infrastructure",
        energy: "Énergie et services publics",
        other: "Autre",
      },
      operationTypes: {
        facility: "Opérations d'installations",
        logistics: "Logistique et entreposage",
        maintenance: "Maintenance et réparation",
        production: "Lignes de production",
        fieldService: "Service sur le terrain",
      },
      scales: {
        single: "Site unique",
        multi: "Multi-sites",
        distributed: "Distribué / Régional",
      },
      handlingMethods: {
        email: "Email",
        phone: "Appels téléphoniques",
        tickets: "Système de tickets",
        verbal: "Transmissions verbales",
        spreadsheets: "Tableurs",
        erp: "Système ERP / GMAO",
      },
      structureLevels: {
        adhoc: {
          title: "Principalement ad-hoc",
          desc: "Le travail est traité au fur et à mesure, standardisation minimale",
        },
        semiStructured: {
          title: "Semi-structuré",
          desc: "Certains processus définis, mais l'exécution varie",
        },
        fullyStructured: {
          title: "Entièrement structuré",
          desc: "Processus clairs avec exécution cohérente",
        },
      },
      toolTypes: {
        manual: "Principalement manuel",
        semiAutomated: "Semi-automatisé",
        fragmented: "Systèmes fragmentés",
        integrated: "Plateforme intégrée",
      },
      frictionPoints: {
        slowResponse: "Temps de réponse lents",
        unclearOwnership: "Responsabilité des tâches floue",
        manualCoordination: "Coordination manuelle excessive",
        inconsistentExecution: "Exécution incohérente",
        lackVisibility: "Manque de visibilité en temps réel",
        escalationDelays: "Retards d'escalade",
        documentationGaps: "Lacunes de documentation",
        communicationBreakdown: "Rupture de communication",
      },
      downtimeLevels: {
        critical: {
          title: "Critique",
          desc: "Chaque minute d'arrêt coûte considérablement",
        },
        high: {
          title: "Élevé",
          desc: "Les temps d'arrêt impactent sérieusement les opérations",
        },
        moderate: {
          title: "Modéré",
          desc: "Certaine tolérance, mais affecte la productivité",
        },
        low: {
          title: "Faible",
          desc: "Peut gérer des interruptions à court terme",
        },
      },
      complianceOptions: {
        iso: "ISO 9001 / 27001",
        hse: "HSE / Santé et sécurité",
        osha: "OSHA",
        vca: "VCA / SCC",
        gdpr: "RGPD / Protection des données",
        sectorSpecific: "Réglementations sectorielles",
      },
      complexityLevels: {
        simple: "Simple",
        moderate: "Modéré",
        complex: "Complexe",
        veryComplex: "Très complexe",
      },
      step6: {
        title: "Analyse opérationnelle",
        description: "Sur la base des informations fournies, voici une analyse opérationnelle de niveau exécutif de votre état actuel.",
        noData: "Données insuffisantes pour générer l'analyse. Veuillez compléter les étapes précédentes.",
        observationsTitle: "Observations opérationnelles",
        risksTitle: "Zones de risque et d'exposition",
        readinessTitle: "Évaluation de la préparation à l'exécution",
        advisoryTitle: "Direction consultative (Haut niveau)",
        disclaimer: "Cette analyse est indicative et basée sur des informations auto-déclarées. Elle ne remplace pas une évaluation professionnelle. Tous les résultats sont soumis à un examen formel.",
      },
      step7: {
        title: "Coordonnées",
        description: "Ces informations sont requises pour joindre l'analyse opérationnelle à une demande d'examen formel.",
        personalTitle: "Informations personnelles",
        companyTitle: "Informations sur l'entreprise",
        fullName: "Nom complet",
        fullNamePlaceholder: "Entrez votre nom complet",
        email: "Adresse e-mail",
        emailPlaceholder: "Entrez votre e-mail professionnel",
        phone: "Numéro de téléphone",
        phonePlaceholder: "Entrez votre numéro de téléphone",
        companyName: "Nom de l'entreprise",
        companyNamePlaceholder: "Entrez le nom de l'entreprise",
        role: "Rôle / Fonction",
        rolePlaceholder: "ex. Directeur des opérations",
        country: "Pays",
        countryPlaceholder: "Entrez le pays",
        city: "Ville",
        cityPlaceholder: "Entrez la ville",
        requiredNote: "Tous les champs marqués d'un * sont obligatoires. Vos informations seront utilisées uniquement pour traiter cette demande.",
      },
      submitting: "Envoi en cours...",
      analysis: {
        observations: {
          industry: {
            manufacturing: "L'exploitation dans un environnement manufacturier implique généralement une planification de production complexe, des cycles de maintenance d'équipement et des exigences de contrôle qualité.",
            logistics: "Les opérations logistiques nécessitent une coordination étroite entre plusieurs parties prenantes, des livraisons critiques en temps et une visibilité en temps réel sur les chaînes d'approvisionnement.",
            facility: "Les opérations de gestion des installations couvrent plusieurs catégories de services et nécessitent une coordination entre les équipes internes et les sous-traitants externes.",
            infrastructure: "Les opérations d'infrastructure impliquent souvent des actifs géographiquement distribués avec des exigences de maintenance variables et une supervision réglementaire.",
            energy: "Les opérations du secteur énergétique exigent le strict respect des protocoles de sécurité, la conformité réglementaire et la surveillance continue des systèmes critiques.",
            other: "Les opérations couvrent plusieurs domaines avec des exigences variables en matière de coordination, conformité et contrôle d'exécution.",
          },
          scale: {
            single: "Les opérations sur site unique permettent un contrôle centralisé mais peuvent encore faire face à des défis de coordination entre les équipes et les départements.",
            multi: "Les opérations multi-sites introduisent de la complexité dans la standardisation, la communication et l'assurance d'une exécution cohérente entre les sites.",
            distributed: "Les opérations distribuées ou régionales nécessitent des mécanismes de coordination robustes pour maintenir la visibilité et le contrôle sur les équipes dispersées.",
          },
          structure: {
            adhoc: "Une structure opérationnelle ad hoc suggère une forte dépendance au jugement individuel et une potentielle incohérence dans l'exécution.",
            semiStructured: "Les processus semi-structurés indiquent une standardisation partielle avec une marge de variation, ce qui peut conduire à des résultats incohérents.",
            fullyStructured: "Les opérations entièrement structurées fournissent une base pour une exécution prévisible, bien que l'efficacité dépende de l'adhésion et de l'application.",
          },
          tools: {
            fragmented: "Un paysage d'outils fragmenté conduit généralement à des silos d'information, une réconciliation manuelle des données et une surcharge de coordination.",
            manual: "Une forte dépendance aux processus manuels augmente le risque d'erreur et limite l'évolutivité des opérations.",
          },
        },
        risks: {
          predictability: "Risque de prévisibilité : Une exécution incohérente et des modèles de responsabilité flous peuvent conduire à des résultats opérationnels imprévisibles.",
          coordination: "Risque de coordination : La coordination manuelle et les lacunes de communication peuvent entraîner des retards, des erreurs et des échecs d'escalade.",
          downtime: "Exposition aux temps d'arrêt : Une haute sensibilité aux temps d'arrêt combinée aux modèles opérationnels actuels suggère un risque élevé de perturbations coûteuses.",
          compliance: "Exposition à la conformité : L'écart entre les exigences de conformité et le niveau de structure actuel peut créer des risques d'audit et réglementaires.",
          escalation: "Risque d'escalade : Les retards dans la résolution des problèmes et la visibilité limitée peuvent permettre à des problèmes mineurs de se transformer en problèmes opérationnels significatifs.",
        },
        readiness: {
          high: "L'organisation semble raisonnablement préparée au changement opérationnel, avec une structure et des outils existants fournissant une base pour les initiatives d'amélioration.",
          moderate: "L'organisation présente des indicateurs de préparation mixtes. Certains éléments fondamentaux existent, mais des lacunes dans la structure ou les outils peuvent nécessiter une attention avant de passer à l'échelle.",
          low: "Les modèles opérationnels actuels suggèrent une préparation limitée pour l'échelle ou un changement significatif sans d'abord combler les lacunes fondamentales de coordination et de structure.",
        },
        advisory: {
          ownership: "Envisagez d'établir des structures de responsabilité plus claires et des cadres de responsabilisation pour réduire la surcharge de coordination et améliorer la prévisibilité des réponses.",
          standardization: "Concentrez-vous sur la standardisation des processus opérationnels de base pour réduire la variation et établir des modèles d'exécution cohérents entre les équipes.",
          escalation: "Mettez en place des voies d'escalade structurées avec des fenêtres de réponse définies et une responsabilité claire à chaque niveau.",
          compliance: "Alignez la structure opérationnelle avec les exigences de conformité pour réduire l'exposition aux audits et assurer une adhésion cohérente aux normes réglementaires.",
          scale: "Pour les opérations multi-sites ou distribuées, priorisez les mécanismes qui assurent la cohérence et la visibilité entre les sites.",
        },
      },
    },
    submission: {
      title: "Demande reçue",
      body1: "Votre évaluation opérationnelle a été soumise avec succès.",
      body2: "Notre équipe examinera attentivement votre demande et vous recontactera en conséquence.",
      body3: "Pour accélérer les prochaines étapes, vous pouvez planifier une consultation stratégique ci-dessous.",
      scheduleBtn: "Planifier une consultation stratégique",
      closeBtn: "Fermer",
    },
  },
  pl: {
    
    backToTop: "Do góry",
    explore: "Odkryj",

    common: {
    back: "Wstecz",
    },
    nav: {
      services: "Usługi",
      pricing: "Cennik",
      about: "O nas",
      contact: "Kontakt",
      cta: "Porozmawiaj z ekspertem",
      viewDemo: "Zobacz demo",
    },
    hero: {
      badge: "Branże krytyczne zorientowane na wyniki",
      title: "Złożoność operacyjna osłabia",
      titleHighlight: "niezawodność i narusza dyscyplinę wykonania",
      subtitle:
        "Gdy koordynacja staje się ręczna, utrzymanie staje się reaktywne, a operacje opierają się na obejściach, kontrola jest już utracona.",
      subtitle2:
        "Przywracamy przewidywalne, zdyscyplinowane wykonanie w ramach działających operacji — bez wymiany podstawowych systemów ani zakłócania codziennych procesów.",
      subtitleMobile: "Gdy koordynacja staje się ręczna, kontrola jest już utracona.",
      cta: "Odzyskaj kontrolę nad operacjami",
      simulatorCta: "Przyjęcie zapotrzebowania i realizacji",
      
    },
    video: {
      title: "Zaprojektowane dla nieprzerwanego działania",
      subtitle: "Zobacz, jak Ovelon Prime wspiera środowiska krytyczne bez zakłócania działających systemów.",
      cta: "Sesja dopasowania operacyjnego",
    },
    services: {
      label: "CO STABILIZUJEMY",
      title: "Niezawodność operacyjna w środowiskach",
      titleHighlight: "które nie mogą sobie pozwolić na błędy",
      subtitle:
        "Usuwamy awarie operacyjne spowodowane ręczną koordynacją, niejasnym wykonaniem i reaktywną obsługą incydentów — przywracając kontrolę, odpowiedzialność i przewidywalne wyniki w działających operacjach.",
      items: [
        {
          title: "Obsługa zapytań i popytu",
          description:
            "Przychodzące zapytania są przechwytywane, walidowane i kierowane w sposób spójny — bez polegania na doraźnej obsłudze lub indywidualnej ocenie.",
          tags: ["Inteligentna kontrola przyjęć", "Reguły kwalifikacyjne", "Routing systemowy"],
        },
        {
          title: "Standardy bezpieczeństwa i wykonania",
          description:
            "Standaryzowane instrukcje wizualne służące do dostosowania operatorów, wykonawców i zespołów do procedur krytycznych dla bezpieczeństwa — zmniejszając błędy interpretacyjne, odchylenia i ryzyko wykonania.",
          tags: [
            "Procedury BHP",
            "Zgodność ISO / VCA / OSHA",
            "Wdrażanie operatorów i wykonawców",
          ],
        },
        {
          title: "Obsługa incydentów i eskalacja",
          description:
            "Problemy są rejestrowane, klasyfikowane i eskalowane w kontrolowany sposób — zapewniając odpowiedzialność, jasność reakcji i przewidywalne ścieżki rozwiązywania.",
          tags: ["Klasyfikacja problemów", "Ścieżki eskalacji", "Własność reakcji"],
        },
      ] as ServiceItem[],
    },
    sectors: {
      label: "Sektory",
      title: "Niezawodność operacyjna dla",
      titleHighlight: "branż o znaczeniu krytycznym",
      subtitle: "Wspieramy środowiska operacyjne, w których przestoje, brak koordynacji lub opóźniona reakcja bezpośrednio wpływają na bezpieczeństwo, ciągłość lub wydajność.",
      items: [
        {
          name: "Zarządzanie obiektami",
          description: "Zarządzanie rozproszonymi aktywami i zapytaniami serwisowymi w złożonych obiektach — z niską tolerancją na opóźnienia lub błędną koordynację.",
        },
        {
          name: "Konserwacja i naprawa",
          description: "Działanie pod ciągłą presją zapobiegania przestojom w ramach konserwacji reaktywnej i prewencyjnej — często z niepełnymi informacjami i wąskimi oknami reakcji.",
        },
        {
          name: "Logistyka i magazynowanie",
          description: "Koordynacja siły roboczej, sprzętu i przepływów pracy w ramach ścisłych harmonogramów i ciągłej presji operacyjnej.",
        },
      ] as SectorItem[],
    },
    testimonials: {
      title: "Opinie klientów",
      items: [
        {
          quote: "Przed Ovelon Prime koordynacja zmian zależała od indywidualnej obsługi. Dziś konserwacja i planowanie są realizowane przewidywalnie na wszystkich zmianach — bez ręcznej interwencji.",
          name: "Martin Keller",
          title: "Kierownik operacji logistycznych",
        },
        {
          quote: "W naszym środowisku opóźnienia bezpośrednio wpływają na bezpieczeństwo i wydajność. Ovelon Prime pomógł nam ustandaryzować wykonanie między zespołami, skracając czas reakcji o 45% bez zwiększania ryzyka operacyjnego.",
          name: "Alicia Zhang",
          title: "Dyrektor ds. operacji",
        },
        {
          quote: "Działamy pod ciągłą presją. Od wdrożenia systemu routing i eskalacja podlegają stałym regułom — nie założeniom. Przestoje spowodowane błędami koordynacji nie są już czynnikiem.",
          name: "Daniel Hoffman",
          title: "Kierownik zakładu",
        },
      ] as TestimonialItem[],
    },
    operationalTrust: {
      heading: "Zaprojektowane dla środowisk regulowanych i krytycznych dla bezpieczeństwa",
      items: [
        { text: "Zasady bezpieczeństwa zgodne z ISO 27001" },
        { text: "Kontrola procesów w stylu ISO 9001" },
        { text: "Projektowanie operacyjne świadome BHP" },
        { text: "Dokumentacja i kontrole gotowe do audytu" },
        { text: "Pełna własność klienta — bez systemów czarnej skrzynki" },
      ] as TrustItem[],
      footer: "Zaprojektowane dla środowisk przeglądanych przez CISO z wewnętrznym zarządzaniem bezpieczeństwem, politykami kontroli dostępu i procedurami zarządzania zmianami.",
    },
    about: {
      label: "O nas",
      title: "Zbudowane na wiedzy operacyjnej,",
      titleHighlight: "napędzane precyzją",
      description1:
        "Ovelon Prime współpracuje z organizacjami działającymi pod ciągłą presją — gdzie przestoje, opóźnienia i procesy manualne bezpośrednio wpływają na koszty, bezpieczeństwo i niezawodność.",
      description2:
        "Łączymy głęboką wiedzę z zakresu domeny operacyjnej z warstwami kontroli operacyjnej, aby projektować systemy, które płynnie integrują się z istniejącymi przepływami pracy, bez zakłócania krytycznych operacji.",
      quote:
        '"Precyzja nie jest opcjonalna. W środowiskach, gdzie niezawodność określa wyniki, systemy muszą być zaprojektowane do działania pod presją."',
      quoteAuthor: "Zespół kierowniczy · Ovelon Prime",
      stats: {
        uptime: "Dostępność systemu operacyjnego",
        deployments: "Wdrożenia automatyzacji",
        industries: "Obsługiwane branże krytyczne",
      },
    },
    pricing: {
      label: "Cennik",
      title: "Cennik oparty na zaangażowaniu, z jasno określonymi wynikami",
      subtitle:
        "Jasno określone zaangażowania skupione na poprawie niezawodności, zmniejszeniu tarcia operacyjnego i dostarczaniu mierzalnego wpływu.",
      focused: {
        name: "Ukierunkowane zaangażowanie operacyjne",
        description:
          "Zaangażowanie o stałym zakresie zaprojektowane w celu rozwiązania jasno określonego wąskiego gardła operacyjnego z mierzalnym wpływem.",
        priceLabel: "Od",
        period: "jednorazowa opłata",
        cta: "Poproś o ocenę zaangażowania",
        features: [
          "Pojedyncza, jasno określona poprawa operacyjna",
          "Mapowanie procesów i odpowiedzialności",
          "Kontrolowana implementacja i wdrożenie",
          "Dokumentacja i przekazanie operacyjne",
          "Walidacja po wdrożeniu",
        ],
      },
      enterprise: {
        name: "Program operacyjny Enterprise",
        description:
          "Dostosowane systemy operacyjne dla złożonych organizacji ze ścisłymi wymaganiami dotyczącymi zarządzania, zgodności i ciągłości.",
        priceLabel: "Wycena indywidualna",
        price: "Usługa niestandardowa",
        period: "jednorazowa opłata",
        cta: "Poproś o wstępną ocenę",
        badge: "Enterprise",
        features: [
          "Architektura operacyjna wielosystemowa",
          "Niestandardowe integracje z istniejącymi systemami",
          "Dedykowane wsparcie wdrożeniowe i przejściowe",
          "Projektowanie operacyjne świadome zgodności",
          "Niestandardowe ramy SLA i zarządzania",
        ],
      },
      securityNote:
        "Każde zaangażowanie jest budowane z bezpieczeństwem klasy korporacyjnej, ochroną danych i zgodnością operacyjną.",
      talkToExpert: "Porozmawiaj z ekspertem",
      intakeNote:
        "Ustrukturyzowane przyjęcie · Bez presji sprzedażowej · Bezpośrednio z doświadczonym ekspertem",
      reviewNote: "Wszystkie zapytania są przeglądane przed zaplanowaniem.",
    },
    contact: {
      label: "ZAANGAŻOWANIE",
      title: "Gotowy odzyskać kontrolę nad",
      titleHighlight: " swoimi operacjami?",
      subtitle: "Wszystkie zaangażowania są określane z góry i podlegają formalnej ocenie przed kontynuacją.",
      cta: "Zaplanuj konsultację",
      guarantee: "Bez długoterminowych zobowiązań.",
      guaranteeHighlight: "Zaangażowania kontynuują się tylko wtedy, gdy wartość operacyjna jest wykazana",
      guaranteeSuffix: " w kwalifikujących się zaangażowaniach.",
      enterpriseLabel: "Zapytania Enterprise: ",
    },
    faq: {
      title: "Często zadawane pytania",
      category: "Zaangażowanie i dostawa",
      items: [
        {
          question: "Jak działa Ovelon Prime?",
          answer:
            "Zaczynamy od ustrukturyzowanego przyjęcia, aby zrozumieć ograniczenie operacyjne. Projektujemy i walidujemy rozwiązanie o stałym zakresie w oparciu o rzeczywiste przepływy pracy. Wdrażamy, testujemy pod obciążeniem i przekazujemy z pełną dokumentacją.",
        },
        {
          question: "W jakich branżach się specjalizujecie?",
          answer:
            "Współpracujemy z organizacjami działającymi w środowiskach o znaczeniu krytycznym, w tym w produkcji, logistyce i zarządzaniu obiektami. Jeśli opóźnienia, błędy lub przestoje bezpośrednio wpływają na bezpieczeństwo, wydajność lub ciągłość, jesteśmy odpowiednim partnerem.",
        },
        {
          question: "Czy to subskrypcja czy usługa ciągła?",
          answer:
            "Nie. Zaangażowania mają stały zakres i są zorientowane na wyniki. Nie ma obowiązkowej subskrypcji, zależności od licencji ani bieżących opłat. Po dostawie system należy do Ciebie.",
        },
        {
          question: "Jak długo trwa typowa implementacja?",
          answer:
            "Większość ukierunkowanych zaangażowań jest dostarczana w ciągu 12-16 dni, w zależności od zakresu i dostępu do systemu. Programy Enterprise podlegają fazowemu wdrażaniu dostosowanemu do priorytetów operacyjnych.",
        },
        {
          question: "Czy to zintegruje się z naszymi istniejącymi systemami?",
          answer:
            "Tak. Rozwiązania są zaprojektowane do integracji z istniejącymi systemami bez wymiany podstawowych platform. Pracujemy w ramach Twoich obecnych narzędzi i granic danych.",
        },
        {
          question: "Czy musimy zmieniać nasze obecne przepływy pracy?",
          answer:
            "Nie. Projektujemy wokół Twoich istniejących przepływów pracy. Tam, gdzie wymagane są zmiany, są one minimalne, udokumentowane i walidowane z Twoimi zespołami operacyjnymi przed wdrożeniem.",
        },
        {
          question: "Kto jest właścicielem optymalizacji po dostawie?",
          answer:
            "Ty. Wszystkie systemy, konfiguracje i dokumentacja są przekazywane po zakończeniu. Nie ma uzależnienia od dostawcy. Zachowujesz pełną własność operacyjną i techniczną.",
        },
        {
          question: "Jak radzicie sobie z bezpieczeństwem i zgodnością?",
          answer:
            "Bezpieczeństwo i zgodność są traktowane jako ograniczenia projektowe, a nie przemyślenia po fakcie. Każde zaangażowanie jest projektowane wokół Twoich istniejących polityk bezpieczeństwa, kontroli dostępu i wymagań zgodności. Pracujemy w ramach Twojej zatwierdzonej infrastruktury, granic danych i ram zarządzania. Żadne dane nie są wyodrębniane ani ponownie wykorzystywane poza uzgodnionym zakresem, a wszystkie systemy są dostarczane z pełną dokumentacją wspierającą wewnętrzne audyty, przeglądy ryzyka i przekazania.",
        },
        {
          question: "Jaki poziom zaangażowania wewnętrznego jest wymagany?",
          answer:
            "Minimalne, ustrukturyzowane zaangażowanie. Wymagamy ograniczonego wkładu podczas przyjęcia, aby zrozumieć ograniczenia operacyjne i zwalidować założenia. Implementacja jest obsługiwana niezależnie, z jasnymi punktami kontrolnymi do przeglądu i zatwierdzenia. Zespoły operacyjne nie są zakłócane i po dostawie nie są wymagane żadne bieżące zasoby wewnętrzne.",
        },
        {
          question: "Czy Ovelon Prime nadaje się do dużych środowisk korporacyjnych?",
          answer:
            "Tak. Jesteśmy zaprojektowani dla złożonych środowisk wielu interesariuszy ze ścisłymi wymaganiami dotyczącymi zarządzania, zgodności i operacji. Zaangażowania są strukturyzowane tak, aby dostosować się do zarządzania zmianami w przedsiębiorstwie, przeglądów bezpieczeństwa i fazowych wdrożeń — bez wymuszania wymian platform ani zakłócania krytycznych systemów.",
        },
      ] as FAQItem[],
    },
    footer: {
      privacy: "Prywatność",
      terms: "Regulamin",
      copyright: "Ovelon Prime. Wszelkie prawa zastrzeżone.",
      tagline: "Systemy operacyjne dla przedsiębiorstw zbudowane dla jasności, kontroli i skalowalności.",
    },
    industrialTrust: {
      heading: "Zaufanie operatorów w środowiskach o znaczeniu krytycznym",
      disclaimer: "Reprezentatywni operatorzy z sektorów przemysłowego, logistycznego, produkcyjnego i infrastrukturalnego. Zaangażowania różnią się zakresem i środowiskiem.",
    },
    intake: {
      title: "Kwalifikacja konsultacji",
      subtitle: "Proszę wypełnić krótki formularz poniżej. Wszystkie zgłoszenia są sprawdzane przed zaplanowaniem.",
    },
    cookie: {
      message: "Używamy plików cookie, aby poprawić Twoje doświadczenie. Kontynuując odwiedzanie tej strony, zgadzasz się na nasze używanie plików cookie.",
      accept: "Akceptuj",
      decline: "Odrzuć",
      learnMore: "Dowiedz się więcej",
    },
    privacy: {
      title: "Polityka prywatności",
      lastUpdated: "Ostatnia aktualizacja: 01.12.2025",
      sections: {
        introduction: {
          title: "1. Wprowadzenie",
          p1: "W Ovelon Prime poważnie traktujemy ochronę danych i poufność. Niniejsza Polityka prywatności wyjaśnia, jak zbieramy, wykorzystujemy i chronimy dane osobowe i biznesowe podczas interakcji z naszą witryną, formularzami przyjęć i usługami.",
          p2: "Przetwarzamy dane odpowiedzialnie i tylko w zakresie wymaganym do świadczenia naszych usług, zapewnienia integralności operacyjnej i spełnienia zobowiązań prawnych.",
        },
        informationCollected: {
          title: "2. Zbierane informacje",
          personal: "Dane osobowe:",
          personalDesc: "Imię i nazwisko, służbowy adres e-mail, numer telefonu oraz informacje przesłane za pośrednictwem formularzy lub bezpośredniej korespondencji.",
          business: "Informacje biznesowe i operacyjne:",
          businessDesc: "Nazwa firmy, adres biznesowy lub jurysdykcja, klasyfikacja branżowa, kontekst operacyjny oraz informacje związane ze zgodnością dobrowolnie podane podczas przyjęcia.",
          technical: "Informacje techniczne:",
          technicalDesc: "Adres IP, metadane przeglądarki i urządzenia, pliki cookie oraz podstawowe analizy użytkowania.",
          note: "Nie zbieramy celowo wrażliwych danych osobowych, chyba że jest to wyraźnie wymagane do celów zgodności lub świadczenia usług.",
        },
        howWeUse: {
          title: "3. Jak wykorzystujemy Twoje informacje",
          items: [
            "Ocena i kwalifikacja zapytań konsultacyjnych",
            "Dostarczanie i wspieranie usług automatyzacji operacyjnej",
            "Komunikacja dotycząca zaangażowań, aktualizacji lub wyjaśnień",
            "Utrzymanie niezawodności, bezpieczeństwa i wydajności platformy",
            "Wypełnianie zobowiązań prawnych, regulacyjnych lub umownych",
          ],
          note: "Nie wykorzystujemy Twoich danych do celów niechcianego marketingu, profilowania ani reklamy stron trzecich.",
        },
        dataSharing: {
          title: "4. Udostępnianie i ujawnianie danych",
          p1: "Ovelon Prime nie sprzedaje, nie wynajmuje ani nie handluje danymi osobowymi lub biznesowymi.",
          p2: "Informacje mogą być udostępniane tylko wtedy, gdy jest to absolutnie konieczne:",
          items: [
            "Zweryfikowanym dostawcom usług wymaganym do świadczenia usług",
            "W celu spełnienia zobowiązań prawnych lub regulacyjnych",
            "W celu ochrony bezpieczeństwa, integralności lub praw naszych systemów i klientów",
          ],
          note: "Dane nigdy nie są udostępniane w celach marketingowych lub promocyjnych stron trzecich.",
        },
        dataSecurity: {
          title: "5. Bezpieczeństwo danych",
          p1: "Stosujemy standardowe w branży środki techniczne i organizacyjne, w tym szyfrowanie, kontrolę dostępu i bezpieczne praktyki infrastrukturalne.",
          p2: "Chociaż żaden system nie może zagwarantować absolutnego bezpieczeństwa, działamy zgodnie ze ścisłymi wewnętrznymi protokołami zaprojektowanymi w celu minimalizacji ryzyka i ochrony poufności przez cały czas.",
        },
        dataRetention: {
          title: "6. Przechowywanie danych i Twoje prawa",
          p1: "Przechowujemy dane tylko tak długo, jak jest to konieczne do realizacji celów określonych w niniejszej polityce lub do spełnienia wymogów prawnych.",
          p2: "Masz prawo żądać dostępu, poprawienia lub usunięcia swoich danych, w stosownych przypadkach.",
        },
        contact: {
          title: "7. Kontakt",
          p1: "W przypadku pytań dotyczących niniejszej Polityki prywatności lub praktyk przetwarzania danych prosimy o kontakt:",
        },
      },
    },
    terms: {
      title: "Regulamin",
      lastUpdated: "Ostatnia aktualizacja: 01 grudnia 2025",
      sections: {
        introduction: {
          title: "1. Wprowadzenie",
          p1: "Niniejszy Regulamin (\"Regulamin\") reguluje dostęp do i korzystanie z witryny Ovelon Prime, procesów konsultacyjnych i profesjonalnych usług automatyzacji. Uzyskując dostęp do witryny lub korzystając z naszych usług, zgadzasz się na związanie niniejszym Regulaminem.",
          p2: "Jeśli nie zgadzasz się z niniejszym Regulaminem, musisz natychmiast zaprzestać korzystania z witryny i usług.",
        },
        services: {
          title: "2. Świadczone usługi",
          p1: "Ovelon Prime świadczy profesjonalne usługi automatyzacji, projektowania systemów i wdrażania dla środowisk przemysłowych, logistycznych, zarządzania obiektami, infrastruktury i innych środowisk o znaczeniu krytycznym.",
          p2: "Wszystkie usługi są świadczone na zasadzie projektu lub zaangażowania. Konkretny zakres, produkty, założenia i harmonogramy są definiowane dla każdego zaangażowania i mogą ewoluować w oparciu o wymagania operacyjne.",
        },
        websiteUse: {
          title: "3. Korzystanie z witryny",
          items: [
            "Nie możesz korzystać z witryny w celach niezgodnych z prawem lub oszukańczych.",
            "Nie możesz próbować uzyskać nieautoryzowanego dostępu do systemów lub danych.",
            "Nie możesz scrapować, dokonywać inżynierii wstecznej, zakłócać ani ingerować w funkcjonalność witryny lub mechanizmy bezpieczeństwa.",
          ],
        },
        clientResponsibilities: {
          title: "4. Obowiązki klienta",
          items: [
            "Dostarczanie dokładnych, kompletnych i aktualnych informacji biznesowych.",
            "Zapewnienie terminowego dostępu do systemów, danych i interesariuszy, gdy jest to wymagane do dostawy.",
            "Utrzymywanie wewnętrznych kontroli bezpieczeństwa, zarządzania poświadczeniami i zarządzania dostępem.",
            "Korzystanie z dostarczonych systemów zgodnie z obowiązującym prawem, przepisami i wewnętrznymi politykami.",
          ],
        },
        payments: {
          title: "5. Płatności i rozliczenia",
          p1: "O ile nie uzgodniono inaczej na piśmie, płatność jest wymagana przed rozpoczęciem usług. Niestandardowe zaangażowania wymagają podpisanej propozycji i wzajemnie uzgodnionego harmonogramu płatności.",
          p2: "Opłaty nie podlegają zwrotowi po rozpoczęciu prac, chyba że wyraźnie określono inaczej w pisemnej umowie.",
        },
        noGuarantee: {
          title: "6. Brak gwarancji wyników",
          p1: "Chociaż Ovelon Prime projektuje systemy z myślą o niezawodności, wydajności i efektywności operacyjnej, nie udziela się żadnych gwarancji dotyczących konkretnych wyników operacyjnych, finansowych lub wydajnościowych.",
        },
        ip: {
          title: "7. Własność intelektualna",
          p1: "O ile nie uzgodniono inaczej na piśmie, wszystkie metodologie, architektury, przepływy pracy, dokumentacja, diagramy i materiały techniczne opracowane przez Ovelon Prime pozostają naszą własnością intelektualną.",
          p2: "Klientom przyznawana jest niezbywalna, niewyłączna licencja wyłącznie do wewnętrznego użytku biznesowego.",
        },
        confidentiality: {
          title: "8. Poufność",
          p1: "Obie strony zgadzają się zachować ścisłą poufność wszystkich niepublicznych informacji biznesowych, technicznych, operacyjnych i handlowych wymienianych podczas zaangażowania.",
        },
        liability: {
          title: "9. Ograniczenie odpowiedzialności",
          p1: "W maksymalnym zakresie dozwolonym przez prawo, Ovelon Prime nie ponosi odpowiedzialności za jakiekolwiek szkody pośrednie, przypadkowe, szczególne lub wynikowe.",
          p2: "Całkowita odpowiedzialność nie przekroczy całkowitych opłat zapłaconych za konkretną usługę stanowiącą podstawę roszczenia.",
        },
        thirdParty: {
          title: "10. Narzędzia i integracje stron trzecich",
          p1: "Usługi mogą obejmować integracje z platformami lub narzędziami stron trzecich. Ovelon Prime nie ponosi odpowiedzialności za awarie, zmiany lub decyzje polityczne stron trzecich.",
        },
        termination: {
          title: "11. Rozwiązanie",
          p1: "Zastrzegamy sobie prawo do zawieszenia lub rozwiązania usług w przypadku braku płatności, niewłaściwego użycia lub istotnego naruszenia niniejszego Regulaminu.",
        },
        governingLaw: {
          title: "12. Prawo właściwe",
          p1: "Niniejszy Regulamin podlega prawu jurysdykcji, w której Ovelon Prime jest prawnie ustanowiona, bez względu na zasady kolizji praw.",
        },
        changes: {
          title: "13. Zmiany niniejszego Regulaminu",
          p1: "Możemy od czasu do czasu aktualizować niniejszy Regulamin. Dalsze korzystanie z witryny lub usług stanowi akceptację zaktualizowanego Regulaminu.",
        },
        contactInfo: {
          title: "14. Informacje kontaktowe",
          p1: "W przypadku pytań dotyczących niniejszego Regulaminu prosimy o kontakt:",
        },
      },
    },
    demo: {
      header: "Analiza kompromisów operacyjnych",
      close: "Zamknij",
      beforeAlignment: "Przed wyrównaniem",
      afterAlignment: "Po wyrównaniu",
      tradeoff: "Kompromis",
      footer: "Reprezentatywne scenariusze operacyjne ze środowisk przemysłowych, logistycznych i zarządzania obiektami.",
      intake: {
        title: "Przyjmowanie pracy i zarządzanie zapotrzebowaniem",
        metrics: {
          coordinationTime: "Czas koordynacji",
          reworkCycles: "Cykle przeróbek",
          ownership: "Odpowiedzialność",
          ownershipValue: "Zdefiniowana z góry",
        },
        before: {
          title: "Fragmentaryczne przyjmowanie i reaktywna koordynacja",
          text: "Praca wpływa przez e-maile, telefony i nieformalne kanały. Jakość informacji jest zmienna, a odpowiedzialność zmienia się podczas realizacji.",
          bullet1: "Wiele ścieżek przyjmowania",
          bullet2: "Ręczne pętle wyjaśniające",
          bullet3: "Priorytet napędzany pilnością",
          bullet4: "Realizacja zależy od jednostek",
          tradeoff: "Czas tracony na koordynację i korektę.",
        },
        after: {
          title: "Strukturalne przyjmowanie z kontrolowaną realizacją",
          text: "Żądania podążają jedną ścieżką przyjmowania. Informacje są walidowane z góry, a odpowiedzialność przypisywana przed rozpoczęciem realizacji.",
          bullet1: "Pojedyncze strukturalne przyjmowanie",
          bullet2: "Jasna klasyfikacja i routing",
          bullet3: "Odpowiedzialność przypisana raz",
          bullet4: "Przewidywalny przepływ realizacji",
          tradeoff: "Koordynacja spada, realizacja się stabilizuje.",
        },
      },
      safety: {
        title: "Standardy bezpieczeństwa i wykonania",
        metrics: {
          procedureDeviations: "Odchylenia proceduralne",
          onboardingTime: "Czas wdrożenia",
          consistency: "Spójność",
          consistencyValue: "Ustandaryzowana",
        },
        before: {
          title: "Realizacja oparta na interpretacji",
          text: "Procedury bezpieczeństwa istnieją w dokumentach i wiedzy plemiennej. Operatorzy różnie interpretują standardy.",
          bullet1: "Niespójne procedury",
          bullet2: "Duża zależność od starszego personelu",
          bullet3: "Wykonawcy wdrażani nieformalnie",
          bullet4: "Narażenie na audyty",
          tradeoff: "Bezpieczeństwo zależy od doświadczenia, nie od struktury.",
        },
        after: {
          title: "Ustandaryzowana realizacja ze wspólnym zrozumieniem",
          text: "Standardy realizacji są jasne, wizualne i jednolite w zespołach i grupach wykonawców.",
          bullet1: "Jednolite standardy realizacji",
          bullet2: "Szybsze wdrożenie",
          bullet3: "Zmniejszone błędy interpretacji",
          bullet4: "Dopasowany framework bezpieczeństwa",
          tradeoff: "Bezpieczeństwo staje się powtarzalne i możliwe do audytu.",
        },
      },
      incident: {
        title: "Obsługa incydentów i eskalacja",
        metrics: {
          escalationLoops: "Pętle eskalacji",
          responseTime: "Czas reakcji",
          accountability: "Rozliczalność",
          accountabilityValue: "Jawna",
        },
        before: {
          title: "Reaktywna obsługa incydentów",
          text: "Incydenty są zgłaszane niespójnie i eskalowane ręcznie. Odpowiedzialność jest niejasna, a widoczność ograniczona.",
          bullet1: "Niejasne progi eskalacji",
          bullet2: "Opóźnione przekazania",
          bullet3: "Równoległe wątki komunikacji",
          bullet4: "Ograniczona widoczność dla zarządu",
          tradeoff: "Incydenty pochłaniają uwagę zamiast być rozwiązywane.",
        },
        after: {
          title: "Kontrolowana eskalacja z jasną rozliczalnością",
          text: "Incydenty są rejestrowane, klasyfikowane i eskalowane przez predefiniowane ścieżki. Każdy krok ma jasnego właściciela i okno czasowe reakcji.",
          bullet1: "Zdefiniowane poziomy eskalacji",
          bullet2: "Jasna odpowiedzialność za incydent",
          bullet3: "Przewidywalne czasy reakcji",
          bullet4: "Pełna widoczność operacyjna",
          tradeoff: "Incydenty są rozwiązywane systematycznie.",
        },
      },
    },
    simulator: {
      title: "Przyjęcie zapotrzebowania i realizacji",
      close: "Zamknij",
      back: "Wstecz",
      next: "Dalej",
      requestReview: "Zamów przegląd operacyjny",
      submitError: "Nie udało się przesłać żądania. Spróbuj ponownie lub skontaktuj się z pomocą techniczną.",
      stepIndicator: "Krok {{current}} z {{total}}",
      step1: {
        title: "Kontekst operacyjny",
        description: "Zacznijmy od zrozumienia Twojego środowiska operacyjnego. Wybierz opcje, które najlepiej opisują Twoją organizację.",
        industryLabel: "W jakiej branży działasz?",
        operationLabel: "Jaki typ operacji prowadzisz?",
        operationHint: "Wybierz wszystkie pasujące",
        scaleLabel: "Jaka jest skala Twoich operacji?",
      },
      step2: {
        title: "Obecny model operacyjny",
        description: "Pomóż nam zrozumieć, jak dziś obsługujesz bieżącą pracę — bez osądzania, tylko klarowność.",
        handlingLabel: "Jak są obsługiwane żądania, zadania lub incydenty?",
        handlingHint: "Wybierz wszystkie stosowane metody",
        structureLabel: "Jaki jest poziom struktury w Twoich operacjach?",
        toolsLabel: "Jakie narzędzia lub systemy są używane?",
      },
      step3: {
        title: "Trudności i punkty bólu",
        description: "Zidentyfikuj, gdzie praca dziś się spowalnia lub staje się nieprzewidywalna.",
        frictionLabel: "Co powoduje tarcia w Twoich operacjach?",
        frictionHint: "Wybierz wszystkie pasujące",
        notesLabel: "Dodatkowe uwagi (opcjonalnie)",
        notesPlaceholder: "Opisz konkretne wyzwania lub kontekst...",
      },
      step4: {
        title: "Ograniczenia i wymagania",
        description: "Zdefiniuj granice i wymagania wpływające na Twoje operacje.",
        downtimeLabel: "Jak wrażliwe są Twoje operacje na przestoje?",
        complianceLabel: "Jakie ramy bezpieczeństwa lub zgodności mają zastosowanie?",
        complianceHint: "Wybierz wszystkie pasujące",
        complexityLabel: "Jak złożona jest koordynacja wewnętrzna?",
      },
      step5: {
        title: "Podsumowanie i refleksja",
        description: "Oto podsumowanie tego, co nam przekazałeś — jasny obraz Twojej obecnej rzeczywistości operacyjnej.",
        noData: "Brak danych do wyświetlenia. Wróć i uzupełnij poprzednie kroki.",
        contextTitle: "Kontekst operacyjny",
        modelTitle: "Obecny model operacyjny",
        hurdlesTitle: "Zidentyfikowane trudności",
        constraintsTitle: "Ograniczenia i wymagania",
        industry: "Branża",
        operations: "Operacje",
        scale: "Skala",
        handling: "Obsługa żądań",
        structure: "Poziom struktury",
        tools: "Narzędzia",
        downtime: "Wrażliwość na przestoje",
        compliance: "Zgodność",
        complexity: "Złożoność koordynacji",
        disclaimer: "Ta symulacja ma charakter orientacyjny i odzwierciedla podane przez użytkownika informacje. Nie zastępuje profesjonalnej oceny. Wszystkie ustalenia podlegają formalnemu przeglądowi.",
      },
      industries: {
        manufacturing: "Produkcja",
        logistics: "Logistyka",
        facility: "Zarządzanie obiektami",
        infrastructure: "Infrastruktura",
        energy: "Energetyka",
        other: "Inne",
      },
      operationTypes: {
        facility: "Operacje obiektowe",
        logistics: "Logistyka i magazynowanie",
        maintenance: "Konserwacja i naprawa",
        production: "Linie produkcyjne",
        fieldService: "Serwis terenowy",
      },
      scales: {
        single: "Pojedyncza lokalizacja",
        multi: "Wielolokalizacyjna",
        distributed: "Rozproszona/regionalna",
      },
      handlingMethods: {
        email: "E-mail",
        phone: "Telefon",
        tickets: "System zgłoszeń",
        verbal: "Ustne przekazy",
        spreadsheets: "Arkusze kalkulacyjne",
        erp: "System ERP/CMMS",
      },
      structureLevels: {
        adhoc: {
          title: "Głównie ad-hoc",
          desc: "Praca jest obsługiwana w miarę pojawiania się, minimalna standaryzacja",
        },
        semiStructured: {
          title: "Częściowo ustrukturyzowana",
          desc: "Niektóre procesy są zdefiniowane, ale wykonanie jest niespójne",
        },
        fullyStructured: {
          title: "W pełni ustrukturyzowana",
          desc: "Jasne procesy z konsekwentnym wykonaniem",
        },
      },
      toolTypes: {
        manual: "Głównie ręczne",
        semiAutomated: "Częściowo zautomatyzowane",
        fragmented: "Rozdrobnione systemy",
        integrated: "Zintegrowana platforma",
      },
      frictionPoints: {
        slowResponse: "Wolne czasy reakcji",
        unclearOwnership: "Niejasna odpowiedzialność za zadania",
        manualCoordination: "Nadmierna koordynacja ręczna",
        inconsistentExecution: "Niespójne wykonanie",
        lackVisibility: "Brak widoczności w czasie rzeczywistym",
        escalationDelays: "Opóźnienia w eskalacji",
        documentationGaps: "Luki w dokumentacji",
        communicationBreakdown: "Załamanie komunikacji",
      },
      downtimeLevels: {
        critical: {
          title: "Krytyczna",
          desc: "Każda minuta przestoju kosztuje znacząco",
        },
        high: {
          title: "Wysoka",
          desc: "Przestój poważnie wpływa na operacje",
        },
        moderate: {
          title: "Umiarkowana",
          desc: "Pewna tolerancja, ale wpływa na wydajność",
        },
        low: {
          title: "Niska",
          desc: "Można zarządzać krótkoterminowymi przerwami",
        },
      },
      complianceOptions: {
        iso: "ISO 9001/27001",
        hse: "HSE/BHP",
        osha: "OSHA",
        vca: "VCA/SCC",
        gdpr: "RODO/Ochrona danych",
        sectorSpecific: "Regulacje sektorowe",
      },
      complexityLevels: {
        simple: "Prosta",
        moderate: "Umiarkowana",
        complex: "Złożona",
        veryComplex: "Bardzo złożona",
      },
      step6: {
        title: "Analiza operacyjna",
        description: "Na podstawie podanych informacji przedstawiamy analizę operacyjną Twojego obecnego stanu na poziomie zarządczym.",
        noData: "Niewystarczające dane do wygenerowania analizy. Proszę uzupełnić poprzednie kroki.",
        observationsTitle: "Obserwacje operacyjne",
        risksTitle: "Obszary ryzyka i ekspozycji",
        readinessTitle: "Ocena gotowości do realizacji",
        advisoryTitle: "Kierunek doradczy (Ogólny)",
        disclaimer: "Ta analiza ma charakter orientacyjny i opiera się na samodzielnie zgłoszonych informacjach. Nie zastępuje profesjonalnej oceny. Wszystkie ustalenia podlegają formalnemu przeglądowi.",
      },
      step7: {
        title: "Dane kontaktowe",
        description: "Te dane są wymagane, aby dołączyć analizę operacyjną do formalnego wniosku o przegląd.",
        personalTitle: "Dane osobowe",
        companyTitle: "Dane firmy",
        fullName: "Imię i nazwisko",
        fullNamePlaceholder: "Wpisz swoje imię i nazwisko",
        email: "Adres e-mail",
        emailPlaceholder: "Wpisz służbowy adres e-mail",
        phone: "Numer telefonu",
        phonePlaceholder: "Wpisz numer telefonu",
        companyName: "Nazwa firmy",
        companyNamePlaceholder: "Wpisz nazwę firmy",
        role: "Stanowisko / Funkcja",
        rolePlaceholder: "np. Kierownik operacyjny",
        country: "Kraj",
        countryPlaceholder: "Wpisz kraj",
        city: "Miasto",
        cityPlaceholder: "Wpisz miasto",
        requiredNote: "Wszystkie pola oznaczone * są wymagane. Twoje dane będą wykorzystane wyłącznie do przetworzenia tego wniosku.",
      },
      submitting: "Wysyłanie...",
      analysis: {
        observations: {
          industry: {
            manufacturing: "Działanie w środowisku produkcyjnym zazwyczaj obejmuje złożone planowanie produkcji, cykle konserwacji sprzętu i wymagania kontroli jakości.",
            logistics: "Operacje logistyczne wymagają ścisłej koordynacji między wieloma interesariuszami, dostaw krytycznych czasowo i widoczności w czasie rzeczywistym w łańcuchach dostaw.",
            facility: "Operacje zarządzania obiektami obejmują wiele kategorii usług i wymagają koordynacji między zespołami wewnętrznymi a zewnętrznymi wykonawcami.",
            infrastructure: "Operacje infrastrukturalne często obejmują geograficznie rozproszone zasoby o różnych wymaganiach konserwacyjnych i nadzorze regulacyjnym.",
            energy: "Operacje sektora energetycznego wymagają ścisłego przestrzegania protokołów bezpieczeństwa, zgodności regulacyjnej i ciągłego monitorowania krytycznych systemów.",
            other: "Operacje obejmują wiele domen o różnych wymaganiach dotyczących koordynacji, zgodności i kontroli wykonania.",
          },
          scale: {
            single: "Operacje w jednej lokalizacji pozwalają na scentralizowaną kontrolę, ale mogą nadal napotykać wyzwania koordynacyjne między zmianami i działami.",
            multi: "Operacje wielolokalizacyjne wprowadzają złożoność w standaryzacji, komunikacji i zapewnieniu spójnego wykonania w różnych lokalizacjach.",
            distributed: "Operacje rozproszone lub regionalne wymagają solidnych mechanizmów koordynacji w celu utrzymania widoczności i kontroli nad rozproszonymi zespołami.",
          },
          structure: {
            adhoc: "Doraźna struktura operacyjna sugeruje wysoką zależność od indywidualnej oceny i potencjalną niespójność w wykonaniu.",
            semiStructured: "Procesy częściowo ustrukturyzowane wskazują na częściową standaryzację z miejscem na zmienność, co może prowadzić do niespójnych wyników.",
            fullyStructured: "W pełni ustrukturyzowane operacje stanowią podstawę przewidywalnego wykonania, choć skuteczność zależy od przestrzegania i egzekwowania.",
          },
          tools: {
            fragmented: "Fragmentaryczny krajobraz narzędzi zazwyczaj prowadzi do silosów informacyjnych, ręcznego uzgadniania danych i narzutu koordynacyjnego.",
            manual: "Silna zależność od procesów ręcznych zwiększa ryzyko błędów i ogranicza skalowalność operacji.",
          },
        },
        risks: {
          predictability: "Ryzyko przewidywalności: Niespójne wykonanie i niejasne wzorce odpowiedzialności mogą prowadzić do nieprzewidywalnych wyników operacyjnych.",
          coordination: "Ryzyko koordynacji: Ręczna koordynacja i luki komunikacyjne mogą powodować opóźnienia, błędy i niepowodzenia eskalacji.",
          downtime: "Ekspozycja na przestoje: Wysoka wrażliwość na przestoje w połączeniu z obecnymi wzorcami operacyjnymi sugeruje podwyższone ryzyko kosztownych zakłóceń.",
          compliance: "Ekspozycja na zgodność: Rozbieżność między wymaganiami zgodności a obecnym poziomem struktury może tworzyć ryzyko audytowe i regulacyjne.",
          escalation: "Ryzyko eskalacji: Opóźnienia w rozwiązywaniu problemów i ograniczona widoczność mogą pozwolić drobnym problemom eskalować do znaczących problemów operacyjnych.",
        },
        readiness: {
          high: "Organizacja wydaje się w miarę przygotowana do zmian operacyjnych, z istniejącą strukturą i narzędziami stanowiącymi podstawę dla inicjatyw doskonalenia.",
          moderate: "Organizacja wykazuje mieszane wskaźniki gotowości. Niektóre elementy podstawowe istnieją, ale luki w strukturze lub narzędziach mogą wymagać uwagi przed skalowaniem.",
          low: "Obecne wzorce operacyjne sugerują ograniczoną gotowość do skalowania lub znaczących zmian bez uprzedniego zajęcia się podstawowymi lukami koordynacyjnymi i strukturalnymi.",
        },
        advisory: {
          ownership: "Rozważ ustanowienie jaśniejszych struktur odpowiedzialności i ram rozliczalności, aby zmniejszyć narzut koordynacyjny i poprawić przewidywalność reakcji.",
          standardization: "Skup się na standaryzacji podstawowych procesów operacyjnych, aby zmniejszyć zmienność i ustanowić spójne wzorce wykonania w zespołach.",
          escalation: "Wdróż ustrukturyzowane ścieżki eskalacji z określonymi oknami czasowymi reakcji i jasną odpowiedzialnością na każdym poziomie.",
          compliance: "Dostosuj strukturę operacyjną do wymagań zgodności, aby zmniejszyć ekspozycję audytową i zapewnić spójne przestrzeganie standardów regulacyjnych.",
          scale: "Dla operacji wielolokalizacyjnych lub rozproszonych priorytetowo traktuj mechanizmy zapewniające spójność i widoczność w różnych lokalizacjach.",
        },
      },
    },
    submission: {
      title: "Zgłoszenie otrzymane",
      body1: "Twoja ocena operacyjna została pomyślnie przesłana.",
      body2: "Nasz zespół dokładnie przeanalizuje Twoją prośbę i odpowiednio się z Tobą skontaktuje.",
      body3: "Aby przyspieszyć kolejne kroki, możesz umówić się na konsultację strategiczną poniżej.",
      scheduleBtn: "Umów konsultację strategiczną",
      closeBtn: "Zamknij",
    },
  },
};
