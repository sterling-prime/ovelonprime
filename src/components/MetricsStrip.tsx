import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export const MetricsStrip = () => {
  const { t } = useTranslation();

  const metrics = t("metricsStrip.items", { returnObjects: true }) as Array<{
    value: string;
    label: string;
  }>;

  return (
    <section className="bg-background border-b border-border/40 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-border/40">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="flex flex-col items-center text-center px-4 py-2"
            >
              <span className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                {metric.value}
              </span>
              <span className="mt-1 text-xs uppercase tracking-widest text-muted-foreground font-medium">
                {metric.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
