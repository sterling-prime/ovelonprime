import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Privacy = () => {
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
            Last Updated: 01.12.2025
          </p>

          {/* TERMS CONTENT */}
          <div className="space-y-10 text-white/90">

            {/* Section 1 */}
            <section>
              <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
              <p className="leading-relaxed text-white/70">
                These Terms &amp; Conditions (“Terms”) govern your access to and use of the
                Ovelon Prime website, consultations, and AI-automation services. By using our 
                website or services, you agree to be bound by these Terms. If you do not agree, 
                you must discontinue use immediately.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-xl font-semibold mb-4">2. Services Provided</h2>
              <p className="leading-relaxed text-white/70">
                Ovelon Prime provides AI-powered automation solutions for industrial, medical, 
                and related sectors. Services may include workflow automation, system integrations, 
                scheduling systems, AI customer support tools, and enterprise automation design.
                Service descriptions may change without notice.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-xl font-semibold mb-4">3. Use of the Website</h2>
              <ul className="space-y-3 text-white/70">
                <li>You agree not to use the site for illegal or fraudulent purposes.</li>
                <li>You may not attempt to breach or bypass security features.</li>
                <li>You may not reverse-engineer, scrape, or interfere with the site’s operation.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-xl font-semibold mb-4">4. Client Responsibilities</h2>
              <ul className="space-y-3 text-white/70">
                <li>Providing accurate business information.</li>
                <li>Maintaining the security of internal systems and credentials.</li>
                <li>Complying with applicable laws in their jurisdiction.</li>
                <li>Using deliverables responsibly and ethically.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-xl font-semibold mb-4">5. Payments & Billing</h2>
              <p className="leading-relaxed text-white/70">
                Payments must be completed before service delivery unless otherwise stated. 
                Custom projects require a signed proposal and defined payment schedule.  
                All payments are non-refundable once work has begun.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-xl font-semibold mb-4">6. No Guarantee of Results</h2>
              <p className="leading-relaxed text-white/70">
                While Ovelon Prime designs automations for performance and efficiency, we do 
                not guarantee specific operational or financial outcomes. Results depend on 
                client implementation and external factors.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-xl font-semibold mb-4">7. Intellectual Property</h2>
              <p className="leading-relaxed text-white/70">
                All automation workflows, scripts, prompts, diagrams, and technical deliverables 
                remain the intellectual property of Ovelon Prime unless stated otherwise. Clients 
                receive a license for internal use only. Redistribution or reselling is prohibited 
                without written approval.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-xl font-semibold mb-4">8. Confidentiality</h2>
              <p className="leading-relaxed text-white/70">
                Both parties agree to maintain strict confidentiality regarding business data, 
                technical systems, processes, and project documentation unless disclosure is 
                required by law.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-xl font-semibold mb-4">9. Limitation of Liability</h2>
              <p className="leading-relaxed text-white/70">
                To the fullest extent permitted by law, Ovelon Prime is not liable for indirect, 
                incidental, or consequential damages. Total liability is limited to the amount 
                paid for the service in question.
              </p>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-xl font-semibold mb-4">10. Third-Party Tools & Integrations</h2>
              <p className="leading-relaxed text-white/70">
                Our services may integrate with third-party tools (e.g., APIs, automation 
                platforms). We are not responsible for their outages, policy changes, or 
                data handling practices. Clients must comply with third-party terms.
              </p>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="text-xl font-semibold mb-4">11. Termination</h2>
              <p className="leading-relaxed text-white/70">
                We may suspend or terminate services for unpaid invoices, misuse, or violations 
                of these Terms. Access to deliverables and support may be revoked upon termination.
              </p>
            </section>

            {/* Section 12 */}
            <section>
              <h2 className="text-xl font-semibold mb-4">12. Governing Law</h2>
              <p className="leading-relaxed text-white/70">
                These Terms are governed by the laws of the jurisdiction in which Ovelon Prime is 
                legally established. Disputes will be resolved under that legal system.
              </p>
            </section>

            {/* Section 13 */}
            <section>
              <h2 className="text-xl font-semibold mb-4">13. Changes to These Terms</h2>
              <p className="leading-relaxed text-white/70">
                We may update these Terms at any time. Updates take effect immediately upon 
                publication. Users are responsible for reviewing this document periodically.
              </p>
            </section>

            {/* Section 14 */}
            <section>
              <h2 className="text-xl font-semibold mb-4">14. Contact Us</h2>
              <p className="leading-relaxed text-white/70">
                For questions regarding these Terms, contact: support@ovelon-prime.com
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
