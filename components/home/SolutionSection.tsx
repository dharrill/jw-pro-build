import Link from "next/link";

export default function SolutionSection() {
  return (
    <section className="section bg-background-warm">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              How JW ProBuild <span className="text-primary-yellow">Solves This</span>
            </h2>
            <div className="w-24 h-1 bg-primary-yellow mx-auto mb-6"></div>
            <p className="text-xl text-accent-gray-light">
              One-stop inspection repair services that prevent foreclosure and ensure compliance
            </p>
          </div>

          {/* Solution grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Solution 1 */}
            <div className="card hover:shadow-card-hover transition-shadow">
              <div className="w-14 h-14 bg-primary-yellow rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">All-Trades Capability</h3>
              <p className="text-accent-gray-light leading-relaxed">
                Licensed for every trade you need: roofing, plumbing, electrical, structural, HVAC,
                fire safety, and more. One contractor handles your entire repair scope.
              </p>
            </div>

            {/* Solution 2 */}
            <div className="card hover:shadow-card-hover transition-shadow">
              <div className="w-14 h-14 bg-primary-yellow rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Timeline Expertise</h3>
              <p className="text-accent-gray-light leading-relaxed">
                We understand lender deadlines. Our average completion time is 60% faster than
                required timelines, giving you peace of mind and compliance assurance.
              </p>
            </div>

            {/* Solution 3 */}
            <div className="card hover:shadow-card-hover transition-shadow">
              <div className="w-14 h-14 bg-primary-yellow rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Multi-Family Specialists</h3>
              <p className="text-accent-gray-light leading-relaxed">
                500+ apartment complexes, senior living facilities, and affordable housing properties
                completed. We know the unique challenges of multi-family inspection repairs.
              </p>
            </div>

            {/* Solution 4 */}
            <div className="card hover:shadow-card-hover transition-shadow">
              <div className="w-14 h-14 bg-primary-yellow rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Complete Documentation</h3>
              <p className="text-accent-gray-light leading-relaxed">
                Detailed progress reports, photo documentation, and compliance verification for your
                lender. We handle the paperwork so you can focus on your property.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link href="/get-quote" className="btn-primary text-lg inline-block">
              Get Your Emergency Quote Now
            </Link>
            <p className="text-sm text-accent-gray-light mt-4">
              Response within 2 hours • Quote within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
