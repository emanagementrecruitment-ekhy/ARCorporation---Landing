import { m } from "motion/react";
import type { ReactNode } from "react";
import { fadeUp } from "../../lib/motion";

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <m.div
      variants={fadeUp}
      whileHover={{ scale: 1.02 }}
      className={`rounded-lg border border-gold-muted bg-black p-6 shadow-[0_2px_12px_rgba(0,0,0,.6)] transition-[box-shadow,border-color] duration-300 hover:border-gold hover:shadow-[0_0_28px_rgba(255,215,0,.22)] sm:p-8 ${className}`}
    >
      {children}
    </m.div>
  );
}
