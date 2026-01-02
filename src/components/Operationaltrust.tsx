import { useTranslation } from "react-i18next";
import { ShieldCheck, FileCheck, HardHat, Lock, Layers } from "lucide-react";

const icons = [ShieldCheck, FileCheck, HardHat, Lock, Layers];

export const OperationalTrust = () => {
  const { t } = useTranslation();

  const items = t("operationalTrust.items", { returnObjects: true }) as Array<{
    text: string;
  }>;

  return (
    <div className="mt-14">

      {/* Divider */}
      <div className="h-px w-full bg-border/60 mb-10" />

      {/* Heading */}
      <p className="text-xs tracking-widest uppercase text-muted-foreground text-center mb-6">
        {t("operationalTrust.heading")}
      </p>

      {/* Trust items */}
      <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 text-sm text-muted-foreground">
        {items.map((item, index) => {
          const Icon = icons[index];
          return (
            <div key={index} className="flex items-center gap-2">
              <Icon className="h-4 w-4 text-foreground/70" />
              {item.text}
            </div>
          );
        })}
      </div>

      {/* CISO / governance line */}
      <p className="mt-8 text-xs text-muted-foreground text-center max-w-3xl mx-auto">
        {t("operationalTrust.footer")}
      </p>
    </div>
  );
};
