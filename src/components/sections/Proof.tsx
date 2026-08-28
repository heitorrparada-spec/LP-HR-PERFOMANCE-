import { Eyebrow } from "@/components/ui/Shared/Eyebrow";
import { ScrollReveal } from "@/components/ui/Shared/ScrollReveal";
import { TestimonialsGrid } from "@/components/ui/Proof/TestimonialsGrid";
import { testimonials } from "@/components/ui/Proof/testimonialsData";

export function Proof() {
  return (
    <section className="bg-ink px-6 py-24 text-center text-offwhite md:py-28">
      <div className="mx-auto max-w-[1080px]">
        <ScrollReveal>
          <Eyebrow center tone="dark">Resultados</Eyebrow>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <h2 className="font-serif text-[clamp(24px,4vw,34px)] font-medium">
            Resultados reais de quem seguiu o processo
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.12} className="mt-12">
          {testimonials.length > 0 ? (
            <TestimonialsGrid />
          ) : (
            <div className="mx-auto w-full max-w-[640px] border border-dashed border-line-dark p-14 text-left">
              <p className="font-serif text-[17px] text-muted-dark italic">
                &ldquo;Depoimento de paciente.&rdquo;
              </p>
              <p className="mt-4 text-[11px] font-normal tracking-[0.14em] text-gold uppercase">
                [ Conteúdo a definir — inserir depoimentos e resultados reais ]
              </p>
            </div>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
