import { Eyebrow } from "@/components/ui/Shared/Eyebrow";
import { ScrollReveal } from "@/components/ui/Shared/ScrollReveal";
import { GlowCard } from "@/components/ui/Shared/GlowCard";
import { Button } from "@/components/ui/Shared/Button";
import { whatsappLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const plans = [
  {
    title: "Atendimento Individual",
    text: "Acompanhamento personalizado com o profissional que você precisa.",
    bullets: ["Nutrição, psicologia e outras áreas em breve", "Online ou presencial"],
    featured: false,
    message:
      "Olá! Vim pelo site e quero saber mais sobre o Atendimento Individual da HR Performance.",
  },
  {
    title: "Acompanhamento Multidisciplinar",
    text: "Diferentes profissionais trabalhando de forma integrada em torno dos seus objetivos.",
    bullets: [
      "Ex.: nutrição + psicologia coordenadas",
      "Comunicação entre os profissionais",
    ],
    featured: false,
    message:
      "Olá! Vim pelo site e quero saber mais sobre o Acompanhamento Multidisciplinar da HR Performance.",
  },
  {
    title: "Home Care",
    text: "Uma experiência de acompanhamento premium, levando parte da equipe até você.",
    bullets: [
      "Visitas presenciais na sua residência",
      "Equipe multidisciplinar e alinhamento contínuo",
    ],
    featured: true,
    message: "Olá! Vim pelo site e quero saber mais sobre o Home Care da HR Performance.",
  },
];

export function Plans() {
  return (
    <section className="bg-paper px-6 py-24 md:py-28">
      <div className="mx-auto max-w-[1080px]">
        <ScrollReveal className="mx-auto max-w-[600px] text-center">
          <Eyebrow center>Formatos de acompanhamento</Eyebrow>
          <h2 className="font-serif text-[clamp(26px,4vw,36px)] font-medium">
            Escolha o nível de integração que faz sentido pra você
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.title} delay={i * 0.08} className="relative h-full">
              {plan.featured && (
                <span className="absolute -top-[11px] left-[30px] z-10 bg-gold px-[11px] py-[5px] text-[10px] font-semibold tracking-[0.1em] text-ink uppercase">
                  Mais completo
                </span>
              )}
              <GlowCard
                className={cn(
                  "flex h-full flex-col border border-line-light bg-white p-9",
                  plan.featured && "border-bronze",
                )}
              >
                <h3 className="font-serif text-xl font-semibold">{plan.title}</h3>
                <p className="mt-3 text-sm text-muted-light">{plan.text}</p>
                <ul className="mt-6 flex flex-1 flex-col gap-2.5 border-t border-line-light pt-6">
                  {plan.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2 text-[13px] text-muted-light"
                    >
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-bronze" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappLink(plan.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.1em] text-bronze uppercase transition-colors duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-ink"
                >
                  Saber mais <span aria-hidden>→</span>
                </a>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.24} className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="max-w-[480px] text-[13px] text-muted-light">
            A apresentação do plano ideal acontece na conversa — individual,
            multidisciplinar ou Home Care.
          </p>
          <Button
            href={whatsappLink(
              "Olá! Vim pelo site e quero saber mais sobre os formatos de acompanhamento da HR Performance.",
            )}
            external
          >
            Conhecer planos
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
