import { lazy, Suspense } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { VideoSection } from "@/components/VideoSection";
import { ProblemSection } from "@/components/ProblemSection";
import { ProcessSection } from "@/components/ProcessSection";


// Lazy load below-fold sections to reduce initial bundle size
const Sectors = lazy(() => import("@/components/Sectors").then(m => ({ default: m.Sectors })));
const Pricing = lazy(() => import("@/components/Pricing").then(m => ({ default: m.Pricing })));
const About = lazy(() => import("@/components/About").then(m => ({ default: m.About })));
const Testimonials = lazy(() => import("@/components/Testimonials").then(m => ({ default: m.Testimonials })));
const OperationalTrust = lazy(() => import("@/components/Operationaltrust").then(m => ({ default: m.OperationalTrust })));
const IndustrialTrustStrip = lazy(() => import("@/components/Industrialtruststripe").then(m => ({ default: m.IndustrialTrustStrip })));
const OperationalGovernanceTrends = lazy(() => import("@/components/operationalgovernancetrends").then(m => ({ default: m.OperationalGovernanceTrends })));
 const Faq = lazy(() => import("@/components/faq").then(m => ({ default: m.Faq })));
 const Contact = lazy(() => import("@/components/Contact").then(m => ({ default: m.Contact })));
 const WorkflowDemo = lazy(() => import("@/components/WorkflowDemo").then(m => ({ default: m.WorkflowDemo })));
const CaseStudies = lazy(() => import("@/components/CaseStudies"));
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Critical above-fold content */}
        <Hero />
          <ProblemSection />
        <VideoSection />
         <ProcessSection />
        <Services />
        
        {/* Below-fold content - lazy loaded */}
        <Suspense fallback={null}>
          <Sectors />
           <WorkflowDemo />
          <Pricing />
          <About />
          <Testimonials />
          <OperationalTrust />
          <IndustrialTrustStrip />
          <OperationalGovernanceTrends />
          <CaseStudies />
          <Faq />
          <Contact />
        </Suspense>
        
        <BackToTop />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
