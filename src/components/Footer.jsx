import { LifeBuoy, Mail, MapPin, Phone, Shield } from 'lucide-react';
import { company, navLinks } from '../data/siteData.js';

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/10">
              <Shield className="h-6 w-6 text-pool-light" aria-hidden="true" />
            </span>
            <span className="font-display text-xl font-black">{company.name}</span>
          </div>
          <p className="mt-5 max-w-sm leading-7 text-slate-300">
            Segurança, operação e manutenção de piscinas com confiança e profissionalismo.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-bold text-pool-light">
            <LifeBuoy className="h-4 w-4 text-safety" aria-hidden="true" />
            {company.yearsInMarket} anos de experiência
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-wide text-pool-light">Links rápidos</h3>
          <div className="mt-5 grid gap-3">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-semibold text-slate-300 transition hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-wide text-pool-light">Contato</h3>
          <div className="mt-5 space-y-4 text-sm text-slate-300">
            <p className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-safety" aria-hidden="true" />
              {company.phone}
            </p>
            <p className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-safety" aria-hidden="true" />
              {company.email}
            </p>
            <p className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-safety" aria-hidden="true" />
              {company.address}
            </p>
            <p>CNPJ: {company.cnpj}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-sm text-slate-400">
        © 2025 Safe Life. Todos os direitos reservados.
      </div>
    </footer>
  );
}
