"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import { individualProfessionals } from "./individualBreakdown";

const EASE = [0.16, 1, 0.3, 1] as const;

export function ProfessionalToggle() {
  const [active, setActive] = useState(individualProfessionals[0].key);
  const shouldReduceMotion = useReducedMotion();
  const current = individualProfessionals.find((p) => p.key === active)!;

  return (
    <div className="mt-8 border-t border-line-light pt-8">
      <p className="text-[11px] font-semibold tracking-[0.1em] text-gold uppercase">
        Como funciona cada área
      </p>

      <div className="mt-4 flex flex-wrap gap-2.5">
        {individualProfessionals.map((p) => (
          <button
            key={p.key}
            onClick={() => setActive(p.key)}
            aria-pressed={active === p.key}
            className={cn(
              "rounded-full border px-4 py-2 text-[12.5px] font-medium transition-colors duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]",
              active === p.key
                ? "border-bronze bg-bronze text-offwhite"
                : "border-line-light text-muted-light hover:border-bronze",
            )}
          >
            {p.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.key}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: EASE }}
          className="mt-6"
        >
          <p className="max-w-[560px] font-serif text-base text-muted-light italic">
            &ldquo;{current.quote}&rdquo;
          </p>

          <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {current.includes.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-[13.5px] text-muted-light"
              >
                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-bronze" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-6 grid grid-cols-1 gap-4 border border-line-light bg-offwhite p-5 sm:grid-cols-2">
            {current.steps.map((step, i) => (
              <div key={step.title} className="flex gap-3">
                <span className="font-accent text-lg font-semibold tracking-wide text-bronze">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <div className="text-sm font-semibold text-ink">
                    {step.title}
                  </div>
                  <p className="mt-0.5 text-[13px] text-muted-light">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
