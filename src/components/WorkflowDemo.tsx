import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Calendar,
  CheckCircle,
  PhoneOff,
  PhoneIncoming,
  MessageSquare,
  Bell,
  Mail,
  Users,
  Workflow,
  Clock,
  CalendarCheck,
  UserCheck,
  RefreshCw,
  AlertTriangle,
  ShieldAlert,
  UserCog,
  ArrowUpCircle,
  Activity,
  FileText,
  Video,
  Globe,
  MonitorPlay,
  ClipboardCheck,
  BarChart3,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "./ScrollReveal";

interface DemoTabProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  icon: React.ElementType;
}

const DemoTab = ({ active, onClick, children, icon: Icon }: DemoTabProps) => (
  <button
    onClick={onClick}
    className={cn(
      "flex items-center gap-2 px-4 sm:px-6 py-3 text-sm font-medium transition-all duration-300 border-b-2 whitespace-nowrap",
      active
        ? "border-accent text-primary-foreground"
        : "border-transparent text-primary-foreground/50 hover:text-primary-foreground/70"
    )}
  >
    <Icon className="w-4 h-4" />
    {children}
  </button>
);

const MissedCallDemo = () => {
  const { t } = useTranslation();
  const [stage, setStage] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const stages = [
    { labelKey: "workflowDemo.call.stage1", icon: PhoneIncoming, color: "text-accent" },
    { labelKey: "workflowDemo.call.stage2", icon: PhoneOff, color: "text-red-400", isError: true },
    { labelKey: "workflowDemo.call.stage3", icon: Phone, color: "text-green-400" },
    { labelKey: "workflowDemo.call.stage4", icon: MessageSquare, color: "text-accent" },
    { labelKey: "workflowDemo.call.stage5", icon: CheckCircle, color: "text-green-400" },
  ];

  const runDemo = () => {
    setIsRunning(true);
    setStage(0);

    const timings = [0, 2000, 4000, 6000, 8000];
    timings.forEach((time, index) => {
      setTimeout(() => {
        setStage(index);
        if (index === stages.length - 1) {
          setTimeout(() => setIsRunning(false), 2000);
        }
      }, time);
    });
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <p className="text-primary-foreground/60 text-sm max-w-xl mx-auto">
          {t("workflowDemo.call.description")}
        </p>
      </div>

      <div className="flex justify-center">
        <div className="relative w-full max-w-md p-8 border border-primary-foreground/10 bg-primary/50 min-h-[200px] flex items-center justify-center">
          {!isRunning ? (
            <button
              onClick={runDemo}
              className="flex flex-col items-center gap-4 group cursor-pointer"
            >
              <div className="w-20 h-20 rounded-full border-2 border-accent/50 flex items-center justify-center group-hover:border-accent transition-colors">
                <PhoneIncoming className="w-8 h-8 text-accent" />
              </div>
              <span className="text-xs tracking-widest uppercase text-primary-foreground/60">
                {t("workflowDemo.call.simulate")}
              </span>
            </button>
          ) : (
            <motion.div
              key={stage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="w-20 h-20 rounded-full border-2 border-primary-foreground/20 flex items-center justify-center">
                {(() => {
                  const StageIcon = stages[stage].icon;
                  return <StageIcon className={cn("w-10 h-10", stages[stage].color)} />;
                })()}
              </div>
              <p className="text-primary-foreground font-medium text-center">
                {t(stages[stage].labelKey)}
              </p>
              {stage === 1 && (
                <p className="text-red-400/80 text-sm">{t("workflowDemo.call.revenueLost")}</p>
              )}
              {stage === 4 && (
                <p className="text-green-400/80 text-sm">{t("workflowDemo.call.revenueCaptured")}</p>
              )}
            </motion.div>
          )}
        </div>

        {isRunning && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {stages.map((_, index) => (
              <div
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-colors",
                  stage >= index ? "bg-accent" : "bg-primary-foreground/20"
                )}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const WorkflowAutomationDemo = () => {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState(-1);
  const [isRunning, setIsRunning] = useState(false);

  const workflowSteps = [
    { icon: PhoneIncoming, titleKey: "workflowDemo.workflow.step1.title", descKey: "workflowDemo.workflow.step1.desc", time: "7:32 PM" },
    { icon: Calendar, titleKey: "workflowDemo.workflow.step2.title", descKey: "workflowDemo.workflow.step2.desc", time: "7:32 PM" },
    { icon: CheckCircle, titleKey: "workflowDemo.workflow.step3.title", descKey: "workflowDemo.workflow.step3.desc", time: "7:33 PM" },
    { icon: Mail, titleKey: "workflowDemo.workflow.step4.title", descKey: "workflowDemo.workflow.step4.desc", time: "7:33 PM" },
    { icon: Bell, titleKey: "workflowDemo.workflow.step5.title", descKey: "workflowDemo.workflow.step5.desc", time: "7:33 PM" },
    { icon: Users, titleKey: "workflowDemo.workflow.step6.title", descKey: "workflowDemo.workflow.step6.desc", time: "7:33 PM" },
  ];

  const runWorkflow = () => {
    setIsRunning(true);
    setActiveStep(-1);

    workflowSteps.forEach((_, index) => {
      setTimeout(() => {
        setActiveStep(index);
        if (index === workflowSteps.length - 1) {
          setTimeout(() => setIsRunning(false), 2000);
        }
      }, index * 1200);
    });
  };

  const reset = () => {
    setActiveStep(-1);
    setIsRunning(false);
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <p className="text-primary-foreground/60 text-sm max-w-xl mx-auto">
          {t("workflowDemo.workflow.description")}
        </p>
      </div>

      <div className="space-y-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {workflowSteps.map((step, index) => {
            const StepIcon = step.icon;
            return (
              <motion.div
                key={index}
                animate={{
                  opacity: activeStep >= index ? 1 : 0.3,
                  scale: activeStep === index ? 1.02 : 1,
                }}
                transition={{ duration: 0.4 }}
                className={cn(
                  "relative p-6 border transition-all duration-500",
                  activeStep >= index
                    ? "border-accent/50 bg-accent/5"
                    : "border-primary-foreground/10 bg-primary/30"
                )}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-full border flex items-center justify-center shrink-0",
                      activeStep >= index ? "border-accent bg-accent/10" : "border-primary-foreground/20"
                    )}
                  >
                    <StepIcon
                      className={cn(
                        "w-5 h-5",
                        activeStep >= index ? "text-accent" : "text-primary-foreground/40"
                      )}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="text-primary-foreground font-medium text-sm truncate">
                        {t(step.titleKey)}
                      </h4>
                      <span
                        className={cn(
                          "text-xs shrink-0",
                          activeStep >= index ? "text-accent" : "text-primary-foreground/30"
                        )}
                      >
                        {step.time}
                      </span>
                    </div>
                    <p className="text-primary-foreground/50 text-xs">{t(step.descKey)}</p>
                  </div>
                </div>
                {activeStep >= index && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-2 right-2"
                  >
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="flex justify-center">
          {!isRunning && activeStep === -1 ? (
            <Button
              onClick={runWorkflow}
              variant="outline"
              className="border-accent/50 text-accent hover:bg-accent/10"
            >
              <Workflow className="w-4 h-4 mr-2" />
              {t("workflowDemo.workflow.runDemo")}
            </Button>
          ) : !isRunning && activeStep >= 0 ? (
            <div className="flex flex-col items-center gap-4">
              <p className="text-green-400 text-sm flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                {t("workflowDemo.workflow.complete")}
              </p>
              <Button
                onClick={reset}
                variant="ghost"
                className="text-primary-foreground/60 hover:text-primary-foreground"
              >
                {t("workflowDemo.workflow.reset")}
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-primary-foreground/60">
              <div className="w-4 h-4 border-2 border-accent border-t-transparent rounded-full animate-spin" />
              {t("workflowDemo.workflow.processing")}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const AppointmentSchedulingDemo = () => {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState(-1);
  const [isRunning, setIsRunning] = useState(false);

  const steps = [
    { icon: AlertTriangle, titleKey: "workflowDemo.appointment.step1.title", descKey: "workflowDemo.appointment.step1.desc", time: "09:15 AM" },
    { icon: ShieldAlert, titleKey: "workflowDemo.appointment.step2.title", descKey: "workflowDemo.appointment.step2.desc", time: "09:15 AM" },
    { icon: UserCog, titleKey: "workflowDemo.appointment.step3.title", descKey: "workflowDemo.appointment.step3.desc", time: "09:16 AM" },
    { icon: ArrowUpCircle, titleKey: "workflowDemo.appointment.step4.title", descKey: "workflowDemo.appointment.step4.desc", time: "09:16 AM" },
    { icon: Activity, titleKey: "workflowDemo.appointment.step5.title", descKey: "workflowDemo.appointment.step5.desc", time: "09:16 AM" },
    { icon: FileText, titleKey: "workflowDemo.appointment.step6.title", descKey: "workflowDemo.appointment.step6.desc", time: "09:17 AM" },
  ];

  const runDemo = () => {
    setIsRunning(true);
    setActiveStep(-1);

    steps.forEach((_, index) => {
      setTimeout(() => {
        setActiveStep(index);
        if (index === steps.length - 1) {
          setTimeout(() => setIsRunning(false), 2000);
        }
      }, index * 1200);
    });
  };

  const reset = () => {
    setActiveStep(-1);
    setIsRunning(false);
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <p className="text-primary-foreground/60 text-sm max-w-xl mx-auto">
          {t("workflowDemo.appointment.description")}
        </p>
      </div>

      <div className="space-y-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {steps.map((step, index) => {
            const StepIcon = step.icon;
            return (
              <motion.div
                key={index}
                animate={{
                  opacity: activeStep >= index ? 1 : 0.3,
                  scale: activeStep === index ? 1.02 : 1,
                }}
                transition={{ duration: 0.4 }}
                className={cn(
                  "relative p-6 border transition-all duration-500",
                  activeStep >= index
                    ? "border-accent/50 bg-accent/5"
                    : "border-primary-foreground/10 bg-primary/30"
                )}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-full border flex items-center justify-center shrink-0",
                      activeStep >= index ? "border-accent bg-accent/10" : "border-primary-foreground/20"
                    )}
                  >
                    <StepIcon
                      className={cn(
                        "w-5 h-5",
                        activeStep >= index ? "text-accent" : "text-primary-foreground/40"
                      )}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="text-primary-foreground font-medium text-sm truncate">
                        {t(step.titleKey)}
                      </h4>
                      <span
                        className={cn(
                          "text-xs shrink-0",
                          activeStep >= index ? "text-accent" : "text-primary-foreground/30"
                        )}
                      >
                        {step.time}
                      </span>
                    </div>
                    <p className="text-primary-foreground/50 text-xs">{t(step.descKey)}</p>
                  </div>
                </div>
                {activeStep >= index && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-2 right-2"
                  >
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="flex justify-center">
          {!isRunning && activeStep === -1 ? (
            <Button
              onClick={runDemo}
              variant="outline"
              className="border-accent/50 text-accent hover:bg-accent/10"
            >
              <CalendarCheck className="w-4 h-4 mr-2" />
              {t("workflowDemo.appointment.runDemo")}
            </Button>
          ) : !isRunning && activeStep >= 0 ? (
            <div className="flex flex-col items-center gap-4">
              <p className="text-green-400 text-sm flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                {t("workflowDemo.appointment.complete")}
              </p>
              <Button
                onClick={reset}
                variant="ghost"
                className="text-primary-foreground/60 hover:text-primary-foreground"
              >
                {t("workflowDemo.appointment.reset")}
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-primary-foreground/60">
              <div className="w-4 h-4 border-2 border-accent border-t-transparent rounded-full animate-spin" />
              {t("workflowDemo.appointment.processing")}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const SafetyVideoManualDemo = () => {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState(-1);
  const [isRunning, setIsRunning] = useState(false);

  const steps = [
    { icon: AlertTriangle, titleKey: "workflowDemo.safety.step1.title", descKey: "workflowDemo.safety.step1.desc", time: "10:00 AM" },
    { icon: Video, titleKey: "workflowDemo.safety.step2.title", descKey: "workflowDemo.safety.step2.desc", time: "10:01 AM" },
    { icon: Globe, titleKey: "workflowDemo.safety.step3.title", descKey: "workflowDemo.safety.step3.desc", time: "10:02 AM" },
    { icon: MonitorPlay, titleKey: "workflowDemo.safety.step4.title", descKey: "workflowDemo.safety.step4.desc", time: "10:02 AM" },
    { icon: ClipboardCheck, titleKey: "workflowDemo.safety.step5.title", descKey: "workflowDemo.safety.step5.desc", time: "10:03 AM" },
    { icon: BarChart3, titleKey: "workflowDemo.safety.step6.title", descKey: "workflowDemo.safety.step6.desc", time: "10:03 AM" },
  ];

  const runDemo = () => {
    setIsRunning(true);
    setActiveStep(-1);
    steps.forEach((_, index) => {
      setTimeout(() => {
        setActiveStep(index);
        if (index === steps.length - 1) {
          setTimeout(() => setIsRunning(false), 2000);
        }
      }, index * 1200);
    });
  };

  const reset = () => {
    setActiveStep(-1);
    setIsRunning(false);
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <p className="text-primary-foreground/60 text-sm max-w-xl mx-auto">
          {t("workflowDemo.safety.description")}
        </p>
      </div>

      <div className="space-y-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {steps.map((step, index) => {
            const StepIcon = step.icon;
            return (
              <motion.div
                key={index}
                animate={{
                  opacity: activeStep >= index ? 1 : 0.3,
                  scale: activeStep === index ? 1.02 : 1,
                }}
                transition={{ duration: 0.4 }}
                className={cn(
                  "relative p-6 border transition-all duration-500",
                  activeStep >= index
                    ? "border-accent/50 bg-accent/5"
                    : "border-primary-foreground/10 bg-primary/30"
                )}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-full border flex items-center justify-center shrink-0",
                      activeStep >= index ? "border-accent bg-accent/10" : "border-primary-foreground/20"
                    )}
                  >
                    <StepIcon
                      className={cn(
                        "w-5 h-5",
                        activeStep >= index ? "text-accent" : "text-primary-foreground/40"
                      )}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="text-primary-foreground font-medium text-sm truncate">
                        {t(step.titleKey)}
                      </h4>
                      <span
                        className={cn(
                          "text-xs shrink-0",
                          activeStep >= index ? "text-accent" : "text-primary-foreground/30"
                        )}
                      >
                        {step.time}
                      </span>
                    </div>
                    <p className="text-primary-foreground/50 text-xs">{t(step.descKey)}</p>
                  </div>
                </div>
                {activeStep >= index && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-2 right-2"
                  >
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="flex justify-center">
          {!isRunning && activeStep === -1 ? (
            <Button
              onClick={runDemo}
              variant="outline"
              className="border-accent/50 text-accent hover:bg-accent/10"
            >
              <ShieldCheck className="w-4 h-4 mr-2" />
              {t("workflowDemo.safety.runDemo")}
            </Button>
          ) : !isRunning && activeStep >= 0 ? (
            <div className="flex flex-col items-center gap-4">
              <p className="text-green-400 text-sm flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                {t("workflowDemo.safety.complete")}
              </p>
              <Button
                onClick={reset}
                variant="ghost"
                className="text-primary-foreground/60 hover:text-primary-foreground"
              >
                {t("workflowDemo.safety.reset")}
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-primary-foreground/60">
              <div className="w-4 h-4 border-2 border-accent border-t-transparent rounded-full animate-spin" />
              {t("workflowDemo.safety.processing")}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const WorkflowDemo = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<"workflow" | "call" | "appointment" | "safety">("workflow");

  return (
    <section data-section="workflow-demo" className="py-32 px-6 md:px-12 bg-primary">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal variant="fade-up" className="text-center mb-12">
          <span className="text-xs tracking-[0.4em] text-accent/80 uppercase mb-6 block">
            {t("workflowDemo.badge")}
          </span>
          <h2 className="text-3xl md:text-5xl font-light leading-tight max-w-3xl mx-auto text-primary-foreground">
            {t("workflowDemo.title")}
          </h2>
        </ScrollReveal>

        <div className="flex justify-center mb-8 border-b border-primary-foreground/10 overflow-x-auto scrollbar-none">
          <DemoTab
            active={activeTab === "workflow"}
            onClick={() => setActiveTab("workflow")}
            icon={Workflow}
          >
            {t("workflowDemo.tabs.workflow")}
          </DemoTab>
          <DemoTab
            active={activeTab === "call"}
            onClick={() => setActiveTab("call")}
            icon={Phone}
          >
            {t("workflowDemo.tabs.call")}
          </DemoTab>
          <DemoTab
            active={activeTab === "appointment"}
            onClick={() => setActiveTab("appointment")}
            icon={ShieldAlert}
          >
            {t("workflowDemo.tabs.appointment")}
          </DemoTab>
          <DemoTab
            active={activeTab === "safety"}
            onClick={() => setActiveTab("safety")}
            icon={ShieldCheck}
          >
            {t("workflowDemo.tabs.safety")}
          </DemoTab>
        </div>

        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeTab === "workflow" ? (
              <motion.div
                key="workflow"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <WorkflowAutomationDemo />
              </motion.div>
            ) : activeTab === "call" ? (
              <motion.div
                key="call"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <MissedCallDemo />
              </motion.div>
            ) : activeTab === "appointment" ? (
              <motion.div
                key="appointment"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <AppointmentSchedulingDemo />
              </motion.div>
            ) : (
              <motion.div
                key="safety"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <SafetyVideoManualDemo />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};