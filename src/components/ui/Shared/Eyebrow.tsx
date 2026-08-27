"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  center = false,
  tone = "light",
}: {
  children: string;
  center?: boolean;
  tone?: "light" | "dark";
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div>
      <span
        className={cn(
          "font-sans text-[11px] font-semibold tracking-[0.28em] uppercase",
          tone === "light" ? "text-bronze" : "text-gold",
        )}
      >
        {children}
      </span>
      <motion.div
        initial={shouldReduceMotion ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: "left" }}
        className={cn(
          "mt-[18px] mb-[22px] h-px w-14",
          tone === "light" ? "bg-bronze" : "bg-gold",
          center && "mx-auto",
        )}
      />
    </div>
  );
}
