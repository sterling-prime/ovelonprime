const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Privacy", href: "#" },
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
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
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
