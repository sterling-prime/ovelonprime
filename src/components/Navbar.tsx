import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Services", section: "services" },
  { label: "Pricing", section: "pricing" },
  { label: "About", section: "about" },
  { label: "Contact", section: "contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Detect scroll for background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Smooth section scroll globally
  const goToSection = (section: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
      }, 200);
      return;
    }
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  // Check if we are on privacy/terms page
  const isLightHeaderPage =
    location.pathname === "/privacy" || location.pathname === "/terms";

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${
          isLightHeaderPage
            ? "bg-gray-100 border-b border-gray-300"
            : scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-gray-200"
            : "bg-transparent"
        }
      `}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* MAIN ROW */}
        <div className="relative flex items-center h-16 w-full">

          {/* LOGO — CENTER ON MOBILE, LEFT ON DESKTOP */}
          <div className="absolute left-1/2 -translate-x-1/2 md:static md:transform-none">
            <a href="/" className="text-xl font-semibold text-foreground">
              Ovelon Prime
            </a>
          </div>

          {/* DESKTOP NAV CENTER */}
          <nav className="hidden md:flex items-center gap-8 mx-auto">
            {navLinks.map((link) => (
              <button
                key={link.section}
                onClick={() => goToSection(link.section)}
                className="text-sm font-medium text-gray-700 hover:text-black transition"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* DESKTOP CTA BUTTON RIGHT */}
          <div className="hidden md:block ml-auto">
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://cal.com/ovelon-prime/introduction-call"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get in Touch
              </a>
            </Button>
          </div>

          {/* MOBILE BURGER — ALWAYS RIGHT */}
          <button
            className="md:hidden p-2 absolute right-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-300 py-4">
            <div className="flex flex-col gap-4">

              {navLinks.map((link) => (
                <button
                  key={link.section}
                  onClick={() => {
                    goToSection(link.section);
                    setIsOpen(false);
                  }}
                  className="text-left text-lg font-medium text-gray-700 hover:text-black transition"
                >
                  {link.label}
                </button>
              ))}

              {/* MOBILE CAL.COM BUTTON */}
              <Button variant="outline" size="lg" className="w-full" asChild>
                <a
                  href="https://cal.com/ovelon-prime/introduction-call"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get in Touch
                </a>
              </Button>

            </div>
          </div>
        )}

      </div>
    </header>
  );
};
