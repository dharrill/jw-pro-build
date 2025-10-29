export default function CTASection() {
  return (
    <section className="section bg-black text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Don't Risk <span className="text-primary-yellow">Foreclosure</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Get your inspection repairs done right, on time, with one comprehensive contractor.
          </p>

          {/* Emergency banner */}
          <div className="inline-flex items-center gap-3 bg-accent-red text-white px-6 py-3 rounded-lg mb-8">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-semibold">Deadline Approaching? We Can Help</span>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="btn-primary text-lg">
              Get Emergency Quote
            </button>
            <a href="tel:2193448058" className="btn-secondary bg-transparent border-primary-yellow text-primary-yellow hover:bg-primary-yellow hover:text-black">
              Call Now: (219) 344-8058
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-yellow" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Response in 2 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-yellow" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Quote in 24 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-yellow" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Licensed for all trades</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
