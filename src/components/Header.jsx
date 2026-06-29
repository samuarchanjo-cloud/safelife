import { Menu, Shield, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { company, navLinks, whatsappUrl } from '../data/siteData.js';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled ? 'border-slate-200 bg-white/92 shadow-md backdrop-blur-xl' : 'border-white/60 bg-white/86 backdrop-blur'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3" onClick={closeMenu}>
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy text-white shadow-glow">
            <Shield className="h-6 w-6 text-pool-light" aria-hidden="true" />
          </span>
          <span className="font-display text-xl font-black tracking-normal text-navy-deep">{company.name}</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-semibold text-slate-700 transition hover:text-pool">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={whatsappUrl('Olá, vi o site da Safe Life e gostaria de falar com a equipe.')}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-safety px-5 py-3 text-sm font-bold text-white shadow-lg shadow-safety/20 transition hover:-translate-y-0.5 hover:bg-safety-dark"
          >
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 text-navy-deep lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-5 py-4 shadow-lg lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2" aria-label="Navegação mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-xl px-3 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-pool"
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappUrl('Olá, vi o site da Safe Life e gostaria de falar com a equipe.')}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="mt-2 rounded-xl bg-safety px-4 py-3 text-center text-sm font-bold text-white"
            >
              Falar no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
