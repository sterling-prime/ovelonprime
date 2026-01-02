import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

export const CalInit = () => {
  useEffect(() => {
    const initCal = async () => {
      const cal = await getCalApi({
        namespace: "introduction-call",
      });

      // UI theming only - no floating button
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
  }, []);

  return null;
};
