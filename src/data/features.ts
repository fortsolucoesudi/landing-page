import {
  LayoutDashboard,
  Users,
  Truck,
  UserCircle,
  Calculator,
  Calendar,
  ClipboardList,
  Package,
  Share2,
  FileText,
  Wallet,
  Fuel,
  Boxes,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FEATURES: Feature[] = [
  {
    icon: LayoutDashboard,
    title: "Dashboard",
    description:
      "Acompanhe os principais indicadores da empresa em uma visão geral.",
  },
  {
    icon: Users,
    title: "Gestão de equipe e diaristas",
    description:
      "Organize funcionários, ajudantes e profissionais envolvidos nas operações.",
  },
  {
    icon: Truck,
    title: "Gestão de caminhões",
    description: "Cadastre e acompanhe os veículos utilizados pela empresa.",
  },
  {
    icon: UserCircle,
    title: "Clientes",
    description: "Centralize as informações dos seus clientes.",
  },
  {
    icon: Calculator,
    title: "Simulador de orçamento",
    description: "Facilite a criação e organização dos orçamentos.",
  },
  {
    icon: Calendar,
    title: "Agendamento",
    description: "Organize os serviços e compromissos da operação.",
  },
  {
    icon: ClipboardList,
    title: "Ordens de serviço",
    description: "Tenha mais controle sobre os serviços realizados.",
  },
  {
    icon: Package,
    title: "Realizar mudança",
    description: "Organize as operações relacionadas às mudanças.",
  },
  {
    icon: Share2,
    title: "Fretes e compartilhados",
    description: "Controle operações de frete e serviços compartilhados.",
  },
  {
    icon: FileText,
    title: "Notas fiscais",
    description: "Organize as informações relacionadas às notas fiscais.",
  },
  {
    icon: Wallet,
    title: "Financeiro",
    description:
      "Tenha uma visão mais organizada das movimentações financeiras.",
  },
  {
    icon: Fuel,
    title: "Frota e combustível",
    description: "Controle informações relacionadas à frota e combustível.",
  },
  {
    icon: Boxes,
    title: "Inventário e cubagem",
    description: "Organize itens, volumes e informações das mudanças.",
  },
  {
    icon: ShieldCheck,
    title: "Usuários e permissões",
    description: "Controle o acesso dos usuários de acordo com suas funções.",
  },
];
