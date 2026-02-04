import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useTranslation } from "react-i18next";
import { ScrollReveal } from "./ScrollReveal";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

export const Faq = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const faqs = t("faq.items", { returnObjects: true }) as Array<{
    question: string;
    answer: string;
  }>;

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <ScrollReveal variant="fade-up">
          <h2 className="text-4xl font-bold text-center mb-16">{t("faq.title")}</h2>
          <div className="text-sm font-semibold text-accent uppercase tracking-wide mb-10 text-center">
            {t("faq.category")}
          </div>
        </ScrollReveal>

        <div ref={ref as any} className="border-t">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={cn(
                  "border-b transition-all duration-500",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
                style={{
                  transitionDelay: `${150 + index * 80}ms`,
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between py-6 text-left group"
                >
                  <span className="text-lg font-semibold group-hover:text-accent transition-colors">{faq.question}</span>
                  {isOpen ? <Minus className="h-5 w-5 shrink-0 text-accent" /> : <Plus className="h-5 w-5 shrink-0" />}
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    isOpen ? "max-h-96 pb-6" : "max-h-0"
                  )}
                >
                  <div className="pr-8 text-muted-foreground text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
