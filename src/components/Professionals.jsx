import { BadgeCheck, ClipboardList, HardHat, ShieldCheck, UserCheck, Users } from 'lucide-react';
import { professionalGallery } from '../data/siteData.js';
import ImageWithFallback from './ImageWithFallback.jsx';
import SectionShell from './SectionShell.jsx';

const highlights = [
  { label: 'Profissionais treinados', icon: Users },
  { label: 'Uniformes padronizados', icon: HardHat },
  { label: 'Monitoramento operacional', icon: ClipboardList },
  { label: 'Compromisso com segurança', icon: ShieldCheck },
  { label: 'Atendimento profissional', icon: BadgeCheck },
];

export default function Professionals() {
  return (
    <SectionShell id="profissionais" className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-pool/10 px-4 py-2 text-sm font-bold text-navy">
            <UserCheck className="h-4 w-4 text-safety" aria-hidden="true" />
            Equipe identificada
          </span>
          <h2 className="mt-5 font-display text-3xl font-black tracking-normal text-navy-deep sm:text-4xl">
            Profissionais em Ação
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            Equipe treinada, identificada e preparada para oferecer atendimento com segurança, organização e eficiência.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {professionalGallery.map((item) => (
            <ImageWithFallback
              key={item.caption}
              src={item.src}
              alt={item.caption}
              className="aspect-[4/3] rounded-2xl shadow-lg"
            />
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {highlights.map(({ label, icon: Icon }) => (
            <div key={label} className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-md">
              <Icon className="mx-auto h-6 w-6 text-safety" aria-hidden="true" />
              <p className="mt-3 text-sm font-black text-navy-deep">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
