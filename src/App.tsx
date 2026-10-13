import { lazy, Suspense, type ElementType } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AmbientBackground } from "./components/AmbientBackground";

const LazyBelow = lazy(() => import("./Below"));
const LazyFooter = lazy(() => import("./components/Footer").then((m) => ({ default: m.Footer })));

// Di browser, bagian bawah dimuat malas. Saat build (prerender) komponen asli dioper lewat props
// supaya seluruh isi halaman ikut tertulis di HTML statis, bukan di wadah tersembunyi.
export default function App({ Below = LazyBelow, Footer = LazyFooter }: { Below?: ElementType; Footer?: ElementType }) {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-gold focus:px-4 focus:py-2 focus:text-black">
        Lewati ke konten
      </a>
      <AmbientBackground />
      <Navbar />
      <main id="main" className="relative z-10">
        <Hero />
        <Suspense fallback={<div aria-hidden className="min-h-screen" />}>
          <Below />
        </Suspense>
      </main>
      <div className="relative z-10">
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
}
