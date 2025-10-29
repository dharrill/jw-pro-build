import Link from "next/link";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Logo size="sm" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Licensed contractors specializing in bank-mandated inspection repairs for multi-family properties.
            </p>
            <div className="flex gap-2">
              <span className="text-xs bg-primary-yellow text-black px-3 py-1 rounded-full font-semibold">
                Licensed
              </span>
              <span className="text-xs bg-primary-yellow text-black px-3 py-1 rounded-full font-semibold">
                Insured
              </span>
              <span className="text-xs bg-primary-yellow text-black px-3 py-1 rounded-full font-semibold">
                Certified
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/process", label: "Our Process" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-yellow transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Structural & Roofing</li>
              <li>Plumbing & Electrical</li>
              <li>HVAC & Mechanical</li>
              <li>Fire Safety & Code</li>
              <li>Parking & Infrastructure</li>
              <li>Interior & Common Areas</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-gray-500 mb-1">Emergency Quote</p>
                <a
                  href="tel:2193448058"
                  className="text-primary-yellow font-semibold hover:underline text-lg"
                >
                  (219) 344-8058
                </a>
              </div>
              <div>
                <p className="text-gray-500 mb-1">Email</p>
                <a
                  href="mailto:info@jwprobuild.com"
                  className="text-gray-400 hover:text-primary-yellow transition-colors"
                >
                  info@jwprobuild.com
                </a>
              </div>
              <div>
                <p className="text-gray-500 mb-1">Hours</p>
                <p className="text-gray-400">24/7 Emergency Service</p>
                <p className="text-gray-400">Office: Mon-Fri 8am-6pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© {currentYear} JW ProBuild. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-primary-yellow transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary-yellow transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
