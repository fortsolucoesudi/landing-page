import { CheckCircle2 } from "lucide-react";
import { IMAGES } from "../../config/images";
import { SectionHeading } from "../ui/SectionHeading";
import { OptimizedImage } from "../ui/OptimizedImage";

const highlights = [
  "Visão geral da operação",
  "Informações centralizadas",
  "Gestão de serviços",
  "Controle financeiro",
];

export function Solution() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Uma plataforma para organizar toda a sua operação."
          subtitle="Tenha as principais informações da sua empresa reunidas em um único lugar e acompanhe sua operação com muito mais organização."
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-blue-600/5 blur-xl" />
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-xl ring-1 ring-gray-200/80">
              <OptimizedImage
                src={IMAGES.operacaoEficiente}
                alt="Sua operação mais eficiente — sistema completo para ganhar tempo, organização e mais controle"
                className="w-full h-auto max-w-none"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <h3 className="font-bold text-blue-950 text-lg mb-2">
                Sistema para transportadora e logística
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Desenvolvido para empresas que precisam de um software para
                transportadora com gestão de frota, equipe, clientes e
                financeiro integrados.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
              <h3 className="font-bold text-blue-950 text-lg mb-2">
                Gestão de transportes simplificada
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Organize mudanças, fretes, agendamentos e ordens de serviço sem
                depender de planilhas e informações espalhadas.
              </p>
            </div>

            <ul className="space-y-3 pt-2">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
