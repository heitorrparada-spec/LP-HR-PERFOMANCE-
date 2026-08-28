import { Eyebrow } from "@/components/ui/Shared/Eyebrow";
import { ScrollReveal } from "@/components/ui/Shared/ScrollReveal";

const steps = [
  {
    num: "01",
    title: "Análise",
    text: "Entendimento da sua rotina, objetivos e do nível de acompanhamento que faz sentido pra você.",
  },
  {
    num: "02",
    title: "Estratégia",
    text: "Definição do formato — individual, multidisciplinar ou HR Performance Elite — e da estratégia de cada profissional envolvido.",
  },
  {
    num: "03",
    title: "Ajustes",
    text: "Alterações conforme a resposta do seu corpo e da sua rotina ao plano.",
  },
  {
    num: "04",
    title: "Continuidade",
    text: "Acompanhamento contínuo e integrado ao longo de todo o processo.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-paper px-6 py-24 md:py-28">
      <div className="mx-auto max-w-[1080px]">
        <ScrollReveal className="mx-auto max-w-[600px] text-center">
          <Eyebrow center>Como funciona</Eyebrow>
          <h2 className="font-serif text-[clamp(26px,4vw,38px)] font-medium">
            Um processo em quatro etapas, do início à continuidade.
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-y-9 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-0">
          {steps.map((step, i) => (
            <ScrollReveal
              key={step.num}
              delay={i * 0.08}
              className="relative lg:border-gold lg:px-5.5 lg:border-r lg:pr-6 lg:first:pl-0 lg:last:border-r-0"
            >
              <span className="font-accent text-4xl leading-none font-semibold tracking-wide text-bronze">
                {step.num}
              </span>
              <h3 className="mt-4 mb-2.5 font-serif text-[19px] font-semibold">
                {step.title}
              </h3>
              <p className="text-sm text-muted-light">{step.text}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
