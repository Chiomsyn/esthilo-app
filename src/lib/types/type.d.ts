import { Order, Product } from "@prisma/client";

type GenProduct = Product & {
  brand: {
    id: string;
    name: string;
  };
  category: {
    id: string;
    name: string;
  };
};

type GenCart = {
  items: CartItem[];
  itemsPrice: number;
  totalPrice: number;
  shippingPrice: number;
  taxPrice: number;
  id: string;
  createdAt: Date;
  userId: string | null;
  sessionCartId: string;
};

type ProductCounts = {
  totalCount: number;
  activeCount: number;
  lowCount: number;
  outCount: number;
};

type MainProduct = {
  baseNotes: string[];
  brand: string;
  category: string;
  size: string[];
  description: string;
  featured: boolean;
  limitedEdition: boolean;
  middleNotes: string[];
  name: string;
  newArrival: boolean;
  originalPrice: string;
  price: string;
  shortDescription: string;
  status: ProductStatus;
  stock: string;
  topNotes: string[];
  sku: string;
  slug: string;
  img: {
    key: string;
    imageName: string;
    image: string;
  }[];
};

type MainBrand = {
  name: string;
};

type MainCategory = {
  name: string;
};

type ProductStatus = "active" | "inactive" | "draft";

type MainCompanyInfo = {
  storeName: string;
  storeDescription: string;
  contactEmail: string;
  supportEmail: string;
  phone: string;
  address: string;
};

type MainShipping = {
  shippingRate: number;
  taxRate: number;
};

type GenOrder = Order & {
  user: {
    name: string | null;
    email: string;
    phone: string | null;
    image: string | null;
  };
  orderitems: {
    name: string;
    id: string;
    productId: string;
    slug: string;
    qty: number;
    price: number;
    orderId: string;
    imageId: string | null;
    price: number;
    size: string | null;
  }[];
  shippingAddress: ShippingAddressSchema;
  paymentResult: PaymentResult | null;
};

type PaymentResult = {
  status: string;
  id: string;
  email_address: string;
  pricePaid: string;
};

type SalesDataType = {
  month: string;
  totalSales: number;
}[];
