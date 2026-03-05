import CTA from "@/components/cta";
import FAQ from "@/components/faq";
import Hero from "@/components/hero";
import Problem from "@/components/problem";
import Showcase from "@/components/showcase";
import Testimonials from "@/components/testimonials";
import { siteConfig } from "@/config/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Chrome",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "5",
  },
  author: {
    "@type": "Person",
    name: siteConfig.author.name,
    url: siteConfig.author.url,
  },
  installUrl: siteConfig.links.chromeWebStore,
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Hero />
        <Problem />
        <Showcase />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
    </>
  );
}
