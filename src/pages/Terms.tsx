import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Terms = () => {
  // Always start at top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

          <h1 className="text-4xl font-bold text-slate-900 text-center mb-4">
            Terms & Conditions
          </h1>

          <p className="text-slate-500 text-center mb-12">
            Last Updated: 01 December 2025
          </p>

          <div className="space-y-12 text-slate-700">

            {/* 1. INTRODUCTION */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-900">
                1. Introduction
              </h2>
              <p className="leading-relaxed">
                These Terms & Conditions (“Terms”) govern your access to and use of the
                Ovelon Prime website, consultation processes, and professional automation
                services. By accessing the website or engaging our services, you agree to
                be bound by these Terms.
              </p>
              <p className="leading-relaxed mt-3">
                If you do not agree with these Terms, you must discontinue use of the
                website and services immediately.
              </p>
            </section>

            {/* 2. SERVICES */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-900">
                2. Services Provided
              </h2>
              <p className="leading-relaxed">
                Ovelon Prime provides professional automation, systems design, and
                implementation services for industrial, logistics, facility management,
                infrastructure, and other operationally critical environments.
              </p>
              <p className="leading-relaxed mt-3">
                All services are delivered on a project or engagement basis. Specific
                scope, deliverables, assumptions, and timelines are defined per
                engagement and may evolve based on operational requirements.
              </p>
            </section>

            {/* 3. WEBSITE USE */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-900">
                3. Use of the Website
              </h2>
              <ul className="space-y-3 list-disc list-inside">
                <li>You may not use the website for unlawful or fraudulent purposes.</li>
                <li>You may not attempt to gain unauthorized access to systems or data.</li>
                <li>
                  You may not scrape, reverse-engineer, disrupt, or interfere with
                  website functionality or security mechanisms.
                </li>
              </ul>
            </section>

            {/* 4. CLIENT RESPONSIBILITIES */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-900">
                4. Client Responsibilities
              </h2>
              <ul className="space-y-3 list-disc list-inside">
                <li>Providing accurate, complete, and up-to-date business information.</li>
                <li>
                  Ensuring timely access to systems, data, and stakeholders when
                  required for delivery.
                </li>
                <li>
                  Maintaining internal security controls, credential management, and
                  access governance.
                </li>
                <li>
                  Using delivered systems in compliance with applicable laws,
                  regulations, and internal policies.
                </li>
              </ul>
            </section>

            {/* 5. PAYMENTS */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-900">
                5. Payments & Billing
              </h2>
              <p className="leading-relaxed">
                Unless otherwise agreed in writing, payment is required prior to the
                commencement of services. Custom engagements require a signed proposal
                and a mutually agreed payment schedule.
              </p>
              <p className="leading-relaxed mt-3">
                Fees are non-refundable once work has commenced, except where explicitly
                stated otherwise in a written agreement.
              </p>
            </section>

            {/* 6. NO GUARANTEES */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-900">
                6. No Guarantee of Outcomes
              </h2>
              <p className="leading-relaxed">
                While Ovelon Prime designs systems with reliability, performance, and
                operational efficiency in mind, no guarantees are made regarding specific
                operational, financial, or performance outcomes.
              </p>
            </section>

            {/* 7. IP */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-900">
                7. Intellectual Property
              </h2>
              <p className="leading-relaxed">
                Unless otherwise agreed in writing, all methodologies, architectures,
                workflows, documentation, diagrams, and technical materials developed by
                Ovelon Prime remain our intellectual property.
              </p>
              <p className="leading-relaxed mt-3">
                Clients are granted a non-transferable, non-exclusive license for
                internal business use only.
              </p>
            </section>

            {/* 8. CONFIDENTIALITY */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-900">
                8. Confidentiality
              </h2>
              <p className="leading-relaxed">
                Both parties agree to maintain strict confidentiality of all non-public
                business, technical, operational, and commercial information exchanged
                during an engagement.
              </p>
            </section>

            {/* 9. LIABILITY */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-900">
                9. Limitation of Liability
              </h2>
              <p className="leading-relaxed">
                To the maximum extent permitted by law, Ovelon Prime shall not be liable
                for any indirect, incidental, special, or consequential damages.
              </p>
              <p className="leading-relaxed mt-3">
                Total liability shall not exceed the total fees paid for the specific
                service giving rise to the claim.
              </p>
            </section>

            {/* 10. THIRD PARTIES */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-900">
                10. Third-Party Tools & Integrations
              </h2>
              <p className="leading-relaxed">
                Services may involve integrations with third-party platforms or tools.
                Ovelon Prime is not responsible for third-party outages, changes, or
                policy decisions.
              </p>
            </section>

            {/* 11. TERMINATION */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-900">
                11. Termination
              </h2>
              <p className="leading-relaxed">
                We reserve the right to suspend or terminate services in cases of
                non-payment, misuse, or material breach of these Terms.
              </p>
            </section>

            {/* 12. GOVERNING LAW */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-900">
                12. Governing Law
              </h2>
              <p className="leading-relaxed">
                These Terms are governed by the laws of the jurisdiction in which
                Ovelon Prime is legally established, without regard to conflict-of-law
                principles.
              </p>
            </section>

            {/* 13. CHANGES */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-900">
                13. Changes to These Terms
              </h2>
              <p className="leading-relaxed">
                We may update these Terms from time to time. Continued use of the website
                or services constitutes acceptance of the updated Terms.
              </p>
            </section>

            {/* 14. CONTACT */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-900">
                14. Contact Information
              </h2>
              <p className="leading-relaxed">
                For questions regarding these Terms, please contact:
              </p>
              <p className="mt-2 font-medium text-slate-900">
                support@ovelon-prime.com
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
