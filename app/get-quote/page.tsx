import GHLFormEmbed from "@/components/forms/GHLFormEmbed";
import { GHL_FORM_IDS } from "@/lib/ghl-form-ids";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Emergency Quote | Commercial Apartment Repair Contractor",
  description: "Fast quote for commercial apartment repairs and multi-family property inspection violations. Response within 2 hours. Licensed contractor for all trades.",
};

export default function GetQuotePage() {
  return (
    <main className="min-h-screen">
      <div className="grid lg:grid-cols-2 gap-0">
        {/* Left Side - Content */}
        <div className="bg-background-warm px-6 py-12 md:px-12 lg:px-16 lg:py-20">
          <div className="max-w-2xl">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Bank-Mandated Inspection Repairs{" "}
                <span className="text-primary-yellow">Done On Time</span>
              </h1>
              <p className="text-xl text-accent-gray-light">
                Prevent foreclosure. Get compliant. Keep your property.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4 mb-10">
              {[
                "Licensed for all trade work",
                "One-stop comprehensive repairs",
                "Average completion: 60% faster than deadlines",
                "Works with lender timelines",
                "500+ multi-family properties completed",
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary-yellow rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-lg text-accent-gray">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Trust Elements */}
            <div className="border-t border-gray-300 pt-8">
              <div className="flex flex-wrap gap-4 mb-6">
                <span className="badge-trust">Licensed</span>
                <span className="badge-trust">Insured</span>
                <span className="badge-trust">Certified</span>
              </div>
              <div className="space-y-3 text-accent-gray-light">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent-green" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium">Partnered with 15+ lending institutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent-green" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium">A+ BBB Rating</span>
                </div>
              </div>
            </div>

            {/* Timeline Urgency */}
            <div className="mt-10 p-6 bg-primary-yellow rounded-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Need Urgent Repairs?</h3>
                  <p className="text-black text-base">
                    Get a quote within 24 hours. Call us directly:{" "}
                    <a href="tel:2193448058" className="font-bold underline">
                      (219) 344-8058
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form (Sticky on desktop) */}
        <div className="bg-white px-6 py-12 md:px-12 lg:px-16 lg:py-20">
          <div className="max-w-xl mx-auto lg:mx-0 lg:sticky lg:top-32">
            {/* TODO: Replace GHL_FORM_IDS.QUOTE placeholder with real form ID once GHL form is built */}
            <GHLFormEmbed
              formId={GHL_FORM_IDS.QUOTE}
              formTitle="JW ProBuild Quote Request"
              formHeight={900}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
