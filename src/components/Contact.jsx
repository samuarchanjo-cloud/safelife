import { Building2, Mail, MapPin, MessageCircle, Phone, Send, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import { company, serviceOptions, whatsappUrl } from '../data/siteData.js';
import SectionShell from './SectionShell.jsx';

const initialForm = {
  nome: '',
  condominio: '',
  bairro: '',
  telefone: '',
  servico: '',
  mensagem: '',
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
  };

  const submitForm = (event) => {
    event.preventDefault();
    const nextErrors = {};
    if (!form.nome.trim()) nextErrors.nome = 'Informe seu nome.';
    if (!form.telefone.trim()) nextErrors.telefone = 'Informe um telefone ou WhatsApp.';
    if (!form.servico) nextErrors.servico = 'Selecione o serviço desejado.';

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    const message = `Olá, vi o site da Safe Life e gostaria de solicitar uma proposta para meu condomínio / área de lazer.\n\nNome: ${form.nome}\nCondomínio/Empresa: ${form.condominio}\nBairro: ${form.bairro}\nTelefone: ${form.telefone}\nServiço desejado: ${form.servico}\nMensagem: ${form.mensagem}`;
    window.open(whatsappUrl(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <SectionShell id="contato" className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="rounded-3xl bg-navy-deep p-6 text-white shadow-2xl sm:p-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-pool-light">
            <ShieldCheck className="h-4 w-4 text-safety" aria-hidden="true" />
            Orçamento personalizado
          </span>
          <h2 className="mt-5 font-display text-3xl font-black tracking-normal sm:text-4xl">Solicite uma Proposta</h2>
          <p className="mt-4 text-lg leading-8 text-slate-200">
            Entre em contato e receba uma proposta personalizada para seu condomínio, clube ou área de lazer.
          </p>

          <div className="mt-8 space-y-4">
            <ContactItem icon={MessageCircle} label="WhatsApp" value={company.phone} />
            <ContactItem icon={Phone} label="Telefone" value={company.phone} />
            <ContactItem icon={Mail} label="E-mail" value={company.email} />
            <ContactItem icon={MapPin} label="Endereço" value={company.address} />
            <ContactItem icon={Building2} label="CNPJ" value={company.cnpj} />
          </div>

          <p className="mt-8 rounded-2xl border border-white/15 bg-white/10 p-5 text-sm leading-7 text-slate-100">
            Atendimento para condomínios, clubes, hotéis, áreas residenciais e comerciais no Rio de Janeiro e região.
          </p>
        </div>

        <form onSubmit={submitForm} className="rounded-3xl border border-slate-200 bg-surface p-6 shadow-xl sm:p-8" noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Nome" name="nome" value={form.nome} onChange={updateField} error={errors.nome} required />
            <Field label="Condomínio/Empresa" name="condominio" value={form.condominio} onChange={updateField} />
            <Field label="Bairro" name="bairro" value={form.bairro} onChange={updateField} />
            <Field label="Telefone/WhatsApp" name="telefone" value={form.telefone} onChange={updateField} error={errors.telefone} required />
            <label className="sm:col-span-2">
              <span className="text-sm font-bold text-navy-deep">Serviço desejado</span>
              <select
                name="servico"
                value={form.servico}
                onChange={updateField}
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-pool focus:ring-4 focus:ring-pool/15"
                required
              >
                <option value="">Selecione uma opção</option>
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.servico && <span className="mt-1 block text-sm font-semibold text-safety">{errors.servico}</span>}
            </label>
            <label className="sm:col-span-2">
              <span className="text-sm font-bold text-navy-deep">Mensagem</span>
              <textarea
                name="mensagem"
                value={form.mensagem}
                onChange={updateField}
                rows="5"
                className="mt-2 w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-pool focus:ring-4 focus:ring-pool/15"
                placeholder="Conte rapidamente o que sua área de lazer precisa."
              />
            </label>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-safety px-7 py-4 text-sm font-black uppercase tracking-wide text-white shadow-lg shadow-safety/20 transition hover:-translate-y-0.5 hover:bg-safety-dark"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              Enviar Solicitação
            </button>
            <a
              href={whatsappUrl('Olá, vi o site da Safe Life e gostaria de falar com a equipe.')}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-navy/20 px-7 py-4 text-sm font-black uppercase tracking-wide text-navy-deep transition hover:-translate-y-0.5 hover:border-pool hover:text-pool"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Falar no WhatsApp
            </a>
          </div>
        </form>
      </div>
    </SectionShell>
  );
}

function ContactItem({ icon: Icon, label, value }) {
  return (
    <div className="flex gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10">
        <Icon className="h-5 w-5 text-pool-light" aria-hidden="true" />
      </span>
      <div>
        <p className="text-xs font-black uppercase tracking-wide text-slate-400">{label}</p>
        <p className="mt-1 break-words text-sm font-semibold leading-6 text-white">{value}</p>
      </div>
    </div>
  );
}

function Field({ label, name, value, onChange, error, required = false }) {
  return (
    <label>
      <span className="text-sm font-bold text-navy-deep">{label}</span>
      <input
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-pool focus:ring-4 focus:ring-pool/15"
      />
      {error && <span className="mt-1 block text-sm font-semibold text-safety">{error}</span>}
    </label>
  );
}
