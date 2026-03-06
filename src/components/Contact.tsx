import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useTranslation } from "react-i18next";
import { useSubmitContact } from "@/hooks/use-submit-contact";
import { ContactSuccessModal } from "@/components/ContactSuccessModal";
import { ScrollReveal } from "./ScrollReveal";
import { Loader2, Mail, MapPin } from "lucide-react";
import contactBg from "@/assets/u3714841198_Minimalistic_abstract_background_designed_for_a_c_e56f8162-43f3-47ed-8b5e-63ec90910a05_0.png?format=webp&quality=80";
import rightBlockImage from "@/assets/contact-section.png";

/** Lazy-loads the Google Maps iframe only when visible */
const LazyMap = () => {
  const ref = useRef<HTMLIFrameElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !loaded) {
          el.src =
            "https://maps.google.com/maps?q=1001+Brickell+Bay+Dr,+Miami,+FL+33131&t=&z=15&ie=UTF8&iwloc=&output=embed";
          setLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [loaded]);

  return (
    <iframe
      ref={ref}
      title="Ovelon Prime Location"
      src="about:blank"
      className="w-full h-full border-0"
      loading="lazy"
    />
  );
};

export const Contact = () => {
  const { t } = useTranslation();

  const sectionRef = useRef<HTMLElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const isMobile =
      typeof window !== "undefined" &&
      /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const speed = isMobile ? 0.18 : 0.38;

    let rafId: number;

    const updateParallax = () => {
      if (!sectionRef.current || !bgRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();

      if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
        const offset = rect.top * speed;
        bgRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
      }

      rafId = requestAnimationFrame(updateParallax);
    };

    rafId = requestAnimationFrame(updateParallax);

    return () => cancelAnimationFrame(rafId);
  }, []);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [requestDetails, setRequestDetails] = useState("");

  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [formError, setFormError] = useState<string | null>(null);

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [referenceId, setReferenceId] = useState<string | undefined>();

  const { submit, isSubmitting } = useSubmitContact({
    onSuccess: (result) => {
      setReferenceId(result.referenceId);
      setShowSuccessModal(true);

      setFirstName("");
      setLastName("");
      setBusinessName("");
      setBusinessEmail("");
      setRequestDetails("");
      setErrors({});
      setFormError(null);
    },
    onError: (error) => setFormError(error),
  });

  useEffect(() => {
    if (!businessEmail) return;
    if (businessName.trim().length > 0) return;

    const match = businessEmail.match(/@([^\.]+)/);
    if (!match) return;

    const company = match[1]
      .replace(/[^a-zA-Z0-9]/g, "")
      .replace(/\b\w/g, (c) => c.toUpperCase());

    if (company.length > 1) setBusinessName(company);
  }, [businessEmail]);

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setFormError(null);

    const newErrors: Record<string, boolean> = {};

    if (!firstName.trim()) newErrors.firstName = true;
    if (!lastName.trim()) newErrors.lastName = true;
    if (!businessName.trim()) newErrors.businessName = true;
    if (!businessEmail.trim() || !validateEmail(businessEmail))
      newErrors.businessEmail = true;
    if (!requestDetails.trim()) newErrors.requestDetails = true;

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setFormError(
        t(
          "contactForm.validationError",
          "Please fill in all required fields correctly."
        )
      );
      return;
    }

    await submit({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      businessName: businessName.trim(),
      businessEmail: businessEmail.trim(),
      requestDetails: requestDetails.trim(),
    });
  };

  return (
    <>
      <section
        ref={sectionRef}
        id="contact"
        className="relative py-28 sm:py-32 overflow-hidden isolate"
      >
        <div ref={bgRef} className="absolute inset-0 will-change-transform">
          <img
            src={contactBg}
            alt=""
            className="w-full h-[125%] object-cover contrast-[1.08] saturate-[1.05]"
          />

          <div className="absolute inset-0 bg-background/35" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/25 via-transparent to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* FORM */}
            <div className="bg-card rounded-2xl shadow-xl p-10 border border-border">
              <ScrollReveal variant="fade-up">

                <p className="mb-6 text-xs tracking-[0.3em] font-semibold uppercase text-accent text-center">
                  ENGAGE
                </p>

                <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-center">
                  Get in Touch
                </h2>

                <p className="text-lg text-muted-foreground mb-12 text-center">
                  Tell us about your business requirements.
                </p>

              </ScrollReveal>

              <ScrollReveal variant="fade-up" delay={200}>
                <form onSubmit={handleSubmit} className="space-y-6">

                  {formError && (
                    <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/30">
                      <p className="text-sm text-destructive">{formError}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    <div className="space-y-2">
                      <Label>First name *</Label>
                      <Input value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
                    </div>

                    <div className="space-y-2">
                      <Label>Last name *</Label>
                      <Input value={lastName} onChange={(e)=>setLastName(e.target.value)} />
                    </div>

                  </div>

                  <div className="space-y-2">
                    <Label>Business name *</Label>
                    <Input value={businessName} onChange={(e)=>setBusinessName(e.target.value)} />
                  </div>

                  <div className="space-y-2">
                    <Label>Business email *</Label>
                    <Input
                      type="email"
                      value={businessEmail}
                      onChange={(e)=>setBusinessEmail(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Request details *</Label>
                    <Textarea
                      value={requestDetails}
                      onChange={(e)=>setRequestDetails(e.target.value)}
                      className="min-h-[120px]"
                    />
                  </div>

                  <div className="flex justify-center pt-4">
                    <Button type="submit" size="lg" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin"/>
                          Submitting
                        </>
                      ) : (
                        "Submit"
                      )}
                    </Button>
                  </div>

                </form>
              </ScrollReveal>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-col gap-8">

              <div className="text-center">

                <h2 className="text-4xl font-semibold mb-6">
                  Office Location
                </h2>

                <p className="text-muted-foreground mb-8">
                  Our operational hub is located in Miami's Brickell district.
                </p>

                <div className="flex flex-col items-center gap-4">

                  <a
                    href="mailto:info@ovelon-prime.com"
                    className="inline-flex items-center gap-2 font-medium hover:text-accent"
                  >
                    <Mail className="w-4 h-4 text-accent"/>
                    info@ovelon-prime.com
                  </a>

                  <a
                    href="https://maps.google.com/?q=1001+Brickell+Bay+Dr,+Miami,+FL+33131"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent"
                  >
                    <MapPin className="w-4 h-4 text-accent"/>
                    1001 Brickell Bay Drive, Miami, FL 33131
                  </a>

                </div>

              </div>

              <img
                src={rightBlockImage}
                alt="Operational environment"
                className="rounded-2xl shadow-md"
              />

              <div className="rounded-2xl overflow-hidden shadow-lg border border-border h-[320px]">
                <LazyMap/>
              </div>

            </div>

          </div>
        </div>
      </section>

      <ContactSuccessModal
        isOpen={showSuccessModal}
        onClose={()=>setShowSuccessModal(false)}
        referenceId={referenceId}
      />
    </>
  );
};