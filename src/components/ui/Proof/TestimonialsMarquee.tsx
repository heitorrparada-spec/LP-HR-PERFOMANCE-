import { GlowCard } from "@/components/ui/Shared/GlowCard";
import { CountUp } from "@/components/ui/Shared/CountUp";
import { testimonials, type Testimonial } from "./testimonialsData";

function TestimonialCard({
  t,
  hidden = false,
}: {
  t: Testimonial;
  hidden?: boolean;
}) {
  return (
    <GlowCard
      aria-hidden={hidden || undefined}
      className="flex w-[340px] flex-shrink-0 flex-col border border-line-light bg-white p-7 text-left sm:w-[380px]"
    >
      <div className="flex items-baseline gap-3 border-b border-line-light pb-4">
        {t.statValue !== undefined ? (
          <>
            <span className="font-accent text-2xl font-semibold tracking-wide text-bronze">
              <CountUp value={t.statValue} suffix={t.statSuffix} />
            </span>
            <span className="text-[10.5px] tracking-[0.06em] text-muted-light uppercase">
              {t.statLabel}
            </span>
          </>
        ) : (
          <span className="font-serif text-base text-bronze italic">
            {t.statLabel}
          </span>
        )}
      </div>
      <p className="mt-4 font-serif text-[14.5px] leading-relaxed text-ink italic">
        &ldquo;{t.quote}&rdquo;
      </p>
      <p className="mt-4 text-[11px] font-semibold tracking-[0.14em] text-bronze uppercase">
        — {t.name}
      </p>
    </GlowCard>
  );
}

export function TestimonialsMarquee() {
  const duration = Math.max(32, testimonials.length * 12);

  return (
    <div
      role="region"
      aria-label="Depoimentos de pacientes"
      className="relative w-screen -translate-x-1/2 left-1/2 overflow-hidden"
      style={
        {
          maskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        } as React.CSSProperties
      }
    >
      <div
        className="marquee-track flex w-max items-start gap-5 px-5"
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        {testimonials.map((t) => (
          <TestimonialCard key={t.name} t={t} />
        ))}
        {testimonials.map((t) => (
          <TestimonialCard key={`${t.name}-dup`} t={t} hidden />
        ))}
      </div>
    </div>
  );
}
