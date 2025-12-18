import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Privacy = () => {
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
            Privacy Policy
          </h1>

          <p className="text-slate-500 text-center mb-12">
            Last Updated: 01.12.2025
          </p>

          <div className="space-y-12 text-slate-700">

            {/* 1. INTRODUCTION */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-900">
                1. Introduction
              </h2>
              <p className="leading-relaxed">
                At Ovelon Prime, we take data protection and confidentiality seriously.
                This Privacy Policy explains how we collect, use, and safeguard personal
                and business information when you interact with our website, intake forms,
                and services.
              </p>
              <p className="leading-relaxed mt-3">
                We process data responsibly and only to the extent required to deliver
                our services, ensure operational integrity, and meet legal obligations.
              </p>
            </section>

            {/* 2. INFORMATION WE COLLECT */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-900">
                2. Information We Collect
              </h2>

              <ul className="space-y-4">
                <li>
                  <strong className="text-slate-900">Personal Information:</strong>{" "}
                  Name, business email address, phone number, and information submitted
                  via forms or direct correspondence.
                </li>

                <li>
                  <strong className="text-slate-900">Business & Operational Information:</strong>{" "}
                  Company name, business address or jurisdiction, industry classification,
                  operational context, and compliance-related information voluntarily provided
                  during intake.
                </li>

                <li>
                  <strong className="text-slate-900">Technical Information:</strong>{" "}
                  IP address, browser and device metadata, cookies, and basic usage analytics.
                </li>
              </ul>

              <p className="leading-relaxed mt-4 text-sm text-slate-600">
                We do not intentionally collect sensitive personal data unless explicitly
                required for compliance or service delivery.
              </p>
            </section>

            {/* 3. HOW WE USE INFORMATION */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-900">
                3. How We Use Your Information
              </h2>

              <ul className="space-y-3 list-disc pl-5">
                <li>Assessing and qualifying consultation requests</li>
                <li>Delivering and supporting operational automation services</li>
                <li>Communicating regarding engagements, updates, or clarifications</li>
                <li>Maintaining platform reliability, security, and performance</li>
                <li>Fulfilling legal, regulatory, or contractual obligations</li>
              </ul>

              <p className="leading-relaxed mt-4 text-sm text-slate-600">
                We do not use your data for unsolicited marketing, profiling,
                or third-party advertising purposes.
              </p>
            </section>

            {/* 4. DATA SHARING */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-900">
                4. Data Sharing & Disclosure
              </h2>

              <p className="leading-relaxed">
                Ovelon Prime does <strong>not</strong> sell, rent, or trade personal or
                business data.
              </p>

              <p className="leading-relaxed mt-3">
                Information may only be shared when strictly necessary:
              </p>

              <ul className="space-y-3 list-disc pl-5 mt-3">
                <li>With vetted service providers required for service delivery</li>
                <li>To comply with legal or regulatory obligations</li>
                <li>To protect the security, integrity, or rights of our systems and clients</li>
              </ul>

              <p className="leading-relaxed mt-4">
                Data is never shared for third-party marketing or promotional purposes.
              </p>
            </section>

            {/* 5. DATA SECURITY */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-900">
                5. Data Security
              </h2>

              <p className="leading-relaxed">
                We apply industry-standard technical and organizational safeguards,
                including encryption, access controls, and secure infrastructure practices.
              </p>

              <p className="leading-relaxed mt-3">
                While no system can guarantee absolute security, we operate under strict
                internal protocols designed to minimize risk and protect confidentiality
                at all times.
              </p>
            </section>

            {/* 6. DATA RETENTION & RIGHTS */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-900">
                6. Data Retention & Your Rights
              </h2>

              <p className="leading-relaxed">
                We retain data only for as long as necessary to fulfill the purposes
                outlined in this policy or to meet legal requirements.
              </p>

              <p className="leading-relaxed mt-3">
                You have the right to request access, correction, or deletion of your data,
                where applicable.
              </p>
            </section>

            {/* 7. CONTACT */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-slate-900">
                7. Contact
              </h2>

              <p className="leading-relaxed">
                For questions regarding this Privacy Policy or data handling practices,
                please contact:
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

export default Privacy;
