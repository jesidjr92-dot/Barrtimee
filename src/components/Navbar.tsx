import { Menu, ShoppingBag, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  cartCount: number;
  onOpenBag: () => void;
}

const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Colección', href: '#coleccion' },
  { label: 'Asesoría', href: '#atencion' },
];

export function Navbar({ cartCount, onOpenBag }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/[0.08] smoked-glass">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-8 px-5 md:px-10 lg:px-16">
        {/* Zona 1: Marca BARRTIME */}
        <a
          href="#inicio"
          className="whitespace-nowrap shrink-0 text-[15px] font-medium tracking-[0.22em] text-white uppercase transition-opacity duration-150 hover:opacity-80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#e2e8f0]"
        >
          BARRTIME
        </a>

        {/* Zona 2: Enlaces sin calibres ni taller */}
        <nav
          aria-label="Navegación principal"
          className="hidden md:flex items-center gap-8"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap shrink-0 text-[13px] font-normal tracking-[0.04em] text-[#94a3b8] transition-colors duration-150 hover:text-white underline-offset-8 hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#e2e8f0]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zona 3: Acción principal */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenBag}
            className="inline-flex h-10 items-center gap-2.5 rounded-[4px] bg-white px-4 text-[11px] font-medium uppercase tracking-[0.15em] text-[#0a0a0b] whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#e2e8f0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
          >
            <ShoppingBag className="h-3.5 w-3.5 stroke-[1.75]" aria-hidden="true" />
            <span className="tabular-nums">
              Bolsa{cartCount > 0 ? ` (${cartCount})` : ''}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-[4px] border border-white/[0.15] text-[#e2e8f0] md:hidden hover:border-white/40 cursor-pointer"
          >
            {mobileMenuOpen ? (
              <X className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Menu className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {mobileMenuOpen && (
        <nav
          aria-label="Navegación móvil"
          className="border-t border-white/[0.08] bg-[#0a0a0b]/95 px-5 py-4 md:hidden"
        >
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex h-11 items-center border-b border-white/[0.05] text-[14px] font-normal text-[#e2e8f0] last:border-b-0 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
