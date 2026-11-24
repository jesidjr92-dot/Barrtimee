import { Timepiece } from '../types/horology';

export const TIMEPIECES: Timepiece[] = [
  {
    id: 'bt-01',
    reference: 'REF. BT-01.TI',
    collection: 'Cronómetro Negro',
    name: 'Cronómetro Negro Titanio',
    category: 'Cronógrafos',
    priceCop: 78500,
    image: '/src/assets/images/hero_horology_flagship_1795474645218.jpg',
    images: [
      {
        src: '/src/assets/images/hero_horology_flagship_1795474645218.jpg',
        label: 'Vista principal',
      },
      {
        src: '/src/assets/images/watch_bt01_angle_1795496666186.jpg',
        label: 'Perfil y pulsadores',
      },
      {
        src: '/src/assets/images/hero_horology_flagship_1795474645218.jpg',
        label: 'Detalle esfera',
        macroZoom: true,
      },
    ],
    aspectRatio: '4:3',
    availability: 'Edición Numerada',
    editionNote: 'Disponibilidad inmediata en Barranquilla',
    isFlagship: true,
    description:
      'Cronógrafo mecánico en titanio Grado 5 y bisel cerámico negro micrograbado. Esfera antracita satinada vertical con contadores de precisión y cristal de zafiro con doble tratamiento antirreflejos.',
    specs: {
      diameter: '41.0 mm',
      thickness: '11.4 mm',
      movement: 'Automático',
      powerReserve: '72 h',
      caseMaterial: 'Titanio Grado 5 y Cerámica Negra',
      crystal: 'Zafiro abombado antirreflejos',
      waterResistance: '100 m / 10 bar',
    },
  },
  {
    id: 'bt-02',
    reference: 'REF. BT-02.ST',
    collection: 'Línea Arquitectura',
    name: 'Cronógrafo Acero 904L',
    category: 'Cronógrafos',
    priceCop: 63900,
    image: '/src/assets/images/technoplata.jpeg',
    images: [
      {
        src: '/src/assets/images/technonegro.jpeg',
        label: 'Vista frontal',
      },
      {
        src: '/src/assets/images/technoarco.jpeg',
        label: 'Perfil 45°',
      },
      {
        src: '/src/assets/images/technorosa.jpeg',
        label: 'Detalle esfera',
        macroZoom: true,
      },
    ],
    aspectRatio: '1:1',
    availability: 'Disponible',
    editionNote: 'Entrega asegurada en 24 a 48 h',
    description:
      'Cronógrafo en acero inoxidable 904L cepillado con esfera negro obsidiana mate y subesferas grabadas que garantizan lectura nítida bajo cualquier condición de luz.',
    specs: {
      diameter: '40.5 mm',
      thickness: '11.8 mm',
      movement: 'Automático',
      powerReserve: '68 h',
      caseMaterial: 'Acero Inoxidable 904L Cepillado',
      crystal: 'Zafiro plano doble antirreflejos',
      waterResistance: '100 m / 10 bar',
    },
  },
  {
    id: 'bt-03',
    reference: 'REF. BT-03.TB',
    collection: 'Alta Complicación',
    name: 'Torbellino Esqueleto G5',
    category: 'Grandes Complicaciones',
    priceCop: 79800,
    image: '/src/assets/images/watch_tourbillon_titanium_1795474646347.jpg',
    images: [
      {
        src: '/src/assets/images/watch_tourbillon_titanium_1795474646347.jpg',
        label: 'Vista frontal',
      },
      {
        src: '/src/assets/images/watch_bt03_angle_1795496667384.jpg',
        label: 'Perfil 45°',
      },
      {
        src: '/src/assets/images/watch_tourbillon_titanium_1795474646347.jpg',
        label: 'Detalle mecanismo',
        macroZoom: true,
      },
    ],
    aspectRatio: '1:1',
    availability: 'Bajo Pedido',
    editionNote: 'Pieza de colección bajo asignación',
    description:
      'Arquitectura abierta con regulador giratorio suspendido a las 6 horas entre puentes de titanio microarenados con acabado oscuro y detalles biselados a mano.',
    specs: {
      diameter: '41.5 mm',
      thickness: '10.2 mm',
      movement: 'Cuerda manual',
      powerReserve: '96 h',
      caseMaterial: 'Titanio Grado 5 Microarenado',
      crystal: 'Zafiro técnico frontal y posterior',
      waterResistance: '50 m / 5 bar',
    },
  },
  {
    id: 'bt-04',
    reference: 'REF. BT-04.PT',
    collection: 'Soberana',
    name: 'Extrafino Platino 950',
    category: 'Esfera Minimalista',
    priceCop: 96400,
    image: '/src/assets/images/watch_minimal_dress_1795474646681.jpg',
    images: [
      {
        src: '/src/assets/images/watch_minimal_dress_1795474646681.jpg',
        label: 'Vista frontal',
      },
      {
        src: '/src/assets/images/watch_bt04_angle_1795496667448.jpg',
        label: 'Perfil extrafino',
      },
      {
        src: '/src/assets/images/watch_minimal_dress_1795474646681.jpg',
        label: 'Detalle esfera',
        macroZoom: true,
      },
    ],
    aspectRatio: '1:1',
    availability: 'Disponible',
    editionNote: 'Perfil ultrafino de 6.1 mm',
    description:
      'Diseño minimalista de alta relojería con caja de 6.1 mm mecanizada en platino 950, esfera ahumada gris pizarra rayos de sol e índices bastón facetados.',
    specs: {
      diameter: '38.5 mm',
      thickness: '6.1 mm',
      movement: 'Automático',
      powerReserve: '62 h',
      caseMaterial: 'Platino 950 Pulido y Satinado',
      crystal: 'Zafiro ultraclaro',
      waterResistance: '30 m / 3 bar',
    },
  },
  {
    id: 'bt-05',
    reference: 'REF. BT-05.CB',
    collection: 'Horizontes Profundos',
    name: 'Abismo Carbono Forjado 300M',
    category: 'Buceo Técnico',
    priceCop: 69200,
    image: '/src/assets/images/watch_diver_ceramic_1795474647523.jpg',
    images: [
      {
        src: '/src/assets/images/watch_diver_ceramic_1795474647523.jpg',
        label: 'Vista frontal',
      },
      {
        src: '/src/assets/images/watch_bt05_angle_1795496667654.jpg',
        label: 'Perfil bisel y corona',
      },
      {
        src: '/src/assets/images/watch_diver_ceramic_1795474647523.jpg',
        label: 'Detalle esfera',
        macroZoom: true,
      },
    ],
    aspectRatio: '1:1',
    availability: 'Disponible',
    editionNote: 'Resistencia profesional hasta 300 m',
    description:
      'Caja monocasco de carbono forjado de alta densidad con bisel unidireccional cerámico de 120 clics e índices con pigmento luminiscente de emisión fría.',
    specs: {
      diameter: '42.0 mm',
      thickness: '12.6 mm',
      movement: 'Automático',
      powerReserve: '70 h',
      caseMaterial: 'Carbono Forjado y Titanio G5',
      crystal: 'Zafiro 3.2 mm biselado',
      waterResistance: '300 m / 30 bar',
    },
  },
];

export const BARRANQUILLA_LOCATION = {
  city: 'Barranquilla',
  country: 'Colombia',
  fullLabel: 'Barranquilla, Atlántico — Colombia',
  detail: 'Atención presencial y asesoría personalizada en Barranquilla',
};

export const DEFAULT_WHATSAPP_NUMBER = '573046095806';

export function sanitizePhoneNumber(raw: string): string {
  return raw.replace(/\D/g, '');
}

export function formatCop(amount: number): string {
  return `${new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  }).format(amount)} COP`;
}

export function buildWhatsAppUrl(
  message: string,
  phoneNumber: string = DEFAULT_WHATSAPP_NUMBER
): string {
  const cleanNumber = sanitizePhoneNumber(phoneNumber) || DEFAULT_WHATSAPP_NUMBER;
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}
