import { Link, useLocation, useNavigate } from "react-router-dom";

export const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  // SAME BEHAVIOUR AS NAVBAR — PERFECT MIRROR
  const scrollToSection = (section: string) => {
    if (location.pathname === "/privacy") {
      navigate("/");

      setTimeout(() => {
        const el = document.getElementById(section);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 200);

      return;
    }

    if (isHome) {
      const el = document.getElementById(section);
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(section);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
  };

  const footerLinks = [
    { label: "Services", section: "services", type: "scroll" },
    { label: "Pricing", section: "pricing", type: "scroll" },
    { label: "About", section: "about", type: "scroll" },
    { label: "Contact", section: "contact", type: "scroll" },
    { label: "Privacy", href: "/privacy", type: "route" },
  ];

  return (
    <footer className="py-6 border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Logo + Links */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <span className="font-semibold text-foreground">Ovelon Prime</span>

            <nav className="flex items-center gap-6">
              {footerLinks.map((link) =>
                link.type === "route" ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={link.label}
                    onClick={() => scrollToSection(link.section)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </button>
                )
              )}
            </nav>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ovelon Prime. All rights reserved.
          </div>

        </div>

      </div>
    </footer>
  );
};
