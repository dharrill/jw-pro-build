import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | JW ProBuild - Licensed Inspection Repair Specialists",
  description: "Learn about JW ProBuild's expertise in bank-mandated inspection repairs for multi-family properties. Licensed, insured, and trusted by 15+ lending institutions.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-black text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-primary-yellow">JW ProBuild</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Specialized expertise in bank-mandated inspection repairs for multi-family properties
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section bg-background-warm">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Our Story</h2>
            <div className="space-y-6 text-lg text-accent-gray-light leading-relaxed">
              <p>
                JW ProBuild was founded with a singular focus: helping property owners navigate the complex and time-sensitive process of bank-mandated inspection repairs. We saw too many property owners struggling to coordinate multiple contractors, meet strict lender deadlines, and avoid foreclosure.
              </p>
              <p>
                Our solution was simple but powerful: provide comprehensive, all-trades capability under one roof. No more coordinating between roofers, electricians, plumbers, and HVAC specialists. One call, one contract, complete compliance.
              </p>
              <p>
                Today, we've completed over 500 multi-family property inspection repairs and partnered with 15+ lending institutions who trust us to help their borrowers meet critical compliance deadlines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
              Credentials & Certifications
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-yellow">
                <h3 className="text-xl font-bold mb-2">Licensed General Contractor</h3>
                <p>
                  Fully licensed for all trade work required for multi-family property compliance
                </p>
              </div>

              <div className="card-yellow">
                <h3 className="text-xl font-bold mb-2">Comprehensive Insurance</h3>
                <p>
                  General liability and workers' compensation insurance protecting your property
                </p>
              </div>

              <div className="card-yellow">
                <h3 className="text-xl font-bold mb-2">Trade Certifications</h3>
                <p>
                  Licensed electricians, plumbers, HVAC technicians, and specialized tradespeople
                </p>
              </div>

              <div className="card-yellow">
                <h3 className="text-xl font-bold mb-2">A+ BBB Rating</h3>
                <p>
                  Verified track record of customer satisfaction and professional excellence
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* By The Numbers */}
      <section className="section bg-background-warm">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-12">
              JW ProBuild By The Numbers
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-5xl font-bold text-primary-yellow mb-2">500+</div>
                <p className="text-accent-gray-light">Properties Completed</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary-yellow mb-2">60%</div>
                <p className="text-accent-gray-light">Faster Than Deadlines</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary-yellow mb-2">15+</div>
                <p className="text-accent-gray-light">Lender Partnerships</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary-yellow mb-2">24/7</div>
                <p className="text-accent-gray-light">Emergency Service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-black text-white text-center">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Work With a Trusted Partner
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Experience the JW ProBuild difference on your next inspection repair project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-quote" className="btn-primary text-lg">
                Get Emergency Quote
              </Link>
              <Link href="/contact" className="btn-secondary bg-transparent border-primary-yellow text-primary-yellow hover:bg-primary-yellow hover:text-black">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
