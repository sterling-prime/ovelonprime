import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Terms = () => {
  // Always start at top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="min-h-screen bg-[#1F273A]">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

          <h1 className="text-4xl font-bold text-white text-center mb-4">
            Terms & Conditions
          </h1>

          <p className="text-gray-300 text-center mb-12">
            Last updated: 01 December 2025
          </p>

          {/* TERMS CONTENT */}
          <div className="space-y-10 text-white/90">

            {/* 1. Introduction */}
            <section>
              <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
              <p className="leading-relaxed text-white/70">
                These Terms & Conditions (“Terms”) govern your access to and use of the
                Ovelon Prime website, consultations, and professional automation services.
                By accessing our website or engaging our services, you agree to be bound
                by these Terms. If you do not agree, you must discontinue use immediately.
              </p>
            </section>

            {/* 2. Services Provided */}
            <section>
              <h2 className="text-xl font-semibold mb-4">2. Services Provided</h2>
              <p className="leading-relaxed text-white/70">
                Ovelon Prime provides professional automation and systems implementation
                services for industrial, healthcare, logistics, facility management, and
                other operationally critical environments. Services may include workflow
                automation, system integrations, scheduling solutions, customer support
                workflows, and enterprise system design.
              </p>
              <p className="leading-relaxed text-white/70 mt-3">
                Specific service scope, deliverables, and timelines are defined per
                engagement and may change based on project requirements.
              </p>
            </section>

            {/* 3. Use of the Website */}
            <section>
              <h2 className="text-xl font-semibold mb-4">3. Use of the Website</h2>
              <ul className="space-y-3 text-white/70 list-disc list-inside">
                <li>You may not use the website for unlawful or fraudulent purposes.</li>
                <li>You may not attempt to gain unauthorized access to systems or data.</li>
                <li>You may not scrape, reverse-engineer, or interfere with website functionality.</li>
              </ul>
            </section>

            {/* 4. Client Responsibilities */}
            <section>
              <h2 className="text-xl font-semibold mb-4">4. Client Responsibilities</h2>
              <ul className="space-y-3 text-white/70 list-disc list-inside">
                <li>Providing accurate and complete business information.</li>
                <li>Ensuring appropriate access to systems when required.</li>
                <li>Maintaining internal security and credential management.</li>
                <li>Using delivered systems in compliance with applicable laws.</li>
              </ul>
            </section>

            {/* 5. Payments & Billing */}
            <section>
              <h2 className="text-xl font-semibold mb-4">5. Payments & Billing</h2>
              <p className="leading-relaxed text-white/70">
                Unless otherwise agreed in writing, payment is required before service
                delivery. Custom engagements require a signed proposal and defined
                payment schedule.
              </p>
              <p className="leading-relaxed text-white/70 mt-3">
                Fees are non-refundable once work has commenced, except where explicitly
                stated otherwise in a written agreement.
              </p>
            </section>

            {/* 6. No Guarantee of Outcomes */}
            <section>
              <h2 className="text-xl font-semibold mb-4">6. No Guarantee of Outcomes</h2>
              <p className="leading-relaxed text-white/70">
                While Ovelon Prime designs systems with performance, reliability, and
                efficiency in mind, we do not guarantee specific operational, financial,
                or performance outcomes. Results depend on client usage, internal processes,
                and external factors beyond our control.
              </p>
            </section>

            {/* 7. Intellectual Property */}
            <section>
              <h2 className="text-xl font-semibold mb-4">7. Intellectual Property</h2>
              <p className="leading-relaxed text-white/70">
                Unless otherwise agreed in writing, all methodologies, workflows,
                documentation, diagrams, and technical materials developed by Ovelon Prime
                remain our intellectual property.
              </p>
              <p className="leading-relaxed text-white/70 mt-3">
                Clients receive a non-transferable license for internal business use.
                Redistribution, resale, or external use without written permission is prohibited.
              </p>
            </section>

            {/* 8. Confidentiality */}
            <section>
              <h2 className="text-xl font-semibold mb-4">8. Confidentiality</h2>
              <p className="leading-relaxed text-white/70">
                Both parties agree to maintain confidentiality of all non-public business,
                technical, and operational information exchanged during an engagement,
                unless disclosure is required by law.
              </p>
            </section>

            {/* 9. Limitation of Liability */}
            <section>
              <h2 className="text-xl font-semibold mb-4">9. Limitation of Liability</h2>
              <p className="leading-relaxed text-white/70">
                To the maximum extent permitted by law, Ovelon Prime shall not be liable
                for indirect, incidental, special, or consequential damages.
              </p>
              <p className="leading-relaxed text-white/70 mt-3">
                Total liability for any claim shall not exceed the total fees paid for
                the specific service giving rise to the claim.
              </p>
            </section>

            {/* 10. Third-Party Tools & Integrations */}
            <section>
              <h2 className="text-xl font-semibold mb-4">
                10. Third-Party Tools & Integrations
              </h2>
              <p className="leading-relaxed text-white/70">
                Services may involve integration with third-party platforms or tools.
                Ovelon Prime is not responsible for third-party outages, policy changes,
                or data handling practices. Clients remain responsible for compliance
                with third-party terms.
              </p>
            </section>

            {/* 11. Termination */}
            <section>
              <h2 className="text-xl font-semibold mb-4">11. Termination</h2>
              <p className="leading-relaxed text-white/70">
                We reserve the right to suspend or terminate services in cases of
                non-payment, misuse, or material breach of these Terms. Upon termination,
                access to services and support may be discontinued.
              </p>
            </section>

            {/* 12. Governing Law */}
            <section>
              <h2 className="text-xl font-semibold mb-4">12. Governing Law</h2>
              <p className="leading-relaxed text-white/70">
                These Terms are governed by the laws of the jurisdiction in which
                Ovelon Prime is legally established. Any disputes shall be resolved
                exclusively under that jurisdiction.
              </p>
            </section>

            {/* 13. Changes to These Terms */}
            <section>
              <h2 className="text-xl font-semibold mb-4">13. Changes to These Terms</h2>
              <p className="leading-relaxed text-white/70">
                We may update these Terms from time to time. Changes become effective
                upon publication. Continued use of the website or services constitutes
                acceptance of the updated Terms.
              </p>
            </section>

            {/* 14. Contact */}
            <section>
              <h2 className="text-xl font-semibold mb-4">14. Contact Information</h2>
              <p className="leading-relaxed text-white/70">
                For questions regarding these Terms, please contact:
                <br />
                <span className="font-medium">support@ovelon-prime.com</span>
              </p>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
