import { ArrowRight, Play } from "lucide-react";
import { whatsappUrl, WHATSAPP } from "../../config/site";
import { IMAGES } from "../../config/images";
import { Button } from "../ui/Button";
import { OptimizedImage } from "../ui/OptimizedImage";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 to-white pointer-events-none" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700 mb-6">
              <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              Sistema de gestão para transportadoras
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-blue-950 leading-[1.1]">
              Tenha o controle completo da sua transportadora em um só lugar.
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
              Gerencie sua frota, equipe, clientes, mudanças, serviços e
              financeiro de forma simples, organizada e profissional.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                href={whatsappUrl(WHATSAPP.knowMessage)}
                size="lg"
                className="w-full sm:w-auto"
              >
                QUERO CONHECER O SISTEMA
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button
                href="#funcionalidades"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                <Play className="h-4 w-4" />
                VER COMO FUNCIONA
              </Button>
            </div>
          </div>

          <div className="animate-fade-in-up animation-delay-200 opacity-0-start">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/15 ring-1 ring-gray-200/80">
              <OptimizedImage
                src={IMAGES.hero}
                alt="Dashboard Trans Fort Soluções com frota de caminhões — sistema de gestão para transportadoras e logística"
                loading="eager"
                fetchPriority="high"
                className="w-full h-auto max-w-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
