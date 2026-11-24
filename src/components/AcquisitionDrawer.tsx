import {
  ArrowLeft,
  CheckCircle2,
  MessageCircle,
  Minus,
  Plus,
  ShieldCheck,
  Trash2,
  X,
} from 'lucide-react';
import { FormEvent, useEffect, useMemo, useState } from 'react';
import {
  BARRANQUILLA_LOCATION,
  buildWhatsAppUrl,
  formatCop,
} from '../data/horologyData';
import { CartItem, OrderReceipt, Timepiece } from '../types/horology';
import { WatchImageChamber } from './WatchImageChamber';

interface AcquisitionDrawerProps {
  isOpen: boolean;
  items: CartItem[];
  timepieces: Timepiece[];
  lastReceipt: OrderReceipt | null;
  onClose: () => void;
  onUpdateQuantity: (watchId: string, delta: number) => void;
  onRemoveItem: (watchId: string) => void;
  onCompleteOrder: (receipt: OrderReceipt) => void;
  onClearReceipt: () => void;
}

type DrawerStep = 'bag' | 'checkout' | 'confirmed';

export function AcquisitionDrawer({
  isOpen,
  items,
  timepieces,
  lastReceipt,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
  onCompleteOrder,
  onClearReceipt,
}: AcquisitionDrawerProps) {
  const [step, setStep] = useState<DrawerStep>('bag');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState<'nacional' | 'barranquilla'>(
    'barranquilla'
  );
  const [address, setAddress] = useState('');
  const [formError, setFormError] = useState('');

  useEffect(() => {
    if (!isOpen) return;
    if (items.length === 0 && lastReceipt && step !== 'confirmed') {
      setStep('bag');
    }
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, items.length, lastReceipt, step, onClose]);

  const resolvedItems = useMemo(() => {
    return items
      .map((item) => {
        const watch = timepieces.find((w) => w.id === item.watchId);
        if (!watch) return null;
        return {
          ...item,
          watch,
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

  const shippingCost =
    resolvedItems.length === 0 || deliveryMethod === 'barranquilla' || subtotal >= 50000000
      ? 0
      : 120000;
  const total = subtotal + shippingCost;

  const whatsappBagUrl = useMemo(() => {
    if (resolvedItems.length === 0) {
      return buildWhatsAppUrl(
        'Hola Barrtime Barranquilla, deseo asesoría sobre la colección de relojes.'
      );
    }
    const lines = resolvedItems.map(
      (i) =>
        `• ${i.quantity}x ${i.watch.name} (${i.watch.reference}) [${formatCop(
          i.lineTotal
        )}]`
    );
    return buildWhatsAppUrl(
      `Hola Barrtime Barranquilla, deseo finalizar la compra de mi selección:\n${lines.join(
        '\n'
      )}\nTotal estimado: ${formatCop(total)}`
    );
  }, [resolvedItems, total]);

  if (!isOpen) return null;

  const handleCheckoutSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !clientEmail.trim() || !clientPhone.trim()) {
      setFormError('Por favor, completa nombre, correo electrónico y teléfono.');
      return;
    }
    if (deliveryMethod === 'nacional' && !address.trim()) {
      setFormError(
        'Indica la dirección y ciudad en Colombia para coordinar el envío asegurado.'
      );
      return;
    }
    setFormError('');

    const orderNum = `BT-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const receipt: OrderReceipt = {
      orderNumber: orderNum,
      createdAt: new Intl.DateTimeFormat('es-CO', {
        dateStyle: 'medium',
        timeStyle: 'short',
      }).format(new Date()),
      clientName: clientName.trim(),
      clientEmail: clientEmail.trim(),
      clientPhone: clientPhone.trim(),
      deliveryMethod,
      destination:
        deliveryMethod === 'nacional'
          ? address.trim()
          : BARRANQUILLA_LOCATION.fullLabel,
      items: resolvedItems.map((i) => ({
        reference: i.watch.reference,
        name: i.watch.name,
        quantity: i.quantity,
        unitPriceCop: i.unitPrice,
      })),
      subtotalCop: subtotal,
      shippingCop: shippingCost,
      totalCop: total,
    };

    onCompleteOrder(receipt);
    setStep('confirmed');
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
            {step === 'checkout' && (
              <button
                type="button"
                onClick={() => setStep('bag')}
                aria-label="Volver a la bolsa"
                className="flex h-8 w-8 items-center justify-center rounded-[4px] border border-white/[0.12] text-[#e2e8f0] hover:border-white/40 cursor-pointer"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
            )}
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#94a3b8]">
                Barrtime · Barranquilla
              </p>
              <h2
                id="bag-drawer-title"
                className="text-[17px] font-normal text-white"
              >
                {step === 'bag' && 'Bolsa de Compra'}
                {step === 'checkout' && 'Finalizar Compra'}
                {step === 'confirmed' && 'Comprobante de Pedido'}
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
          {step === 'confirmed' && lastReceipt ? (
            <div className="space-y-6">
              <div className="rounded-[4px] border border-white/[0.14] bg-[#121214] p-5">
                <div className="flex items-center gap-3 text-white">
                  <CheckCircle2 className="h-5 w-5 text-[#25d366]" aria-hidden="true" />
                  <span className="font-mono text-[13px] uppercase tracking-[0.14em]">
                    Pedido #{lastReceipt.orderNumber} Confirmado
                  </span>
                </div>
                <p className="mt-3 text-[13px] font-light leading-[1.6] text-[#c4c7c8]">
                  Nuestro equipo en Barranquilla, Colombia coordinará contigo de inmediato la entrega segura de tu reloj.
                </p>
              </div>

              <div className="rounded-[4px] border border-white/[0.08] bg-[#121214]/60 p-5">
                <h3 className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#94a3b8]">
                  Resumen del Pedido
                </h3>
                <dl className="mt-3 space-y-2.5 text-[13px]">
                  <div className="flex justify-between gap-4">
                    <dt className="text-[#94a3b8]">Comprador</dt>
                    <dd className="text-right text-white">{lastReceipt.clientName}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-[#94a3b8]">Contacto</dt>
                    <dd className="text-right text-[#e2e8f0]">
                      {lastReceipt.clientEmail}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-[#94a3b8]">Entrega</dt>
                    <dd className="text-right text-[#e2e8f0]">
                      {lastReceipt.deliveryMethod === 'nacional'
                        ? 'Envío Asegurado Nacional'
                        : 'Entrega en Barranquilla'}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-[#94a3b8]">Destino</dt>
                    <dd className="text-right text-[#e2e8f0]">
                      {lastReceipt.destination}
                    </dd>
                  </div>
                </dl>

                <div className="mt-5 border-t border-white/[0.08] pt-4">
                  {lastReceipt.items.map((item, idx) => (
                    <div
                      key={`${item.reference}-${idx}`}
                      className="flex justify-between gap-4 py-2 text-[13px]"
                    >
                      <div>
                        <div className="text-white">
                          {item.quantity}× {item.name}
                        </div>
                        <div className="font-mono text-[11px] text-[#94a3b8]">
                          {item.reference}
                        </div>
                      </div>
                      <span className="font-mono text-white tabular-nums">
                        {formatCop(item.unitPriceCop * item.quantity)}
                      </span>
                    </div>
                  ))}
                  <div className="mt-3 flex justify-between border-t border-white/[0.08] pt-3 font-mono text-[15px] text-white tabular-nums">
                    <span>Total Confirmado</span>
                    <span>{formatCop(lastReceipt.totalCop)}</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  onClearReceipt();
                  setStep('bag');
                  onClose();
                }}
                className="h-11 w-full rounded-[4px] border border-white/[0.15] text-[11px] font-medium uppercase tracking-[0.15em] text-[#e2e8f0] hover:border-white/40 cursor-pointer"
              >
                Volver a la Colección
              </button>
            </div>
          ) : resolvedItems.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center py-16 text-center">
              <p className="text-[16px] font-normal text-white">
                Tu bolsa de compra está vacía.
              </p>
              <p className="mt-2 max-w-xs text-[13px] font-light leading-[1.6] text-[#94a3b8]">
                Explora la colección de relojes y añade tus referencias favoritas para formalizar tu pedido.
              </p>
              {lastReceipt && (
                <button
                  type="button"
                  onClick={() => setStep('confirmed')}
                  className="mt-6 h-10 rounded-[4px] border border-white/[0.15] px-4 text-[11px] font-medium uppercase tracking-[0.15em] text-[#e2e8f0] hover:border-white/40 cursor-pointer"
                >
                  Ver Último Comprobante (#{lastReceipt.orderNumber})
                </button>
              )}
            </div>
          ) : step === 'bag' ? (
            <div className="space-y-4">
              {resolvedItems.map((item) => (
                <div
                  key={item.watchId}
                  className="flex gap-4 rounded-[4px] border border-white/[0.08] bg-[#121214] p-4"
                >
                  <div className="h-24 w-24 shrink-0 overflow-hidden rounded-[4px] border border-white/[0.08]">
                    <WatchImageChamber
                      src={item.watch.image}
                      alt={item.watch.name}
                      reference={item.watch.reference}
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
                            {item.watch.name}
                          </h3>
                        </div>
                        <button
                          type="button"
                          onClick={() => onRemoveItem(item.watchId)}
                          aria-label={`Eliminar ${item.watch.name}`}
                          className="text-[#94a3b8] hover:text-white cursor-pointer"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>

                      <p className="mt-1 text-[12px] font-light text-[#94a3b8]">
                        {item.watch.specs.diameter} · {item.watch.specs.movement}
                      </p>
                    </div>

                    <div className="mt-3 flex items-center justify-between gap-2">
                      <div className="inline-flex items-center rounded-[4px] border border-white/[0.12] bg-[#0a0a0b]">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.watchId, -1)}
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
                          onClick={() => onUpdateQuantity(item.watchId, 1)}
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
          ) : (
            <form id="checkout-form" onSubmit={handleCheckoutSubmit} className="space-y-5">
              {formError && (
                <div className="rounded-[4px] border border-[#ffb4ab]/40 bg-[#93000a]/30 px-4 py-3 text-[12px] text-[#ffdad6]">
                  {formError}
                </div>
              )}

              <div>
                <label
                  htmlFor="client-name"
                  className="block text-[11px] font-medium uppercase tracking-[0.16em] text-[#94a3b8]"
                >
                  Nombre y Apellidos
                </label>
                <input
                  id="client-name"
                  type="text"
                  required
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="Carlos Mendoza"
                  className="mt-2 h-11 w-full rounded-[4px] border border-white/[0.08] bg-[#121214] px-3.5 text-[14px] text-white placeholder-[#94a3b8]/60 focus:border-[#e2e8f0] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="client-email"
                    className="block text-[11px] font-medium uppercase tracking-[0.16em] text-[#94a3b8]"
                  >
                    Correo Electrónico
                  </label>
                  <input
                    id="client-email"
                    type="email"
                    required
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    placeholder="carlos@dominio.com"
                    className="mt-2 h-11 w-full rounded-[4px] border border-white/[0.08] bg-[#121214] px-3.5 text-[14px] text-white placeholder-[#94a3b8]/60 focus:border-[#e2e8f0] focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="client-phone"
                    className="block text-[11px] font-medium uppercase tracking-[0.16em] text-[#94a3b8]"
                  >
                    Teléfono / WhatsApp
                  </label>
                  <input
                    id="client-phone"
                    type="tel"
                    required
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    placeholder="+57 300 123 4567"
                    className="mt-2 h-11 w-full rounded-[4px] border border-white/[0.08] bg-[#121214] px-3.5 text-[14px] text-white placeholder-[#94a3b8]/60 focus:border-[#e2e8f0] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <span className="block text-[11px] font-medium uppercase tracking-[0.16em] text-[#94a3b8]">
                  Modalidad de Entrega
                </span>
                <div className="mt-2 grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setDeliveryMethod('barranquilla')}
                    className={`rounded-[4px] border p-3 text-left text-[12px] transition-colors cursor-pointer ${
                      deliveryMethod === 'barranquilla'
                        ? 'border-white bg-white/[0.05] text-white'
                        : 'border-white/[0.08] bg-[#121214] text-[#94a3b8]'
                    }`}
                  >
                    <div className="font-medium">Entrega en Barranquilla</div>
                    <div className="mt-0.5 text-[11px] opacity-80">
                      Sin costo · Colombia
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setDeliveryMethod('nacional')}
                    className={`rounded-[4px] border p-3 text-left text-[12px] transition-colors cursor-pointer ${
                      deliveryMethod === 'nacional'
                        ? 'border-white bg-white/[0.05] text-white'
                        : 'border-white/[0.08] bg-[#121214] text-[#94a3b8]'
                    }`}
                  >
                    <div className="font-medium">Envío Nacional</div>
                    <div className="mt-0.5 text-[11px] opacity-80">
                      {subtotal >= 50000000 ? 'Cortesía ($ 0)' : '$ 120.000 COP'}
                    </div>
                  </button>
                </div>
              </div>

              {deliveryMethod === 'nacional' ? (
                <div>
                  <label
                    htmlFor="delivery-address"
                    className="block text-[11px] font-medium uppercase tracking-[0.16em] text-[#94a3b8]"
                  >
                    Dirección y Ciudad en Colombia
                  </label>
                  <input
                    id="delivery-address"
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Dirección completa, barrio y ciudad"
                    className="mt-2 h-11 w-full rounded-[4px] border border-white/[0.08] bg-[#121214] px-3.5 text-[14px] text-white placeholder-[#94a3b8]/60 focus:border-[#e2e8f0] focus:outline-none"
                  />
                </div>
              ) : (
                <div className="rounded-[4px] border border-white/[0.08] bg-[#121214] p-4 text-[13px] text-[#e2e8f0]">
                  <div className="font-medium text-white">
                    {BARRANQUILLA_LOCATION.fullLabel}
                  </div>
                  <div className="mt-1 text-[12px] font-light text-[#94a3b8]">
                    {BARRANQUILLA_LOCATION.detail}
                  </div>
                </div>
              )}
            </form>
          )}
        </div>

        {/* Pie del cajón */}
        {resolvedItems.length > 0 && step !== 'confirmed' && (
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

            {step === 'bag' ? (
              <div className="mt-5 space-y-2.5">
                <button
                  type="button"
                  onClick={() => setStep('checkout')}
                  className="flex h-11 w-full items-center justify-center rounded-[4px] bg-white text-[11px] font-medium uppercase tracking-[0.16em] text-[#0a0a0b] transition-colors hover:bg-[#e2e8f0] cursor-pointer"
                >
                  Finalizar Compra
                </button>
                <a
                  href={whatsappBagUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-full items-center justify-center gap-2 rounded-[4px] border border-[#25d366]/35 bg-[#0f1712] text-[11px] font-medium uppercase tracking-[0.14em] text-[#25d366] hover:border-[#25d366]/70"
                >
                  <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Enviar Selección por WhatsApp</span>
                </a>
              </div>
            ) : (
              <div className="mt-5">
                <button
                  type="submit"
                  form="checkout-form"
                  className="flex h-11 w-full items-center justify-center gap-2 rounded-[4px] bg-white text-[11px] font-medium uppercase tracking-[0.16em] text-[#0a0a0b] transition-colors hover:bg-[#e2e8f0] cursor-pointer"
                >
                  <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                  <span>Confirmar Pedido · {formatCop(total)}</span>
                </button>
              </div>
            )}
          </div>
        )}
      </aside>
    </div>
  );
}
