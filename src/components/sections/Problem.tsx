import {
  AlertTriangle,
  FileSpreadsheet,
  EyeOff,
  Users,
  Clock,
  TrendingDown,
  ClipboardX,
  Timer,
} from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";

const problems = [
  { icon: AlertTriangle, text: "Falta de controle da frota" },
  { icon: FileSpreadsheet, text: "Informações espalhadas" },
  { icon: EyeOff, text: "Dificuldade para acompanhar serviços" },
  { icon: TrendingDown, text: "Falta de visão financeira" },
  { icon: Users, text: "Controle de funcionários complicado" },
  { icon: ClipboardX, text: "Dificuldade para acompanhar faturamento" },
  { icon: Clock, text: "Processos manuais" },
  { icon: Timer, text: "Perda de tempo na gestão" },
];

export function Problem() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Sua operação ainda depende de planilhas e informações espalhadas?"
          subtitle="Quando informações de veículos, funcionários, clientes, serviços e financeiro ficam espalhadas, fica mais difícil acompanhar a operação e tomar decisões."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {problems.map((problem) => (
            <div
              key={problem.text}
              className="group rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:shadow-md hover:border-red-100 hover:-translate-y-0.5"
            >
              <div className="inline-flex rounded-xl bg-red-50 p-2.5 text-red-500 group-hover:bg-red-100 transition-colors">
                <problem.icon className="h-5 w-5" />
              </div>
              <p className="mt-3 text-sm font-medium text-gray-700">
                {problem.text}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-lg font-semibold text-blue-800">
          A Trans Fort Soluções centraliza tudo em um único sistema.
        </p>
      </div>
    </section>
  );
}
