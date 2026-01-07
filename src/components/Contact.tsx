import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useTranslation } from "react-i18next";
import { useSubmitContact } from "@/hooks/use-submit-contact";
import { ContactSuccessModal } from "@/components/ContactSuccessModal";
import { Loader2 } from "lucide-react";
import contactBg from "@/assets/u3714841198_Minimalistic_abstract_background_designed_for_a_c_e56f8162-43f3-47ed-8b5e-63ec90910a05_0.png";

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
      // Reset form
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
    
    // Validate fields
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

  return (
    <>
      <section
        id="contact"  
        className="relative py-28 sm:py-32 overflow-hidden"
      >
        {/* ===== Background ===== */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${contactBg})`,
            filter: "contrast(1.08) saturate(1.05)",
          }}
        >
          {/* Lighter readability overlay (less heavy than hero) */}
          <div className="absolute inset-0 bg-background/35" />

          {/* Soft control gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/25 via-transparent to-background/40" />

          {/* Bottom fade (white haze like screenshot) */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
        </div>

        {/* ===== Content ===== */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">

            {/* Label */}
            <p
              className="
                mb-6
                text-xs sm:text-sm
                tracking-[0.3em]
                font-semibold
                uppercase
                text-[#3A8F94]
              "
            >
              {t("contact.label", "ENGAGE")}
            </p>

            {/* Title */}
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-8 text-foreground/80">
              <span className="block mt-2 text-foreground/70">
                {t("contact.title")}
              </span>
              {t("contact.titleHighlight")}
            </h2>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-foreground/60 max-w-2xl mx-auto mb-12">
              {t("contact.subtitle")}
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto text-left space-y-6">
              {/* Error message */}
              {formError && (
                <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50">
                  <p className="text-sm text-red-600 dark:text-red-400">{formError}</p>
                </div>
              )}
              
              {/* Name row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label 
                    htmlFor="firstName" 
                    className={`text-foreground/80 ${errors.firstName ? "text-red-500" : ""}`}
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
                    className={`bg-background/80 backdrop-blur-sm border-border/60 focus:border-[#3A8F94] ${
                      errors.firstName ? "border-red-500 focus:border-red-500" : ""
                    }`}
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2">
                  <Label 
                    htmlFor="lastName" 
                    className={`text-foreground/80 ${errors.lastName ? "text-red-500" : ""}`}
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
                    className={`bg-background/80 backdrop-blur-sm border-border/60 focus:border-[#3A8F94] ${
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
                  className={`text-foreground/80 ${errors.businessName ? "text-red-500" : ""}`}
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
                  className={`bg-background/80 backdrop-blur-sm border-border/60 focus:border-[#3A8F94] ${
                    errors.businessName ? "border-red-500 focus:border-red-500" : ""
                  }`}
                  disabled={isSubmitting}
                />
              </div>

              {/* Business Email */}
              <div className="space-y-2">
                <Label 
                  htmlFor="businessEmail" 
                  className={`text-foreground/80 ${errors.businessEmail ? "text-red-500" : ""}`}
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
                  className={`bg-background/80 backdrop-blur-sm border-border/60 focus:border-[#3A8F94] ${
                    errors.businessEmail ? "border-red-500 focus:border-red-500" : ""
                  }`}
                  disabled={isSubmitting}
                />
              </div>

              {/* Request Details */}
              <div className="space-y-2">
                <Label 
                  htmlFor="requestDetails" 
                  className={`text-foreground/80 ${errors.requestDetails ? "text-red-500" : ""}`}
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
                  placeholder={t("contactForm.requestDetailsPlaceholder", "Tell us about your operational challenges and what you're looking to achieve...")}
                  className={`min-h-[120px] bg-background/80 backdrop-blur-sm border-border/60 focus:border-[#3A8F94] resize-none ${
                    errors.requestDetails ? "border-red-500 focus:border-red-500" : ""
                  }`}
                  disabled={isSubmitting}
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="
                    w-full sm:w-auto
                    bg-slate-900
                    text-white
                    font-medium
                    px-10
                    py-4
                    rounded-md
                    transition-colors
                    hover:bg-[#3A8F94]
                    active:bg-[#3A8F94]
                    focus-visible:bg-[#3A8F94]
                    disabled:opacity-70
                    disabled:cursor-not-allowed
                    touch-manipulation
                  "
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

            {/* Guarantee */}
            <p className="text-sm text-foreground/60 max-w-xl mx-auto mt-12 mb-8">
              <span className="font-semibold text-foreground/75">
                {t("contact.guaranteeHighlight")}
              </span>
              {t("contact.guaranteeSuffix")}
            </p>

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
