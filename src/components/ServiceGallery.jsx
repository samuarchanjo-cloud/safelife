import { Camera } from 'lucide-react';
import { serviceGallery } from '../data/siteData.js';
import ImageWithFallback from './ImageWithFallback.jsx';
import SectionShell from './SectionShell.jsx';

export default function ServiceGallery() {
  return (
    <SectionShell id="fotos-servicos" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-safety/10 px-4 py-2 text-sm font-bold text-safety">
            <Camera className="h-4 w-4" aria-hidden="true" />
            Registro técnico
          </span>
          <h2 className="mt-5 font-display text-3xl font-black tracking-normal text-navy-deep sm:text-4xl">
            Fotos dos Serviços
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            Trabalhos realizados com dedicação, cuidado técnico e profissionalismo.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceGallery.map((item) => (
            <article key={item.caption} className="group">
              <ImageWithFallback
                src={item.src}
                alt={item.caption}
                className="aspect-[4/3] rounded-2xl shadow-lg transition duration-500 group-hover:-translate-y-1"
              />
              <h3 className="mt-4 text-base font-black text-navy-deep">{item.caption}</h3>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
