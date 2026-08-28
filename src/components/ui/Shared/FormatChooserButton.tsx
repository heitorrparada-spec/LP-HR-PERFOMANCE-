"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { whatsappLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

const formats = [
  {
    label: "Individual",
    message:
      "Olá, Heitor! Vi a HR Performance e tenho interesse no acompanhamento individual.",
  },
  {
    label: "Multidisciplinar",
    message:
      "Olá, Heitor! Vi a HR Performance e tenho interesse no acompanhamento multidisciplinar.",
  },
  {
    label: "HR Performance Elite",
    message:
      "Olá, Heitor! Vi a HR Performance e tenho interesse na HR Performance Elite.",
  },
];

const base =
  "inline-block px-[30px] py-4 text-xs font-semibold tracking-[0.14em] uppercase transition-[background-color,border-color,transform] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-gold-light";

const variants = {
  primary:
    "bg-gold text-ink hover:-translate-y-px hover:bg-gold-light active:translate-y-0 active:bg-bronze",
  ghost:
    "border border-offwhite/28 text-offwhite hover:border-gold hover:bg-gold/8 active:bg-gold/14",
};

export function FormatChooserButton({
  label = "Quero encontrar meu formato",
  variant = "primary",
  className,
  menuAlign = "center",
}: {
  label?: string;
  variant?: keyof typeof variants;
  className?: string;
  menuAlign?: "center" | "right";
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="true"
        aria-expanded={open}
        className={cn(base, variants[variant], className)}
      >
        {label}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            role="menu"
            aria-label="Qual formato de acompanhamento você procura?"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, y: 8 }}
            transition={{ duration: 0.2, ease: EASE }}
            className={cn(
              "absolute top-[calc(100%+10px)] z-30 w-[270px] border border-line-light bg-white p-4 shadow-[0_8px_24px_rgba(20,23,15,0.18)]",
              menuAlign === "center"
                ? "left-1/2 -translate-x-1/2"
                : "right-0",
            )}
          >
            <p className="px-1 text-[11px] font-semibold tracking-[0.1em] text-muted-light uppercase">
              Qual formato você procura?
            </p>
            <div className="mt-3 flex flex-col gap-1.5">
              {formats.map((f) => (
                <a
                  key={f.label}
                  href={whatsappLink(f.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  role="menuitem"
                  className="border border-line-light px-4 py-3 text-sm text-ink normal-case transition-colors duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-bronze hover:bg-offwhite"
                >
                  {f.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
