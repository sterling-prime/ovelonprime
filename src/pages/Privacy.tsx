import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl font-bold text-primary-foreground text-center mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-center mb-12">
            Last Updated: 01.12.2025
          </p>

          <div className="space-y-10">
            <section>
              <h2 className="text-xl font-semibold text-primary-foreground mb-4">
                1. Introduction
              </h2>
              <p className="text-primary-foreground/70 leading-relaxed">
                At Ovelon Prime, we respect your privacy and are committed to protecting your personal data.
                This policy explains how we collect, use, and safeguard your information when you interact
                with our website and services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-foreground mb-4">
                2. Information We Collect
              </h2>
              <ul className="space-y-3 text-primary-foreground/70">
                <li className="flex gap-2">
                  <span>•</span>
                  <span><strong className="text-primary-foreground">Personal Data:</strong> Name, email address, phone number, and details provided in forms or communication.</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span><strong className="text-primary-foreground">Business Data:</strong> Company name, jurisdiction details, and compliance documentation.</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span><strong className="text-primary-foreground">Technical Data:</strong> IP address, device info, browser type, and cookies.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-foreground mb-4">
                3. How We Use Your Information
              </h2>
              <ul className="space-y-2 text-primary-foreground/70">
                <li className="flex gap-2">
                  <span>•</span>
                  <span>To provide, operate, and improve our automation services.</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>To communicate regarding support, updates, and inquiries.</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>To comply with regulatory and compliance requirements.</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>For analytics to enhance user experience and platform efficiency.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-foreground mb-4">
                4. Data Sharing
              </h2>
              <p className="text-primary-foreground/70 leading-relaxed">
                We do not sell your data. Information may be shared with trusted partners solely for
                service delivery, legal compliance, or with your explicit consent.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-foreground mb-4">
                5. Data Security
              </h2>
              <p className="text-primary-foreground/70 leading-relaxed">
                We implement industry-standard encryption and access controls to protect your data.
                However, no system is entirely secure, and we encourage responsible use.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-foreground mb-4">
                6. Your Rights
              </h2>
              <p className="text-primary-foreground/70 leading-relaxed">
                You may request access, correction, or deletion of your data at any time by contacting
                us at privacy@ovelonprime.com.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary-foreground mb-4">
                7. Contact Us
              </h2>
              <p className="text-primary-foreground/70 leading-relaxed">
                For questions about this policy, reach out to privacy@ovelonprime.com.
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
