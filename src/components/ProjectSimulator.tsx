import { useState, useEffect, useMemo, useCallback } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import { X, ChevronRight, ChevronLeft, Building2, Wrench, AlertTriangle, Shield, FileText, ClipboardCheck, User, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SubmissionSuccessModal } from "./SubmissionSuccessModal";
import { SubmissionVideoModal } from "./SubmissionVideoModal";
import { useGeolocation } from "@/hooks/use-geolocation";
import { LocationAutocomplete } from "./LocationAutocomplete";
import { searchCountries, getCountryByCode, COUNTRIES } from "@/lib/countries";
import { searchCities, getCitiesForCountry } from "@/lib/cities";
import { useSubmitIntake } from "@/hooks/use-submit-intake";
import { useToast } from "@/hooks/use-toast";
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
  // Step 7 - Personal & Company Details
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  role: string;
  country: string;
  city: string;
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
  fullName: "",
  email: "",
  phone: "",
  companyName: "",
  role: "",
  country: "",
  city: "",
};

export const ProjectSimulator = ({ isOpen, onClose }: ProjectSimulatorProps) => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState<SimulatorData>(initialData);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{
    referenceId?: string;
    pdfAttached?: boolean;
    userEmail?: string;
  }>({});
  const [validationErrors, setValidationErrors] = useState<Record<string, boolean>>({});
  const [showValidationErrors, setShowValidationErrors] = useState(false);
  const totalSteps = 7;

  // Generate operational analysis based on collected data
  const generateOperationalAnalysis = () => {
    const analysis = {
      operationalObservations: generateObservations(),
      riskExposure: generateRiskAssessment(),
      executionReadiness: generateReadinessAssessment(),
      advisoryDirection: generateAdvisoryDirection(),
    };
    return analysis;
  };

  const generateObservations = () => {
    const observations: string[] = [];
    
    // Industry context
    if (data.industry) {
      observations.push(t(`simulator.analysis.observations.industry.${data.industry}`));
    }
    
    // Scale implications
    if (data.scale) {
      observations.push(t(`simulator.analysis.observations.scale.${data.scale}`));
    }
    
    // Structure level implications
    if (data.structureLevel) {
      observations.push(t(`simulator.analysis.observations.structure.${data.structureLevel}`));
    }
    
    // Tools landscape
    if (data.toolsInUse.length > 0) {
      if (data.toolsInUse.includes("fragmented")) {
        observations.push(t("simulator.analysis.observations.tools.fragmented"));
      } else if (data.toolsInUse.includes("manual")) {
        observations.push(t("simulator.analysis.observations.tools.manual"));
      }
    }
    
    return observations;
  };

  const generateRiskAssessment = () => {
    const risks: string[] = [];
    
    // Predictability risks
    if (data.frictionPoints.includes("inconsistentExecution") || data.frictionPoints.includes("unclearOwnership")) {
      risks.push(t("simulator.analysis.risks.predictability"));
    }
    
    // Coordination risks
    if (data.frictionPoints.includes("manualCoordination") || data.frictionPoints.includes("communicationBreakdown")) {
      risks.push(t("simulator.analysis.risks.coordination"));
    }
    
    // Downtime exposure
    if (data.downtimeSensitivity === "critical" || data.downtimeSensitivity === "high") {
      risks.push(t("simulator.analysis.risks.downtime"));
    }
    
    // Compliance exposure
    if (data.safetyCompliance.length > 0 && data.structureLevel !== "fullyStructured") {
      risks.push(t("simulator.analysis.risks.compliance"));
    }
    
    // Escalation risks
    if (data.frictionPoints.includes("escalationDelays") || data.frictionPoints.includes("lackVisibility")) {
      risks.push(t("simulator.analysis.risks.escalation"));
    }
    
    return risks;
  };

  const generateReadinessAssessment = () => {
    let score = 0;
    let maxScore = 5;
    
    // Structure adds readiness
    if (data.structureLevel === "fullyStructured") score += 2;
    else if (data.structureLevel === "semiStructured") score += 1;
    
    // Integrated tools add readiness
    if (data.toolsInUse.includes("integrated")) score += 1;
    if (data.toolsInUse.includes("semiAutomated")) score += 0.5;
    
    // Complexity reduces readiness
    if (data.coordinationComplexity === "simple" || data.coordinationComplexity === "moderate") score += 1;
    
    // Fewer friction points indicate readiness
    if (data.frictionPoints.length <= 2) score += 0.5;
    
    const percentage = Math.round((score / maxScore) * 100);
    
    if (percentage >= 70) return t("simulator.analysis.readiness.high");
    if (percentage >= 40) return t("simulator.analysis.readiness.moderate");
    return t("simulator.analysis.readiness.low");
  };

  const generateAdvisoryDirection = () => {
    const directions: string[] = [];
    
    // Based on primary friction points
    if (data.frictionPoints.includes("unclearOwnership") || data.frictionPoints.includes("manualCoordination")) {
      directions.push(t("simulator.analysis.advisory.ownership"));
    }
    
    if (data.frictionPoints.includes("inconsistentExecution") || data.structureLevel === "adhoc") {
      directions.push(t("simulator.analysis.advisory.standardization"));
    }
    
    if (data.frictionPoints.includes("escalationDelays") || data.frictionPoints.includes("slowResponse")) {
      directions.push(t("simulator.analysis.advisory.escalation"));
    }
    
    if (data.safetyCompliance.length > 0) {
      directions.push(t("simulator.analysis.advisory.compliance"));
    }
    
    if (data.scale === "multi" || data.scale === "distributed") {
      directions.push(t("simulator.analysis.advisory.scale"));
    }
    
    return directions.slice(0, 3); // Max 3 directions
  };

  // Email validation helper
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validate all required fields in Step 7
  const validateStep7 = useCallback((): Record<string, boolean> => {
    const errors: Record<string, boolean> = {};
    
    if (!data.fullName.trim()) errors.fullName = true;
    if (!data.email.trim() || !isValidEmail(data.email)) errors.email = true;
    if (!data.phone.trim()) errors.phone = true;
    if (!data.companyName.trim()) errors.companyName = true;
    if (!data.role.trim()) errors.role = true;
    if (!data.country.trim()) errors.country = true;
    if (!data.city.trim()) errors.city = true;
    
    return errors;
  }, [data]);

  // Check if Step 7 is valid
  const isStep7Valid = useCallback((): boolean => {
    const errors = validateStep7();
    return Object.keys(errors).length === 0;
  }, [validateStep7]);

  // Submission hook with retry logic and Safari handling
  const { submit, isSubmitting } = useSubmitIntake({
    onSuccess: (result) => {
      setSubmissionResult({
        referenceId: result.referenceId,
        pdfAttached: result.pdfAttached,
        userEmail: data.email,
      });
      
      handleReset();
      onClose();
      setShowSuccessModal(true);
      setShowValidationErrors(false);
    },
    onError: (errorMessage) => {
      // Show toast notification instead of alert (works better on iOS Safari)
      toast({
        variant: "destructive",
        title: t("simulator.submitErrorTitle"),
        description: errorMessage || t("simulator.submitError"),
        duration: 6000,
      });
    },
    maxRetries: 1,
  });

  // Handle form submission
  const handleSubmit = async () => {
    // Validate before submission
    const errors = validateStep7();
    
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      setShowValidationErrors(true);
      
      toast({
        variant: "destructive",
        title: t("simulator.validationErrorTitle"),
        description: t("simulator.validationErrorDescription"),
        duration: 4000,
      });
      return;
    }

    setValidationErrors({});
    setShowValidationErrors(false);

    const analysis = generateOperationalAnalysis();
    
    const payload = {
      operationalData: {
        industry: data.industry,
        operationType: data.operationType,
        scale: data.scale,
        requestHandling: data.requestHandling,
        structureLevel: data.structureLevel,
        toolsInUse: data.toolsInUse,
        frictionPoints: data.frictionPoints,
        frictionNotes: data.frictionNotes,
        downtimeSensitivity: data.downtimeSensitivity,
        safetyCompliance: data.safetyCompliance,
        coordinationComplexity: data.coordinationComplexity,
      },
      contactDetails: {
        fullName: data.fullName.trim(),
        email: data.email.trim().toLowerCase(),
        phone: data.phone.trim(),
        companyName: data.companyName.trim(),
        role: data.role.trim(),
        country: data.country.trim(),
        city: data.city.trim(),
      },
      analysis,
    };

    await submit(payload);
  };

  const handleSuccessModalClose = () => {
    setShowSuccessModal(false);
    setShowVideoModal(true);
  };

  const handleVideoModalClose = () => {
    setShowVideoModal(false);
  };

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

  const stepIcons = [Building2, Wrench, AlertTriangle, Shield, FileText, ClipboardCheck, User];

  return (
    <>
      {/* Success Modal - always rendered */}
      <SubmissionSuccessModal
        isOpen={showSuccessModal}
        onClose={handleSuccessModalClose}
        referenceId={submissionResult.referenceId}
        pdfAttached={submissionResult.pdfAttached}
        userEmail={submissionResult.userEmail}
      />

      {/* Video Modal - shows after success modal is closed */}
      <SubmissionVideoModal
        isOpen={showVideoModal}
        onClose={handleVideoModalClose}
      />

      {/* Main Modal - only when isOpen */}
      {isOpen && createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center overscroll-none">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
            onClick={handleClose}
          />

          {/* Modal */}
          <div 
            className="relative z-10 w-full max-w-3xl mx-4 bg-card rounded-lg shadow-2xl overflow-hidden animate-scale-in flex flex-col"
            style={{ maxHeight: `calc(100dvh - 32px)` }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-border bg-muted/30 shrink-0">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  {(() => {
                    const Icon = stepIcons[currentStep - 1];
                    return <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />;
                  })()}
                </div>
                <div>
                  <h2 className="text-base sm:text-lg font-semibold text-foreground">
                    {t("simulator.title")}
                  </h2>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {t(`simulator.step${currentStep}.title`)}
                  </p>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="p-2 rounded-lg hover:bg-muted transition-colors touch-manipulation"
                aria-label={t("simulator.close")}
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>

            {/* Progress */}
            <div className="px-4 sm:px-6 py-2 sm:py-3 border-b border-border bg-muted/10 shrink-0">
              <div className="flex items-center gap-1 sm:gap-2">
                {Array.from({ length: totalSteps }).map((_, i) => (
                  <div key={i} className="flex items-center gap-1 sm:gap-2 flex-1">
                    <div
                      className={cn(
                        "w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium transition-all",
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

            {/* Content - scrollable */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-1 overscroll-contain">
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
              {currentStep === 6 && <Step6 data={data} t={t} generateAnalysis={generateOperationalAnalysis} />}
              {currentStep === 7 && (
                <Step7
                  data={data}
                  onSet={setSingleValue}
                  t={t}
                  useGeolocation={useGeolocation}
                  validationErrors={showValidationErrors ? validationErrors : {}}
                />
              )}
            </div>

            {/* Footer - fixed at bottom with proper mobile handling */}
            <div 
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-t border-border bg-muted/10 shrink-0 gap-3 sm:gap-0"
              style={{ paddingBottom: `max(12px, env(safe-area-inset-bottom, 12px))` }}
            >
              <div className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left order-2 sm:order-1">
                {t("simulator.stepIndicator", { current: currentStep, total: totalSteps })}
              </div>
              <div className="flex items-center justify-center sm:justify-end gap-2 sm:gap-3 order-1 sm:order-2">
                {currentStep > 1 && (
                  <Button 
                    variant="outline" 
                    onClick={handleBack} 
                    className="gap-1 sm:gap-2 flex-1 sm:flex-none touch-manipulation min-h-[48px] sm:min-h-[40px]"
                    type="button"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    {t("simulator.back")}
                  </Button>
                )}
                {currentStep < totalSteps ? (
                  <Button 
                    onClick={handleNext}
                    type="button"
                    className="gap-1 sm:gap-2 bg-accent hover:bg-accent/90 text-accent-foreground flex-1 sm:flex-none touch-manipulation min-h-[48px] sm:min-h-[40px]"
                  >
                    {t("simulator.next")}
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    type="button"
                    className="gap-1 sm:gap-2 bg-accent hover:bg-accent/90 text-accent-foreground disabled:opacity-50 flex-1 sm:flex-none touch-manipulation min-h-[48px] sm:min-h-[40px] active:scale-[0.98]"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        {t("simulator.submitting")}
                      </>
                    ) : (
                      t("simulator.requestReview")
                    )}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
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
  const industries = ["manufacturing", "logistics", "facility", "infrastructure", "energy", "other"];
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

// Step 6: Operational Analysis
const Step6 = ({ 
  data, 
  t, 
  generateAnalysis 
}: { 
  data: SimulatorData; 
  t: (key: string, options?: any) => string;
  generateAnalysis: () => {
    operationalObservations: string[];
    riskExposure: string[];
    executionReadiness: string;
    advisoryDirection: string[];
  };
}) => {
  const analysis = generateAnalysis();
  const hasData = data.industry || data.operationType.length > 0;

  return (
    <div className="space-y-6">
      <p className="text-muted-foreground">{t("simulator.step6.description")}</p>

      {!hasData ? (
        <div className="p-6 rounded-lg bg-muted/50 text-center">
          <p className="text-muted-foreground">{t("simulator.step6.noData")}</p>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Operational Observations */}
          {analysis.operationalObservations.length > 0 && (
            <div className="p-4 rounded-lg border border-border bg-card">
              <h4 className="text-sm font-semibold text-foreground mb-3">
                {t("simulator.step6.observationsTitle")}
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {analysis.operationalObservations.map((obs, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>{obs}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Risk & Exposure Areas */}
          {analysis.riskExposure.length > 0 && (
            <div className="p-4 rounded-lg border border-destructive/30 bg-destructive/5">
              <h4 className="text-sm font-semibold text-foreground mb-3">
                {t("simulator.step6.risksTitle")}
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {analysis.riskExposure.map((risk, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                    <span>{risk}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Execution Readiness */}
          <div className="p-4 rounded-lg border border-border bg-card">
            <h4 className="text-sm font-semibold text-foreground mb-3">
              {t("simulator.step6.readinessTitle")}
            </h4>
            <p className="text-sm text-muted-foreground">{analysis.executionReadiness}</p>
          </div>

          {/* Advisory Direction */}
          {analysis.advisoryDirection.length > 0 && (
            <div className="p-4 rounded-lg border border-accent/30 bg-accent/5">
              <h4 className="text-sm font-semibold text-foreground mb-3">
                {t("simulator.step6.advisoryTitle")}
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {analysis.advisoryDirection.map((dir, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-accent mt-1">→</span>
                    <span>{dir}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Disclaimer */}
      <div className="p-4 rounded-lg bg-muted/30 border border-border">
        <p className="text-xs text-muted-foreground leading-relaxed">
          {t("simulator.step6.disclaimer")}
        </p>
      </div>
    </div>
  );
};

// Step 7: Personal & Company Details with Location Autocomplete
const Step7 = ({ 
  data, 
  onSet, 
  t,
  useGeolocation: useGeo,
  validationErrors = {},
}: { 
  data: SimulatorData; 
  onSet: (field: keyof SimulatorData, value: string) => void;
  t: (key: string, options?: any) => string;
  useGeolocation: () => { location: { country: string; countryCode: string; city: string; confidence: string } | null; isLoading: boolean; error: string | null };
  validationErrors?: Record<string, boolean>;
}) => {
  const { location, isLoading: geoLoading } = useGeo();
  const [hasUserEditedCountry, setHasUserEditedCountry] = useState(false);
  const [hasUserEditedCity, setHasUserEditedCity] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState<string>("");

  // Auto-prefill from IP geolocation (only once, on first load)
  useEffect(() => {
    if (location && !hasUserEditedCountry && !data.country) {
      onSet("country", location.country);
      if (location.countryCode) {
        setSelectedCountryCode(location.countryCode);
      }
    }
  }, [location, hasUserEditedCountry, data.country, onSet]);

  useEffect(() => {
    if (location && !hasUserEditedCity && !data.city && location.city && location.confidence === "high") {
      onSet("city", location.city);
    }
  }, [location, hasUserEditedCity, data.city, onSet]);

  // Country suggestions
  const countrySuggestions = useMemo(() => {
    if (data.country.length < 2) return [];
    return searchCountries(data.country, 8).map((c) => c.name);
  }, [data.country]);

  // City suggestions - prioritize selected country
  const citySuggestions = useMemo(() => {
    if (data.city.length < 2) return [];
    return searchCities(data.city, selectedCountryCode, 10);
  }, [data.city, selectedCountryCode]);

  // Handle country selection
  const handleCountryChange = (value: string) => {
    setHasUserEditedCountry(true);
    onSet("country", value);
    
    // Try to find country code
    const match = COUNTRIES.find(
      (c) => c.name.toLowerCase() === value.toLowerCase()
    );
    if (match) {
      setSelectedCountryCode(match.code);
    }
  };

  const handleCountrySelect = (value: string) => {
    const match = COUNTRIES.find(
      (c) => c.name.toLowerCase() === value.toLowerCase()
    );
    if (match) {
      setSelectedCountryCode(match.code);
    }
  };

  // Handle city change
  const handleCityChange = (value: string) => {
    setHasUserEditedCity(true);
    onSet("city", value);
  };

  return (
    <div className="space-y-6">
      <p className="text-muted-foreground">{t("simulator.step7.description")}</p>

      {/* Personal Details */}
      <div className="p-4 rounded-lg border border-border bg-card">
        <h4 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
          <User className="w-4 h-4 text-accent" />
          {t("simulator.step7.personalTitle")}
        </h4>
        <div className="space-y-4">
          <div>
            <label className={cn(
              "text-sm font-medium block mb-1.5",
              validationErrors.fullName ? "text-destructive" : "text-foreground"
            )}>
              {t("simulator.step7.fullName")} *
            </label>
            <input
              type="text"
              value={data.fullName}
              onChange={(e) => onSet("fullName", e.target.value)}
              placeholder={t("simulator.step7.fullNamePlaceholder")}
              className={cn(
                "w-full px-4 py-2.5 rounded-lg border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-colors",
                validationErrors.fullName 
                  ? "border-destructive focus:ring-destructive/50" 
                  : "border-border focus:ring-accent/50"
              )}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={cn(
                "text-sm font-medium block mb-1.5",
                validationErrors.email ? "text-destructive" : "text-foreground"
              )}>
                {t("simulator.step7.email")} *
              </label>
              <input
                type="email"
                value={data.email}
                onChange={(e) => onSet("email", e.target.value)}
                placeholder={t("simulator.step7.emailPlaceholder")}
                className={cn(
                  "w-full px-4 py-2.5 rounded-lg border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-colors",
                  validationErrors.email 
                    ? "border-destructive focus:ring-destructive/50" 
                    : "border-border focus:ring-accent/50"
                )}
              />
            </div>
            <div>
              <label className={cn(
                "text-sm font-medium block mb-1.5",
                validationErrors.phone ? "text-destructive" : "text-foreground"
              )}>
                {t("simulator.step7.phone")} *
              </label>
              <input
                type="tel"
                value={data.phone}
                onChange={(e) => onSet("phone", e.target.value)}
                placeholder={t("simulator.step7.phonePlaceholder")}
                className={cn(
                  "w-full px-4 py-2.5 rounded-lg border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-colors",
                  validationErrors.phone 
                    ? "border-destructive focus:ring-destructive/50" 
                    : "border-border focus:ring-accent/50"
                )}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Company Details */}
      <div className="p-4 rounded-lg border border-border bg-card">
        <h4 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
          <Building2 className="w-4 h-4 text-accent" />
          {t("simulator.step7.companyTitle")}
        </h4>
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={cn(
                "text-sm font-medium block mb-1.5",
                validationErrors.companyName ? "text-destructive" : "text-foreground"
              )}>
                {t("simulator.step7.companyName")} *
              </label>
              <input
                type="text"
                value={data.companyName}
                onChange={(e) => onSet("companyName", e.target.value)}
                placeholder={t("simulator.step7.companyNamePlaceholder")}
                className={cn(
                  "w-full px-4 py-2.5 rounded-lg border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-colors",
                  validationErrors.companyName 
                    ? "border-destructive focus:ring-destructive/50" 
                    : "border-border focus:ring-accent/50"
                )}
              />
            </div>
            <div>
              <label className={cn(
                "text-sm font-medium block mb-1.5",
                validationErrors.role ? "text-destructive" : "text-foreground"
              )}>
                {t("simulator.step7.role")} *
              </label>
              <input
                type="text"
                value={data.role}
                onChange={(e) => onSet("role", e.target.value)}
                placeholder={t("simulator.step7.rolePlaceholder")}
                className={cn(
                  "w-full px-4 py-2.5 rounded-lg border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-colors",
                  validationErrors.role 
                    ? "border-destructive focus:ring-destructive/50" 
                    : "border-border focus:ring-accent/50"
                )}
              />
            </div>
          </div>
          
          {/* Location Fields with Autocomplete */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <LocationAutocomplete
              value={data.country}
              onChange={handleCountryChange}
              onSelect={handleCountrySelect}
              suggestions={countrySuggestions}
              placeholder={t("simulator.step7.countryPlaceholder")}
              label={t("simulator.step7.country")}
              required
              isPrefilled={!hasUserEditedCountry && !!location?.country}
              isLoading={geoLoading}
              hasError={validationErrors.country}
            />
            <LocationAutocomplete
              value={data.city}
              onChange={handleCityChange}
              suggestions={citySuggestions}
              placeholder={t("simulator.step7.cityPlaceholder")}
              label={t("simulator.step7.city")}
              required
              isPrefilled={!hasUserEditedCity && !!location?.city}
              isLoading={geoLoading && !data.country}
              hasError={validationErrors.city}
            />
          </div>
        </div>
      </div>

      {/* Required Fields Note */}
      <div className="p-4 rounded-lg bg-muted/30 border border-border">
        <p className="text-xs text-muted-foreground leading-relaxed">
          {t("simulator.step7.requiredNote")}
        </p>
      </div>
    </div>
  );
};

export default ProjectSimulator;
