"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { FormatChooserButton } from "@/components/ui/Shared/FormatChooserButton";

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
      <FormatChooserButton
        label="Falar agora"
        menuAlign="right"
        className="px-[18px] py-[11px] text-[11px]"
      />
    </nav>
  );
}
