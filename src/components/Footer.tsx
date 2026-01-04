import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Logo } from "./Logo";

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 23.5h4V7.98h-4V23.5zM8.5 7.98h3.8v2.12h.05c.53-1 1.82-2.12 3.75-2.12 4 0 4.74 2.63 4.74 6.05v7.47h-4v-6.62c0-1.58-.03-3.62-2.21-3.62-2.21 0-2.55 1.72-2.55 3.5v6.74h-4V7.98z" />
  </svg>
);

export const Footer = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (section: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
      }, 200);
      return;
    }
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  const footerLinks = [
    { label: t("nav.services"), section: "services" },
    { label: t("nav.pricing"), section: "pricing" },
    { label: t("nav.about"), section: "about" },
    { label: t("nav.contact"), section: "contact" },
    { label: t("footer.privacy"), href: "/privacy" },
    { label: t("footer.terms"), href: "/terms" },
  ];

  return (
    <footer className="bg-muted/40 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">

        <nav className="flex flex-wrap justify-center gap-x-10 gap-y-4 mb-8">
          {footerLinks.map((link) =>
            link.href ? (
              <Link
                key={link.label}
                to={link.href}
                className="
                  text-[14.5px]
                  tracking-wide
                  text-muted-foreground
                  hover:text-foreground
                "
              >
                {link.label}
              </Link>
            ) : (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.section!)}
                className="
                  text-[14.5px]
                  tracking-wide
                  text-muted-foreground
                  hover:text-foreground
                "
              >
                {link.label}
              </button>
            )
          )}
        </nav>

        <div className="border-t border-border/50 my-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-[14px] text-muted-foreground">
          <span>© {new Date().getFullYear()} Ovelon Prime</span>

          <a
            href="https://www.linkedin.com/company/ovelon-prime/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-foreground"
          >
            <LinkedInIcon className="h-4 w-4" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>

          <Logo size="sm" forceBlack />
        </div>
      </div>
    </footer>
  );
};
