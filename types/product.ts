export interface Product {
  name: string;
  description: string;
  image: string;
}

export interface ProductBrand {
  name: string;
  description: string;
  products: Product[];
}