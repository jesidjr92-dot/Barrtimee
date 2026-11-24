import { Timepiece } from '../types/horology';

export const TIMEPIECES: Timepiece[] = [
  {
    id: 'bt-01',
    reference: 'REF. BT-01.TI',
    collection: 'Cronómetro Titanio',
    name: 'Cronómetro Titanio Grado 5',
    category: 'Cronógrafos',
    priceCop: 78500000,
    variants: [
      {
        id: 'negro',
        colorName: 'Negro Obsidiana',
        productName: 'Cronómetro Titanio Negro Obsidiana',
        swatchHex: '#18181b',
        src: '/src/assets/images/hero_horology_flagship_1795474645218.jpg',
      },
      {
        id: 'azul',
        colorName: 'Azul Medianoche',
        productName: 'Cronómetro Titanio Azul Medianoche',
        swatchHex: '#1e3a5f',
        src: '/src/assets/images/bt01_azul_1795540688116.jpg',
      },
      {
        id: 'verde',
        colorName: 'Verde Esmeralda',
        productName: 'Cronómetro Titanio Verde Esmeralda',
        swatchHex: '#1b4332',
        src: '/src/assets/images/bt01_verde_1795540688862.jpg',
      },
    ],
    aspectRatio: '4:3',
    availability: 'Edición Numerada',
    editionNote: 'Disponibilidad inmediata en Barranquilla',
    isFlagship: true,
    description:
      'Cronógrafo mecánico en titanio Grado 5 y bisel cerámico micrograbado. Esfera satinada vertical con contadores de precisión y cristal de zafiro con doble tratamiento antirreflejos.',
    specs: {
      diameter: '41.0 mm',
      thickness: '11.4 mm',
      movement: 'Automático',
      powerReserve: '72 h',
      caseMaterial: 'Titanio Grado 5 y Cerámica',
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
    variants: [
      {
        id: 'negro',
        colorName: 'Negro Obsidiana',
        productName: 'Cronógrafo Acero 904L Negro Obsidiana',
        swatchHex: '#18181b',
        src: '/src/assets/images/watch_chronograph_steel_1795474645685.jpg',
      },
      {
        id: 'azul',
        colorName: 'Azul Real',
        productName: 'Cronógrafo Acero 904L Azul Real',
        swatchHex: '#1d3557',
        src: '/src/assets/images/bt02_azul_1795540689865.jpg',
      },
      {
        id: 'plata',
        colorName: 'Plata Polar',
        productName: 'Cronógrafo Acero 904L Plata Polar',
        swatchHex: '#d4d4d8',
        src: '/src/assets/images/bt02_plata_1795540689926.jpg',
      },
    ],
    aspectRatio: '1:1',
    availability: 'Disponible',
    editionNote: 'Entrega asegurada en 24 a 48 h',
    description:
      'Cronógrafo en acero inoxidable 904L cepillado con subesferas grabadas que garantizan lectura nítida bajo cualquier condición de luz.',
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
    variants: [
      {
        id: 'antracita',
        colorName: 'Titanio Antracita',
        productName: 'Torbellino Esqueleto Titanio Antracita',
        swatchHex: '#52525b',
        src: '/src/assets/images/watch_tourbillon_titanium_1795474646347.jpg',
      },
      {
        id: 'bronce',
        colorName: 'Bronce Rosa',
        productName: 'Torbellino Esqueleto Bronce Rosa',
        swatchHex: '#b07d62',
        src: '/src/assets/images/bt03_bronce_1795540691570.jpg',
      },
      {
        id: 'azul',
        colorName: 'Azul Cobalto',
        productName: 'Torbellino Esqueleto Azul Cobalto',
        swatchHex: '#1d4ed8',
        src: '/src/assets/images/bt03_azul_1795540691007.jpg',
      },
    ],
    aspectRatio: '1:1',
    availability: 'Bajo Pedido',
    editionNote: 'Pieza de colección bajo asignación',
    description:
      'Arquitectura abierta con regulador giratorio suspendido a las 6 horas entre puentes de titanio microarenados y detalles biselados a mano.',
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
    variants: [
      {
        id: 'pizarra',
        colorName: 'Gris Pizarra',
        productName: 'Extrafino Platino Gris Pizarra',
        swatchHex: '#52525b',
        src: '/src/assets/images/watch_minimal_dress_1795474646681.jpg',
      },
      {
        id: 'blanco',
        colorName: 'Blanco Opalino',
        productName: 'Extrafino Platino Blanco Opalino',
        swatchHex: '#e4e4e7',
        src: '/src/assets/images/bt04_blanco_1795540691906.jpg',
      },
      {
        id: 'azul',
        colorName: 'Azul Noche',
        productName: 'Extrafino Platino Azul Noche',
        swatchHex: '#1e293b',
        src: '/src/assets/images/bt04_azul_1795540691882.jpg',
      },
    ],
    aspectRatio: '1:1',
    availability: 'Disponible',
    editionNote: 'Perfil ultrafino de 6.1 mm',
    description:
      'Diseño minimalista de alta relojería con caja de 6.1 mm mecanizada en platino 950, esfera rayos de sol e índices bastón facetados.',
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
    variants: [
      {
        id: 'negro',
        colorName: 'Negro Carbono',
        productName: 'Abismo Carbono Negro 300M',
        swatchHex: '#18181b',
        src: '/src/assets/images/watch_diver_ceramic_1795474647523.jpg',
      },
      {
        id: 'verde',
        colorName: 'Verde Abisal',
        productName: 'Abismo Carbono Verde Abisal 300M',
        swatchHex: '#14532d',
        src: '/src/assets/images/bt05_verde_1795540692681.jpg',
      },
      {
        id: 'azul',
        colorName: 'Azul Oceánico',
        productName: 'Abismo Carbono Azul Oceánico 300M',
        swatchHex: '#1e3a8a',
        src: '/src/assets/images/bt05_azul_1795540693106.jpg',
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
  {
    id: 'bt-06',
    reference: 'REF. BT-05.CB',
    collection: 'Horizontes Profundos',
    name: 'Abismo Carbono Forjado 300M',
    category: 'Buceo Técnico',
    priceCop: 69200000,
    variants: [
      {
        id: 'negro',
        colorName: 'Negro Carbono',
        productName: 'Abismo Carbono Negro 300M',
        swatchHex: '#18181b',
        src: '/src/assets/images/watch_diver_ceramic_1795474647523.jpg',
      },
      {
        id: 'verde',
        colorName: 'Verde Abisal',
        productName: 'Abismo Carbono Verde Abisal 300M',
        swatchHex: '#14532d',
        src: '/src/assets/images/bt05_verde_1795540692681.jpg',
      },
      {
        id: 'azul',
        colorName: 'Azul Oceánico',
        productName: 'Abismo Carbono Azul Oceánico 300M',
        swatchHex: '#1e3a8a',
        src: '/src/assets/images/bt05_azul_1795540693106.jpg',
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
  {
    id: 'bt-07',
    reference: 'REF. BT-05.CB',
    collection: 'Horizontes Profundos',
    name: 'Abismo Carbono Forjado 300M',
    category: 'Buceo Técnico',
    priceCop: 69200000,
    variants: [
      {
        id: 'negro',
        colorName: 'Negro Carbono',
        productName: 'Abismo Carbono Negro 300M',
        swatchHex: '#18181b',
        src: '/src/assets/images/watch_diver_ceramic_1795474647523.jpg',
      },
      {
        id: 'verde',
        colorName: 'Verde Abisal',
        productName: 'Abismo Carbono Verde Abisal 300M',
        swatchHex: '#14532d',
        src: '/src/assets/images/bt05_verde_1795540692681.jpg',
      },
      {
        id: 'azul',
        colorName: 'Azul Oceánico',
        productName: 'Abismo Carbono Azul Oceánico 300M',
        swatchHex: '#1e3a8a',
        src: '/src/assets/images/bt05_azul_1795540693106.jpg',
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
  {
    id: 'bt-08',
    reference: 'REF. BT-05.CB',
    collection: 'Horizontes Profundos',
    name: 'Abismo Carbono Forjado 300M',
    category: 'Buceo Técnico',
    priceCop: 69200000,
    variants: [
      {
        id: 'negro',
        colorName: 'Negro Carbono',
        productName: 'Abismo Carbono Negro 300M',
        swatchHex: '#18181b',
        src: '/src/assets/images/watch_diver_ceramic_1795474647523.jpg',
      },
      {
        id: 'verde',
        colorName: 'Verde Abisal',
        productName: 'Abismo Carbono Verde Abisal 300M',
        swatchHex: '#14532d',
        src: '/src/assets/images/bt05_verde_1795540692681.jpg',
      },
      {
        id: 'azul',
        colorName: 'Azul Oceánico',
        productName: 'Abismo Carbono Azul Oceánico 300M',
        swatchHex: '#1e3a8a',
        src: '/src/assets/images/bt05_azul_1795540693106.jpg',
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

export const DEFAULT_WHATSAPP_NUMBER = '573005550194';

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

