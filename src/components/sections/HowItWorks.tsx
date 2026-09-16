import { Search, Monitor, Rocket } from "lucide-react";
import { whatsappUrl, WHATSAPP } from "../../config/site";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";

const steps = [
  {
    icon: Search,
    step: "1",
    title: "Conheça a plataforma",
    description:
      "Veja como a Trans Fort Soluções pode se adaptar à sua operação.",
  },
  {
    icon: Monitor,
    step: "2",
    title: "Faça uma demonstração",
    description: "Conheça as principais funcionalidades do sistema.",
  },
  {
    icon: Rocket,
    step: "3",
    title: "Comece a organizar sua operação",
    description:
      "Tenha suas informações centralizadas em um único lugar.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Como funciona" />

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <div key={item.title} className="relative text-center">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-blue-200" />
              )}
              <div className="relative mx-auto inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/25">
                <item.icon className="h-8 w-8" />
                <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-blue-950 text-xs font-bold">
                  {item.step}
                </span>
              </div>
              <h3 className="mt-6 text-lg font-bold text-blue-950">{item.title}</h3>
              <p className="mt-3 text-gray-600 leading-relaxed max-w-xs mx-auto">
                {item.description}
              </p>
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
