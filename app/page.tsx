import CTA from "@/components/cta";
import FAQ from "@/components/faq";
import Hero from "@/components/hero";
import Problem from "@/components/problem";
import Showcase from "@/components/showcase";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Showcase />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  );
}
