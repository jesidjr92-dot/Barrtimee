import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { formatCop } from '../data/horologyData';
import { Timepiece, WatchColorVariant } from '../types/horology';
import { WatchImageChamber } from './WatchImageChamber';

interface CompareModalProps {
  isOpen: boolean;
  watches: Timepiece[];
  onClose: () => void;
  onRemoveCompare: (id: string) => void;
  onInspectWatch: (watch: Timepiece, variantIndex: number) => void;
  onQuickAdd: (watch: Timepiece, variant: WatchColorVariant) => void;
}

export function CompareModal({
  isOpen,
  watches,
  onClose,
  onRemoveCompare,
  onInspectWatch,
  onQuickAdd,
}: CompareModalProps) {
  const [selectedByWatch, setSelectedByWatch] = useState<Record<string, number>>(
    {}
  );

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="compare-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 backdrop-blur-md md:p-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative max-h-[90vh] w-full max-w-[1200px] overflow-y-auto rounded-[4px] border border-white/[0.12] bg-[#0a0a0b]">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/[0.08] bg-[#0a0a0b]/95 px-6 py-4 backdrop-blur-md">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#94a3b8]">
              Análisis Comparativo
            </p>
            <h2
              id="compare-modal-title"
              className="mt-0.5 text-[18px] font-normal text-white"
            >
              Matriz Técnica de Referencias ({watches.length})
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar comparador"
            className="flex h-9 w-9 items-center justify-center rounded-[4px] border border-white/[0.12] text-[#e2e8f0] hover:border-white/40 cursor-pointer"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="overflow-x-auto p-6">
          <table className="w-full min-w-[640px] border-collapse text-left text-[13px]">
            <thead>
              <tr className="border-b border-white/[0.08]">
                <th className="w-44 py-4 pr-4 align-bottom text-[11px] font-medium uppercase tracking-[0.16em] text-[#94a3b8]">
                  Especificación
                </th>
                {watches.map((watch) => {
                  const selectedIdx = selectedByWatch[watch.id] ?? 0;
                  const activeVariant =
                    watch.variants[selectedIdx] ?? watch.variants[0];

                  return (
                    <th key={watch.id} className="min-w-[210px] px-4 py-4 align-top">
                      <div className="relative overflow-hidden rounded-[4px] border border-white/[0.08]">
                        <WatchImageChamber
                          variants={watch.variants}
                          selectedIndex={selectedIdx}
                          onSelectIndex={(idx) =>
                            setSelectedByWatch((prev) => ({
                              ...prev,
                              [watch.id]: idx,
                            }))
                          }
                          alt={activeVariant.productName}
                          reference={watch.reference}
                          aspectClass="aspect-[3/4]"
                        />
                        <button
                          type="button"
                          onClick={() => onRemoveCompare(watch.id)}
                          aria-label={`Quitar ${activeVariant.productName}`}
                          className="absolute top-2 right-2 z-20 flex h-7 w-7 items-center justify-center rounded-[4px] border border-white/15 bg-[#0a0a0b]/80 text-[#e2e8f0] hover:border-white/40 cursor-pointer"
                        >
                          <X className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[#94a3b8]">
                        {watch.reference}
                      </div>
                      <div className="mt-1 text-[16px] font-medium text-white">
                        {activeVariant.productName}
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.08]">
              <tr>
                <td className="py-3.5 pr-4 text-[#94a3b8]">Precio</td>
                {watches.map((w) => (
                  <td
                    key={w.id}
                    className="px-4 py-3.5 font-mono text-[14px] text-white tabular-nums"
                  >
                    {formatCop(w.priceCop)}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-3.5 pr-4 text-[#94a3b8]">Color actual</td>
                {watches.map((w) => {
                  const idx = selectedByWatch[w.id] ?? 0;
                  const active = w.variants[idx] ?? w.variants[0];
                  return (
                    <td key={w.id} className="px-4 py-3.5 text-[#e2e8f0]">
                      {active.colorName}
                    </td>
                  );
                })}
              </tr>
              <tr>
                <td className="py-3.5 pr-4 text-[#94a3b8]">Movimiento</td>
                {watches.map((w) => (
                  <td key={w.id} className="px-4 py-3.5 text-[#e2e8f0]">
                    {w.specs.movement}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-3.5 pr-4 text-[#94a3b8]">Diámetro y Grosor</td>
                {watches.map((w) => (
                  <td
                    key={w.id}
                    className="px-4 py-3.5 font-mono text-[#e2e8f0] tabular-nums"
                  >
                    {w.specs.diameter} × {w.specs.thickness}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-3.5 pr-4 text-[#94a3b8]">Material de caja</td>
                {watches.map((w) => (
                  <td key={w.id} className="px-4 py-3.5 text-[#e2e8f0]">
                    {w.specs.caseMaterial}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-3.5 pr-4 text-[#94a3b8]">Correa / Pulso</td>
                {watches.map((w) => (
                  <td key={w.id} className="px-4 py-3.5 text-[#e2e8f0]">
                    {w.specs.strapMaterial}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-3.5 pr-4 text-[#94a3b8]">Hermeticidad</td>
                {watches.map((w) => (
                  <td
                    key={w.id}
                    className="px-4 py-3.5 font-mono text-[#e2e8f0] tabular-nums"
                  >
                    {w.specs.waterResistance}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-4 pr-4 text-[#94a3b8]">Acción</td>
                {watches.map((w) => {
                  const idx = selectedByWatch[w.id] ?? 0;
                  const active = w.variants[idx] ?? w.variants[0];
                  return (
                    <td key={w.id} className="px-4 py-4">
                      <div className="flex flex-col gap-2">
                        <button
                          type="button"
                          onClick={() => onQuickAdd(w, active)}
                          className="h-9 rounded-[4px] bg-white px-3 text-[11px] font-medium uppercase tracking-[0.14em] text-[#0a0a0b] hover:bg-[#e2e8f0] cursor-pointer"
                        >
                          Añadir a Bolsa
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            onClose();
                            onInspectWatch(w, idx);
                          }}
                          className="h-9 rounded-[4px] border border-white/[0.15] px-3 text-[11px] font-medium uppercase tracking-[0.14em] text-[#e2e8f0] hover:border-white/40 cursor-pointer"
                        >
                          Ver Detalles
                        </button>
                      </div>
                    </td>
                  );
                })}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
