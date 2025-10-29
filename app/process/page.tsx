import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Process | JW ProBuild - How We Handle Inspection Repairs",
  description: "Step-by-step process for bank-mandated inspection repairs. From initial assessment to compliance verification, we guide you through every stage.",
};

export default function ProcessPage() {
  const steps = [
    {
      day: "Day 1-2",
      title: "Initial Assessment",
      description: "We review your inspection report and schedule a site visit",
      details: [
        "Contact received within 2 hours",
        "Documentation reviewed",
        "Site visit scheduled",
        "Initial consultation",
      ],
    },
    {
      day: "Day 3-5",
      title: "Site Evaluation",
      description: "Comprehensive on-site inspection and scope definition",
      details: [
        "Detailed property inspection",
        "Repair scope defined",
        "Timeline established",
        "Detailed quote provided",
      ],
    },
    {
      day: "Day 6-10",
      title: "Approval & Mobilization",
      description: "Contract finalization and crew mobilization",
      details: [
        "Quote approved by client",
        "Contracts finalized",
        "Crews mobilized",
        "Materials ordered and staged",
      ],
    },
    {
      day: "Week 2-8",
      title: "Execution",
      description: "Repairs completed with daily progress updates",
      details: [
        "Daily communication",
        "Photo progress updates",
        "Issue resolution",
        "Quality control inspections",
      ],
    },
    {
      day: "Completion",
      title: "Inspection Pass",
      description: "Final verification and compliance documentation",
      details: [
        "Final walk-through inspection",
        "Compliance documentation provided",
        "Lien releases issued",
        "Lender notification of completion",
      ],
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-black text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-primary-yellow">Process</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Clear, transparent steps from initial contact to successful compliance
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-background-warm">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative pb-12 last:pb-0">
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-primary-yellow"></div>
                )}

                <div className="flex gap-6">
                  {/* Timeline Dot */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary-yellow rounded-full flex items-center justify-center">
                      <span className="text-black font-bold text-sm text-center leading-tight">
                        {step.day}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 card">
                    <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                    <p className="text-accent-gray-light mb-4">{step.description}</p>

                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-accent-green flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-black text-white text-center">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get your emergency quote within 24 hours
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
