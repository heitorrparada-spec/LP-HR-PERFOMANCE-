import { ScrollReveal } from "@/components/ui/Shared/ScrollReveal";
import { Button } from "@/components/ui/Shared/Button";
import { whatsappLink } from "@/lib/whatsapp";

export function FinalCTA() {
  return (
    <section
      id="contato"
      className="px-6 py-24 text-center text-offwhite md:py-28"
      style={{
        background:
          "radial-gradient(ellipse 700px 400px at 50% 110%, rgba(201,162,39,0.16), transparent 60%), var(--verde)",
      }}
    >
      <div className="mx-auto max-w-[1080px]">
        <ScrollReveal>
          <span className="text-xs font-semibold tracking-[0.28em] text-gold uppercase">
            Vamos começar
          </span>
        </ScrollReveal>
        <ScrollReveal delay={0.08} className="mt-3.5">
          <h2 className="mx-auto max-w-[640px] font-serif text-[clamp(26px,5vw,42px)] leading-[1.32] font-medium italic">
            Seu próximo passo começa com o formato certo — não com mais uma
            consulta isolada.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.16}>
          <p className="mt-4.5 text-[15px] text-muted-dark">
            Fale comigo e vamos descobrir junto qual formato faz sentido pra
            você: individual, multidisciplinar ou HR Performance Elite.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.24} className="mt-10">
          <Button
            href={whatsappLink(
              "Olá! Vim pelo site e quero saber mais sobre o acompanhamento da HR Performance.",
            )}
            external
          >
            Falar no WhatsApp
          </Button>
        </ScrollReveal>

        <ScrollReveal
          delay={0.32}
          className="mt-13 flex flex-wrap justify-center gap-7 text-[13px] text-muted-dark"
        >
          <a href="tel:+5511993116720" className="transition-colors duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-gold">
            (11) 99311-6720
          </a>
          <a
            href="https://instagram.com/heitor_rodriguesp"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-gold"
          >
            @heitor_rodriguesp
          </a>
          <a href="mailto:heitor.nutri27@gmail.com" className="transition-colors duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-gold">
            heitor.nutri27@gmail.com
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
