export type Lang = "en" | "de" | "fr" | "it" | "pl";

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
      services: "Services",
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
      cta: "Regain Control Over Operations",
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
      title: "Ready to regain operational control",
      titleHighlight: "your operations?",
      subtitle:
        "Let's discuss how targeted automation can remove operational bottlenecks and improve reliability across your workflows.",
      cta: "Schedule Consultation",
      guarantee: "Not satisfied? We offer a straightforward",
      guaranteeHighlight: "money-back guarantee",
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

  /* ===================== DE ===================== */
  de: {
    nav: {
      services: "Leistungen",
      pricing: "Preise",
      about: "Über uns",
      contact: "Kontakt",
      cta: "Experten sprechen",
    },
    hero: {
      badge: "Ergebnisorientierte kritische Branchen",
      title: "Operative Komplexität untergräbt",
      titleHighlight: "Zuverlässigkeit und Ausführungsdisziplin",
      subtitle:
        "Wenn Koordination manuell wird, Wartung reaktiv erfolgt und Abläufe auf Workarounds basieren, ist die Kontrolle bereits verloren.",
      subtitle2:
        "Wir stellen vorhersehbare, disziplinierte Ausführung im laufenden Betrieb wieder her — ohne Kernsysteme zu ersetzen oder tägliche Abläufe zu stören.",
      subtitleMobile:
        "Wenn Koordination manuell wird, ist die Kontrolle bereits verloren.",
      cta: "Operative Unterstützung erkunden",
      trustline:
        "Kein Rip-and-Replace · Kein Vendor Lock-in · Operative Ergebnisse zuerst",
    },
    services: {
      label: "WAS WIR STABILISIEREN",
      title: "Operative Zuverlässigkeit in Umgebungen",
      titleHighlight: "die sich keine Fehler leisten können",
      subtitle:
        "Wir unterstützen operative Workflows, bei denen Verzögerungen, manuelle Eingriffe und Fehlabstimmung Sicherheit, Kontinuität oder Output direkt beeinflussen.",
      items: [
        {
          title: "Anfrage- & Bedarfsbearbeitung",
          description:
            "Eingehende Anfragen werden konsistent erfasst, validiert und weitergeleitet — ohne ad-hoc Nachverfolgung oder individuelle Entscheidungen.",
          tags: ["Intake-Kontrolle", "Qualifikationsregeln", "System-Routing"],
        },
        {
          title: "Sicherheits- & Ausführungsstandards",
          description:
            "Standardisierte visuelle Anweisungen richten Betreiber, Auftragnehmer und Teams auf sicherheitskritische Verfahren aus — und reduzieren Interpretationsfehler, Abweichungen und Ausführungsrisiken.",
          tags: [
            "HSE-Verfahren",
            "ISO / VCA / OSHA Ausrichtung",
            "Onboarding Betreiber & Auftragnehmer",
          ],
        },
        {
          title: "Vorfallbearbeitung & Eskalation",
          description:
            "Vorfälle werden kontrolliert erfasst, klassifiziert und eskaliert — mit klarer Verantwortlichkeit, eindeutiger Reaktion und vorhersehbaren Lösungswegen.",
          tags: ["Klassifikation", "Eskalationspfade", "Zuständigkeit"],
        },
      ] as ServiceItem[],
    },
    about: {
      label: "Über uns",
      title: "Auf operativer Expertise aufgebaut,",
      titleHighlight: "getrieben von Präzision",
      description1:
        "Ovelon Prime arbeitet mit Organisationen unter konstantem Druck — wo Ausfallzeiten, Verzögerungen und manuelle Prozesse Kosten, Sicherheit und Zuverlässigkeit direkt beeinflussen.",
      description2:
        "Wir kombinieren tiefes operatives Domänenwissen mit operativen Kontrollschichten, um Systeme zu entwerfen, die sich nahtlos in bestehende Workflows integrieren — ohne kritische Abläufe zu stören.",
      quote:
        "\"Präzision ist nicht optional. Wo Zuverlässigkeit Ergebnisse bestimmt, müssen Systeme so konstruiert sein, dass sie unter Druck funktionieren.\"",
      quoteAuthor: "Leadership Team · Ovelon Prime",
      stats: {
        uptime: "Systemverfügbarkeit",
        deployments: "Implementierungen",
        industries: "Kritische Branchen",
      },
    },
    pricing: {
      label: "Preise",
      title: "Engagement-basierte Preise mit klar definierten Ergebnissen",
      subtitle:
        "Klar abgegrenzte Engagements zur Verbesserung der Zuverlässigkeit, Reduktion operativer Reibung und messbarer Wirkung.",
      focused: {
        name: "Fokussiertes operatives Engagement",
        description:
          "Ein Engagement mit festem Umfang zur Lösung eines klar definierten operativen Engpasses mit messbarer Wirkung.",
        priceLabel: "Ab",
        period: "Einmalgebühr",
        cta: "Details anfordern",
        features: [
          "Eine klar definierte operative Verbesserung",
          "Prozess- & Verantwortungsmapping",
          "Kontrollierte Umsetzung & Rollout",
          "Dokumentation & operative Übergabe",
          "Validierung nach Umsetzung",
        ],
      },
      enterprise: {
        name: "Enterprise Operational Program",
        description:
          "Maßgeschneiderte operative Systeme für komplexe Organisationen mit strengen Anforderungen an Governance, Compliance und Kontinuität.",
        priceLabel: "Individuelle Preise",
        period: "Einmalgebühr",
        cta: "Erstbewertung anfragen",
        badge: "Enterprise",
        features: [
          "Multi-System operative Architektur",
          "Individuelle Integrationen in bestehende Systeme",
          "Dedizierte Umsetzung & Übergangsunterstützung",
          "Compliance-orientiertes operatives Design",
          "Individuelles SLA & Governance-Framework",
        ],
      },
      securityNote:
        "Jedes Engagement ist auf Enterprise-Sicherheit, Datenschutz und operative Compliance ausgelegt.",
      talkToExpert: "Experten sprechen",
      intakeNote:
        "Strukturierter Intake · Kein Verkaufsdruck · Direkt mit einem erfahrenen Experten",
      reviewNote: "Alle Anfragen werden vor Terminierung geprüft.",
    },
    contact: {
      label: "KONTAKT",
      title: "Bereit, operative Kontrolle zurückzugewinnen",
      titleHighlight: "über Ihre Abläufe?",
      subtitle:
        "Lassen Sie uns besprechen, wie gezielte Maßnahmen operative Engpässe reduzieren und die Zuverlässigkeit Ihrer Workflows verbessern.",
      cta: "Beratung planen",
      guarantee: "Nicht zufrieden? Wir bieten eine einfache",
      guaranteeHighlight: "Geld-zurück-Garantie",
      guaranteeSuffix: "für qualifizierte Engagements.",
      enterpriseLabel: "Enterprise-Anfragen:",
    },
    faq: {
      title: "FAQs",
      category: "Engagement & Umsetzung",
      items: [
        {
          question: "Wie arbeitet Ovelon Prime?",
          answer:
            "Wir starten mit einem strukturierten Intake, um die operative Einschränkung zu verstehen. Danach entwerfen und validieren wir eine Lösung mit festem Umfang anhand realer Workflows. Wir implementieren, testen unter Last und übergeben mit vollständiger Dokumentation.",
        },
        {
          question: "Auf welche Branchen sind Sie spezialisiert?",
          answer:
            "Wir arbeiten mit Organisationen in geschäftskritischen Umgebungen, u. a. Fertigung, Logistik, operative Healthcare-Umgebungen und Facility Management. Wenn Verzögerungen, Fehler oder Ausfallzeiten Sicherheit, Output oder Kontinuität beeinflussen, sind wir im Scope.",
        },
        {
          question: "Ist das ein Abo oder laufender Service?",
          answer:
            "Nein. Engagements sind klar abgegrenzt und ergebnisorientiert. Es gibt kein verpflichtendes Abo, keine Lizenzabhängigkeit und keine laufenden Gebühren. Sie besitzen das System nach Übergabe.",
        },
        {
          question: "Wie lange dauert eine typische Umsetzung?",
          answer:
            "Die meisten fokussierten Engagements werden innerhalb von 2–4 Wochen geliefert, abhängig von Umfang und Systemzugängen. Enterprise-Programme laufen phasenweise entlang operativer Prioritäten.",
        },
        {
          question: "Integriert sich das in unsere bestehenden Systeme?",
          answer:
            "Ja. Lösungen werden so entworfen, dass sie bestehende Systeme integrieren, ohne Kernplattformen zu ersetzen. Wir arbeiten innerhalb Ihrer Tools und Datenrahmen.",
        },
        {
          question: "Müssen wir unsere Workflows ändern?",
          answer:
            "Nein. Wir entwerfen um Ihre bestehenden Workflows herum. Wo Änderungen nötig sind, sind sie minimal, dokumentiert und mit Ihren Teams validiert.",
        },
        {
          question: "Wem gehört das System nach Übergabe?",
          answer:
            "Ihnen. Alle Systeme, Konfigurationen und Dokumentation werden bei Abschluss übergeben. Kein Vendor Lock-in. Volle operative und technische Eigentümerschaft.",
        },
        {
          question: "Wie gehen Sie mit Sicherheit und Compliance um?",
          answer:
            "Sicherheit und Compliance sind Designvorgaben. Jedes Engagement richtet sich nach Ihren Sicherheitsrichtlinien, Zugriffskontrollen und Compliance-Anforderungen. Wir arbeiten innerhalb Ihrer freigegebenen Infrastruktur und Governance. Keine Daten werden außerhalb des vereinbarten Scopes genutzt. Lieferung inklusive Dokumentation für Audits, Risiko-Reviews und Handover.",
        },
        {
          question: "Wie viel interne Beteiligung ist erforderlich?",
          answer:
            "Minimal und strukturiert. Wir benötigen begrenzten Input im Intake und zur Validierung. Die Umsetzung erfolgt eigenständig, mit klaren Checkpoints. Operative Teams werden nicht gestört, und nach Übergabe sind keine laufenden internen Ressourcen erforderlich.",
        },
        {
          question: "Ist Ovelon Prime für große Enterprise-Umgebungen geeignet?",
          answer:
            "Ja. Wir sind für komplexe Umgebungen mit strenger Governance, Compliance und operativen Anforderungen ausgelegt. Engagements passen zu Change-Management, Security-Reviews und phasenweisen Rollouts — ohne Plattformwechsel oder Betriebsunterbrechung.",
        },
      ] as FAQItem[],
    },
    footer: {
      privacy: "Datenschutz",
      terms: "AGB",
      copyright: "Ovelon Prime. Alle Rechte vorbehalten.",
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
    },
    hero: {
      badge: "Industries critiques orientées résultats",
      title: "La complexité opérationnelle érode",
      titleHighlight: "la fiabilité et la discipline d’exécution",
      subtitle:
        "Quand la coordination devient manuelle, que la maintenance devient réactive et que les opérations reposent sur des contournements, le contrôle est déjà perdu.",
      subtitle2:
        "Nous rétablissons une exécution prévisible et disciplinée en conditions réelles — sans remplacer les systèmes centraux ni perturber les flux quotidiens.",
      subtitleMobile:
        "Quand la coordination devient manuelle, le contrôle est déjà perdu.",
      cta: "Explorer le support opérationnel",
      trustline:
        "Pas de rip-and-replace · Pas de verrouillage fournisseur · Résultats opérationnels d’abord",
    },
    services: {
      label: "CE QUE NOUS STABILISONS",
      title: "Fiabilité opérationnelle dans des environnements",
      titleHighlight: "où l’erreur n’est pas permise",
      subtitle:
        "Nous soutenons des workflows où les retards, l’intervention manuelle et le désalignement impactent directement la sécurité, la continuité ou la production.",
      items: [
        {
          title: "Gestion des demandes et du besoin",
          description:
            "Les demandes entrantes sont capturées, validées et routées de manière cohérente — sans dépendre de relances ad hoc ni de jugements individuels.",
          tags: ["Contrôle d’intake", "Règles de qualification", "Routage système"],
        },
        {
          title: "Standards de sécurité et d’exécution",
          description:
            "Des instructions visuelles standardisées alignent opérateurs, sous-traitants et équipes sur des procédures critiques — réduisant les erreurs d’interprétation et le risque d’exécution.",
          tags: [
            "Procédures HSE",
            "Alignement ISO / VCA / OSHA",
            "Onboarding opérateurs & sous-traitants",
          ],
        },
        {
          title: "Gestion des incidents et escalade",
          description:
            "Les incidents sont enregistrés, classifiés et escaladés de manière contrôlée — avec responsabilité claire et chemins de résolution prévisibles.",
          tags: ["Classification", "Chemins d’escalade", "Responsabilité"],
        },
      ] as ServiceItem[],
    },
    about: {
      label: "À propos",
      title: "Bâti sur l’expertise opérationnelle,",
      titleHighlight: "guidé par la précision",
      description1:
        "Ovelon Prime accompagne des organisations sous pression constante — où l’arrêt, les retards et les processus manuels impactent directement coûts, sécurité et fiabilité.",
      description2:
        "Nous combinons une expertise opérationnelle profonde avec des couches de contrôle pour concevoir des systèmes qui s’intègrent aux workflows existants sans perturber les opérations critiques.",
      quote:
        "\"La précision n’est pas optionnelle. Quand la fiabilité détermine les résultats, les systèmes doivent être conçus pour tenir sous pression.\"",
      quoteAuthor: "Équipe de direction · Ovelon Prime",
      stats: {
        uptime: "Disponibilité du système",
        deployments: "Déploiements",
        industries: "Industries critiques servies",
      },
    },
    pricing: {
      label: "Tarifs",
      title: "Tarification par engagement, avec des résultats clairement définis",
      subtitle:
        "Des engagements cadrés visant la fiabilité, la réduction des frictions opérationnelles et un impact mesurable.",
      focused: {
        name: "Engagement opérationnel ciblé",
        description:
          "Un engagement à périmètre fixe pour résoudre un goulot d’étranglement opérationnel clairement identifié.",
        priceLabel: "À partir de",
        period: "frais unique",
        cta: "Demander les détails",
        features: [
          "Une amélioration opérationnelle clairement définie",
          "Cartographie processus & responsabilités",
          "Mise en œuvre contrôlée & déploiement",
          "Documentation & transfert opérationnel",
          "Validation post-implémentation",
        ],
      },
      enterprise: {
        name: "Programme opérationnel Enterprise",
        description:
          "Systèmes opérationnels sur mesure pour des organisations complexes avec exigences strictes de gouvernance, conformité et continuité.",
        priceLabel: "Tarifs sur mesure",
        period: "frais unique",
        cta: "Demander une évaluation",
        badge: "Enterprise",
        features: [
          "Architecture opérationnelle multi-systèmes",
          "Intégrations sur mesure avec l’existant",
          "Support dédié de transition",
          "Conception orientée conformité",
          "SLA & cadre de gouvernance",
        ],
      },
      securityNote:
        "Chaque engagement intègre sécurité de niveau entreprise, protection des données et conformité opérationnelle.",
      talkToExpert: "Parler à un expert",
      intakeNote:
        "Intake structuré · Aucune pression commerciale · Directement avec un expert",
      reviewNote: "Toutes les demandes sont examinées avant planification.",
    },
    contact: {
      label: "ENGAGER",
      title: "Prêt à reprendre le contrôle opérationnel",
      titleHighlight: "de vos opérations ?",
      subtitle:
        "Discutons des goulots d’étranglement et de la fiabilité à rétablir dans vos workflows.",
      cta: "Planifier une consultation",
      guarantee: "Pas satisfait ? Nous offrons une",
      guaranteeHighlight: "garantie de remboursement",
      guaranteeSuffix: "pour les engagements éligibles.",
      enterpriseLabel: "Demandes enterprise :",
    },
    faq: {
      title: "FAQs",
      category: "Engagement & Livraison",
      items: [
        {
          question: "Comment Ovelon Prime travaille-t-il ?",
          answer:
            "Nous commençons par un intake structuré pour comprendre la contrainte opérationnelle. Nous concevons et validons une solution à périmètre fixe sur des workflows réels. Nous implémentons, testons en charge et transférons avec une documentation complète.",
        },
        {
          question: "Dans quelles industries êtes-vous spécialisés ?",
          answer:
            "Nous intervenons dans des environnements critiques : industrie, logistique, opérations de santé et facility management. Si retards, erreurs ou arrêts impactent sécurité, production ou continuité, nous sommes dans le périmètre.",
        },
        {
          question: "Est-ce un abonnement ou un service continu ?",
          answer:
            "Non. Les engagements sont à périmètre fixe et orientés résultats. Pas d’abonnement obligatoire, pas de dépendance de licence, pas de frais récurrents. Vous possédez le système après livraison.",
        },
        {
          question: "Combien de temps dure une implémentation типique ?",
          answer:
            "La plupart des engagements ciblés sont livrés en 2 à 4 semaines, selon le périmètre et l’accès aux systèmes. Les programmes enterprise se déploient par phases selon les priorités opérationnelles.",
        },
        {
          question: "Cela s’intègre-t-il à nos systèmes existants ?",
          answer:
            "Oui. Les solutions s’intègrent aux systèmes existants sans remplacer les plateformes cœur. Nous opérons dans vos outils et périmètres de données.",
        },
        {
          question: "Devons-nous changer nos workflows actuels ?",
          answer:
            "Non. Nous concevons autour de vos workflows. Lorsque des changements sont nécessaires, ils sont minimaux, documentés et validés avec vos équipes avant déploiement.",
        },
        {
          question: "Qui possède le système après livraison ?",
          answer:
            "Vous. Tous les systèmes, configurations et documents sont transférés à la fin. Aucun verrouillage fournisseur. Vous conservez la propriété opérationnelle et technique.",
        },
        {
          question: "Comment gérez-vous sécurité et conformité ?",
          answer:
            "La sécurité et la conformité sont des contraintes de conception. Chaque engagement s’aligne sur vos politiques, contrôles d’accès et exigences. Nous travaillons dans l’infrastructure approuvée, sans extraction de données hors périmètre. Livraison avec documentation pour audits, revues de risques et handover.",
        },
        {
          question: "Quel niveau d’implication interne est requis ?",
          answer:
            "Minimal et structuré. Un input limité au démarrage et pour valider les hypothèses. L’implémentation est menée de façon autonome, avec des points de contrôle clairs. Les équipes opérationnelles ne sont pas perturbées.",
        },
        {
          question: "Ovelon Prime est-il adapté aux grandes entreprises ?",
          answer:
            "Oui. Nous sommes conçus pour des environnements multi-acteurs avec gouvernance et conformité strictes. Déploiements en phases, alignés change management et security reviews — sans remplacement de plateformes ni interruption.",
        },
      ] as FAQItem[],
    },
    footer: {
      privacy: "Confidentialité",
      terms: "Conditions",
      copyright: "Ovelon Prime. Tous droits réservés.",
    },
  },

  /* ===================== IT ===================== */
  it: {
    nav: {
      services: "Servizi",
      pricing: "Prezzi",
      about: "Chi siamo",
      contact: "Contatti",
      cta: "Parla con un esperto",
    },
    hero: {
      badge: "Industrie critiche orientate ai risultati",
      title: "La complessità operativa erode",
      titleHighlight: "affidabilità e disciplina di esecuzione",
      subtitle:
        "Quando il coordinamento diventa manuale, la manutenzione diventa reattiva e le operazioni si basano su soluzioni di fortuna, il controllo è già perso.",
      subtitle2:
        "Ripristiniamo un’esecuzione prevedibile e disciplinata in operazioni reali — senza sostituire i sistemi core né interrompere i flussi quotidiani.",
      subtitleMobile:
        "Quando il coordinamento diventa manuale, il controllo è già perso.",
      cta: "Esplora il supporto operativo",
      trustline:
        "Nessun rip-and-replace · Nessun vendor lock-in · Risultati operativi prima di tutto",
    },
    services: {
      label: "COSA STABILIZZIAMO",
      title: "Affidabilità operativa in ambienti",
      titleHighlight: "che non possono permettersi errori",
      subtitle:
        "Supportiamo workflow operativi in cui ritardi, interventi manuali e disallineamenti impattano direttamente sicurezza, continuità o output.",
      items: [
        {
          title: "Gestione richieste e fabbisogno",
          description:
            "Le richieste in ingresso vengono acquisite, validate e instradate in modo coerente — senza dipendere da follow-up ad hoc o giudizi individuali.",
          tags: ["Controllo intake", "Regole di qualificazione", "Routing di sistema"],
        },
        {
          title: "Standard di sicurezza ed esecuzione",
          description:
            "Istruzioni visive standardizzate allineano operatori, appaltatori e team su procedure critiche — riducendo errori di interpretazione e rischio di esecuzione.",
          tags: [
            "Procedure HSE",
            "Allineamento ISO / VCA / OSHA",
            "Onboarding operatori & appaltatori",
          ],
        },
        {
          title: "Gestione incidenti ed escalation",
          description:
            "Gli incidenti vengono registrati, classificati ed escalati in modo controllato — garantendo responsabilità, chiarezza di risposta e percorsi di risoluzione prevedibili.",
          tags: ["Classificazione", "Percorsi di escalation", "Responsabilità"],
        },
      ] as ServiceItem[],
    },
    about: {
      label: "Chi siamo",
      title: "Basato su competenza operativa,",
      titleHighlight: "guidato dalla precisione",
      description1:
        "Ovelon Prime lavora con organizzazioni sotto pressione costante — dove fermo impianto, ritardi e processi manuali impattano direttamente costi, sicurezza e affidabilità.",
      description2:
        "Combiniamo profonda competenza di dominio con livelli di controllo operativi per progettare sistemi che si integrano nei workflow esistenti senza interrompere operazioni critiche.",
      quote:
        "\"La precisione non è opzionale. In ambienti dove l’affidabilità determina i risultati, i sistemi devono essere progettati per performare sotto pressione.\"",
      quoteAuthor: "Leadership Team · Ovelon Prime",
      stats: {
        uptime: "Uptime del sistema operativo",
        deployments: "Implementazioni",
        industries: "Industrie critiche servite",
      },
    },
    pricing: {
      label: "Prezzi",
      title: "Prezzi basati sull’ingaggio, con risultati chiaramente definiti",
      subtitle:
        "Ingaggi con perimetro chiaro, focalizzati su affidabilità, riduzione dell’attrito operativo e impatto misurabile.",
      focused: {
        name: "Ingaggio operativo mirato",
        description:
          "Un ingaggio a perimetro fisso per risolvere un collo di bottiglia operativo chiaramente definito, con impatto misurabile.",
        priceLabel: "A partire da",
        period: "tariffa una tantum",
        cta: "Richiedi dettagli",
        features: [
          "Un miglioramento operativo chiaramente definito",
          "Mappatura processo & responsabilità",
          "Implementazione controllata & rollout",
          "Documentazione & handover operativo",
          "Validazione post-implementazione",
        ],
      },
      enterprise: {
        name: "Programma operativo Enterprise",
        description:
          "Sistemi operativi su misura per organizzazioni complesse con requisiti rigorosi di governance, compliance e continuità.",
        priceLabel: "Prezzo su misura",
        period: "tariffa una tantum",
        cta: "Richiedi valutazione iniziale",
        badge: "Enterprise",
        features: [
          "Architettura operativa multi-sistema",
          "Integrazioni personalizzate con sistemi esistenti",
          "Supporto dedicato per implementazione & transizione",
          "Design operativo orientato alla compliance",
          "SLA e governance su misura",
        ],
      },
      securityNote:
        "Ogni ingaggio è costruito con sicurezza enterprise-grade, protezione dati e compliance operativa.",
      talkToExpert: "Parla con un esperto",
      intakeNote:
        "Intake strutturato · Nessuna pressione commerciale · Direttamente con un esperto",
      reviewNote: "Tutte le richieste vengono revisionate prima della pianificazione.",
    },
    contact: {
      label: "CONTATTO",
      title: "Pronto a riprendere il controllo operativo",
      titleHighlight: "delle tue operazioni?",
      subtitle:
        "Parliamo di colli di bottiglia e di come ripristinare affidabilità nei tuoi workflow.",
      cta: "Pianifica una consulenza",
      guarantee: "Non soddisfatto? Offriamo una",
      guaranteeHighlight: "garanzia di rimborso",
      guaranteeSuffix: "per ingaggi idonei.",
      enterpriseLabel: "Richieste enterprise:",
    },
    faq: {
      title: "FAQ",
      category: "Ingaggio & Consegna",
      items: [
        {
          question: "Come lavora Ovelon Prime?",
          answer:
            "Iniziamo con un intake strutturato per comprendere il vincolo operativo. Progettiamo e validiamo una soluzione a perimetro fisso su workflow reali. Implementiamo, testiamo sotto carico e consegniamo con documentazione completa.",
        },
        {
          question: "In quali settori siete specializzati?",
          answer:
            "Lavoriamo in ambienti mission-critical: manifattura, logistica, operazioni sanitarie e facility management. Se ritardi, errori o downtime impattano sicurezza, output o continuità, siamo nel perimetro.",
        },
        {
          question: "È un abbonamento o un servizio continuativo?",
          answer:
            "No. Gli ingaggi sono a perimetro fisso e orientati ai risultati. Nessun abbonamento obbligatorio, nessuna dipendenza da licenza, nessun costo ricorrente. Il sistema è tuo dopo la consegna.",
        },
        {
          question: "Quanto dura un’implementazione tipica?",
          answer:
            "La maggior parte degli ingaggi mirati viene consegnata in 2–4 settimane, in base a perimetro e accesso ai sistemi. I programmi enterprise seguono rollout per fasi in linea con le priorità operative.",
        },
        {
          question: "Si integra con i nostri sistemi esistenti?",
          answer:
            "Sì. Le soluzioni sono progettate per integrarsi con sistemi esistenti senza sostituire le piattaforme core. Operiamo entro i tuoi strumenti e confini dati.",
        },
        {
          question: "Dobbiamo cambiare i nostri workflow attuali?",
          answer:
            "No. Progettiamo attorno ai tuoi workflow. Dove sono necessari cambiamenti, sono minimi, documentati e validati con i team operativi prima del deployment.",
        },
        {
          question: "Chi possiede il sistema dopo la consegna?",
          answer:
            "Tu. Sistemi, configurazioni e documentazione vengono consegnati a completamento. Nessun vendor lock-in. Piena proprietà operativa e tecnica.",
        },
        {
          question: "Come gestite sicurezza e compliance?",
          answer:
            "Sicurezza e compliance sono vincoli di progettazione. Ogni ingaggio rispetta policy, controlli accesso e requisiti di compliance esistenti. Lavoriamo entro infrastruttura approvata e governance. Nessun dato viene utilizzato oltre lo scope concordato. Consegna con documentazione per audit e handover.",
        },
        {
          question: "Che livello di coinvolgimento interno è richiesto?",
          answer:
            "Minimo e strutturato. Input limitato in intake e per validare assunzioni. Implementazione gestita in autonomia con checkpoint chiari. I team operativi non vengono disturbati e non sono richieste risorse continue dopo la consegna.",
        },
        {
          question: "Ovelon Prime è adatto a grandi ambienti enterprise?",
          answer:
            "Sì. Siamo pensati per contesti complessi con governance e compliance rigorose. Ingaggi allineati a change management, security review e rollout per fasi — senza sostituzioni di piattaforme o interruzioni.",
        },
      ] as FAQItem[],
    },
    footer: {
      privacy: "Privacy",
      terms: "Termini",
      copyright: "Ovelon Prime. Tutti i diritti riservati.",
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
    },
    hero: {
      badge: "Branże krytyczne — zorientowane na wynik",
      title: "Złożoność operacyjna osłabia",
      titleHighlight: "niezawodność i dyscyplinę wykonania",
      subtitle:
        "Gdy koordynacja staje się manualna, utrzymanie ruchu jest reaktywne, a operacje opierają się na obejściach — kontrola jest już utracona.",
      subtitle2:
        "Przywracamy przewidywalne, zdyscyplinowane wykonanie w działających operacjach — bez wymiany systemów core i bez zakłócania codziennych workflow.",
      subtitleMobile:
        "Gdy koordynacja staje się manualna, kontrola jest już utracona.",
      cta: "Poznaj wsparcie operacyjne",
      trustline:
        "Bez rip-and-replace · Bez vendor lock-in · Najpierw wyniki operacyjne",
    },
    services: {
      label: "CO STABILIZUJEMY",
      title: "Niezawodność operacyjna w środowiskach",
      titleHighlight: "gdzie nie ma miejsca na błędy",
      subtitle:
        "Wspieramy workflow, gdzie opóźnienia, ręczne interwencje i brak spójności bezpośrednio wpływają na bezpieczeństwo, ciągłość lub output.",
      items: [
        {
          title: "Obsługa zgłoszeń i zapotrzebowania",
          description:
            "Zgłoszenia są przechwytywane, weryfikowane i routowane w sposób spójny — bez ad hoc follow-up i bez zależności od indywidualnych decyzji.",
          tags: ["Kontrola intake", "Reguły kwalifikacji", "Routing systemowy"],
        },
        {
          title: "Standardy bezpieczeństwa i wykonania",
          description:
            "Ustandaryzowane instrukcje wizualne wyrównują operatorów, podwykonawców i zespoły względem procedur krytycznych — redukując błędy interpretacji i ryzyko wykonania.",
          tags: [
            "Procedury HSE",
            "Zgodność ISO / VCA / OSHA",
            "Onboarding operatorów i podwykonawców",
          ],
        },
        {
          title: "Obsługa incydentów i eskalacja",
          description:
            "Incydenty są rejestrowane, klasyfikowane i eskalowane w kontrolowany sposób — zapewniając odpowiedzialność i przewidywalne ścieżki rozwiązania.",
          tags: ["Klasyfikacja", "Ścieżki eskalacji", "Właściciel reakcji"],
        },
      ] as ServiceItem[],
    },
    about: {
      label: "O nas",
      title: "Zbudowane na doświadczeniu operacyjnym,",
      titleHighlight: "napędzane precyzją",
      description1:
        "Ovelon Prime współpracuje z organizacjami działającymi pod stałą presją — gdzie przestoje, opóźnienia i procesy manualne bezpośrednio wpływają na koszty, bezpieczeństwo i niezawodność.",
      description2:
        "Łączymy głęboką wiedzę domenową z warstwami kontroli operacyjnej, aby projektować systemy integrujące się z istniejącymi workflow bez zakłócania krytycznych operacji.",
      quote:
        "\"Precyzja nie jest opcjonalna. W środowiskach, gdzie niezawodność decyduje o wynikach, systemy muszą działać pod presją.\"",
      quoteAuthor: "Zespół kierowniczy · Ovelon Prime",
      stats: {
        uptime: "Dostępność systemu",
        deployments: "Wdrożenia",
        industries: "Obsługiwane branże krytyczne",
      },
    },
    pricing: {
      label: "Cennik",
      title: "Cennik oparty o zaangażowanie, z jasno zdefiniowanymi rezultatami",
      subtitle:
        "Jasno określone zaangażowania ukierunkowane na niezawodność, redukcję tarcia operacyjnego i mierzalny wpływ.",
      focused: {
        name: "Ukierunkowane zaangażowanie operacyjne",
        description:
          "Zaangażowanie o stałym zakresie, zaprojektowane do usunięcia jasno zdefiniowanego wąskiego gardła operacyjnego.",
        priceLabel: "Od",
        period: "opłata jednorazowa",
        cta: "Poproś o szczegóły",
        features: [
          "Jedno, jasno określone usprawnienie operacyjne",
          "Mapowanie procesu i odpowiedzialności",
          "Kontrolowane wdrożenie i rollout",
          "Dokumentacja i przekazanie operacyjne",
          "Walidacja po wdrożeniu",
        ],
      },
      enterprise: {
        name: "Program operacyjny Enterprise",
        description:
          "Dopasowane systemy operacyjne dla złożonych organizacji z wysokimi wymaganiami governance, compliance i ciągłości.",
        priceLabel: "Wycena indywidualna",
        period: "opłata jednorazowa",
        cta: "Poproś o ocenę wstępną",
        badge: "Enterprise",
        features: [
          "Architektura operacyjna wielu systemów",
          "Integracje dopasowane do istniejących systemów",
          "Dedykowane wsparcie wdrożenia i przejścia",
          "Projekt zgodny z wymaganiami compliance",
          "SLA i ramy governance",
        ],
      },
      securityNote:
        "Każde zaangażowanie jest budowane z bezpieczeństwem klasy enterprise, ochroną danych i zgodnością operacyjną.",
      talkToExpert: "Porozmawiaj z ekspertem",
      intakeNote:
        "Ustrukturyzowany intake · Bez presji sprzedażowej · Bezpośrednio z doświadczonym ekspertem",
      reviewNote: "Wszystkie zgłoszenia są weryfikowane przed umówieniem terminu.",
    },
    contact: {
      label: "KONTAKT",
      title: "Gotowy odzyskać kontrolę operacyjną",
      titleHighlight: "nad operacjami?",
      subtitle:
        "Porozmawiajmy o wąskich gardłach i niezawodności w Twoich workflow.",
      cta: "Umów konsultację",
      guarantee: "Niezadowolony? Oferujemy prostą",
      guaranteeHighlight: "gwarancję zwrotu pieniędzy",
      guaranteeSuffix: "dla kwalifikujących się zaangażowań.",
      enterpriseLabel: "Zapytania enterprise:",
    },
    faq: {
      title: "FAQ",
      category: "Zaangażowanie i dostawa",
      items: [
        {
          question: "Jak działa Ovelon Prime?",
          answer:
            "Zaczynamy od ustrukturyzowanego intake, aby zrozumieć ograniczenie operacyjne. Następnie projektujemy i walidujemy rozwiązanie o stałym zakresie na realnych workflow. Wdrażamy, testujemy pod obciążeniem i przekazujemy całość z pełną dokumentacją.",
        },
        {
          question: "W jakich branżach się specjalizujecie?",
          answer:
            "Pracujemy w środowiskach mission-critical, m.in. produkcja, logistyka, operacje w ochronie zdrowia oraz facility management. Jeśli opóźnienia, błędy lub downtime wpływają na bezpieczeństwo, output lub ciągłość — jesteśmy w zakresie.",
        },
        {
          question: "Czy to subskrypcja lub usługa ciągła?",
          answer:
            "Nie. Zaangażowania są o stałym zakresie i zorientowane na wynik. Bez obowiązkowej subskrypcji, bez zależności licencyjnych i bez stałych opłat. System należy do Ciebie po dostawie.",
        },
        {
          question: "Ile trwa typowe wdrożenie?",
          answer:
            "Większość ukierunkowanych zaangażowań jest dostarczana w 2–4 tygodnie, zależnie od zakresu i dostępu do systemów. Programy enterprise realizujemy etapami zgodnie z priorytetami operacyjnymi.",
        },
        {
          question: "Czy to zintegruje się z naszymi istniejącymi systemami?",
          answer:
            "Tak. Rozwiązania są projektowane do integracji z istniejącymi systemami bez wymiany platform core. Pracujemy w ramach Twoich narzędzi i granic danych.",
        },
        {
          question: "Czy musimy zmienić nasze obecne workflow?",
          answer:
            "Nie. Projektujemy wokół Twoich istniejących workflow. Jeśli zmiany są konieczne, są minimalne, udokumentowane i walidowane z zespołami operacyjnymi przed wdrożeniem.",
        },
        {
          question: "Kto jest właścicielem systemu po dostawie?",
          answer:
            "Ty. Wszystkie systemy, konfiguracje i dokumentacja są przekazywane po zakończeniu. Bez vendor lock-in. Pełna własność operacyjna i techniczna.",
        },
        {
          question: "Jak podchodzicie do bezpieczeństwa i compliance?",
          answer:
            "Bezpieczeństwo i compliance traktujemy jako ograniczenia projektowe. Każde zaangażowanie jest osadzone w Twoich politykach, kontrolach dostępu i wymaganiach. Pracujemy w zatwierdzonej infrastrukturze i ramach governance. Dane nie są używane poza ustalonym zakresem. Dostawa obejmuje dokumentację pod audyty i handover.",
        },
        {
          question: "Jaki poziom zaangażowania wewnętrznego jest wymagany?",
          answer:
            "Minimalny i ustrukturyzowany. Potrzebujemy ograniczonego inputu w intake i do walidacji założeń. Wdrożenie realizujemy samodzielnie z jasnymi checkpointami. Zespoły operacyjne nie są zakłócane i po dostawie nie ma potrzeby stałych zasobów.",
        },
        {
          question: "Czy Ovelon Prime nadaje się dla dużych środowisk enterprise?",
          answer:
            "Tak. Jesteśmy dopasowani do złożonych środowisk z rygorystycznym governance, compliance i wymaganiami operacyjnymi. Zaangażowania są zgodne z change management, security review i rolloutem etapowym — bez wymiany platform i bez przestojów.",
        },
      ] as FAQItem[],
    },
    footer: {
      privacy: "Prywatność",
      terms: "Regulamin",
      copyright: "Ovelon Prime. Wszelkie prawa zastrzeżone.",
    },
  },
};
