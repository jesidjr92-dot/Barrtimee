import { Check, Eye, MessageCircle, ShieldCheck, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { buildWhatsAppUrl, formatCop } from '../data/horologyData';
import { Timepiece } from '../types/horology';
import { WatchImageChamber } from './WatchImageChamber';

interface TimepieceDetailModalProps {
  watch: Timepiece | null;
  onClose: () => void;
  onAddToBag: (watch: Timepiece) => void;
}

export function TimepieceDetailModal({
  watch,
  onClose,
  onAddToBag,
}: TimepieceDetailModalProps) {
  const [lowLightMode, setLowLightMode] = useState<boolean>(false);
  const [justAdded, setJustAdded] = useState<boolean>(false);

  useEffect(() => {
    if (watch) {
      setLowLightMode(false);
      setJustAdded(false);
    }
  }, [watch]);

  useEffect(() => {
    if (!watch) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [watch, onClose]);

  if (!watch) return null;

  const whatsappUrl = buildWhatsAppUrl(
    `Hola Barrtime Barranquilla, deseo información para adquirir el reloj ${watch.name} (${watch.reference}). Precio: ${formatCop(watch.priceCop)}.`
  );

  const handleAdd = () => {
    onAddToBag(watch);
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 1800);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="pdp-watch-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 backdrop-blur-md md:p-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative max-h-[92vh] w-full max-w-[1060px] overflow-y-auto rounded-[4px] border border-white/[0.12] bg-[#0a0a0b]">
        {/* Cabecera del modal */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/[0.08] bg-[#0a0a0b]/95 px-6 py-4 backdrop-blur-md">
          <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.18em] text-[#94a3b8]">
            <span className="font-mono text-[#e2e8f0]">{watch.reference}</span>
            <span aria-hidden="true">·</span>
            <span>{watch.collection}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar detalle del reloj"
            className="flex h-9 w-9 items-center justify-center rounded-[4px] border border-white/[0.12] text-[#e2e8f0] transition-colors hover:border-white/40 hover:text-white cursor-pointer"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Galería izquierda */}
          <div className="border-b border-white/[0.08] bg-[#121214] p-6 lg:col-span-6 lg:border-r lg:border-b-0">
            <div className="lg:sticky lg:top-20">
              <div className="overflow-hidden rounded-[4px] border border-white/[0.08]">
                <WatchImageChamber
                  src={watch.image}
                  alt={watch.name}
                  reference={watch.reference}
                  aspectClass="aspect-square"
                  lumeMode={lowLightMode}
                />
              </div>

              <div className="mt-4 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setLowLightMode((prev) => !prev)}
                  className={`inline-flex h-9 items-center gap-2 rounded-[4px] border px-3.5 text-[11px] font-medium uppercase tracking-[0.14em] transition-colors cursor-pointer ${
                    lowLightMode
                      ? 'border-[#e2e8f0] bg-white text-[#0a0a0b]'
                      : 'border-white/[0.12] bg-[#0a0a0b] text-[#e2e8f0] hover:border-white/30'
                  }`}
                >
                  <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>{lowLightMode ? 'Vista Estudio' : 'Simular Baja Luz'}</span>
                </button>

                <span className="text-[12px] text-[#94a3b8]">
                  {watch.editionNote}
                </span>
              </div>
            </div>
          </div>

          {/* Módulo de compra solo reloj */}
          <div className="flex flex-col justify-between p-6 md:p-8 lg:col-span-6">
            <div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#94a3b8]">
                  {watch.category} · {watch.availability}
                </span>
              </div>

              <h2
                id="pdp-watch-title"
                className="mt-2 text-[26px] font-light leading-[1.2] tracking-[-0.02em] text-white md:text-[32px]"
              >
                {watch.name}
              </h2>

              <div className="mt-4 flex flex-wrap items-baseline gap-3">
                <span className="font-mono text-[22px] font-normal text-white tabular-nums md:text-[24px]">
                  {formatCop(watch.priceCop)}
                </span>
                <span className="text-[12px] font-light text-[#94a3b8]">
                  Entrega asegurada en Barranquilla y toda Colombia
                </span>
              </div>

              <p className="mt-5 text-[14px] font-light leading-[1.7] text-[#c4c7c8]">
                {watch.description}
              </p>

              {/* Ficha técnica del reloj */}
              <div className="mt-8 border-t border-white/[0.08] pt-5">
                <h3 className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#94a3b8]">
                  Especificaciones del Reloj
                </h3>
                <dl className="mt-3 divide-y divide-white/[0.06] text-[13px]">
                  <div className="flex justify-between py-2.5">
                    <dt className="text-[#94a3b8]">Movimiento</dt>
                    <dd className="text-[#e2e8f0]">{watch.specs.movement}</dd>
                  </div>
                  <div className="flex justify-between py-2.5">
                    <dt className="text-[#94a3b8]">Dimensiones</dt>
                    <dd className="font-mono text-[#e2e8f0] tabular-nums">
                      {watch.specs.diameter} × {watch.specs.thickness}
                    </dd>
                  </div>
                  <div className="flex justify-between py-2.5">
                    <dt className="text-[#94a3b8]">Material de caja</dt>
                    <dd className="text-right text-[#e2e8f0]">
                      {watch.specs.caseMaterial}
                    </dd>
                  </div>
                  <div className="flex justify-between py-2.5">
                    <dt className="text-[#94a3b8]">Cristal</dt>
                    <dd className="text-right text-[#e2e8f0]">
                      {watch.specs.crystal}
                    </dd>
                  </div>
                  <div className="flex justify-between py-2.5">
                    <dt className="text-[#94a3b8]">Reserva de marcha</dt>
                    <dd className="font-mono text-[#e2e8f0] tabular-nums">
                      {watch.specs.powerReserve}
                    </dd>
                  </div>
                  <div className="flex justify-between py-2.5">
                    <dt className="text-[#94a3b8]">Hermeticidad</dt>
                    <dd className="font-mono text-[#e2e8f0] tabular-nums">
                      {watch.specs.waterResistance}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* Acciones de adquisición */}
            <div className="mt-8 space-y-3 border-t border-white/[0.08] pt-6">
              <button
                type="button"
                onClick={handleAdd}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-[4px] bg-white px-6 text-[11px] font-medium uppercase tracking-[0.16em] text-[#0a0a0b] transition-colors hover:bg-[#e2e8f0] cursor-pointer"
              >
                {justAdded ? (
                  <>
                    <Check className="h-4 w-4" aria-hidden="true" />
                    <span>Añadido a Bolsa de Compra</span>
                  </>
                ) : (
                  <span>Añadir a Bolsa · {formatCop(watch.priceCop)}</span>
                )}
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-full items-center justify-center gap-2.5 rounded-[4px] border border-[#25d366]/35 bg-[#0f1712] px-6 text-[11px] font-medium uppercase tracking-[0.15em] text-[#25d366] transition-colors hover:border-[#25d366]/70 hover:bg-[#132017]"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span>Comprar por WhatsApp · Barranquilla</span>
              </a>

              <div className="flex items-center justify-center gap-2 pt-1 text-[11px] text-[#94a3b8]">
                <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Envío asegurado en Barranquilla y todo el país</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
