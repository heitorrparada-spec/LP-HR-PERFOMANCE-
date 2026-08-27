import { Eyebrow } from "@/components/ui/Shared/Eyebrow";
import { ScrollReveal } from "@/components/ui/Shared/ScrollReveal";
import { Quiz } from "@/components/ui/Quiz/Quiz";

export function QuizSection() {
  return (
    <section className="bg-offwhite px-6 py-24 md:py-28">
      <div className="mx-auto max-w-[1080px]">
        <ScrollReveal className="mx-auto max-w-[560px] text-center">
          <Eyebrow center>Não sabe por onde começar?</Eyebrow>
          <h2 className="font-serif text-[clamp(26px,4vw,36px)] font-medium">
            Descubra o formato ideal em 3 perguntas
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mt-12">
          <Quiz />
        </ScrollReveal>
      </div>
    </section>
  );
}
