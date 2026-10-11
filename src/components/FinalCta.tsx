import { useState, type FormEvent } from "react";
import { m } from "motion/react";
import { Apple, MessageCircle, Smartphone } from "lucide-react";
import { Button } from "./ui/Button";
import { GoldParticles } from "./Hero";
import { fadeUp, stagger, viewport } from "../lib/motion";
import { waLink } from "../lib/site";

const field =
  "min-h-[44px] w-full rounded-[4px] border border-gold-muted/60 bg-black px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:border-gold";

export function FinalCta() {
  const [opened, setOpened] = useState(false);
  const [fallbackUrl, setFallbackUrl] = useState<string | null>(null);

  // Formulir tidak memakai backend: isinya disusun menjadi pesan dan dibuka di WhatsApp.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const company = String(f.get("company") || "").trim();
    const message =
      `Halo, saya ${String(f.get("name") || "").trim()}` +
      (company ? ` dari ${company}` : "") +
      `.\n\nKebutuhan: ${String(f.get("msg") || "").trim()}`;
    const url = waLink(message);
    // Jika browser/pembungkus memblokir tab baru, tampilkan tautan biasa sebagai cadangan.
    const w = window.open(url, "_blank", "noopener,noreferrer");
    setFallbackUrl(w ? null : url);
    setOpened(true);
  };

  return (
    <section id="contact" className="deco-bg relative overflow-hidden border-y border-gold-muted/40 px-5 py-20 sm:px-8 md:py-28">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,215,0,.14),transparent_65%)]" />
      <GoldParticles />
      <m.div initial="hidden" whileInView="show" viewport={viewport} variants={stagger} className="relative mx-auto max-w-3xl text-center">
        <m.h2 variants={fadeUp} className="text-[28px] font-bold !text-gold sm:text-[32px]">
          Siap Mulai?
        </m.h2>
        <m.p variants={fadeUp} className="mx-auto mt-5 max-w-xl text-muted">
          Hubungi kami untuk demo langsung dan diskusi kebutuhan perusahaan Anda.
        </m.p>
        <m.div variants={fadeUp} className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href={waLink("Halo, saya ingin memulai proyek dengan AR Corporation.")}>Start Project</Button>
          <Button variant="secondary" href={waLink("Halo, saya ingin menjadwalkan demo sistem HR.")}>Schedule Demo</Button>
        </m.div>

        <m.form
          id="contact-form"
          variants={fadeUp}
          onSubmit={onSubmit}
          className="mx-auto mt-12 grid gap-4 text-left sm:grid-cols-2"
          aria-label="Formulir kontak via WhatsApp"
        >
          <div>
            <label htmlFor="name" className="mb-1 block text-sm text-muted">Nama</label>
            <input id="name" name="name" required autoComplete="name" className={field} />
          </div>
          <div>
            <label htmlFor="company" className="mb-1 block text-sm text-muted">Perusahaan (opsional)</label>
            <input id="company" name="company" autoComplete="organization" className={field} />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="msg" className="mb-1 block text-sm text-muted">Kebutuhan</label>
            <textarea id="msg" name="msg" rows={4} required className={field} />
          </div>
          <div className="flex flex-col items-center gap-3 sm:col-span-2">
            <Button type="submit"><MessageCircle size={18} aria-hidden /> Kirim via WhatsApp</Button>
            <p role="status" className="min-h-5 text-sm text-gold">
              {opened && !fallbackUrl ? "WhatsApp dibuka di tab baru. Tekan kirim di sana untuk mengirim pesan." : ""}
            </p>
            {fallbackUrl && (
              <a href={fallbackUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center text-sm font-semibold text-gold underline">
                Buka WhatsApp untuk mengirim pesan
              </a>
            )}
          </div>
        </m.form>

        <m.div id="download" variants={fadeUp} className="mt-12 border-t border-gold-muted/30 pt-10">
          <p className="mb-5 text-sm uppercase tracking-[0.25em] text-gold-muted">Download App on iOS &amp; Android</p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="secondary" href="#download"><Apple size={18} aria-hidden /> App Store</Button>
            <Button variant="secondary" href="#download"><Smartphone size={18} aria-hidden /> Google Play</Button>
          </div>
          <p className="mt-3 text-xs text-muted">Tautan store belum tersedia.</p>
        </m.div>
      </m.div>
    </section>
  );
}

