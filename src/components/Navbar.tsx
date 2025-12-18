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
    return () => window.removeEventListener("open-booking-modal", handler);
  }, []);

  /* ------------------ NAVIGATION ------------------ */
  const goToSection = (section: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document
          .getElementById(section)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 200);
      return;
    }
    document
      .getElementById(section)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const lightHeaderPages = ["/privacy", "/terms", "/intake", "/intake2"];
  const isLightHeaderPage = lightHeaderPages.includes(location.pathname);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${
            isOpen || isLightHeaderPage
              ? "bg-gray-100 border-b border-gray-300/60"
              : scrolled
              ? "bg-white/95 backdrop-blur-sm border-b border-gray-300/60"
              : "bg-transparent"
          }
        `}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 relative">

            {/* LOGO DESKTOP */}
            <a
              href="/"
              className="hidden md:flex items-center gap-3 text-xl font-semibold"
            >
              <img
                src={ServiceIcon}
                alt="Ovelon Prime icon"
                className="h-6 w-6"
              />
              Ovelon Prime
            </a>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex gap-8 absolute left-1/2 -translate-x-1/2">
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

            {/* DESKTOP ACTIONS */}
            <div className="hidden md:flex items-center gap-3 ml-auto">
              <LanguageDropdown />
              <Button
                size="sm"
                onClick={() => setBookingOpen(true)}
                className="
                  bg-slate-900
                  text-white
                  font-medium
                  px-4
                  py-2
                  rounded-md
                  transition-colors
                  hover:bg-[#3A8F94]
                  focus-visible:bg-[#3A8F94]
                "
              >
                {t("nav.cta")}
              </Button>
            </div>

            {/* MOBILE HEADER */}
            <div className="md:hidden flex items-center w-full relative">
              <a
                href="/"
                className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 text-lg font-semibold"
              >
                <img
                  src={ServiceIcon}
                  alt="Ovelon Prime icon"
                  className="h-5 w-5"
                />
                Ovelon Prime
              </a>

              {/* HAMBURGER / CLOSE */}
              <button
                className={`
                  ml-auto p-2 rounded-md transition-colors
                  ${isOpen ? "bg-slate-900 hover:bg-[#3A8F94]" : "bg-transparent"}
                `}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="h-6 w-6 text-white" />
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
        <div className="md:hidden fixed top-16 left-0 right-0 z-40 bg-gray-100 border-t border-gray-300/60">
          <div className="px-6 py-8 flex flex-col gap-8">

            {navLinks.map((link) => (
              <button
                key={link.section}
                onClick={() => {
                  goToSection(link.section);
                  setIsOpen(false);
                }}
                className="text-left text-2xl font-medium text-gray-900"
              >
                {link.label}
              </button>
            ))}

            <LanguageDropdown />

            {/* MOBILE CTA */}
            <Button
  size="lg"
  className="
    w-full
    bg-slate-900
    text-white
    font-semibold
    tracking-wide
    rounded-md
    transition-colors
    hover:bg-[#3A8F94]
    active:bg-[#3A8F94]
    focus-visible:bg-[#3A8F94]
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

      {/* ================= BOOKING MODAL ================= */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </>
  );
};
