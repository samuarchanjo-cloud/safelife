import { ClipboardCheck, Droplets, LifeBuoy, MapPin, ShieldCheck, Wrench } from 'lucide-react';
import { useState } from 'react';
import { assets, services } from '../data/siteData.js';
import SectionShell from './SectionShell.jsx';

const icons = { ShieldCheck, LifeBuoy, Wrench, Droplets, MapPin, ClipboardCheck };
const footerItems = [
  'Água saudável e equilibrada',
  'Equipamentos funcionando',
  'Ambiente seguro para todos',
  'Gestão com transparência',
];

export default function Services() {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <SectionShell id="servicos" className="relative overflow-hidden bg-navy-deep py-20 text-white sm:py-24">
      {!imageFailed && (
        <img
          src={assets.heroImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-30"
          onError={() => setImageFailed(true)}
        />
      )}
      <div className="absolute inset-0 bg-navy-deep/86" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-pool/30 bg-pool/10 px-4 py-2 text-sm font-bold text-pool-light">
            Operação completa
          </span>
          <h2 className="mt-5 font-display text-3xl font-black tracking-normal sm:text-4xl">Serviços oferecidos</h2>
          <p className="mt-4 text-lg leading-8 text-slate-200">
            Soluções completas para piscinas seguras, limpas e sempre prontas.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = icons[service.icon];
            return (
              <article
                key={service.title}
                className="group rounded-2xl border border-white/60 bg-white/95 p-6 text-ink shadow-xl backdrop-blur transition hover:-translate-y-1 hover:border-pool/60"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-navy text-white">
                  <Icon className="h-6 w-6 text-safety" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-xl font-black text-navy-deep">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-700">{service.description}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-10 grid gap-3 rounded-3xl border border-white/15 bg-white/10 p-4 backdrop-blur md:grid-cols-4">
          {footerItems.map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 text-sm font-bold text-white">
              <span className="h-2.5 w-2.5 rounded-full bg-safety" aria-hidden="true" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
