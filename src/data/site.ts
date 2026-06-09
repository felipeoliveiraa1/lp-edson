// Configuração central da landing page — edite aqui textos e links principais.
export const site = {
  brand: 'PALCO ZERO',
  tagline: 'Imersão presencial',
  // Link de conversão (WhatsApp / checkout). Troque pelo link real.
  ctaHref: 'https://wa.me/5511999999999?text=Quero%20garantir%20minha%20vaga%20na%20Imers%C3%A3o%20Palco%20Zero',
  ctaLabel: 'Garantir minha vaga',

  // Data e hora de início do evento (usado no contador regressivo).
  // Formato ISO com fuso de Brasília (-03:00).
  eventDateISO: '2026-07-18T09:00:00-03:00',
  eventDateLabel: '18 de Julho',
  eventTime: '09h00 às 19h00',
  eventCity: 'São Paulo · Alphaville',
  eventVenue: 'Espaço PEX Treinamentos',
};

export const navLinks = [
  { label: 'O método', href: '#metodo' },
  { label: 'Agenda', href: '#agenda' },
  { label: 'Mentores', href: '#mentores' },
  { label: 'Para quem é', href: '#para-quem' },
  { label: 'Dúvidas', href: '#faq' },
];
