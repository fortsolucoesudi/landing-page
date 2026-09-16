import { FEATURES } from "../../data/features";
import { whatsappUrl, WHATSAPP } from "../../config/site";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";

export function Features() {
  return (
    <section id="funcionalidades" className="py-20 lg:py-28 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Tudo o que sua empresa precisa para ter mais controle." />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:shadow-lg hover:border-blue-200 hover:-translate-y-1"
            >
              <div className="inline-flex rounded-xl bg-blue-50 p-2.5 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-blue-950">{feature.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button href={whatsappUrl(WHATSAPP.knowMessage)} size="lg">
            QUERO CONHECER O SISTEMA
          </Button>
        </div>
      </div>
    </section>
  );
}
