import { Eyebrow } from "@/components/ui/Shared/Eyebrow";
import { ScrollReveal } from "@/components/ui/Shared/ScrollReveal";

const rows = [
  {
    num: "01",
    title: "Você escolhe o nível de integração",
    text: "Do atendimento individual à HR Performance Elite — você define quanto suporte multidisciplinar faz sentido pra sua fase atual.",
  },
  {
    num: "02",
    title: "Profissionais que se comunicam",
    text: "Quando você contrata mais de um profissional, a equipe se alinha em torno do mesmo objetivo — respeitando os limites de cada área.",
  },
  {
    num: "03",
    title: "Resultados sustentáveis",
    text: "Estratégias realistas, pensadas para caber na sua vida — não intervenções restritivas de curto prazo.",
  },
];

export function Differentiator() {
  return (
    <section className="bg-verde px-6 py-24 text-offwhite md:py-28">
      <div className="mx-auto max-w-[1080px]">
        <ScrollReveal className="max-w-[640px]">
          <Eyebrow tone="dark">Diferencial</Eyebrow>
          <h2 className="font-serif text-[clamp(26px,4vw,38px)] leading-[1.3] font-medium">
            Por que HR Performance — e não outra consultoria.
          </h2>
          <p className="mt-4 max-w-[520px] text-[15px] text-muted-dark">
            Três respostas concretas, não um slogan.
          </p>
        </ScrollReveal>

        <div className="mt-14 border-t border-line-dark">
          {rows.map((row, i) => (
            <ScrollReveal key={row.num} delay={i * 0.08}>
              <div className="grid grid-cols-[80px_1fr] items-baseline gap-6 border-b border-line-dark py-8 max-sm:grid-cols-1 max-sm:gap-2">
                <span className="font-accent text-lg font-semibold tracking-wide text-gold">
                  {row.num}
                </span>
                <div>
                  <h3 className="mb-2 font-serif text-xl font-semibold">
                    {row.title}
                  </h3>
                  <p className="max-w-[600px] text-[14.5px] text-muted-dark">
                    {row.text}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
