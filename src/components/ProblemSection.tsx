import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const painPoints = [
  "problem.pain1",
  "problem.pain2",
  "problem.pain3",
  "problem.pain4",
  "problem.pain5",
];

export const ProblemSection = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-32 px-6 md:px-12 bg-primary">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left column - Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-center md:text-left"
          >
            <span className="text-xs tracking-[0.4em] text-accent/80 uppercase mb-6 block">
              {t("problem.badge")}
            </span>
            <h2 className="text-3xl md:text-4xl font-light leading-tight mb-6 text-primary-foreground">
              {t("problem.title")}
            </h2>
            <p className="text-primary-foreground/50 font-light leading-relaxed">
              {t("problem.description")}
            </p>
          </motion.div>

          {/* Right column - Pain points */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="space-y-6"
          >
            {painPoints.map((painKey, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center gap-4 p-5 border border-primary-foreground/10 hover:border-accent/30 transition-colors duration-500"
              >
                <div className="w-2 h-2 bg-accent/60 shrink-0" />
                <span className="text-primary-foreground/70 font-light">
                  {t(painKey)}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
