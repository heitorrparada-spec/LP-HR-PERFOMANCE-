"use client";

import { useEffect, useRef } from "react";
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

  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const loopWidthRef = useRef(0);
  const offsetRef = useRef(0);
  const velocityRef = useRef(0);

  const draggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartOffsetRef = useRef(0);
  const lastPointerXRef = useRef(0);
  const lastPointerTimeRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const measure = () => {
      loopWidthRef.current = track.scrollWidth / 2;
    };
    measure();

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(track);

    const baseSpeed = reduceMotion ? 0 : loopWidthRef.current / duration;
    let rafId: number;
    let lastTime: number | null = null;

    const step = (time: number) => {
      if (lastTime === null) lastTime = time;
      const dt = Math.min((time - lastTime) / 1000, 0.05);
      lastTime = time;

      if (!draggingRef.current) {
        velocityRef.current +=
          (baseSpeed - velocityRef.current) * Math.min(1, dt * 2.5);
        offsetRef.current += velocityRef.current * dt;
      }

      const loopWidth = loopWidthRef.current;
      if (loopWidth > 0) {
        offsetRef.current =
          ((offsetRef.current % loopWidth) + loopWidth) % loopWidth;
      }

      track.style.transform = `translateX(${-offsetRef.current}px)`;
      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
    };
  }, [duration]);

  const onPointerDown = (e: React.PointerEvent) => {
    draggingRef.current = true;
    dragStartXRef.current = e.clientX;
    dragStartOffsetRef.current = offsetRef.current;
    lastPointerXRef.current = e.clientX;
    lastPointerTimeRef.current = performance.now();
    velocityRef.current = 0;
    containerRef.current?.setPointerCapture(e.pointerId);
    containerRef.current?.style.setProperty("cursor", "grabbing");
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;

    const now = performance.now();
    const dt = (now - lastPointerTimeRef.current) / 1000;

    const totalDelta = e.clientX - dragStartXRef.current;
    let newOffset = dragStartOffsetRef.current - totalDelta;
    const loopWidth = loopWidthRef.current;
    if (loopWidth > 0) {
      newOffset = ((newOffset % loopWidth) + loopWidth) % loopWidth;
    }
    offsetRef.current = newOffset;

    if (dt > 0) {
      const instantDelta = e.clientX - lastPointerXRef.current;
      velocityRef.current = -instantDelta / dt;
    }
    lastPointerXRef.current = e.clientX;
    lastPointerTimeRef.current = now;
  };

  const endDrag = () => {
    draggingRef.current = false;
    containerRef.current?.style.setProperty("cursor", "grab");
  };

  return (
    <div
      ref={containerRef}
      role="region"
      aria-label="Depoimentos de pacientes"
      className="relative w-screen -translate-x-1/2 left-1/2 touch-pan-y cursor-grab overflow-hidden select-none"
      style={
        {
          maskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        } as React.CSSProperties
      }
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
    >
      <div ref={trackRef} className="flex w-max items-start gap-5 px-5 will-change-transform">
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
