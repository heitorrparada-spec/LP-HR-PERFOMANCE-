"use client";

import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/Shared/Button";
import { FormatChooserButton } from "@/components/ui/Shared/FormatChooserButton";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const variant = (delay: number) =>
    shouldReduceMotion ? { animate: { opacity: 1, y: 0 } } : fadeUp(delay);

  return (
    <section
      id="hero"
      className="relative flex min-h-svh flex-col items-center justify-center px-6 pt-[140px] pb-20 text-center text-offwhite"
      style={{
        background:
          "radial-gradient(ellipse 900px 500px at 50% -10%, rgba(201,162,39,0.14), transparent 60%), var(--verde)",
      }}
    >
      <motion.div
        {...variant(0.1)}
        className="mb-7 text-[11px] tracking-[0.32em] text-gold uppercase"
      >
        Nutrição · Psicologia · Performance
      </motion.div>

      <motion.h1
        {...variant(0.25)}
        className="max-w-[820px] font-serif text-[clamp(32px,6vw,58px)] leading-[1.18] font-medium tracking-[-0.01em]"
      >
        Um ecossistema de acompanhamento construído{" "}
        <em className="text-gold not-italic">em torno de você</em> - não o
        contrário.
      </motion.h1>

      <motion.p
        {...variant(0.4)}
        className="mt-6 max-w-[560px] text-[clamp(15px,2vw,18px)] font-light text-muted-dark"
      >
        Nutrição, psicologia e performance trabalhando de forma coordenada.
        Você escolhe o nível de integração - de um atendimento com um único
        profissional até a HR Performance Elite, nossa modalidade mais
        completa, com toda a equipe indo até você.
      </motion.p>

      <motion.div
        {...variant(0.55)}
        className="mt-11 flex flex-wrap justify-center gap-3.5"
      >
        <FormatChooserButton />
        <Button href="#como-funciona" variant="ghost">
          Ver como funciona
        </Button>
      </motion.div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[120px] bg-gradient-to-b from-transparent to-verde"
        aria-hidden
      />
    </section>
  );
}
