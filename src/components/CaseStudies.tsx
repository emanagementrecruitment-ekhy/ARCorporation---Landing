import { motion } from "motion/react";
import { Section, SectionTitle } from "./ui/Section";
import { Card } from "./ui/Card";
import { stagger, viewport } from "../lib/motion";

// CONTOH / PLACEHOLDER: ganti dengan studi kasus klien nyata (dengan izin).
const cases = [
  { tag: "Retail", name: "Grup Ritel Nasional (contoh)", challenge: "Rekap absensi ratusan gerai memakan waktu berhari-hari.", solution: "Absensi terpusat dan monitoring lapangan real-time.", result: "40% efficiency gain" },
  { tag: "Construction", name: "Kontraktor Infrastruktur (contoh)", challenge: "Tim di banyak lokasi sulit dipantau dan dijadwalkan.", solution: "Dashboard penjadwalan dan kehadiran lintas proyek.", result: "Visibilitas tim 100% real-time" },
  { tag: "Facility Services", name: "Penyedia Jasa Facility (contoh)", challenge: "Laporan kinerja petugas disusun manual tiap minggu.", solution: "Analytics kinerja dan laporan otomatis.", result: "Laporan mingguan otomatis" },
];

export function CaseStudies() {
  return (
    <Section id="portfolio">
      <SectionTitle eyebrow="Portfolio" title="Success Stories" />
      <motion.ul initial="hidden" whileInView="show" viewport={viewport} variants={stagger} className="grid gap-6 lg:grid-cols-3">
        {cases.map((c) => (
          <li key={c.name} className="flex">
            <Card className="w-full">
              <span className="inline-block rounded-[4px] border border-gold-muted px-2 py-0.5 text-xs font-semibold uppercase tracking-widest text-gold">
                {c.tag}
              </span>
              <h3 className="mt-4 text-xl font-semibold">{c.name}</h3>
              <dl className="mt-4 space-y-3 text-sm">
                <div><dt className="font-semibold text-gold-muted">Challenge</dt><dd className="text-muted">{c.challenge}</dd></div>
                <div><dt className="font-semibold text-gold-muted">Solution</dt><dd className="text-muted">{c.solution}</dd></div>
                <div><dt className="font-semibold text-gold-muted">Result</dt><dd className="font-heading text-base font-semibold text-gold">{c.result}</dd></div>
              </dl>
            </Card>
          </li>
        ))}
      </motion.ul>
    </Section>
  );
}
