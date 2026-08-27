import Image from "next/image";
import { Eyebrow } from "@/components/ui/Shared/Eyebrow";
import { ScrollReveal } from "@/components/ui/Shared/ScrollReveal";
import { GlowCard } from "@/components/ui/Shared/GlowCard";
import { team } from "@/components/ui/Team/teamData";

export function Team() {
  return (
    <section className="bg-paper px-6 py-24 md:py-28">
      <div className="mx-auto max-w-[1080px]">
        <ScrollReveal className="mx-auto max-w-[560px] text-center">
          <Eyebrow center>Profissionais</Eyebrow>
          <h2 className="font-serif text-[clamp(26px,4vw,36px)] font-medium">
            Quem atua no seu acompanhamento
          </h2>
        </ScrollReveal>

        <div className="mt-12 flex flex-wrap justify-center gap-5">
          {team.map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 0.08}>
              <GlowCard className="flex w-[260px] flex-col items-center border border-line-light bg-white p-7 text-center transition-[border-color,transform] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-bronze">
                <span className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-line-light font-serif text-lg text-bronze">
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
                <p className="mt-3 text-[13px] text-muted-light">{member.text}</p>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
