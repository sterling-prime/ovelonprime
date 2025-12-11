import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const goTo = (section: string) => {
    window.location.href = `/#${section}`;
  };

  return (
    <header
      className="
        fixed top-0 left-0 right-0 z-50 
        bg-background/80 backdrop-blur-md border-b border-border
      "
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* NAVBAR ROW */}
        <div
          className="
            flex items-center justify-between 
            h-20            /* HIGHER HEADER FOR PERFECT ALIGNMENT */
          "
        >
          {/* LOGO */}
          <a
            href="/"
            className="
              text-2xl font-semibold text-foreground 
              leading-none
            "
          >
            Ovelon Prime
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-10">
            <button onClick={() => goTo("services")} className="nav-link">
              Services
            </button>
            <button onClick={() => goTo("pricing")} className="nav-link">
              Pricing
            </button>
            <button onClick={() => goTo("about")} className="nav-link">
              About
            </button>
            <button onClick={() => goTo("contact")} className="nav-link">
              Contact
            </button>
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden md:block">
            <Button variant="outline" size="sm" onClick={() => goTo("contact")}>
              Get in Touch
            </Button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="
              md:hidden 
              p-3 
              flex items-center justify-center 
              h-12 w-12 
            "
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-7 w-7 text-foreground" />
            ) : (
              <Menu className="h-7 w-7 text-foreground" />
            )}
          </button>
        </div>

        {/* MOBILE NAV */}
        {isOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button onClick={() => goTo("services")} className="mobile-link">
                Services
              </button>
              <button onClick={() => goTo("pricing")} className="mobile-link">
                Pricing
              </button>
              <button onClick={() => goTo("about")} className="mobile-link">
                About
              </button>
              <button onClick={() => goTo("contact")} className="mobile-link">
                Contact
              </button>

              <Button variant="outline" size="sm" className="w-fit" onClick={() => goTo("contact")}>
                Get in Touch
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
