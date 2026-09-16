import { X, Check } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";

const before = [
  "Planilhas",
  "Papéis",
  "WhatsApp",
  "Informações espalhadas",
  "Processos manuais",
];

const after = [
  "Sistema centralizado",
  "Informações organizadas",
  "Controle da operação",
  "Gestão financeira",
  "Mais visibilidade",
];

export function Differentiator() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Pare de administrar sua operação no improviso."
          subtitle="A Trans Fort Soluções foi pensada para transformar processos que antes eram espalhados em uma gestão mais centralizada, organizada e profissional."
        />

        <div className="mt-14 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="rounded-2xl border border-red-100 bg-red-50/50 p-8">
            <h3 className="text-sm font-bold uppercase tracking-wider text-red-600 mb-6">
              Antes
            </h3>
            <ul className="space-y-4">
              {before.map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100">
                    <X className="h-3.5 w-3.5 text-red-500" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-blue-200 bg-blue-50/50 p-8">
            <h3 className="text-sm font-bold uppercase tracking-wider text-blue-600 mb-6">
              Depois
            </h3>
            <ul className="space-y-4">
              {after.map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100">
                    <Check className="h-3.5 w-3.5 text-blue-600" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
