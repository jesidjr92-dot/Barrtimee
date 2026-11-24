import { Timepiece } from '../types/horology';

export const TIMEPIECES: Timepiece[] = [
  {
    id: 'bt-01',
    reference: 'REF. BT-01.TI',
    collection: 'Cronómetro Titanio',
    name: 'Reloj Invicta Plata Cara Negra',
    category: 'Cronógrafos',
    priceCop: 99900,
    variants: [
      {
        id: 'plata-negra',
        colorName: 'Plata Cara Negra',
        productName: 'Reloj Invicta Plata Cara Negra',
        swatchHex: '#18181b',
        src: '/src/assets/images/invictaplata.jpeg',
      },
      {
        id: 'oro-negra',
        colorName: 'Plata Oro Cara Negra',
        productName: 'Reloj Invicta Oro Cara Negra',
        swatchHex: '#d4af37',
        src: '/src/assets/images/invictaoro.jpeg',
      },
      {
        id: 'plata-verde',
        colorName: 'Plata Cara Verde',
        productName: 'Reloj Invicta Plata Cara Verde',
        swatchHex: '#1b4332',
        src: '/src/assets/images/invictacaraverde.jpeg',
      },
      {
        id: 'oro-plata-negra',
        colorName: 'Plata Oro Cara Negra',
        productName: 'Reloj Invicta Plata Oro Cara Negra',
        swatchHex: '#c0c0c0',
        src: '/src/assets/images/invictaoroplata.jpeg',
      },
    ],
    aspectRatio: '1:1',
    availability: 'Edición Numerada',
    editionNote: 'Disponibilidad inmediata en Barranquilla',
    isFlagship: true,
    description:
      'Diseño robusto, elegante y con carácter: el reloj ideal para quienes marcan la diferencia.',
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
    priceCop: 99900,
    variants: [
      {
        id: 'oro-rosa-negra',
        colorName: 'Oro Rosa Cara Negra',
        productName: 'TechnoMarine Oro Rosa Cara Negra',
        swatchHex: '#18181b',
        src: '/src/assets/images/technorosanegro.jpeg',
      },
      {
        id: 'oro-rosa',
        colorName: 'Oro Rosa',
        productName: 'TechnoMarine Oro Rosa',
        swatchHex: '#b76e79',
        src: '/src/assets/images/technorosa.jpeg',
      },
      {
        id: 'plata-negra',
        colorName: 'Plata Cara Negra',
        productName: 'TechnoMarine Plata Cara Negra',
        swatchHex: '#d4d4d8',
        src: '/src/assets/images/technoblanco.jpeg',
      },
      {
        id: 'oro-arcoiris',
        colorName: 'Oro Arcoiris',
        productName: 'TechnoMarine Oro Arcoiris',
        swatchHex: '#e0aaff',
        src: '/src/assets/images/technoarco.jpeg',
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
    priceCop: 99900,
    variants: [
      {
        id: 'tissot-blanca',
        colorName: 'Plata Blanco',
        productName: 'Reloj Tissot Plata Cara Blanca',
        swatchHex: '#e5e5e5',
        src: '/src/assets/images/tissotplatablanca.jpeg',
      },
      {
        id: 'tissot-verde',
        colorName: 'Plata Verde',
        productName: 'Reloj Tissot Plata Cara Verde',
        swatchHex: '#1b4332',
        src: '/src/assets/images/tissotplataverde.jpeg',
      },
      {
        id: 'tissot-azul',
        colorName: 'Plata Azul',
        productName: 'Reloj Tissot Plata Cara Azul',
        swatchHex: '#1d4ed8',
        src: '/src/assets/images/tissotplatazul.jpeg',
      },
      {
        id: 'tissot-negra',
        colorName: 'Plata Negro',
        productName: 'Reloj Tissot Plata Cara Negra',
        swatchHex: '#18181b',
        src: '/src/assets/images/tissotplatanegra.jpeg',
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
    priceCop: 99900,
    variants: [
      {
        id: 'rolex-oro',
        colorName: 'Oro',
        productName: 'Reloj Rolex Date-Date Oro',
        swatchHex: '#d4af37',
        src: '/src/assets/images/rolexoro.jpeg',
      },
      {
        id: 'rolex-verde',
        colorName: 'Oro Verde',
        productName: 'Reloj Rolex Date-Date Oro Cara Verde',
        swatchHex: '#1b4332',
        src: '/src/assets/images/rolexoroverde.jpeg',
      },
      {
        id: 'rolex-azul',
        colorName: 'Oro Azul',
        productName: 'Reloj Rolex Date-Date Oro Cara Azul',
        swatchHex: '#1e293b',
        src: '/src/assets/images/rolexoroazul.jpeg',
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
    priceCop: 99900,
    variants: [
      {
        id: 'abismo-negro',
        colorName: 'Negro Carbono',
        productName: 'Abismo Carbono Negro 300M',
        swatchHex: '#18181b',
        src: '/src/assets/images/watch_diver_ceramic_1795474647523.jpg',
      },
      {
        id: 'abismo-verde',
        colorName: 'Verde Abisal',
        productName: 'Abismo Carbono Verde Abisal 300M',
        swatchHex: '#14532d',
        src: '/src/assets/images/bt05_verde_1795540692681.jpg',
      },
      {
        id: 'abismo-azul',
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
