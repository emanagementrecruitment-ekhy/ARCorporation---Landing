import { m } from "motion/react";
import type { ReactNode } from "react";
import { fadeUp, viewport } from "../../lib/motion";

export function SectionTitle({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <m.div initial="hidden" whileInView="show" viewport={viewport} variants={fadeUp} className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold-muted">{eyebrow}</p>
      <h2 className="text-[28px] font-bold !text-gold sm:text-[32px]">{title}</h2>
      <m.span
        aria-hidden
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={viewport}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        style={{ transformOrigin: "left" }}
        className="mx-auto mt-5 block h-[3px] w-24 bg-gold"
      />
      {children && <p className="mt-6 text-[15px] text-muted">{children}</p>}
    </m.div>
  );
}

export function Section({ id, children, className = "" }: { id?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`px-5 py-16 sm:px-8 md:py-20 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
