"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components/ui/Shared/Button";

export function VideoIntro() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ended, setEnded] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = false;
    video.play().catch(() => {
      video.muted = true;
      setMuted(true);
      video.play().catch(() => {});
    });

    if (!video.muted) setMuted(false);
  }, []);

  const unmute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    video.play();
    setMuted(false);
  };

  return (
    <section
      id="apresentacao"
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-verde px-6 py-24 text-offwhite"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 900px 600px at 50% 40%, rgba(201,162,39,0.12), transparent 65%), var(--verde)",
          }}
        />
        <div
          className="absolute -left-1/4 top-[10%] h-[420px] w-[420px] rounded-full bg-verde-salvia/40 blur-[110px]"
          style={{ filter: "blur(110px)" }}
        />
        <div
          className="absolute -right-1/4 bottom-[10%] h-[420px] w-[420px] rounded-full bg-gold/10 blur-[130px]"
          style={{ filter: "blur(130px)" }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10"
      >
        <div
          className="relative max-w-[90vw] overflow-hidden rounded-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)] ring-1 ring-offwhite/10"
          style={{
            aspectRatio: "9 / 16",
            height: "min(70svh, 680px)",
            width: "auto",
          }}
        >
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            src="/apresentacao-hr.mp4"
            autoPlay
            playsInline
            onEnded={() => setEnded(true)}
          />

          {muted && !ended && (
            <button
              type="button"
              onClick={unmute}
              className="absolute right-4 bottom-4 rounded-full border border-offwhite/28 bg-verde/70 px-4 py-2 text-[11px] tracking-[0.14em] text-offwhite uppercase backdrop-blur-sm transition-colors hover:border-gold hover:bg-gold/14"
            >
              Ativar som
            </button>
          )}
        </div>
      </motion.div>

      <AnimatePresence>
        {ended && (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 mt-10"
          >
            <Button href="#hero" variant="primary">
              Conhecer a HR Performance
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
