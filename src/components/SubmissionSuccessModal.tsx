import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import { CheckCircle, X, Calendar, FileText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const CAL_LINK = "https://cal.com/ovelon-prime/introduction-call";

interface SubmissionSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  referenceId?: string;
  pdfAttached?: boolean;
  userEmail?: string;
}

export const SubmissionSuccessModal = ({ 
  isOpen, 
  onClose,
  referenceId,
  pdfAttached,
  userEmail,
}: SubmissionSuccessModalProps) => {
  const { t } = useTranslation();

  if (!isOpen) return null;

  const handleScheduleConsultation = () => {
    window.open(CAL_LINK, "_blank", "noopener,noreferrer");
  };

  return createPortal(
    <div className="fixed inset-0 z-[10000] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-md mx-4 bg-card rounded-lg shadow-2xl overflow-hidden animate-scale-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-muted/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-lg font-semibold text-foreground">
              {t("submission.title")}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label={t("simulator.close")}
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Reference ID */}
          {referenceId && (
            <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/10 border border-accent/20">
              <FileText className="w-5 h-5 text-accent flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted-foreground">
                  {t("submission.referenceLabel")}
                </p>
                <p className="text-sm font-mono font-semibold text-foreground truncate">
                  {referenceId}
                </p>
              </div>
            </div>
          )}
          
          <p className="text-foreground">
            {t("submission.body1")}
          </p>
          
          {/* Email confirmation with PDF note */}
          {userEmail && (
            <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 border border-border">
              <Mail className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-foreground">
                  {t("submission.emailSent")} <span className="font-medium">{userEmail}</span>
                </p>
                {pdfAttached && (
                  <p className="text-xs text-muted-foreground mt-1">
                    {t("submission.pdfAttached")}
                  </p>
                )}
              </div>
            </div>
          )}
          
          <p className="text-muted-foreground">
            {t("submission.body2")}
          </p>
          <p className="text-foreground font-medium">
            {t("submission.body3")}
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 px-6 py-4 border-t border-border bg-muted/10">
          <Button
            onClick={handleScheduleConsultation}
            className="flex-1 gap-2 bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            <Calendar className="w-4 h-4" />
            {t("submission.scheduleBtn")}
          </Button>
          <Button
            variant="outline"
            onClick={onClose}
            className="flex-1"
          >
            {t("submission.closeBtn")}
          </Button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default SubmissionSuccessModal;
