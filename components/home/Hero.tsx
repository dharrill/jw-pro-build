export default function Hero() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center bg-black text-white">
      {/* Background overlay gradient */}
      <div className="absolute inset-0 gradient-dark z-0"></div>

      {/* Content */}
      <div className="container-custom relative z-10 py-20 md:py-32">
        <div className="max-w-4xl">
          {/* Trust badges */}
          <div className="flex flex-wrap gap-3 mb-8 animate-fade-in">
            <span className="badge-trust">Licensed</span>
            <span className="badge-trust">Insured</span>
            <span className="badge-trust">Certified</span>
            <span className="bg-primary-yellow text-black px-4 py-2 rounded-full text-sm font-medium">
              Timeline-Sensitive Repairs
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight animate-fade-in">
            Bank-Mandated Inspection Repairs Done Right,{" "}
            <span className="text-primary-yellow">On Time</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed animate-fade-in">
            Licensed contractors for multi-family properties. One call. Complete compliance.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <button className="btn-primary">
              Get Emergency Quote
            </button>
            <button className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-black">
              Learn About Our Process
            </button>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-gray-700">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-yellow mb-2">500+</div>
              <div className="text-sm md:text-base text-gray-300">Properties Completed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-yellow mb-2">60%</div>
              <div className="text-sm md:text-base text-gray-300">Faster Than Deadlines</div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="text-3xl md:text-4xl font-bold text-primary-yellow mb-2">15+</div>
              <div className="text-sm md:text-base text-gray-300">Lending Institutions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
