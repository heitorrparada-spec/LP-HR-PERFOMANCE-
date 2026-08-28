import Image from "next/image";
import { Eyebrow } from "@/components/ui/Shared/Eyebrow";
import { ScrollReveal } from "@/components/ui/Shared/ScrollReveal";
import { GlowCard } from "@/components/ui/Shared/GlowCard";
import { cn } from "@/lib/utils";
import { team } from "@/components/ui/Team/teamData";

export function Team() {
  return (
    <section className="bg-paper px-6 py-24 md:py-28">
      <div className="mx-auto max-w-[1080px]">
        <ScrollReveal className="mx-auto max-w-[560px] text-center">
          <Eyebrow center>Nossa equipe</Eyebrow>
          <h2 className="font-serif text-[clamp(26px,4vw,36px)] font-medium">
            Quem atua no seu acompanhamento
          </h2>
        </ScrollReveal>

        <div className="mt-12 flex flex-wrap justify-center gap-5">
          {team.map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 0.08}>
              <GlowCard
                className={cn(
                  "flex w-[260px] flex-col items-center border bg-white p-7 text-center transition-[border-color,transform] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-bronze",
                  member.pending ? "border-dashed border-line-light" : "border-line-light",
                )}
              >
                <span
                  className={cn(
                    "relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border font-serif text-lg",
                    member.pending
                      ? "border-dashed border-line-light text-muted-light"
                      : "border-line-light text-bronze",
                  )}
                >
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  ) : (
                    member.initials
                  )}
                </span>
                <h3 className="mt-4 font-serif text-lg font-semibold">
                  {member.name}
                </h3>
                <div className="mt-1 text-[11px] font-semibold tracking-[0.1em] text-bronze uppercase">
                  {member.specialty}
                </div>
                <p
                  className={cn(
                    "mt-3 text-[13px]",
                    member.pending ? "text-muted-light italic" : "text-muted-light",
                  )}
                >
                  {member.text}
                </p>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal
          delay={team.length * 0.08}
          className="mx-auto mt-8 max-w-[560px] text-center"
        >
          <p className="text-[13px] text-muted-light italic">
            Novas especialidades em expansão — a HR Performance está
            construindo uma equipe multidisciplinar para integrar diferentes
            áreas da performance e do cuidado.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
