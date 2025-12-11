import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Privacy = () => {
  // Always start at top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="min-h-screen bg-[#1F273A]">  {/* EXACT testimonials background */}

      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl font-bold text-white text-center mb-4">
            Privacy Policy
          </h1>

          <p className="text-gray-300 text-center mb-12">
            Last Updated: 01.12.2025
          </p>

          <div className="space-y-10 text-white/90">

            <section>
              <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
              <p className="leading-relaxed text-white/70">
                At Ovelon Prime, we respect your privacy and are committed to protecting 
                your personal data. This policy explains how we collect, use, and safeguard 
                your information when you interact with our website and services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">2. Information We Collect</h2>
              <ul className="space-y-3 text-white/70">
                <li><strong className="text-white">Personal Data:</strong> Name, email, phone number, and form submissions.</li>
                <li><strong className="text-white">Business Data:</strong> Company name, jurisdiction, compliance documents.</li>
                <li><strong className="text-white">Technical Data:</strong> IP, device information, cookies.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">3. How We Use Your Information</h2>
              <ul className="space-y-3 text-white/70">
                <li>To provide and optimize automation services.</li>
                <li>To communicate regarding updates and support.</li>
                <li>To comply with legal obligations.</li>
                <li>To improve platform performance and analytics.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">4. Data Sharing</h2>
              <p className="leading-relaxed text-white/70">
                We do not sell your data. Information may be shared only with trusted partners 
                for service delivery or compliance — never for third-party marketing.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">5. Data Security</h2>
              <p className="leading-relaxed text-white/70">
                We implement industry-standard encryption and security. No system is perfect, 
                but we follow strict protocols to safeguard your information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">6. Your Rights</h2>
              <p className="leading-relaxed text-white/70">
                You may request access, correction, or deletion of your data anytime by emailing 
                privacy@ovelonprime.com.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">7. Contact Us</h2>
              <p className="leading-relaxed text-white/70">
                For questions about this policy, contact: support@ovelon-prime.com.
              </p>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
