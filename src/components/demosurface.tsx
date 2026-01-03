import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

type ServiceKey = "intake" | "safety" | "incident";

export const DemoSurface = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<ServiceKey>("intake");

  useEffect(() => {
    const openHandler = () => setOpen(true);
    const closeHandler = () => setOpen(false);

    window.addEventListener("open-demo-surface", openHandler);
    window.addEventListener("close-demo-surface", closeHandler);

    return () => {
      window.removeEventListener("open-demo-surface", openHandler);
      window.removeEventListener("close-demo-surface", closeHandler);
    };
  }, []);

  if (!open) return null;

  const services = {
    intake: {
      title: t("demo.intake.title"),
      metrics: [
        { label: t("demo.intake.metrics.coordinationTime"), value: "−38%" },
        { label: t("demo.intake.metrics.reworkCycles"), value: "−41%" },
        { label: t("demo.intake.metrics.ownership"), value: t("demo.intake.metrics.ownershipValue") },
      ],
      before: {
        title: t("demo.intake.before.title"),
        text: t("demo.intake.before.text"),
        bullets: [
          t("demo.intake.before.bullet1"),
          t("demo.intake.before.bullet2"),
          t("demo.intake.before.bullet3"),
          t("demo.intake.before.bullet4"),
        ],
        tradeoff: t("demo.intake.before.tradeoff"),
      },
      after: {
        title: t("demo.intake.after.title"),
        text: t("demo.intake.after.text"),
        bullets: [
          t("demo.intake.after.bullet1"),
          t("demo.intake.after.bullet2"),
          t("demo.intake.after.bullet3"),
          t("demo.intake.after.bullet4"),
        ],
        tradeoff: t("demo.intake.after.tradeoff"),
      },
    },

    safety: {
      title: t("demo.safety.title"),
      metrics: [
        { label: t("demo.safety.metrics.procedureDeviations"), value: "−47%" },
        { label: t("demo.safety.metrics.onboardingTime"), value: "−32%" },
        { label: t("demo.safety.metrics.consistency"), value: t("demo.safety.metrics.consistencyValue") },
      ],
      before: {
        title: t("demo.safety.before.title"),
        text: t("demo.safety.before.text"),
        bullets: [
          t("demo.safety.before.bullet1"),
          t("demo.safety.before.bullet2"),
          t("demo.safety.before.bullet3"),
          t("demo.safety.before.bullet4"),
        ],
        tradeoff: t("demo.safety.before.tradeoff"),
      },
      after: {
        title: t("demo.safety.after.title"),
        text: t("demo.safety.after.text"),
        bullets: [
          t("demo.safety.after.bullet1"),
          t("demo.safety.after.bullet2"),
          t("demo.safety.after.bullet3"),
          t("demo.safety.after.bullet4"),
        ],
        tradeoff: t("demo.safety.after.tradeoff"),
      },
    },

    incident: {
      title: t("demo.incident.title"),
      metrics: [
        { label: t("demo.incident.metrics.escalationLoops"), value: "−52%" },
        { label: t("demo.incident.metrics.responseTime"), value: "−29%" },
        { label: t("demo.incident.metrics.accountability"), value: t("demo.incident.metrics.accountabilityValue") },
      ],
      before: {
        title: t("demo.incident.before.title"),
        text: t("demo.incident.before.text"),
        bullets: [
          t("demo.incident.before.bullet1"),
          t("demo.incident.before.bullet2"),
          t("demo.incident.before.bullet3"),
          t("demo.incident.before.bullet4"),
        ],
        tradeoff: t("demo.incident.before.tradeoff"),
      },
      after: {
        title: t("demo.incident.after.title"),
        text: t("demo.incident.after.text"),
        bullets: [
          t("demo.incident.after.bullet1"),
          t("demo.incident.after.bullet2"),
          t("demo.incident.after.bullet3"),
          t("demo.incident.after.bullet4"),
        ],
        tradeoff: t("demo.incident.after.tradeoff"),
      },
    },
  };

  const current = services[active];

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-3">
      <div
        className="
          w-full
          max-w-7xl
          bg-background
          rounded-2xl
          shadow-2xl
          flex
          flex-col
          max-h-[90vh]
        "
      >
        {/* HEADER (FIXED) */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border shrink-0">
          <h3 className="text-base font-semibold">{t("demo.header")}</h3>
          <button
            onClick={() => setOpen(false)}
            className="text-sm text-muted-foreground"
          >
            {t("demo.close")}
          </button>
        </div>

        {/* SCROLLABLE CONTENT (MOBILE FIX) */}
        <div className="flex-1 overflow-y-auto">

          {/* SERVICE TABS */}
          <div className="flex gap-4 px-5 py-4 border-b border-border bg-muted/30 overflow-x-auto">
            {Object.entries(services).map(([key, svc]) => (
              <button
                key={key}
                onClick={() => setActive(key as ServiceKey)}
                className={`
                  whitespace-nowrap
                  text-sm
                  font-medium
                  transition
                  ${active === key
                    ? "text-foreground border-b-2 border-foreground pb-1"
                    : "text-muted-foreground"}
                `}
              >
                {svc.title}
              </button>
            ))}
          </div>

          {/* METRICS */}
          <div className="grid grid-cols-3 gap-4 px-5 py-5 text-center border-b border-border">
            {current.metrics.map((m) => (
              <div key={m.label}>
                <p className="text-[10px] uppercase tracking-wide text-muted-foreground">
                  {m.label}
                </p>
                <p className="text-lg font-semibold">{m.value}</p>
              </div>
            ))}
          </div>

          {/* CONTENT */}
          <div className="px-5 py-6 space-y-10">

            {/* BEFORE */}
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
                {t("demo.beforeAlignment")}
              </p>
              <h4 className="text-lg font-semibold mb-3">
                {current.before.title}
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                {current.before.text}
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {current.before.bullets.map((b, idx) => (
                  <li key={idx}>• {b}</li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-muted-foreground">
                {t("demo.tradeoff")}: {current.before.tradeoff}
              </p>
            </div>

            {/* AFTER */}
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
                {t("demo.afterAlignment")}
              </p>
              <h4 className="text-lg font-semibold mb-3">
                {current.after.title}
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                {current.after.text}
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {current.after.bullets.map((b, idx) => (
                  <li key={idx}>• {b}</li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-muted-foreground">
                {t("demo.tradeoff")}: {current.after.tradeoff}
              </p>
            </div>

          </div>

          {/* FOOTER NOTE */}
          <div className="px-5 py-4 border-t border-border text-[11px] text-muted-foreground">
            {t("demo.footer")}
          </div>

        </div>
      </div>
    </div>
  );
};
