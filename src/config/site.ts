export const SITE = {
  name: "Trans Fort Soluções",
  nameLine1: "TRANS FORT",
  nameLine2: "SOLUÇÕES",
  tagline: "Gestão inteligente para transportadoras, mudanças e logística.",
  description:
    "Tenha mais controle sobre frota, equipe, clientes, serviços e financeiro com a Trans Fort Soluções.",
  email: "fortsolucoesudi@gmail.com",
} as const;

export const WHATSAPP = {
  number: "5534991978047",
  display: "(34) 99197-8047",
  defaultMessage:
    "Olá! Gostaria de conhecer a Trans Fort Soluções e agendar uma demonstração do sistema.",
  demoMessage:
    "Olá! Gostaria de conhecer a Trans Fort Soluções e agendar uma demonstração do sistema.",
  knowMessage:
    "Olá! Gostaria de conhecer o sistema Trans Fort Soluções.",
} as const;

export function whatsappUrl(message: string = WHATSAPP.defaultMessage) {
  return `https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#funcionalidades", label: "Funcionalidades" },
  { href: "#beneficios", label: "Benefícios" },
  { href: "#para-quem", label: "Para quem é" },
  { href: "#faq", label: "FAQ" },
] as const;
