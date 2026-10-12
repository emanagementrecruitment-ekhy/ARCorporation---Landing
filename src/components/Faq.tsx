import { useState } from "react";
import { AnimatePresence, m } from "motion/react";
import { Plus } from "lucide-react";
import { Section, SectionTitle } from "./ui/Section";

const faqs = [
  ["Berapa lama implementasi sistem?", "Tergantung skala dan kebutuhan integrasi. Estimasi waktu kami sampaikan setelah tahap konsultasi dan assessment."],
  ["Apakah sistem compatible dengan HR tools existing?", "Kebutuhan integrasi dengan tools HR yang sudah Anda gunakan kami bahas saat konsultasi, agar solusinya sesuai kondisi perusahaan Anda."],
  ["Bagaimana keamanan data karyawan?", "Keamanan data adalah prioritas. Kebijakan dan standar keamanan yang kami terapkan dijelaskan secara rinci saat konsultasi."],
  ["Apakah ada training untuk team?", "Ya, setiap implementasi mencakup training dan onboarding untuk tim HR dan supervisor lapangan."],
  ["Berapa biaya setup?", "Biaya instalasi dan penyiapan aplikasi adalah Rp 3.000.000 (sekali bayar), berlaku untuk semua paket langganan. Sudah termasuk Web, Aplikasi Android, dan AR Corp Desktop dengan mode offline, tanpa biaya tambahan."],
  ["Apa dukungan yang diberikan setelah go-live?", "Tim support kami mendampingi setelah go-live dengan dukungan berkelanjutan sesuai paket yang dipilih."],
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="faq" className="bg-[#05060d]/60">
      <SectionTitle eyebrow="FAQ" title="Frequently Asked Questions" />
      <div className="mx-auto max-w-3xl space-y-3">
        {faqs.map(([q, a], i) => {
          const isOpen = open === i;
          return (
            <div key={q} className="rounded-lg border border-gold-muted/60 bg-black">
              <h3 className="text-base">
                <button
                  id={`faq-btn-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="group flex min-h-[44px] w-full cursor-pointer items-center justify-between gap-4 p-5 text-left font-heading font-medium text-gold"
                >
                  <span className="group-hover:underline">{q}</span>
                  <m.span aria-hidden animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className="shrink-0">
                    <Plus />
                  </m.span>
                </button>
              </h3>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <m.div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-btn-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm text-muted">{a}</p>
                  </m.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

