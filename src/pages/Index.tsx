import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Sectors } from "@/components/Sectors";
import { Pricing } from "@/components/Pricing";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/faq";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Sectors />
        <Pricing />
        <About />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
