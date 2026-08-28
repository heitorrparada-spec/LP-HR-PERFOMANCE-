"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-transparent px-6 py-4 transition-[background-color,border-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
        scrolled && "border-line-light bg-paper/95 backdrop-blur-[10px]",
      )}
    >
      <a
        href="#hero"
        className="flex items-baseline gap-2 font-serif text-lg tracking-[0.06em]"
      >
        <b className={cn("font-semibold", scrolled ? "text-bronze" : "text-gold")}>
          HR
        </b>
        <span
          className={cn(
            "transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
            scrolled ? "text-ink" : "text-offwhite",
          )}
        >
          PERFORMANCE
        </span>
      </a>
      <a
        href="#contato"
        className="whitespace-nowrap bg-gold px-[18px] py-[11px] text-[11px] font-semibold tracking-[0.14em] text-ink uppercase transition-[background-color,transform] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-px hover:bg-gold-light active:translate-y-0 active:bg-bronze focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-gold-light"
      >
        Falar agora
      </a>
    </nav>
  );
}
