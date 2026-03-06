import { lazy, Suspense } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { VideoSection } from "@/components/VideoSection";
import { ProblemSection } from "@/components/ProblemSection";
import { ProcessSection } from "@/components/ProcessSection";
import { MetricsStrip } from "@/components/MetricsStrip";
import { ScrollReveal } from "@/components/ScrollReveal";
import { MobileStickyBar } from "@/components/MobileStickyBar";

// Lazy load below-fold sections to reduce initial bundle size
const Sectors = lazy(() => import("@/components/Sectors").then(m => ({ default: m.Sectors })));
const OperationalImpactCalculator = lazy(() => import("@/components/OperationalImpactCalculator"));
const Pricing = lazy(() => import("@/components/Pricing").then(m => ({ default: m.Pricing })));
const About = lazy(() => import("@/components/About").then(m => ({ default: m.About })));
const Testimonials = lazy(() => import("@/components/Testimonials").then(m => ({ default: m.Testimonials })));
const OperationalGovernanceTrends = lazy(() => import("@/components/operationalgovernancetrends").then(m => ({ default: m.OperationalGovernanceTrends })));
const Faq = lazy(() => import("@/components/faq").then(m => ({ default: m.Faq })));
const Contact = lazy(() => import("@/components/Contact").then(m => ({ default: m.Contact })));
const WorkflowDemo = lazy(() => import("@/components/WorkflowDemo").then(m => ({ default: m.WorkflowDemo })));
const CaseStudies = lazy(() => import("@/components/CaseStudies"));
const ComplianceBlog = lazy(() => import("@/components/ComplianceBlog").then(m => ({ default: m.ComplianceBlog })));
const CertificationBadges = lazy(() => import("@/components/CertificationBadges"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Critical above-fold content */}
        <Hero />
        <MetricsStrip />
        <div className="section-divider" />
        <ScrollReveal variant="fade-up">
          <ProblemSection />
        </ScrollReveal>
        <VideoSection />
        <ScrollReveal variant="fade-up">
          <ProcessSection />
        </ScrollReveal>
        <div className="section-divider" />
        <ScrollReveal variant="fade-up">
          <Services />
        </ScrollReveal>

        {/* Below-fold content - lazy loaded */}
        <Suspense fallback={null}>
          <ScrollReveal variant="fade-up"><Sectors /></ScrollReveal>
          <ScrollReveal variant="fade-up"><OperationalImpactCalculator /></ScrollReveal>
          <ScrollReveal variant="fade-up"><WorkflowDemo /></ScrollReveal>
          <ScrollReveal variant="fade-up"><Pricing /></ScrollReveal>
          <ScrollReveal variant="fade-up"><About /></ScrollReveal>
          <ScrollReveal variant="fade-up"><Testimonials /></ScrollReveal>
          <ScrollReveal variant="fade-up"><OperationalGovernanceTrends /></ScrollReveal>
          <ScrollReveal variant="fade-up"><CaseStudies /></ScrollReveal>
          <ScrollReveal variant="fade-up"><ComplianceBlog /></ScrollReveal>
          <ScrollReveal variant="fade-up"><Faq /></ScrollReveal>
          <ScrollReveal variant="fade-up"><CertificationBadges /></ScrollReveal>
          <ScrollReveal variant="fade-up"><Contact /></ScrollReveal>
        </Suspense>

        <BackToTop />
        <MobileStickyBar />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
