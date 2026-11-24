import { Check, X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { AcquisitionDrawer } from './components/AcquisitionDrawer';
import { CollectionSection } from './components/CollectionSection';
import { CompareModal } from './components/CompareModal';
import { ConciergeFooter } from './components/ConciergeFooter';
import { HeroShowcase } from './components/HeroShowcase';
import { Navbar } from './components/Navbar';
import { TimepieceDetailModal } from './components/TimepieceDetailModal';
import { DEFAULT_WHATSAPP_NUMBER, TIMEPIECES } from './data/horologyData';
import { CartItem, Timepiece, WatchColorVariant } from './types/horology';

const STORAGE_CART_KEY = 'barrtime_bag_variants_v1';
const STORAGE_WHATSAPP_KEY = 'barrtime_whatsapp_v1';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_CART_KEY);
      return raw ? (JSON.parse(raw) as CartItem[]) : [];
    } catch {
      return [];
    }
  });

  const [whatsappNumber, setWhatsappNumber] = useState<string>(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_WHATSAPP_KEY);
      return saved || DEFAULT_WHATSAPP_NUMBER;
    } catch {
      return DEFAULT_WHATSAPP_NUMBER;
    }
  });

  const [inspectedSelection, setInspectedSelection] = useState<{
    watch: Timepiece;
    variantIndex: number;
  } | null>(null);
  const [compareIds, setCompareIds] = useState<string[]>([]);
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const [isBagOpen, setIsBagOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_CART_KEY, JSON.stringify(cartItems));
    } catch {
      // ignorar errores de almacenamiento
    }
  }, [cartItems]);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_WHATSAPP_KEY, whatsappNumber);
    } catch {
      // ignorar errores de almacenamiento
    }
  }, [whatsappNumber]);

  useEffect(() => {
    if (!toastMessage) return;
    const timer = window.setTimeout(() => setToastMessage(null), 3000);
    return () => window.clearTimeout(timer);
  }, [toastMessage]);

  const flagshipWatch = TIMEPIECES.find((w) => w.isFlagship) ?? TIMEPIECES[0];

  const totalBagCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems]
  );

  const comparedWatches = useMemo(
    () => TIMEPIECES.filter((w) => compareIds.includes(w.id)),
    [compareIds]
  );

  const handleInspectWatch = (watch: Timepiece, variantIndex: number = 0) => {
    setInspectedSelection({ watch, variantIndex });
  };

  const handleAddToBag = (watch: Timepiece, variant: WatchColorVariant) => {
    const cartKey = `${watch.id}__${variant.id}`;
    setCartItems((prev) => {
      const existing = prev.find((item) => item.cartKey === cartKey);
      if (existing) {
        return prev.map((item) =>
          item.cartKey === cartKey
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prev,
        {
          cartKey,
          watchId: watch.id,
          variantId: variant.id,
          quantity: 1,
        },
      ];
    });

    setToastMessage(`${variant.productName} añadido a tu bolsa`);
  };

  const handleUpdateQuantity = (cartKey: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.cartKey === cartKey
            ? { ...item, quantity: item.quantity + delta }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveItem = (cartKey: string) => {
    setCartItems((prev) => prev.filter((item) => item.cartKey !== cartKey));
  };

  const handleToggleCompare = (watchId: string) => {
    setCompareIds((prev) => {
      if (prev.includes(watchId)) {
        return prev.filter((id) => id !== watchId);
      }
      if (prev.length >= 4) {
        setToastMessage('Máximo 4 referencias simultáneas en el comparador');
        return prev;
      }
      return [...prev, watchId];
    });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-[#e5e2e3]">
      <Navbar cartCount={totalBagCount} onOpenBag={() => setIsBagOpen(true)} />

      <main>
        <HeroShowcase
          flagship={flagshipWatch}
          onInspectFlagship={handleInspectWatch}
          onQuickAddFlagship={handleAddToBag}
        />

        {/* Sello editorial centrado de la marca */}
        <div className="border-b border-white/[0.08] bg-[#0a0a0b] py-10 md:py-12">
          <div className="mx-auto flex max-w-[1440px] items-center gap-6 px-5 md:gap-12 md:px-10 lg:px-16">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/[0.1] to-white/[0.18]" />
            <div className="h-36 w-36 shrink-0 md:h-44 md:w-44">
              <img
                src="/assets/aistudio/logobarrtime_194bfff8.jpeg"
                alt="Barrtime — Alta Relojería"
                referrerPolicy="no-referrer"
                className="h-full w-full object-contain mix-blend-lighten brightness-[0.9] contrast-[1.35]"
              />
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-white/[0.1] to-white/[0.18]" />
          </div>
        </div>

        <CollectionSection
          timepieces={TIMEPIECES}
          compareIds={compareIds}
          onToggleCompare={handleToggleCompare}
          onOpenCompare={() => setIsCompareOpen(true)}
          onClearCompare={() => setCompareIds([])}
          onInspectWatch={handleInspectWatch}
          onQuickAdd={handleAddToBag}
        />
      </main>

      <ConciergeFooter whatsappNumber={whatsappNumber} />

      <TimepieceDetailModal
        watch={inspectedSelection?.watch ?? null}
        initialVariantIndex={inspectedSelection?.variantIndex ?? 0}
        whatsappNumber={whatsappNumber}
        onClose={() => setInspectedSelection(null)}
        onAddToBag={handleAddToBag}
      />

      <CompareModal
        isOpen={isCompareOpen}
        watches={comparedWatches}
        onClose={() => setIsCompareOpen(false)}
        onRemoveCompare={handleToggleCompare}
        onInspectWatch={handleInspectWatch}
        onQuickAdd={handleAddToBag}
      />

      <AcquisitionDrawer
        isOpen={isBagOpen}
        items={cartItems}
        timepieces={TIMEPIECES}
        whatsappNumber={whatsappNumber}
        onChangeWhatsAppNumber={setWhatsappNumber}
        onClose={() => setIsBagOpen(false)}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearBag={() => setCartItems([])}
      />

      {/* Notificación flotante */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed right-5 bottom-5 z-40 flex items-center gap-3 rounded-[4px] border border-white/[0.18] smoked-glass px-4 py-3 text-[13px] text-white"
        >
          <Check className="h-4 w-4 text-[#e2e8f0]" aria-hidden="true" />
          <span>{toastMessage}</span>
          <button
            type="button"
            onClick={() => {
              setToastMessage(null);
              setIsBagOpen(true);
            }}
            className="ml-2 border-l border-white/[0.15] pl-3 text-[11px] font-medium uppercase tracking-[0.14em] text-[#e2e8f0] hover:text-white cursor-pointer"
          >
            Ver Bolsa
          </button>
          <button
            type="button"
            onClick={() => setToastMessage(null)}
            aria-label="Cerrar notificación"
            className="text-[#94a3b8] hover:text-white cursor-pointer"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      )}
    </div>
  );
}
