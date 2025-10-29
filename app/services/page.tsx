import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | JW ProBuild - Comprehensive Inspection Repair Services",
  description: "All-trades capability for bank-mandated inspection repairs. Structural, plumbing, electrical, HVAC, fire safety, parking, and interior repairs for multi-family properties.",
};

export default function ServicesPage() {
  const serviceCategories = [
    {
      title: "Structural & Roofing",
      icon: "🏗️",
      description: "Complete structural assessments and roofing solutions",
      services: [
        "Roof repairs and replacement",
        "Structural assessments and reinforcement",
        "Foundation repairs",
        "Load-bearing wall repairs",
        "Balcony and deck structural work",
        "Building envelope repairs",
      ],
      timeline: "2-6 weeks depending on scope",
    },
    {
      title: "Plumbing & Electrical",
      icon: "⚡",
      description: "Full system repairs and code compliance upgrades",
      services: [
        "Plumbing system repairs and upgrades",
        "Electrical panel replacements",
        "Code compliance electrical work",
        "Emergency plumbing repairs",
        "Water heater replacement",
        "Sewer and drain line repairs",
      ],
      timeline: "1-4 weeks depending on complexity",
    },
    {
      title: "HVAC & Mechanical",
      icon: "🔧",
      description: "Heating, cooling, and ventilation system expertise",
      services: [
        "HVAC system repairs and replacement",
        "Boiler and furnace repairs",
        "Ventilation system upgrades",
        "Cooling tower maintenance",
        "Air quality improvements",
        "Mechanical room upgrades",
      ],
      timeline: "1-3 weeks",
    },
    {
      title: "Fire Safety & Code Compliance",
      icon: "🔥",
      description: "Life safety systems and building code violations",
      services: [
        "Fire alarm system repairs",
        "Sprinkler system compliance",
        "Emergency egress improvements",
        "Fire door replacements",
        "Building code violation remediation",
        "Safety lighting upgrades",
      ],
      timeline: "2-4 weeks",
    },
    {
      title: "Parking & Infrastructure",
      icon: "🅿️",
      description: "Exterior property improvements and accessibility",
      services: [
        "Parking lot repairs and resurfacing",
        "Concrete repairs and replacement",
        "ADA compliance upgrades",
        "Drainage improvements",
        "Sidewalk and pathway repairs",
        "Striping and signage",
      ],
      timeline: "2-5 weeks depending on weather",
    },
    {
      title: "Interior & Common Areas",
      icon: "🏢",
      description: "Common area renovations and accessibility improvements",
      services: [
        "Lobby and entrance renovations",
        "Hallway and corridor upgrades",
        "Common area accessibility improvements",
        "Interior painting and finishes",
        "Flooring repairs and replacement",
        "Elevator cab improvements",
      ],
      timeline: "2-6 weeks depending on scope",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-black text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Comprehensive <span className="text-primary-yellow">Repair Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              All trades, one contractor. We handle every aspect of your bank-mandated inspection repairs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/get-quote" className="btn-primary">
                Get Emergency Quote
              </Link>
              <Link href="/contact" className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-black">
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="section bg-background-warm">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our Service Categories
            </h2>
            <p className="text-xl text-accent-gray-light max-w-3xl mx-auto">
              Licensed and insured for all trade work required for multi-family property compliance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <div key={index} className="card hover:shadow-card-hover transition-all">
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                <p className="text-accent-gray-light mb-4">{category.description}</p>

                <div className="border-t border-gray-200 pt-4 mb-4">
                  <h4 className="font-semibold mb-2">Services Include:</h4>
                  <ul className="space-y-2">
                    {category.services.map((service, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-primary-yellow mt-1">✓</span>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-primary-yellow text-black px-3 py-2 rounded-lg text-sm font-semibold">
                  Typical Timeline: {category.timeline}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Why Choose JW ProBuild
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div>
                <div className="text-4xl font-bold text-primary-yellow mb-2">500+</div>
                <p className="text-accent-gray-light">Multi-Family Properties Completed</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-yellow mb-2">60%</div>
                <p className="text-accent-gray-light">Faster Than Lender Deadlines</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-yellow mb-2">15+</div>
                <p className="text-accent-gray-light">Lending Institution Partnerships</p>
              </div>
            </div>
            <Link href="/get-quote" className="btn-primary text-lg">
              Start Your Project Today
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
