import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | JW ProBuild",
  description: "Terms of service for the JW ProBuild website.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-black text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Terms of <span className="text-primary-yellow">Service</span>
            </h1>
            <p className="text-xl text-gray-300">Last updated: {new Date().getFullYear()}</p>
          </div>
        </div>
      </section>

      <section className="section bg-background-warm">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-accent-gray-light leading-relaxed">
            <p>
              These Terms of Service govern your use of the JW ProBuild website. This is a
              placeholder document and will be updated with the final version prior to launch.
            </p>

            <h2 className="text-2xl font-bold text-black pt-4">Use of Site</h2>
            <p>
              The content on this site is provided for informational purposes. Submitting a quote
              request does not create a contractual obligation; project terms are set out in a
              separate written agreement.
            </p>

            <h2 className="text-2xl font-bold text-black pt-4">Service Disclaimer</h2>
            <p>
              All construction services are provided under separate written contracts. Pricing,
              timelines, and scope shown on this site are illustrative and subject to project-
              specific assessment.
            </p>

            <h2 className="text-2xl font-bold text-black pt-4">Limitation of Liability</h2>
            <p>
              JW ProBuild is not liable for any indirect or consequential damages arising from use
              of this website. Site content is provided as-is without warranty.
            </p>

            <h2 className="text-2xl font-bold text-black pt-4">Contact</h2>
            <p>
              Questions about these terms? Email{" "}
              <a href="mailto:info@jwprobuild.com" className="text-primary-yellow hover:underline">
                info@jwprobuild.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
