import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, Loader2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useTranslation } from "react-i18next";
import { useSubmitContact } from "@/hooks/use-submit-contact";
import { ContactSuccessModal } from "@/components/ContactSuccessModal";
import { ScrollReveal } from "./ScrollReveal";

const CAL_LINK = "https://cal.com/ovelon-prime/introduction-call";

const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.168!2d55.3048!3d25.1652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69d12e5b5555%3A0x2b2e2b2e2b2e2b2e!2sMeydan+Grandstand!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae";

export const Contact = () => {
  const { t } = useTranslation();

  // Form state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [requestDetails, setRequestDetails] = useState("");

  // Validation state
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [formError, setFormError] = useState<string | null>(null);

  // Success modal state
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
    onError: (error) => {
      setFormError(error);
    },
  });

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    const newErrors: Record<string, boolean> = {};
    if (!firstName.trim()) newErrors.firstName = true;
    if (!lastName.trim()) newErrors.lastName = true;
    if (!businessName.trim()) newErrors.businessName = true;
    if (!businessEmail.trim() || !validateEmail(businessEmail)) newErrors.businessEmail = true;
    if (!requestDetails.trim()) newErrors.requestDetails = true;

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setFormError(t("contactForm.validationError", "Please fill in all required fields correctly."));
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

  const handleScheduleCall = () => {
    window.open(CAL_LINK, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <section id="contact" className="relative py-28 sm:py-32 bg-[hsl(220,20%,6%)] overflow-hidden">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(185,35%,45%,0.04),transparent_60%)]" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <ScrollReveal variant="fade-up">
            <div className="text-center mb-16">
              <span className="text-xs tracking-[0.4em] text-accent/80 uppercase mb-6 block">
                {t("contact.label", "ENGAGE")}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight text-[hsl(40,10%,96%)] mb-4">
                {t("contact.title")}
                <span className="block mt-1">{t("contact.titleHighlight")}</span>
              </h2>
              <p className="text-lg text-[hsl(40,10%,96%)]/50 max-w-2xl mx-auto font-light">
                {t("contact.subtitle")}
              </p>
            </div>
          </ScrollReveal>

          {/* Two-column layout */}
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 max-w-6xl mx-auto">

            {/* ===== Contact Form (left, wider) ===== */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="border border-[hsl(40,10%,96%)]/10 bg-[hsl(220,20%,5%)]/60 backdrop-blur-sm p-8 sm:p-10">
                <h3 className="text-xs tracking-[0.3em] text-accent/80 uppercase mb-8">
                  {t("contactInfo.formTitle", "Send a Message")}
                </h3>

                {/* Error message */}
                {formError && (
                  <div className="mb-6 p-4 border border-red-500/30 bg-red-500/10">
                    <p className="text-sm text-red-400 text-center sm:text-left">{formError}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="firstName"
                        className={`text-xs tracking-[0.15em] uppercase ${
                          errors.firstName ? "text-red-400" : "text-[hsl(40,10%,96%)]/60"
                        }`}
                      >
                        {t("contactForm.firstName", "First Name")} *
                      </Label>
                      <Input
                        id="firstName"
                        type="text"
                        value={firstName}
                        onChange={(e) => {
                          setFirstName(e.target.value);
                          if (errors.firstName) setErrors(prev => ({ ...prev, firstName: false }));
                        }}
                        placeholder={t("contactForm.firstNamePlaceholder", "John")}
                        className={`bg-transparent border-[hsl(40,10%,96%)]/15 text-[hsl(40,10%,96%)] placeholder:text-[hsl(40,10%,96%)]/30 rounded-none h-12 focus:border-accent ${
                          errors.firstName ? "border-red-500 focus:border-red-500" : ""
                        }`}
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="lastName"
                        className={`text-xs tracking-[0.15em] uppercase ${
                          errors.lastName ? "text-red-400" : "text-[hsl(40,10%,96%)]/60"
                        }`}
                      >
                        {t("contactForm.lastName", "Last Name")} *
                      </Label>
                      <Input
                        id="lastName"
                        type="text"
                        value={lastName}
                        onChange={(e) => {
                          setLastName(e.target.value);
                          if (errors.lastName) setErrors(prev => ({ ...prev, lastName: false }));
                        }}
                        placeholder={t("contactForm.lastNamePlaceholder", "Doe")}
                        className={`bg-transparent border-[hsl(40,10%,96%)]/15 text-[hsl(40,10%,96%)] placeholder:text-[hsl(40,10%,96%)]/30 rounded-none h-12 focus:border-accent ${
                          errors.lastName ? "border-red-500 focus:border-red-500" : ""
                        }`}
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  {/* Business Name */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="businessName"
                      className={`text-xs tracking-[0.15em] uppercase ${
                        errors.businessName ? "text-red-400" : "text-[hsl(40,10%,96%)]/60"
                      }`}
                    >
                      {t("contactForm.businessName", "Business Name")} *
                    </Label>
                    <Input
                      id="businessName"
                      type="text"
                      value={businessName}
                      onChange={(e) => {
                        setBusinessName(e.target.value);
                        if (errors.businessName) setErrors(prev => ({ ...prev, businessName: false }));
                      }}
                      placeholder={t("contactForm.businessNamePlaceholder", "Acme Industries")}
                      className={`bg-transparent border-[hsl(40,10%,96%)]/15 text-[hsl(40,10%,96%)] placeholder:text-[hsl(40,10%,96%)]/30 rounded-none h-12 focus:border-accent ${
                        errors.businessName ? "border-red-500 focus:border-red-500" : ""
                      }`}
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Business Email */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="businessEmail"
                      className={`text-xs tracking-[0.15em] uppercase ${
                        errors.businessEmail ? "text-red-400" : "text-[hsl(40,10%,96%)]/60"
                      }`}
                    >
                      {t("contactForm.businessEmail", "Business Email")} *
                    </Label>
                    <Input
                      id="businessEmail"
                      type="email"
                      value={businessEmail}
                      onChange={(e) => {
                        setBusinessEmail(e.target.value);
                        if (errors.businessEmail) setErrors(prev => ({ ...prev, businessEmail: false }));
                      }}
                      placeholder={t("contactForm.businessEmailPlaceholder", "john@acme.com")}
                      className={`bg-transparent border-[hsl(40,10%,96%)]/15 text-[hsl(40,10%,96%)] placeholder:text-[hsl(40,10%,96%)]/30 rounded-none h-12 focus:border-accent ${
                        errors.businessEmail ? "border-red-500 focus:border-red-500" : ""
                      }`}
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Request Details */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="requestDetails"
                      className={`text-xs tracking-[0.15em] uppercase ${
                        errors.requestDetails ? "text-red-400" : "text-[hsl(40,10%,96%)]/60"
                      }`}
                    >
                      {t("contactForm.requestDetails", "Request Details")} *
                    </Label>
                    <Textarea
                      id="requestDetails"
                      value={requestDetails}
                      onChange={(e) => {
                        setRequestDetails(e.target.value);
                        if (errors.requestDetails) setErrors(prev => ({ ...prev, requestDetails: false }));
                      }}
                      placeholder={t("contactForm.requestDetailsPlaceholder", "Tell us about your operational challenges...")}
                      className={`min-h-[140px] bg-transparent border-[hsl(40,10%,96%)]/15 text-[hsl(40,10%,96%)] placeholder:text-[hsl(40,10%,96%)]/30 rounded-none resize-none focus:border-accent ${
                        errors.requestDetails ? "border-red-500 focus:border-red-500" : ""
                      }`}
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent text-[hsl(220,20%,5%)] hover:bg-accent/90 rounded-none h-14 text-sm tracking-[0.15em] font-medium transition-all duration-500 group"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        {t("contactForm.submitting", "Submitting...")}
                      </>
                    ) : (
                      <>
                        {t("contactForm.submit", "Submit Request")}
                        <Send className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-[hsl(40,10%,96%)]/30 text-center mt-4">
                    {t("contact.guaranteeHighlight")}
                    {t("contact.guaranteeSuffix")}
                  </p>
                </form>
              </div>
            </motion.div>

            {/* ===== Contact Info + Map (right) ===== */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Direct Contact */}
              <div>
                <h3 className="text-xs tracking-[0.3em] text-accent/80 uppercase mb-6">
                  {t("contactInfo.directContact", "Direct Contact")}
                </h3>
                <div className="space-y-6">
                  {/* Phone */}
                  <a
                    href="tel:+971585996382"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 border border-[hsl(40,10%,96%)]/20 flex items-center justify-center flex-shrink-0 group-hover:border-accent/50 transition-colors">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-[hsl(40,10%,96%)]/50 mb-1">
                        {t("contactInfo.phone", "Phone")}
                      </p>
                      <p className="text-[hsl(40,10%,96%)] font-light group-hover:text-accent transition-colors">
                        +971 58 599 6382
                      </p>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:info@ovelon-prime.com"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 border border-[hsl(40,10%,96%)]/20 flex items-center justify-center flex-shrink-0 group-hover:border-accent/50 transition-colors">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-[hsl(40,10%,96%)]/50 mb-1">
                        {t("contactInfo.email", "Email")}
                      </p>
                      <p className="text-[hsl(40,10%,96%)] font-light group-hover:text-accent transition-colors">
                        info@ovelon-prime.com
                      </p>
                    </div>
                  </a>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 border border-[hsl(40,10%,96%)]/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-[hsl(40,10%,96%)]/50 mb-1">
                        {t("contactInfo.address", "Address")}
                      </p>
                      <p className="text-[hsl(40,10%,96%)] font-light leading-relaxed">
                        Meydan Grandstand<br />
                        Al Meydan Rd, Nad Al Sheba<br />
                        Nadd Al Shiba First<br />
                        Dubai, United Arab Emirates
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="border-t border-[hsl(40,10%,96%)]/10 pt-8">
                <h3 className="text-xs tracking-[0.3em] text-accent/80 uppercase mb-6 flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5" />
                  {t("contactInfo.businessHours", "Business Hours")}
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[hsl(40,10%,96%)]/50 font-light">
                      {t("contactInfo.monFri", "Monday – Friday")}
                    </span>
                    <span className="text-[hsl(40,10%,96%)] font-light">9:00 AM – 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[hsl(40,10%,96%)]/50 font-light">
                      {t("contactInfo.saturday", "Saturday")}
                    </span>
                    <span className="text-[hsl(40,10%,96%)] font-light">10:00 AM – 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[hsl(40,10%,96%)]/50 font-light">
                      {t("contactInfo.sunday", "Sunday")}
                    </span>
                    <span className="text-[hsl(40,10%,96%)] font-light">
                      {t("contactInfo.closed", "Closed")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Schedule a Call CTA */}
              <div className="border-t border-[hsl(40,10%,96%)]/10 pt-8">
                <h3 className="text-sm text-[hsl(40,10%,96%)] font-light mb-3">
                  {t("contactInfo.preferCall", "Prefer a Call?")}
                </h3>
                <p className="text-sm text-[hsl(40,10%,96%)]/40 font-light mb-5 leading-relaxed">
                  {t("contactInfo.preferCallDesc", "Schedule a consultation at your convenience. Our team is ready to discuss your operational needs.")}
                </p>
                <Button
                  variant="outline"
                  onClick={handleScheduleCall}
                  className="w-full border-accent/40 text-accent hover:bg-accent/10 hover:border-accent rounded-none h-12 text-xs tracking-[0.15em] font-medium transition-all duration-500"
                >
                  {t("contactInfo.scheduleCta", "SCHEDULE A CALL")}
                </Button>
              </div>

              {/* Google Maps */}
              <div className="border border-[hsl(40,10%,96%)]/10 overflow-hidden">
                <iframe
                  src={GOOGLE_MAPS_EMBED_URL}
                  width="100%"
                  height="220"
                  style={{ border: 0, filter: "grayscale(0.8) contrast(1.1) brightness(0.7)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ovelon Prime - Meydan Grandstand, Dubai"
                  className="w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      <ContactSuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        referenceId={referenceId}
      />
    </>
  );
};
