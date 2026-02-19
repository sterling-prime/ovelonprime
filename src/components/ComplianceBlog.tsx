import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, FileCheck, ShieldCheck, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { ScrollReveal, StaggerContainer } from "./ScrollReveal";
import { cn } from "@/lib/utils";

const articleKeys = ["nis2", "iso27001", "soc2"] as const;
type ArticleKey = (typeof articleKeys)[number];

const icons: Record<ArticleKey, typeof Shield> = {
  nis2: Shield,
  iso27001: FileCheck,
  soc2: ShieldCheck,
};

export const ComplianceBlog = () => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState<ArticleKey | null>(null);
  const [soc2Type, setSoc2Type] = useState<"type1" | "type2">("type2");

  return (
    <section
      id="compliance-blog"
      className="pt-20 pb-32 px-6 md:px-12 bg-primary scroll-mt-20"
      data-section="compliance-blog"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <ScrollReveal variant="fade-up" className="text-center mb-12">
          <span className="text-xs tracking-[0.4em] text-accent/80 uppercase mb-6 block">
            {t("complianceBlog.badge")}
          </span>

          <h2 className="text-3xl md:text-5xl font-light leading-tight max-w-4xl mx-auto text-primary-foreground">
            {t("complianceBlog.title")}
          </h2>

          <p className="text-primary-foreground/50 font-light leading-relaxed mt-6 max-w-2xl mx-auto">
            {t("complianceBlog.subtitle")}
          </p>
        </ScrollReveal>

        {/* Articles */}
        <StaggerContainer
          staggerDelay={150}
          baseDelay={100}
          className="space-y-8 max-w-5xl mx-auto"
        >
          {articleKeys.map((key) => {
            const Icon = icons[key];
            const isExpanded = expanded === key;
            const isSoc2 = key === "soc2";

            const sections = t(
              isSoc2
                ? `complianceBlog.articles.${key}.${soc2Type}.sections`
                : `complianceBlog.articles.${key}.sections`,
              { returnObjects: true }
            ) as {
              heading: string;
              text: string;
            }[];

            const facts = (
              t(
                isSoc2
                  ? `complianceBlog.articles.${key}.${soc2Type}.facts`
                  : `complianceBlog.articles.${key}.facts`,
                { returnObjects: true }
              ) as { label: string; value: string }[]
            );

            return (
              <div
                key={key}
                className="border border-primary-foreground/10 rounded-lg overflow-hidden transition-colors hover:border-accent/20"
              >
                {/* Article Header */}
                <button
                  type="button"
                  onClick={() => setExpanded(isExpanded ? null : key)}
                  className="w-full text-left p-8 md:p-10 flex items-start gap-6"
                >
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <span className="text-xs tracking-[0.3em] uppercase text-accent/70 block mb-2">
                      {t(`complianceBlog.articles.${key}.tag`)}
                    </span>

                    <h3 className="text-xl md:text-2xl font-light text-primary-foreground leading-tight mb-3">
                      {t(`complianceBlog.articles.${key}.title`)}
                    </h3>

                    <p className="text-sm text-primary-foreground/50 font-light leading-relaxed line-clamp-2">
                      {t(`complianceBlog.articles.${key}.excerpt`)}
                    </p>
                  </div>

                  <div className="shrink-0 mt-2">
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-accent" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-primary-foreground/30" />
                    )}
                  </div>
                </button>

                {/* Expanded Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 md:px-10 pb-10 pt-0 border-t border-primary-foreground/5">

                        {/* SOC 2 Type Toggle */}
                        {isSoc2 && (
                          <div className="flex justify-center mt-8 mb-6">
                            <div className="inline-flex items-center bg-primary-foreground/5 border border-primary-foreground/10 rounded-full p-1 gap-1">
                              <button
                                type="button"
                                onClick={(e) => { e.stopPropagation(); setSoc2Type("type1"); }}
                                className={cn(
                                  "px-5 py-2 rounded-full text-xs font-medium tracking-wide uppercase transition-all duration-200",
                                  soc2Type === "type1"
                                    ? "bg-accent text-accent-foreground shadow-sm"
                                    : "text-primary-foreground/50 hover:text-primary-foreground/80"
                                )}
                              >
                                {t("complianceBlog.articles.soc2.type1Label")}
                              </button>
                              <button
                                type="button"
                                onClick={(e) => { e.stopPropagation(); setSoc2Type("type2"); }}
                                className={cn(
                                  "px-5 py-2 rounded-full text-xs font-medium tracking-wide uppercase transition-all duration-200",
                                  soc2Type === "type2"
                                    ? "bg-accent text-accent-foreground shadow-sm"
                                    : "text-primary-foreground/50 hover:text-primary-foreground/80"
                                )}
                              >
                                {t("complianceBlog.articles.soc2.type2Label")}
                              </button>
                            </div>
                          </div>
                        )}

                        {/* Key Facts */}
                        <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-4 py-8 border-b border-primary-foreground/5", !isSoc2 && "mt-0 pt-8")}>
                          {facts.map((fact) => (
                            <div key={fact.label} className="text-center p-4">
                              <p className="text-2xl font-light text-accent mb-1">
                                {fact.value}
                              </p>
                              <p className="text-xs text-primary-foreground/40 uppercase tracking-wide">
                                {fact.label}
                              </p>
                            </div>
                          ))}
                        </div>

                        {/* Article Sections */}
                        <div className="space-y-8 mt-8">
                          {sections.map((section, idx) => (
                            <div key={idx}>
                              <h4 className="text-lg font-medium text-primary-foreground mb-3 flex items-center gap-2">
                                <ArrowRight className="w-4 h-4 text-accent shrink-0" />
                                {section.heading}
                              </h4>

                              <p className="text-sm text-primary-foreground/60 font-light leading-relaxed pl-6">
                                {section.text}
                              </p>
                            </div>
                          ))}
                        </div>

                        {/* How Ovelon Prime Helps */}
                        <div className="mt-10 p-6 bg-accent/5 border border-accent/10 rounded-lg">
                          <h4 className="text-sm tracking-[0.2em] uppercase text-accent mb-4">
                            {t(`complianceBlog.articles.${key}.ovelonTitle`)}
                          </h4>

                          <ul className="space-y-3">
                            {(
                              t(`complianceBlog.articles.${key}.ovelonPoints`, {
                                returnObjects: true,
                              }) as string[]
                            ).map((point, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-3 text-sm text-primary-foreground/70 font-light"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ComplianceBlog;
