import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How does Ovelon Prime work?",
    answer:
      "We design and implement tailored automation systems that remove operational bottlenecks across intake, scheduling, and customer support workflows.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We specialize in industrial services, logistics, facility management, maintenance operations, and other time-critical environments.",
  },
  {
    question: "Is this a subscription service?",
    answer:
      "No. All engagements are project-based with a clearly defined scope. No subscriptions, no retainers.",
  },
  {
    question: "How long does an implementation take?",
    answer:
      "Most Prime engagements are delivered within 7-10 days, depending on system complexity and integrations.",
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
          Product Info
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
