import { useEffect, useState } from "react";

type ServiceKey = "intake" | "safety" | "incident";

export const DemoSurface = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<ServiceKey>("incident");

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
      title: "Work Intake & Demand Handling",
      metrics: [
        { label: "Coordination Time", value: "−38%" },
        { label: "Rework Cycles", value: "−41%" },
        { label: "Ownership", value: "Defined upfront" },
      ],
      before: {
        title: "Fragmented intake and reactive coordination",
        text:
          "Work enters through emails, calls, and informal channels. "
          + "Information quality varies and ownership shifts during execution.",
        bullets: [
          "Multiple intake paths",
          "Manual clarification loops",
          "Priority driven by urgency",
          "Execution depends on individuals",
        ],
        tradeoff: "Time lost to coordination and correction.",
      },
      after: {
        title: "Structured intake with controlled execution",
        text:
          "Requests follow a single intake path. Information is validated upfront "
          + "and ownership is assigned before execution begins.",
        bullets: [
          "Single structured intake",
          "Clear classification and routing",
          "Ownership assigned once",
          "Predictable execution flow",
        ],
        tradeoff: "Coordination drops, execution stabilizes.",
      },
    },

    safety: {
      title: "Safety & Execution Standards",
      metrics: [
        { label: "Procedure Deviations", value: "−47%" },
        { label: "Onboarding Time", value: "−32%" },
        { label: "Consistency", value: "Standardized" },
      ],
      before: {
        title: "Interpretation-based execution",
        text:
          "Safety procedures exist across documents and tribal knowledge. "
          + "Operators interpret standards differently.",
        bullets: [
          "Inconsistent procedures",
          "High reliance on senior staff",
          "Contractors onboarded informally",
          "Audit exposure",
        ],
        tradeoff: "Safety depends on experience, not structure.",
      },
      after: {
        title: "Standardized execution with shared understanding",
        text:
          "Execution standards are clear, visual, and uniform across teams "
          + "and contractor groups.",
        bullets: [
          "Uniform execution standards",
          "Faster onboarding",
          "Reduced interpretation errors",
          "Aligned safety framework",
        ],
        tradeoff: "Safety becomes repeatable and auditable.",
      },
    },

    incident: {
      title: "Incident Handling & Escalation",
      metrics: [
        { label: "Escalation Loops", value: "−52%" },
        { label: "Response Time", value: "−29%" },
        { label: "Accountability", value: "Explicit" },
      ],
      before: {
        title: "Reactive incident handling",
        text:
          "Incidents are reported inconsistently and escalated manually. "
          + "Responsibility is unclear and visibility is limited.",
        bullets: [
          "Unclear escalation thresholds",
          "Delayed handovers",
          "Parallel communication threads",
          "Limited management visibility",
        ],
        tradeoff: "Incidents consume attention instead of being resolved.",
      },
      after: {
        title: "Controlled escalation with clear accountability",
        text:
          "Incidents are logged, classified, and escalated through predefined paths. "
          + "Each step has a clear owner and response window.",
        bullets: [
          "Defined escalation levels",
          "Clear ownership per incident",
          "Predictable response timelines",
          "Full operational visibility",
        ],
        tradeoff: "Incidents are resolved systematically.",
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
          <h3 className="text-base font-semibold">Operational Trade-Off Analysis</h3>
          <button
            onClick={() => setOpen(false)}
            className="text-sm text-muted-foreground"
          >
            Close
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
                Before Alignment
              </p>
              <h4 className="text-lg font-semibold mb-3">
                {current.before.title}
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                {current.before.text}
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {current.before.bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-muted-foreground">
                Trade-off: {current.before.tradeoff}
              </p>
            </div>

            {/* AFTER */}
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
                After Alignment
              </p>
              <h4 className="text-lg font-semibold mb-3">
                {current.after.title}
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                {current.after.text}
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {current.after.bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-muted-foreground">
                Trade-off: {current.after.tradeoff}
              </p>
            </div>

          </div>

          {/* FOOTER NOTE */}
          <div className="px-5 py-4 border-t border-border text-[11px] text-muted-foreground">
            Representative operational scenarios from industrial, logistics, and facility environments.
          </div>

        </div>
      </div>
    </div>
  );
};
