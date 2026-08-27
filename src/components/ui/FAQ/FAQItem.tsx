"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/utils";

export function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="border-b border-line-light">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full items-center justify-between gap-5 py-[22px] text-left text-[15.5px] font-medium text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze"
      >
        {q}
        <span
          aria-hidden
          className={cn(
            "flex-shrink-0 font-serif text-xl text-bronze transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
            open && "rotate-45",
          )}
        >
          +
        </span>
      </button>
      <div
        id={panelId}
        role="region"
        className="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="max-w-[600px] pb-[22px] text-[14.5px] text-muted-light">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}
