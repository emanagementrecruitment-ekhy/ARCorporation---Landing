import { useEffect } from "react";
import { TrustMetrics } from "./components/TrustMetrics";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { CaseStudies } from "./components/CaseStudies";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { Faq } from "./components/Faq";
import { FinalCta } from "./components/FinalCta";
import { SHOW } from "./lib/site";

// Bagian di bawah hero. Dimuat setelah hero tampil supaya JavaScript awal lebih ringan.
export default function Below() {
  // Jika halaman dibuka dengan #bagian (mis. /#pricing), lompat setelah konten ini siap.
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (id) document.getElementById(id)?.scrollIntoView({ behavior: "instant" });
  }, []);

  return (
    <>
      {SHOW.metrics && <TrustMetrics />}
      <Services />
      <Process />
      {SHOW.caseStudies && <CaseStudies />}
      {SHOW.testimonials && <Testimonials />}
      <Pricing />
      <Faq />
      <FinalCta />
    </>
  );
}
