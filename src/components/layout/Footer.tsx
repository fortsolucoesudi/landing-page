import { Mail, MessageCircle } from "lucide-react";
import { SITE, WHATSAPP, whatsappUrl } from "../../config/site";

const footerLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#funcionalidades", label: "Funcionalidades" },
  { href: "#beneficios", label: "Benefícios" },
  { href: "#faq", label: "FAQ" },
  { href: whatsappUrl(), label: "Contato", external: true },
];

export function Footer() {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div>
            <div className="mb-4">
              <p className="text-xl font-extrabold tracking-tight">TRANS FORT</p>
              <p className="text-sm font-semibold tracking-widest text-blue-300">
                SOLUÇÕES
              </p>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed max-w-sm">
              {SITE.tagline}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="text-sm text-blue-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-blue-200 hover:text-white transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp: {WHATSAPP.display}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-2 text-sm text-blue-200 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-blue-800 text-center">
          <p className="text-sm text-blue-300">
            © 2026 Trans Fort Soluções. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
