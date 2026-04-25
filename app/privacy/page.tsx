import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | JW ProBuild",
  description: "Privacy policy for JW ProBuild website and services.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-black text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Privacy <span className="text-primary-yellow">Policy</span>
            </h1>
            <p className="text-xl text-gray-300">Last updated: {new Date().getFullYear()}</p>
          </div>
        </div>
      </section>

      <section className="section bg-background-warm">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-accent-gray-light leading-relaxed">
            <p>
              This Privacy Policy describes how JW ProBuild collects, uses, and protects information
              you provide through this website. This is a placeholder document and will be updated
              with the final version prior to launch.
            </p>

            <h2 className="text-2xl font-bold text-black pt-4">Information We Collect</h2>
            <p>
              When you submit a quote request, contact form, or call our office, we collect the
              information you provide (such as name, email, phone number, and property details) to
              respond to your inquiry and provide our services.
            </p>

            <h2 className="text-2xl font-bold text-black pt-4">How We Use Information</h2>
            <p>
              We use submitted information solely to respond to inquiries, deliver requested
              services, and follow up with quotes or project updates. We do not sell your
              information.
            </p>

            <h2 className="text-2xl font-bold text-black pt-4">Analytics & Call Tracking</h2>
            <p>
              We use analytics and call-tracking tools (including Google Analytics and
              WhatConverts) to understand site usage and route inquiries appropriately. These
              tools may set cookies or swap displayed phone numbers for tracking purposes.
            </p>

            <h2 className="text-2xl font-bold text-black pt-4">Contact</h2>
            <p>
              Questions about this policy? Email us at{" "}
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
