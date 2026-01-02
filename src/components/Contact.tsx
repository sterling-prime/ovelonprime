import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import contactBg from "@/assets/u3714841198_Minimalistic_abstract_background_designed_for_a_c_e56f8162-43f3-47ed-8b5e-63ec90910a05_0.png";

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="relative py-28 sm:py-32 overflow-hidden"
    >
      {/* ===== Background ===== */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${contactBg})`,
          filter: "contrast(1.08) saturate(1.05)",
        }}
      >
        {/* Lighter readability overlay (less heavy than hero) */}
        <div className="absolute inset-0 bg-background/35" />

        {/* Soft control gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/25 via-transparent to-background/40" />

        {/* Bottom fade (white haze like screenshot) */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
      </div>

      {/* ===== Content ===== */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">

          {/* Label */}
          <p
  className="
    mb-6
    text-xs sm:text-sm
    tracking-[0.3em]
    font-semibold
    uppercase
    text-[#3A8F94]
  "
>
  ENGAGE
</p>

          {/* Title */}
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-8 text-foreground/80">
            <span className="block mt-2 text-foreground/70">
              {t("contact.title")}
            </span>
            {t("contact.titleHighlight")}
          </h2>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-foreground/60 max-w-2xl mx-auto mb-12">
            {t("contact.subtitle")}
          </p>

          {/* CTA */}
          <div className="flex justify-center mb-12">
            <Button
              size="lg"
              className="
                bg-slate-900
                text-white
                font-medium
                px-10
                py-4
                rounded-md
                transition-colors
                hover:bg-[#3A8F94]
                active:bg-[#3A8F94]
                focus-visible:bg-[#3A8F94]
              "
              onClick={() =>
                window.dispatchEvent(new Event("open-booking-modal"))
              }
            >
              {t("contact.cta")}
            </Button>
          </div>

          {/* Guarantee */}
          <p className="text-sm text-foreground/60 max-w-xl mx-auto mb-16">
            <span className="font-semibold text-foreground/75">
              {t("contact.guaranteeHighlight")}
            </span>
            {t("contact.guaranteeSuffix")}
          </p>

          {/* Enterprise */}
          <p className="text-sm text-foreground/60">
            {t("contact.enterpriseLabel")}
            <a
              href="mailto:support@ovelon-prime.com"
              className="text-[#3A8F94] hover:underline"
            >
              support@ovelon-prime.com
            </a>
          </p>

        </div>
      </div>
    </section>
  );
};
