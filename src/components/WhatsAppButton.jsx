import { MessageCircle } from 'lucide-react';
import { whatsappUrl } from '../data/siteData.js';

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl('Olá, vi o site da Safe Life e gostaria de falar com a equipe.')}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-emerald-900/30 transition hover:-translate-y-1 sm:h-16 sm:w-16"
      aria-label="Falar com a Safe Life no WhatsApp"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-20" aria-hidden="true" />
      <MessageCircle className="relative h-7 w-7" aria-hidden="true" />
    </a>
  );
}
