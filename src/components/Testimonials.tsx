import { m } from "motion/react";
import { Star } from "lucide-react";
import { Section, SectionTitle } from "./ui/Section";
import { stagger, viewport } from "../lib/motion";
import type { Variants } from "motion/react";

// CONTOH / PLACEHOLDER: ganti dengan testimoni nyata (dengan izin klien).
const items = [
  { name: "Nama Owner", role: "Owner, Perusahaan Contoh A", quote: "Tempat untuk testimoni nyata dari owner klien Anda tentang peningkatan efisiensi HR lapangan." },
  { name: "Nama HR Manager", role: "HR Manager, Perusahaan Contoh B", quote: "Tempat untuk testimoni nyata tentang kemudahan monitoring tim lapangan secara real-time." },
  { name: "Nama Direktur", role: "Direktur Operasional, Perusahaan Contoh C", quote: "Tempat untuk testimoni nyata tentang kualitas dukungan dan hasil implementasi sistem." },
];

const fadeScale: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

export function Testimonials() {
  return (
    <Section id="testimonial" className="bg-[#0a0a0a]">
      <SectionTitle eyebrow="Testimonial" title="What Our Clients Say" />
      <m.ul initial="hidden" whileInView="show" viewport={viewport} variants={stagger} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((t) => (
          <m.li key={t.name} variants={fadeScale} className="flex">
            <figure className="m-0 flex w-full flex-col rounded-lg border border-gold-muted bg-black p-6 transition-shadow hover:shadow-[0_0_28px_rgba(255,215,0,.2)] sm:p-8">
              <div role="img" aria-label="Rating 5 dari 5 bintang" className="mb-4 flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, n) => (
                  <Star key={n} size={18} fill="currentColor" aria-hidden />
                ))}
              </div>
              <blockquote className="m-0 flex-1 text-base italic text-muted">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-6">
                <p className="font-heading text-lg font-bold text-white">{t.name}</p>
                <p className="text-sm text-muted">{t.role}</p>
              </figcaption>
            </figure>
          </m.li>
        ))}
      </m.ul>
    </Section>
  );
}
