"use client";

import { useState } from "react";
import ProductGrid from "@/app/(website)/products/_components/product-grid";
import { Input } from "@/components/ui/input";
import { Search, SearchIcon } from "lucide-react";
import { GenProduct } from "@/lib/types/type";
import ProductViewMode from "./product-view-mode";
import { Button } from "@/components/ui/button";

const ProductList = ({
  products,
  query,
}: {
  products: GenProduct[];
  query?: string;
}) => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <div className="md:col-span-2 lg:col-span-3">
      {/* Search and Controls */}
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between pb-10">
        <form action="/products" method="GET">
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input
              defaultValue={query ?? ""}
              name="query"
              type="text"
              placeholder="Search..."
              className="md:w-[100px] lg:w-[300px]"
            />
            <Button className="bg-sec-main">
              <SearchIcon />
            </Button>
          </div>
        </form>

        <ProductViewMode viewMode={viewMode} setViewMode={setViewMode} />
      </div>
      <div className="flex gap-8">
        {/* Products */}
        <div className="flex-1">
          <ProductGrid products={products} viewMode={viewMode} />
        </div>
      </div>
    </div>
  );
};

export default ProductList;
