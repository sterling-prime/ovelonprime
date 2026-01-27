import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

const STORAGE_KEY = "ovelon_subscribe_shown";

export const SubscribePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const { toast } = useToast();
  const { t } = useTranslation();

  useEffect(() => {
    // Check if popup was already shown
    const wasShown = localStorage.getItem(STORAGE_KEY);
    
    if (!wasShown) {
      // Show popup after 3 seconds on first visit
      const timer = setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem(STORAGE_KEY, "true");
      }, 3000);
      return () => clearTimeout(timer);
    }

    // Also allow manual trigger
    const handler = () => setIsOpen(true);
    window.addEventListener("open-subscribe-popup", handler);
    return () => window.removeEventListener("open-subscribe-popup", handler);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim()) {
      toast({
        title: t("subscribe.missingInfo"),
        description: t("subscribe.missingInfoDesc"),
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke("submit-subscribe", {
        body: { name: formData.name, email: formData.email },
      });

      if (error) {
        throw new Error(error.message || "Subscription failed");
      }

      if (!data?.success) {
        throw new Error(data?.error || "Subscription failed");
      }

      setIsSuccess(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsSuccess(false);
        setFormData({ name: "", email: "" });
      }, 3000);
    } catch (err) {
      console.error("[Subscribe] Error:", err);
      toast({
        title: t("subscribe.failedTitle"),
        description: err instanceof Error ? err.message : "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsSuccess(false);
    setFormData({ name: "", email: "" });
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9998] animate-in fade-in duration-300"
        onClick={handleClose}
      />

      {/* Popup Container */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[900px] w-[calc(100%-40px)] bg-white rounded-2xl overflow-hidden shadow-2xl z-[9999] animate-in zoom-in-95 fade-in duration-400">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 w-9 h-9 bg-white/90 hover:bg-white rounded-full flex items-center justify-center z-10 transition-all duration-300 hover:rotate-90 shadow-md"
          aria-label="Close"
        >
          <X className="w-4 h-4 text-[#000033]" />
        </button>

        <div className="flex min-h-[500px] max-md:flex-col max-md:min-h-auto">
          {/* Left Side - Image */}
          <div
            className="flex-1 relative overflow-hidden max-md:min-h-[200px]"
            style={{
              background: `linear-gradient(135deg, rgba(10,10,10,0.7) 0%, rgba(30,30,30,0.6) 100%), 
                          url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=85') center/cover`,
            }}
          >
            <div className="absolute inset-0 opacity-30" style={{
              background: `repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.02) 3px, rgba(0,0,0,0.02) 6px)`
            }} />
            <div className="relative z-10 p-[60px_50px] max-md:p-[40px_30px] max-sm:p-[30px_24px] text-white flex flex-col justify-end h-full">
              <h3 className="font-['Outfit'] text-[32px] max-md:text-2xl font-extralight tracking-[4px] max-md:tracking-[2px] mb-3 drop-shadow-md">
                OVELON PRIME
              </h3>
              <p className="text-sm font-light tracking-wide opacity-90">
                Seamless Operations
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="flex-1 p-[60px_50px] max-md:p-[40px_30px] max-sm:p-[30px_24px] flex flex-col justify-center">
            {!isSuccess ? (
              <>
                <div className="mb-10">
                  <h2 className="font-['Outfit'] text-[28px] max-md:text-2xl font-light text-[#000033] mb-3 tracking-wide">
                    {t("subscribe.title")}
                  </h2>
                  <p className="text-[15px] text-gray-600 leading-relaxed tracking-wide">
                    {t("subscribe.subtitle")}
                  </p>
                  <p className="mt-4 text-sm font-semibold text-[#000033] bg-amber-50 border border-amber-200 rounded-lg px-4 py-2.5 inline-block">
                    {t("subscribe.promo")}
                  </p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label className="block text-xs font-medium text-[#000033] mb-2 tracking-wide uppercase">
                      {t("subscribe.fullName")}
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t("subscribe.fullNamePlaceholder")}
                      required
                      className="w-full px-4 py-3.5 border-[1.5px] border-gray-200 rounded-md font-['Inter'] text-[15px] text-[#000033] bg-gray-50 transition-all duration-300 focus:outline-none focus:border-[#000033] focus:bg-white focus:shadow-[0_0_0_3px_rgba(0,0,51,0.05)]"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-xs font-medium text-[#000033] mb-2 tracking-wide uppercase">
                      {t("subscribe.email")}
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t("subscribe.emailPlaceholder")}
                      required
                      className="w-full px-4 py-3.5 border-[1.5px] border-gray-200 rounded-md font-['Inter'] text-[15px] text-[#000033] bg-gray-50 transition-all duration-300 focus:outline-none focus:border-[#000033] focus:bg-white focus:shadow-[0_0_0_3px_rgba(0,0,51,0.05)]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#000033] text-white border-none rounded-md font-['Inter'] text-sm font-semibold tracking-wide uppercase cursor-pointer transition-all duration-300 mt-2.5 shadow-[0_4px_12px_rgba(0,0,51,0.2)] hover:bg-[#001a33] hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(0,0,51,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? t("subscribe.submitting") : t("subscribe.submit")}
                  </button>

                  <p className="mt-5 text-[11px] text-gray-400 leading-relaxed">
                    {t("subscribe.privacyText")}{" "}
                    <a href="/privacy" className="text-[#000033] no-underline hover:underline">
                      {t("subscribe.privacyLink")}
                    </a>{" "}
                    {t("subscribe.andText")}{" "}
                    <a href="/terms" className="text-[#000033] no-underline hover:underline">
                      {t("subscribe.termsLink")}
                    </a>.
                  </p>
                </form>
              </>
            ) : (
              <div className="text-center py-10">
                <svg
                  className="w-20 h-20 mx-auto mb-6"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="50" cy="50" r="45" stroke="#000033" strokeWidth="2" fill="none" />
                  <path
                    d="M30 50L45 65L70 35"
                    stroke="#000033"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h3 className="font-['Outfit'] text-2xl font-normal text-[#000033] mb-3">
                  {t("subscribe.successTitle")}
                </h3>
                <p className="text-[15px] text-gray-600">
                  {t("subscribe.successMessage")}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscribePopup;
