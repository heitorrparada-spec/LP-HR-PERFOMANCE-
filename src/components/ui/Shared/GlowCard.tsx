"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";

export function GlowCard({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    ref.current!.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    ref.current!.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn(
        "relative overflow-hidden",
        "before:pointer-events-none before:absolute before:inset-0 before:opacity-0 before:transition-opacity before:duration-200 before:ease-[cubic-bezier(0.16,1,0.3,1)] hover:before:opacity-100",
        "before:content-[''] before:[background:radial-gradient(180px_circle_at_var(--mx,50%)_var(--my,50%),rgba(201,162,39,0.14),transparent_60%)]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
