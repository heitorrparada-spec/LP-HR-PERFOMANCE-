import Image from "next/image";
import { ScrollReveal } from "@/components/ui/Shared/ScrollReveal";
import { cn } from "@/lib/utils";

const founders = [
  {
    initials: "HR",
    photo: "/heitor-parada.jpeg",
    name: "Heitor Rodrigues Parada",
    role: "Nutricionista Esportivo · Fundador da HR Performance",
    text: "A HR Performance nasceu do atendimento individual do Heitor e hoje se estrutura como um ecossistema de acompanhamento multidisciplinar — nutrição e psicologia trabalhando de forma coordenada, com o treinamento físico entrando em breve. O diferencial de sempre continua: atenção próxima, sem planos genéricos.",
    note: "[ Formação acadêmica e trajetória a definir ]",
    pending: false,
  },
  {
    initials: "PSI",
    photo: null,
    name: "Denise Rodrigues Parada",
    role: "Psicóloga · Co-fundadora da HR Performance",
    text: "[ Texto de apresentação a definir — em breve ]",
    note: null,
    pending: true,
  },
];

export function About() {
  return (
    <section className="bg-ink px-6 py-24 text-offwhite md:py-28">
      <div className="mx-auto max-w-[1080px]">
        <ScrollReveal>
          <span className="text-xs font-semibold tracking-[0.12em] text-gold uppercase">
            Quem fundou o ecossistema
          </span>
        </ScrollReveal>

        <div className="mt-10 flex flex-col gap-16">
          {founders.map((founder, i) => (
            <div
              key={founder.name}
              className={cn(
                "grid grid-cols-1 items-center gap-9 md:grid-cols-[0.9fr_1.1fr] md:gap-16",
                i > 0 && "border-t border-line-dark pt-16",
              )}
            >
              <ScrollReveal
                className={cn(
                  "relative flex aspect-[1/1.05] items-center justify-center overflow-hidden border bg-charcoal",
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
                    sizes="(min-width: 768px) 40vw, 90vw"
                    className="object-cover grayscale-15"
                  />
                ) : (
                  <span
                    className={cn(
                      "font-serif text-8xl",
                      founder.pending ? "text-muted-dark" : "text-gold",
                    )}
                  >
                    {founder.initials}
                  </span>
                )}
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h2 className="font-serif text-[clamp(24px,3.6vw,32px)] font-medium">
                  {founder.name}
                </h2>
                <div className="mt-2 text-xs font-semibold tracking-[0.12em] text-gold uppercase">
                  {founder.role}
                </div>
                <p
                  className={cn(
                    "mt-5 text-[15px] leading-[1.75]",
                    founder.pending
                      ? "text-muted-dark italic"
                      : "text-muted-dark",
                  )}
                >
                  {founder.text}
                </p>
                {founder.note && (
                  <p className="mt-2 text-[13px] text-[#8a8377] italic">
                    {founder.note}
                  </p>
                )}
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
