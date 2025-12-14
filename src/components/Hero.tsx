import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/chipAI2.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-badge-bg border border-border animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-badge-dot" />
            <span className="text-sm font-medium text-muted-foreground">
              Automation For Industrial Operations
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight animate-fade-in [animation-delay:100ms] opacity-0">
            Intelligent automation{" "}
            <span className="text-muted-foreground">for mission-critical industrial environments</span>
          </h1>

          {/* Subheadline → LIGHT BLACK */}
          <p className="mt-6 text-lg sm:text-xl text-black/80 max-w-2xl mx-auto animate-fade-in opacity-0 [animation-delay:240ms]">
            We design and implement automation systems that reduce manual work,
            eliminate operational errors, and scale complex industrial workflows.
          </p>

          {/* CTA */}
          <div className="animate-fade-in [animation-delay:300ms] opacity-0">
            <Button size="lg" className="group" asChild>
              <a href="#services">
                Explore Solutions
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};
