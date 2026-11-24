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
  category: string;
  priceCop: number;
  variants: WatchColorVariant[];
  aspectRatio: '1:1' | '4:3' | '3:4' | '4:5';
  availability: 'Disponible' | 'Edición Numerada' | 'Bajo Pedido' | 'Próximamente';
  editionNote: string;
  description: string;
  specs: {
    diameter: string;
    thickness: string;
    movement: string;
    strapMaterial: string;
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
