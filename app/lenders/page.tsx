import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Lenders | Commercial Apartment Repair Contractor Partnership",
  description: "Partner with licensed commercial apartment repair contractor. Fast inspection repairs for multi-family properties reduce default risk. Trusted by 15+ lending institutions.",
};

export default function LendersPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-black text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Partner With <span className="text-primary-yellow">JW ProBuild</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
              Refer your borrowers to a trusted contractor for bank-mandated inspection repairs
            </p>
            <Link href="#contact-form" className="btn-primary text-lg">
              Become a Partner
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-background-warm">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
              Why Lenders Choose Us
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="card">
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-3">Fast Turnaround</h3>
                <p className="text-accent-gray-light">
                  Average completion 60% faster than required deadlines, reducing your risk exposure.
                </p>
              </div>

              <div className="card">
                <div className="text-3xl mb-4">🏗️</div>
                <h3 className="text-xl font-bold mb-3">Comprehensive Capability</h3>
                <p className="text-accent-gray-light">
                  One contractor for all trades eliminates coordination headaches for your borrowers.
                </p>
              </div>

              <div className="card">
                <div className="text-3xl mb-4">📋</div>
                <h3 className="text-xl font-bold mb-3">Clear Documentation</h3>
                <p className="text-accent-gray-light">
                  Photo progress updates, completion certificates, and compliance verification.
                </p>
              </div>

              <div className="card">
                <div className="text-3xl mb-4">✓</div>
                <h3 className="text-xl font-bold mb-3">Licensed & Insured</h3>
                <p className="text-accent-gray-light">
                  Fully licensed for all required trades, insured, and certified professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
              What Lenders Get
            </h2>

            <div className="space-y-6">
              <div className="border-yellow-accent">
                <h3 className="text-2xl font-semibold mb-3">Progress Updates</h3>
                <p className="text-lg text-accent-gray-light">
                  Regular photo updates and progress reports so you can monitor compliance efforts in real-time.
                </p>
              </div>

              <div className="border-yellow-accent">
                <h3 className="text-2xl font-semibold mb-3">Completion Documentation</h3>
                <p className="text-lg text-accent-gray-light">
                  Detailed completion certificates, permits, and photos documenting all completed work.
                </p>
              </div>

              <div className="border-yellow-accent">
                <h3 className="text-2xl font-semibold mb-3">Compliance Verification</h3>
                <p className="text-lg text-accent-gray-light">
                  Confirmation that all inspection violations have been addressed and property is compliant.
                </p>
              </div>

              <div className="border-yellow-accent">
                <h3 className="text-2xl font-semibold mb-3">Reduced Default Risk</h3>
                <p className="text-lg text-accent-gray-light">
                  Fast, reliable repairs help your borrowers meet deadlines and avoid foreclosure proceedings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Form CTA */}
      <section id="contact-form" className="section bg-black text-white text-center">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Join Our <span className="text-primary-yellow">Partner Network</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us to discuss partnership opportunities and referral processes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg">
                Contact Us
              </Link>
              <a href="tel:2193448058" className="btn-secondary bg-transparent border-primary-yellow text-primary-yellow hover:bg-primary-yellow hover:text-black">
                Call (219) 344-8058
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
