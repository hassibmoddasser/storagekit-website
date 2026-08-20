import CTA from "@/components/cta";
import FAQ from "@/components/faq";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import Problem from "@/components/problem";
import Showcase from "@/components/showcase";
import Testimonials from "@/components/testimonials";
import TrustStrip from "@/components/trust-strip";
import UseCases from "@/components/use-cases";
import { siteConfig } from "@/config/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  applicationCategory: "DeveloperApplication",
  applicationSubCategory: "Browser Extension",
  operatingSystem: "Windows, macOS, Linux, ChromeOS",
  browserRequirements: "Requires Google Chrome or another Chromium browser",
  softwareVersion: siteConfig.version,
  image: `${siteConfig.url}/og-image.png`,
  screenshot: `${siteConfig.url}/og-image.png`,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: siteConfig.rating,
    bestRating: "5",
    worstRating: "1",
    ratingCount: String(siteConfig.reviewCount),
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
      <main id="main">
        <Hero />
        <TrustStrip />
        <Problem />
        <HowItWorks />
        <Showcase />
        <UseCases />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
    </>
  );
}
