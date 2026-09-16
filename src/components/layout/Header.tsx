import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, whatsappUrl, WHATSAPP } from "../../config/site";
import { Button } from "../ui/Button";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 lg:h-18 items-center justify-between">
          <a href="#inicio" className="group flex flex-col leading-none">
            <span className="text-lg font-extrabold tracking-tight text-blue-800">
              TRANS FORT
            </span>
            <span className="text-[11px] font-semibold tracking-widest text-blue-600">
              SOLUÇÕES
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-blue-700 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href={whatsappUrl(WHATSAPP.demoMessage)} size="sm">
              Agendar demonstração
            </Button>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 text-gray-600 hover:text-blue-700 cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-white z-40">
          <nav className="flex flex-col p-6 gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="py-3 px-4 text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 pt-4 border-t border-gray-100">
              <Button
                href={whatsappUrl(WHATSAPP.demoMessage)}
                size="lg"
                className="w-full"
              >
                Agendar demonstração
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
