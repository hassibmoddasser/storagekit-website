import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Features from "./components/Features";
import Showcase from "./components/Showcase";
import Testimonials from "./components/Testimonials";
import UseCases from "./components/UseCases";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
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
      <Footer />
    </>
  );
}
