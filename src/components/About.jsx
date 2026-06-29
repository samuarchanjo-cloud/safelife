import { Award, Building2, CheckCircle2, ShieldCheck, Sparkles, UsersRound } from 'lucide-react';
import { assets, company } from '../data/siteData.js';
import ImageWithFallback from './ImageWithFallback.jsx';
import SectionShell from './SectionShell.jsx';

const cards = [
  { title: '15 anos no mercado', icon: Award },
  { title: 'Equipe presente em loco', icon: UsersRound },
  { title: 'Profissionais uniformizados', icon: ShieldCheck },
  { title: 'Atendimento para condomínios e áreas de lazer', icon: Building2 },
];

const differentials = [
  'Segurança em primeiro lugar',
  'Processos operacionais organizados',
  'Qualidade em cada detalhe',
  'Compromisso com os clientes',
];

export default function About() {
  return (
    <SectionShell id="sobre" className="bg-surface py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-pool/10 px-4 py-2 text-sm font-bold text-navy">
            <Sparkles className="h-4 w-4 text-safety" aria-hidden="true" />
            Sobre a operação
          </span>
          <h2 className="mt-5 font-display text-3xl font-black tracking-normal text-navy-deep sm:text-4xl">
            Sobre a Safe Life
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            A Safe Life atua há {company.yearsInMarket} anos oferecendo soluções para segurança, operação, manutenção e
            tratamento de piscinas. Com equipe preparada, profissionais uniformizados e processos organizados, a empresa
            atende condomínios, clubes, hotéis e áreas de lazer com foco em tranquilidade, prevenção e qualidade
            operacional.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {cards.map(({ title, icon: Icon }) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-md transition hover:-translate-y-1 hover:border-pool/40">
                <Icon className="h-6 w-6 text-safety" aria-hidden="true" />
                <h3 className="mt-4 text-base font-black text-navy-deep">{title}</h3>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {differentials.map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-pool" aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-4 -top-4 h-28 w-28 rounded-3xl border-2 border-safety/30" aria-hidden="true" />
          <ImageWithFallback
            src={assets.aboutImage}
            alt="Profissional da Safe Life realizando teste de água"
            className="relative aspect-[4/5] rounded-3xl shadow-2xl"
          />
          <div className="absolute -bottom-6 left-6 right-6 rounded-2xl border border-white/70 bg-white/92 p-5 shadow-xl backdrop-blur">
            <p className="text-sm font-bold uppercase tracking-wide text-safety">{company.directorRole}</p>
            <p className="mt-1 text-xl font-black text-navy-deep">{company.director}</p>
            <p className="mt-1 text-sm text-slate-600">Coordenação operacional: {company.coordinator}</p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
