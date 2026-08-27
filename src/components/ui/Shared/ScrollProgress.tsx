"use client";

import { useEffect, useRef } from "react";

export function ScrollProgress() {
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      const max = scrollHeight - clientHeight;
      const progress = max > 0 ? Math.min(Math.max(scrollTop / max, 0), 1) : 0;
      if (fillRef.current) {
        fillRef.current.style.transform = `scaleX(${progress})`;
      }
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-offwhite/10"
      aria-hidden
    >
      <div
        ref={fillRef}
        className="h-full origin-left scale-x-0 bg-gold"
      />
    </div>
  );
}
