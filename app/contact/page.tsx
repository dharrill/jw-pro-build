import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us | JW ProBuild - Get Your Emergency Quote Today",
  description: "Contact JW ProBuild for bank-mandated inspection repairs. Call (219) 344-8058 for emergency quotes. Response within 2 hours.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-black text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contact <span className="text-primary-yellow">JW ProBuild</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Get your emergency quote within 24 hours
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section bg-background-warm">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Phone */}
              <div className="card text-center">
                <div className="w-16 h-16 bg-primary-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Call Us</h3>
                <p className="text-accent-gray-light mb-4">For immediate assistance</p>
                <a href="tel:2193448058" className="text-2xl font-bold text-primary-yellow hover:underline">
                  (219) 344-8058
                </a>
                <p className="text-sm text-accent-gray-light mt-2">24/7 Emergency Service</p>
              </div>

              {/* Email */}
              <div className="card text-center">
                <div className="w-16 h-16 bg-primary-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                <p className="text-accent-gray-light mb-4">General inquiries</p>
                <a href="mailto:info@jwprobuild.com" className="text-lg font-bold text-primary-yellow hover:underline">
                  info@jwprobuild.com
                </a>
                <p className="text-sm text-accent-gray-light mt-2">Response within 24 hours</p>
              </div>

              {/* Quote Form */}
              <div className="card text-center">
                <div className="w-16 h-16 bg-primary-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Get a Quote</h3>
                <p className="text-accent-gray-light mb-4">Online quote form</p>
                <Link href="/get-quote" className="btn-primary">
                  Start Your Quote
                </Link>
                <p className="text-sm text-accent-gray-light mt-2">Quote within 24 hours</p>
              </div>
            </div>

            {/* Office Hours */}
            <div className="card-yellow text-center">
              <h3 className="text-2xl font-bold mb-4">Office Hours</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
                <div>
                  <p className="font-semibold mb-1">Business Hours:</p>
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Emergency Service:</p>
                  <p>Available 24/7 for urgent inspection repair needs</p>
                  <p className="mt-2">Call anytime: <a href="tel:2193448058" className="font-bold underline">(219) 344-8058</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="border-yellow-accent">
                <h3 className="text-xl font-bold mb-2">How quickly can you respond?</h3>
                <p className="text-accent-gray-light">
                  We respond to all inquiries within 2 hours during business hours and provide detailed quotes within 24 hours.
                </p>
              </div>

              <div className="border-yellow-accent">
                <h3 className="text-xl font-bold mb-2">Do you work on weekends?</h3>
                <p className="text-accent-gray-light">
                  Yes! For urgent inspection repair deadlines, we can mobilize crews on weekends and work extended hours to meet your timeline.
                </p>
              </div>

              <div className="border-yellow-accent">
                <h3 className="text-xl font-bold mb-2">What areas do you serve?</h3>
                <p className="text-accent-gray-light">
                  We serve multi-family properties throughout the region. Contact us to confirm we service your property's location.
                </p>
              </div>

              <div className="border-yellow-accent">
                <h3 className="text-xl font-bold mb-2">Are you licensed and insured?</h3>
                <p className="text-accent-gray-light">
                  Yes, we are fully licensed as a general contractor for all trades, carry comprehensive liability insurance, and maintain workers' compensation coverage.
                </p>
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
              Don't Wait - <span className="text-primary-yellow">Get Started Today</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Every day counts when facing inspection repair deadlines
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-quote" className="btn-primary text-lg">
                Get Emergency Quote
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
