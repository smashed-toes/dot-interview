export type Product = {
  id: string;
  brand: string;
  name: string;
  price: number;
  thumbnail: string;
  images: string[];
  description: string;
};

export type ProductWithQuantity = Product & {
  quantity: number;
};
