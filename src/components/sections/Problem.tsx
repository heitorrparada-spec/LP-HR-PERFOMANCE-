import { Eyebrow } from "@/components/ui/Shared/Eyebrow";
import { ScrollReveal } from "@/components/ui/Shared/ScrollReveal";

const items = [
  {
    num: "01",
    title: "Profissionais desconectados",
    text: "Nutricionista, psicólogo e personal trabalhando cada um por conta própria — sem conversar entre si sobre o mesmo objetivo.",
  },
  {
    num: "02",
    title: "Estratégias que não acompanham mudanças",
    text: "O corpo e a rotina mudam, mas o plano continua o mesmo até a próxima consulta marcada — em qualquer área.",
  },
  {
    num: "03",
    title: "Dúvidas que ficam para a próxima consulta",
    text: "Perguntas do dia a dia sem resposta, porque não existe um canal direto com quem acompanha.",
  },
];

export function Problem() {
  return (
    <section className="bg-offwhite px-6 py-24 md:py-28">
      <div className="mx-auto max-w-[1080px]">
        <ScrollReveal className="max-w-[640px]">
          <Eyebrow>O ponto de partida</Eyebrow>
          <h2 className="font-serif text-[clamp(26px,4vw,38px)] leading-[1.28] font-medium">
            Quando o acompanhamento não acompanha a sua rotina, o processo
            perde força.
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-px border border-line-light bg-line-light sm:grid-cols-3">
          {items.map((item, i) => (
            <ScrollReveal key={item.num} delay={i * 0.08} className="bg-offwhite p-7">
              <span className="font-accent text-lg font-semibold tracking-wide text-bronze">
                {item.num}
              </span>
              <h3 className="mt-3.5 mb-2.5 font-serif text-[19px] font-medium">
                {item.title}
              </h3>
              <p className="text-sm text-muted-light">{item.text}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
