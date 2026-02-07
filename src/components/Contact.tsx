import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useTranslation } from "react-i18next";
import { useSubmitContact } from "@/hooks/use-submit-contact";
import { ContactSuccessModal } from "@/components/ContactSuccessModal";
import { ScrollReveal } from "./ScrollReveal";
import { Loader2 } from "lucide-react";
import contactBg from "@/assets/u3714841198_Minimalistic_abstract_background_designed_for_a_c_e56f8162-43f3-47ed-8b5e-63ec90910a05_0.png?format=webp&quality=80";
import rightBlockImage from "@/assets/contact.png"; // <-- Replace with your image path

export const Contact = () => {
  const { t } = useTranslation();

  // ===============================
  // PARALLAX
  // ===============================
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

  // ===============================
  // FORM STATE
  // ===============================
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

      // Reset form
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

  // ===============================
  // ELITE EMAIL → COMPANY DETECTION
  // ===============================
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

  // ===============================
  // VALIDATION
  // ===============================
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
        t("contactForm.validationError", "Please fill in all required fields correctly.")
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
        {/* Parallax Background */}
        <div
          ref={bgRef}
          className="absolute inset-0 will-change-transform"
          style={{ transform: "translate3d(0,0,0)" }}
        >
          <img
            src={contactBg}
            alt=""
            loading="lazy"
            decoding="async"
            className="w-full h-[125%] object-cover contrast-[1.08] saturate-[1.05]"
          />
          <div className="absolute inset-0 bg-background/35" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/25 via-transparent to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
        </div>

        {/* Content Grid: Form + Info */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

            {/* LEFT: FORM */}
            <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-100">
              <ScrollReveal variant="fade-up">
                <p className="mb-6 text-xs sm:text-sm tracking-[0.3em] font-semibold uppercase text-[#3A8F94]">
                  {t("contact.label", "ENGAGE")}
                </p>
                <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-8 text-foreground/80">
                  <span className="block mt-2 text-foreground/70">{t("contact.title")}</span>
                  {t("contact.titleHighlight")}
                </h2>
                <p className="text-lg sm:text-xl text-foreground/60 max-w-2xl mx-auto mb-12">
                  {t("contact.subtitle")}
                </p>
              </ScrollReveal>

              <ScrollReveal variant="fade-up" delay={200}>
                <form onSubmit={handleSubmit} autoComplete="on" className="space-y-6">
                  {formError && (
                    <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50">
                      <p className="text-sm text-red-600 dark:text-red-400">{formError}</p>
                    </div>
                  )}

                  {/* Names */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>{t("contactForm.firstName", "First Name")} *</Label>
                      <Input
                        autoComplete="given-name"
                        placeholder={t("contactForm.firstNamePlaceholder", "John")}
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>{t("contactForm.lastName", "Last Name")} *</Label>
                      <Input
                        autoComplete="family-name"
                        placeholder={t("contactForm.lastNamePlaceholder", "Doe")}
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  {/* Business */}
                  <div className="space-y-2">
                    <Label>{t("contactForm.businessName", "Business Name")} *</Label>
                    <Input
                      autoComplete="organization"
                      placeholder={t("contactForm.businessNamePlaceholder", "Acme Industries")}
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label>{t("contactForm.businessEmail", "Business Email")} *</Label>
                    <Input
                      type="email"
                      autoComplete="email"
                      placeholder={t("contactForm.businessEmailPlaceholder", "john@acme.com")}
                      value={businessEmail}
                      onChange={(e) => setBusinessEmail(e.target.value)}
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Request Details */}
                  <div className="space-y-2">
                    <Label>{t("contactForm.requestDetails", "Request Details")} *</Label>
                    <Textarea
                      placeholder={t(
                        "contactForm.requestDetailsPlaceholder",
                        "Briefly describe your operational challenges..."
                      )}
                      value={requestDetails}
                      onChange={(e) => setRequestDetails(e.target.value)}
                      disabled={isSubmitting}
                      className="min-h-[120px] resize-none"
                    />
                  </div>

                  <div className="flex justify-center pt-4">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto bg-slate-900 hover:bg-[#3A8F94]"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          {t("contactForm.submitting", "Submitting...")}
                        </>
                      ) : (
                        t("contactForm.submit", "Submit Request")
                      )}
                    </Button>
                  </div>
                </form>
              </ScrollReveal>
            </div>

            {/* RIGHT: INFO + IMAGE + MAP */}
            <div className="flex flex-col justify-between h-full">
              <div>
                <h2 className="text-4xl font-semibold mb-6 leading-tight text-center lg:text-left">
                  Engage with Ovelon Prime
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed text-center lg:text-left">
                  {t(
                    "contact.infoText1",
                    "If you have any questions or would like to discuss how we can support your business, please do not hesitate to contact us. Our team aims to respond within one hour."
                  )}
                </p>
                <p className="text-gray-600 mb-6 text-center lg:text-left">
                  {t("contact.infoText2", "Customer Support is available 24/7.")}
                </p>
                <p className="text-gray-600 mb-3 text-center lg:text-left">
                  {t(
                    "contact.infoText3",
                    "For general or client enquiries, please use the contact form below or email us at:"
                  )}
                </p>
                <a
                  href="mailto:info@ovelon-prime.com"
                  className="font-medium underline text-center lg:text-left block"
                >
                  info@ovelon-prime.com
                </a>
              </div>

              {/* Representative Image */}
              <div className="my-8">
                <img
                  src={rightBlockImage}
                  alt={t("contact.rightBlockImageAlt", "Ovelon Prime Illustration")}
                  className="w-full rounded-2xl shadow-md object-cover"
                />
              </div>

              {/* Google Maps */}
              <div className="mt-4">
                <div className="rounded-2xl overflow-hidden shadow-lg border h-[320px]">
                  <iframe
                    title="Ovelon Prime Location"
                    src="https://www.google.com/maps?q=Meydan+Grandstand+Dubai&output=embed"
                    loading="lazy"
                    className="w-full h-full border-0"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <ContactSuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        referenceId={referenceId}
      />
    </>
  );
};
