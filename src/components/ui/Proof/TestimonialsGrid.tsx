import { ScrollReveal } from "@/components/ui/Shared/ScrollReveal";
import { GlowCard } from "@/components/ui/Shared/GlowCard";
import { CountUp } from "@/components/ui/Shared/CountUp";
import { testimonials } from "./testimonialsData";

export function TestimonialsGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 text-left sm:grid-cols-2">
      {testimonials.map((t, i) => (
        <ScrollReveal key={t.name} delay={i * 0.08}>
          <GlowCard className="flex h-full flex-col border border-line-light bg-white p-8">
            <div className="flex items-baseline gap-3 border-b border-line-light pb-5">
              {t.statValue !== undefined ? (
                <>
                  <span className="font-accent text-3xl font-semibold tracking-wide text-bronze">
                    <CountUp value={t.statValue} suffix={t.statSuffix} />
                  </span>
                  <span className="text-[11px] tracking-[0.06em] text-muted-light uppercase">
                    {t.statLabel}
                  </span>
                </>
              ) : (
                <span className="font-serif text-lg text-bronze italic">
                  {t.statLabel}
                </span>
              )}
            </div>
            <p className="mt-5 font-serif text-[16px] leading-relaxed text-ink italic">
              &ldquo;{t.quote}&rdquo;
            </p>
            <p className="mt-5 text-[11px] font-semibold tracking-[0.14em] text-bronze uppercase">
              — {t.name}
            </p>
          </GlowCard>
        </ScrollReveal>
      ))}
    </div>
  );
}
