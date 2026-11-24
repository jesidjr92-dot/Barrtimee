import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState } from 'react';
import { WatchImageSlide } from '../types/horology';

interface WatchImageChamberProps {
  src: string;
  images?: WatchImageSlide[];
  alt: string;
  reference: string;
  aspectClass?: string;
  lumeMode?: boolean;
  className?: string;
  showControls?: boolean;
  onImageClick?: () => void;
}

export function WatchImageChamber({
  src,
  images,
  alt,
  reference,
  aspectClass = 'aspect-square',
  lumeMode = false,
  className = '',
  showControls = true,
  onImageClick,
}: WatchImageChamberProps) {
  const slides: WatchImageSlide[] =
    images && images.length > 0 ? images : [{ src, label: 'Vista principal' }];

  const [activeIndex, setActiveIndex] = useState(0);
  const [failedSlides, setFailedSlides] = useState<Record<number, boolean>>({});
  const [dragOffsetPx, setDragOffsetPx] = useState(0);

  const dragStartX = useRef<number | null>(null);
  const didDrag = useRef(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const safeIndex = Math.min(activeIndex, slides.length - 1);
  const hasMultiple = slides.length > 1;

  const goToSlide = (nextIdx: number) => {
    const wrapped = (nextIdx + slides.length) % slides.length;
    setActiveIndex(wrapped);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!hasMultiple) return;
    if ((e.target as HTMLElement).closest('button')) return;
    dragStartX.current = e.clientX;
    didDrag.current = false;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (dragStartX.current === null) return;
    const delta = e.clientX - dragStartX.current;
    if (Math.abs(delta) > 6) {
      didDrag.current = true;
    }
    setDragOffsetPx(delta);
  };

  const finishDrag = () => {
    if (dragStartX.current === null) return;
    const width = containerRef.current?.clientWidth ?? 300;
    const threshold = Math.min(55, width * 0.18);

    if (dragOffsetPx < -threshold) {
      goToSlide(safeIndex + 1);
    } else if (dragOffsetPx > threshold) {
      goToSlide(safeIndex - 1);
    }
    dragStartX.current = null;
    setDragOffsetPx(0);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (didDrag.current) {
      e.preventDefault();
      e.stopPropagation();
      didDrag.current = false;
      return;
    }
    if ((e.target as HTMLElement).closest('button')) return;
    onImageClick?.();
  };

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={finishDrag}
      onPointerCancel={finishDrag}
      onClick={handleClick}
      className={`group/slider relative overflow-hidden bg-[#121214] select-none touch-pan-y ${aspectClass} ${
        onImageClick ? 'cursor-pointer' : ''
      } ${hasMultiple ? 'cursor-grab active:cursor-grabbing' : ''} ${className}`}
    >
      {/* Pista deslizable de imágenes */}
      <div
        className="flex h-full w-full transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(calc(-${safeIndex * 100}% + ${dragOffsetPx}px), 0, 0)`,
          transitionDuration: dragStartX.current !== null ? '0ms' : '280ms',
        }}
      >
        {slides.map((slide, idx) => {
          const isFailed = Boolean(failedSlides[idx]);
          return (
            <div
              key={`${slide.src}-${idx}`}
              className="relative h-full w-full shrink-0 overflow-hidden"
            >
              {!isFailed ? (
                <img
                  src={slide.src}
                  alt={`${alt} — ${slide.label}`}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  draggable={false}
                  onError={() =>
                    setFailedSlides((prev) => ({ ...prev, [idx]: true }))
                  }
                  className={`h-full w-full object-cover object-center transition-all duration-300 ease-out ${
                    slide.macroZoom ? 'scale-[1.55]' : 'scale-[1.18]'
                  } ${
                    lumeMode
                      ? 'brightness-[0.65] contrast-[1.35] saturate-[0.85]'
                      : 'brightness-100 contrast-100'
                  }`}
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-b from-[#18181b] to-[#0a0a0b] p-6 text-center">
                  <svg
                    viewBox="0 0 120 120"
                    className="mb-3 h-24 w-24 text-[#94a3b8]/40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    aria-hidden="true"
                  >
                    <rect x="42" y="8" width="36" height="16" rx="2" />
                    <rect x="42" y="96" width="36" height="16" rx="2" />
                    <circle cx="60" cy="60" r="36" />
                    <circle cx="60" cy="60" r="30" strokeOpacity="0.4" />
                    <line x1="60" y1="60" x2="60" y2="38" />
                    <line x1="60" y1="60" x2="76" y2="66" />
                  </svg>
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#94a3b8]">
                    {reference}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {lumeMode && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(148,210,255,0.14),rgba(10,10,11,0.55)_70%)] mix-blend-screen"
        />
      )}

      {/* Controles de deslizamiento (flechas e indicadores circulares) */}
      {hasMultiple && showControls && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goToSlide(safeIndex - 1);
            }}
            aria-label="Imagen anterior"
            className="absolute top-1/2 left-2.5 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#0a0a0b]/75 text-[#e2e8f0] opacity-100 md:opacity-0 transition-opacity duration-150 hover:border-white/40 hover:text-white group-hover/slider:opacity-100 cursor-pointer"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goToSlide(safeIndex + 1);
            }}
            aria-label="Imagen siguiente"
            className="absolute top-1/2 right-2.5 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#0a0a0b]/75 text-[#e2e8f0] opacity-100 md:opacity-0 transition-opacity duration-150 hover:border-white/40 hover:text-white group-hover/slider:opacity-100 cursor-pointer"
          >
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </button>

          {/* Indicadores de diapositiva */}
          <div
            className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-white/10 bg-[#0a0a0b]/70 px-2.5 py-1.5 backdrop-blur-sm"
            onClick={(e) => e.stopPropagation()}
          >
            {slides.map((slide, idx) => (
              <button
                key={`${slide.label}-${idx}`}
                type="button"
                aria-label={`Ver ${slide.label}`}
                aria-current={idx === safeIndex}
                onClick={(e) => {
                  e.stopPropagation();
                  goToSlide(idx);
                }}
                className={`h-1.5 rounded-full transition-all duration-150 cursor-pointer ${
                  idx === safeIndex
                    ? 'w-4 bg-white'
                    : 'w-1.5 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
