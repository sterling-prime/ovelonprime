import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How does Ovelon Prime work?",
    answer:
      "Ovelon Prime delivers clearly scoped automation engagements. We identify operational bottlenecks, design a tailored automation solution, and implement it directly into your existing workflows without disrupting day-to-day operations.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We work with organizations operating in time-critical and regulated environments, including industrial services, facility management, logistics and warehousing, maintenance and repair operations, and healthcare-related services.",
  },
  {
    question: "Is this a subscription or ongoing service?",
    answer:
      "No. All engagements are delivered as one-time, clearly defined projects. There are no subscriptions or mandatory retainers involved.",
  },
  {
    question: "How long does a typical implementation take?",
    answer:
      "Implementation timelines depend on scope and complexity. Focused automation engagements typically take between 10-12 days, while larger enterprise programs are delivered in phased rollouts.",
  },
  {
    question: "Will this integrate with our existing systems?",
    answer:
      "Yes. All solutions are engineered to integrate with your existing tools, platforms, and operational systems. Compatibility and minimal disruption are core design principles.",
  },
  {
    question: "Do we need to change our current workflows?",
    answer:
      "No. Our approach focuses on enhancing and automating existing workflows. Any necessary process adjustments are identified upfront and agreed upon before implementation.",
  },
  {
    question: "Who owns the automation after delivery?",
    answer:
      "You do. All delivered systems, configurations, and documentation are handed over upon completion, ensuring full ownership and operational control.",
  },
  {
    question: "How do you handle security and compliance?",
    answer:
      "Security and compliance are built into every engagement. We follow industry best practices for data protection, access control, and compliance-aware system design tailored to your operational environment.",
  },
  {
    question: "What level of internal involvement is required?",
    answer:
      "Internal involvement is kept minimal. Typically this includes an initial scoping session and periodic check-ins. Day-to-day execution is handled by our team.",
  },
  {
    question: "Is Ovelon Prime suitable for large enterprise environments?",
    answer:
      "Yes. We regularly work with complex organizations that require governance, documentation, and structured implementation processes across multiple teams and systems.",
  },
];

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-16">
          FAQs
        </h2>

        {/* Category */}
        <div className="text-sm font-semibold text-accent uppercase tracking-wide mb-10 text-center">
          Engagement & Delivery
        </div>

        {/* FAQ list */}
        <div className="border-t">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.question} className="border-b">
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="
                    w-full
                    flex
                    items-center
                    justify-between
                    py-6
                    text-left
                  "
                >
                  <span className="text-lg font-semibold">
                    {faq.question}
                  </span>

                  {isOpen ? (
                    <Minus className="h-5 w-5 shrink-0" />
                  ) : (
                    <Plus className="h-5 w-5 shrink-0" />
                  )}
                </button>

                {/* Answer */}
                {isOpen && (
                  <div className="pb-6 pr-8 text-muted-foreground text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
