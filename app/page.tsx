import Comparison from "@/components/comparison";
import CTA from "@/components/cta";
import FAQ from "@/components/faq";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import Showcase from "@/components/showcase";
import Support from "@/components/support";
import Testimonials from "@/components/testimonials";
import TrustStrip from "@/components/trust-strip";
import UseCases from "@/components/use-cases";
import { siteConfig } from "@/config/site";
import { getStoreRating } from "@/utils/store-rating";

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
  author: {
    "@type": "Person",
    name: siteConfig.author.name,
    url: siteConfig.author.url,
  },
  installUrl: siteConfig.links.chromeWebStore,
};

export default async function Home() {
  const rating = await getStoreRating();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main id="main">
        <Hero rating={rating} />
        <TrustStrip rating={rating} />
        <HowItWorks />
        <Showcase />
        <Comparison />
        <UseCases />
        <Testimonials rating={rating} />
        <Support />
        <FAQ />
        <CTA />
      </main>
    </>
  );
}
