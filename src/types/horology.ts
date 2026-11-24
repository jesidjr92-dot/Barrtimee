export interface WatchColorVariant {
  id: string;
  colorName: string;
  productName: string;
  swatchHex: string;
  src: string;
}

export interface Timepiece {
  id: string;
  reference: string;
  collection: string;
  name: string;
  category:
    | 'Cronógrafos'
    | 'Grandes Complicaciones'
    | 'Esfera Minimalista'
    | 'Buceo Técnico';
  priceCop: number;
  variants: WatchColorVariant[];
  aspectRatio: '1:1' | '4:3';
  availability: 'Disponible' | 'Edición Numerada' | 'Bajo Pedido';
  editionNote: string;
  description: string;
  specs: {
    diameter: string;
    thickness: string;
    movement: string;
    powerReserve: string;
    caseMaterial: string;
    crystal: string;
    waterResistance: string;
  };
  isFlagship?: boolean;
}

export interface CartItem {
  cartKey: string;
  watchId: string;
  variantId: string;
  quantity: number;
}
