import CTA from "@/components/cta";
import FAQ from "@/components/faq";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Problem from "@/components/problem";
import Showcase from "@/components/showcase";
import Testimonials from "@/components/testimonials";
import UseCases from "@/components/use-cases";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Features />
      <Showcase />
      <Testimonials />
      <UseCases />
      <FAQ />
      <CTA />
    </main>
  );
}
