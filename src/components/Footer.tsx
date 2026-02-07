import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Logo } from "./Logo";

// High-end LinkedIn icon
const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 23.5h4V7.98h-4V23.5zM8.5 7.98h3.8v2.12h.05c.53-1 1.82-2.12 3.75-2.12 4 0 4.74 2.63 4.74 6.05v7.47h-4v-6.62c0-1.58-.03-3.62-2.21-3.62-2.21 0-2.55 1.72-2.55 3.5v6.74h-4V7.98z" />
  </svg>
);

// High-end Facebook icon
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

  return (
    <footer className="bg-muted/40 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-x-12 gap-y-4 mb-10">
          {footerLinks.map((link) =>
            link.href ? (
              <Link
                key={link.labelKey}
                to={link.href}
                className="text-[15px] font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {t(link.labelKey)}
              </Link>
            ) : (
              <button
                key={link.labelKey}
                onClick={() => scrollToSection(link.section!)}
                aria-label={`Scroll to ${t(link.labelKey)}`}
                className="text-[15px] font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {t(link.labelKey)}
              </button>
            )
          )}
        </nav>

        <div className="border-t border-border/50 my-8" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-[14px] text-muted-foreground">
          {/* Copyright */}
          <span className="font-light">
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </span>

          {/* Social Links - Icons Only */}
          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/company/ovelon-prime/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors duration-200"
            >
              <LinkedInIcon className="h-6 w-6" />
            </a>
            <a
              href="https://www.facebook.com/ovelon-prime"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors duration-200"
            >
              <FacebookIcon className="h-6 w-6" />
            </a>
          </div>

          {/* Logo */}
          <Logo size="sm" forceBlack />
        </div>
      </div>
    </footer>
  );
};
