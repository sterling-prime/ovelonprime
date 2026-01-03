import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import { X, ChevronRight, ChevronLeft, Building2, Wrench, AlertTriangle, Shield, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProjectSimulatorProps {
  isOpen: boolean;
  onClose: () => void;
}

type SimulatorData = {
  // Step 1 - Operational Context
  industry: string;
  operationType: string[];
  scale: string;
  // Step 2 - Current Operating Model
  requestHandling: string[];
  structureLevel: string;
  toolsInUse: string[];
  // Step 3 - Pain Points
  frictionPoints: string[];
  frictionNotes: string;
  // Step 4 - Constraints
  downtimeSensitivity: string;
  safetyCompliance: string[];
  coordinationComplexity: string;
  // Step 5 is summary only
};

const initialData: SimulatorData = {
  industry: "",
  operationType: [],
  scale: "",
  requestHandling: [],
  structureLevel: "",
  toolsInUse: [],
  frictionPoints: [],
  frictionNotes: "",
  downtimeSensitivity: "",
  safetyCompliance: [],
  coordinationComplexity: "",
};

export const ProjectSimulator = ({ isOpen, onClose }: ProjectSimulatorProps) => {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState<SimulatorData>(initialData);
  const totalSteps = 5;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleClose = () => {
    onClose();
  };

  const handleReset = () => {
    setData(initialData);
    setCurrentStep(1);
  };

  const toggleArrayValue = (field: keyof SimulatorData, value: string) => {
    setData((prev) => {
      const current = prev[field] as string[];
      if (current.includes(value)) {
        return { ...prev, [field]: current.filter((v) => v !== value) };
      }
      return { ...prev, [field]: [...current, value] };
    });
  };

  const setSingleValue = (field: keyof SimulatorData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  if (!isOpen) return null;

  const stepIcons = [Building2, Wrench, AlertTriangle, Shield, FileText];

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-3xl max-h-[90vh] mx-4 bg-card rounded-lg shadow-2xl overflow-hidden animate-scale-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-muted/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
              {(() => {
                const Icon = stepIcons[currentStep - 1];
                return <Icon className="w-5 h-5 text-accent" />;
              })()}
            </div>
            <div>
              <h2 className="text-lg font-semibold text-foreground">
                {t("simulator.title")}
              </h2>
              <p className="text-sm text-muted-foreground">
                {t(`simulator.step${currentStep}.title`)}
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label={t("simulator.close")}
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        {/* Progress */}
        <div className="px-6 py-3 border-b border-border bg-muted/10">
          <div className="flex items-center gap-2">
            {Array.from({ length: totalSteps }).map((_, i) => (
              <div key={i} className="flex items-center gap-2 flex-1">
                <div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all",
                    i + 1 === currentStep
                      ? "bg-accent text-accent-foreground"
                      : i + 1 < currentStep
                      ? "bg-accent/20 text-accent"
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  {i + 1}
                </div>
                {i < totalSteps - 1 && (
                  <div
                    className={cn(
                      "flex-1 h-0.5 transition-colors",
                      i + 1 < currentStep ? "bg-accent/40" : "bg-border"
                    )}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          {currentStep === 1 && (
            <Step1
              data={data}
              onToggle={toggleArrayValue}
              onSet={setSingleValue}
              t={t}
            />
          )}
          {currentStep === 2 && (
            <Step2
              data={data}
              onToggle={toggleArrayValue}
              onSet={setSingleValue}
              t={t}
            />
          )}
          {currentStep === 3 && (
            <Step3
              data={data}
              onToggle={toggleArrayValue}
              onSet={setSingleValue}
              t={t}
            />
          )}
          {currentStep === 4 && (
            <Step4
              data={data}
              onToggle={toggleArrayValue}
              onSet={setSingleValue}
              t={t}
            />
          )}
          {currentStep === 5 && <Step5 data={data} t={t} />}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-border bg-muted/10">
          <div className="text-sm text-muted-foreground">
            {t("simulator.stepIndicator", { current: currentStep, total: totalSteps })}
          </div>
          <div className="flex items-center gap-3">
            {currentStep > 1 && (
              <Button variant="outline" onClick={handleBack} className="gap-2">
                <ChevronLeft className="w-4 h-4" />
                {t("simulator.back")}
              </Button>
            )}
            {currentStep < totalSteps ? (
              <Button onClick={handleNext} className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground">
                {t("simulator.next")}
                <ChevronRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button
                onClick={handleClose}
                className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                {t("simulator.requestReview")}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

// ==================== STEP COMPONENTS ====================

interface StepProps {
  data: SimulatorData;
  onToggle: (field: keyof SimulatorData, value: string) => void;
  onSet: (field: keyof SimulatorData, value: string) => void;
  t: (key: string, options?: any) => string;
}

// Selection button component
const SelectionButton = ({
  selected,
  onClick,
  children,
  className,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}) => (
  <button
    type="button"
    onClick={onClick}
    className={cn(
      "px-4 py-3 rounded-lg border text-left transition-all text-sm",
      selected
        ? "border-accent bg-accent/10 text-foreground"
        : "border-border bg-card hover:border-accent/50 text-muted-foreground hover:text-foreground",
      className
    )}
  >
    {children}
  </button>
);

// Step 1: Operational Context
const Step1 = ({ data, onToggle, onSet, t }: StepProps) => {
  const industries = ["manufacturing", "logistics", "facility", "infrastructure", "energy", "healthcare", "other"];
  const operationTypes = ["facility", "logistics", "maintenance", "production", "fieldService"];
  const scales = ["single", "multi", "distributed"];

  return (
    <div className="space-y-8">
      <p className="text-muted-foreground">{t("simulator.step1.description")}</p>

      {/* Industry */}
      <div className="space-y-3">
        <label className="text-sm font-medium text-foreground">
          {t("simulator.step1.industryLabel")}
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {industries.map((ind) => (
            <SelectionButton
              key={ind}
              selected={data.industry === ind}
              onClick={() => onSet("industry", ind)}
            >
              {t(`simulator.industries.${ind}`)}
            </SelectionButton>
          ))}
        </div>
      </div>

      {/* Operation Type */}
      <div className="space-y-3">
        <label className="text-sm font-medium text-foreground">
          {t("simulator.step1.operationLabel")}
        </label>
        <p className="text-xs text-muted-foreground">{t("simulator.step1.operationHint")}</p>
        <div className="grid grid-cols-2 gap-2">
          {operationTypes.map((op) => (
            <SelectionButton
              key={op}
              selected={data.operationType.includes(op)}
              onClick={() => onToggle("operationType", op)}
            >
              {t(`simulator.operationTypes.${op}`)}
            </SelectionButton>
          ))}
        </div>
      </div>

      {/* Scale */}
      <div className="space-y-3">
        <label className="text-sm font-medium text-foreground">
          {t("simulator.step1.scaleLabel")}
        </label>
        <div className="grid grid-cols-3 gap-2">
          {scales.map((sc) => (
            <SelectionButton
              key={sc}
              selected={data.scale === sc}
              onClick={() => onSet("scale", sc)}
            >
              {t(`simulator.scales.${sc}`)}
            </SelectionButton>
          ))}
        </div>
      </div>
    </div>
  );
};

// Step 2: Current Operating Model
const Step2 = ({ data, onToggle, onSet, t }: StepProps) => {
  const handlingMethods = ["email", "phone", "tickets", "verbal", "spreadsheets", "erp"];
  const structureLevels = ["adhoc", "semiStructured", "fullyStructured"];
  const toolTypes = ["manual", "semiAutomated", "fragmented", "integrated"];

  return (
    <div className="space-y-8">
      <p className="text-muted-foreground">{t("simulator.step2.description")}</p>

      {/* Request Handling */}
      <div className="space-y-3">
        <label className="text-sm font-medium text-foreground">
          {t("simulator.step2.handlingLabel")}
        </label>
        <p className="text-xs text-muted-foreground">{t("simulator.step2.handlingHint")}</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {handlingMethods.map((m) => (
            <SelectionButton
              key={m}
              selected={data.requestHandling.includes(m)}
              onClick={() => onToggle("requestHandling", m)}
            >
              {t(`simulator.handlingMethods.${m}`)}
            </SelectionButton>
          ))}
        </div>
      </div>

      {/* Structure Level */}
      <div className="space-y-3">
        <label className="text-sm font-medium text-foreground">
          {t("simulator.step2.structureLabel")}
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {structureLevels.map((s) => (
            <SelectionButton
              key={s}
              selected={data.structureLevel === s}
              onClick={() => onSet("structureLevel", s)}
            >
              <span className="font-medium">{t(`simulator.structureLevels.${s}.title`)}</span>
              <span className="block text-xs text-muted-foreground mt-1">
                {t(`simulator.structureLevels.${s}.desc`)}
              </span>
            </SelectionButton>
          ))}
        </div>
      </div>

      {/* Tools in Use */}
      <div className="space-y-3">
        <label className="text-sm font-medium text-foreground">
          {t("simulator.step2.toolsLabel")}
        </label>
        <div className="grid grid-cols-2 gap-2">
          {toolTypes.map((tool) => (
            <SelectionButton
              key={tool}
              selected={data.toolsInUse.includes(tool)}
              onClick={() => onToggle("toolsInUse", tool)}
            >
              {t(`simulator.toolTypes.${tool}`)}
            </SelectionButton>
          ))}
        </div>
      </div>
    </div>
  );
};

// Step 3: Pain Points
const Step3 = ({ data, onToggle, onSet, t }: StepProps) => {
  const frictionOptions = [
    "slowResponse",
    "unclearOwnership",
    "manualCoordination",
    "inconsistentExecution",
    "lackVisibility",
    "escalationDelays",
    "documentationGaps",
    "communicationBreakdown",
  ];

  return (
    <div className="space-y-8">
      <p className="text-muted-foreground">{t("simulator.step3.description")}</p>

      {/* Friction Points */}
      <div className="space-y-3">
        <label className="text-sm font-medium text-foreground">
          {t("simulator.step3.frictionLabel")}
        </label>
        <p className="text-xs text-muted-foreground">{t("simulator.step3.frictionHint")}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {frictionOptions.map((f) => (
            <SelectionButton
              key={f}
              selected={data.frictionPoints.includes(f)}
              onClick={() => onToggle("frictionPoints", f)}
            >
              {t(`simulator.frictionPoints.${f}`)}
            </SelectionButton>
          ))}
        </div>
      </div>

      {/* Notes */}
      <div className="space-y-3">
        <label className="text-sm font-medium text-foreground">
          {t("simulator.step3.notesLabel")}
        </label>
        <textarea
          value={data.frictionNotes}
          onChange={(e) => onSet("frictionNotes", e.target.value)}
          placeholder={t("simulator.step3.notesPlaceholder")}
          className="w-full h-24 px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-accent/50"
        />
      </div>
    </div>
  );
};

// Step 4: Constraints
const Step4 = ({ data, onToggle, onSet, t }: StepProps) => {
  const downtimeLevels = ["critical", "high", "moderate", "low"];
  const complianceOptions = ["iso", "hse", "osha", "vca", "gdpr", "sectorSpecific"];
  const complexityLevels = ["simple", "moderate", "complex", "veryComplex"];

  return (
    <div className="space-y-8">
      <p className="text-muted-foreground">{t("simulator.step4.description")}</p>

      {/* Downtime Sensitivity */}
      <div className="space-y-3">
        <label className="text-sm font-medium text-foreground">
          {t("simulator.step4.downtimeLabel")}
        </label>
        <div className="grid grid-cols-2 gap-2">
          {downtimeLevels.map((d) => (
            <SelectionButton
              key={d}
              selected={data.downtimeSensitivity === d}
              onClick={() => onSet("downtimeSensitivity", d)}
            >
              <span className="font-medium">{t(`simulator.downtimeLevels.${d}.title`)}</span>
              <span className="block text-xs text-muted-foreground mt-1">
                {t(`simulator.downtimeLevels.${d}.desc`)}
              </span>
            </SelectionButton>
          ))}
        </div>
      </div>

      {/* Safety/Compliance */}
      <div className="space-y-3">
        <label className="text-sm font-medium text-foreground">
          {t("simulator.step4.complianceLabel")}
        </label>
        <p className="text-xs text-muted-foreground">{t("simulator.step4.complianceHint")}</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {complianceOptions.map((c) => (
            <SelectionButton
              key={c}
              selected={data.safetyCompliance.includes(c)}
              onClick={() => onToggle("safetyCompliance", c)}
            >
              {t(`simulator.complianceOptions.${c}`)}
            </SelectionButton>
          ))}
        </div>
      </div>

      {/* Coordination Complexity */}
      <div className="space-y-3">
        <label className="text-sm font-medium text-foreground">
          {t("simulator.step4.complexityLabel")}
        </label>
        <div className="grid grid-cols-2 gap-2">
          {complexityLevels.map((c) => (
            <SelectionButton
              key={c}
              selected={data.coordinationComplexity === c}
              onClick={() => onSet("coordinationComplexity", c)}
            >
              {t(`simulator.complexityLevels.${c}`)}
            </SelectionButton>
          ))}
        </div>
      </div>
    </div>
  );
};

// Step 5: Summary
const Step5 = ({ data, t }: { data: SimulatorData; t: (key: string, options?: any) => string }) => {
  const hasData = data.industry || data.operationType.length > 0 || data.frictionPoints.length > 0;

  return (
    <div className="space-y-6">
      <p className="text-muted-foreground">{t("simulator.step5.description")}</p>

      {!hasData ? (
        <div className="p-6 rounded-lg bg-muted/50 text-center">
          <p className="text-muted-foreground">{t("simulator.step5.noData")}</p>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Operational Context */}
          <div className="p-4 rounded-lg border border-border bg-card">
            <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-accent" />
              {t("simulator.step5.contextTitle")}
            </h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              {data.industry && (
                <p>
                  <span className="text-foreground font-medium">{t("simulator.step5.industry")}:</span>{" "}
                  {t(`simulator.industries.${data.industry}`)}
                </p>
              )}
              {data.operationType.length > 0 && (
                <p>
                  <span className="text-foreground font-medium">{t("simulator.step5.operations")}:</span>{" "}
                  {data.operationType.map((op) => t(`simulator.operationTypes.${op}`)).join(", ")}
                </p>
              )}
              {data.scale && (
                <p>
                  <span className="text-foreground font-medium">{t("simulator.step5.scale")}:</span>{" "}
                  {t(`simulator.scales.${data.scale}`)}
                </p>
              )}
            </div>
          </div>

          {/* Current Model */}
          {(data.requestHandling.length > 0 || data.structureLevel || data.toolsInUse.length > 0) && (
            <div className="p-4 rounded-lg border border-border bg-card">
              <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <Wrench className="w-4 h-4 text-accent" />
                {t("simulator.step5.modelTitle")}
              </h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                {data.requestHandling.length > 0 && (
                  <p>
                    <span className="text-foreground font-medium">{t("simulator.step5.handling")}:</span>{" "}
                    {data.requestHandling.map((h) => t(`simulator.handlingMethods.${h}`)).join(", ")}
                  </p>
                )}
                {data.structureLevel && (
                  <p>
                    <span className="text-foreground font-medium">{t("simulator.step5.structure")}:</span>{" "}
                    {t(`simulator.structureLevels.${data.structureLevel}.title`)}
                  </p>
                )}
                {data.toolsInUse.length > 0 && (
                  <p>
                    <span className="text-foreground font-medium">{t("simulator.step5.tools")}:</span>{" "}
                    {data.toolsInUse.map((tool) => t(`simulator.toolTypes.${tool}`)).join(", ")}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Hurdles */}
          {(data.frictionPoints.length > 0 || data.frictionNotes) && (
            <div className="p-4 rounded-lg border border-border bg-card">
              <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-accent" />
                {t("simulator.step5.hurdlesTitle")}
              </h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                {data.frictionPoints.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {data.frictionPoints.map((f) => (
                      <span key={f} className="px-2 py-1 rounded bg-accent/10 text-accent text-xs">
                        {t(`simulator.frictionPoints.${f}`)}
                      </span>
                    ))}
                  </div>
                )}
                {data.frictionNotes && (
                  <p className="mt-2 italic">"{data.frictionNotes}"</p>
                )}
              </div>
            </div>
          )}

          {/* Constraints */}
          {(data.downtimeSensitivity || data.safetyCompliance.length > 0 || data.coordinationComplexity) && (
            <div className="p-4 rounded-lg border border-border bg-card">
              <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <Shield className="w-4 h-4 text-accent" />
                {t("simulator.step5.constraintsTitle")}
              </h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                {data.downtimeSensitivity && (
                  <p>
                    <span className="text-foreground font-medium">{t("simulator.step5.downtime")}:</span>{" "}
                    {t(`simulator.downtimeLevels.${data.downtimeSensitivity}.title`)}
                  </p>
                )}
                {data.safetyCompliance.length > 0 && (
                  <p>
                    <span className="text-foreground font-medium">{t("simulator.step5.compliance")}:</span>{" "}
                    {data.safetyCompliance.map((c) => t(`simulator.complianceOptions.${c}`)).join(", ")}
                  </p>
                )}
                {data.coordinationComplexity && (
                  <p>
                    <span className="text-foreground font-medium">{t("simulator.step5.complexity")}:</span>{" "}
                    {t(`simulator.complexityLevels.${data.coordinationComplexity}`)}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Disclaimer */}
      <div className="p-4 rounded-lg bg-muted/30 border border-border">
        <p className="text-xs text-muted-foreground leading-relaxed">
          {t("simulator.step5.disclaimer")}
        </p>
      </div>
    </div>
  );
};

export default ProjectSimulator;
