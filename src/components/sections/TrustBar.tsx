import { CheckCircle2 } from "lucide-react";

const items = [
  "Gestão centralizada",
  "Controle operacional",
  "Gestão financeira",
  "Acesso de qualquer lugar",
];

export function TrustBar() {
  return (
    <section className="py-10 border-y border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-blue-700 mb-6">
          Mais controle. Menos complicação.
        </p>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {items.map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-gray-700">
              <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
