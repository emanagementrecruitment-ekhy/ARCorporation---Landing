import { m } from "motion/react";
import { Section } from "./ui/Section";
import { fadeUp, stagger, viewport } from "../lib/motion";

// Fakta yang pasti benar (diambil dari paket dan produk). Ganti dengan angka klien bila data aslinya sudah ada.
const metrics = [
  ["3", "Platform: Web, Android, dan AR Corp Desktop"],
  ["Offline", "Mode offline pada AR Corp Desktop"],
  ["1×", "Biaya instalasi sekali bayar, tanpa biaya tambahan"],
  ["Lifetime", "Paket Pro tanpa langganan bulanan"],
];

export function TrustMetrics() {
  return (
    <Section className="!py-12">
      <h2 className="sr-only">Keunggulan sistem</h2>
      <m.ul
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={stagger}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {metrics.map(([value, label]) => (
          <m.li
            key={label}
            variants={fadeUp}
            className="rounded-lg border border-gold-muted bg-black p-6 text-center"
          >
            <p className="font-heading text-4xl font-bold text-gold">{value}</p>
            <p className="mt-2 text-sm text-muted">{label}</p>
          </m.li>
        ))}
      </m.ul>
    </Section>
  );
}
