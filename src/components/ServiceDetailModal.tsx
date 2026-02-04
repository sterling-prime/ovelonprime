import { useTranslation } from "react-i18next";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import serviceDetail1 from "@/assets/service-detail-1.jpg";
import serviceDetail2 from "@/assets/service-detail-2.jpg";
import serviceDetail3 from "@/assets/service-detail-3.jpg";
import serviceDetail4 from "@/assets/service-detail-4.jpg";

const detailImages = [serviceDetail1, serviceDetail2, serviceDetail3, serviceDetail4];

interface ServiceDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceIndex: number | null;
  service: {
    title: string;
    description: string;
    tags: string[];
  } | null;
}

export const ServiceDetailModal = ({ isOpen, onClose, serviceIndex, service }: ServiceDetailModalProps) => {
  const { t } = useTranslation();

  if (!service || serviceIndex === null) return null;

  // Extended benefits for each service
  const benefits = [
    // Service 1: Request & Demand Handling
    [
      t("serviceDetails.benefits.0.0", "Automated intake validation eliminates manual review bottlenecks"),
      t("serviceDetails.benefits.0.1", "Intelligent routing reduces response time by up to 60%"),
      t("serviceDetails.benefits.0.2", "Full audit trail for compliance and accountability"),
      t("serviceDetails.benefits.0.3", "Seamless integration with existing ticketing systems"),
    ],
    // Service 2: Safety & Execution Standards
    [
      t("serviceDetails.benefits.1.0", "Visual SOPs reduce training time and interpretation errors"),
      t("serviceDetails.benefits.1.1", "Real-time compliance tracking across all shifts"),
      t("serviceDetails.benefits.1.2", "Contractor onboarding standardized across locations"),
      t("serviceDetails.benefits.1.3", "HSE-aligned procedures ready for regulatory audits"),
    ],
    // Service 3: Incident Handling & Escalation
    [
      t("serviceDetails.benefits.2.0", "Automated classification ensures consistent issue prioritization"),
      t("serviceDetails.benefits.2.1", "Clear escalation paths with defined ownership at each level"),
      t("serviceDetails.benefits.2.2", "Response SLAs tracked and enforced automatically"),
      t("serviceDetails.benefits.2.3", "Post-incident analysis for continuous improvement"),
    ],
    // Service 4: Appointment Setting Efficiency
    [
      t("serviceDetails.benefits.3.0", "24/7 availability without increasing headcount"),
      t("serviceDetails.benefits.3.1", "Intelligent rescheduling minimizes no-shows"),
      t("serviceDetails.benefits.3.2", "Multi-channel confirmation (voice, SMS, email)"),
      t("serviceDetails.benefits.3.3", "Seamless calendar sync with your existing systems"),
    ],
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-card border-border gap-0">
        {/* Hero Image */}
        <div className="relative h-56 sm:h-72 w-full overflow-hidden">
          <img
            src={detailImages[serviceIndex]}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title overlay */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex flex-wrap gap-2 mb-3">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full bg-accent/20 text-accent border border-accent/30"
                >
                  {tag}
                </span>
              ))}
            </div>
            <DialogHeader>
              <DialogTitle className="text-2xl sm:text-3xl font-bold text-foreground">
                {service.title}
              </DialogTitle>
            </DialogHeader>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Description */}
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            {service.description}
          </p>

          {/* Divider */}
          <div className="border-t border-border" />

          {/* Benefits */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              {t("serviceDetails.keyBenefits", "Key Benefits")}
            </h4>
            <ul className="grid sm:grid-cols-2 gap-3">
              {benefits[serviceIndex].map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="pt-4">
            <Button
              onClick={onClose}
              className="w-full sm:w-auto group"
              size="lg"
            >
              {t("serviceDetails.cta", "Explore Implementation")}
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
