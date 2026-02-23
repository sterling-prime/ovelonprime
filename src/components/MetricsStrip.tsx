import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  TrendingUp,
  ShieldCheck,
  Clock,
  Users,
} from "lucide-react";

const icons = [
  TrendingUp,
  ShieldCheck,
  Clock,
  Users,
];

export const MetricsStrip = () => {
  const { t } = useTranslation();

  const metrics = t("metricsStrip.items", { returnObjects: true }) as Array<{
    value: string;
    label: string;
  }>;

  return (
    <section className="bg-accent/10 py-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {metrics.map((metric, index) => {
            const Icon = icons[index % icons.length];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="
                  group bg-muted/70 border border-border
                  rounded-2xl px-6 py-6 text-center
                  shadow-sm transition-all duration-300
                  hover:border-accent
                  hover:shadow-md
                "
              >
                {/* ICON — NO BACKGROUND */}
                <div className="mx-auto mb-4 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-foreground/70 transition-colors duration-300 group-hover:text-accent" />
                </div>

                {/* VALUE */}
                <span className="
                  block text-3xl md:text-4xl font-bold tracking-tight
                  text-foreground transition-colors duration-300
                  group-hover:text-accent
                ">
                  {metric.value}
                </span>

                {/* LABEL */}
                <span className="
                  mt-2 block text-xs uppercase tracking-widest font-medium
                  text-muted-foreground
                ">
                  {metric.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
