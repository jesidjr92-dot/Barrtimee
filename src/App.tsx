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
import { CartItem, Timepiece } from './types/horology';

const STORAGE_CART_KEY = 'barrtime_bag_cop_v1';
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

  const [inspectedWatch, setInspectedWatch] = useState<Timepiece | null>(null);
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

  const handleAddToBag = (watch: Timepiece) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.watchId === watch.id);
      if (existing) {
        return prev.map((item) =>
          item.watchId === watch.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { watchId: watch.id, quantity: 1 }];
    });

    setToastMessage(`${watch.name} añadido a tu bolsa`);
  };

  const handleUpdateQuantity = (watchId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.watchId === watchId
            ? { ...item, quantity: item.quantity + delta }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveItem = (watchId: string) => {
    setCartItems((prev) => prev.filter((item) => item.watchId !== watchId));
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
          onInspectFlagship={setInspectedWatch}
          onQuickAddFlagship={handleAddToBag}
        />

        <CollectionSection
          timepieces={TIMEPIECES}
          compareIds={compareIds}
          onToggleCompare={handleToggleCompare}
          onOpenCompare={() => setIsCompareOpen(true)}
          onClearCompare={() => setCompareIds([])}
          onInspectWatch={setInspectedWatch}
          onQuickAdd={handleAddToBag}
        />
      </main>

      <ConciergeFooter whatsappNumber={whatsappNumber} />

      <TimepieceDetailModal
        watch={inspectedWatch}
        whatsappNumber={whatsappNumber}
        onClose={() => setInspectedWatch(null)}
        onAddToBag={handleAddToBag}
      />

      <CompareModal
        isOpen={isCompareOpen}
        watches={comparedWatches}
        onClose={() => setIsCompareOpen(false)}
        onRemoveCompare={handleToggleCompare}
        onInspectWatch={setInspectedWatch}
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
