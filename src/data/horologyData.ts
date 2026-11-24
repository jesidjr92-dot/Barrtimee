import { Timepiece } from '../types/horology';

export const TIMEPIECES: Timepiece[] = [
  {
   id: 'bt-01',
    reference: 'REF. BT-01.TI',
    collection: 'Cronómetro Negro',
    name: 'Cronómetro Negro Titanio',
    category: 'Cronógrafos',
    priceCop: 78500000,
    image: '/src/assets/images/logobarrtime.jpeg',
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
    priceCop: 63900000,
    image: '/src/assets/images/watch_chronograph_steel_1795474645685.jpg',
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
    priceCop: 198000000,
    image: '/src/assets/images/watch_tourbillon_titanium_1795474646347.jpg',
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
    priceCop: 96400000,
    image: '/src/assets/images/watch_minimal_dress_1795474646681.jpg',
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
    priceCop: 69200000,
    image: '/src/assets/images/watch_diver_ceramic_1795474647523.jpg',
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
    {
    id: 'bt-07',
    reference: 'REF. BT-07.NEW',
    collection: 'Cronómetro Negro',
    name: 'Cronómetro Negro Oro Rosa',
    category: 'Cronógrafos',
    priceCop: 85000000,
    image: '/src/assets/images/reloj-nuevo.jpg',
    aspectRatio: '4:3',
    availability: 'Edición Numerada',
    editionNote: 'Disponibilidad inmediata en Barranquilla',
    isFlagship: false,
    description:
      'Cronógrafo mecánico en acero con detalles en oro rosa. Esfera negra satinada con contadores de precisión y cristal de zafiro.',
    specs: {
      diameter: '41.0 mm',
      thickness: '11.4 mm',
      movement: 'Automático',
      powerReserve: '72 h',
      caseMaterial: 'Acero y Oro Rosa',
      crystal: 'Zafiro abombado antirreflejos',
      waterResistance: '100 m / 10 bar',
    },
  },
];
  
export const BARRANQUILLA_LOCATION = {
  city: 'Barranquilla',
  country: 'Colombia',
  fullLabel: 'Barranquilla, Atlántico — Colombia',
  detail: 'Atención presencial y asesoría personalizada en Barranquilla',
};

export const CONCIERGE_WHATSAPP_NUMBER = '573046095806';

export function formatCop(amount: number): string {
  return `${new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  }).format(amount)} COP`;
}

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${CONCIERGE_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
