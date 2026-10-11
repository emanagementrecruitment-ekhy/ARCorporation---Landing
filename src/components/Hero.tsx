import { m } from "motion/react";
import { Button } from "./ui/Button";
import { fadeUp, stagger } from "../lib/motion";

const particles = Array.from({ length: 18 }, (_, i) => ({
  left: `${(i * 53) % 100}%`,
  top: `${(i * 37) % 100}%`,
  delay: `${(i % 9) * 0.9}s`,
}));

export function GoldParticles() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p, i) => (
        <span key={i} className="particle" style={{ left: p.left, top: p.top, animationDelay: p.delay }} />
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="deco-bg relative flex min-h-[100svh] items-center overflow-hidden px-5 pb-16 pt-28 sm:px-8">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(255,215,0,.14),transparent_60%)]" />
      <GoldParticles />
      <m.div initial="hidden" animate="show" variants={stagger} className="relative mx-auto max-w-4xl text-center">
        <m.p variants={fadeUp} className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-gold-muted">
          AR Corporation
        </m.p>
        <m.h1 variants={fadeUp} className="text-4xl font-bold !text-gold sm:text-5xl">
          Good Grip, Profesional, Trusted
        </m.h1>
        <m.p variants={fadeUp} className="mx-auto mt-6 max-w-3xl font-heading text-xl text-white sm:text-2xl">
          Integrated HR System Management di Lapangan: Web, Android, dan Desktop dalam satu sistem
        </m.p>
        <m.p variants={fadeUp} className="mx-auto mt-4 max-w-2xl text-base text-muted">
          Kelola karyawan lapangan lewat Web, Aplikasi Android, dan AR Corp Desktop dengan mode offline, tanpa biaya tambahan.
        </m.p>
        <m.div variants={fadeUp} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="#contact">Start Project</Button>
          <Button variant="secondary" href="#download">Download App</Button>
        </m.div>
      </m.div>
    </section>
  );
}

