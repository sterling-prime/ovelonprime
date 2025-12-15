import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const FORM_URL =
  "https://cal.com/forms/35953db6-1b33-43bf-912a-77b157841bdd";

const Intake = () => {
  // Always start at top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="min-h-screen bg-[#0B1020]">
      {/* Dark page background like screenshot */}

      <Navbar />

      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">

          {/* PAGE HEADER */}
          <div className="text-center mb-14">
            <h1 className="text-4xl font-semibold text-white mb-4">
              Consultation Qualification
            </h1>
            <p className="text-gray-300">
              Please complete the short intake below. All submissions are reviewed
              before scheduling.
            </p>
          </div>

          {/* FORM CARD */}
          <div className="bg-[#EDEEF0] rounded-3xl p-10">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <iframe
                src={FORM_URL}
                title="Consultation Intake Form"
                className="w-full h-[900px]"
                frameBorder="0"
              />
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Intake;
