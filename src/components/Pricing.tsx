import { m } from "motion/react";
import { Check } from "lucide-react";
import { Section, SectionTitle } from "./ui/Section";
import { Button } from "./ui/Button";
import { fadeUp, stagger, viewport } from "../lib/motion";
import { waLink } from "../lib/site";

const plans = [
  { name: "Langganan 3 Bulan", badge: "", price: "Rp 500.000", per: "per 3 bulan", capacity: "50 karyawan/Tera", bonus: "+ Bonus 10 = total 60", initial: "Total biaya awal: Rp 3.500.000", featured: false },
  { name: "Langganan 6 Bulan", badge: "Paling Populer", price: "Rp 1.000.000", per: "per 6 bulan", capacity: "75 karyawan/Tera", bonus: "+ Bonus 25 = total 100", initial: "Total biaya awal: Rp 4.000.000", featured: true },
  { name: "Langganan 12 Bulan", badge: "Paling Hemat", price: "Rp 2.000.000", per: "per 12 bulan", capacity: "100 karyawan/Tera", bonus: "+ Bonus 50 = total 150", initial: "Total biaya awal: Rp 5.000.000", featured: false },
];

export function Pricing() {
  return (
    <Section id="pricing">
      <SectionTitle eyebrow="Investasi" title="Paket & Harga">
        Biaya instalasi dan penyiapan aplikasi: Rp 3.000.000 (sekali bayar), berlaku untuk tiga paket langganan di bawah.
        Termasuk Web, Aplikasi Android, dan AR Corp Desktop dengan mode offline&mdash;tanpa biaya tambahan.
      </SectionTitle>

      <m.ul initial="hidden" whileInView="show" viewport={viewport} variants={stagger} className="grid items-stretch gap-6 lg:grid-cols-3">
        {plans.map((p) => (
          <m.li
            key={p.name}
            variants={fadeUp}
            className={`relative flex flex-col items-center rounded-lg border bg-black p-8 pt-9 text-center ${
              p.featured ? "border-gold shadow-[0_0_36px_rgba(255,215,0,.25)]" : "border-gold-muted"
            }`}
          >
            {p.badge && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-[4px] bg-gold px-3 py-1 text-xs font-bold uppercase tracking-widest text-black">
                {p.badge}
              </span>
            )}
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-muted">{p.name}</h3>
            <p className="mt-5 whitespace-nowrap font-heading text-3xl font-bold text-white xl:text-4xl">{p.price}</p>
            <p className="text-sm text-muted">{p.per}</p>
            <hr className="my-6 w-full border-gold-muted/40" />
            <p className="flex items-center gap-2 text-base text-white">
              <Check size={18} className="text-gold" aria-hidden /> {p.capacity}
            </p>
            <p className="mt-2 font-semibold text-gold">{p.bonus}</p>
            <p className="mt-6 text-xs text-muted">{p.initial}</p>
            <Button variant={p.featured ? "primary" : "secondary"} href={waLink(`Halo, saya tertarik dengan paket ${p.name}.`)} className="mt-6">
              Pilih Paket
            </Button>
          </m.li>
        ))}
      </m.ul>

      <m.div
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={fadeUp}
        className="mt-6 flex flex-col items-center justify-between gap-5 rounded-lg border border-gold bg-black p-6 text-center lg:flex-row lg:text-left shadow-[0_0_28px_rgba(255,215,0,.15)] "
      >
        <h3 className="font-heading text-2xl font-bold uppercase tracking-wide text-gold">Pro Lifetime</h3>
        <p className="max-w-md text-sm text-muted">Sekali bayar, tanpa biaya langganan bulanan berikutnya.</p>
        <p className="whitespace-nowrap font-heading text-2xl font-bold text-white">Rp 8.000.000</p>
        <p className="text-sm font-semibold text-gold">Tidak terbatas<br />karyawan/Tera</p>
        <Button href={waLink("Halo, saya tertarik dengan paket Pro Lifetime.")} className="whitespace-nowrap">Pilih Paket</Button>
      </m.div>
    </Section>
  );
}

