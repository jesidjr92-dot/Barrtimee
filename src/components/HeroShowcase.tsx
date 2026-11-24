import { ArrowRight, Eye } from 'lucide-react';
import { useEffect, useState } from 'react';
import { formatCop } from '../data/horologyData';
import { Timepiece } from '../types/horology';
import { WatchImageChamber } from './WatchImageChamber';

interface HeroShowcaseProps {
  flagship: Timepiece;
  onInspectFlagship: (watch: Timepiece) => void;
  onQuickAddFlagship: (watch: Timepiece) => void;
}

export function HeroShowcase({
  flagship,
  onInspectFlagship,
  onQuickAddFlagship,
}: HeroShowcaseProps) {
  const [colombiaTime, setColombiaTime] = useState<string>(() =>
    new Intl.DateTimeFormat('es-CO', {
      timeZone: 'America/Bogota',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    }).format(new Date())
  );

  useEffect(() => {
    const interval = window.setInterval(() => {
      setColombiaTime(
        new Intl.DateTimeFormat('es-CO', {
          timeZone: 'America/Bogota',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(new Date())
      );
    }, 1000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="inicio" className="border-b border-white/[0.08] bg-[#0a0a0b]">
      <div className="mx-auto max-w-[1440px] px-5 pt-10 pb-12 md:px-10 md:pt-16 md:pb-16 lg:px-16">
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Columna editorial izquierda */}
          <div className="flex flex-col justify-between lg:col-span-6">
            <div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-medium uppercase tracking-[0.18em] text-[#94a3b8]">
                <span>Barranquilla, Colombia</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono text-[#e2e8f0] tabular-nums">
                  Hora local {colombiaTime}
                </span>
              </div>

              <h1
                className="mt-6 max-w-xl text-[36px] font-light leading-[1.16] tracking-[-0.03em] text-white md:text-[52px] md:leading-[1.12]"
                style={{ textWrap: 'balance' }}
              >
                Precisión arquitectónica en titanio y silencio mecánico.
              </h1>

              <p className="mt-6 max-w-[54ch] text-[15px] font-light leading-[1.7] tracking-[0.01em] text-[#c4c7c8] md:text-[16px]">
                {flagship.description}
              </p>
            </div>

            <div className="mt-10">
              {/* Especificaciones clave */}
              <div className="mb-8 grid grid-cols-3 gap-4 border-y border-white/[0.08] py-4">
                <div>
                  <span className="block text-[10px] font-medium uppercase tracking-[0.18em] text-[#94a3b8]">
                    Referencia
                  </span>
                  <span className="mt-1 block font-mono text-[13px] text-white tabular-nums">
                    {flagship.reference}
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] font-medium uppercase tracking-[0.18em] text-[#94a3b8]">
                    Movimiento
                  </span>
                  <span className="mt-1 block text-[13px] text-[#e2e8f0]">
                    {flagship.specs.movement}
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] font-medium uppercase tracking-[0.18em] text-[#94a3b8]">
                    Precio
                  </span>
                  <span className="mt-1 block font-mono text-[13px] text-white tabular-nums">
                    {formatCop(flagship.priceCop)}
                  </span>
                </div>
              </div>

              {/* Botones de acción */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#coleccion"
                  className="inline-flex h-11 items-center gap-2.5 rounded-[4px] bg-white px-6 text-[11px] font-medium uppercase tracking-[0.15em] text-[#0a0a0b] whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#e2e8f0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <span>Explorar Colección</span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>

                <button
                  type="button"
                  onClick={() => onInspectFlagship(flagship)}
                  className="inline-flex h-11 items-center gap-2.5 rounded-[4px] border border-white/[0.15] bg-transparent px-5 text-[11px] font-medium uppercase tracking-[0.15em] text-[#e2e8f0] whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-white/40 hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#e2e8f0] cursor-pointer"
                >
                  <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Ver Detalles</span>
                </button>
              </div>
            </div>
          </div>

          {/* Columna de galería deslizable principal */}
          <div className="flex flex-col lg:col-span-6">
            <div className="specular-card flex h-full flex-col overflow-hidden rounded-[4px]">
              <div className="relative flex-1 overflow-hidden">
                <WatchImageChamber
                  src={flagship.image}
                  images={flagship.images}
                  alt={flagship.name}
                  reference={flagship.reference}
                  aspectClass="aspect-[4/3] lg:h-full lg:aspect-auto"
                  onImageClick={() => onInspectFlagship(flagship)}
                />
              </div>

              <div className="border-t border-white/[0.08] bg-[#121214] px-5 py-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#94a3b8]">
                      {flagship.collection} · {flagship.editionNote}
                    </p>
                    <p className="mt-1 text-[17px] font-normal tracking-[-0.01em] text-white">
                      {flagship.name}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onInspectFlagship(flagship)}
                    className="rounded-[4px] border border-white/[0.14] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-[#e2e8f0] hover:border-white/40 hover:text-white cursor-pointer"
                  >
                    Inspeccionar
                  </button>
                </div>

                <div className="mt-3 flex items-center justify-between border-t border-white/[0.06] pt-3">
                  <div className="flex items-center gap-3 text-[12px] text-[#94a3b8] tabular-nums">
                    <span>{flagship.specs.diameter}</span>
                    <span aria-hidden="true">/</span>
                    <span>{flagship.specs.waterResistance}</span>
                    <span aria-hidden="true">/</span>
                    <span>{flagship.specs.powerReserve}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => onQuickAddFlagship(flagship)}
                    className="text-[11px] font-medium uppercase tracking-[0.15em] text-white whitespace-nowrap shrink-0 transition-colors hover:text-[#e2e8f0] cursor-pointer"
                  >
                    + Añadir a Bolsa
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
