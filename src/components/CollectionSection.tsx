import { ArrowUpRight, Check, Scale } from 'lucide-react';
import { formatCop } from '../data/horologyData';
import { Timepiece } from '../types/horology';
import { WatchImageChamber } from './WatchImageChamber';

interface CollectionSectionProps {
  timepieces: Timepiece[];
  compareIds: string[];
  onToggleCompare: (watchId: string) => void;
  onOpenCompare: () => void;
  onClearCompare: () => void;
  onInspectWatch: (watch: Timepiece) => void;
  onQuickAdd: (watch: Timepiece) => void;
}

export function CollectionSection({
  timepieces,
  compareIds,
  onToggleCompare,
  onOpenCompare,
  onClearCompare,
  onInspectWatch,
  onQuickAdd,
}: CollectionSectionProps) {
  const collectionWatches = timepieces.filter((w) => !w.isFlagship);

  return (
    <section
      id="coleccion"
      className="border-b border-white/[0.08] bg-[#0a0a0b] py-16 md:py-24"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-16">
        {/* Encabezado de sección */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#94a3b8]">
              Archivo Contemporáneo
            </p>
            <h2 className="mt-2 text-[28px] font-light leading-[1.2] tracking-[-0.025em] text-white md:text-[40px]">
              La Colección Permanente
            </h2>
          </div>

          <p className="max-w-md text-[14px] font-light leading-[1.6] text-[#94a3b8]">
            Relojes seleccionados con entrega asegurada en Barranquilla y toda Colombia. Selecciona hasta cuatro referencias para comparar.
          </p>
        </div>

        {/* Barra activa de comparación */}
        {compareIds.length > 0 && (
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-[4px] border border-white/[0.16] bg-[#121214] px-5 py-3.5">
            <div className="flex items-center gap-3 text-[13px] text-[#e2e8f0]">
              <Scale className="h-4 w-4 text-[#94a3b8]" aria-hidden="true" />
              <span className="tabular-nums">
                {compareIds.length}{' '}
                {compareIds.length === 1
                  ? 'referencia seleccionada'
                  : 'referencias seleccionadas'}{' '}
                para comparación técnica
              </span>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onClearCompare}
                className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#94a3b8] hover:text-white cursor-pointer"
              >
                Limpiar
              </button>
              <button
                type="button"
                disabled={compareIds.length < 2}
                onClick={onOpenCompare}
                className={`h-9 rounded-[4px] px-4 text-[11px] font-medium uppercase tracking-[0.15em] whitespace-nowrap shrink-0 transition-colors ${
                  compareIds.length >= 2
                    ? 'bg-white text-[#0a0a0b] hover:bg-[#e2e8f0] cursor-pointer'
                    : 'border border-white/[0.08] bg-transparent text-[#94a3b8]/50 cursor-not-allowed'
                }`}
              >
                Comparar ({compareIds.length})
              </button>
            </div>
          </div>
        )}

        {/* Cuadrícula de relojes */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {collectionWatches.map((watch) => {
            const isCompared = compareIds.includes(watch.id);
            return (
              <article
                key={watch.id}
                className="specular-card group flex flex-col justify-between overflow-hidden rounded-[4px]"
              >
                <div>
                  <div className="relative border-b border-white/[0.08]">
                    <button
                      type="button"
                      onClick={() => onInspectWatch(watch)}
                      aria-label={`Ver especificaciones de ${watch.name}`}
                      className="block w-full overflow-hidden text-left focus-visible:outline-none cursor-pointer"
                    >
                      <WatchImageChamber
                        src={watch.image}
                        alt={watch.name}
                        reference={watch.reference}
                        aspectClass="aspect-square"
                        className="transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                      />
                    </button>

                    <button
                      type="button"
                      onClick={() => onToggleCompare(watch.id)}
                      aria-pressed={isCompared}
                      title={
                        isCompared
                          ? 'Quitar de comparación'
                          : 'Añadir a comparación'
                      }
                      className={`absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-[4px] border transition-colors cursor-pointer ${
                        isCompared
                          ? 'border-white bg-white text-[#0a0a0b]'
                          : 'border-white/20 bg-[#0a0a0b]/75 text-transparent hover:border-white/50'
                      }`}
                    >
                      <Check className="h-3.5 w-3.5 stroke-[2.2]" aria-hidden="true" />
                    </button>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center justify-between gap-2 text-[10px] font-medium uppercase tracking-[0.18em] text-[#94a3b8]">
                      <span className="font-mono truncate">{watch.reference}</span>
                      <span className="shrink-0 text-[#c4c7c8]">
                        {watch.availability}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => onInspectWatch(watch)}
                      className="mt-2.5 block text-left focus-visible:outline-none cursor-pointer"
                    >
                      <h3 className="text-[18px] font-medium leading-[1.35] text-white transition-colors group-hover:text-[#e2e8f0]">
                        {watch.name}
                      </h3>
                    </button>

                    <p className="mt-1 text-[12px] font-light text-[#94a3b8]">
                      {watch.collection} · {watch.category}
                    </p>

                    <dl className="mt-5 grid grid-cols-3 gap-2 border-y border-white/[0.08] py-3 text-[12px]">
                      <div>
                        <dt className="text-[10px] uppercase tracking-[0.14em] text-[#94a3b8]">
                          Caja
                        </dt>
                        <dd className="mt-0.5 font-mono text-[#e2e8f0] tabular-nums">
                          {watch.specs.diameter}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-[10px] uppercase tracking-[0.14em] text-[#94a3b8]">
                          Reserva
                        </dt>
                        <dd className="mt-0.5 font-mono text-[#e2e8f0] tabular-nums">
                          {watch.specs.powerReserve}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-[10px] uppercase tracking-[0.14em] text-[#94a3b8]">
                          Agua
                        </dt>
                        <dd className="mt-0.5 truncate font-mono text-[#e2e8f0] tabular-nums">
                          {watch.specs.waterResistance.split('/')[0].trim()}
                        </dd>
                      </div>
                    </dl>

                    <div className="mt-4 flex items-baseline justify-between gap-2">
                      <span className="text-[11px] uppercase tracking-[0.14em] text-[#94a3b8]">
                        Precio
                      </span>
                      <span className="font-mono text-[15px] font-normal text-white tabular-nums">
                        {formatCop(watch.priceCop)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 border-t border-white/[0.08]">
                  <button
                    type="button"
                    onClick={() => onInspectWatch(watch)}
                    className="flex h-11 items-center justify-center gap-1.5 border-r border-white/[0.08] px-3 text-[11px] font-medium uppercase tracking-[0.14em] text-[#e2e8f0] transition-colors hover:bg-white/[0.04] hover:text-white cursor-pointer"
                  >
                    <span>Ver Detalles</span>
                    <ArrowUpRight
                      className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </button>
                  <button
                    type="button"
                    onClick={() => onQuickAdd(watch)}
                    className="flex h-11 items-center justify-center px-3 text-[11px] font-medium uppercase tracking-[0.14em] text-white transition-colors hover:bg-white hover:text-[#0a0a0b] cursor-pointer"
                  >
                    + Añadir
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
