import { motion } from "motion/react";
import { Section, SectionTitle } from "./ui/Section";
import { fadeUp, stagger, viewport } from "../lib/motion";

const steps = [
  ["Consultation & Assessment", "Memahami struktur organisasi, kebutuhan lapangan, dan target bisnis Anda."],
  ["System Integration & Setup", "Instalasi dan penyiapan aplikasi Web, Android, dan AR Corp Desktop sesuai kebutuhan perusahaan."],
  ["Team Training & Onboarding", "Melatih tim HR dan supervisor hingga siap mengoperasikan sistem."],
  ["Deployment & Go-Live", "Peluncuran bertahap dengan pemantauan agar transisi berjalan mulus."],
  ["Support & Continuous Optimization", "Dukungan berkelanjutan dan optimasi sistem seiring pertumbuhan bisnis."],
];

export function Process() {
  return (
    <Section id="process" className="bg-[#0a0a0a]">
      <SectionTitle eyebrow="Process" title="Bagaimana Sistem Kami Bekerja" />
      <motion.ol
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={stagger}
        className="relative grid gap-8 before:absolute before:bottom-6 before:left-6 before:top-6 before:w-px before:bg-gold-muted/40 lg:grid-cols-5 lg:gap-4 lg:before:hidden"
      >
        {/* Connecting line (desktop): draws left to right */}
        <motion.span
          aria-hidden
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={viewport}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
          className="absolute left-[10%] right-[10%] top-6 hidden h-px bg-gold-muted lg:block"
        />
        {steps.map(([title, text], i) => (
          <motion.li key={title} variants={fadeUp} className="relative pl-16 lg:pl-0 lg:text-center">
            <span
              aria-hidden
              className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold bg-black font-heading text-lg font-bold text-gold lg:static lg:mx-auto"
            >
              {i + 1}
            </span>
            <h3 className="mt-0 text-base font-semibold lg:mt-4">
              <span className="sr-only">Langkah {i + 1}: </span>{title}
            </h3>
            <p className="mt-2 text-sm text-muted">{text}</p>
          </motion.li>
        ))}
      </motion.ol>
    </Section>
  );
}

