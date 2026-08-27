import { Eyebrow } from "@/components/ui/Shared/Eyebrow";
import { ScrollReveal } from "@/components/ui/Shared/ScrollReveal";
import { GlowCard } from "@/components/ui/Shared/GlowCard";
import { CountUp } from "@/components/ui/Shared/CountUp";
import { testimonials } from "@/components/ui/Proof/testimonialsData";

export function Proof() {
  return (
    <section className="bg-paper px-6 py-24 text-center md:py-28">
      <div className="mx-auto max-w-[1080px]">
        <ScrollReveal>
          <Eyebrow center>Resultados</Eyebrow>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <h2 className="font-serif text-[clamp(24px,4vw,34px)] font-medium">
            Resultados reais de quem seguiu o processo
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-6 text-left sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={0.12 + i * 0.08}>
              <GlowCard className="flex h-full flex-col border border-line-light bg-white p-8">
                <div className="flex items-baseline gap-3 border-b border-line-light pb-5">
                  <span className="font-serif text-3xl font-semibold text-bronze">
                    <CountUp value={t.statValue} suffix={t.statSuffix} />
                  </span>
                  <span className="text-[11px] tracking-[0.06em] text-muted-light uppercase">
                    {t.statLabel}
                  </span>
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

          {testimonials.length === 0 && (
            <ScrollReveal
              delay={0.12}
              className="col-span-full mx-auto w-full max-w-[640px] border border-dashed border-ink/22 p-14"
            >
              <p className="font-serif text-[17px] text-muted-light italic">
                &ldquo;Depoimento de paciente.&rdquo;
              </p>
              <p className="mt-4 text-[11px] font-normal tracking-[0.14em] text-bronze uppercase">
                [ Conteúdo a definir — inserir depoimentos e resultados reais ]
              </p>
            </ScrollReveal>
          )}
        </div>
      </div>
    </section>
  );
}
