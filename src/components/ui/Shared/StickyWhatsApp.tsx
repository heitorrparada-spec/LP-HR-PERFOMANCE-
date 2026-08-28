import { whatsappLink } from "@/lib/whatsapp";

export function StickyWhatsApp() {
  return (
    <a
      href={whatsappLink(
        "Olá! Vim pelo site e quero saber mais sobre o acompanhamento da HR Performance.",
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed right-4 bottom-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-ink shadow-[0_4px_16px_rgba(20,23,15,0.35)] transition-[background-color,transform] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-px hover:bg-gold-light active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light md:hidden"
    >
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden
      >
        <path
          d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M8.3 8.6c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .6.4.2.5.7 1.6.8 1.8.1.1.1.3 0 .5-.1.2-.2.3-.3.4-.2.2-.3.3-.1.6.6 1 1.3 1.7 2.3 2.2.3.1.4.1.6-.1.1-.2.6-.7.8-.9.2-.2.3-.2.6 0 .2.1 1.4.7 1.7.8.3.1.4.2.5.3.1.2.1.9-.2 1.4-.3.5-1.2 1-1.9 1-.6 0-1.6-.2-3-1.3-1.7-1.4-2.8-3.1-3-3.5-.2-.4-.9-1.5-.9-2.6 0-.5.1-.9.3-1.2Z"
          fill="currentColor"
        />
      </svg>
    </a>
  );
}
