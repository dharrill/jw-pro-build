import Link from "next/link";
import { heroContent } from "@/content/home";

export default function Hero() {
  const { badges, accentBadge, headline, subhead, ctas, stats } = heroContent;

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center bg-black text-white">
      <div className="absolute inset-0 gradient-dark z-0"></div>

      <div className="container-custom relative z-10 py-20 md:py-32">
        <div className="max-w-4xl">
          <div className="flex flex-wrap gap-3 mb-8 animate-fade-in">
            {badges.map((badge) => (
              <span key={badge} className="badge-trust">
                {badge}
              </span>
            ))}
            <span className="bg-primary-yellow text-black px-4 py-2 rounded-full text-sm font-medium">
              {accentBadge}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight animate-fade-in">
            {headline.leading}{" "}
            <span className="text-primary-yellow">{headline.accent}</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed animate-fade-in">
            {subhead}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            {ctas.map((cta) =>
              cta.variant === "primary" ? (
                <Link key={cta.href} href={cta.href} className="btn-primary text-center">
                  {cta.label}
                </Link>
              ) : (
                <Link
                  key={cta.href}
                  href={cta.href}
                  className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-black text-center"
                >
                  {cta.label}
                </Link>
              )
            )}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-gray-700">
            {stats.map((stat, idx) => (
              <div key={stat.label} className={idx === 2 ? "col-span-2 md:col-span-1" : ""}>
                <div className="text-3xl md:text-4xl font-bold text-primary-yellow mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
