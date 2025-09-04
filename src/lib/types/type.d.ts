import { Order, Product } from "@prisma/client";

type GenProduct = Product & {
  brand: {
    id: string;
    name: string;
  };
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
