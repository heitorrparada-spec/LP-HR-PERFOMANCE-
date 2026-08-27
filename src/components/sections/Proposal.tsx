import { ScrollReveal } from "@/components/ui/Shared/ScrollReveal";

const flow = ["Análise", "Estratégia", "Execução", "Ajustes", "Evolução"];

export function Proposal() {
  return (
    <section className="bg-ink px-6 py-24 text-offwhite md:py-28">
      <div className="mx-auto flex max-w-[1080px] flex-col items-center text-center">
        <ScrollReveal>
          <span className="font-sans text-[11px] font-semibold tracking-[0.28em] text-gold uppercase">
            A proposta
          </span>
        </ScrollReveal>
        <ScrollReveal delay={0.08} className="mt-4">
          <h2 className="max-w-[760px] font-serif text-[clamp(24px,4vw,36px)] leading-[1.4] font-medium italic">
            &ldquo;Não entregamos uma consulta isolada. Entregamos um
            ecossistema — que se ajusta junto com você.&rdquo;
          </h2>
        </ScrollReveal>
        <ScrollReveal
          delay={0.16}
          className="mt-13 flex flex-wrap items-center justify-center gap-y-2.5 font-serif"
        >
          {flow.map((step, i) => (
            <span key={step} className="flex items-center">
              <span
                className="px-1 py-1.5 text-[clamp(13px,2vw,16px)] tracking-[0.02em]"
                style={i === flow.length - 1 ? { color: "var(--gold)" } : undefined}
              >
                {step}
              </span>
              {i < flow.length - 1 && (
                <span className="mx-2.5 text-sm text-gold" aria-hidden>
                  →
                </span>
              )}
            </span>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
