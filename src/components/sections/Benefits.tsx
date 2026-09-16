import { CheckCircle2 } from "lucide-react";
import { whatsappUrl, WHATSAPP } from "../../config/site";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";

const benefits = [
  "Centralize as informações da empresa",
  "Reduza processos manuais",
  "Tenha mais controle sobre sua operação",
  "Organize sua frota",
  "Acompanhe sua equipe",
  "Tenha maior visibilidade financeira",
  "Organize seus serviços e agendamentos",
  "Acesse as informações de forma prática",
];

export function Benefits() {
  return (
    <section id="beneficios" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-blue-50/30 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Mais organização para você administrar. Mais controle para sua empresa crescer." />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="flex items-start gap-3 rounded-2xl border border-blue-100 bg-blue-50/50 p-5 transition-all duration-300 hover:shadow-md hover:bg-blue-50"
            >
              <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
              <span className="text-sm font-medium text-gray-700">{benefit}</span>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button href={whatsappUrl(WHATSAPP.demoMessage)} size="lg">
            AGENDAR DEMONSTRAÇÃO
          </Button>
        </div>
      </div>
    </section>
  );
}
