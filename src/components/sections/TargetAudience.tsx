import { IMAGES } from "../../config/images";
import { SectionHeading } from "../ui/SectionHeading";
import { OptimizedImage } from "../ui/OptimizedImage";

const audiences = [
  {
    image: IMAGES.transportadoras,
    title: "TRANSPORTADORAS",
    alt: "Transportadoras — mais controle sobre frota, serviços, equipe, clientes e financeiro",
  },
  {
    image: IMAGES.empresasMudancas,
    title: "EMPRESAS DE MUDANÇAS",
    alt: "Empresas de mudanças — organize mudanças, inventário, cubagem, equipe, veículos e serviços",
  },
  {
    image: IMAGES.empresasLogistica,
    title: "EMPRESAS DE LOGÍSTICA",
    alt: "Empresas de logística — centralize operações e tenha uma visão mais organizada da sua empresa",
  },
];

export function TargetAudience() {
  return (
    <section id="para-quem" className="py-20 lg:py-28 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Feito para empresas que vivem de transporte e logística." />

        <div className="mt-14 grid md:grid-cols-3 gap-6 lg:gap-8">
          {audiences.map((item) => (
            <article
              key={item.title}
              className="group rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:border-blue-200 hover:-translate-y-1"
            >
              <h3 className="sr-only">{item.title}</h3>
              <OptimizedImage
                src={item.image}
                alt={item.alt}
                className="w-full h-auto max-w-none transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
