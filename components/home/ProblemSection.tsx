export default function ProblemSection() {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              The Problem
            </h2>
            <div className="w-24 h-1 bg-primary-yellow mx-auto mb-6"></div>
            <p className="text-xl text-accent-gray-light">
              Why lenders require property inspections and what happens when violations are found
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="border-yellow-accent">
              <h3 className="text-2xl font-semibold mb-3">Bank-Mandated Inspections</h3>
              <p className="text-lg text-accent-gray-light leading-relaxed">
                When multi-family properties are financed or refinanced, lending institutions conduct
                comprehensive inspections to protect their investment. These inspections identify safety
                violations, code compliance issues, and maintenance deficiencies that must be corrected
                within strict timelines.
              </p>
            </div>

            <div className="border-yellow-accent">
              <h3 className="text-2xl font-semibold mb-3">Timeline-Critical Requirements</h3>
              <p className="text-lg text-accent-gray-light leading-relaxed">
                Lenders impose firm deadlines for completing mandated repairs—often 30 to 90 days.
                These aren't suggestions. Missing deadlines can trigger loan acceleration, additional
                fees, or foreclosure proceedings.
              </p>
            </div>

            <div className="border-yellow-accent">
              <h3 className="text-2xl font-semibold mb-3">Complex, Multi-Trade Work</h3>
              <p className="text-lg text-accent-gray-light leading-relaxed">
                Inspection reports often require work across multiple trades: roofing, plumbing,
                electrical, structural repairs, fire safety systems, and more. Coordinating multiple
                contractors creates delays and increases the risk of missing critical deadlines.
              </p>
            </div>
          </div>

          {/* Call-out box */}
          <div className="card-yellow mt-12">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-primary-yellow text-2xl font-bold">
                  !
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">The Stakes Are High</h4>
                <p className="text-base">
                  Property owners facing inspection violations risk foreclosure if repairs aren't
                  completed on time. This is where specialized expertise makes the difference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
