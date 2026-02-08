import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "./ScrollReveal";

import caseFacility from "@/assets/facilitydemo.png";
import caseSupplychain from "@/assets/supplydemo.png";
import caseWarehouse from "@/assets/case-warehouse.jpg";
import caseMaintenance from "@/assets/repairdemo.png";

const caseImages = [caseFacility, caseSupplychain, caseWarehouse, caseMaintenance];

const TabButton = ({
  isActive,
  onClick,
  children,
}: {
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <button
    type="button"
    onClick={onClick}
    className={cn(
      "relative px-4 py-3 text-sm font-medium transition-colors whitespace-nowrap",
      isActive
        ? "text-accent"
        : "text-primary-foreground/40 hover:text-primary-foreground/60"
    )}
  >
    {children}

    {isActive && (
      <motion.div
        layoutId="case-underline"
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
    )}
  </button>
);

export const CaseStudies = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(0);

  const caseKeys = ["facility", "supplyChain", "warehouse", "maintenance"];
  const activeKey = caseKeys[activeTab];

  const results = t(`caseStudies.cases.${activeKey}.results`, {
    returnObjects: true,
  }) as {
    value: string;
    label: string;
  }[];

  return (
    <section
      className="pt-20 pb-32 px-6 md:px-12 bg-primary scroll-mt-20"
      id="case-studies"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <ScrollReveal variant="fade-up" className="text-center mb-12">
          <span className="text-xs tracking-[0.4em] text-accent/80 uppercase mb-6 block">
            {t("caseStudies.badge")}
          </span>

          <h2 className="text-3xl md:text-5xl font-light leading-tight max-w-4xl mx-auto text-primary-foreground">
            {t("caseStudies.title")}
          </h2>
        </ScrollReveal>

        {/* Tabs */}
        <ScrollReveal variant="fade-up" delay={100}>
          <div className="mb-10">
            <div className="flex overflow-x-auto gap-2 border-b border-primary-foreground/10 justify-start md:justify-center scrollbar-none">
              {caseKeys.map((key, index) => (
                <TabButton
                  key={key}
                  isActive={activeTab === index}
                  onClick={() => setActiveTab(index)}
                >
                  <span className="text-primary-foreground/30 mr-2 font-light">
                    {`0${index + 1}`}
                  </span>
                  <span>{t(`caseStudies.cases.${key}.industry`)}</span>
                </TabButton>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
          >
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Image */}
              <div className="rounded-lg overflow-hidden aspect-video">
                <img
                  src={caseImages[activeTab]}
                  alt={t(`caseStudies.cases.${activeKey}.client`)}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details */}
              <div className="space-y-8">
                {/* Challenge */}
                <div>
                  <h4 className="text-xs tracking-[0.3em] uppercase text-accent/70 mb-3">
                    {t("caseStudies.challengeLabel")}
                  </h4>
                  <p className="text-primary-foreground/60 font-light leading-relaxed">
                    {t(`caseStudies.cases.${activeKey}.challenge`)}
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <h4 className="text-xs tracking-[0.3em] uppercase text-accent/70 mb-3">
                    {t("caseStudies.solutionLabel")}
                  </h4>
                  <p className="text-primary-foreground/60 font-light leading-relaxed">
                    {t(`caseStudies.cases.${activeKey}.solution`)}
                  </p>
                </div>

                {/* Results */}
                <div>
                  <h4 className="text-xs tracking-[0.3em] uppercase text-accent/70 mb-3">
                    {t("caseStudies.resultsLabel")}
                  </h4>

                  <div className="grid grid-cols-3 gap-4">
                    {results.map((result) => (
                      <div
                        key={result.label}
                        className="text-center p-4 border border-primary-foreground/10 rounded"
                      >
                        <div className="text-2xl md:text-3xl font-light text-accent mb-1">
                          {result.value}
                        </div>
                        <div className="text-xs text-primary-foreground/40 leading-tight">
                          {result.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CaseStudies;
