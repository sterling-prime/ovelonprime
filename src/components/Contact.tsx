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
            Let’s discuss how targeted automation can remove operational
            bottlenecks and improve reliability across your workflows.
          </p>

          {/* CTA — same behavior as navbar */}
          <div className="flex justify-center">
            <Button
              size="lg"
              variant="outline"
              onClick={() =>
                window.dispatchEvent(new Event("open-booking-modal"))
              }
            >
              Schedule Consultation
            </Button>
          </div>

          {/* Guarantee */}
          <p className="text-sm text-muted-foreground mt-6">
            Not satisfied? We offer a straightforward{" "}
            <span className="font-medium text-foreground">
              money-back guarantee
            </span>{" "}
            on qualifying engagements.
          </p>

          {/* Contact */}
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
