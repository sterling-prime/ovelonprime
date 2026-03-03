import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

export const MobileStickyBar = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-t border-border px-4 py-3 pb-safe animate-fade-in">
      <Button
        size="lg"
        className="w-full bg-primary text-primary-foreground font-semibold rounded-xl py-3 hover:bg-accent hover:text-accent-foreground touch-target"
        onClick={() => window.dispatchEvent(new Event("open-booking-modal"))}
      >
        {t("nav.cta")}
      </Button>
    </div>
  );
};
