import { Timepiece } from '../types/horology';

export const TIMEPIECES: Timepiece[] = [
  {
    id: 'bt-casio',
    reference: 'REF. BT-CS01',
    collection: 'Línea Clásica',
    name: 'Casio Clásico Acero',
    category: 'Clásico Diario',
    priceCop: 84900,
    variants: [
      {
        id: 'plata',
        colorName: 'Acero Plata',
        productName: 'Casio Clásico Plata',
        swatchHex: '#d4d4d8',
        src: '/assets/aistudio/casioplata_9af04399.jpeg',
      },
      {
        id: 'oro',
        colorName: 'Dorado',
        productName: 'Casio Clásico Dorado',
        swatchHex: '#eab308',
        src: '/assets/aistudio/casiooro_730dace9.jpeg',
      },
      {
        id: 'oronegro',
        colorName: 'Dorado Negro',
        productName: 'Casio Clásico Dorado Negro',
        swatchHex: '#18181b',
        src: '/assets/aistudio/casiooronegro_c0dd5341.jpeg',
      },
      {
        id: 'ororosa',
        colorName: 'Oro Rosa',
        productName: 'Casio Clásico Oro Rosa',
        swatchHex: '#d99b82',
        src: '/assets/aistudio/casioororosa_e87a83c6.jpeg',
      },
    ],
    aspectRatio: '3:4',
    availability: 'Disponible',
    editionNote: 'Perfil delgado clásico con fechador',
    description:
      'Diseño atemporal minimalista con brazalete metálico de eslabones horizontales, esfera limpia con fechador a las 3 y resistencia al agua 50M.',
    specs: {
      diameter: '38.0 mm',
      thickness: '8.8 mm',
      movement: 'Cuarzo japonés',
      strapMaterial: 'Acero eslabones planos',
      caseMaterial: 'Acero metálico cepillado',
      crystal: 'Mineral claro',
      waterResistance: '50 m / Uso diario',
    },
  },
  {
    id: 'bt-qyq-clasico',
    reference: 'REF. BT-QQ01',
    collection: 'Línea Elegante',
    name: 'Q&Q Clásico Cuadrado',
    category: 'Elegante',
    priceCop: 79900,
    variants: [
      {
        id: 'plata',
        colorName: 'Plata Satinado',
        productName: 'Q&Q Clásico Cuadrado Plata',
        swatchHex: '#d4d4d8',
        src: '/assets/aistudio/qyqplata_ae0bf84c.jpeg',
      },
      {
        id: 'oro',
        colorName: 'Dorado',
        productName: 'Q&Q Clásico Cuadrado Dorado',
        swatchHex: '#eab308',
        src: '/assets/aistudio/qyqoro_6d11461f.jpeg',
      },
      {
        id: 'oronegro',
        colorName: 'Dorado Negro',
        productName: 'Q&Q Clásico Cuadrado Dorado Negro',
        swatchHex: '#18181b',
        src: '/assets/aistudio/qyqoronegro_c66319d9.jpeg',
      },
      {
        id: 'ororosaplata',
        colorName: 'Oro Rosa Plata',
        productName: 'Q&Q Clásico Oro Rosa Plata',
        swatchHex: '#d99b82',
        src: '/assets/aistudio/qyqororosaplata_50f96709.jpeg',
      },
    ],
    aspectRatio: '3:4',
    availability: 'Disponible',
    editionNote: 'Caja geométrica estilizada',
    description:
      'Silueta retro-elegante con caja cuadrada suavizada, marcadores brillantes discretos y brazalete metálico integrado.',
    specs: {
      diameter: '34.0 mm',
      thickness: '8.2 mm',
      movement: 'Cuarzo japonés',
      strapMaterial: 'Brazalete metálico pulido',
      caseMaterial: 'Aleación metálica pulida',
      crystal: 'Mineral claro',
      waterResistance: 'Resistente a salpicaduras',
    },
  },
  {
    id: 'bt-qyq-visor',
    reference: 'REF. BT-QQ02',
    collection: 'Línea Urbana',
    name: 'Q&Q Visor Deportivo',
    category: 'Deportivo',
    priceCop: 84900,
    variants: [
      {
        id: 'plata',
        colorName: 'Acero Plata',
        productName: 'Q&Q Visor Deportivo Plata',
        swatchHex: '#d4d4d8',
        src: '/assets/aistudio/qyqvisorplata_127f0b0e.jpeg',
      },
      {
        id: 'bicolor',
        colorName: 'Bicolor Dorado',
        productName: 'Q&Q Visor Deportivo Bicolor',
        swatchHex: '#eab308',
        src: '/assets/aistudio/qyqvisoroplata_070ea9d0.jpeg',
      },
      {
        id: 'platanegro',
        colorName: 'Acero Negro',
        productName: 'Q&Q Visor Deportivo Acero Negro',
        swatchHex: '#18181b',
        src: '/assets/aistudio/qyqvisorplatanegro_91d55668.jpeg',
      },
      {
        id: 'platazul',
        colorName: 'Acero Azul',
        productName: 'Q&Q Visor Deportivo Acero Azul',
        swatchHex: '#1d4ed8',
        src: '/assets/aistudio/qyqvisorplatazul_1bb92be8.jpeg',
      },
      {
        id: 'negroazul',
        colorName: 'Negro Azul',
        productName: 'Q&Q Visor Deportivo Negro Azul',
        swatchHex: '#1e3a8a',
        src: '/assets/aistudio/qyqvisornegroazul_9eeb5c3b.jpeg',
      },
    ],
    aspectRatio: '3:4',
    availability: 'Disponible',
    editionNote: 'Bisel numérico de alto contraste',
    description:
      'Reloj urbano versátil con bisel numerado, esfera limpia de lectura rápida y brazalete metálico resistente para el día a día.',
    specs: {
      diameter: '41.0 mm',
      thickness: '10.5 mm',
      movement: 'Cuarzo japonés',
      strapMaterial: 'Brazalete acero cepillado',
      caseMaterial: 'Acero metálico cepillado',
      crystal: 'Mineral resistente',
      waterResistance: '5 BAR / Uso diario',
    },
  },
  {
    id: 'bt-hublot',
    reference: 'REF. BT-HB01',
    collection: 'Fusión Moderna',
    name: 'Hublot Acero Classic',
    category: 'Deportivo Elegante',
    priceCop: 89900,
    variants: [
      {
        id: 'gris',
        colorName: 'Gris Acero',
        productName: 'Hublot Acero Gris',
        swatchHex: '#71717a',
        src: '/assets/aistudio/hublotplatagris_2a094167.jpeg',
      },
      {
        id: 'blanco',
        colorName: 'Blanco Polar',
        productName: 'Hublot Acero Blanco',
        swatchHex: '#f4f4f5',
        src: '/assets/aistudio/hublotplatablanco_dbfe4177.jpeg',
      },
      {
        id: 'azulclaro',
        colorName: 'Azul Claro',
        productName: 'Hublot Acero Azul Claro',
        swatchHex: '#38bdf8',
        src: '/assets/aistudio/hublotplataazulclaro_8609f29f.jpeg',
      },
      {
        id: 'azul',
        colorName: 'Azul Marino',
        productName: 'Hublot Acero Azul Marino',
        swatchHex: '#1d3557',
        src: '/assets/aistudio/hublotplatazul_2f2dee2f.jpeg',
      },
    ],
    aspectRatio: '3:4',
    availability: 'Disponible',
    editionNote: 'Brazalete integrado satinado',
    description:
      'Bisel circular con tornillos expuestos en tono plata cepillado, esfera limpia con fechador lateral y manecillas luminiscentes.',
    specs: {
      diameter: '42.0 mm',
      thickness: '10.8 mm',
      movement: 'Cuarzo',
      strapMaterial: 'Brazalete acero cepillado',
      caseMaterial: 'Acero cepillado',
      crystal: 'Mineral endurecido',
      waterResistance: '30 m / Uso diario',
    },
  },
  {
    id: 'bt-tissot',
    reference: 'REF. BT-PRX',
    collection: 'Línea Clásica',
    name: 'Tissot PRX Acero',
    category: 'Acero Integrado',
    priceCop: 89900,
    variants: [
      {
        id: 'blanco',
        colorName: 'Blanco Texturizado',
        productName: 'Tissot PRX Acero Blanco',
        swatchHex: '#f4f4f5',
        src: '/assets/aistudio/tissotplatablanca_739649b4.jpeg',
      },
      {
        id: 'negro',
        colorName: 'Negro Texturizado',
        productName: 'Tissot PRX Acero Negro',
        swatchHex: '#18181b',
        src: '/assets/aistudio/tissotplatanegra_cb8e1a85.jpeg',
      },
      {
        id: 'azul',
        colorName: 'Azul Marino',
        productName: 'Tissot PRX Acero Azul',
        swatchHex: '#1e3a5f',
        src: '/assets/aistudio/tissotplatazul_5a67456a.jpeg',
      },
      {
        id: 'verde',
        colorName: 'Verde Esmeralda',
        productName: 'Tissot PRX Acero Verde',
        swatchHex: '#0f766e',
        src: '/assets/aistudio/tissotplataverde_84ad9e37.jpeg',
      },
    ],
    aspectRatio: '3:4',
    availability: 'Disponible',
    editionNote: 'Entrega inmediata en Barranquilla',
    description:
      'Diseño de caja integrada con brazalete satinado plano, esfera texturizada tipo waffle y fechador a las 3 horas.',
    specs: {
      diameter: '40.0 mm',
      thickness: '10.4 mm',
      movement: 'Cuarzo de precisión',
      strapMaterial: 'Brazalete acero integrado',
      caseMaterial: 'Acero inoxidable cepillado',
      crystal: 'Mineral resistente',
      waterResistance: '30 m / Uso diario',
    },
  },
  {
    id: 'bt-invicta',
    reference: 'REF. BT-IN01',
    collection: 'Submarino',
    name: 'Invicta Pro Diver',
    category: 'Deportivo',
    priceCop: 89900,
    variants: [
      {
        id: 'platanegro',
        colorName: 'Acero Negro',
        productName: 'Invicta Pro Diver Acero Negro',
        swatchHex: '#18181b',
        src: '/assets/aistudio/invictaplatanegro_3ddf530e.jpeg',
      },
      {
        id: 'plataverde',
        colorName: 'Acero Verde',
        productName: 'Invicta Pro Diver Acero Verde',
        swatchHex: '#15803d',
        src: '/assets/aistudio/invictaplataverde_226dc019.jpeg',
      },
      {
        id: 'bicolor',
        colorName: 'Plata Dorado Azul',
        productName: 'Invicta Pro Diver Bicolor Azul',
        swatchHex: '#1d4ed8',
        src: '/assets/aistudio/invictaoroplataazul_b5fca5f8.jpeg',
      },
      {
        id: 'oronegro',
        colorName: 'Dorado Negro',
        productName: 'Invicta Pro Diver Dorado Negro',
        swatchHex: '#ca8a04',
        src: '/assets/aistudio/invictaoronegro_7f818345.jpeg',
      },
    ],
    aspectRatio: '3:4',
    availability: 'Disponible',
    editionNote: 'Bisel giratorio deportivo',
    description:
      'Reloj de buceo clásico con bisel graduado, índices circulares de alta visibilidad, calendario con lupa y brazalete sólido.',
    specs: {
      diameter: '43.0 mm',
      thickness: '12.5 mm',
      movement: 'Cuarzo',
      strapMaterial: 'Brazalete acero sólido',
      caseMaterial: 'Acero inoxidable / dorado',
      crystal: 'Mineral con lupa',
      waterResistance: '50 m / Salpicaduras',
    },
  },
  {
    id: 'bt-richard',
    reference: 'REF. BT-RM01',
    collection: 'Edición Dragón',
    name: 'Richard Mille Dragón',
    category: 'Edición Especial',
    priceCop: 99900,
    variants: [
      {
        id: 'negro',
        colorName: 'Negro Carbón',
        productName: 'Richard Mille Dragón Negro',
        swatchHex: '#18181b',
        src: '/assets/aistudio/richardnegro_5b78a240.jpeg',
      },
      {
        id: 'plata',
        colorName: 'Acero Plata',
        productName: 'Richard Mille Dragón Plata',
        swatchHex: '#d4d4d8',
        src: '/assets/aistudio/richardnegroplata_aa88b76f.jpeg',
      },
      {
        id: 'ororosa',
        colorName: 'Oro Rosa',
        productName: 'Richard Mille Dragón Oro Rosa',
        swatchHex: '#d49a76',
        src: '/assets/aistudio/richarnegroro_b2eab451.jpeg',
      },
    ],
    aspectRatio: '3:4',
    availability: 'Disponible',
    editionNote: 'Disponibilidad inmediata en Barranquilla',
    description:
      'Reloj tonneau de estética vanguardista con caja escultórica, dragón frontal en relieve metálico y correa ergonómica de alta resistencia.',
    specs: {
      diameter: '42.0 mm',
      thickness: '12.2 mm',
      movement: 'Cuarzo de precisión',
      strapMaterial: 'Silicona ergonómica',
      caseMaterial: 'Aleación de alta resistencia',
      crystal: 'Mineral endurecido',
      waterResistance: 'Uso diario / salpicaduras',
    },
  },
  {
    id: 'bt-techno',
    reference: 'REF. BT-TM01',
    collection: 'Cronógrafo Deportivo',
    name: 'TechnoMarine Cruise',
    category: 'Cronógrafos',
    priceCop: 99900,
    variants: [
      {
        id: 'arcoiris',
        colorName: 'Tornasol Negro',
        productName: 'TechnoMarine Tornasol Negro',
        swatchHex: '#7c3aed',
        src: '/assets/aistudio/technoarco_4bed9393.jpeg',
      },
      {
        id: 'blanco',
        colorName: 'Dorado Blanco',
        productName: 'TechnoMarine Dorado Blanco',
        swatchHex: '#f4f4f5',
        src: '/assets/aistudio/technoblanco_a0bf4840.jpeg',
      },
      {
        id: 'rosa',
        colorName: 'Oro Rosa',
        productName: 'TechnoMarine Oro Rosa',
        swatchHex: '#d99b82',
        src: '/assets/aistudio/technorosa_c54cee34.jpeg',
      },
      {
        id: 'rosanegro',
        colorName: 'Oro Rosa Negro',
        productName: 'TechnoMarine Oro Rosa Negro',
        swatchHex: '#991b1b',
        src: '/assets/aistudio/technorosanegro_edf96c24.jpeg',
      },
    ],
    aspectRatio: '3:4',
    availability: 'Disponible',
    editionNote: 'Correa de silicona de alto desempeño',
    description:
      'Cronógrafo deportivo de caja robusta con subesferas de precisión, bisel grabado de inmersión y correa ergonómica en silicona.',
    specs: {
      diameter: '45.0 mm',
      thickness: '13.0 mm',
      movement: 'Cuarzo cronógrafo',
      strapMaterial: 'Silicona deportiva',
      caseMaterial: 'Acero con baño iónico',
      crystal: 'Mineral reforzado',
      waterResistance: '50 m / Salpicaduras',
    },
  },
  {
    id: 'bt-rolex',
    reference: 'REF. BT-DJ01',
    collection: 'Colección Dorada',
    name: 'Rolex Oyster Dorado',
    category: 'Clásico de Lujo',
    priceCop: 99900,
    variants: [
      {
        id: 'oro',
        colorName: 'Dorado Champán',
        productName: 'Rolex Day-Date Dorado',
        swatchHex: '#eab308',
        src: '/assets/aistudio/rolexoro_b75ee0db.jpeg',
      },
      {
        id: 'azul',
        colorName: 'Dorado Azul',
        productName: 'Rolex Datejust Dorado Azul',
        swatchHex: '#1e3a8a',
        src: '/assets/aistudio/rolexoroazul_61afb9ef.jpeg',
      },
      {
        id: 'verde',
        colorName: 'Dorado Verde',
        productName: 'Rolex Datejust Dorado Verde',
        swatchHex: '#166534',
        src: '/assets/aistudio/rolexoroverde_bec1e0a8.jpeg',
      },
    ],
    aspectRatio: '3:4',
    availability: 'Disponible',
    editionNote: 'Disponibilidad inmediata en Barranquilla',
    isFlagship: true,
    description:
      'Bisel acanalado dorado, esfera geométrica de alto contraste con números aplicados y lupa de fecha a las 3.',
    specs: {
      diameter: '41.0 mm',
      thickness: '11.2 mm',
      movement: 'Automático / Cuarzo',
      strapMaterial: 'Brazalete acero dorado',
      caseMaterial: 'Acero tono dorado',
      crystal: 'Mineral con lupa de fecha',
      waterResistance: '30 m / Uso diario',
    },
  },
];

export const WOMEN_TIMEPIECES: Timepiece[] = [
  {
    id: 'bt-mujer-01',
    reference: 'REF. BT-DM01',
    collection: 'Colección Mujer',
    name: 'Reloj de Mujer Clásico',
    category: 'Dama Clásico',
    priceCop: 84900,
    variants: [
      {
        id: 'plata',
        colorName: 'Acero Plata',
        productName: 'Reloj de Mujer Clásico Plata',
        swatchHex: '#d4d4d8',
        src: '',
      },
      {
        id: 'dorado',
        colorName: 'Dorado',
        productName: 'Reloj de Mujer Clásico Dorado',
        swatchHex: '#eab308',
        src: '',
      },
      {
        id: 'ororosa',
        colorName: 'Oro Rosa',
        productName: 'Reloj de Mujer Clásico Oro Rosa',
        swatchHex: '#d99b82',
        src: '',
      },
    ],
    aspectRatio: '3:4',
    availability: 'Próximamente',
    editionNote: 'Caja estilizada de perfil fino para dama',
    description:
      'Diseño femenino atemporal con caja delgada, esfera limpia y brazalete metálico cómodo para uso diario o eventos.',
    specs: {
      diameter: '30.0 mm',
      thickness: '7.8 mm',
      movement: 'Cuarzo de precisión',
      strapMaterial: 'Brazalete metálico fino',
      caseMaterial: 'Acero metálico pulido',
      crystal: 'Mineral claro',
      waterResistance: '30 m / Salpicaduras',
    },
  },
  {
    id: 'bt-mujer-02',
    reference: 'REF. BT-DM02',
    collection: 'Colección Mujer',
    name: 'Reloj de Mujer Elegante',
    category: 'Dama Elegante',
    priceCop: 89900,
    variants: [
      {
        id: 'ororosa',
        colorName: 'Oro Rosa',
        productName: 'Reloj de Mujer Elegante Oro Rosa',
        swatchHex: '#d99b82',
        src: '',
      },
      {
        id: 'dorado',
        colorName: 'Dorado Champán',
        productName: 'Reloj de Mujer Elegante Dorado',
        swatchHex: '#eab308',
        src: '',
      },
      {
        id: 'bicolor',
        colorName: 'Bicolor Plata Oro',
        productName: 'Reloj de Mujer Elegante Bicolor',
        swatchHex: '#cbd5e1',
        src: '',
      },
    ],
    aspectRatio: '3:4',
    availability: 'Próximamente',
    editionNote: 'Acabado satinado con detalles refinados',
    description:
      'Acabado cálido en tono oro rosa, dorado o bicolor con índices finos y ajuste ergonómico para muñeca femenina.',
    specs: {
      diameter: '32.0 mm',
      thickness: '8.2 mm',
      movement: 'Cuarzo de precisión',
      strapMaterial: 'Acero satinado fino',
      caseMaterial: 'Acero inoxidable',
      crystal: 'Mineral endurecido',
      waterResistance: '30 m / Uso diario',
    },
  },
  {
    id: 'bt-mujer-03',
    reference: 'REF. BT-DM03',
    collection: 'Colección Mujer',
    name: 'Reloj de Mujer Minimalista',
    category: 'Dama Minimalista',
    priceCop: 79900,
    variants: [
      {
        id: 'plata',
        colorName: 'Plata Satinado',
        productName: 'Reloj de Mujer Minimalista Plata',
        swatchHex: '#d4d4d8',
        src: '',
      },
      {
        id: 'negro',
        colorName: 'Negro Carbón',
        productName: 'Reloj de Mujer Minimalista Negro',
        swatchHex: '#18181b',
        src: '',
      },
      {
        id: 'blanco',
        colorName: 'Blanco Perla',
        productName: 'Reloj de Mujer Minimalista Blanco',
        swatchHex: '#f4f4f5',
        src: '',
      },
    ],
    aspectRatio: '3:4',
    availability: 'Próximamente',
    editionNote: 'Diseño ligero versátil para todo momento',
    description:
      'Silueta minimalista de lectura limpia, esfera estilizada y correa metálica ligera pensada para acompañar cualquier ocasión.',
    specs: {
      diameter: '28.0 mm',
      thickness: '7.5 mm',
      movement: 'Cuarzo japonés',
      strapMaterial: 'Brazalete ligero pulido',
      caseMaterial: 'Aleación metálica pulida',
      crystal: 'Mineral claro',
      waterResistance: 'Uso diario / salpicaduras',
    },
  },
  {
    id: 'bt-mujer-04',
    reference: 'REF. BT-DM04',
    collection: 'Colección Mujer',
    name: 'Reloj de Mujer Cuadrado',
    category: 'Dama Geométrico',
    priceCop: 84900,
    variants: [
      {
        id: 'dorado',
        colorName: 'Dorado Satinado',
        productName: 'Reloj de Mujer Cuadrado Dorado',
        swatchHex: '#eab308',
        src: '',
      },
      {
        id: 'plata',
        colorName: 'Acero Plata',
        productName: 'Reloj de Mujer Cuadrado Plata',
        swatchHex: '#d4d4d8',
        src: '',
      },
      {
        id: 'ororosa',
        colorName: 'Oro Rosa',
        productName: 'Reloj de Mujer Cuadrado Oro Rosa',
        swatchHex: '#d99b82',
        src: '',
      },
    ],
    aspectRatio: '3:4',
    availability: 'Próximamente',
    editionNote: 'Caja cuadrada estilizada para dama',
    description:
      'Caja cuadrada de líneas finas con brazalete integrado elegante, pensada para resaltar en cualquier ocasión.',
    specs: {
      diameter: '26.0 mm',
      thickness: '7.6 mm',
      movement: 'Cuarzo japonés',
      strapMaterial: 'Brazalete metálico fino',
      caseMaterial: 'Aleación metálica pulida',
      crystal: 'Mineral claro',
      waterResistance: 'Uso diario / salpicaduras',
    },
  },
];

export interface SocialLinksConfig {
  instagramHandle: string;
  instagramUrl: string;
  tiktokHandle: string;
  tiktokUrl: string;
  facebookHandle: string;
  facebookUrl: string;
}

export const DEFAULT_SOCIAL_LINKS: SocialLinksConfig = {
  instagramHandle: '@barrtime',
  instagramUrl: 'https://instagram.com/',
  tiktokHandle: '@barrtime',
  tiktokUrl: 'https://tiktok.com/',
  facebookHandle: 'Barrtime Barranquilla',
  facebookUrl: 'https://facebook.com/',
};

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
  const cleanNumber =
    sanitizePhoneNumber(phoneNumber) || DEFAULT_WHATSAPP_NUMBER;
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}
