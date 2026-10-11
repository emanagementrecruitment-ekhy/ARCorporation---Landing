import { m } from "motion/react";
import { Section } from "./ui/Section";
import { fadeUp, stagger, viewport } from "../lib/motion";

// PLACEHOLDER: ganti dengan data real perusahaan.
const metrics = [
  ["150+", "Trusted Clients"],
  ["500+", "Successful Projects"],
  ["98%", "Client Satisfaction Rate"],
  ["24/7", "Dedicated Support Team"],
];

export function TrustMetrics() {
  return (
    <Section className="!py-12">
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
