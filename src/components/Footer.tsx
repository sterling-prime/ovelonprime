import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { X } from "lucide-react";
import { Logo } from "./Logo";

import badgeIso from "@/assets/badge-iso27001.png";
import badgeSoc2 from "@/assets/badge-soc2.png";
import badgeGdpr from "@/assets/badge-gdpr.png";
import badgeNis2 from "@/assets/badge-nis2.png";

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 23.5h4V7.98h-4V23.5zM8.5 7.98h3.8v2.12h.05c.53-1 1.82-2.12 3.75-2.12 4 0 4.74 2.63 4.74 6.05v7.47h-4v-6.62c0-1.58-.03-3.62-2.21-3.62-2.21 0-2.55 1.72-2.55 3.5v6.74h-4V7.98z" />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 17 22 12z" />
  </svg>
);

type FooterLink = {
  labelKey: string;
  section?: string;
  href?: string;
};

export const Footer = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const [selectedBadge, setSelectedBadge] = useState<number | null>(null);

  const scrollToSection = (section: string) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: section } });
      return;
    }
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  const footerLinks: FooterLink[] = [
    { labelKey: "nav.services", section: "services" },
    { labelKey: "nav.pricing", section: "pricing" },
    { labelKey: "nav.about", section: "about" },
    { labelKey: "nav.contact", section: "contact" },
    { labelKey: "footer.privacy", href: "/privacy" },
    { labelKey: "footer.terms", href: "/terms" },
  ];

  const badges = [
    {
      img: badgeIso,
      title: "ISO 27001",
      desc: "Information Security Management Standard",
      description:
        "ISO 27001 is the international standard for information security management systems. It ensures organizations systematically manage sensitive company information and apply risk-based security controls.",
      iframe: "https://www.youtube.com/embed/6Gk1rF9gE7Q"
    },
    {
      img: badgeSoc2,
      title: "SOC 2 Type II",
      desc: "Service Organization Control",
      description:
        "SOC 2 Type II certifies that a company securely manages customer data based on strict trust service criteria including security, availability, confidentiality and privacy."
    },
    {
      img: badgeGdpr,
      title: "GDPR",
      desc: "General Data Protection Regulation",
      description:
        "GDPR is the European Union regulation governing the collection, storage, and processing of personal data of individuals within the EU."
    },
    {
      img: badgeNis2,
      title: "NIS2",
      desc: "EU Cybersecurity Directive",
      description:
        "NIS2 strengthens cybersecurity requirements for organizations operating critical infrastructure and digital services within the European Union."
    }
  ];

  return (
    <>
      <footer className="bg-muted/40 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">

          {/* Trust Badges */}
          <div className="mb-16">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">

              {badges.map((badge, index) => (
                <button
                  key={badge.title}
                  onClick={() => setSelectedBadge(index)}
                  className="
                  bg-[#fff]
                  rounded-[2rem]
                  shadow-sm
                  hover:shadow-lg
                  text-center
                  p-10
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:scale-[1.02]
                  "
                >

                  <div className="flex justify-center mb-6">

                    <div
                      className="
                      relative
                      h-20
                      w-32
                      flex
                      items-center
                      justify-center
                      overflow-hidden
                      rounded-xl
                      bg-[#fff]
                      "
                    >

                      <img
                        src={badge.img}
                        alt={badge.title}
                        loading="lazy"
                        className="
                          object-contain
                          max-w-[300%]
                          max-h-[300%]
                          scale-[1.25]
                        "
                      />

                    </div>

                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {badge.title}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    {badge.desc}
                  </p>

                </button>
              ))}

            </div>

            <p className="text-center text-sm text-muted-foreground mt-8">
              Trusted by security-conscious organizations across United States and Europe.
            </p>

          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-12 gap-y-4 mb-10">
            {footerLinks.map((link) =>
              link.href ? (
                <Link
                  key={link.labelKey}
                  to={link.href}
                  className="text-[15px] font-medium tracking-wide text-muted-foreground hover:text-foreground transition"
                >
                  {t(link.labelKey)}
                </Link>
              ) : (
                <button
                  key={link.labelKey}
                  onClick={() => scrollToSection(link.section!)}
                  className="text-[15px] font-medium tracking-wide text-muted-foreground hover:text-foreground transition"
                >
                  {t(link.labelKey)}
                </button>
              )
            )}
          </nav>

          <div className="border-t border-border/50 my-8" />

          {/* Footer Bottom */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-[14px] text-muted-foreground">

            <span>
              {t("footer.copyright", { year: new Date().getFullYear() })}
            </span>

            <div className="flex gap-6">

              <a
                href="https://www.linkedin.com/company/ovelon-prime/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition"
              >
                <LinkedInIcon className="h-6 w-6" />
              </a>

              <a
                href="https://www.facebook.com/ovelon-prime"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition"
              >
                <FacebookIcon className="h-6 w-6" />
              </a>

            </div>

            <Logo size="sm" forceBlack />

          </div>

        </div>
      </footer>

      {/* Badge Modal */}
      {selectedBadge !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">

          <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full p-8 relative">

            <button
              onClick={() => setSelectedBadge(null)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-2xl font-semibold mb-4">
              {badges[selectedBadge].title}
            </h3>

            <p className="text-muted-foreground mb-6">
              {badges[selectedBadge].description}
            </p>

            {badges[selectedBadge].iframe && (
              <div className="aspect-video rounded-xl overflow-hidden border">
                <iframe
                  src={badges[selectedBadge].iframe}
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
            )}

          </div>

        </div>
      )}
    </>
  );
};