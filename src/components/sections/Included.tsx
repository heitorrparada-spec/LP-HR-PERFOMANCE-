import { ScrollReveal } from "@/components/ui/Shared/ScrollReveal";
import { GlowCard } from "@/components/ui/Shared/GlowCard";

const cards = [
  {
    title: "Você escolhe o nível de integração",
    text: "De um profissional só até uma equipe completa — o formato se ajusta ao que faz sentido pra você agora.",
  },
  {
    title: "Profissionais que se comunicam",
    text: "Quando você contrata mais de uma área, a equipe se alinha em torno do mesmo objetivo — respeitando os limites de cada especialidade.",
  },
  {
    title: "Ajustes periódicos",
    text: "Revisões conforme a evolução — o acompanhamento segue o processo, não o contrário.",
  },
  {
    title: "Suporte contínuo",
    text: "Canal direto para dúvidas do dia a dia, sem intermediários.",
  },
];

export function Included() {
  return (
    <section className="bg-offwhite px-6 py-24 md:py-28">
      <div className="mx-auto max-w-[1080px]">
        <ScrollReveal className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="max-w-[480px] font-serif text-[clamp(26px,4vw,36px)] font-medium">
            Como o acompanhamento se estrutura
          </h2>
          <p className="max-w-[340px] text-sm text-muted-light">
            Cada item existe para reduzir a distância entre a equipe e a sua
            rotina real.
          </p>
        </ScrollReveal>

        <div className="mt-13 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
          {cards.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 0.08}>
              <GlowCard className="border border-line-light bg-white p-7 transition-[border-color,transform] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-bronze">
                <h3 className="mb-2 font-serif text-[17px] font-semibold">
                  {card.title}
                </h3>
                <p className="text-[13.5px] text-muted-light">{card.text}</p>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
