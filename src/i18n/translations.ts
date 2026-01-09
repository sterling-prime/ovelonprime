export type Lang = "en" | "de" | "fr" | "es" | "it" | "pt";

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
    contactForm: {
      firstName: "First Name",
      firstNamePlaceholder: "John",
      lastName: "Last Name",
      lastNamePlaceholder: "Doe",
      businessName: "Business Name",
      businessNamePlaceholder: "Acme Industries",
      businessEmail: "Business Email",
      businessEmailPlaceholder: "john@acme.com",
      requestDetails: "Request Details",
      requestDetailsPlaceholder: "Tell us about your operational challenges and what you're looking to achieve...",
      submit: "Submit Request",
      submitting: "Submitting...",
      validationError: "Please fill in all required fields correctly.",
      successTitle: "Submitted Successfully",
      successMessage: "We will review your request carefully.",
      successCta: "Book a Strategic Consultation",
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
      submitting: "Submitting...",
      submitError: "Failed to submit request. Please try again or contact support.",
      submitErrorTitle: "Submission Failed",
      validationErrorTitle: "Required Fields Missing",
      validationErrorDescription: "Please fill in all required fields before submitting.",
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
      referenceLabel: "Reference ID",
      emailSent: "Confirmation sent to",
      pdfAttached: "PDF summary attached for your records",
    },
    governanceTrends: {
      title: "Operating in a Regulated Reality",
      subtitle: "As operational environments become more regulated, interconnected, and scrutinized, leadership is increasingly defined by control, documentation, and consistency — not by speed or improvisation.",
      column1: {
        title: "What Operating Leaders Prioritize",
        items: [
          "Clear, enforceable work instructions",
          "Predictable execution across shifts and teams",
          "Safety procedures that leave little room for interpretation",
          "Fewer ad-hoc decisions during incidents",
          "Documentation that stands on its own"
        ]
      },
      column2: {
        title: "Standards, Compliance & Liability",
        items: [
          "Formal management systems based on recognized standards",
          "Traceable procedures and corrective actions",
          "Verifiable training and competency records",
          "Data protection and access control by default",
          "Decisions that can be reconstructed after the fact"
        ]
      },
      column3: {
        title: "Safety, Hygiene & Operational Reality",
        items: [
          "Safety rules must work under pressure, not only on paper",
          "Hygiene procedures must be consistent across locations",
          "Deviations must be logged, not normalized",
          "Informal workarounds increase exposure",
          "Personal accountability is moving closer to the floor"
        ]
      },
      trend1: "Looking ahead, the trend is clear: operations are expected to be explainable, auditable, and repeatable — even under disruption.",
      trend2: "Organizations that succeed will be those that embed standards, safety, hygiene, and data discipline directly into daily execution. Not as overhead, but as operational structure."
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
    contactForm: {
      firstName: "Vorname",
      firstNamePlaceholder: "Max",
      lastName: "Nachname",
      lastNamePlaceholder: "Mustermann",
      businessName: "Firmenname",
      businessNamePlaceholder: "Muster GmbH",
      businessEmail: "Geschäftliche E-Mail",
      businessEmailPlaceholder: "max@musterfirma.de",
      requestDetails: "Anfrage-Details",
      requestDetailsPlaceholder: "Beschreiben Sie Ihre operativen Herausforderungen und Ziele...",
      submit: "Anfrage absenden",
      submitting: "Wird gesendet...",
      validationError: "Bitte füllen Sie alle Pflichtfelder korrekt aus.",
      successTitle: "Erfolgreich gesendet",
      successMessage: "Wir werden Ihre Anfrage sorgfältig prüfen.",
      successCta: "Strategische Beratung buchen",
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
      submitting: "Wird gesendet...",
      submitError: "Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder kontaktieren Sie den Support.",
      submitErrorTitle: "Übermittlung fehlgeschlagen",
      validationErrorTitle: "Pflichtfelder fehlen",
      validationErrorDescription: "Bitte füllen Sie alle Pflichtfelder aus, bevor Sie absenden.",
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
      referenceLabel: "Referenz-ID",
      emailSent: "Bestätigung gesendet an",
      pdfAttached: "PDF-Zusammenfassung für Ihre Unterlagen beigefügt",
    },
    governanceTrends: {
      title: "Operieren in einer regulierten Realität",
      subtitle: "Da operative Umgebungen zunehmend reguliert, vernetzt und überprüft werden, wird Führung immer mehr durch Kontrolle, Dokumentation und Konsistenz definiert — nicht durch Geschwindigkeit oder Improvisation.",
      column1: {
        title: "Was Betriebsleiter priorisieren",
        items: [
          "Klare, durchsetzbare Arbeitsanweisungen",
          "Vorhersehbare Ausführung über Schichten und Teams hinweg",
          "Sicherheitsverfahren, die wenig Raum für Interpretation lassen",
          "Weniger Ad-hoc-Entscheidungen bei Vorfällen",
          "Dokumentation, die für sich selbst steht"
        ]
      },
      column2: {
        title: "Standards, Compliance & Haftung",
        items: [
          "Formale Managementsysteme basierend auf anerkannten Standards",
          "Nachverfolgbare Verfahren und Korrekturmaßnahmen",
          "Überprüfbare Schulungs- und Kompetenznachweise",
          "Datenschutz und Zugriffskontrolle standardmäßig",
          "Entscheidungen, die im Nachhinein rekonstruiert werden können"
        ]
      },
      column3: {
        title: "Sicherheit, Hygiene & operative Realität",
        items: [
          "Sicherheitsregeln müssen unter Druck funktionieren, nicht nur auf dem Papier",
          "Hygieneverfahren müssen standortübergreifend konsistent sein",
          "Abweichungen müssen protokolliert, nicht normalisiert werden",
          "Informelle Workarounds erhöhen das Risiko",
          "Persönliche Verantwortlichkeit rückt näher an die operative Ebene"
        ]
      },
      trend1: "Mit Blick auf die Zukunft ist der Trend klar: Operationen müssen erklärbar, prüfbar und wiederholbar sein — auch unter Störungen.",
      trend2: "Erfolgreiche Organisationen werden diejenigen sein, die Standards, Sicherheit, Hygiene und Datendisziplin direkt in die tägliche Ausführung einbetten. Nicht als Overhead, sondern als operative Struktur."
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
    contactForm: {
      firstName: "Prénom",
      firstNamePlaceholder: "Jean",
      lastName: "Nom",
      lastNamePlaceholder: "Dupont",
      businessName: "Nom de l'entreprise",
      businessNamePlaceholder: "Acme Industries",
      businessEmail: "Email professionnel",
      businessEmailPlaceholder: "jean@entreprise.fr",
      requestDetails: "Détails de la demande",
      requestDetailsPlaceholder: "Décrivez vos défis opérationnels et ce que vous souhaitez atteindre...",
      submit: "Envoyer la demande",
      submitting: "Envoi en cours...",
      validationError: "Veuillez remplir correctement tous les champs obligatoires.",
      successTitle: "Envoyé avec succès",
      successMessage: "Nous examinerons votre demande attentivement.",
      successCta: "Réserver une consultation stratégique",
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
      submitting: "Envoi en cours...",
      submitError: "Échec de l'envoi de la demande. Veuillez réessayer ou contacter le support.",
      submitErrorTitle: "Échec de l'envoi",
      validationErrorTitle: "Champs obligatoires manquants",
      validationErrorDescription: "Veuillez remplir tous les champs obligatoires avant de soumettre.",
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
      referenceLabel: "Numéro de référence",
      emailSent: "Confirmation envoyée à",
      pdfAttached: "Résumé PDF joint pour vos archives",
    },
    governanceTrends: {
      title: "Opérer dans une réalité réglementée",
      subtitle: "À mesure que les environnements opérationnels deviennent plus réglementés, interconnectés et scrutés, le leadership est de plus en plus défini par le contrôle, la documentation et la cohérence — et non par la vitesse ou l'improvisation.",
      column1: {
        title: "Ce que les leaders opérationnels priorisent",
        items: [
          "Instructions de travail claires et applicables",
          "Exécution prévisible entre les équipes et les postes",
          "Procédures de sécurité qui laissent peu de place à l'interprétation",
          "Moins de décisions ad hoc lors des incidents",
          "Documentation qui se suffit à elle-même"
        ]
      },
      column2: {
        title: "Normes, conformité et responsabilité",
        items: [
          "Systèmes de gestion formels basés sur des normes reconnues",
          "Procédures et actions correctives traçables",
          "Dossiers de formation et de compétence vérifiables",
          "Protection des données et contrôle d'accès par défaut",
          "Décisions qui peuvent être reconstituées après coup"
        ]
      },
      column3: {
        title: "Sécurité, hygiène et réalité opérationnelle",
        items: [
          "Les règles de sécurité doivent fonctionner sous pression, pas seulement sur le papier",
          "Les procédures d'hygiène doivent être cohérentes entre les sites",
          "Les écarts doivent être enregistrés, pas normalisés",
          "Les solutions de contournement informelles augmentent l'exposition",
          "La responsabilité personnelle se rapproche du terrain"
        ]
      },
      trend1: "À l'avenir, la tendance est claire : les opérations doivent être explicables, auditables et reproductibles — même en cas de perturbation.",
      trend2: "Les organisations qui réussiront seront celles qui intégreront les normes, la sécurité, l'hygiène et la discipline des données directement dans l'exécution quotidienne. Pas comme une surcharge, mais comme une structure opérationnelle."
    },
  },
  /* ===================== ES ===================== */
  es: {
    backToTop: "Volver arriba",
    explore: "Explorar",

    common: {
      back: "Volver",
    },

    nav: {
      services: "Servicios",
      pricing: "Precios",
      about: "Nosotros",
      contact: "Contacto",
      cta: "Hablar con experto",
      viewDemo: "Ver demo",
    },
    hero: {
      badge: "Industrias críticas orientadas a resultados",
      title: "La complejidad operacional erosiona",
      titleHighlight: "la fiabilidad y rompe la disciplina de ejecución",
      subtitle:
        "Cuando la coordinación se vuelve manual, el mantenimiento se vuelve reactivo y las operaciones dependen de soluciones alternativas, el control ya se ha perdido.",
      subtitle2:
        "Restauramos la ejecución predecible y disciplinada dentro de las operaciones en vivo — sin reemplazar sistemas centrales ni interrumpir los flujos de trabajo diarios.",
      subtitleMobile: "Cuando la coordinación se vuelve manual, el control ya se ha perdido.",
      cta: "Recupere el control de las operaciones",
      simulatorCta: "Ingesta de Demanda y Ejecución",
    },
    video: {
      title: "Diseñado para operaciones ininterrumpidas",
      subtitle: "Vea cómo Ovelon Prime apoya entornos de misión crítica sin interrumpir los sistemas en vivo.",
      cta: "Sesión de ajuste operacional",
    },
    services: {
      label: "LO QUE ESTABILIZAMOS",
      title: "Fiabilidad operacional en entornos",
      titleHighlight: "que no pueden permitirse errores",
      subtitle:
        "Eliminamos las averías operacionales causadas por la coordinación manual, la ejecución poco clara y el manejo reactivo de incidentes — restaurando el control, la responsabilidad y los resultados predecibles dentro de las operaciones en vivo.",
      items: [
        {
          title: "Gestión de solicitudes y demanda",
          description:
            "Las solicitudes entrantes se capturan, validan y enrutan de manera consistente — sin depender del seguimiento ad hoc o del juicio individual.",
          tags: ["Control de admisión inteligente", "Reglas de calificación", "Enrutamiento del sistema"],
        },
        {
          title: "Estándares de seguridad y ejecución",
          description:
            "Instrucciones visuales estandarizadas utilizadas para alinear a operadores, contratistas y equipos en procedimientos críticos de seguridad — reduciendo errores de interpretación, desviaciones y riesgo de ejecución.",
          tags: [
            "Procedimientos HSE",
            "Alineación ISO / VCA / OSHA",
            "Incorporación de operadores y contratistas",
          ],
        },
        {
          title: "Gestión de incidentes y escalamiento",
          description:
            "Los problemas se registran, clasifican y escalan de manera controlada — asegurando responsabilidad, claridad de respuesta y rutas de resolución predecibles.",
          tags: ["Clasificación de problemas", "Rutas de escalamiento", "Propiedad de la respuesta"],
        },
      ],
    },
    sectors: {
      label: "Sectores",
      title: "Fiabilidad operacional para",
      titleHighlight: "industrias de misión crítica",
      subtitle: "Apoyamos entornos operacionales donde el tiempo de inactividad, la desalineación o la respuesta tardía impactan directamente la seguridad, la continuidad o la producción.",
      items: [
        {
          name: "Gestión de instalaciones",
          description: "Gestión de activos distribuidos y solicitudes de servicio en instalaciones complejas — con baja tolerancia a retrasos o mala coordinación.",
        },
        {
          name: "Mantenimiento y reparación",
          description: "Operar bajo presión constante para prevenir tiempos de inactividad en mantenimiento reactivo y preventivo — a menudo con información incompleta y ventanas de respuesta ajustadas.",
        },
        {
          name: "Logística y almacenamiento",
          description: "Coordinación de personal, equipos y flujos de trabajo bajo plazos estrictos y presión operacional continua.",
        },
      ],
    },
    testimonials: {
      title: "Testimonios de clientes",
      items: [
        {
          quote: "Antes de Ovelon Prime, la coordinación de turnos dependía del seguimiento individual. Hoy, el mantenimiento y la planificación se ejecutan de manera predecible en todos los turnos — sin intervención manual.",
          name: "Martin Keller",
          title: "Líder de operaciones logísticas",
        },
        {
          quote: "En nuestro entorno, los retrasos afectan directamente la seguridad y la producción. Ovelon Prime nos ayudó a estandarizar la ejecución entre equipos, reduciendo el tiempo de respuesta en un 45% sin aumentar el riesgo operacional.",
          name: "Alicia Zhang",
          title: "Directora de operaciones",
        },
        {
          quote: "Operamos bajo presión continua. Desde que implementamos el sistema, el enrutamiento y el escalamiento siguen reglas fijas — no suposiciones. El tiempo de inactividad causado por errores de coordinación ya no es un factor.",
          name: "Daniel Hoffman",
          title: "Gerente de planta",
        },
      ],
    },
    operationalTrust: {
      heading: "Diseñado para entornos regulados y críticos para la seguridad",
      items: [
        { text: "Principios de seguridad alineados con ISO 27001" },
        { text: "Control de procesos estilo ISO 9001" },
        { text: "Diseño operacional consciente de HSE" },
        { text: "Documentación y controles listos para auditoría" },
        { text: "Propiedad total del cliente — sin sistemas de caja negra" },
      ],
      footer: "Diseñado para entornos revisados por CISO con gobernanza de seguridad interna, políticas de control de acceso y procedimientos de gestión del cambio.",
    },
    about: {
      label: "Nosotros",
      title: "Construido sobre experiencia operacional,",
      titleHighlight: "impulsado por la precisión",
      description1:
        "Ovelon Prime trabaja con organizaciones que operan bajo presión constante — donde el tiempo de inactividad, los retrasos y los procesos manuales impactan directamente el costo, la seguridad y la fiabilidad.",
      description2:
        "Combinamos una profunda experiencia en el dominio operacional con capas de control operacional para diseñar sistemas que se integran perfectamente en los flujos de trabajo existentes, sin interrumpir las operaciones críticas.",
      quote:
        '"La precisión no es opcional. En entornos donde la fiabilidad determina los resultados, los sistemas deben estar diseñados para funcionar bajo presión."',
      quoteAuthor: "Equipo directivo · Ovelon Prime",
      stats: {
        uptime: "Tiempo de actividad del sistema operacional",
        deployments: "Despliegues de automatización",
        industries: "Industrias críticas atendidas",
      },
    },
    pricing: {
      label: "Precios",
      title: "Precios basados en compromiso, con resultados claramente definidos",
      subtitle:
        "Compromisos claramente definidos enfocados en mejorar la fiabilidad, reducir la fricción operacional y entregar un impacto medible.",
      focused: {
        name: "Compromiso operacional enfocado",
        description:
          "Un compromiso de alcance fijo diseñado para resolver un cuello de botella operacional claramente definido con impacto medible.",
        priceLabel: "Desde",
        period: "tarifa única",
        cta: "Solicitar evaluación de compromiso",
        features: [
          "Mejora operacional única y claramente definida",
          "Mapeo de procesos y responsabilidades",
          "Implementación y despliegue controlados",
          "Documentación y transferencia operacional",
          "Validación post-implementación",
        ],
      },
      enterprise: {
        name: "Programa operacional empresarial",
        description:
          "Sistemas operacionales personalizados para organizaciones complejas con requisitos estrictos de gobernanza, cumplimiento y continuidad.",
        priceLabel: "Precios personalizados",
        price: "Servicio personalizado",
        period: "tarifa única",
        cta: "Solicitar evaluación inicial",
        badge: "Empresa",
        features: [
          "Arquitectura operacional multi-sistema",
          "Integraciones personalizadas con sistemas existentes",
          "Soporte dedicado de implementación y transición",
          "Diseño operacional consciente del cumplimiento",
          "Marco SLA y gobernanza personalizado",
        ],
      },
      securityNote:
        "Cada compromiso se construye con seguridad de nivel empresarial, protección de datos y cumplimiento operacional.",
      talkToExpert: "Hablar con experto",
      intakeNote:
        "Admisión estructurada · Sin presión de ventas · Directamente con un experto experimentado",
      reviewNote: "Todas las solicitudes se revisan antes de programar.",
    },
    contact: {
      label: "COMPROMISO",
      title: "¿Listo para recuperar el control de",
      titleHighlight: " sus operaciones?",
      subtitle: "Todos los compromisos se definen por adelantado y están sujetos a una revisión formal antes de continuar.",
      cta: "Programar consulta",
      guarantee: "Sin compromisos a largo plazo.",
      guaranteeHighlight: "Los compromisos continúan solo cuando se demuestra el valor operacional",
      guaranteeSuffix: " en compromisos calificados.",
      enterpriseLabel: "Consultas empresariales: ",
    },
    contactForm: {
      firstName: "Nombre",
      firstNamePlaceholder: "Juan",
      lastName: "Apellido",
      lastNamePlaceholder: "García",
      businessName: "Nombre de la empresa",
      businessNamePlaceholder: "Industrias Acme",
      businessEmail: "Correo electrónico empresarial",
      businessEmailPlaceholder: "juan@empresa.es",
      requestDetails: "Detalles de la solicitud",
      requestDetailsPlaceholder: "Cuéntenos sobre sus desafíos operacionales y lo que desea lograr...",
      submit: "Enviar solicitud",
      submitting: "Enviando...",
      validationError: "Por favor complete todos los campos obligatorios correctamente.",
      successTitle: "Enviado con éxito",
      successMessage: "Revisaremos su solicitud cuidadosamente.",
      successCta: "Reservar una consulta estratégica",
    },
    faq: {
      title: "Preguntas frecuentes",
      category: "Compromiso y entrega",
      items: [
        {
          question: "¿Cómo funciona Ovelon Prime?",
          answer:
            "Comenzamos con una admisión estructurada para entender la restricción operacional. Diseñamos y validamos una solución de alcance fijo contra flujos de trabajo reales. Implementamos, probamos bajo carga y entregamos con documentación completa.",
        },
        {
          question: "¿En qué industrias se especializan?",
          answer:
            "Trabajamos con organizaciones que operan en entornos de misión crítica, incluyendo manufactura, logística y gestión de instalaciones. Si los retrasos, errores o tiempos de inactividad impactan directamente la seguridad, la producción o la continuidad, somos el socio adecuado.",
        },
        {
          question: "¿Es esto una suscripción o servicio continuo?",
          answer:
            "No. Los compromisos tienen alcance fijo y están orientados a resultados. No hay suscripción obligatoria, dependencia de licencia ni tarifas continuas. Usted es dueño del sistema después de la entrega.",
        },
        {
          question: "¿Cuánto tiempo dura una implementación típica?",
          answer:
            "La mayoría de los compromisos enfocados se entregan en 12-16 días, dependiendo del alcance y acceso al sistema. Los programas empresariales siguen un despliegue por fases alineado con las prioridades operacionales.",
        },
        {
          question: "¿Esto se integrará con nuestros sistemas existentes?",
          answer:
            "Sí. Las soluciones están diseñadas para integrarse con sistemas existentes sin reemplazar plataformas centrales. Trabajamos dentro de sus herramientas actuales y límites de datos.",
        },
        {
          question: "¿Necesitamos cambiar nuestros flujos de trabajo actuales?",
          answer:
            "No. Diseñamos alrededor de sus flujos de trabajo existentes. Donde se requieran cambios, son mínimos, documentados y validados con sus equipos operacionales antes del despliegue.",
        },
        {
          question: "¿Quién es dueño de la optimización después de la entrega?",
          answer:
            "Usted. Todos los sistemas, configuraciones y documentación se entregan al finalizar. No hay dependencia del proveedor. Usted retiene la propiedad operacional y técnica completa.",
        },
        {
          question: "¿Cómo manejan la seguridad y el cumplimiento?",
          answer:
            "La seguridad y el cumplimiento se tratan como restricciones de diseño, no como ocurrencias tardías. Cada compromiso se diseña alrededor de sus políticas de seguridad existentes, controles de acceso y requisitos de cumplimiento. Trabajamos dentro de su infraestructura aprobada, límites de datos y marcos de gobernanza.",
        },
        {
          question: "¿Qué nivel de participación interna se requiere?",
          answer:
            "Participación mínima y estructurada. Requerimos entrada limitada durante la admisión para entender las restricciones operacionales y validar suposiciones. La implementación se maneja de forma independiente, con puntos de control claros para revisión y aprobación.",
        },
        {
          question: "¿Es Ovelon Prime adecuado para grandes entornos empresariales?",
          answer:
            "Sí. Estamos diseñados para entornos complejos de múltiples partes interesadas con requisitos estrictos de gobernanza, cumplimiento y operacionales. Los compromisos están estructurados para alinearse con la gestión del cambio empresarial, revisiones de seguridad y despliegues por fases.",
        },
      ],
    },
    footer: {
      privacy: "Privacidad",
      terms: "Términos",
      copyright: "Ovelon Prime. Todos los derechos reservados.",
      tagline: "Sistemas operativos empresariales construidos para claridad, control y escala.",
    },
    industrialTrust: {
      heading: "Confiado por operadores en entornos de misión crítica",
      disclaimer: "Operadores representativos de sectores industriales, logísticos, manufactureros e infraestructura. Los compromisos varían según alcance y entorno.",
    },
    intake: {
      title: "Calificación de consulta",
      subtitle: "Por favor complete el breve formulario a continuación. Todas las presentaciones se revisan antes de programar.",
    },
    cookie: {
      message: "Usamos cookies para mejorar su experiencia. Al continuar visitando este sitio, acepta nuestro uso de cookies.",
      accept: "Aceptar",
      decline: "Rechazar",
      learnMore: "Más información",
    },
    privacy: {
      title: "Política de privacidad",
      lastUpdated: "Última actualización: 01.12.2025",
      sections: {
        introduction: {
          title: "1. Introducción",
          p1: "En Ovelon Prime, tomamos en serio la protección de datos y la confidencialidad. Esta Política de Privacidad explica cómo recopilamos, usamos y protegemos la información personal y empresarial cuando interactúa con nuestro sitio web, formularios de admisión y servicios.",
          p2: "Procesamos datos de manera responsable y solo en la medida necesaria para entregar nuestros servicios, asegurar la integridad operacional y cumplir con las obligaciones legales.",
        },
        informationCollected: {
          title: "2. Información que recopilamos",
          personal: "Información personal:",
          personalDesc: "Nombre, dirección de correo electrónico empresarial, número de teléfono e información enviada a través de formularios o correspondencia directa.",
          business: "Información empresarial y operacional:",
          businessDesc: "Nombre de la empresa, dirección comercial o jurisdicción, clasificación de la industria, contexto operacional e información relacionada con el cumplimiento proporcionada voluntariamente durante la admisión.",
          technical: "Información técnica:",
          technicalDesc: "Dirección IP, metadatos del navegador y dispositivo, cookies y análisis de uso básico.",
          note: "No recopilamos intencionalmente datos personales sensibles a menos que se requiera explícitamente para cumplimiento o entrega de servicios.",
        },
        howWeUse: {
          title: "3. Cómo usamos su información",
          items: [
            "Evaluar y calificar solicitudes de consulta",
            "Entregar y apoyar servicios de automatización operacional",
            "Comunicar sobre compromisos, actualizaciones o aclaraciones",
            "Mantener la fiabilidad, seguridad y rendimiento de la plataforma",
            "Cumplir con obligaciones legales, regulatorias o contractuales",
          ],
          note: "No usamos sus datos para marketing no solicitado, perfilado o propósitos de publicidad de terceros.",
        },
        dataSharing: {
          title: "4. Compartir y divulgación de datos",
          p1: "Ovelon Prime no vende, alquila ni intercambia datos personales o empresariales.",
          p2: "La información solo puede compartirse cuando sea estrictamente necesario:",
          items: [
            "Con proveedores de servicios examinados requeridos para la entrega del servicio",
            "Para cumplir con obligaciones legales o regulatorias",
            "Para proteger la seguridad, integridad o derechos de nuestros sistemas y clientes",
          ],
          note: "Los datos nunca se comparten para marketing o propósitos promocionales de terceros.",
        },
        dataSecurity: {
          title: "5. Seguridad de datos",
          p1: "Aplicamos salvaguardas técnicas y organizacionales estándar de la industria, incluyendo cifrado, controles de acceso y prácticas de infraestructura segura.",
          p2: "Si bien ningún sistema puede garantizar seguridad absoluta, operamos bajo protocolos internos estrictos diseñados para minimizar el riesgo y proteger la confidencialidad en todo momento.",
        },
        dataRetention: {
          title: "6. Retención de datos y sus derechos",
          p1: "Retenemos datos solo mientras sea necesario para cumplir con los propósitos descritos en esta política o para cumplir con requisitos legales.",
          p2: "Usted tiene derecho a solicitar acceso, corrección o eliminación de sus datos, donde corresponda.",
        },
        contact: {
          title: "7. Contacto",
          p1: "Para preguntas sobre esta Política de Privacidad o prácticas de manejo de datos, por favor contacte:",
        },
      },
    },
    terms: {
      title: "Términos y condiciones",
      lastUpdated: "Última actualización: 01 de diciembre de 2025",
      sections: {
        introduction: {
          title: "1. Introducción",
          p1: "Estos Términos y Condiciones (\"Términos\") rigen su acceso y uso del sitio web de Ovelon Prime, procesos de consulta y servicios de automatización profesional. Al acceder al sitio web o contratar nuestros servicios, acepta estar sujeto a estos Términos.",
          p2: "Si no está de acuerdo con estos Términos, debe suspender el uso del sitio web y los servicios inmediatamente.",
        },
        services: {
          title: "2. Servicios proporcionados",
          p1: "Ovelon Prime proporciona servicios profesionales de automatización, diseño de sistemas e implementación para entornos industriales, logísticos, de gestión de instalaciones, infraestructura y otros entornos operacionalmente críticos.",
          p2: "Todos los servicios están sujetos a disponibilidad y revisión. Nos reservamos el derecho de modificar o suspender servicios en cualquier momento sin previo aviso.",
        },
        engagement: {
          title: "3. Alcance del compromiso",
          p1: "Cada compromiso se define a través de un proceso estructurado de admisión y está sujeto a un acuerdo de alcance formal.",
          p2: "Ninguna comunicación, propuesta o discusión constituye un compromiso vinculante a menos que se acuerde explícitamente por escrito.",
        },
        clientResponsibilities: {
          title: "4. Responsabilidades del cliente",
          items: [
            "Proporcionar información precisa y oportuna durante la admisión y el compromiso",
            "Mantener la confidencialidad de las credenciales de acceso y cuentas",
            "Cumplir con todas las leyes y regulaciones aplicables",
            "Notificarnos cualquier cambio que pueda afectar el alcance del compromiso",
          ],
        },
        intellectualProperty: {
          title: "5. Propiedad intelectual",
          p1: "Todo el contenido, diseño e implementaciones entregados bajo un compromiso se convierten en propiedad del cliente tras el pago completo.",
          p2: "Ovelon Prime retiene todos los derechos sobre metodologías propietarias, marcos y herramientas no entregados explícitamente como parte del compromiso.",
        },
        confidentiality: {
          title: "6. Confidencialidad",
          p1: "Ambas partes acuerdan mantener la confidencialidad de toda la información propietaria compartida durante el compromiso.",
          p2: "Los términos de confidencialidad pueden formalizarse en acuerdos separados según sea necesario.",
        },
        limitation: {
          title: "7. Limitación de responsabilidad",
          p1: "Ovelon Prime no será responsable de daños indirectos, incidentales o consecuentes que surjan del uso de nuestros servicios.",
          p2: "Nuestra responsabilidad máxima está limitada a las tarifas pagadas por el compromiso específico en cuestión.",
        },
        termination: {
          title: "8. Terminación",
          p1: "Cualquiera de las partes puede terminar un compromiso con aviso por escrito.",
          p2: "Tras la terminación, el cliente tendrá derecho a todo el trabajo completado hasta la fecha de terminación.",
        },
        governing: {
          title: "9. Ley aplicable",
          p1: "Estos Términos se regirán e interpretarán de acuerdo con las leyes de los Países Bajos.",
        },
        contact: {
          title: "10. Contacto",
          p1: "Para preguntas sobre estos Términos, por favor contacte:",
        },
      },
    },
    simulator: {
      title: "Ingesta de Demanda y Ejecución",
      close: "Cerrar",
      back: "Atrás",
      next: "Siguiente",
      stepIndicator: "Paso {{current}} de {{total}}",
      requestReview: "Solicitar revisión operacional",
      submitting: "Enviando...",
      submitError: "Error al enviar. Por favor intente de nuevo.",
      submitErrorTitle: "Error de envío",
      validationErrorTitle: "Campos obligatorios faltantes",
      validationErrorDescription: "Complete todos los campos obligatorios antes de enviar.",
      step1: {
        title: "Contexto operacional",
        description: "Ayúdenos a entender su entorno operacional y el alcance de sus actividades.",
        industryLabel: "¿En qué industria opera su organización?",
        operationLabel: "¿Qué tipos de operaciones gestiona?",
        operationHint: "Seleccione todas las que apliquen",
        scaleLabel: "¿Cuál es la escala de sus operaciones?",
      },
      step2: {
        title: "Modelo operacional actual",
        description: "Ayúdenos a entender cómo maneja el trabajo hoy — sin juicios, solo claridad.",
        handlingLabel: "¿Cómo se manejan las solicitudes, tareas o incidentes?",
        handlingHint: "Seleccione todos los métodos utilizados",
        structureLabel: "¿Cuál es el nivel de estructura en sus operaciones?",
        toolsLabel: "¿Qué herramientas o sistemas están en uso?",
      },
      step3: {
        title: "Obstáculos y puntos de dolor",
        description: "Identifique dónde el trabajo se ralentiza o se vuelve impredecible hoy.",
        frictionLabel: "¿Qué causa fricción en sus operaciones?",
        frictionHint: "Seleccione todas las que apliquen",
        notesLabel: "Notas adicionales (opcional)",
        notesPlaceholder: "Describa desafíos específicos o contexto...",
      },
      step4: {
        title: "Restricciones y requisitos",
        description: "Defina los límites y requisitos que afectan sus operaciones.",
        downtimeLabel: "¿Qué tan sensibles son sus operaciones al tiempo de inactividad?",
        complianceLabel: "¿Qué marcos de seguridad o cumplimiento aplican?",
        complianceHint: "Seleccione todos los que apliquen",
        complexityLabel: "¿Qué tan compleja es la coordinación interna?",
      },
      step5: {
        title: "Resumen y reflexión",
        description: "Aquí hay un resumen de lo que ha compartido — una imagen clara de su realidad operacional actual.",
        noData: "No hay datos para mostrar. Por favor vuelva y complete los pasos anteriores.",
        contextTitle: "Contexto operacional",
        modelTitle: "Modelo operacional actual",
        hurdlesTitle: "Obstáculos identificados",
        constraintsTitle: "Restricciones y requisitos",
        industry: "Industria",
        operations: "Operaciones",
        scale: "Escala",
        handling: "Manejo de solicitudes",
        structure: "Nivel de estructura",
        tools: "Herramientas",
        downtime: "Sensibilidad al tiempo de inactividad",
        compliance: "Cumplimiento",
        complexity: "Complejidad de coordinación",
        disclaimer: "Esta simulación es indicativa y refleja la información proporcionada por usted. No reemplaza una evaluación profesional. Todos los hallazgos están sujetos a revisión formal.",
      },
      industries: {
        manufacturing: "Manufactura",
        logistics: "Logística",
        facility: "Gestión de instalaciones",
        infrastructure: "Infraestructura",
        energy: "Energía",
        other: "Otro",
      },
      operationTypes: {
        facility: "Operaciones de instalaciones",
        logistics: "Logística y almacenamiento",
        maintenance: "Mantenimiento y reparación",
        production: "Líneas de producción",
        fieldService: "Servicio de campo",
      },
      scales: {
        single: "Ubicación única",
        multi: "Multi-ubicación",
        distributed: "Distribuida/regional",
      },
      handlingMethods: {
        email: "Correo electrónico",
        phone: "Teléfono",
        tickets: "Sistema de tickets",
        verbal: "Transferencia verbal",
        spreadsheets: "Hojas de cálculo",
        erp: "Sistema ERP/CMMS",
      },
      structureLevels: {
        adhoc: {
          title: "Principalmente ad-hoc",
          desc: "El trabajo se maneja según llega, estandarización mínima",
        },
        semiStructured: {
          title: "Semi-estructurado",
          desc: "Algunos procesos están definidos pero la ejecución varía",
        },
        fullyStructured: {
          title: "Totalmente estructurado",
          desc: "Procesos claros con ejecución consistente",
        },
      },
      toolTypes: {
        manual: "Principalmente manual",
        semiAutomated: "Semi-automatizado",
        fragmented: "Sistemas fragmentados",
        integrated: "Plataforma integrada",
      },
      frictionPoints: {
        slowResponse: "Tiempos de respuesta lentos",
        unclearOwnership: "Propiedad de tareas poco clara",
        manualCoordination: "Coordinación manual excesiva",
        inconsistentExecution: "Ejecución inconsistente",
        lackVisibility: "Falta de visibilidad en tiempo real",
        escalationDelays: "Retrasos en el escalamiento",
        documentationGaps: "Brechas en la documentación",
        communicationBreakdown: "Ruptura de comunicación",
      },
      downtimeLevels: {
        critical: {
          title: "Crítico",
          desc: "Cada minuto de inactividad cuesta significativamente",
        },
        high: {
          title: "Alto",
          desc: "El tiempo de inactividad impacta severamente las operaciones",
        },
        moderate: {
          title: "Moderado",
          desc: "Cierta tolerancia pero afecta el rendimiento",
        },
        low: {
          title: "Bajo",
          desc: "Puede gestionar interrupciones a corto plazo",
        },
      },
      complianceOptions: {
        iso: "ISO 9001/27001",
        hse: "HSE/EHS",
        osha: "OSHA",
        vca: "VCA/SCC",
        gdpr: "GDPR/Protección de datos",
        sectorSpecific: "Regulaciones sectoriales",
      },
      complexityLevels: {
        simple: "Simple",
        moderate: "Moderada",
        complex: "Compleja",
        veryComplex: "Muy compleja",
      },
      step6: {
        title: "Análisis operacional",
        description: "Basándose en la información proporcionada, aquí hay un análisis operacional de nivel ejecutivo de su estado actual.",
        noData: "Datos insuficientes para generar análisis. Por favor complete los pasos anteriores.",
        observationsTitle: "Observaciones operacionales",
        risksTitle: "Áreas de riesgo y exposición",
        readinessTitle: "Evaluación de preparación para la ejecución",
        advisoryTitle: "Dirección de asesoramiento (alto nivel)",
        disclaimer: "Este análisis es indicativo y se basa en información auto-reportada. No reemplaza una evaluación profesional. Todos los hallazgos están sujetos a revisión formal.",
      },
      step7: {
        title: "Datos de contacto",
        description: "Estos datos son necesarios para adjuntar el análisis operacional a una solicitud de revisión formal.",
        personalTitle: "Datos personales",
        companyTitle: "Datos de la empresa",
        fullName: "Nombre completo",
        fullNamePlaceholder: "Ingrese su nombre completo",
        email: "Dirección de correo electrónico",
        emailPlaceholder: "Ingrese correo electrónico empresarial",
        phone: "Número de teléfono",
        phonePlaceholder: "Ingrese número de teléfono",
        companyName: "Nombre de la empresa",
        companyNamePlaceholder: "Ingrese nombre de la empresa",
        role: "Cargo / Función",
        rolePlaceholder: "ej. Gerente de operaciones",
        country: "País",
        countryPlaceholder: "Ingrese país",
        city: "Ciudad",
        cityPlaceholder: "Ingrese ciudad",
        requiredNote: "Todos los campos marcados con * son obligatorios. Sus datos se usarán únicamente para procesar esta solicitud.",
      },
      analysis: {
        observations: {
          industry: {
            manufacturing: "Operar en un entorno de manufactura típicamente involucra programación de producción compleja, ciclos de mantenimiento de equipos y requisitos de control de calidad.",
            logistics: "Las operaciones logísticas requieren coordinación estrecha entre múltiples partes interesadas, entregas críticas en tiempo y visibilidad en tiempo real a través de las cadenas de suministro.",
            facility: "Las operaciones de gestión de instalaciones abarcan múltiples categorías de servicio y requieren coordinación entre equipos internos y contratistas externos.",
            infrastructure: "Las operaciones de infraestructura a menudo involucran activos distribuidos geográficamente con requisitos de mantenimiento variables y supervisión regulatoria.",
            energy: "Las operaciones del sector energético requieren adherencia estricta a protocolos de seguridad, cumplimiento regulatorio y monitoreo continuo de sistemas críticos.",
            other: "Las operaciones abarcan múltiples dominios con requisitos variables para coordinación, cumplimiento y control de ejecución.",
          },
          scale: {
            single: "Las operaciones de ubicación única permiten control centralizado pero aún pueden enfrentar desafíos de coordinación entre turnos y departamentos.",
            multi: "Las operaciones multi-ubicación introducen complejidad en la estandarización, comunicación y asegurar ejecución consistente a través de ubicaciones.",
            distributed: "Las operaciones distribuidas o regionales requieren mecanismos de coordinación robustos para mantener visibilidad y control sobre equipos dispersos.",
          },
          structure: {
            adhoc: "La estructura operacional ad-hoc sugiere alta dependencia del juicio individual e inconsistencia potencial en la ejecución.",
            semiStructured: "Los procesos semi-estructurados indican estandarización parcial con espacio para variación, lo que puede llevar a resultados inconsistentes.",
            fullyStructured: "Las operaciones totalmente estructuradas proporcionan una base para ejecución predecible, aunque la efectividad depende de la adherencia y el cumplimiento.",
          },
          tools: {
            fragmented: "El panorama de herramientas fragmentado típicamente lleva a silos de información, reconciliación manual de datos y sobrecarga de coordinación.",
            manual: "La fuerte dependencia de procesos manuales aumenta el riesgo de errores y limita la escalabilidad de las operaciones.",
          },
        },
        risks: {
          predictability: "Riesgo de predictibilidad: La ejecución inconsistente y los patrones de propiedad poco claros pueden llevar a resultados operacionales impredecibles.",
          coordination: "Riesgo de coordinación: La coordinación manual y las brechas de comunicación pueden resultar en retrasos, errores y fallas de escalamiento.",
          downtime: "Exposición al tiempo de inactividad: La alta sensibilidad al tiempo de inactividad combinada con patrones operacionales actuales sugiere riesgo elevado de interrupciones costosas.",
          compliance: "Exposición al cumplimiento: La brecha entre requisitos de cumplimiento y nivel de estructura actual puede crear riesgos de auditoría y regulatorios.",
          escalation: "Riesgo de escalamiento: Los retrasos en la resolución de problemas y la visibilidad limitada pueden permitir que problemas menores escalen a problemas operacionales significativos.",
        },
        readiness: {
          high: "La organización parece razonablemente preparada para el cambio operacional, con estructura existente y herramientas proporcionando una base para iniciativas de mejora.",
          moderate: "La organización muestra indicadores de preparación mixtos. Algunos elementos fundamentales existen, pero brechas en estructura o herramientas pueden requerir atención antes de escalar cambios.",
          low: "Los patrones operacionales actuales sugieren preparación limitada para escala o cambio significativo sin primero abordar brechas fundamentales de coordinación y estructura.",
        },
        advisory: {
          ownership: "Considere establecer estructuras de propiedad más claras y marcos de responsabilidad para reducir la sobrecarga de coordinación y mejorar la predictibilidad de respuesta.",
          standardization: "Enfóquese en estandarizar procesos operacionales centrales para reducir la variación y establecer patrones de ejecución consistentes entre equipos.",
          escalation: "Implemente rutas de escalamiento estructuradas con ventanas de respuesta definidas y propiedad clara en cada nivel.",
          compliance: "Alinee la estructura operacional con los requisitos de cumplimiento para reducir la exposición a auditorías y asegurar adherencia consistente a estándares regulatorios.",
          scale: "Para operaciones multi-sitio o distribuidas, priorice mecanismos que aseguren consistencia y visibilidad a través de ubicaciones.",
        },
      },
    },
    submission: {
      title: "Envío recibido",
      body1: "Su revisión operacional ha sido enviada exitosamente.",
      body2: "Nuestro equipo revisará cuidadosamente su solicitud y hará seguimiento en consecuencia.",
      body3: "Para acelerar los próximos pasos, puede programar una consulta estratégica a continuación.",
      scheduleBtn: "Programar consulta estratégica",
      closeBtn: "Cerrar",
      referenceLabel: "ID de referencia",
      emailSent: "Confirmación enviada a",
      pdfAttached: "Resumen PDF adjunto para sus registros",
    },
    governanceTrends: {
      title: "Operar en una realidad regulada",
      subtitle: "A medida que los entornos operativos se vuelven más regulados, interconectados y escrutados, el liderazgo se define cada vez más por el control, la documentación y la consistencia — no por la velocidad o la improvisación.",
      column1: {
        title: "Lo que priorizan los líderes operativos",
        items: [
          "Instrucciones de trabajo claras y aplicables",
          "Ejecución predecible entre turnos y equipos",
          "Procedimientos de seguridad que dejan poco margen a la interpretación",
          "Menos decisiones improvisadas durante incidentes",
          "Documentación que habla por sí misma"
        ]
      },
      column2: {
        title: "Estándares, cumplimiento y responsabilidad",
        items: [
          "Sistemas de gestión formales basados en estándares reconocidos",
          "Procedimientos y acciones correctivas trazables",
          "Registros de capacitación y competencia verificables",
          "Protección de datos y control de acceso por defecto",
          "Decisiones que pueden reconstruirse después del hecho"
        ]
      },
      column3: {
        title: "Seguridad, higiene y realidad operativa",
        items: [
          "Las reglas de seguridad deben funcionar bajo presión, no solo en papel",
          "Los procedimientos de higiene deben ser consistentes en todas las ubicaciones",
          "Las desviaciones deben registrarse, no normalizarse",
          "Las soluciones informales aumentan la exposición",
          "La responsabilidad personal se acerca al nivel operativo"
        ]
      },
      trend1: "Mirando hacia adelante, la tendencia es clara: las operaciones deben ser explicables, auditables y repetibles — incluso bajo interrupción.",
      trend2: "Las organizaciones que tendrán éxito serán aquellas que integren estándares, seguridad, higiene y disciplina de datos directamente en la ejecución diaria. No como sobrecarga, sino como estructura operativa."
    },
  },

  /* ===================== IT ===================== */
  it: {
    backToTop: "Torna in cima",
    explore: "Esplora",

    common: {
      back: "Indietro",
    },

    nav: {
      services: "Servizi",
      pricing: "Prezzi",
      about: "Chi siamo",
      contact: "Contatto",
      cta: "Parla con un esperto",
      viewDemo: "Vedi demo",
    },
    hero: {
      badge: "Industrie critiche orientate ai risultati",
      title: "La complessità operativa erode",
      titleHighlight: "l'affidabilità e spezza la disciplina di esecuzione",
      subtitle:
        "Quando il coordinamento diventa manuale, la manutenzione diventa reattiva e le operazioni si affidano a soluzioni alternative, il controllo è già perso.",
      subtitle2:
        "Ripristiniamo un'esecuzione prevedibile e disciplinata all'interno delle operazioni attive — senza sostituire i sistemi core né interrompere i flussi di lavoro quotidiani.",
      subtitleMobile: "Quando il coordinamento diventa manuale, il controllo è già perso.",
      cta: "Riprendi il controllo delle operazioni",
      simulatorCta: "Acquisizione Domanda ed Esecuzione",
    },
    video: {
      title: "Progettato per operazioni ininterrotte",
      subtitle: "Scopri come Ovelon Prime supporta ambienti mission-critical senza interrompere i sistemi attivi.",
      cta: "Sessione di idoneità operativa",
    },
    services: {
      label: "COSA STABILIZIAMO",
      title: "Affidabilità operativa in ambienti",
      titleHighlight: "che non possono permettersi errori",
      subtitle:
        "Eliminiamo i guasti operativi causati dal coordinamento manuale, dall'esecuzione poco chiara e dalla gestione reattiva degli incidenti — ripristinando controllo, responsabilità e risultati prevedibili all'interno delle operazioni attive.",
      items: [
        {
          title: "Gestione richieste e domanda",
          description:
            "Le richieste in arrivo vengono acquisite, validate e instradate in modo coerente — senza dipendere dal follow-up ad hoc o dal giudizio individuale.",
          tags: ["Controllo intelligente dell'intake", "Regole di qualificazione", "Instradamento di sistema"],
        },
        {
          title: "Standard di sicurezza ed esecuzione",
          description:
            "Istruzioni visive standardizzate utilizzate per allineare operatori, appaltatori e team su procedure critiche per la sicurezza — riducendo errori di interpretazione, deviazioni e rischi di esecuzione.",
          tags: [
            "Procedure HSE",
            "Allineamento ISO / VCA / OSHA",
            "Onboarding operatori e appaltatori",
          ],
        },
        {
          title: "Gestione incidenti e escalation",
          description:
            "I problemi vengono registrati, classificati e escalati in modo controllato — garantendo responsabilità, chiarezza nella risposta e percorsi di risoluzione prevedibili.",
          tags: ["Classificazione dei problemi", "Percorsi di escalation", "Proprietà della risposta"],
        },
      ],
    },
    sectors: {
      label: "Settori",
      title: "Affidabilità operativa per",
      titleHighlight: "industrie mission-critical",
      subtitle: "Supportiamo ambienti operativi dove il downtime, il disallineamento o la risposta ritardata impattano direttamente sicurezza, continuità o produzione.",
      items: [
        {
          name: "Gestione delle strutture",
          description: "Gestione di asset distribuiti e richieste di servizio in strutture complesse — con bassa tolleranza per ritardi o cattivo coordinamento.",
        },
        {
          name: "Manutenzione e riparazione",
          description: "Operare sotto pressione costante per prevenire il downtime nella manutenzione reattiva e preventiva — spesso con informazioni incomplete e finestre di risposta strette.",
        },
        {
          name: "Logistica e magazzinaggio",
          description: "Coordinamento di personale, attrezzature e flussi di lavoro sotto scadenze rigide e pressione operativa continua.",
        },
      ],
    },
    testimonials: {
      title: "Testimonianze dei clienti",
      items: [
        {
          quote: "Prima di Ovelon Prime, il coordinamento dei turni dipendeva dal follow-up individuale. Oggi, manutenzione e pianificazione si eseguono in modo prevedibile su tutti i turni — senza intervento manuale.",
          name: "Martin Keller",
          title: "Responsabile operazioni logistiche",
        },
        {
          quote: "Nel nostro ambiente, i ritardi influenzano direttamente sicurezza e produzione. Ovelon Prime ci ha aiutato a standardizzare l'esecuzione tra i team, riducendo i tempi di risposta del 45% senza aumentare il rischio operativo.",
          name: "Alicia Zhang",
          title: "Direttrice delle operazioni",
        },
        {
          quote: "Operiamo sotto pressione continua. Da quando abbiamo implementato il sistema, l'instradamento e l'escalation seguono regole fisse — non supposizioni. Il downtime causato da errori di coordinamento non è più un fattore.",
          name: "Daniel Hoffman",
          title: "Direttore di stabilimento",
        },
      ],
    },
    operationalTrust: {
      heading: "Progettato per ambienti regolamentati e critici per la sicurezza",
      items: [
        { text: "Principi di sicurezza allineati ISO 27001" },
        { text: "Controllo dei processi in stile ISO 9001" },
        { text: "Design operativo consapevole HSE" },
        { text: "Documentazione e controlli pronti per l'audit" },
        { text: "Proprietà completa del cliente — nessun sistema black-box" },
      ],
      footer: "Progettato per ambienti esaminati dal CISO con governance della sicurezza interna, politiche di controllo degli accessi e procedure di change management.",
    },
    about: {
      label: "Chi siamo",
      title: "Costruito sull'esperienza operativa,",
      titleHighlight: "guidato dalla precisione",
      description1:
        "Ovelon Prime lavora con organizzazioni che operano sotto pressione costante — dove downtime, ritardi e processi manuali impattano direttamente costi, sicurezza e affidabilità.",
      description2:
        "Combiniamo una profonda esperienza nel dominio operativo con livelli di controllo operativo per progettare sistemi che si integrano perfettamente nei flussi di lavoro esistenti, senza interrompere le operazioni critiche.",
      quote:
        '"La precisione non è opzionale. In ambienti dove l\'affidabilità determina i risultati, i sistemi devono essere progettati per funzionare sotto pressione."',
      quoteAuthor: "Team dirigenziale · Ovelon Prime",
      stats: {
        uptime: "Uptime del sistema operativo",
        deployments: "Deployment di automazione",
        industries: "Industrie critiche servite",
      },
    },
    pricing: {
      label: "Prezzi",
      title: "Prezzi basati sull'impegno, con risultati chiaramente definiti",
      subtitle:
        "Impegni chiaramente definiti focalizzati sul miglioramento dell'affidabilità, la riduzione dell'attrito operativo e la creazione di un impatto misurabile.",
      focused: {
        name: "Impegno operativo mirato",
        description:
          "Un impegno a scope fisso progettato per risolvere un collo di bottiglia operativo chiaramente definito con impatto misurabile.",
        priceLabel: "A partire da",
        period: "tariffa una tantum",
        cta: "Richiedi valutazione dell'impegno",
        features: [
          "Miglioramento operativo singolo e chiaramente definito",
          "Mappatura dei processi e delle responsabilità",
          "Implementazione e rollout controllati",
          "Documentazione e passaggio di consegne operativo",
          "Validazione post-implementazione",
        ],
      },
      enterprise: {
        name: "Programma operativo Enterprise",
        description:
          "Sistemi operativi personalizzati per organizzazioni complesse con requisiti rigorosi di governance, conformità e continuità.",
        priceLabel: "Prezzi personalizzati",
        price: "Servizio personalizzato",
        period: "tariffa una tantum",
        cta: "Richiedi valutazione iniziale",
        badge: "Enterprise",
        features: [
          "Architettura operativa multi-sistema",
          "Integrazioni personalizzate con sistemi esistenti",
          "Supporto dedicato per implementazione e transizione",
          "Design operativo consapevole della conformità",
          "Framework SLA e governance personalizzato",
        ],
      },
      securityNote:
        "Ogni impegno è costruito con sicurezza di livello enterprise, protezione dei dati e conformità operativa.",
      talkToExpert: "Parla con un esperto",
      intakeNote:
        "Acquisizione strutturata · Nessuna pressione commerciale · Direttamente con un esperto esperto",
      reviewNote: "Tutte le richieste vengono esaminate prima della programmazione.",
    },
    contact: {
      label: "IMPEGNO",
      title: "Pronto a riprendere il controllo delle",
      titleHighlight: " tue operazioni?",
      subtitle: "Tutti gli impegni sono definiti in anticipo e soggetti a una revisione formale prima di continuare.",
      cta: "Pianifica una consulenza",
      guarantee: "Nessun impegno a lungo termine.",
      guaranteeHighlight: "Gli impegni continuano solo quando il valore operativo è dimostrato",
      guaranteeSuffix: " sugli impegni qualificanti.",
      enterpriseLabel: "Richieste Enterprise: ",
    },
    contactForm: {
      firstName: "Nome",
      firstNamePlaceholder: "Marco",
      lastName: "Cognome",
      lastNamePlaceholder: "Rossi",
      businessName: "Nome azienda",
      businessNamePlaceholder: "Acme Industrie",
      businessEmail: "Email aziendale",
      businessEmailPlaceholder: "marco@azienda.it",
      requestDetails: "Dettagli della richiesta",
      requestDetailsPlaceholder: "Descriva le sue sfide operative e cosa desidera ottenere...",
      submit: "Invia richiesta",
      submitting: "Invio in corso...",
      validationError: "Compilare correttamente tutti i campi obbligatori.",
      successTitle: "Inviato con successo",
      successMessage: "Esamineremo attentamente la sua richiesta.",
      successCta: "Prenota una consulenza strategica",
    },
    faq: {
      title: "Domande frequenti",
      category: "Impegno e consegna",
      items: [
        {
          question: "Come funziona Ovelon Prime?",
          answer:
            "Iniziamo con un'acquisizione strutturata per comprendere il vincolo operativo. Progettiamo e validiamo una soluzione a scope fisso rispetto ai flussi di lavoro reali. Implementiamo, testiamo sotto carico e consegniamo con documentazione completa.",
        },
        {
          question: "In quali industrie siete specializzati?",
          answer:
            "Lavoriamo con organizzazioni che operano in ambienti mission-critical, inclusi manifattura, logistica e gestione delle strutture. Se ritardi, errori o downtime impattano direttamente sicurezza, produzione o continuità, siamo il partner giusto.",
        },
        {
          question: "È un abbonamento o un servizio continuativo?",
          answer:
            "No. Gli impegni hanno scope fisso e sono orientati ai risultati. Non c'è abbonamento obbligatorio, dipendenza da licenza o tariffe continuative. Sei proprietario del sistema dopo la consegna.",
        },
        {
          question: "Quanto dura un'implementazione tipica?",
          answer:
            "La maggior parte degli impegni mirati viene consegnata entro 12-16 giorni, a seconda dello scope e dell'accesso ai sistemi. I programmi Enterprise seguono un rollout graduale allineato alle priorità operative.",
        },
        {
          question: "Questo si integrerà con i nostri sistemi esistenti?",
          answer:
            "Sì. Le soluzioni sono progettate per integrarsi con i sistemi esistenti senza sostituire le piattaforme core. Lavoriamo all'interno dei vostri strumenti attuali e dei confini dei dati.",
        },
        {
          question: "Dobbiamo cambiare i nostri flussi di lavoro attuali?",
          answer:
            "No. Progettiamo intorno ai vostri flussi di lavoro esistenti. Dove sono necessari cambiamenti, sono minimi, documentati e validati con i vostri team operativi prima del deployment.",
        },
        {
          question: "Chi è proprietario dell'ottimizzazione dopo la consegna?",
          answer:
            "Voi. Tutti i sistemi, le configurazioni e la documentazione vengono consegnati al completamento. Non c'è lock-in del vendor. Mantenete la proprietà operativa e tecnica completa.",
        },
        {
          question: "Come gestite sicurezza e conformità?",
          answer:
            "Sicurezza e conformità sono trattate come vincoli di progettazione, non come ripensamenti. Ogni impegno è progettato intorno alle vostre politiche di sicurezza esistenti, ai controlli di accesso e ai requisiti di conformità. Lavoriamo all'interno della vostra infrastruttura approvata, dei confini dei dati e dei framework di governance.",
        },
        {
          question: "Quale livello di coinvolgimento interno è richiesto?",
          answer:
            "Coinvolgimento minimo e strutturato. Richiediamo input limitato durante l'acquisizione per comprendere i vincoli operativi e validare le ipotesi. L'implementazione è gestita in modo indipendente, con checkpoint chiari per revisione e approvazione.",
        },
        {
          question: "Ovelon Prime è adatto per grandi ambienti enterprise?",
          answer:
            "Sì. Siamo progettati per ambienti complessi multi-stakeholder con requisiti rigorosi di governance, conformità e operativi. Gli impegni sono strutturati per allinearsi con il change management enterprise, le revisioni di sicurezza e i rollout graduali.",
        },
      ],
    },
    footer: {
      privacy: "Privacy",
      terms: "Termini",
      copyright: "Ovelon Prime. Tutti i diritti riservati.",
      tagline: "Sistemi operativi enterprise costruiti per chiarezza, controllo e scala.",
    },
    industrialTrust: {
      heading: "Affidato dagli operatori in ambienti mission-critical",
      disclaimer: "Operatori rappresentativi dei settori industriale, logistico, manifatturiero e infrastrutturale. Gli impegni variano per scope e ambiente.",
    },
    intake: {
      title: "Qualificazione della consulenza",
      subtitle: "Si prega di compilare il breve modulo qui sotto. Tutte le richieste vengono esaminate prima della programmazione.",
    },
    cookie: {
      message: "Utilizziamo i cookie per migliorare la tua esperienza. Continuando a visitare questo sito, accetti il nostro utilizzo dei cookie.",
      accept: "Accetta",
      decline: "Rifiuta",
      learnMore: "Maggiori informazioni",
    },
    privacy: {
      title: "Informativa sulla privacy",
      lastUpdated: "Ultimo aggiornamento: 01.12.2025",
      sections: {
        introduction: {
          title: "1. Introduzione",
          p1: "In Ovelon Prime, prendiamo sul serio la protezione dei dati e la riservatezza. Questa Informativa sulla Privacy spiega come raccogliamo, utilizziamo e proteggiamo le informazioni personali e aziendali quando interagisci con il nostro sito web, i moduli di acquisizione e i servizi.",
          p2: "Elaboriamo i dati in modo responsabile e solo nella misura necessaria per fornire i nostri servizi, garantire l'integrità operativa e soddisfare gli obblighi legali.",
        },
        informationCollected: {
          title: "2. Informazioni che raccogliamo",
          personal: "Informazioni personali:",
          personalDesc: "Nome, indirizzo email aziendale, numero di telefono e informazioni inviate tramite moduli o corrispondenza diretta.",
          business: "Informazioni aziendali e operative:",
          businessDesc: "Nome dell'azienda, indirizzo aziendale o giurisdizione, classificazione del settore, contesto operativo e informazioni relative alla conformità fornite volontariamente durante l'acquisizione.",
          technical: "Informazioni tecniche:",
          technicalDesc: "Indirizzo IP, metadati del browser e del dispositivo, cookie e analisi di utilizzo di base.",
          note: "Non raccogliamo intenzionalmente dati personali sensibili a meno che non sia esplicitamente richiesto per conformità o fornitura di servizi.",
        },
        howWeUse: {
          title: "3. Come utilizziamo le tue informazioni",
          items: [
            "Valutare e qualificare le richieste di consulenza",
            "Fornire e supportare i servizi di automazione operativa",
            "Comunicare riguardo a impegni, aggiornamenti o chiarimenti",
            "Mantenere l'affidabilità, la sicurezza e le prestazioni della piattaforma",
            "Adempiere agli obblighi legali, normativi o contrattuali",
          ],
          note: "Non utilizziamo i tuoi dati per marketing non richiesto, profilazione o scopi pubblicitari di terze parti.",
        },
        dataSharing: {
          title: "4. Condivisione e divulgazione dei dati",
          p1: "Ovelon Prime non vende, affitta o scambia dati personali o aziendali.",
          p2: "Le informazioni possono essere condivise solo quando strettamente necessario:",
          items: [
            "Con fornitori di servizi verificati necessari per la fornitura del servizio",
            "Per conformarsi agli obblighi legali o normativi",
            "Per proteggere la sicurezza, l'integrità o i diritti dei nostri sistemi e clienti",
          ],
          note: "I dati non vengono mai condivisi per scopi di marketing o promozionali di terze parti.",
        },
        dataSecurity: {
          title: "5. Sicurezza dei dati",
          p1: "Applichiamo salvaguardie tecniche e organizzative standard del settore, inclusa crittografia, controlli di accesso e pratiche di infrastruttura sicura.",
          p2: "Mentre nessun sistema può garantire sicurezza assoluta, operiamo secondo protocolli interni rigorosi progettati per minimizzare il rischio e proteggere la riservatezza in ogni momento.",
        },
        dataRetention: {
          title: "6. Conservazione dei dati e i tuoi diritti",
          p1: "Conserviamo i dati solo per il tempo necessario a soddisfare gli scopi delineati in questa politica o per soddisfare i requisiti legali.",
          p2: "Hai il diritto di richiedere l'accesso, la correzione o la cancellazione dei tuoi dati, ove applicabile.",
        },
        contact: {
          title: "7. Contatto",
          p1: "Per domande riguardanti questa Informativa sulla Privacy o le pratiche di gestione dei dati, si prega di contattare:",
        },
      },
    },
    terms: {
      title: "Termini e condizioni",
      lastUpdated: "Ultimo aggiornamento: 01 dicembre 2025",
      sections: {
        introduction: {
          title: "1. Introduzione",
          p1: "Questi Termini e Condizioni (\"Termini\") regolano il tuo accesso e utilizzo del sito web Ovelon Prime, dei processi di consulenza e dei servizi di automazione professionale. Accedendo al sito web o utilizzando i nostri servizi, accetti di essere vincolato da questi Termini.",
          p2: "Se non sei d'accordo con questi Termini, devi interrompere immediatamente l'uso del sito web e dei servizi.",
        },
        services: {
          title: "2. Servizi forniti",
          p1: "Ovelon Prime fornisce servizi professionali di automazione, progettazione di sistemi e implementazione per ambienti industriali, logistici, di gestione delle strutture, infrastrutturali e altri ambienti operativamente critici.",
          p2: "Tutti i servizi sono soggetti a disponibilità e revisione. Ci riserviamo il diritto di modificare o sospendere i servizi in qualsiasi momento senza preavviso.",
        },
        engagement: {
          title: "3. Scope dell'impegno",
          p1: "Ogni impegno è definito attraverso un processo di acquisizione strutturato ed è soggetto a un accordo di scope formale.",
          p2: "Nessuna comunicazione, proposta o discussione costituisce un impegno vincolante a meno che non sia esplicitamente concordato per iscritto.",
        },
        clientResponsibilities: {
          title: "4. Responsabilità del cliente",
          items: [
            "Fornire informazioni accurate e tempestive durante l'acquisizione e l'impegno",
            "Mantenere la riservatezza delle credenziali di accesso e degli account",
            "Rispettare tutte le leggi e i regolamenti applicabili",
            "Notificarci eventuali cambiamenti che potrebbero influenzare lo scope dell'impegno",
          ],
        },
        intellectualProperty: {
          title: "5. Proprietà intellettuale",
          p1: "Tutti i contenuti, i design e le implementazioni consegnati nell'ambito di un impegno diventano proprietà del cliente al pagamento completo.",
          p2: "Ovelon Prime mantiene tutti i diritti su metodologie proprietarie, framework e strumenti non esplicitamente consegnati come parte dell'impegno.",
        },
        confidentiality: {
          title: "6. Riservatezza",
          p1: "Entrambe le parti concordano di mantenere la riservatezza di tutte le informazioni proprietarie condivise durante l'impegno.",
          p2: "I termini di riservatezza possono essere formalizzati in accordi separati secondo necessità.",
        },
        limitation: {
          title: "7. Limitazione di responsabilità",
          p1: "Ovelon Prime non sarà responsabile per danni indiretti, incidentali o consequenziali derivanti dall'uso dei nostri servizi.",
          p2: "La nostra massima responsabilità è limitata alle tariffe pagate per l'impegno specifico in questione.",
        },
        termination: {
          title: "8. Risoluzione",
          p1: "Entrambe le parti possono risolvere un impegno con preavviso scritto.",
          p2: "Alla risoluzione, il cliente avrà diritto a tutto il lavoro completato fino alla data di risoluzione.",
        },
        governing: {
          title: "9. Legge applicabile",
          p1: "Questi Termini saranno regolati e interpretati secondo le leggi dei Paesi Bassi.",
        },
        contact: {
          title: "10. Contatto",
          p1: "Per domande riguardanti questi Termini, si prega di contattare:",
        },
      },
    },
    simulator: {
      title: "Acquisizione Domanda ed Esecuzione",
      close: "Chiudi",
      back: "Indietro",
      next: "Avanti",
      stepIndicator: "Passo {{current}} di {{total}}",
      requestReview: "Richiedi revisione operativa",
      submitError: "Errore durante l'invio. Riprova.",
      step1: {
        title: "Contesto operativo",
        description: "Aiutaci a comprendere il tuo ambiente operativo e l'ambito delle tue attività.",
        industryLabel: "In quale settore opera la tua organizzazione?",
        operationLabel: "Che tipi di operazioni gestisci?",
        operationHint: "Seleziona tutti quelli applicabili",
        scaleLabel: "Qual è la scala delle tue operazioni?",
      },
      step2: {
        title: "Modello operativo attuale",
        description: "Aiutaci a capire come gestisci il lavoro oggi — senza giudizi, solo chiarezza.",
        handlingLabel: "Come vengono gestite richieste, task o incidenti?",
        handlingHint: "Seleziona tutti i metodi utilizzati",
        structureLabel: "Qual è il livello di struttura nelle tue operazioni?",
        toolsLabel: "Quali strumenti o sistemi sono in uso?",
      },
      step3: {
        title: "Ostacoli e punti critici",
        description: "Identifica dove il lavoro rallenta o diventa imprevedibile oggi.",
        frictionLabel: "Cosa causa attrito nelle tue operazioni?",
        frictionHint: "Seleziona tutti quelli applicabili",
        notesLabel: "Note aggiuntive (opzionale)",
        notesPlaceholder: "Descrivi sfide specifiche o contesto...",
      },
      step4: {
        title: "Vincoli e requisiti",
        description: "Definisci i confini e i requisiti che influenzano le tue operazioni.",
        downtimeLabel: "Quanto sono sensibili le tue operazioni al downtime?",
        complianceLabel: "Quali framework di sicurezza o conformità si applicano?",
        complianceHint: "Seleziona tutti quelli applicabili",
        complexityLabel: "Quanto è complesso il coordinamento interno?",
      },
      step5: {
        title: "Riepilogo e riflessione",
        description: "Ecco un riepilogo di ciò che hai condiviso — un quadro chiaro della tua attuale realtà operativa.",
        noData: "Nessun dato da visualizzare. Torna indietro e completa i passaggi precedenti.",
        contextTitle: "Contesto operativo",
        modelTitle: "Modello operativo attuale",
        hurdlesTitle: "Ostacoli identificati",
        constraintsTitle: "Vincoli e requisiti",
        industry: "Settore",
        operations: "Operazioni",
        scale: "Scala",
        handling: "Gestione richieste",
        structure: "Livello di struttura",
        tools: "Strumenti",
        downtime: "Sensibilità al downtime",
        compliance: "Conformità",
        complexity: "Complessità del coordinamento",
        disclaimer: "Questa simulazione è indicativa e riflette le informazioni da te fornite. Non sostituisce una valutazione professionale. Tutti i risultati sono soggetti a revisione formale.",
      },
      industries: {
        manufacturing: "Manifattura",
        logistics: "Logistica",
        facility: "Gestione delle strutture",
        infrastructure: "Infrastruttura",
        energy: "Energia",
        other: "Altro",
      },
      operationTypes: {
        facility: "Operazioni delle strutture",
        logistics: "Logistica e magazzinaggio",
        maintenance: "Manutenzione e riparazione",
        production: "Linee di produzione",
        fieldService: "Servizio sul campo",
      },
      scales: {
        single: "Singola sede",
        multi: "Multi-sede",
        distributed: "Distribuita/regionale",
      },
      handlingMethods: {
        email: "Email",
        phone: "Telefono",
        tickets: "Sistema di ticketing",
        verbal: "Trasferimento verbale",
        spreadsheets: "Fogli di calcolo",
        erp: "Sistema ERP/CMMS",
      },
      structureLevels: {
        adhoc: {
          title: "Principalmente ad-hoc",
          desc: "Il lavoro viene gestito man mano che arriva, standardizzazione minima",
        },
        semiStructured: {
          title: "Semi-strutturato",
          desc: "Alcuni processi sono definiti ma l'esecuzione varia",
        },
        fullyStructured: {
          title: "Completamente strutturato",
          desc: "Processi chiari con esecuzione coerente",
        },
      },
      toolTypes: {
        manual: "Principalmente manuale",
        semiAutomated: "Semi-automatizzato",
        fragmented: "Sistemi frammentati",
        integrated: "Piattaforma integrata",
      },
      frictionPoints: {
        slowResponse: "Tempi di risposta lenti",
        unclearOwnership: "Proprietà dei task poco chiara",
        manualCoordination: "Coordinamento manuale eccessivo",
        inconsistentExecution: "Esecuzione incoerente",
        lackVisibility: "Mancanza di visibilità in tempo reale",
        escalationDelays: "Ritardi nell'escalation",
        documentationGaps: "Lacune nella documentazione",
        communicationBreakdown: "Interruzione della comunicazione",
      },
      downtimeLevels: {
        critical: {
          title: "Critico",
          desc: "Ogni minuto di downtime costa significativamente",
        },
        high: {
          title: "Alto",
          desc: "Il downtime impatta severamente le operazioni",
        },
        moderate: {
          title: "Moderato",
          desc: "Qualche tolleranza ma influenza le prestazioni",
        },
        low: {
          title: "Basso",
          desc: "È possibile gestire interruzioni a breve termine",
        },
      },
      complianceOptions: {
        iso: "ISO 9001/27001",
        hse: "HSE/SSL",
        osha: "OSHA",
        vca: "VCA/SCC",
        gdpr: "GDPR/Protezione dati",
        sectorSpecific: "Regolamenti settoriali",
      },
      complexityLevels: {
        simple: "Semplice",
        moderate: "Moderata",
        complex: "Complessa",
        veryComplex: "Molto complessa",
      },
      step6: {
        title: "Analisi operativa",
        description: "Sulla base delle informazioni fornite, ecco un'analisi operativa a livello executive del tuo stato attuale.",
        noData: "Dati insufficienti per generare l'analisi. Completa i passaggi precedenti.",
        observationsTitle: "Osservazioni operative",
        risksTitle: "Aree di rischio ed esposizione",
        readinessTitle: "Valutazione della prontezza all'esecuzione",
        advisoryTitle: "Direzione consultiva (alto livello)",
        disclaimer: "Questa analisi è indicativa e si basa su informazioni auto-riportate. Non sostituisce una valutazione professionale. Tutti i risultati sono soggetti a revisione formale.",
      },
      step7: {
        title: "Dati di contatto",
        description: "Questi dati sono necessari per allegare l'analisi operativa a una richiesta di revisione formale.",
        personalTitle: "Dati personali",
        companyTitle: "Dati aziendali",
        fullName: "Nome completo",
        fullNamePlaceholder: "Inserisci il tuo nome completo",
        email: "Indirizzo email",
        emailPlaceholder: "Inserisci email aziendale",
        phone: "Numero di telefono",
        phonePlaceholder: "Inserisci numero di telefono",
        companyName: "Nome azienda",
        companyNamePlaceholder: "Inserisci nome azienda",
        role: "Ruolo / Funzione",
        rolePlaceholder: "es. Responsabile operazioni",
        country: "Paese",
        countryPlaceholder: "Inserisci paese",
        city: "Città",
        cityPlaceholder: "Inserisci città",
        requiredNote: "Tutti i campi contrassegnati con * sono obbligatori. I tuoi dati saranno utilizzati esclusivamente per elaborare questa richiesta.",
      },
      submitting: "Invio in corso...",
      analysis: {
        observations: {
          industry: {
            manufacturing: "Operare in un ambiente manifatturiero tipicamente comporta pianificazione della produzione complessa, cicli di manutenzione delle attrezzature e requisiti di controllo qualità.",
            logistics: "Le operazioni logistiche richiedono coordinamento stretto tra più stakeholder, consegne time-critical e visibilità in tempo reale attraverso le supply chain.",
            facility: "Le operazioni di gestione delle strutture coprono molteplici categorie di servizio e richiedono coordinamento tra team interni e appaltatori esterni.",
            infrastructure: "Le operazioni infrastrutturali spesso coinvolgono asset distribuiti geograficamente con requisiti di manutenzione variabili e supervisione normativa.",
            energy: "Le operazioni del settore energetico richiedono rigorosa aderenza ai protocolli di sicurezza, conformità normativa e monitoraggio continuo dei sistemi critici.",
            other: "Le operazioni coprono più domini con requisiti variabili per coordinamento, conformità e controllo dell'esecuzione.",
          },
          scale: {
            single: "Le operazioni a singola sede permettono controllo centralizzato ma possono comunque affrontare sfide di coordinamento tra turni e dipartimenti.",
            multi: "Le operazioni multi-sede introducono complessità nella standardizzazione, comunicazione e nell'assicurare esecuzione coerente tra le sedi.",
            distributed: "Le operazioni distribuite o regionali richiedono meccanismi di coordinamento robusti per mantenere visibilità e controllo su team dispersi.",
          },
          structure: {
            adhoc: "La struttura operativa ad-hoc suggerisce alta dipendenza dal giudizio individuale e potenziale incoerenza nell'esecuzione.",
            semiStructured: "I processi semi-strutturati indicano standardizzazione parziale con spazio per variazione, il che può portare a risultati incoerenti.",
            fullyStructured: "Le operazioni completamente strutturate forniscono una base per l'esecuzione prevedibile, sebbene l'efficacia dipenda dall'aderenza e dall'applicazione.",
          },
          tools: {
            fragmented: "Il panorama degli strumenti frammentato tipicamente porta a silos informativi, riconciliazione manuale dei dati e overhead di coordinamento.",
            manual: "La forte dipendenza dai processi manuali aumenta il rischio di errori e limita la scalabilità delle operazioni.",
          },
        },
        risks: {
          predictability: "Rischio di prevedibilità: Esecuzione incoerente e pattern di proprietà poco chiari possono portare a risultati operativi imprevedibili.",
          coordination: "Rischio di coordinamento: Coordinamento manuale e lacune comunicative possono risultare in ritardi, errori e fallimenti nell'escalation.",
          downtime: "Esposizione al downtime: L'alta sensibilità al downtime combinata con i pattern operativi attuali suggerisce rischio elevato di interruzioni costose.",
          compliance: "Esposizione alla conformità: Il divario tra requisiti di conformità e livello di struttura attuale può creare rischi di audit e normativi.",
          escalation: "Rischio di escalation: Ritardi nella risoluzione dei problemi e visibilità limitata possono permettere a problemi minori di escalare in problemi operativi significativi.",
        },
        readiness: {
          high: "L'organizzazione appare ragionevolmente preparata per il cambiamento operativo, con struttura e strumenti esistenti che forniscono una base per iniziative di miglioramento.",
          moderate: "L'organizzazione mostra indicatori di prontezza misti. Alcuni elementi fondamentali esistono, ma lacune in struttura o strumenti potrebbero richiedere attenzione prima di scalare i cambiamenti.",
          low: "I pattern operativi attuali suggeriscono prontezza limitata per scala o cambiamento significativo senza prima affrontare lacune fondamentali di coordinamento e struttura.",
        },
        advisory: {
          ownership: "Considera di stabilire strutture di proprietà più chiare e framework di responsabilità per ridurre l'overhead di coordinamento e migliorare la prevedibilità della risposta.",
          standardization: "Concentrati sulla standardizzazione dei processi operativi core per ridurre la variazione e stabilire pattern di esecuzione coerenti tra i team.",
          escalation: "Implementa percorsi di escalation strutturati con finestre di risposta definite e proprietà chiara a ogni livello.",
          compliance: "Allinea la struttura operativa con i requisiti di conformità per ridurre l'esposizione agli audit e garantire aderenza coerente agli standard normativi.",
          scale: "Per operazioni multi-sede o distribuite, dai priorità a meccanismi che garantiscano coerenza e visibilità tra le sedi.",
        },
      },
    },
    submission: {
      title: "Invio ricevuto",
      body1: "La tua revisione operativa è stata inviata con successo.",
      body2: "Il nostro team esaminerà attentamente la tua richiesta e farà seguito di conseguenza.",
      body3: "Per accelerare i prossimi passi, puoi pianificare una consultazione strategica qui sotto.",
      scheduleBtn: "Pianifica consultazione strategica",
      closeBtn: "Chiudi",
      referenceLabel: "ID di riferimento",
      emailSent: "Conferma inviata a",
      pdfAttached: "Riepilogo PDF allegato per i tuoi archivi",
    },
    governanceTrends: {
      title: "Operare in una realtà regolamentata",
      subtitle: "Man mano che gli ambienti operativi diventano più regolamentati, interconnessi e scrutinati, la leadership è sempre più definita dal controllo, dalla documentazione e dalla coerenza — non dalla velocità o dall'improvvisazione.",
      column1: {
        title: "Cosa danno priorità i leader operativi",
        items: [
          "Istruzioni di lavoro chiare e applicabili",
          "Esecuzione prevedibile tra turni e team",
          "Procedure di sicurezza che lasciano poco spazio all'interpretazione",
          "Meno decisioni improvvisate durante gli incidenti",
          "Documentazione che parla da sola"
        ]
      },
      column2: {
        title: "Standard, conformità e responsabilità",
        items: [
          "Sistemi di gestione formali basati su standard riconosciuti",
          "Procedure e azioni correttive tracciabili",
          "Registri di formazione e competenza verificabili",
          "Protezione dei dati e controllo degli accessi di default",
          "Decisioni che possono essere ricostruite a posteriori"
        ]
      },
      column3: {
        title: "Sicurezza, igiene e realtà operativa",
        items: [
          "Le regole di sicurezza devono funzionare sotto pressione, non solo sulla carta",
          "Le procedure igieniche devono essere coerenti in tutte le sedi",
          "Le deviazioni devono essere registrate, non normalizzate",
          "Le soluzioni informali aumentano l'esposizione",
          "La responsabilità personale si avvicina al livello operativo"
        ]
      },
      trend1: "Guardando al futuro, la tendenza è chiara: le operazioni devono essere spiegabili, verificabili e ripetibili — anche in caso di interruzione.",
      trend2: "Le organizzazioni che avranno successo saranno quelle che integreranno standard, sicurezza, igiene e disciplina dei dati direttamente nell'esecuzione quotidiana. Non come sovraccarico, ma come struttura operativa."
    },
  },

  /* ===================== PT ===================== */
  
  pt: {
    backToTop: "Voltar ao topo",
    explore: "Explorar",

    common: {
      back: "Voltar",
    },

    nav: {
      services: "Serviços",
      pricing: "Preços",
      about: "Sobre",
      contact: "Contacto",
      cta: "Falar com Especialista",
      viewDemo: "Ver Demonstração",
    },
    hero: {
      badge: "Indústrias Críticas Orientadas a Resultados",
      title: "A complexidade operacional corrói",
      titleHighlight: "a fiabilidade e quebra a disciplina de execução",
      subtitle:
        "Quando a coordenação se torna manual, a manutenção reativa e as operações dependem de soluções improvisadas, o controlo já está perdido.",
      subtitle2:
        "Restauramos a execução previsível e disciplinada em operações ativas — sem substituir sistemas centrais ou interromper fluxos de trabalho diários.",
      subtitleMobile: "Quando a coordenação se torna manual, o controlo já está perdido.",
      cta: "Recuperar o Controlo das Operações",
      simulatorCta: "Diagnóstico de Procura e Execução",
    },
    video: {
      title: "Concebido para operações ininterruptas",
      subtitle: "Veja como a Ovelon Prime apoia ambientes de missão crítica sem interromper sistemas ativos.",
      cta: "Sessão de Adequação Operacional",
    },
    services: {
      label: "O QUE ESTABILIZAMOS",
      title: "Fiabilidade operacional em ambientes",
      titleHighlight: "que não podem dar-se ao luxo de errar",
      subtitle:
        "Eliminamos falhas operacionais causadas por coordenação manual, execução pouco clara e gestão reativa de incidentes — restaurando controlo, responsabilidade e resultados previsíveis em operações ativas.",
      items: [
        {
          title: "Gestão de Pedidos e Procura",
          description:
            "Os pedidos recebidos são capturados, validados e encaminhados de forma consistente — sem depender de acompanhamento ad-hoc ou julgamento individual.",
          tags: ["Controlo de admissão inteligente", "Regras de qualificação", "Encaminhamento de sistema"],
        },
        {
          title: "Normas de Segurança e Execução",
          description:
            "Instruções visuais padronizadas utilizadas para alinhar operadores, empreiteiros e equipas em procedimentos críticos de segurança — reduzindo erros de interpretação, desvios e risco de execução.",
          tags: [
            "Procedimentos HSE",
            "Alinhamento ISO / VCA / OSHA",
            "Integração de operadores e empreiteiros",
          ],
        },
        {
          title: "Gestão de Incidentes e Escalamento",
          description:
            "Os problemas são registados, classificados e escalados de forma controlada — garantindo responsabilidade, clareza de resposta e caminhos de resolução previsíveis.",
          tags: ["Classificação de problemas", "Caminhos de escalamento", "Propriedade da resposta"],
        },
      ],
    },
    sectors: {
      label: "Sectores",
      title: "Fiabilidade Operacional Para",
      titleHighlight: "Indústrias de Missão Crítica",
      subtitle: "Apoiamos ambientes operacionais onde tempo de inatividade, desalinhamento ou resposta atrasada impactam diretamente a segurança, continuidade ou produção.",
      items: [
        {
          name: "Gestão de Instalações",
          description: "Gestão de ativos distribuídos e pedidos de serviço em instalações complexas — com tolerância limitada para atrasos ou má coordenação.",
        },
        {
          name: "Manutenção e Reparação",
          description: "Operação sob pressão constante para prevenir tempo de inatividade na manutenção reativa e preventiva — frequentemente com informação incompleta e janelas de resposta apertadas.",
        },
        {
          name: "Logística e Armazenagem",
          description: "Coordenação de força de trabalho, equipamento e fluxos de trabalho sob prazos rigorosos e pressão operacional contínua.",
        },
      ],
    },
    testimonials: {
      title: "Testemunhos de Clientes",
      items: [
        {
          quote: "Antes da Ovelon Prime, a coordenação de turnos dependia do acompanhamento individual. Hoje, manutenção e planeamento executam previsivelmente em todos os turnos — sem intervenção manual.",
          name: "Martin Keller",
          title: "Líder de Operações Logísticas",
        },
        {
          quote: "No nosso ambiente, atrasos afetam diretamente a segurança e a produção. A Ovelon Prime ajudou-nos a padronizar a execução entre equipas, reduzindo o tempo de resposta em 45% sem aumentar o risco operacional.",
          name: "Alicia Zhang",
          title: "Diretora de Operações",
        },
        {
          quote: "Operamos sob pressão contínua. Desde a implementação do sistema, o encaminhamento e escalamento seguem regras fixas — não suposições. O tempo de inatividade causado por erros de coordenação já não é um fator.",
          name: "Daniel Hoffman",
          title: "Gestor de Fábrica",
        },
      ],
    },
    operationalTrust: {
      heading: "Concebido para ambientes regulados e de segurança crítica",
      items: [
        { text: "Princípios de segurança alinhados com ISO 27001" },
        { text: "Controlo de processos estilo ISO 9001" },
        { text: "Design operacional consciente de HSE" },
        { text: "Documentação e controlos prontos para auditoria" },
        { text: "Propriedade total do cliente — sem sistemas de caixa preta" },
      ],
      footer: "Concebido para ambientes revisados por CISO com governança de segurança interna, políticas de controlo de acesso e procedimentos de gestão de mudanças.",
    },
    about: {
      label: "Sobre Nós",
      title: "Construído sobre expertise operacional,",
      titleHighlight: "impulsionado pela precisão",
      description1:
        "A Ovelon Prime trabalha com organizações que operam sob pressão constante — onde tempo de inatividade, atrasos e processos manuais impactam diretamente custo, segurança e fiabilidade.",
      description2:
        "Combinamos profunda expertise de domínio operacional com camadas de controlo operacional para conceber sistemas que se integram perfeitamente em fluxos de trabalho existentes, sem interromper operações críticas.",
      quote:
        '"A precisão não é opcional. Em ambientes onde a fiabilidade determina resultados, os sistemas devem ser engenhados para funcionar sob pressão."',
      quoteAuthor: "Equipa de Liderança · Ovelon Prime",
      stats: {
        uptime: "Tempo de Atividade do Sistema",
        deployments: "Implementações de Automação",
        industries: "Indústrias Críticas Servidas",
      },
    },
    pricing: {
      label: "Preços",
      title: "Preços baseados em compromisso, com resultados claramente definidos",
      subtitle:
        "Compromissos claramente definidos focados em melhorar a fiabilidade, reduzir fricção operacional e entregar impacto mensurável.",
      focused: {
        name: "Compromisso Operacional Focado",
        description:
          "Um compromisso de âmbito fixo concebido para resolver um estrangulamento operacional claramente definido com impacto mensurável.",
        priceLabel: "A partir de",
        period: "taxa única",
        cta: "Solicitar Avaliação de Compromisso",
        features: [
          "Melhoria operacional única e claramente definida",
          "Mapeamento de processos e responsabilidades",
          "Implementação e lançamento controlados",
          "Documentação e transferência operacional",
          "Validação pós-implementação",
        ],
      },
      enterprise: {
        name: "Programa Operacional Empresarial",
        description:
          "Sistemas operacionais personalizados para organizações complexas com requisitos rigorosos de governança, conformidade e continuidade.",
        priceLabel: "Preços personalizados",
        price: "Serviço Personalizado",
        period: "taxa única",
        cta: "Solicitar Avaliação Inicial",
        badge: "Enterprise",
        features: [
          "Arquitetura operacional multi-sistema",
          "Integrações personalizadas em sistemas existentes",
          "Suporte dedicado de implementação e transição",
          "Design operacional consciente de conformidade",
          "SLA personalizado e framework de governança",
        ],
      },
      securityNote:
        "Cada compromisso é construído com segurança de nível empresarial, proteção de dados e conformidade operacional.",
      talkToExpert: "Falar com Especialista",
      intakeNote:
        "Admissão estruturada · Sem pressão de vendas · Diretamente com um especialista experiente",
      reviewNote: "Todos os pedidos são revisados antes do agendamento.",
    },
    contact: {
      label: "COMPROMISSO",
      title: "Pronto para recuperar o controlo das",
      titleHighlight: " suas operações?",
      subtitle: "Todos os compromissos são definidos antecipadamente e sujeitos a uma revisão formal antes de continuação.",
      cta: "Agendar Consulta",
      guarantee: "Sem compromissos de longo prazo.",
      guaranteeHighlight: "Os compromissos continuam apenas quando o valor operacional é demonstrado",
      guaranteeSuffix: " em compromissos qualificados.",
      enterpriseLabel: "Consultas empresariais: ",
    },
    contactForm: {
      firstName: "Nome",
      firstNamePlaceholder: "João",
      lastName: "Apelido",
      lastNamePlaceholder: "Silva",
      businessName: "Nome da empresa",
      businessNamePlaceholder: "Indústrias Acme",
      businessEmail: "Email empresarial",
      businessEmailPlaceholder: "joao@empresa.pt",
      requestDetails: "Detalhes do pedido",
      requestDetailsPlaceholder: "Descreva os seus desafios operacionais e o que pretende alcançar...",
      submit: "Enviar pedido",
      submitting: "A enviar...",
      validationError: "Por favor preencha corretamente todos os campos obrigatórios.",
      successTitle: "Enviado com sucesso",
      successMessage: "Analisaremos o seu pedido cuidadosamente.",
      successCta: "Marcar uma consulta estratégica",
    },
    faq: {
      title: "Perguntas Frequentes",
      category: "Compromisso e Entrega",
      items: [
        {
          question: "Como funciona a Ovelon Prime?",
          answer:
            "Começamos com uma admissão estruturada para compreender a restrição operacional. Concebemos e validamos uma solução de âmbito fixo contra fluxos de trabalho reais. Implementamos, testamos sob carga e entregamos com documentação completa.",
        },
        {
          question: "Em que indústrias se especializam?",
          answer:
            "Trabalhamos com organizações que operam em ambientes de missão crítica, incluindo manufatura, logística e gestão de instalações. Se atrasos, erros ou tempo de inatividade impactam diretamente a segurança, produção ou continuidade, estamos no âmbito.",
        },
        {
          question: "Isto é uma subscrição ou serviço contínuo?",
          answer:
            "Não. Os compromissos são de âmbito fixo e orientados a resultados. Não há subscrição obrigatória, dependência de licença ou taxa contínua. Após a entrega, o sistema é seu.",
        },
        {
          question: "Quanto tempo demora uma implementação típica?",
          answer:
            "A maioria dos compromissos focados são entregues em 12-16 dias, dependendo do âmbito e acesso ao sistema. Programas empresariais seguem um lançamento faseado alinhado com prioridades operacionais.",
        },
        {
          question: "Isto integra-se com os nossos sistemas existentes?",
          answer:
            "Sim. As soluções são concebidas para integrar com sistemas existentes sem substituir plataformas centrais. Trabalhamos dentro das suas ferramentas atuais e limites de dados.",
        },
        {
          question: "Precisamos de mudar os nossos fluxos de trabalho atuais?",
          answer:
            "Não. Concebemos em torno dos seus fluxos de trabalho existentes. Onde mudanças são necessárias, são mínimas, documentadas e validadas com as suas equipas operacionais antes da implementação.",
        },
        {
          question: "Quem é o proprietário da otimização após a entrega?",
          answer:
            "Vocês. Todos os sistemas, configurações e documentação são entregues após a conclusão. Não há dependência de fornecedor. Mantêm total propriedade operacional e técnica.",
        },
        {
          question: "Como lidam com segurança e conformidade?",
          answer:
            "Segurança e conformidade são tratadas como restrições de design, não como considerações tardias. Cada compromisso é definido em torno das suas políticas de segurança existentes, controlos de acesso e requisitos de conformidade. Trabalhamos dentro da sua infraestrutura aprovada, limites de dados e frameworks de governança. Nenhum dado é extraído ou reutilizado além do âmbito acordado, e todos os sistemas são entregues com documentação completa para suportar auditorias internas, revisões de risco e transferências.",
        },
        {
          question: "Que nível de envolvimento interno é necessário?",
          answer:
            "Envolvimento mínimo e estruturado. Requeremos contributos limitados durante a admissão para compreender restrições operacionais e validar suposições. A implementação é tratada de forma independente, com pontos de verificação claros para revisão e aprovação. As equipas operacionais não são interrompidas e não são necessários recursos internos contínuos após a entrega.",
        },
        {
          question: "A Ovelon Prime é adequada para grandes ambientes empresariais?",
          answer:
            "Sim. Somos concebidos para ambientes complexos com múltiplos stakeholders e requisitos rigorosos de governança, conformidade e operacionais. Os compromissos são estruturados para alinhar com gestão de mudanças empresariais, revisões de segurança e lançamentos faseados — sem forçar substituições de plataformas ou interromper sistemas críticos.",
        },
      ],
    },
    footer: {
      privacy: "Privacidade",
      terms: "Termos",
      copyright: "Ovelon Prime. Todos os direitos reservados.",
      tagline: "Sistemas operacionais empresariais construídos para clareza, controlo e escala.",
    },
    industrialTrust: {
      heading: "Confiado por operadores em ambientes de missão crítica",
      disclaimer: "Operadores representativos dos sectores industrial, logístico, manufatureiro e de infraestruturas. Os compromissos variam por âmbito e ambiente.",
    },
    intake: {
      title: "Qualificação de Consulta",
      subtitle: "Por favor complete o breve diagnóstico abaixo. Todas as submissões são revistas antes do agendamento.",
    },
    cookie: {
      message: "Utilizamos cookies para melhorar a sua experiência. Ao continuar a visitar este site, concorda com o nosso uso de cookies.",
      accept: "Aceitar",
      decline: "Recusar",
      learnMore: "Saber mais",
    },
    privacy: {
      title: "Política de Privacidade",
      lastUpdated: "Última Atualização: 01.12.2025",
      sections: {
        introduction: {
          title: "1. Introdução",
          p1: "Na Ovelon Prime, levamos a proteção de dados e confidencialidade a sério. Esta Política de Privacidade explica como recolhemos, utilizamos e protegemos informações pessoais e empresariais quando interage com o nosso website, formulários de admissão e serviços.",
          p2: "Processamos dados de forma responsável e apenas na medida necessária para prestar os nossos serviços, garantir integridade operacional e cumprir obrigações legais.",
        },
        informationCollected: {
          title: "2. Informação que Recolhemos",
          personal: "Informação Pessoal:",
          personalDesc: "Nome, endereço de email empresarial, número de telefone e informação submetida através de formulários ou correspondência direta.",
          business: "Informação Empresarial e Operacional:",
          businessDesc: "Nome da empresa, endereço ou jurisdição empresarial, classificação da indústria, contexto operacional e informação relacionada com conformidade voluntariamente fornecida durante a admissão.",
          technical: "Informação Técnica:",
          technicalDesc: "Endereço IP, metadados do navegador e dispositivo, cookies e análises básicas de utilização.",
          note: "Não recolhemos intencionalmente dados pessoais sensíveis a menos que explicitamente necessário para conformidade ou prestação de serviços.",
        },
        howWeUse: {
          title: "3. Como Utilizamos a Sua Informação",
          items: [
            "Avaliar e qualificar pedidos de consulta",
            "Prestar e apoiar serviços de automação operacional",
            "Comunicar relativamente a compromissos, atualizações ou esclarecimentos",
            "Manter fiabilidade, segurança e desempenho da plataforma",
            "Cumprir obrigações legais, regulatórias ou contratuais",
          ],
          note: "Não utilizamos os seus dados para marketing não solicitado, perfis ou publicidade de terceiros.",
        },
        dataSharing: {
          title: "4. Partilha e Divulgação de Dados",
          p1: "A Ovelon Prime não vende, aluga ou comercializa dados pessoais ou empresariais.",
          p2: "A informação só pode ser partilhada quando estritamente necessário:",
          items: [
            "Com prestadores de serviços verificados necessários para a prestação de serviços",
            "Para cumprir obrigações legais ou regulatórias",
            "Para proteger a segurança, integridade ou direitos dos nossos sistemas e clientes",
          ],
          note: "Os dados nunca são partilhados para marketing ou propósitos promocionais de terceiros.",
        },
        dataSecurity: {
          title: "5. Segurança de Dados",
          p1: "Aplicamos salvaguardas técnicas e organizacionais padrão da indústria, incluindo encriptação, controlos de acesso e práticas de infraestrutura segura.",
          p2: "Embora nenhum sistema possa garantir segurança absoluta, operamos sob protocolos internos rigorosos concebidos para minimizar risco e proteger confidencialidade em todos os momentos.",
        },
        dataRetention: {
          title: "6. Retenção de Dados e os Seus Direitos",
          p1: "Retemos dados apenas pelo tempo necessário para cumprir os propósitos descritos nesta política ou para cumprir requisitos legais.",
          p2: "Tem o direito de solicitar acesso, correção ou eliminação dos seus dados, quando aplicável.",
        },
        contact: {
          title: "7. Contacto",
          p1: "Para questões sobre esta Política de Privacidade ou práticas de tratamento de dados, por favor contacte:",
        },
      },
    },
    terms: {
      title: "Termos e Condições",
      lastUpdated: "Última Atualização: 01 Dezembro 2025",
      sections: {
        introduction: {
          title: "1. Introdução",
          p1: "Estes Termos e Condições (\"Termos\") regem o seu acesso e utilização do website Ovelon Prime, processos de consulta e serviços profissionais de automação. Ao aceder ao website ou contratar os nossos serviços, concorda em ficar vinculado a estes Termos.",
          p2: "Se não concordar com estes Termos, deve descontinuar a utilização do website e serviços imediatamente.",
        },
        services: {
          title: "2. Serviços Prestados",
          p1: "A Ovelon Prime fornece serviços profissionais de automação, design de sistemas e implementação para ambientes industriais, logísticos, de gestão de instalações, infraestruturas e outros ambientes operacionalmente críticos.",
          p2: "Os serviços são prestados numa base de projeto, com âmbito, entregas e cronogramas definidos antes do compromisso. Cada compromisso está sujeito a acordo comercial separado.",
        },
        confidentiality: {
          title: "3. Confidencialidade",
          p1: "Toda a informação empresarial e operacional partilhada durante compromissos é tratada como confidencial. Não divulgamos, vendemos ou redistribuímos qualquer informação do cliente a terceiros, exceto quando necessário para prestação de serviços ou quando legalmente requerido.",
        },
        ip: {
          title: "4. Propriedade Intelectual",
          p1: "Os clientes mantêm total propriedade sobre todos os sistemas, configurações e entregas produzidas durante os compromissos, salvo acordo em contrário.",
          p2: "Todo o conteúdo, marcas e materiais proprietários neste website permanecem propriedade da Ovelon Prime.",
        },
        liability: {
          title: "5. Limitação de Responsabilidade",
          p1: "A Ovelon Prime não é responsável por quaisquer danos indiretos, incidentais, especiais, consequenciais ou punitivos resultantes da utilização dos nossos serviços.",
          p2: "Em nenhum caso a nossa responsabilidade excederá o montante total pago pelo cliente pelos serviços prestados.",
        },
        changes: {
          title: "6. Alterações",
          p1: "A Ovelon Prime reserva-se o direito de atualizar estes Termos a qualquer momento. Alterações entram em vigor imediatamente após publicação nesta página.",
        },
        contact: {
          title: "7. Contacto",
          p1: "Para questões sobre estes Termos, por favor contacte:",
        },
      },
    },
    simulator: {
      title: "Diagnóstico de Procura e Execução",
      close: "Fechar",
      next: "Seguinte",
      back: "Voltar",
      submit: "Submeter Revisão",
      submitting: "A submeter...",
      submitError: "Falha ao submeter. Por favor tente novamente.",
      submitErrorTitle: "Erro de Submissão",
      validationErrorTitle: "Validação necessária",
      validationErrorDescription: "Por favor preencha todos os campos obrigatórios antes de submeter.",
      stepIndicator: "Passo {{current}} de {{total}}",
      step1: {
        title: "Contexto Operacional",
        description: "Ajude-nos a compreender o seu ambiente operacional e escala.",
        industryLabel: "Indústria",
        industryPlaceholder: "Selecione a sua indústria",
        operationTypeLabel: "Tipos de Operação",
        operationTypePlaceholder: "Selecione todos os aplicáveis",
        scaleLabel: "Escala Operacional",
        scalePlaceholder: "Selecione a sua escala",
      },
      step2: {
        title: "Modelo Operacional Atual",
        description: "Descreva como o trabalho é atualmente gerido e coordenado.",
        requestHandlingLabel: "Gestão de Pedidos",
        requestHandlingPlaceholder: "Como são tratados os pedidos recebidos?",
        structureLabel: "Nível de Estrutura",
        structurePlaceholder: "Quão estruturados são os seus processos?",
        toolsLabel: "Ferramentas em Uso",
        toolsPlaceholder: "Que ferramentas estão atualmente em uso?",
      },
      step3: {
        title: "Pontos de Fricção",
        description: "Identifique onde ocorrem falhas ou fricção no seu ambiente.",
        frictionPointsLabel: "Principais Pontos de Fricção",
        frictionPointsPlaceholder: "Selecione todos os aplicáveis",
        frictionNotesLabel: "Notas Adicionais",
        frictionNotesPlaceholder: "Descreva quaisquer desafios específicos...",
      },
      step4: {
        title: "Restrições e Conformidade",
        description: "Compreenda as suas restrições operacionais e requisitos de conformidade.",
        downtimeLabel: "Sensibilidade a Tempo de Inatividade",
        downtimePlaceholder: "Quão crítico é o tempo de inatividade?",
        complianceLabel: "Requisitos de Segurança e Conformidade",
        compliancePlaceholder: "Selecione todos os aplicáveis",
        coordinationLabel: "Complexidade de Coordenação",
        coordinationPlaceholder: "Quão complexa é a coordenação de stakeholders?",
      },
      step5: {
        title: "Resumo",
        description: "Reveja a informação que forneceu antes de continuar para a análise.",
        sectionOperational: "Contexto Operacional",
        sectionModel: "Modelo Operacional",
        sectionFriction: "Pontos de Fricção",
        sectionConstraints: "Restrições",
        industry: "Indústria",
        operationType: "Tipos de Operação",
        scale: "Escala",
        requestHandling: "Gestão de Pedidos",
        structureLevel: "Nível de Estrutura",
        toolsInUse: "Ferramentas em Uso",
        frictionPoints: "Pontos de Fricção",
        frictionNotes: "Notas de Fricção",
        downtimeSensitivity: "Sensibilidade a Tempo de Inatividade",
        safetyCompliance: "Segurança e Conformidade",
        coordinationComplexity: "Complexidade de Coordenação",
        notSpecified: "Não especificado",
      },
      industries: {
        manufacturing: "Manufatura",
        logistics: "Logística e Armazenagem",
        facility: "Gestão de Instalações",
        infrastructure: "Infraestrutura",
        energy: "Energia e Utilities",
        other: "Outra Indústria",
      },
      operationTypes: {
        facility: "Operações de Instalações",
        logistics: "Logística e Distribuição",
        maintenance: "Manutenção e Reparação",
        production: "Produção e Manufatura",
        fieldService: "Serviço de Campo",
      },
      scales: {
        single: "Local Único",
        multi: "Multi-local",
        distributed: "Distribuído/Regional",
      },
      handlingMethods: {
        email: "Email",
        phone: "Telefone",
        tickets: "Sistema de Tickets",
        verbal: "Transferência Verbal",
        spreadsheets: "Folhas de Cálculo",
        erp: "Sistema ERP/CMMS",
      },
      structureLevels: {
        adhoc: {
          title: "Maioritariamente Ad-hoc",
          desc: "O trabalho é tratado à medida que surge, padronização mínima",
        },
        semiStructured: {
          title: "Semi-estruturado",
          desc: "Alguns processos são definidos mas a execução varia",
        },
        fullyStructured: {
          title: "Totalmente Estruturado",
          desc: "Processos claros com execução consistente",
        },
      },
      toolTypes: {
        manual: "Maioritariamente Manual",
        semiAutomated: "Semi-automatizado",
        fragmented: "Sistemas Fragmentados",
        integrated: "Plataforma Integrada",
      },
      frictionPoints: {
        slowResponse: "Tempos de Resposta Lentos",
        unclearOwnership: "Propriedade de Tarefas Pouco Clara",
        manualCoordination: "Sobrecarga de Coordenação Manual",
        inconsistentExecution: "Execução Inconsistente",
        lackVisibility: "Falta de Visibilidade em Tempo Real",
        escalationDelays: "Atrasos de Escalamento",
        documentationGaps: "Lacunas de Documentação",
        communicationBreakdown: "Falha de Comunicação",
      },
      downtimeLevels: {
        critical: {
          title: "Crítico",
          desc: "Cada minuto de inatividade custa significativamente",
        },
        high: {
          title: "Alto",
          desc: "Tempo de inatividade impacta severamente as operações",
        },
        moderate: {
          title: "Moderado",
          desc: "Alguma tolerância mas afeta o desempenho",
        },
        low: {
          title: "Baixo",
          desc: "Pode gerir interrupções de curto prazo",
        },
      },
      complianceOptions: {
        iso: "ISO 9001/27001",
        hse: "HSE/SST",
        osha: "OSHA",
        vca: "VCA/SCC",
        gdpr: "RGPD/Proteção de Dados",
        sectorSpecific: "Regulamentos Sectoriais",
      },
      complexityLevels: {
        simple: "Simples",
        moderate: "Moderada",
        complex: "Complexa",
        veryComplex: "Muito Complexa",
      },
      step6: {
        title: "Análise Operacional",
        description: "Com base nas informações fornecidas, aqui está uma análise operacional de nível executivo do seu estado atual.",
        noData: "Dados insuficientes para gerar análise. Por favor complete os passos anteriores.",
        observationsTitle: "Observações Operacionais",
        risksTitle: "Áreas de Risco e Exposição",
        readinessTitle: "Avaliação de Prontidão de Execução",
        advisoryTitle: "Direção Consultiva (Alto Nível)",
        disclaimer: "Esta análise é indicativa e baseada em informação auto-reportada. Não substitui uma avaliação profissional. Todos os resultados estão sujeitos a revisão formal.",
      },
      step7: {
        title: "Dados de Contacto",
        description: "Estes dados são necessários para anexar a análise operacional a um pedido formal de revisão.",
        personalTitle: "Dados Pessoais",
        companyTitle: "Dados da Empresa",
        fullName: "Nome Completo",
        fullNamePlaceholder: "Introduza o seu nome completo",
        email: "Endereço de Email",
        emailPlaceholder: "Introduza email empresarial",
        phone: "Número de Telefone",
        phonePlaceholder: "Introduza número de telefone",
        companyName: "Nome da Empresa",
        companyNamePlaceholder: "Introduza nome da empresa",
        role: "Cargo / Função",
        rolePlaceholder: "ex: Gestor de Operações",
        country: "País",
        countryPlaceholder: "Introduza país",
        city: "Cidade",
        cityPlaceholder: "Introduza cidade",
        requiredNote: "Todos os campos marcados com * são obrigatórios. As suas informações serão utilizadas apenas para processar este pedido de revisão.",
      },
      analysis: {
        observations: {
          industry: {
            manufacturing: "Operar num ambiente de manufatura tipicamente envolve planeamento de produção complexo, ciclos de manutenção de equipamentos e requisitos de controlo de qualidade.",
            logistics: "Operações logísticas requerem coordenação apertada entre múltiplos stakeholders, entregas time-critical e visibilidade em tempo real através das cadeias de fornecimento.",
            facility: "Operações de gestão de instalações abrangem múltiplas categorias de serviço e requerem coordenação entre equipas internas e empreiteiros externos.",
            infrastructure: "Operações de infraestrutura frequentemente envolvem ativos geograficamente distribuídos com requisitos de manutenção variáveis e supervisão regulatória.",
            energy: "Operações do sector energético requerem aderência rigorosa a protocolos de segurança, conformidade regulatória e monitorização contínua de sistemas críticos.",
            other: "As operações abrangem múltiplos domínios com requisitos variáveis de coordenação, conformidade e controlo de execução.",
          },
          scale: {
            single: "Operações de local único permitem controlo centralizado mas podem ainda enfrentar desafios de coordenação entre turnos e departamentos.",
            multi: "Operações multi-local introduzem complexidade na padronização, comunicação e na garantia de execução consistente entre localizações.",
            distributed: "Operações distribuídas ou regionais requerem mecanismos de coordenação robustos para manter visibilidade e controlo através de equipas dispersas.",
          },
          structure: {
            adhoc: "Estrutura operacional ad-hoc sugere alta dependência de julgamento individual e potencial inconsistência na execução.",
            semiStructured: "Processos semi-estruturados indicam padronização parcial com espaço para variação, o que pode levar a resultados inconsistentes.",
            fullyStructured: "Operações totalmente estruturadas fornecem uma base para execução previsível, embora a eficácia dependa da aderência e aplicação.",
          },
          tools: {
            fragmented: "Panorama de ferramentas fragmentado tipicamente leva a silos de informação, reconciliação manual de dados e sobrecarga de coordenação.",
            manual: "Forte dependência de processos manuais aumenta o risco de erro e limita a escalabilidade das operações.",
          },
        },
        risks: {
          predictability: "Risco de previsibilidade: Execução inconsistente e padrões de propriedade pouco claros podem levar a resultados operacionais imprevisíveis.",
          coordination: "Risco de coordenação: Coordenação manual e lacunas de comunicação podem resultar em atrasos, erros e falhas de escalamento.",
          downtime: "Exposição a tempo de inatividade: Alta sensibilidade a tempo de inatividade combinada com padrões operacionais atuais sugere risco elevado de interrupções custosas.",
          compliance: "Exposição a conformidade: Lacuna entre requisitos de conformidade e nível de estrutura atual pode criar riscos de auditoria e regulatórios.",
          escalation: "Risco de escalamento: Atrasos na resolução de problemas e visibilidade limitada podem permitir que problemas menores escalem para problemas operacionais significativos.",
        },
        readiness: {
          high: "A organização parece razoavelmente preparada para mudança operacional, com estrutura e ferramentas existentes fornecendo uma base para iniciativas de melhoria.",
          moderate: "A organização mostra indicadores de prontidão mistos. Alguns elementos fundamentais existem, mas lacunas em estrutura ou ferramentas podem requerer atenção antes de escalar mudanças.",
          low: "Os padrões operacionais atuais sugerem prontidão limitada para escala ou mudança significativa sem primeiro abordar lacunas fundamentais de coordenação e estrutura.",
        },
        advisory: {
          ownership: "Considere estabelecer estruturas de propriedade mais claras e frameworks de responsabilidade para reduzir sobrecarga de coordenação e melhorar previsibilidade de resposta.",
          standardization: "Foque na padronização de processos operacionais centrais para reduzir variação e estabelecer padrões de execução consistentes entre equipas.",
          escalation: "Implemente caminhos de escalamento estruturados com janelas de resposta definidas e propriedade clara em cada nível.",
          compliance: "Alinhe estrutura operacional com requisitos de conformidade para reduzir exposição a auditoria e garantir aderência consistente a normas regulatórias.",
          scale: "Para operações multi-local ou distribuídas, priorize mecanismos que garantam consistência e visibilidade entre localizações.",
        },
      },
    },
    submission: {
      title: "Submissão Recebida",
      body1: "A sua revisão operacional foi submetida com sucesso.",
      body2: "A nossa equipa analisará cuidadosamente o seu pedido e fará o seguimento adequado.",
      body3: "Para acelerar os próximos passos, pode agendar uma consulta estratégica abaixo.",
      scheduleBtn: "Agendar Consulta Estratégica",
      closeBtn: "Fechar",
      referenceLabel: "ID de Referência",
      emailSent: "Confirmação enviada para",
      pdfAttached: "Resumo PDF anexado para os seus registos",
    },
    governanceTrends: {
      title: "Operar numa Realidade Regulada",
      subtitle: "À medida que os ambientes operacionais se tornam mais regulados, interconectados e escrutinados, a liderança é cada vez mais definida pelo controlo, documentação e consistência — não pela velocidade ou improvisação.",
      column1: {
        title: "O Que os Líderes Operacionais Priorizam",
        items: [
          "Instruções de trabalho claras e aplicáveis",
          "Execução previsível entre turnos e equipas",
          "Procedimentos de segurança que deixam pouco espaço para interpretação",
          "Menos decisões ad-hoc durante incidentes",
          "Documentação que fala por si"
        ]
      },
      column2: {
        title: "Normas, Conformidade e Responsabilidade",
        items: [
          "Sistemas de gestão formais baseados em normas reconhecidas",
          "Procedimentos e ações corretivas rastreáveis",
          "Registos de formação e competência verificáveis",
          "Proteção de dados e controlo de acesso por defeito",
          "Decisões que podem ser reconstruídas posteriormente"
        ]
      },
      column3: {
        title: "Segurança, Higiene e Realidade Operacional",
        items: [
          "As regras de segurança devem funcionar sob pressão, não apenas no papel",
          "Os procedimentos de higiene devem ser consistentes entre localizações",
          "Os desvios devem ser registados, não normalizados",
          "Soluções informais aumentam a exposição",
          "A responsabilidade pessoal está a aproximar-se do nível operacional"
        ]
      },
      trend1: "Olhando para o futuro, a tendência é clara: espera-se que as operações sejam explicáveis, auditáveis e repetíveis — mesmo sob interrupção.",
      trend2: "As organizações que terão sucesso serão aquelas que incorporam normas, segurança, higiene e disciplina de dados diretamente na execução diária. Não como sobrecarga, mas como estrutura operacional."
    },
  },
};
