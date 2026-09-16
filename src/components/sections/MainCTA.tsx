import { ArrowRight } from "lucide-react";
import { whatsappUrl, WHATSAPP } from "../../config/site";
import { Button } from "../ui/Button";

export function MainCTA() {
  return (
    <section className="py-20 lg:py-28 bg-blue-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-800/40 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-800/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Pronto para ter mais controle sobre sua operação?
        </h2>
        <p className="mt-6 text-lg text-blue-200 leading-relaxed max-w-2xl mx-auto">
          Conheça a Trans Fort Soluções e veja como um sistema completo pode
          ajudar na gestão da sua transportadora ou empresa de mudanças.
        </p>
        <div className="mt-10">
          <Button
            href={whatsappUrl(WHATSAPP.demoMessage)}
            size="lg"
            variant="secondary"
            className="bg-white text-blue-800 hover:bg-blue-50 border-0 shadow-xl"
          >
            QUERO AGENDAR UMA DEMONSTRAÇÃO
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
