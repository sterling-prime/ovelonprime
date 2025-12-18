import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

export const CalInit = () => {
  useEffect(() => {
    let calInstance: any = null;

    const initCal = async () => {
      // ❌ No floating CTA on mobile / tablet
      if (window.matchMedia("(max-width: 1024px)").matches) {
        return;
      }

      const cal = await getCalApi({
        namespace: "introduction-call",
      });

      calInstance = cal;

      // ✅ Floating button — DESKTOP ONLY
      cal("floatingButton", {
        calLink: "ovelon-prime/introduction-call",
        config: {
          layout: "month_view",
        },
      });

      // UI theming
      cal("ui", {
        cssVarsPerTheme: {
          light: {
            "cal-brand": "#292929",
          },
          dark: {
            "cal-brand": "#fafafa",
          },
        },
        layout: "month_view",
      });
    };

    initCal();

    // 🔁 Kill floating button if viewport shrinks
    const handleResize = () => {
      if (
        window.matchMedia("(max-width: 1024px)").matches &&
        calInstance
      ) {
        const el = document.querySelector('[data-cal-floating-button]');
        if (el) el.remove();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return null;
};
