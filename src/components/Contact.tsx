import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="section-label mb-4">{t("contact.label")}</p>

          <h2 className="section-title mb-6">
            {t("contact.title")}{" "}
            <span className="text-muted-foreground">{t("contact.titleHighlight")}</span>
          </h2>

          <p className="section-subtitle mx-auto mb-8">{t("contact.subtitle")}</p>

          <div className="flex justify-center">
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.dispatchEvent(new Event("open-booking-modal"))}
            >
              {t("contact.cta")}
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            {t("contact.guarantee")}{" "}
            <span className="font-medium text-foreground">{t("contact.guaranteeHighlight")}</span>{" "}
            {t("contact.guaranteeSuffix")}
          </p>

          <p className="text-sm text-muted-foreground mt-8">
            {t("contact.enterpriseLabel")}{" "}
            <a href="mailto:support@ovelon-prime.com" className="text-accent hover:underline">
              support@ovelon-prime.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
