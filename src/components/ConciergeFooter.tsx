import { MapPin, MessageCircle } from 'lucide-react';
import { BARRANQUILLA_LOCATION, buildWhatsAppUrl } from '../data/horologyData';

export function ConciergeFooter() {
  const directWhatsAppUrl = buildWhatsAppUrl(
    'Hola Barrtime Barranquilla, deseo asesoría personalizada sobre los relojes disponibles.'
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

        {/* Pie de página */}
        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/[0.08] pt-8 text-[12px] font-light text-[#94a3b8] sm:flex-row sm:items-center">
          <div className="flex items-center gap-4">
            <span className="font-medium tracking-[0.18em] text-white uppercase">
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
