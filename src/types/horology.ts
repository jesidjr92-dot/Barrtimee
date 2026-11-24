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
  image: string;
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
  watchId: string;
  quantity: number;
}

export interface OrderReceipt {
  orderNumber: string;
  createdAt: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  deliveryMethod: 'nacional' | 'barranquilla';
  destination: string;
  items: Array<{
    reference: string;
    name: string;
    quantity: number;
    unitPriceCop: number;
  }>;
  subtotalCop: number;
  shippingCop: number;
  totalCop: number;
}
