import { cn } from "@/lib/utils";

const base =
  "inline-block px-[30px] py-4 text-xs font-semibold tracking-[0.14em] uppercase transition-[background-color,border-color,transform] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-gold-light";

const variants = {
  primary:
    "bg-gold text-ink hover:-translate-y-px hover:bg-gold-light active:translate-y-0 active:bg-bronze",
  ghost:
    "border border-offwhite/28 text-offwhite hover:border-gold hover:bg-gold/8 active:bg-gold/14",
};

export function Button({
  href,
  variant = "primary",
  external = false,
  className,
  children,
}: {
  href: string;
  variant?: keyof typeof variants;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const classes = cn(base, variants[variant], className);

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
}
