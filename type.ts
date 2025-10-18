type Review = {
  reviewerName: string;
  rating: number;
  comment: string;
  reviewerEmail: string;
};
export interface ProductType {
  availabilityStatus: string;
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  rating: number;
  reviews: Review[];
  stock: number;
  title: string;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  minimumOrderQuantity: number;
  returnPolicy: string;
  shippingInformation: string;
  sku: string;
  tags: string[];
  thumbnail: string;
  warrantyInformation: string;
  weight: number;
  quantity?: number;
}
export interface stateType {
  shop: {
    cart: ProductType[];
    favorite: ProductType[];
    userInfo: any;
  };
}
