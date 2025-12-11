import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";
  const isPrivacy = location.pathname === "/privacy";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (section: string) => {
    if (!isHome) {
      navigate("/");
      setTimeout(() => {
        document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    } else {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "Services", section: "services" },
    { label: "Pricing", section: "pricing" },
    { label: "About", section: "about" },
    { label: "Contact", section: "contact" },
  ];

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${
          isPrivacy
            ? "bg-[#CACDD3] backdrop-blur-md border-b border-border"
            : scrolled
            ? "bg-background/70 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }
      `}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* MOBILE BURGER BUTTON */}
        <button
          className="md:hidden p-3 absolute right-4 top-4 z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>

        {/* NAVBAR CONTENT ROW */}
        <div
          className="
            flex items-center 
            md:justify-between 
            justify-center 
            h-16 relative
          "
        >
          {/* LOGO CENTERED ON MOBILE */}
          <a
            href="/"
            className="
              text-xl font-semibold text-foreground
              w-full
              text-center
              md:w-auto
              md:text-left
            "
          >
            Ovelon Prime
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.section)}
                className="text-base font-medium text-foreground hover:opacity-70 transition"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* DESKTOP CTA → CAL.COM POPUP */}
          <div className="hidden md:block">
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://cal.com/ovelon-prime/introduction-call"
                data-cal-link="ovelon-prime/introduction-call"
              >
                Get in Touch
              </a>
            </Button>
          </div>
        </div>

        {/* MOBILE MENU OVERLAY */}
        {isOpen && (
          <nav className="md:hidden py-6 bg-background/40 backdrop-blur-2xl rounded-2xl mt-4 mx-3 border border-white/10 shadow-xl">
            <div className="flex flex-col gap-6 px-4">

              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => {
                    scrollToSection(link.section);
                    setIsOpen(false);
                  }}
                  className="text-left text-xl font-medium text-foreground hover:opacity-70 transition"
                >
                  {link.label}
                </button>
              ))}

              {/* MOBILE CTA → CAL.COM POPUP */}
              <Button variant="outline" size="lg" className="w-full" asChild>
                <a
                  href="https://cal.com/ovelon-prime/introduction-call"
                  data-cal-link="ovelon-prime/introduction-call"
                >
                  Get in Touch
                </a>
              </Button>

            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
