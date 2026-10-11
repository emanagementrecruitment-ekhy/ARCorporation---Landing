import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TrustMetrics } from "./components/TrustMetrics";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { CaseStudies } from "./components/CaseStudies";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { Faq } from "./components/Faq";
import { FinalCta } from "./components/FinalCta";
import { Footer } from "./components/Footer";
import { SHOW } from "./lib/site";

export default function App() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-gold focus:px-4 focus:py-2 focus:text-black">
        Lewati ke konten
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        {SHOW.metrics && <TrustMetrics />}
        <Services />
        <Process />
        {SHOW.caseStudies && <CaseStudies />}
        {SHOW.testimonials && <Testimonials />}
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}

