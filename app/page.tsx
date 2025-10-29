import Hero from "@/components/home/Hero";
import ProblemSection from "@/components/home/ProblemSection";
import SolutionSection from "@/components/home/SolutionSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <ServicesOverview />
      <Testimonials />
      <CTASection />
    </main>
  );
}

