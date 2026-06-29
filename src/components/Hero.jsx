import { motion } from 'framer-motion';
import { ArrowDown, BadgeCheck, LifeBuoy, MapPinned, ShieldCheck, UserCheck } from 'lucide-react';
import { useState } from 'react';
import { assets, company, whatsappUrl } from '../data/siteData.js';

const highlights = [
  { label: 'Profissionais uniformizados', icon: UserCheck },
  { label: 'Controle por aplicativo', icon: MapPinned },
  { label: 'Início imediato', icon: BadgeCheck },
];

export default function Hero() {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden bg-navy-deep text-white">
      {!imageFailed && (
        <img
          src={assets.heroImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
          onError={() => setImageFailed(true)}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-deep/68 to-navy-deep/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(14,165,233,0.22),transparent_36%)]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-5 py-28 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-pool-light backdrop-blur">
            <LifeBuoy className="h-4 w-4 text-safety" aria-hidden="true" />
            {company.yearsInMarket} anos de experiência
          </div>

          <h1 className="font-display text-4xl font-black leading-tight tracking-normal sm:text-5xl lg:text-6xl">
            Segurança e operação para piscinas com confiança e profissionalismo
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100 sm:text-xl">
            Guardiões de piscina, operadores, manutenção e acompanhamento especializado para condomínios, clubes e áreas
            de lazer no Rio de Janeiro.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contato"
              className="rounded-full bg-safety px-7 py-4 text-center text-sm font-black uppercase tracking-wide text-white shadow-xl shadow-safety/25 transition hover:-translate-y-0.5 hover:bg-safety-dark"
            >
              Solicitar orçamento
            </a>
            <a
              href={whatsappUrl('Olá, vi o site da Safe Life e gostaria de solicitar um orçamento.')}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/45 px-7 py-4 text-center text-sm font-black uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:border-pool-light hover:bg-white/10"
            >
              Falar no WhatsApp
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {highlights.map(({ label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                <Icon className="h-5 w-5 shrink-0 text-pool-light" aria-hidden="true" />
                <span className="text-sm font-semibold text-white">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#sobre"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 rounded-full border border-white/30 p-3 text-white/80 sm:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        aria-label="Rolar para a seção Sobre"
      >
        <ArrowDown className="h-5 w-5" />
      </motion.a>

      <ShieldCheck className="absolute bottom-10 right-8 hidden h-20 w-20 text-white/10 lg:block" aria-hidden="true" />
    </section>
  );
}
