import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Clock, Euro, TrendingUp, Users, Settings2, ArrowRight, ExternalLink } from "lucide-react";

/* ────────────── Sector config ────────────── */
type SectorKey = "facility" | "logistics" | "warehousing" | "repair";

interface SectorPreset {
  label: string;
  description: string;
  requests: number;
  calls: number;
  emails: number;
  callTime: number;
  emailTime: number;
  requestTime: number;
  automationCalls: number;
  automationEmails: number;
  automationRequests: number;
}

const SECTORS: Record<SectorKey, SectorPreset> = {
  facility: {
    label: "Facility Management",
    description: "Intake, triage, and dispatch for multi-site facility operations.",
    requests: 1200, calls: 800, emails: 900,
    callTime: 5, emailTime: 4, requestTime: 6,
    automationCalls: 0.625, automationEmails: 0.70, automationRequests: 0.80,
  },
  logistics: {
    label: "Logistics",
    description: "Coordination, status updates, and routing for freight & distribution.",
    requests: 1800, calls: 2000, emails: 1500,
    callTime: 5.5, emailTime: 3.5, requestTime: 5,
    automationCalls: 0.575, automationEmails: 0.675, automationRequests: 0.80,
  },
  warehousing: {
    label: "Warehousing",
    description: "Internal routing, inventory requests, and operational coordination.",
    requests: 900, calls: 600, emails: 800,
    callTime: 5, emailTime: 3.5, requestTime: 4.5,
    automationCalls: 0.525, automationEmails: 0.65, automationRequests: 0.775,
  },
  repair: {
    label: "Repair & Maintenance",
    description: "Scheduling, dispatch, and triage for field service operations.",
    requests: 1500, calls: 1200, emails: 1000,
    callTime: 5.5, emailTime: 4.5, requestTime: 6.5,
    automationCalls: 0.65, automationEmails: 0.75, automationRequests: 0.825,
  },
};

/* ────────────── Animated counter hook ────────────── */
function useAnimatedValue(target: number, duration = 600) {
  const [value, setValue] = useState(target);
  const frameRef = useRef<number>();
  const startRef = useRef({ value: target, time: 0 });

  useEffect(() => {
    const start = startRef.current.value;
    const startTime = performance.now();
    startRef.current = { value: target, time: startTime };

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(start + (target - start) * eased);
      if (progress < 1) frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => { if (frameRef.current) cancelAnimationFrame(frameRef.current); };
  }, [target, duration]);

  return value;
}

/* ────────────── Format helpers ────────────── */
const fmt = (n: number) => Math.round(n).toLocaleString("en-US");
const fmtEur = (n: number) => "€" + Math.round(n).toLocaleString("en-US");

/* ────────────── Result card ────────────── */
function ResultCard({ icon: Icon, label, value, suffix, className }: {
  icon: typeof Clock;
  label: string;
  value: number;
  suffix?: string;
  className?: string;
}) {
  const animated = useAnimatedValue(value);
  return (
    <div className={cn(
      "relative overflow-hidden rounded-2xl border border-border/50 p-6",
      "bg-card/60 backdrop-blur-xl",
      "shadow-[0_2px_24px_-4px_hsl(var(--card-shadow)/0.08)]",
      "transition-all duration-300 hover:shadow-[0_8px_40px_-8px_hsl(var(--card-shadow)/0.15)] hover:-translate-y-0.5",
      className
    )}>
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-foreground/[0.04]" />
      <div className="relative">
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent/10">
            <Icon className="w-4 h-4 text-accent" />
          </div>
          <span className="text-sm font-medium text-muted-foreground">{label}</span>
        </div>
        <div className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          {suffix === "FTE" ? animated.toFixed(1) : typeof value === "number" && label.includes("€") ? fmtEur(animated) : fmt(animated)}
          {suffix && suffix !== "FTE" && <span className="text-lg font-medium text-muted-foreground ml-1">{suffix}</span>}
        </div>
        {suffix === "FTE" && (
          <p className="text-xs text-muted-foreground mt-1">
            Equivalent to {animated.toFixed(1)} full-time operators
          </p>
        )}
      </div>
    </div>
  );
}

/* ────────────── Workload bar ────────────── */
function WorkloadBar({ label, manual, automated, unit }: {
  label: string; manual: number; automated: number; unit: string;
}) {
  const saved = manual - automated;
  const pctAutomated = manual > 0 ? (automated / manual) * 100 : 0;
  const pctSaved = manual > 0 ? (saved / manual) * 100 : 0;

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">{label}</span>
        <span className="font-medium text-foreground">{fmt(manual)} {unit}</span>
      </div>
      <div className="relative h-6 rounded-full bg-muted/50 overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-foreground/15 transition-all duration-700"
          style={{ width: "100%" }}
        />
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-accent/80 transition-all duration-700"
          style={{ width: `${pctSaved}%` }}
        />
        <div className="absolute inset-0 flex items-center px-3 text-xs font-medium">
          <span className="text-accent-foreground drop-shadow-sm">{fmt(saved)} {unit} saved</span>
        </div>
      </div>
      <div className="flex gap-4 text-xs text-muted-foreground">
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-foreground/15" /> Manual today
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-accent/80" /> Automated savings
        </span>
      </div>
    </div>
  );
}

/* ────────────── Slider row ────────────── */
function SliderRow({ label, value, onChange, min, max, step, prefix, suffix, helper }: {
  label: string; value: number; onChange: (v: number) => void;
  min: number; max: number; step?: number;
  prefix?: string; suffix?: string; helper?: string;
}) {
  return (
    <div className="space-y-3">
      <div className="flex justify-between items-baseline">
        <label className="text-sm font-medium text-foreground">{label}</label>
        <span className="text-sm font-semibold text-accent tabular-nums">
          {prefix}{fmt(value)}{suffix}
        </span>
      </div>
      <Slider
        value={[value]}
        onValueChange={([v]) => onChange(v)}
        min={min}
        max={max}
        step={step || 1}
        className="w-full"
      />
      {helper && <p className="text-xs text-muted-foreground">{helper}</p>}
    </div>
  );
}

/* ════════════════ MAIN COMPONENT ════════════════ */
export const OperationalImpactCalculator = () => {
  const [sector, setSector] = useState<SectorKey>("facility");
  const [advancedOpen, setAdvancedOpen] = useState(false);

  const preset = SECTORS[sector];

  const [requests, setRequests] = useState(preset.requests);
  const [calls, setCalls] = useState(preset.calls);
  const [emails, setEmails] = useState(preset.emails);
  const [laborCost, setLaborCost] = useState(35);
  const [callTime, setCallTime] = useState(preset.callTime);
  const [emailTime, setEmailTime] = useState(preset.emailTime);

  // When sector changes, update defaults
  useEffect(() => {
    const p = SECTORS[sector];
    setRequests(p.requests);
    setCalls(p.calls);
    setEmails(p.emails);
    setCallTime(p.callTime);
    setEmailTime(p.emailTime);
  }, [sector]);

  // Calculations
  const results = useMemo(() => {
    const p = SECTORS[sector];
    const manualCallMin = calls * callTime;
    const manualEmailMin = emails * emailTime;
    const manualRequestMin = requests * p.requestTime;

    const savedCallMin = manualCallMin * p.automationCalls;
    const savedEmailMin = manualEmailMin * p.automationEmails;
    const savedRequestMin = manualRequestMin * p.automationRequests;

    const totalSavedMin = savedCallMin + savedEmailMin + savedRequestMin;
    const hoursSavedMonth = totalSavedMin / 60;
    const costSavedMonth = hoursSavedMonth * laborCost;
    const costSavedYear = costSavedMonth * 12;
    const fte = hoursSavedMonth / 160;

    return {
      hoursSavedMonth,
      costSavedMonth,
      costSavedYear,
      fte,
      manualCallMin,
      manualEmailMin,
      manualRequestMin,
      savedCallMin,
      savedEmailMin,
      savedRequestMin,
    };
  }, [sector, requests, calls, emails, laborCost, callTime, emailTime]);

  const scrollToCTA = useCallback(() => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section id="impact-calculator" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background pointer-events-none" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* ── Header ── */}
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <p className="section-label mb-3">Impact Estimator</p>
          <h2 className="section-title mb-4">Operational Impact Calculator</h2>
          <p className="section-subtitle mx-auto mb-2">
            Estimate the time and operational cost you can save by automating requests, calls, and emails.
          </p>
          <p className="text-sm text-muted-foreground">
            Adjust your volumes to see the monthly and annual impact.
          </p>
        </div>

        {/* ── Sector toggles ── */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 sm:mb-16">
          {(Object.keys(SECTORS) as SectorKey[]).map((key) => (
            <button
              key={key}
              onClick={() => setSector(key)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                "border border-border/50",
                sector === key
                  ? "bg-accent text-accent-foreground shadow-[0_0_20px_-4px_hsl(var(--accent)/0.4)] border-accent/50"
                  : "bg-card/60 text-muted-foreground hover:text-foreground hover:bg-card hover:border-border"
              )}
            >
              {SECTORS[key].label}
            </button>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mb-10 max-w-xl mx-auto">
          {preset.description}
        </p>

        {/* ── Main 2-col layout ── */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* LEFT: Controls */}
          <div className="space-y-8">
            <div className={cn(
              "rounded-2xl border border-border/50 p-6 sm:p-8",
              "bg-card/40 backdrop-blur-xl",
              "shadow-[0_2px_24px_-4px_hsl(var(--card-shadow)/0.06)]"
            )}>
              <h3 className="text-lg font-semibold text-foreground mb-6">Your Operations Volume</h3>

              <div className="space-y-6">
                <SliderRow
                  label="Monthly Requests / Tickets"
                  value={requests} onChange={setRequests}
                  min={250} max={10000} step={50}
                />
                <SliderRow
                  label="Monthly Phone Calls"
                  value={calls} onChange={setCalls}
                  min={100} max={10000} step={50}
                />
                <SliderRow
                  label="Monthly Emails"
                  value={emails} onChange={setEmails}
                  min={100} max={10000} step={50}
                />
                <SliderRow
                  label="Loaded Labor Cost"
                  value={laborCost} onChange={setLaborCost}
                  min={12} max={60} step={1}
                  prefix="€"
                  suffix="/hr"
                  helper="Use your fully-loaded operations cost (wages + overhead)."
                />
              </div>

              {/* Advanced settings */}
              <Collapsible open={advancedOpen} onOpenChange={setAdvancedOpen}>
                <CollapsibleTrigger className="flex items-center gap-2 mt-6 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  <Settings2 className="w-4 h-4" />
                  Advanced Settings
                  <ChevronDown className={cn(
                    "w-4 h-4 transition-transform duration-200",
                    advancedOpen && "rotate-180"
                  )} />
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4 space-y-6">
                  <SliderRow
                    label="Avg Call Handling Time"
                    value={callTime} onChange={setCallTime}
                    min={2} max={12} step={0.5}
                    suffix=" min"
                  />
                  <SliderRow
                    label="Avg Email Handling Time"
                    value={emailTime} onChange={setEmailTime}
                    min={1} max={10} step={0.5}
                    suffix=" min"
                  />
                </CollapsibleContent>
              </Collapsible>
            </div>

            {/* Assumptions note */}
            <div className="rounded-xl border border-border/30 bg-muted/30 p-4 text-xs text-muted-foreground space-y-1">
              <p className="font-medium text-foreground/70 mb-2">Assumptions used</p>
              <p>Automation coverage: Calls {Math.round(preset.automationCalls * 100)}% · Emails {Math.round(preset.automationEmails * 100)}% · Requests {Math.round(preset.automationRequests * 100)}%</p>
              <p>Request handling time: {preset.requestTime} min avg · Based on {preset.label} benchmarks</p>
            </div>
          </div>

          {/* RIGHT: Results */}
          <div className="space-y-6">
            {/* Result cards */}
            <div className="grid grid-cols-2 gap-4">
              <ResultCard icon={Clock} label="Hours saved / month" value={results.hoursSavedMonth} suffix="hrs" />
              <ResultCard icon={Euro} label="€ saved / month" value={results.costSavedMonth} />
              <ResultCard icon={TrendingUp} label="€ saved / year" value={results.costSavedYear} />
              <ResultCard icon={Users} label="Capacity unlocked" value={results.fte} suffix="FTE" />
            </div>

            <p className="text-xs text-muted-foreground text-center">
              Estimates vary by workflow complexity and service scope.
            </p>

            {/* Workload visualization */}
            <div className={cn(
              "rounded-2xl border border-border/50 p-6",
              "bg-card/40 backdrop-blur-xl",
              "shadow-[0_2px_24px_-4px_hsl(var(--card-shadow)/0.06)]"
            )}>
              <h4 className="text-sm font-semibold text-foreground mb-5">Before vs. After Workload</h4>
              <div className="space-y-5">
                <WorkloadBar
                  label="Phone Calls"
                  manual={results.manualCallMin}
                  automated={results.manualCallMin - results.savedCallMin}
                  unit="min"
                />
                <WorkloadBar
                  label="Emails"
                  manual={results.manualEmailMin}
                  automated={results.manualEmailMin - results.savedEmailMin}
                  unit="min"
                />
                <WorkloadBar
                  label="Requests & Tickets"
                  manual={results.manualRequestMin}
                  automated={results.manualRequestMin - results.savedRequestMin}
                  unit="min"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── CTA Block ── */}
        <div className={cn(
          "mt-16 sm:mt-20 rounded-2xl border border-border/50 p-8 sm:p-12",
          "bg-gradient-to-br from-card/60 via-card/40 to-muted/20 backdrop-blur-xl",
          "shadow-[0_4px_30px_-8px_hsl(var(--card-shadow)/0.1)]",
          "text-center max-w-3xl mx-auto"
        )}>
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            See your workflow mapped in 20 minutes.
          </h3>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            We'll review your intake channels, routing, and dispatch flow and provide a tailored impact estimate.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground px-10 py-4 text-base font-semibold shadow-lg hover:bg-accent/90 hover:shadow-xl transition-all"
              onClick={() =>
                window.dispatchEvent(new Event("open-booking-modal"))
              }
            >
              Book a Discovery Call
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <button
              onClick={() => document.getElementById("workflow-demo")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              View examples of automated workflows
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperationalImpactCalculator;
