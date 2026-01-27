import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LanguageDropdown } from "./LanguageDropdown";
import { BookingModal } from "./BookingModal";
import { Logo } from "./Logo";

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

  /* ------------------ SCROLL STATE ------------------ */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ------------------ LOCK BODY SCROLL ------------------ */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /* ------------------ BOOKING MODAL LISTENER ------------------ */
  useEffect(() => {
    const handler = () => setBookingOpen(true);
    window.addEventListener("open-booking-modal", handler);
    return () =>
      window.removeEventListener("open-booking-modal", handler);
  }, []);

  /* ------------------ NAVIGATION ------------------ */
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

  const lightHeaderPages = ["/privacy", "/terms", "/intake", "/intake2"];
  const isLightHeaderPage = lightHeaderPages.includes(location.pathname);

  const forceBlackHeader = scrolled || isOpen || isLightHeaderPage;

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${
            forceBlackHeader
              ? "bg-white/95 backdrop-blur-sm border-b border-gray-200"
              : "bg-transparent"
          }
        `}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 relative">

            {/* LOGO DESKTOP */}
            <a href="/" className="hidden md:block">
              <Logo size="md" forceBlack={forceBlackHeader} />
            </a>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex gap-10 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link) => (
                <button
                  key={link.section}
                  onClick={() => goToSection(link.section)}
                  className="
                    text-[16px]
                    font-medium
                    tracking-wide
                    text-gray-700
                    hover:text-gray-900
                    transition-colors
                    min-h-6
                    py-0.5
                  "
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* DESKTOP ACTIONS */}
            <div className="hidden md:flex items-center gap-4 ml-auto">
              <LanguageDropdown forceBlack={forceBlackHeader} />

              {/* VIEW DEMO */}
              <button
                onClick={() =>
                  window.dispatchEvent(new Event("open-demo-surface"))
                }
                className="
                  px-4 py-2
                  min-h-6
                  rounded-md
                  border border-gray-300
                  bg-gray-100
                  text-[15px]
                  font-medium
                  text-gray-800
                  transition
                  hover:bg-gray-200
                "
              >
                {t("nav.viewDemo")}
              </button>

              {/* PRIMARY CTA */}
              <Button
                size="sm"
                onClick={() => setBookingOpen(true)}
                className="
                  bg-slate-900
                  text-white
                  font-medium
                  px-4 py-2
                  min-h-6
                  rounded-md
                  transition-colors
                  hover:bg-[#3A8F94]
                "
              >
                {t("nav.cta")}
              </Button>
            </div>

            {/* MOBILE HEADER */}
            <div className="md:hidden flex items-center w-full relative">
              <a
                href="/"
                className="absolute left-1/2 -translate-x-1/2"
              >
                <Logo size="sm" forceBlack={forceBlackHeader} />
              </a>

              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                className="ml-auto p-2 rounded-md"
              >
                {isOpen ? (
                  <X className="h-6 w-6 text-gray-900" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-900" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ================= MOBILE DROPDOWN ================= */}
      {isOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 z-40 bg-white border-t border-gray-200">
          <div className="px-6 py-8 flex flex-col gap-10">

            {/* NAV LINKS */}
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.section}
                  onClick={() => {
                    goToSection(link.section);
                    setIsOpen(false);
                  }}
                  className="
                    text-left
                    text-[22px]
                    font-medium
                    tracking-wide
                    text-gray-800
                  "
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* LANGUAGE — ALWAYS BLACK ON MOBILE */}
            <LanguageDropdown forceBlack />

            {/* VIEW DEMO */}
            <button
              onClick={() => {
                window.dispatchEvent(new Event("open-demo-surface"));
                setIsOpen(false);
              }}
              className="
                w-full
                py-3
                rounded-xl
                border border-gray-300
                bg-gray-100
                text-[15px]
                font-medium
                text-gray-800
                hover:bg-gray-200
              "
            >
              {t("nav.viewDemo")}
            </button>

            {/* PRIMARY CTA */}
            <Button
              size="lg"
              className="
                w-full
                bg-slate-900
                text-white
                font-semibold
                tracking-wide
                rounded-xl
                py-4
                hover:bg-[#3A8F94]
              "
              onClick={() => {
                setBookingOpen(true);
                setIsOpen(false);
              }}
            >
              {t("nav.cta")}
            </Button>
          </div>
        </div>
      )}

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </>
  );
};
