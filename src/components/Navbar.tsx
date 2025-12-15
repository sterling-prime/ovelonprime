import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LanguageDropdown } from "./LanguageDropdown";
import { BookingModal } from "./BookingModal";

import ServiceIcon from "@/assets/service.apng";

export const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { label: t("nav.services"), section: "services" },
    { label: t("nav.pricing"), section: "pricing" },
    { label: t("nav.about"), section: "about" },
    { label: t("nav.contact"), section: "contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = () => setBookingOpen(true);
    window.addEventListener("open-booking-modal", handler);
    return () => window.removeEventListener("open-booking-modal", handler);
  }, []);

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

  const isLightHeaderPage = location.pathname === "/privacy" || location.pathname === "/terms";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isLightHeaderPage
            ? "bg-gray-100 border-b border-gray-300"
            : scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-gray-200"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between h-16 relative">
            <a href="/" className="hidden md:flex items-center gap-3 text-xl font-semibold text-foreground">
              <img src={ServiceIcon} alt="Ovelon Prime icon" className="h-6 w-6" />
              <span>Ovelon Prime</span>
            </a>

            <nav className="hidden md:flex gap-8 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
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

            <div className="hidden md:flex items-center gap-3 ml-auto">
              <LanguageDropdown />
              <Button variant="outline" size="sm" onClick={() => setBookingOpen(true)}>
                {t("nav.cta")}
              </Button>
            </div>

            <div className="md:hidden flex items-center w-full relative">
              <div className="absolute left-1/2 -translate-x-1/2">
                <a href="/" className="flex items-center gap-2 text-xl font-semibold text-foreground">
                  <img src={ServiceIcon} alt="Ovelon Prime icon" className="h-5 w-5" />
                  <span>Ovelon Prime</span>
                </a>
              </div>
              <button className="p-2 ml-auto" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {isOpen && (
            <div className="md:hidden border-t border-gray-300 py-4">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <button
                    key={link.section}
                    onClick={() => { goToSection(link.section); setIsOpen(false); }}
                    className="text-left text-lg font-medium text-gray-700 hover:text-black transition"
                  >
                    {link.label}
                  </button>
                ))}
                <LanguageDropdown />
                <Button variant="outline" size="lg" className="w-full" onClick={() => { setBookingOpen(true); setIsOpen(false); }}>
                  {t("nav.cta")}
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
};
