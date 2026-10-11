import { m } from "motion/react";
import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary";
const base =
  "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-[4px] px-6 py-3 font-heading text-sm font-semibold tracking-wide transition-[filter,box-shadow,background-color,color] duration-200 cursor-pointer";
const styles: Record<Variant, string> = {
  primary: "bg-gold text-black hover:brightness-115 hover:shadow-[0_0_24px_rgba(255,215,0,.45)]",
  secondary:
    "border border-gold-muted bg-black text-gold hover:bg-gold hover:text-black hover:shadow-[0_0_18px_rgba(255,215,0,.35)]",
};

export function Button({
  variant = "primary",
  href,
  children,
  className = "",
  ...rest
}: {
  variant?: Variant;
  href?: string;
  children: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>) {
  const cls = `${base} ${styles[variant]} ${className}`;
  if (href) {
    return (
      <m.a href={href} onClick={rest.onClick} className={cls} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }}>
        {children}
      </m.a>
    );
  }
  return (
    <m.button
      type={rest.type ?? "button"}
      onClick={rest.onClick}
      className={cls}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </m.button>
  );
}
