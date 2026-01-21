
export interface Product {
  id: string;
  name: string;
  category: 'iphones_novos' | 'iphones_seminovos' | 'apple' | 'android' | 'eletronicos' | 'acessorios';
  priceCash: number;
  price6xTotal: number;
  price12xTotal: number;
  price18xTotal: number;
  price21xTotal: number;
  features?: string[];
}

export interface CartItem {
  cartId: string;
  product: Product;
}

export interface TradeInModel {
  model: string;
  capacities: {
    size: string;
    gradeA: number; // Sem detalhes
    gradeB: number; // Abaixo de 85% ou marcas
  }[];
}

export interface SimulationState {
  selectedProduct: Product | null;
  tradeInModel: string | null;
  tradeInCapacity: string | null;
  tradeInCondition: 'A' | 'B' | null;
  tradeInValue: number;
}
