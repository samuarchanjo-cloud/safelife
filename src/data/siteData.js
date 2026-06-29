export const company = {
  name: 'Safe Life',
  cnpj: '24.040.193/0001-72',
  address: 'Estrada do Pontal, 7290, Bloco 2, Apto 204, Rio de Janeiro - RJ',
  phone: '21 97038-6990',
  whatsapp: '5521970386990',
  email: 'rogerio.sampaio2403@gmail.com',
  director: 'Rogério Sampaio',
  directorRole: 'Diretor Geral',
  coordinator: 'Rafael Sampaio',
  yearsInMarket: 15,
};

export const assets = {
  heroImage: '/assets/hero/hero.jpg',
  aboutImage: '/assets/profissionais/teste-agua.jpg',
};

export const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Fotos dos Serviços', href: '#fotos-servicos' },
  { label: 'Profissionais', href: '#profissionais' },
  { label: 'Contato', href: '#contato' },
];

export const serviceOptions = [
  'Guardião de Piscina',
  'Operador de Piscina',
  'Manutenção e Consertos',
  'Tratamento da Água',
  'Controle de Ponto com Geolocalização',
  'Gestão Operacional',
];

export const services = [
  {
    title: 'Guardião de Piscina',
    description:
      'Profissionais preparados para acompanhar o uso da piscina, orientar usuários e contribuir para um ambiente mais seguro.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Operador de Piscina',
    description:
      'Acompanhamento operacional da piscina, controle de rotina, verificação de condições e apoio ao funcionamento adequado da área.',
    icon: 'LifeBuoy',
  },
  {
    title: 'Manutenção e Consertos',
    description:
      'Serviços de manutenção preventiva e corretiva em bombas, registros, filtros, cabeçotes, manoplas, orings e demais componentes.',
    icon: 'Wrench',
  },
  {
    title: 'Tratamento da Água',
    description:
      'Análise, controle e aplicação de produtos para manter a água limpa, equilibrada, cristalina e dentro dos padrões adequados.',
    icon: 'Droplets',
  },
  {
    title: 'Controle de Ponto com Geolocalização',
    description:
      'Registro de presença por aplicativo, com geolocalização e mais transparência para condomínios e administradoras.',
    icon: 'MapPin',
  },
  {
    title: 'Gestão Operacional',
    description:
      'Acompanhamento da equipe, organização de processos e suporte para manter a operação da piscina sempre em ordem.',
    icon: 'ClipboardCheck',
  },
];

export const serviceGallery = [
  { src: '/assets/servicos/limpeza-bordas.jpg', caption: 'Limpeza de bordas e superfície' },
  { src: '/assets/servicos/tratamento-agua.jpg', caption: 'Análise e tratamento da água' },
  { src: '/assets/servicos/inspecao-filtros.jpg', caption: 'Inspeção de filtros' },
  { src: '/assets/servicos/manutencao-bombas.jpg', caption: 'Manutenção de bombas' },
  { src: '/assets/servicos/verificacao-equipamentos.jpg', caption: 'Verificação de equipamentos' },
  { src: '/assets/servicos/aspiracao-fundo.jpg', caption: 'Aspiração do fundo da piscina' },
  { src: '/assets/servicos/aplicacao-produtos.jpg', caption: 'Aplicação de produtos' },
  { src: '/assets/servicos/limpeza-pre-filtro.jpg', caption: 'Limpeza do pré-filtro' },
  { src: '/assets/servicos/casa-maquinas.jpg', caption: 'Organização da casa de máquinas' },
];

export const professionalGallery = [
  { src: '/assets/profissionais/guardiao-observando.jpg', caption: 'Guardião observando a área da piscina' },
  { src: '/assets/profissionais/teste-agua.jpg', caption: 'Teste e controle da água' },
  { src: '/assets/profissionais/postura-vigilancia.jpg', caption: 'Postura de vigilância e prevenção' },
  { src: '/assets/profissionais/equipe-equipamentos.jpg', caption: 'Equipe com equipamentos operacionais' },
  { src: '/assets/profissionais/pose-institucional.jpg', caption: 'Apresentação institucional da equipe' },
  { src: '/assets/profissionais/checklist-tablet.jpg', caption: 'Checklist e controle por aplicativo' },
];

export const whatsappUrl = (message) =>
  `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;
