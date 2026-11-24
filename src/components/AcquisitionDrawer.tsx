import {
  Check,
  Copy,
  MessageCircle,
  Minus,
  Pencil,
  Plus,
  Trash2,
  X,
} from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import {
  buildWhatsAppUrl,
  DEFAULT_WHATSAPP_NUMBER,
  formatCop,
  sanitizePhoneNumber,
} from '../data/horologyData';
import { CartItem, Timepiece } from '../types/horology';
import { WatchImageChamber } from './WatchImageChamber';

interface AcquisitionDrawerProps {
  isOpen: boolean;
  items: CartItem[];
  timepieces: Timepiece[];
  whatsappNumber: string;
  onChangeWhatsAppNumber: (nextNumber: string) => void;
  onClose: () => void;
  onUpdateQuantity: (cartKey: string, delta: number) => void;
  onRemoveItem: (cartKey: string) => void;
  onClearBag: () => void;
}

export function AcquisitionDrawer({
  isOpen,
  items,
  timepieces,
  whatsappNumber,
  onChangeWhatsAppNumber,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
  onClearBag,
}: AcquisitionDrawerProps) {
  const [buyerName, setBuyerName] = useState('');
  const [deliveryCity, setDeliveryCity] = useState('Barranquilla, Colombia');
  const [editingNumber, setEditingNumber] = useState(false);
  const [draftNumber, setDraftNumber] = useState(whatsappNumber);
  const [sentNotice, setSentNotice] = useState(false);
  const [copiedNotice, setCopiedNotice] = useState(false);

  useEffect(() => {
    setDraftNumber(whatsappNumber);
  }, [whatsappNumber]);

  useEffect(() => {
    if (!isOpen) return;
    setSentNotice(false);
    setCopiedNotice(false);
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  const resolvedItems = useMemo(() => {
    return items
      .map((item) => {
        const watch = timepieces.find((w) => w.id === item.watchId);
        if (!watch) return null;
        const variant =
          watch.variants.find((v) => v.id === item.variantId) ??
          watch.variants[0];
        return {
          ...item,
          watch,
          variant,
          unitPrice: watch.priceCop,
          lineTotal: watch.priceCop * item.quantity,
        };
      })
      .filter((x): x is NonNullable<typeof x> => x !== null);
  }, [items, timepieces]);

  const subtotal = useMemo(
    () => resolvedItems.reduce((sum, item) => sum + item.lineTotal, 0),
    [resolvedItems]
  );

  const isBarranquilla = deliveryCity.toLowerCase().includes('barranquilla');
  const shippingCost =
    resolvedItems.length === 0 || isBarranquilla || subtotal >= 50000000
      ? 0
      : 120000;
  const total = subtotal + shippingCost;

  const whatsappMessage = useMemo(() => {
    if (resolvedItems.length === 0) {
      return 'Hola Barrtime Barranquilla, deseo asesoría sobre la colección de relojes.';
    }

    const lines = resolvedItems.map(
      (i) =>
        `• ${i.quantity}x ${i.variant.productName} (${i.watch.reference}) — ${formatCop(
          i.lineTotal
        )}`
    );

    const header = buyerName.trim()
      ? `Hola Barrtime, soy ${buyerName.trim()} y quiero finalizar mi compra:`
      : 'Hola Barrtime, quiero finalizar mi compra con los siguientes relojes:';

    return [
      header,
      '',
      ...lines,
      '',
      `Envío (${deliveryCity.trim() || 'Barranquilla'}): ${
        shippingCost === 0 ? 'Cortesía' : formatCop(shippingCost)
      }`,
      `Total a pagar: ${formatCop(total)}`,
    ].join('\n');
  }, [resolvedItems, buyerName, deliveryCity, shippingCost, total]);

  const whatsappCheckoutUrl = useMemo(
    () => buildWhatsAppUrl(whatsappMessage, whatsappNumber),
    [whatsappMessage, whatsappNumber]
  );

  if (!isOpen) return null;

  const handleSaveWhatsApp = () => {
    const cleaned = sanitizePhoneNumber(draftNumber);
    onChangeWhatsAppNumber(cleaned || DEFAULT_WHATSAPP_NUMBER);
    setEditingNumber(false);
  };

  const handleCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(whatsappMessage);
      setCopiedNotice(true);
      window.setTimeout(() => setCopiedNotice(false), 2000);
    } catch {
      // ignorar si el navegador bloquea portapapeles
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="bag-drawer-title"
      className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <aside className="flex h-full w-full max-w-[500px] flex-col border-l border-white/[0.12] bg-[#0a0a0b]">
        {/* Cabecera */}
        <div className="flex items-center justify-between border-b border-white/[0.08] px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full">
              <img
                src="/assets/aistudio/logobarrtime_194bfff8.jpeg"
                alt="Emblema Barrtime"
                referrerPolicy="no-referrer"
                className="pointer-events-none absolute left-1/2 top-[-26.6%] h-[210%] w-[210%] max-w-none -translate-x-1/2 object-contain mix-blend-lighten brightness-[0.9] contrast-[1.35]"
              />
            </span>
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#94a3b8]">
                Barrtime · Barranquilla
              </p>
              <h2
                id="bag-drawer-title"
                className="text-[17px] font-normal text-white"
              >
                Bolsa de Compra
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar bolsa"
            className="flex h-9 w-9 items-center justify-center rounded-[4px] border border-white/[0.12] text-[#e2e8f0] hover:border-white/40 cursor-pointer"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        {/* Contenido */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {resolvedItems.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center py-16 text-center">
              <p className="text-[16px] font-normal text-white">
                Tu bolsa de compra está vacía.
              </p>
              <p className="mt-2 max-w-xs text-[13px] font-light leading-[1.6] text-[#94a3b8]">
                Desliza las imágenes de tu reloj favorito y añádelo para finalizar la compra por WhatsApp.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              {/* Lista de productos seleccionados */}
              <div className="space-y-3">
                {resolvedItems.map((item) => (
                  <div
                    key={item.cartKey}
                    className="flex gap-4 rounded-[4px] border border-white/[0.08] bg-[#121214] p-4"
                  >
                    <div className="h-24 w-24 shrink-0 overflow-hidden rounded-[4px] border border-white/[0.08]">
                      <WatchImageChamber
                        variants={[item.variant]}
                        alt={item.variant.productName}
                        reference={item.watch.reference}
                        showControls={false}
                      />
                    </div>

                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#94a3b8]">
                              {item.watch.reference}
                            </p>
                            <h3 className="mt-0.5 text-[14px] font-medium text-white">
                              {item.variant.productName}
                            </h3>
                          </div>
                          <button
                            type="button"
                            onClick={() => onRemoveItem(item.cartKey)}
                            aria-label={`Eliminar ${item.variant.productName}`}
                            className="text-[#94a3b8] hover:text-white cursor-pointer"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>

                        <div className="mt-1.5 flex items-center gap-2 text-[12px] text-[#e2e8f0]">
                          <span
                            aria-hidden="true"
                            className="h-2.5 w-2.5 rounded-full border border-white/25"
                            style={{ backgroundColor: item.variant.swatchHex }}
                          />
                          <span>Color: {item.variant.colorName}</span>
                        </div>
                      </div>

                      <div className="mt-3 flex items-center justify-between gap-2">
                        <div className="inline-flex items-center rounded-[4px] border border-white/[0.12] bg-[#0a0a0b]">
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.cartKey, -1)}
                            aria-label="Reducir cantidad"
                            className="flex h-7 w-7 items-center justify-center text-[#94a3b8] hover:text-white cursor-pointer"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-7 text-center font-mono text-[12px] text-white tabular-nums">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.cartKey, 1)}
                            aria-label="Aumentar cantidad"
                            className="flex h-7 w-7 items-center justify-center text-[#94a3b8] hover:text-white cursor-pointer"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>

                        <span className="font-mono text-[13px] text-white tabular-nums">
                          {formatCop(item.lineTotal)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Datos opcionales para incluir en el mensaje de WhatsApp */}
              <div className="space-y-3 rounded-[4px] border border-white/[0.08] bg-[#121214]/60 p-4">
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#94a3b8]">
                  Datos para tu pedido en WhatsApp (Opcional)
                </p>
                <input
                  type="text"
                  value={buyerName}
                  onChange={(e) => setBuyerName(e.target.value)}
                  placeholder="Tu nombre"
                  aria-label="Tu nombre"
                  className="h-10 w-full rounded-[4px] border border-white/[0.08] bg-[#0a0a0b] px-3 text-[13px] text-white placeholder-[#94a3b8]/60 focus:border-[#e2e8f0] focus:outline-none"
                />
                <input
                  type="text"
                  value={deliveryCity}
                  onChange={(e) => setDeliveryCity(e.target.value)}
                  placeholder="Ciudad o barrio (ej. Barranquilla)"
                  aria-label="Ciudad o dirección de entrega"
                  className="h-10 w-full rounded-[4px] border border-white/[0.08] bg-[#0a0a0b] px-3 text-[13px] text-white placeholder-[#94a3b8]/60 focus:border-[#e2e8f0] focus:outline-none"
                />
              </div>

              {/* Número de WhatsApp destino (configurable) */}
              <div className="rounded-[4px] border border-white/[0.08] bg-[#121214]/60 p-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#94a3b8]">
                    WhatsApp de Atención
                  </span>
                  <button
                    type="button"
                    onClick={() => setEditingNumber((prev) => !prev)}
                    className="inline-flex items-center gap-1 text-[11px] text-[#e2e8f0] hover:text-white cursor-pointer"
                  >
                    <Pencil className="h-3 w-3" aria-hidden="true" />
                    <span>{editingNumber ? 'Cancelar' : 'Cambiar número'}</span>
                  </button>
                </div>

                {editingNumber ? (
                  <div className="mt-2.5 flex gap-2">
                    <input
                      type="tel"
                      value={draftNumber}
                      onChange={(e) => setDraftNumber(e.target.value)}
                      placeholder="573001234567"
                      aria-label="Número de WhatsApp destino"
                      className="h-9 flex-1 rounded-[4px] border border-white/[0.15] bg-[#0a0a0b] px-3 font-mono text-[13px] text-white focus:border-[#e2e8f0] focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={handleSaveWhatsApp}
                      className="h-9 rounded-[4px] bg-white px-3.5 text-[11px] font-medium uppercase tracking-[0.12em] text-[#0a0a0b] hover:bg-[#e2e8f0] cursor-pointer"
                    >
                      Guardar
                    </button>
                  </div>
                ) : (
                  <div className="mt-1.5 font-mono text-[13px] text-[#e2e8f0] tabular-nums">
                    +{whatsappNumber}
                  </div>
                )}
              </div>

              {sentNotice && (
                <div className="rounded-[4px] border border-[#25d366]/35 bg-[#0f1712] p-4 text-[12px] text-[#e2e8f0]">
                  <p className="font-medium text-[#25d366]">
                    Resumen listo en WhatsApp
                  </p>
                  <p className="mt-1 font-light text-[#c4c7c8]">
                    Se abrió WhatsApp con tus relojes seleccionados. También puedes copiar el mensaje o vaciar tu bolsa si ya enviaste el pedido.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={handleCopyMessage}
                      className="inline-flex h-8 items-center gap-1.5 rounded-[4px] border border-white/[0.15] px-3 text-[11px] text-white hover:border-white/40 cursor-pointer"
                    >
                      {copiedNotice ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-[#25d366]" />
                          <span>Copiado</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" />
                          <span>Copiar pedido</span>
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        onClearBag();
                        setSentNotice(false);
                      }}
                      className="inline-flex h-8 items-center rounded-[4px] border border-white/[0.15] px-3 text-[11px] text-[#94a3b8] hover:text-white cursor-pointer"
                    >
                      Vaciar bolsa
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Pie del cajón */}
        {resolvedItems.length > 0 && (
          <div className="border-t border-white/[0.08] bg-[#121214] px-6 py-5">
            <div className="space-y-2 text-[13px]">
              <div className="flex justify-between text-[#94a3b8]">
                <span>Subtotal</span>
                <span className="font-mono text-[#e2e8f0] tabular-nums">
                  {formatCop(subtotal)}
                </span>
              </div>
              <div className="flex justify-between text-[#94a3b8]">
                <span>Envío asegurado</span>
                <span className="font-mono text-[#e2e8f0] tabular-nums">
                  {shippingCost === 0 ? 'Cortesía' : formatCop(shippingCost)}
                </span>
              </div>
              <div className="flex justify-between border-t border-white/[0.08] pt-2.5 text-[15px] font-medium text-white">
                <span>Total</span>
                <span className="font-mono tabular-nums">{formatCop(total)}</span>
              </div>
            </div>

            <div className="mt-5">
              <a
                href={whatsappCheckoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setSentNotice(true)}
                className="flex h-12 w-full items-center justify-center gap-2.5 rounded-[4px] border border-[#25d366]/50 bg-[#0f1712] px-5 text-[11px] font-medium uppercase tracking-[0.16em] text-[#25d366] transition-colors hover:border-[#25d366] hover:bg-[#142419]"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span>Finalizar Compra por WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
}
