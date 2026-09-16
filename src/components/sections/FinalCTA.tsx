import { whatsappUrl, WHATSAPP } from "../../config/site";
import { Button } from "../ui/Button";

export function FinalCTA() {
  return (
    <section className="py-20 lg:py-24 bg-gray-50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-950 tracking-tight">
          Centralize sua operação. Tenha mais controle.
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Conheça a Trans Fort Soluções.
        </p>
        <div className="mt-8">
          <Button href={whatsappUrl(WHATSAPP.demoMessage)} size="lg">
            AGENDAR DEMONSTRAÇÃO
          </Button>
        </div>
      </div>
    </section>
  );
}
