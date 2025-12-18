import { ShieldCheck, FileCheck, HardHat, Lock, Layers } from "lucide-react";

export const OperationalTrust = () => {
  return (
    <div className="mt-14">

      {/* Divider */}
      <div className="h-px w-full bg-border/60 mb-10" />

      {/* Heading */}
      <p className="text-xs tracking-widest uppercase text-muted-foreground text-center mb-6">
        Designed for regulated & safety-critical environments
      </p>

      {/* Trust items */}
      <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 text-sm text-muted-foreground">

        <div className="flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-foreground/70" />
          ISO 27001-aligned security principles
        </div>

        <div className="flex items-center gap-2">
          <FileCheck className="h-4 w-4 text-foreground/70" />
          ISO 9001-style process control
        </div>

        <div className="flex items-center gap-2">
          <HardHat className="h-4 w-4 text-foreground/70" />
          HSE-aware operational design
        </div>

        <div className="flex items-center gap-2">
          <Lock className="h-4 w-4 text-foreground/70" />
          Audit-ready documentation & controls
        </div>

        <div className="flex items-center gap-2">
          <Layers className="h-4 w-4 text-foreground/70" />
          Full client ownership — no black-box systems
        </div>
      </div>

      {/* CISO / governance line */}
      <p className="mt-8 text-xs text-muted-foreground text-center max-w-3xl mx-auto">
        Designed for CISO-reviewed environments with internal security governance,
        access control policies, and change-management procedures.
      </p>
    </div>
  );
};
