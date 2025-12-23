import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Calendar } from "lucide-react";

/* Inline LinkedIn icon – zero deps */
const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 23.5h4V7.98h-4V23.5zM8.5 7.98h3.8v2.12h.05c.53-1 1.82-2.12 3.75-2.12 4 0 4.74 2.63 4.74 6.05v7.47h-4v-6.62c0-1.58-.03-3.62-2.21-3.62-2.21 0-2.55 1.72-2.55 3.5v6.74h-4V7.98z" />
  </svg>
);

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
            Enterprise operating systems built for clarity, control, and scale.
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
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">

          {/* LEFT */}
          <span>
            © {new Date().getFullYear()} {t("footer.copyright")}
          </span>

          {/* CENTER — LINKEDIN */}
          <a
            href="https://www.linkedin.com/company/ovelon-prime/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ovelon Prime on LinkedIn"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <LinkedInIcon className="h-4 w-4" />
            <span className="hidden sm:inline text-xs tracking-wide">
              LinkedIn
            </span>
          </a>

          {/* RIGHT — CTA */}
          <button
            onClick={() => window.dispatchEvent(new Event("open-booking-modal"))}
            className="
              hidden md:inline-flex
              items-center gap-2
              px-6 py-3
              rounded-full
              bg-slate-900
              text-white
              font-medium
              transition-colors
              hover:bg-[#3A8F94]
              focus-visible:bg-[#3A8F94]
            "
          >
            <Calendar className="h-4 w-4" />
            Book Strategy Consultation
          </button>
        </div>
      </div>
    </footer>
  );
};
