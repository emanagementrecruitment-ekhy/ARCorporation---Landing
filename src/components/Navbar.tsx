import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/Button";
import { SHOW } from "../lib/site";

const allLinks = [
  ["Services", "#services"],
  ["Process", "#process"],
  ["Testimonial", "#testimonial"],
  ["Pricing", "#pricing"],
  ["Contact", "#contact"],
] as const;

// Menu ke bagian yang disembunyikan ikut disembunyikan.
const links = allLinks.filter(([, href]) => href !== "#testimonial" || SHOW.testimonials);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scrollspy: the active item is the last section whose top has passed 30% of the viewport height.
  useEffect(() => {
    const onScroll = () => {
      const line = window.innerHeight * 0.3;
      let current = "";
      for (const [, href] of links) {
        const el = document.querySelector(href);
        if (el && el.getBoundingClientRect().top <= line) current = href;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  // Tutup menu mobile dengan tombol Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-gold-muted/40 bg-black/90 backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav aria-label="Utama" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="font-heading text-base font-bold tracking-wide text-white">
          <span className="gold-text">AR</span> <span className="text-white">Corporation</span>
        </a>
        <ul className="hidden items-center gap-8 lg:flex">
          {links.map(([label, href]) => (
            <li key={href}>
              <a
                href={href}
                aria-current={active === href ? "true" : undefined}
                className={`relative py-1 text-sm transition-colors hover:text-gold ${active === href ? "text-gold" : "text-muted"}`}
              >
                {label}
                <span
                  aria-hidden
                  className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-gold transition-transform duration-300 ${
                    active === href ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden items-center gap-3 lg:flex">
          <Button href="#contact" className="!py-2">Start Project</Button>
          <Button variant="secondary" href="#download" className="!py-2">Download App</Button>
        </div>
        <button
          className="flex h-11 w-11 items-center justify-center rounded text-gold lg:hidden"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-gold-muted/30 bg-black lg:hidden"
          >
            <div className="px-5 pb-6">
              <ul className="flex flex-col py-2">
                {links.map(([label, href]) => (
                  <li key={href}>
                    <a
                      href={href}
                      onClick={() => setOpen(false)}
                      aria-current={active === href ? "true" : undefined}
                      className={`flex min-h-[44px] items-center hover:text-gold ${active === href ? "text-gold" : "text-white"}`}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-3">
                <Button href="#contact" onClick={() => setOpen(false)}>Start Project</Button>
                <Button variant="secondary" href="#download" onClick={() => setOpen(false)}>Download App</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}


