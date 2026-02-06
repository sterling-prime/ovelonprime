import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Logo } from "./Logo";

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

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2.16c3.2 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.403a4.92 4.92 0 011.77 1.033 4.92 4.92 0 011.033 1.77c.163.46.35 1.26.403 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.43a4.92 4.92 0 01-1.033 1.77 4.92 4.92 0 01-1.77 1.033c-.46.163-1.26.35-2.43.403-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.43-.403a4.92 4.92 0 01-1.77-1.033 4.92 4.92 0 01-1.033-1.77c-.163-.46-.35-1.26-.403-2.43C2.172 15.584 2.16 15.2 2.16 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.43a4.92 4.92 0 011.033-1.77 4.92 4.92 0 011.77-1.033c.46-.163 1.26-.35 2.43-.403C8.416 2.172 8.8 2.16 12 2.16zm0-2.16C8.735 0 8.332.014 7.052.072 5.775.13 4.7.326 3.8.698a6.91 6.91 0 00-2.5 1.64A6.91 6.91 0 00.698 4.8c-.372.9-.568 1.975-.626 3.252C0 8.332 0 8.735 0 12s.014 3.668.072 4.948c.058 1.277.254 2.352.626 3.252a6.91 6.91 0 001.64 2.5 6.91 6.91 0 002.5 1.64c.9.372 1.975.568 3.252.626C8.332 24 8.735 24 12 24s3.668-.014 4.948-.072c1.277-.058 2.352-.254 3.252-.626a6.91 6.91 0 002.5-1.64 6.91 6.91 0 001.64-2.5c.372-.9.568-1.975.626-3.252C24 15.668 24 15.265 24 12s-.014-3.668-.072-4.948c-.058-1.277-.254-2.352-.626-3.252a6.91 6.91 0 00-1.64-2.5 6.91 6.91 0 00-2.5-1.64c-.9-.372-1.975-.568-3.252-.626C15.668 0 15.265 0 12 0zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
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
                  min-h-6
                  py-0.5
                  inline-flex items-center
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
                  min-h-6
                  py-0.5
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

          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/company/ovelon-prime/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-foreground"
            >
              <LinkedInIcon className="h-4 w-4" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a
              href="https://www.facebook.com/ovelon-prime"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-foreground"
            >
              <FacebookIcon className="h-4 w-4" />
              <span className="hidden sm:inline">Facebook</span>
            </a>
            <a
              href="https://www.instagram.com/ovelon-prime"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-foreground"
            >
              <InstagramIcon className="h-4 w-4" />
              <span className="hidden sm:inline">Instagram</span>
            </a>
          </div>

          <Logo size="sm" forceBlack />
        </div>
      </div>
    </footer>
  );
};
