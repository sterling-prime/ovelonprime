import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import contactBg from "@/assets/chipAI.png"; // zelfde image of variatie

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="relative py-28 overflow-hidden"
    >
      {/* Background image */}
      {/* Background */}
<div
  className="absolute inset-0 bg-cover bg-center"
  style={{
    backgroundImage: `url(${contactBg})`,
    filter: "contrast(1.08) saturate(1.05)",
  }}
>
  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/68 to-background/85" />

  {/* Center focus glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />
</div>


      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">

          {/* Label */}
          <p className="section-label mb-4 tracking-widest">
            {t("contact.label")}
          </p>

          {/* Title */}
          <h2 className="section-title mb-6">
            {t("contact.title")}{" "}
            <span className="text-muted-foreground">
              {t("contact.titleHighlight")}
            </span>
          </h2>

          {/* Subtitle */}
          <p className="section-subtitle mx-auto mb-10">
            {t("contact.subtitle")}
          </p>

          {/* CTA */}
          <div className="flex justify-center">
            <Button
              size="lg"
              className="
                bg-foreground
                text-background
                hover:bg-accent
                hover:text-accent-foreground
                transition-colors
                px-10
                tracking-wide
              "
              onClick={() =>
                window.dispatchEvent(new Event("open-booking-modal"))
              }
            >
              {t("contact.cta")}
            </Button>
          </div>

          {/* Guarantee */}
          <p className="text-sm text-muted-foreground mt-8">
            {t("contact.guarantee")}{" "}
            <span className="font-medium text-foreground">
              {t("contact.guaranteeHighlight")}
            </span>{" "}
            {t("contact.guaranteeSuffix")}
          </p>

          {/* Enterprise */}
          <p className="text-sm text-muted-foreground mt-10">
            {t("contact.enterpriseLabel")}{" "}
            <a
              href="mailto:support@ovelon-prime.com"
              className="text-accent hover:underline"
            >
              support@ovelon-prime.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
