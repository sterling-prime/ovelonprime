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

  const trustItems = t("footer.trustItems", { returnObjects: true }) as string[];

  return (
    <footer className="bg-muted/40 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Trust signals — certification cards */}
        <div className="mb-12 pb-12 border-b border-border/50">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* ISO 27001 */}
            <div className="flex items-center gap-5 bg-muted/60 rounded-2xl px-8 py-7">
              <div className="w-14 h-14 shrink-0">
                <svg viewBox="0 0 80 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M40 5L72 25V65L40 85L8 65V25L40 5Z" fill="#C8A415" opacity="0.15"/>
                  <path d="M40 12L66 28V60L40 76L14 60V28L40 12Z" stroke="#C8A415" strokeWidth="2.5" fill="none"/>
                  <path d="M40 20L58 30V54L40 64L22 54V30L40 20Z" fill="#C8A415" opacity="0.25"/>
                  <circle cx="40" cy="42" r="14" fill="#C8A415" opacity="0.12" stroke="#C8A415" strokeWidth="1.5"/>
                  <path d="M33 42L38 47L48 37" stroke="#C8A415" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className="text-base font-semibold text-foreground">ISO 27001</p>
                <p className="text-sm text-muted-foreground">ISO Security Management</p>
              </div>
            </div>
            {/* SOC 2 Type II */}
            <div className="flex items-center gap-5 bg-muted/60 rounded-2xl px-8 py-7">
              <div className="w-14 h-14 shrink-0">
                <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M40 4L70 18V50C70 62 56 72 40 76C24 72 10 62 10 50V18L40 4Z" fill="#2563EB" opacity="0.1" stroke="#2563EB" strokeWidth="2"/>
                  <path d="M40 14L60 24V48C60 56 50 64 40 66C30 64 20 56 20 48V24L40 14Z" fill="#2563EB" opacity="0.08" stroke="#2563EB" strokeWidth="1.5"/>
                  <rect x="30" y="34" width="20" height="16" rx="2" stroke="#2563EB" strokeWidth="2" fill="none"/>
                  <path d="M34 34V30C34 26.7 36.7 24 40 24C43.3 24 46 26.7 46 30V34" stroke="#2563EB" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="40" cy="42" r="2" fill="#2563EB"/>
                </svg>
              </div>
              <div>
                <p className="text-base font-semibold text-foreground">SOC 2 Type II</p>
                <p className="text-sm text-muted-foreground">SOC for Service Organizations</p>
              </div>
            </div>
            {/* GDPR */}
            <div className="flex items-center gap-5 bg-muted/60 rounded-2xl px-8 py-7">
              <div className="w-14 h-14 shrink-0">
                <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <circle cx="40" cy="40" r="34" fill="#1D4ED8" opacity="0.1" stroke="#1D4ED8" strokeWidth="2"/>
                  {/* EU stars */}
                  {Array.from({ length: 12 }).map((_, i) => {
                    const angle = (i * 30 - 90) * (Math.PI / 180);
                    const cx = 40 + 26 * Math.cos(angle);
                    const cy = 40 + 26 * Math.sin(angle);
                    return <circle key={i} cx={cx} cy={cy} r="2.2" fill="#FACC15" />;
                  })}
                  {/* Lock */}
                  <rect x="33" y="38" width="14" height="12" rx="2" stroke="#1D4ED8" strokeWidth="1.8" fill="#1D4ED8" opacity="0.15"/>
                  <path d="M36 38V34C36 31.8 37.8 30 40 30C42.2 30 44 31.8 44 34V38" stroke="#1D4ED8" strokeWidth="1.8" strokeLinecap="round"/>
                  <circle cx="40" cy="44" r="1.5" fill="#1D4ED8"/>
                </svg>
              </div>
              <div>
                <p className="text-base font-semibold text-foreground">GDPR</p>
                <p className="text-sm text-muted-foreground">Data Protection and Privacy Regulation</p>
              </div>
            </div>
          </div>
        </div>

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
