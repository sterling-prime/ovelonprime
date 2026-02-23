import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const COOKIE_CONSENT_KEY = "ovelon-cookie-consent";

export const CookieConsent = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Slight delay for smoother appearance
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`
        fixed bottom-0 left-0 right-0 z-[100]
        bg-primary border-t border-border
        transform transition-transform duration-500 ease-out
        ${isVisible ? "translate-y-0" : "translate-y-full"}
      `}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Message */}
          <p className="text-sm text-primary-foreground/70 text-center sm:text-left max-w-2xl">
            {t("cookie.message")}{" "}
            <Link
              to="/privacy"
              className="text-primary-foreground underline underline-offset-2 hover:text-primary-foreground/90 transition-colors"
            >
              {t("cookie.learnMore")}
            </Link>
          </p>

          {/* Actions */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handleDecline}
              className="
                px-4 py-2
                text-sm font-medium
                text-primary-foreground/50
                border border-primary-foreground/20
                hover:text-primary-foreground/80 hover:border-primary-foreground/40
                transition-colors duration-200
              "
            >
              {t("cookie.decline")}
            </button>
            <button
              onClick={handleAccept}
              className="
                px-4 py-2
                text-sm font-medium
                text-primary bg-primary-foreground
                hover:bg-primary-foreground/90
                transition-colors duration-200
              "
            >
              {t("cookie.accept")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
