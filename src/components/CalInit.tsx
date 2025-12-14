import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

export const CalInit = () => {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({
        namespace: "introduction-call",
      });

      // Floating button (rechtsonder)
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
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return null; // dit rendert niks
};
