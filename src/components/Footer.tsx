import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Calendar } from "lucide-react";

export const Footer = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const scrollToSection = (section: string) => {
    if (location.pathname === "/privacy" || location.pathname === "/terms") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
      }, 200);
      return;
    }

    if (isHome) {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
  };

  const footerLinks = [
    { label: t("nav.services"), section: "services", type: "scroll" },
    { label: t("nav.pricing"), section: "pricing", type: "scroll" },
    { label: t("nav.about"), section: "about", type: "scroll" },
    { label: t("nav.contact"), section: "contact", type: "scroll" },
    { label: t("footer.privacy"), href: "/privacy", type: "route" },
    { label: t("footer.terms"), href: "/terms", type: "route" },
  ];

  return (
    <footer className="bg-muted/40 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* MOBILE BRAND */}
        <div className="md:hidden flex flex-col items-center gap-6 mb-8 text-center">
          <span className="text-lg font-semibold text-foreground">
            Ovelon Prime
          </span>

          <p className="text-sm text-muted-foreground max-w-xs">
            Enterprise automation systems built for clarity, control, and scale.
          </p>
        </div>

        {/* NAVIGATION */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8">
          {footerLinks.map((link) =>
            link.type === "route" ? (
              <Link
                key={link.label}
                to={link.href!}
                className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ) : (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.section!)}
                className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            )
          )}
        </nav>

        {/* DIVIDER */}
        <div className="border-t border-border/50 my-6" />

        {/* BOTTOM ROW */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span>
            © {new Date().getFullYear()} {t("footer.copyright")}
          </span>

          {/* DESKTOP MINI CTA */}
          <button
            onClick={() => window.dispatchEvent(new Event("open-booking-modal"))}
            className="hidden md:flex items-center gap-2 text-sm tracking-wide text-foreground hover:opacity-70 transition"
          >
            <Calendar className="h-4 w-4" />
            Book consultation
          </button>
        </div>
      </div>
    </footer>
  );
};
