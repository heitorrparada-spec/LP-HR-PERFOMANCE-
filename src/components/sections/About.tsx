import Image from "next/image";
import { ScrollReveal } from "@/components/ui/Shared/ScrollReveal";
import { cn } from "@/lib/utils";

const founders = [
  {
    initials: "HR",
    photo: "/heitor-parada.jpeg",
    name: "Heitor Rodrigues Parada",
    role: "Fundador · Nutrição",
    text: "A HR Performance nasceu do atendimento individual do Heitor e hoje se estrutura como um ecossistema de acompanhamento multidisciplinar — nutrição e psicologia trabalhando de forma coordenada, com o treinamento físico entrando em breve. O diferencial de sempre continua: atenção próxima, sem planos genéricos.",
    note: "[ Formação acadêmica e trajetória a definir ]",
    pending: false,
  },
  {
    initials: "PSI",
    photo: "/denise-parada.jpeg",
    name: "Denise Rodrigues Parada",
    role: "Co-fundadora · Psicologia",
    text: "Pós-graduada em Terapia Cognitivo-Comportamental (TCC) e pós-graduanda em Terapia do Esquema, Denise traz um repertório teórico e prático consistente, construído tanto na atuação clínica de consultório quanto na vivência em ecossistemas multidisciplinares de saúde. Para ela, nenhuma especialidade trabalha bem isolada: é no diálogo entre nutrição, psicologia e demais áreas que o cuidado se torna completo — e é esse entendimento que guia sua atuação dentro da HR Performance, sempre em função do objetivo final do paciente.",
    note: null,
    pending: false,
  },
];

export function About() {
  return (
    <section className="bg-verde px-6 py-24 text-offwhite md:py-28">
      <div className="mx-auto max-w-[1080px]">
        <ScrollReveal>
          <span className="text-xs font-semibold tracking-[0.12em] text-gold uppercase">
            Quem está por trás da HR Performance
          </span>
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-14 md:gap-y-0">
          {founders.map((founder, i) => (
            <ScrollReveal
              key={founder.name}
              delay={i * 0.08}
              className={cn(i > 0 && "md:border-l md:border-line-dark md:pl-14")}
            >
              <div className="flex items-center gap-4">
                <div
                  className={cn(
                    "relative flex h-16 w-16 flex-shrink-0 items-center justify-center overflow-hidden rounded-full border bg-charcoal",
                    founder.pending
                      ? "border-dashed border-line-dark"
                      : "border-line-dark",
                  )}
                >
                  {founder.photo ? (
                    <Image
                      src={founder.photo}
                      alt={founder.name}
                      fill
                      sizes="64px"
                      className="object-cover grayscale-15"
                    />
                  ) : (
                    <span
                      className={cn(
                        "font-serif text-lg",
                        founder.pending ? "text-muted-dark" : "text-gold",
                      )}
                    >
                      {founder.initials}
                    </span>
                  )}
                </div>
                <div>
                  <h2 className="font-serif text-lg font-medium">{founder.name}</h2>
                  <div className="mt-1 text-[11px] font-semibold tracking-[0.1em] text-gold uppercase">
                    {founder.role}
                  </div>
                </div>
              </div>
              <p
                className={cn(
                  "mt-4 text-[14px] leading-[1.7]",
                  founder.pending ? "text-muted-dark italic" : "text-muted-dark",
                )}
              >
                {founder.text}
              </p>
              {founder.note && (
                <p className="mt-2 text-[12px] text-[#8a8377] italic">
                  {founder.note}
                </p>
              )}
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
