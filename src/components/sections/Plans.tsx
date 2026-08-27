import { Eyebrow } from "@/components/ui/Shared/Eyebrow";
import { ScrollReveal } from "@/components/ui/Shared/ScrollReveal";
import { GlowCard } from "@/components/ui/Shared/GlowCard";
import { Button } from "@/components/ui/Shared/Button";
import { whatsappLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const services = [
  {
    num: "01",
    title: "Acompanhamento Individual",
    hook: "Seu objetivo. Seu profissional. Sua estratégia.",
    paragraphs: [
      "O acompanhamento individual é para quem busca uma orientação especializada e personalizada, contando com o profissional que melhor atende às suas necessidades e objetivos.",
      "Você pode realizar seu acompanhamento online ou presencialmente, com uma estratégia construída de acordo com sua rotina, objetivos, necessidades e momento.",
    ],
    bullets: [
      "Atendimento individualizado",
      "Estratégia personalizada",
      "Acompanhamento contínuo",
      "Evolução monitorada",
      "Ajustes de acordo com suas necessidades",
    ],
    idealFor: "acompanhamento especializado com foco e atenção individual",
    ctaLabel: "Conhecer o acompanhamento",
    message:
      "Olá! Vim pelo site e quero conhecer o Acompanhamento Individual da HR Performance.",
    featured: false,
  },
  {
    num: "02",
    title: "Acompanhamento Multidisciplinar",
    hook: "Diferentes especialidades. Um mesmo objetivo.",
    paragraphs: [
      "Performance não depende de uma única variável.",
      "O acompanhamento multidisciplinar permite que você tenha acesso a diferentes profissionais, cada um atuando dentro de sua especialidade e contribuindo para uma visão mais completa do seu processo.",
      "Na HR Performance, você pode combinar Nutrição, Psicologia, Treinamento e outras especialidades, conforme suas necessidades e objetivos.",
      "O grande diferencial está na possibilidade de construir uma jornada coordenada, conectando diferentes áreas para que elas trabalhem em torno de um mesmo propósito: a sua evolução.",
    ],
    bullets: [
      "Mais de uma especialidade",
      "Estratégias complementares",
      "Acompanhamento individual por profissional",
      "Comunicação e alinhamento entre as áreas, quando pertinente",
      "Uma visão mais completa do processo",
    ],
    idealFor: "uma abordagem mais ampla e integrada para performance, saúde e evolução",
    ctaLabel: "Conhecer a experiência multidisciplinar",
    message:
      "Olá! Vim pelo site e quero conhecer o Acompanhamento Multidisciplinar da HR Performance.",
    featured: false,
  },
  {
    num: "03",
    title: "Home Care",
    hook: "A HR Performance vai até você.",
    paragraphs: [
      "O Home Care é a nossa modalidade de acompanhamento mais exclusiva.",
      "A proposta é levar parte da experiência da HR Performance para dentro da sua rotina, proporcionando comodidade, proximidade e acompanhamento personalizado no seu próprio ambiente.",
      "Em vez de você adaptar toda a sua rotina para os profissionais, criamos uma experiência que se adapta a você.",
      "A composição do Home Care pode envolver diferentes profissionais e frequências de atendimento, de acordo com o plano escolhido.",
    ],
    example: [
      {
        label: "Nutrição",
        text: "Visita presencial do nutricionista à sua residência.",
      },
      {
        label: "Psicologia",
        text: "Sessões presenciais ou online ao longo do mês.",
      },
      {
        label: "Treinamento",
        text: "Acompanhamentos presenciais com personal, conforme a composição do plano.",
      },
      {
        label: "Integração",
        text: "Os profissionais trabalham de maneira coordenada, respeitando suas respectivas áreas de atuação.",
      },
    ],
    closing:
      "O resultado é uma experiência de acompanhamento mais próxima, conveniente e personalizada, pensada para quem busca um nível maior de cuidado e suporte.",
    bullets: [],
    idealFor:
      "exclusividade, comodidade e uma experiência multidisciplinar que se integra à própria rotina",
    ctaLabel: "Conhecer o Home Care",
    message: "Olá! Vim pelo site e quero conhecer o Home Care da HR Performance.",
    featured: true,
  },
];

export function Plans() {
  return (
    <section className="bg-paper px-6 py-24 md:py-28">
      <div className="mx-auto max-w-[1080px]">
        <ScrollReveal className="mx-auto max-w-[640px] text-center">
          <Eyebrow center>Formatos de acompanhamento</Eyebrow>
          <h2 className="font-serif text-[clamp(26px,4vw,38px)] font-medium">
            Três formas de acompanhar sua evolução.
          </h2>
          <p className="mt-5 text-[15px] text-muted-light">
            Na HR Performance, você escolhe o nível de acompanhamento que faz
            sentido para o seu momento — do atendimento individual à
            experiência multidisciplinar completa, com a possibilidade de
            levar nossa equipe até você.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2.5">
            {["Individual", "Multidisciplinar", "Home Care"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-line-light px-[13px] py-[7px] text-[10px] tracking-[0.14em] text-muted-light uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="mt-6 font-serif text-lg text-bronze italic">
            A mesma busca por evolução. Uma experiência construída para você.
          </p>
        </ScrollReveal>

        <div className="mt-16 flex flex-col gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.num} delay={i * 0.08}>
              <GlowCard
                className={cn(
                  "border border-line-light bg-white px-6 py-12 sm:px-9",
                  service.featured && "border-bronze",
                )}
              >
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-[80px_1fr]">
                  <span className="font-serif text-sm text-bronze italic">
                    {service.num}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-serif text-2xl font-semibold">
                        {service.title}
                      </h3>
                      {service.featured && (
                        <span className="bg-gold px-[11px] py-[5px] text-[10px] font-semibold tracking-[0.1em] text-ink uppercase">
                          Mais exclusivo
                        </span>
                      )}
                    </div>
                    <p className="mt-2 font-serif text-lg text-muted-light italic">
                      {service.hook}
                    </p>

                    <div className="mt-5 flex max-w-[640px] flex-col gap-4">
                      {service.paragraphs.map((p) => (
                        <p key={p} className="text-[15px] text-muted-light">
                          {p}
                        </p>
                      ))}
                    </div>

                    {service.bullets.length > 0 && (
                      <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                        {service.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-start gap-2 text-[13.5px] text-muted-light"
                          >
                            <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-bronze" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}

                    {service.example && (
                      <>
                        <p className="mt-7 text-[11px] font-semibold tracking-[0.1em] text-bronze uppercase">
                          Um exemplo de experiência
                        </p>
                        <div className="mt-4 grid grid-cols-1 gap-4 border border-line-light bg-offwhite p-5 sm:grid-cols-2">
                          {service.example.map((item) => (
                            <div key={item.label}>
                              <div className="text-sm font-semibold text-ink">
                                {item.label}
                              </div>
                              <p className="mt-1 text-[13px] text-muted-light">
                                {item.text}
                              </p>
                            </div>
                          ))}
                        </div>
                        <p className="mt-5 max-w-[640px] text-[15px] text-muted-light">
                          {service.closing}
                        </p>
                      </>
                    )}

                    <p className="mt-6 text-[13px] text-muted-light">
                      <span className="font-semibold text-ink">
                        Ideal para quem busca:
                      </span>{" "}
                      {service.idealFor}.
                    </p>

                    <div className="mt-7">
                      <Button href={whatsappLink(service.message)} external>
                        {service.ctaLabel}
                      </Button>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
