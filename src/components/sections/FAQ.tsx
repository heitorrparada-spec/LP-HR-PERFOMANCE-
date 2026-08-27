import { Eyebrow } from "@/components/ui/Shared/Eyebrow";
import { ScrollReveal } from "@/components/ui/Shared/ScrollReveal";
import { FAQItem } from "@/components/ui/FAQ/FAQItem";
import { faqItems } from "@/components/ui/FAQ/faqData";

export function FAQ() {
  return (
    <section className="bg-offwhite px-6 py-24 md:py-28">
      <div className="mx-auto max-w-[1080px]">
        <ScrollReveal className="mx-auto max-w-[520px] text-center">
          <Eyebrow center>Perguntas frequentes</Eyebrow>
          <h2 className="font-serif text-[clamp(26px,4vw,36px)] font-medium">
            Antes de começar
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mx-auto mt-11 max-w-[720px]">
          {faqItems.map((item) => (
            <FAQItem key={item.q} q={item.q} a={item.a} />
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
