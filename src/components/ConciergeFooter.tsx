import { ArrowUpRight, MapPin, MessageCircle } from 'lucide-react';
import {
  BARRANQUILLA_LOCATION,
  buildWhatsAppUrl,
  DEFAULT_SOCIAL_LINKS,
} from '../data/horologyData';

interface ConciergeFooterProps {
  whatsappNumber: string;
}

export function ConciergeFooter({ whatsappNumber }: ConciergeFooterProps) {
  const directWhatsAppUrl = buildWhatsAppUrl(
    'Hola Barrtime Barranquilla, deseo asesoría personalizada sobre los relojes disponibles.',
    whatsappNumber
  );

  return (
    <footer
      id="atencion"
      className="bg-[#0a0a0b] pt-16 pb-12 md:pt-24 md:pb-16"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-8 rounded-[4px] border border-white/[0.08] bg-[#121214] p-6 md:p-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#94a3b8]">
              Asesoría Directa
            </p>
            <h2 className="mt-2 text-[28px] font-light leading-[1.2] tracking-[-0.025em] text-white md:text-[36px]">
              Atención en Barranquilla, Colombia
            </h2>
            <p className="mt-4 max-w-xl text-[14px] font-light leading-[1.7] text-[#c4c7c8]">
              Resolvemos tus dudas sobre disponibilidad, especificaciones de cada reloj y coordinación de entrega segura directamente en Barranquilla o envíos a cualquier ciudad de Colombia.
            </p>

            <div className="mt-6 flex items-center gap-3 text-[13px] text-[#e2e8f0]">
              <MapPin className="h-4 w-4 text-[#94a3b8]" aria-hidden="true" />
              <span>{BARRANQUILLA_LOCATION.fullLabel}</span>
            </div>
          </div>

          <div className="flex flex-col items-start gap-3 lg:col-span-5 lg:items-end">
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-[4px] border border-[#25d366]/35 bg-[#0f1712] px-6 text-[11px] font-medium uppercase tracking-[0.15em] text-[#25d366] transition-colors hover:border-[#25d366]/70 lg:w-auto"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              <span>Asesoría por WhatsApp · Barranquilla</span>
            </a>
            <span className="text-[12px] font-light text-[#94a3b8]">
              Atención personalizada únicamente en Colombia, Barranquilla.
            </span>
          </div>
        </div>

        {/* Espacio de Redes Sociales */}
        <div className="mt-8 rounded-[4px] border border-white/[0.08] bg-[#121214]/70 p-6 md:p-8">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#94a3b8]">
              Comunidad Oficial
            </p>
            <h3 className="mt-1 text-[18px] font-normal text-white">
              Nuestras Redes Sociales
            </h3>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <a
              href={DEFAULT_SOCIAL_LINKS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-[4px] border border-white/[0.08] bg-[#0a0a0b] px-5 py-4 transition-colors hover:border-white/30"
            >
              <div className="flex items-center gap-3.5">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-[#e2e8f0]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
                <div>
                  <span className="block text-[10px] font-medium uppercase tracking-[0.16em] text-[#94a3b8]">
                    Instagram
                  </span>
                  <span className="mt-0.5 block text-[14px] text-white">
                    {DEFAULT_SOCIAL_LINKS.instagramHandle}
                  </span>
                </div>
              </div>
              <ArrowUpRight
                className="h-4 w-4 text-[#94a3b8] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
                aria-hidden="true"
              />
            </a>

            <a
              href={DEFAULT_SOCIAL_LINKS.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-[4px] border border-white/[0.08] bg-[#0a0a0b] px-5 py-4 transition-colors hover:border-white/30"
            >
              <div className="flex items-center gap-3.5">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-[#e2e8f0]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
                <div>
                  <span className="block text-[10px] font-medium uppercase tracking-[0.16em] text-[#94a3b8]">
                    TikTok
                  </span>
                  <span className="mt-0.5 block text-[14px] text-white">
                    {DEFAULT_SOCIAL_LINKS.tiktokHandle}
                  </span>
                </div>
              </div>
              <ArrowUpRight
                className="h-4 w-4 text-[#94a3b8] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
                aria-hidden="true"
              />
            </a>

            <a
              href={DEFAULT_SOCIAL_LINKS.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-[4px] border border-white/[0.08] bg-[#0a0a0b] px-5 py-4 transition-colors hover:border-white/30"
            >
              <div className="flex items-center gap-3.5">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-[#e2e8f0]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <div>
                  <span className="block text-[10px] font-medium uppercase tracking-[0.16em] text-[#94a3b8]">
                    Facebook
                  </span>
                  <span className="mt-0.5 block text-[14px] text-white">
                    {DEFAULT_SOCIAL_LINKS.facebookHandle}
                  </span>
                </div>
              </div>
              <ArrowUpRight
                className="h-4 w-4 text-[#94a3b8] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        {/* Pie de página */}
        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/[0.08] pt-8 text-[12px] font-light text-[#94a3b8] sm:flex-row sm:items-center">
          <div className="flex items-center gap-3.5">
            <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full">
              <img
                src="/assets/aistudio/logobarrtime_194bfff8.jpeg"
                alt="Emblema Barrtime"
                referrerPolicy="no-referrer"
                className="pointer-events-none absolute left-1/2 top-[-26.6%] h-[210%] w-[210%] max-w-none -translate-x-1/2 object-contain mix-blend-lighten brightness-[0.9] contrast-[1.35]"
              />
            </span>
            <span className="font-medium tracking-[0.2em] text-white uppercase">
              BARRTIME
            </span>
            <span aria-hidden="true">·</span>
            <span>Barranquilla, Colombia</span>
          </div>
          <div>© {new Date().getFullYear()} Barrtime. Todos los derechos reservados.</div>
        </div>
      </div>
    </footer>
  );
}
