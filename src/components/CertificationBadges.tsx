import { useTranslation } from "react-i18next";
import badgeIso from "@/assets/badge-iso27001.png";
import badgeSoc2 from "@/assets/badge-soc2.png";
import badgeGdpr from "@/assets/badge-gdpr.png";

const badges = [
  { img: badgeIso, titleKey: "footer.badgeIsoTitle", descKey: "footer.badgeIsoDesc", alt: "ISO 27001" },
  { img: badgeSoc2, titleKey: "footer.badgeSocTitle", descKey: "footer.badgeSocDesc", alt: "SOC 2 Type II" },
  { img: badgeGdpr, titleKey: "footer.badgeGdprTitle", descKey: "footer.badgeGdprDesc", alt: "GDPR" },
];

export const CertificationBadges = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 sm:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {badges.map((badge) => (
            <div
              key={badge.alt}
              className="flex flex-col items-center text-center gap-5 bg-card/80 backdrop-blur-sm rounded-3xl px-10 py-10 border border-border/50 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={badge.img}
                alt={badge.alt}
                className="w-28 h-28 object-contain drop-shadow-lg"
                loading="lazy"
              />
              <div>
                <p className="text-lg font-bold text-foreground tracking-wide">{t(badge.titleKey)}</p>
                <p className="text-sm text-muted-foreground mt-1">{t(badge.descKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationBadges;
