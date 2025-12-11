import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="section-label mb-4">Get Started</p>
          <h2 className="section-title mb-6">
            Ready to transform{" "}
            <span className="text-muted-foreground">your operations?</span>
          </h2>
          <p className="section-subtitle mx-auto mb-8">
            Let's discuss how AI automation can address your specific challenges.
            Schedule a consultation with our team.
          </p>

          <Button size="lg" className="group" asChild>
            <a href="/book">
              Schedule Consultation
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>

          <p className="text-sm text-muted-foreground mt-8">
            Enterprise inquiries:{" "}
            <a
              href="mailto:support@ovelon-prime.com"
              className="text-accent hover:underline"
            >
              support@ovelon-prime.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
