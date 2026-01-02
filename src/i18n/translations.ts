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
      trustline:
        "No rip-and-replace · No vendor lock-in · Operational outcomes first",
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
  },

  /* ===================== DE ===================== */
  de: {
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
      trustline:
        "Kein Komplettersatz · Keine Anbieterabhängigkeit · Operative Ergebnisse zuerst",
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
      lastUpdated: "Zuletzt aktualisiert: 01.12.2025",
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
  },

  /* ===================== FR ===================== */
  fr: {
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
      trustline:
        "Pas de remplacement complet · Pas de dépendance fournisseur · Résultats opérationnels d'abord",
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
  },

  /* ===================== PL ===================== */
  pl: {
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
      trustline:
        "Bez całkowitej wymiany · Bez uzależnienia od dostawcy · Wyniki operacyjne na pierwszym miejscu",
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
  },
};
