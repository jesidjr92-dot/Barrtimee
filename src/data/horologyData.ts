import { Timepiece } from '../types/horology';

export const TIMEPIECES: Timepiece[] = [
  {
    id: 'bt-04',
    reference: 'REF. BT-04.RL',
    collection: 'Rolex',
    name: 'Reloj Rolex Date-Just Oro',
    category: 'Esfera Minimalista',
    priceCop: 99900,
    variants: [
      {
        id: 'rolex-oro',
        colorName: 'Oro',
        productName: 'Reloj Rolex Date-Just Oro',
        swatchHex: '#d4af37',
        src: '/src/assets/images/rolexoro.jpeg',
      },
      {
        id: 'rolex-verde',
        colorName: 'Oro Verde',
        productName: 'Reloj Rolex Date-Just Oro Cara Verde',
        swatchHex: '#1b4332',
        src: '/src/assets/images/rolexoroverde.jpeg',
      },
      {
        id: 'rolex-azul',
        colorName: 'Oro Azul',
        productName: 'Reloj Rolex Date-Just Oro Cara Azul',
        swatchHex: '#1e293b',
        src: '/src/assets/images/rolexoroazul.jpeg',
      },
    ],
    aspectRatio: '1:1',
    availability: 'Disponible',
    editionNote: 'Perfil ultrafino',
    isFlagship: true,
    description:
      'Rolex Date-Just en oro, esfera rayos de sol e índices bastón facetados. Elegancia clásica.',
    specs: {
      diameter: '38.5 mm',
      thickness: '6.1 mm',
      movement: 'Automático',
      powerReserve: '62 h',
      caseMaterial: 'Acero y Oro',
      crystal: 'Zafiro ultraclaro',
      waterResistance: '30 m / 3 bar',
    },
  },
  {
    id: 'bt-02',
    reference: 'REF. BT-02.TM',
    collection: 'TechnoMarine',
    name: 'Reloj TechnoMarine Oro Rosa',
    category: 'Cronógrafos',
    priceCop: 99900,
    variants: [
      {
        id: 'techno-oro-rosa-negra',
        colorName: 'Oro Rosa Cara Negra',
        productName: 'TechnoMarine Oro Rosa Cara Negra',
        swatchHex: '#18181b',
        src: '/src/assets/images/technorosanegro.jpeg',
      },
      {
        id: 'techno-oro-rosa',
        colorName: 'Oro Rosa',
        productName: 'TechnoMarine Oro Rosa',
        swatchHex: '#b76e79',
        src: '/src/assets/images/technorosa.jpeg',
      },
      {
        id: 'techno-plata-negra',
        colorName: 'Plata Cara Negra',
        productName: 'TechnoMarine Plata Cara Negra',
        swatchHex: '#d4d4d8',
        src: '/src/assets/images/technoblanco.jpeg',
      },
      {
        id: 'techno-oro-arcoiris',
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
      'Cronógrafo TechnoMarine en acero inoxidable cepillado con subesferas grabadas que garantizan lectura nítida bajo cualquier condición de luz.',
    specs: {
      diameter: '40.5 mm',
      thickness: '11.8 mm',
      movement: 'Automático',
      powerReserve: '68 h',
      caseMaterial: 'Acero Inoxidable Cepillado',
      crystal: 'Zafiro plano doble antirreflejos',
      waterResistance: '100 m / 10 bar',
    },
  },
  {
    id: 'bt-03',
    reference: 'REF. BT-03.TS',
    collection: 'Tissot',
    name: 'Reloj Tissot Plata',
    category: 'Clásicos',
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
      'Clásico Tissot con caja en acero, esfera limpia y correa de acero para uso diario y elegante.',
    specs: {
      diameter: '41.5 mm',
      thickness: '10.2 mm',
      movement: 'Cuarzo',
      powerReserve: 'N/A',
      caseMaterial: 'Acero Inoxidable',
      crystal: 'Zafiro',
      waterResistance: '50 m / 5 bar',
    },
  },
  {
    id: 'bt-05',
    reference: 'REF. BT-05.HB',
    collection: 'Hublot',
    name: 'Reloj Hublot Plata',
    category: 'Buceo Técnico',
    priceCop: 99900,
    variants: [
      {
        id: 'hublot-blanco',
        colorName: 'Plata Blanco',
        productName: 'Reloj Hublot Plata Cara Blanca',
        swatchHex: '#e5e5e5',
        src: '/src/assets/images/hublotplatablanco.jpeg',
      },
      {
        id: 'hublot-azul',
        colorName: 'Plata Azul',
        productName: 'Reloj Hublot Plata Cara Azul',
        swatchHex: '#1d4ed8',
        src: '/src/assets/images/hublotplatazul.jpeg',
      },
      {
        id: 'hublot-azul-claro',
        colorName: 'Plata Azul Claro',
        productName: 'Reloj Hublot Plata Cara Azul Claro',
        swatchHex: '#60a5fa',
        src: '/src/assets/images/hublotplataazulclaro.jpeg',
      },
      {
        id: 'hublot-gris',
        colorName: 'Plata Gris',
        productName: 'Reloj Hublot Plata Cara Gris',
        swatchHex: '#52525b',
        src: '/src/assets/images/hublotplatagris.jpeg',
      },
    ],
    aspectRatio: '1:1',
    availability: 'Disponible',
    editionNote: 'Disponibilidad inmediata',
    description:
      'Hublot con caja robusta, bisel atornillado y esfera de alta legibilidad.',
    specs: {
      diameter: '42.0 mm',
      thickness: '12.6 mm',
      movement: 'Automático',
      powerReserve: '70 h',
      caseMaterial: 'Acero y Cerámica',
      crystal: 'Zafiro biselado',
      waterResistance: '100 m / 10 bar',
    },
  },
  {
    id: 'bt-06',
    reference: 'REF. BT-06.QQ',
    collection: 'Q&Q',
    name: 'Reloj Q&Q Plata',
    category: 'Casual',
    priceCop: 99900,
    variants: [
      {
        id: 'qyq-plata',
        colorName: 'Plata',
        productName: 'Reloj Q&Q Plata',
        swatchHex: '#d4d4d8',
        src: '/src/assets/images/qyqplata.jpeg',
      },
      {
        id: 'qyq-oro-rosa-plata',
        colorName: 'Oro Rosa Plata',
        productName: 'Reloj Q&Q Oro Rosa Plata',
        swatchHex: '#b76e79',
        src: '/src/assets/images/qyqororosaplata.jpeg',
      },
      {
        id: 'qyq-oro',
        colorName: 'Oro',
        productName: 'Reloj Q&Q Oro',
        swatchHex: '#d4af37',
        src: '/src/assets/images/qyqoro.jpeg',
      },
      {
        id: 'qyq-oro-negro',
        colorName: 'Oro Negro',
        productName: 'Reloj Q&Q Oro Cara Negra',
        swatchHex: '#18181b',
        src: '/src/assets/images/qyqoronegro.jpeg',
      },
    ],
    aspectRatio: '1:1',
    availability: 'Disponible',
    editionNote: 'Disponibilidad inmediata',
    description:
      'Q&Q casual y liviano, ideal para el día a día, con correa cómoda y esfera clara.',
    specs: {
      diameter: '42.0 mm',
      thickness: '12.6 mm',
      movement: 'Cuarzo',
      powerReserve: 'N/A',
      caseMaterial: 'Acero Inoxidable',
      crystal: 'Mineral',
      waterResistance: '50 m / 5 bar',
    },
  },
  {
    id: 'bt-07',
    reference: 'REF. BT-07.CS',
    collection: 'Casio',
    name: 'Reloj Casio Plata',
    category: 'Casual',
    priceCop: 99900,
    variants: [
      {
        id: 'casio-plata',
        colorName: 'Plata',
        productName: 'Reloj Casio Plata',
        swatchHex: '#d4d4d8',
        src: '/src/assets/images/casioplata.jpeg',
      },
      {
        id: 'casio-oro',
        colorName: 'Oro',
        productName: 'Reloj Casio Oro',
        swatchHex: '#d4af37',
        src: '/src/assets/images/casiooro.jpeg',
      },
      {
        id: 'casio-oro-negro',
        colorName: 'Oro Negro',
        productName: 'Reloj Casio Oro Cara Negra',
        swatchHex: '#18181b',
        src: '/src/assets/images/casiooronegro.jpeg',
      },
      {
        id: 'casio-oro-rosa',
        colorName: 'Oro Rosa',
        productName: 'Reloj Casio Oro Rosa',
        swatchHex: '#b76e79',
        src: '/src/assets/images/casioororosa.jpeg',
      },
    ],
    aspectRatio: '1:1',
    availability: 'Disponible',
    editionNote: 'Disponibilidad inmediata',
    description:
      'Casio clásico en plata y oro, resistente y elegante para uso diario.',
    specs: {
      diameter: '42.0 mm',
      thickness: '12.6 mm',
      movement: 'Cuarzo',
      powerReserve: 'N/A',
      caseMaterial: 'Acero Inoxidable',
      crystal: 'Mineral',
      waterResistance: '50 m / 5 bar',
    },
  },
  {
    id: 'bt-08',
    reference: 'REF. BT-08.QV',
    collection: 'Q&Q Visor',
    name: 'Reloj Q&Q Visor Plata',
    category: 'Casual',
    priceCop: 99900,
    variants: [
      {
        id: 'visor-plata',
        colorName: 'Plata',
        productName: 'Reloj Q&Q Visor Plata',
        swatchHex: '#d4d4d8',
        src: '/src/assets/images/qyqvisorplata.jpeg',
      },
      {
        id: 'visor-plata-negro',
        colorName: 'Plata Negro',
        productName: 'Reloj Q&Q Visor Plata Cara Negra',
        swatchHex: '#18181b',
        src: '/src/assets/images/qyqvisorplatanegro.jpeg',
      },
      {
        id: 'visor-plata-azul',
        colorName: 'Plata Azul',
        productName: 'Reloj Q&Q Visor Plata Cara Azul',
        swatchHex: '#1d4ed8',
        src: '/src/assets/images/qyqvisorplatazul.jpeg',
      },
      {
        id: 'visor-negro-azul',
        colorName: 'Negro Azul',
        productName: 'Reloj Q&Q Visor Negro Cara Azul',
        swatchHex: '#1e3a8a',
        src: '/src/assets/images/qyqvisornegroazul.jpeg',
      },
      {
        id: 'visor-oro-plata',
        colorName: 'Oro Plata',
        productName: 'Reloj Q&Q Visor Oro Plata',
        swatchHex: '#d4af37',
        src: '/src/assets/images/qyqvisoroplata.jpeg',
      },
    ],
    aspectRatio: '1:1',
    availability: 'Disponible',
    editionNote: 'Disponibilidad inmediata',
    description:
      'Q&Q Visor con pantalla amplia, fácil de leer y correa cómoda.',
    specs: {
      diameter: '42.0 mm',
      thickness: '12.6 mm',
      movement: 'Cuarzo',
      powerReserve: 'N/A',
      caseMaterial: 'Acero Inoxidable',
      crystal: 'Mineral',
      waterResistance: '50 m / 5 bar',
    },
  },
  {
    id: 'bt-01',
    reference: 'REF. BT-01.RM',
    collection: 'Richard Mille',
    name: 'Reloj Richard Mille Negro',
    category: 'Cronógrafos',
    priceCop: 99900,
    variants: [
      {
        id: 'richard-negro',
        colorName: 'Negro',
        productName: 'Reloj Richard Mille Negro',
        swatchHex: '#18181b',
        src: '/src/assets/images/richardnegro.jpeg',
      },
      {
        id: 'richard-negro-oro',
        colorName: 'Negro Oro',
        productName: 'Reloj Richard Mille Negro Oro',
        swatchHex: '#d4af37',
        src: '/src/assets/images/richarnegroro.jpeg',
      },
      {
        id: 'richard-negro-plata',
        colorName: 'Negro Plata',
        productName: 'Reloj Richard Mille Negro Plata',
        swatchHex: '#c0c0c0',
        src: '/src/assets/images/richardnegroplata.jpeg',
      },
    ],
    aspectRatio: '1:1',
    availability: 'Edición Numerada',
    editionNote: 'Disponibilidad inmediata en Barranquilla',
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
