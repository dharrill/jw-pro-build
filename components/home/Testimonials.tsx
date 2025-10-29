export default function Testimonials() {
  const testimonials = [
    {
      quote: "JW ProBuild saved our property. We were facing foreclosure with a 60-day deadline for extensive repairs. They completed everything in 45 days and handled all the documentation for our lender.",
      author: "Michael Chen",
      role: "Property Manager, 240-unit Complex",
      rating: 5,
    },
    {
      quote: "Finally, a contractor who understands lender timelines. Their all-trades capability meant no coordination headaches. One call, one contract, complete compliance.",
      author: "Sarah Martinez",
      role: "Owner, Senior Living Facility",
      rating: 5,
    },
    {
      quote: "We've partnered with JW ProBuild for 3 years. They're our go-to referral for borrowers facing inspection violations. Fast, reliable, and they understand the stakes.",
      author: "David Thompson",
      role: "VP of Lending, Regional Bank",
      rating: 5,
    },
  ];

  return (
    <section className="section bg-background-warm">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-primary-yellow mx-auto mb-6"></div>
          <p className="text-xl text-accent-gray-light">
            Property owners and lenders trust JW ProBuild for critical inspection repairs
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card hover:shadow-card-hover transition-shadow">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-primary-yellow"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-accent-gray-light mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="border-t border-gray-200 pt-4">
                <div className="font-semibold text-black">{testimonial.author}</div>
                <div className="text-sm text-accent-gray-light">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap justify-center gap-8 items-center text-accent-gray-light">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-accent-green" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">A+ BBB Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-accent-green" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Fully Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-accent-green" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">15+ Lender Partnerships</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
