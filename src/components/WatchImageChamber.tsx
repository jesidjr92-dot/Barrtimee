import { useState } from 'react';

interface WatchImageChamberProps {
  src: string;
  alt: string;
  reference: string;
  aspectClass?: string;
  lumeMode?: boolean;
  className?: string;
}

export function WatchImageChamber({
  src,
  alt,
  reference,
  aspectClass = 'aspect-square',
  lumeMode = false,
  className = '',
}: WatchImageChamberProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-[#121214] select-none ${aspectClass} ${className}`}
    >
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading="lazy"
          onError={() => setHasError(true)}
          className={`h-full w-full object-cover transition-all duration-300 ease-out ${
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

      {lumeMode && !hasError && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(148,210,255,0.14),rgba(10,10,11,0.55)_70%)] mix-blend-screen"
        />
      )}
    </div>
  );
}
