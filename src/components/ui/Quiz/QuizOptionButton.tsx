"use client";

import { useRef } from "react";

export function QuizOptionButton({
  label,
  onSelect,
}: {
  label: string;
  onSelect: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    ref.current!.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    ref.current!.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <button
      ref={ref}
      onClick={onSelect}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden border border-line-light bg-white px-5 py-4 text-left text-sm text-ink transition-[border-color,background-color,transform] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] before:pointer-events-none before:absolute before:inset-0 before:opacity-0 before:transition-opacity before:duration-200 before:ease-[cubic-bezier(0.16,1,0.3,1)] before:content-[''] before:[background:radial-gradient(160px_circle_at_var(--mx,50%)_var(--my,50%),rgba(201,162,39,0.14),transparent_65%)] hover:-translate-y-px hover:border-bronze hover:bg-paper/60 hover:before:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze active:translate-y-0"
    >
      <span className="relative">{label}</span>
    </button>
  );
}
