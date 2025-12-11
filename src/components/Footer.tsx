import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Services", href: "#services", isExternal: false },
  { label: "Pricing", href: "#pricing", isExternal: false },
  { label: "About", href: "#about", isExternal: false },
  { label: "Contact", href: "#contact", isExternal: false },
  { label: "Privacy", href: "/privacy", isExternal: true },
];

export const Footer = () => {
  return (
    <footer className="py-6 border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo and Navigation */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <span className="font-semibold text-foreground">Ovelon Prime</span>
            <nav className="flex items-center gap-6">
              {footerLinks.map((link) =>
                link.isExternal ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
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
