import { lazy, Suspense } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";

const Below = lazy(() => import("./Below"));
const Footer = lazy(() => import("./components/Footer").then((m) => ({ default: m.Footer })));

export default function App() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-gold focus:px-4 focus:py-2 focus:text-black">
        Lewati ke konten
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Suspense fallback={<div aria-hidden className="min-h-screen" />}>
          <Below />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}
