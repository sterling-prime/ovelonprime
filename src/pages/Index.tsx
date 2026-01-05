import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Sectors } from "@/components/Sectors";
import { Pricing } from "@/components/Pricing";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { OperationalTrust } from "@/components/Operationaltrust";
import { IndustrialTrustStrip } from "@/components/Industrialtruststripe";
import { Faq } from "@/components/faq";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { DemoSurface } from "@/components/demosurface";
import { VideoSection } from "@/components/VideoSection";
import { BackToTop } from "@/components/BackToTop";
import { OperationalGovernanceTrends } from "@/components/operationalgovernancetrends";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <VideoSection />
        <Services />
        <Sectors />
        <Pricing />
        <About />
        <Testimonials />
        <OperationalTrust />
        <IndustrialTrustStrip />
        <OperationalGovernanceTrends />
        <Faq />
        <Contact />
        <BackToTop />
      </main>
      <DemoSurface />
      <Footer />
    </div>
  );
};

export default Index;
