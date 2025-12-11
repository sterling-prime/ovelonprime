import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";

  // --- IDENTIEKE FIX ALS FOOTER ---
  const scrollToSection = (section: string) => {
    // If NOT on homepage → go to homepage first
    if (!isHome) {
      navigate("/");

      // Give React time to render homepage, THEN scroll
      setTimeout(() => {
        const el = document.getElementById(section);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 200);

      return;
    }

    // If already on homepage:
    const el = document.getElementById(section);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  // NAVIGATION LINKS
  const navLinks = [
    { label: "Services", section: "services" },
    { label: "Pricing", section: "pricing" },
    { label: "About", section: "about" },
    { label: "Contact", section: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <a href="/" className="text-2xl font-semibold text-foreground">
            Ovelon Prime
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.section}
                onClick={() => scrollToSection(link.section)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden md:block">
            <Button
              variant="outline"
              size="sm"
              onClick={() => scrollToSection("contact")}
            >
              Get in Touch
            </Button>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button
            className="md:hidden p-3"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.section}
                  className="text-left text-sm text-muted-foreground hover:text-foreground transition"
                  onClick={() => {
                    scrollToSection(link.section);
                    setIsOpen(false);
                  }}
                >
                  {link.label}
                </button>
              ))}

              <Button
                variant="outline"
                size="sm"
                className="w-fit"
                onClick={() => scrollToSection("contact")}
              >
                Get in Touch
              </Button>
            </div>
          </nav>
        )}

      </div>
    </header>
  );
};
