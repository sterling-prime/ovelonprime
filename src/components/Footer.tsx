import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const scrollToSection = (section: string) => {
    if (location.pathname === "/privacy") {
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
    <footer className="py-6 border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <span className="font-semibold text-foreground">Ovelon Prime</span>
            <nav className="flex items-center gap-6">
              {footerLinks.map((link) =>
                link.type === "route" ? (
                  <Link
                    key={link.label}
                    to={link.href!}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={link.label}
                    onClick={() => scrollToSection(link.section!)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </button>
                )
              )}
            </nav>
          </div>

          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {t("footer.copyright")}
          </div>
        </div>
      </div>
    </footer>
  );
};
