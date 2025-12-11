import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed">
                We collect information you provide directly to us, such as when you create an account, 
                make a purchase, or contact us for support. This may include your name, email address, 
                phone number, and payment information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use the information we collect to provide, maintain, and improve our services, 
                process transactions, send you technical notices and support messages, and respond 
                to your comments and questions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not share your personal information with third parties except as described in 
                this policy. We may share information with vendors, consultants, and other service 
                providers who need access to such information to carry out work on our behalf.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We take reasonable measures to help protect your personal information from loss, 
                theft, misuse, unauthorized access, disclosure, alteration, and destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                You may access, update, or delete your personal information at any time by contacting 
                us. You may also opt out of receiving promotional communications from us by following 
                the instructions in those messages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at 
                privacy@ovelonprime.com.
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
