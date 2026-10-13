// Dipakai hanya saat build: menghasilkan HTML statis halaman agar isinya terbaca
// mesin pencari tanpa menjalankan JavaScript. Di browser, React tetap mengambil alih.
import { prerender } from "react-dom/static";
import { LazyMotion, MotionConfig, domAnimation } from "motion/react";
import App from "./App";
import Below from "./Below";
import { Footer } from "./components/Footer";

export { faqs } from "./components/Faq";

export async function render(): Promise<string> {
  const { prelude } = await prerender(
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation} strict>
        <App Below={Below} Footer={Footer} />
      </LazyMotion>
    </MotionConfig>,
    // Tanpa ini React memindahkan bagian besar ke wadah tersembunyi; kita ingin semuanya inline.
    { progressiveChunkSize: Number.MAX_SAFE_INTEGER }
  );
  return await new Response(prelude).text();
}