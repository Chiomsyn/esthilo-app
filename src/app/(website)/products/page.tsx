import {
  getAllProducts,
  getHighestPricedProduct,
} from "@/app/actions/product.action";
import ProductList from "./_components/product-list";
import { getAllBrand } from "@/app/actions/brand.action";
import { getMyCart } from "@/app/actions/cart.actions";
import Link from "next/link";
import { getAllCategory } from "@/app/actions/category.action";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Hero from "./_components/hero";

export async function generateMetadata(props: {
  searchParams: Promise<{
    query: string;
    brand: string;
    price: string;
    category: string;
  }>;
}) {
  const {
    query = "all",
    brand = "all",
    price = "all",
    category = "all",
  } = await props.searchParams;

  const isQuerySet = query && query !== "all" && query.trim() !== "";
  const isBrandSet = brand && brand !== "all" && brand.trim() !== "";
  const isPriceSet = price && price !== "all" && price.trim() !== "";
  const isCategorySet =
    category && category !== "all" && category.trim() !== "";

  if (isQuerySet || isBrandSet || isPriceSet || isCategorySet) {
    return {
      title: `
      Search NGN{isQuerySet ? query : ''} 
      ${isBrandSet ? `: Brand NGN{brand}` : ""}
      ${isPriceSet ? `: Price NGN{price}` : ""}
      ${isCategorySet ? `: Category NGN{category}` : ""}`,
    };
  } else {
    return {
      title: "Our Products",
    };
  }
}

export default async function ProductsPage(props: {
  searchParams: Promise<{
    page: string;
    query: string;
    brand: string;
    category: string;
    price: string;
    sort?: string;
  }>;
}) {
  const {
    query = "all",
    brand = "all",
    price = "all",
    sort = "newest",
    page = "1",
    category = "all",
  } = await props.searchParams;

  const getFilterUrl = ({
    b,
    p,
    s,
    pg,
    c,
  }: {
    b?: string;
    p?: string;
    s?: string;
    pg?: string;
    c?: string;
  }) => {
    const params = { query, brand, price, sort, page, category };

    if (b) params.brand = b;
    if (p) params.price = p;
    if (s) params.sort = s;
    if (pg) params.page = pg;
    if (c) params.category = c;
    return `/products?${new URLSearchParams(params).toString()}`;
  };

  const products = await getAllProducts({
    query,
    page: Number(page),
    brand,
    price,
    category,
    sort: sort as "newest" | "lowest" | "highest",
  });

  const brandList = (await getAllBrand()).data;
  const categoryList = (await getAllCategory()).data;

  const cart = await getMyCart();

  const allBrandList = [...(brandList?.map((item) => item.name) ?? [])];
  const allCategoryList = [...(categoryList?.map((item) => item.name) ?? [])];

  const sortList = ["newest", "lowest", "highest"];

  const highestPrice = (await getHighestPricedProduct()) ?? 0;

  const priceList = Array.from({ length: 5 }, (_, index) => {
    const base = 50;
    const min = base * 5 ** index;
    const max = min * 5;

    if (min > highestPrice) return null;

    return { label: `NGN${min} - NGN${max}`, value: `${min}-${max}` };
  }).filter(Boolean) as { label: string; value: string }[];
  return (
    <section className="min-h-screen ">
      {/* Header */}
      <Hero />
      <div className="max-w-7xl mx-auto py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="md:col-span-1 w-full h-full space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="font-bold font-serif text-lg">Filters</h1>
              <Link
                href={"/products"}
                className="font-medium border rounded text-sm border-sec-main text-sec-main px-2"
              >
                Clear All Filters
              </Link>
            </div>
            <Card>
              <CardHeader className="">
                <CardTitle className="text-base">Category</CardTitle>
              </CardHeader>
              <CardContent className="py-0">
                {allCategoryList.map((item, index) => {
                  return (
                    <li key={index} className="flex-between pb-1">
                      <Link
                        href={getFilterUrl({ c: item.toLowerCase() })}
                        className={`text-sm hover:text-sec-main transition-all ${
                          category === item.toLowerCase() &&
                          "font-bold text-sec-main"
                        }`}
                      >
                        {item}
                      </Link>
                    </li>
                  );
                })}
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="">
                <CardTitle className="text-base">Brand</CardTitle>
              </CardHeader>
              <CardContent className="py-0">
                {allBrandList.map((item, index) => {
                  return (
                    <li key={index} className="flex-between pb-1">
                      <Link
                        href={getFilterUrl({ b: item.toLowerCase() })}
                        className={`text-sm hover:text-sec-main transition-all ${
                          category === item.toLowerCase() &&
                          "font-bold text-sec-main"
                        }`}
                      >
                        {item}
                      </Link>
                    </li>
                  );
                })}
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="">
                <CardTitle className="text-base">Price Range</CardTitle>
              </CardHeader>
              <CardContent>
                {priceList.map((item, index) => {
                  return (
                    <li key={index} className="">
                      <Link
                        href={getFilterUrl({ p: item.value })}
                        className={`text-sm hover:text-sec-main transition-all ${
                          price === item.value && "font-bold text-sec-main"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="">
                <CardTitle className="text-base">Sort</CardTitle>
              </CardHeader>
              <CardContent>
                {sortList.map((item, index) => {
                  return (
                    <li key={index} className="pb-1">
                      <Link
                        href={getFilterUrl({ s: item.toLowerCase() })}
                        className={`text-sm hover:text-sec-main transition-all ${
                          sort === item && "font-bold text-sec-main"
                        }`}
                      >
                        {item}
                      </Link>
                    </li>
                  );
                })}
              </CardContent>
            </Card>
          </div>
          <ProductList products={products?.data ?? []} query={query} />
        </div>
      </div>
    </section>
  );
}
