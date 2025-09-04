"use client";

import { useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { GenProduct } from "@/lib/types/type";
import { ProductImage } from "@prisma/client";
import ZoomOutIcon from "../../../../../icons/zoom-out";
import { cn } from "@/lib/utils";

// Mock product data

interface ProductGridProps {
  viewMode: "grid" | "list";
  products: GenProduct[];
}

export default function ProductGrid({ viewMode, products }: ProductGridProps) {
  if (viewMode === "list") {
    return (
      <div className="space-y-6">
        {/* <div className="flex items-center justify-between">
          <p className="text-gray-600">
            Showing 1 - {filteredProducts.length} of {filteredProducts.length}{" "}
            products
          </p>
        </div> */}
        <div className="space-y-4">
          {products.map((product, index) => {
            const images = product.images as ProductImage[];

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="w-fit transition-shadow group hover:ring-2 hover:ring-sec-main border-2 border-white rounded-md drop-shadow-sm bg-slate-50 flex">
                  <div className="relative flex items-center justify-center m-3 w-[200px] h-[150px] sm:w-[250px] sm:h-[200px]">
                    <div className="relative aspect-[3/9] w-full  m-3">
                      <Image
                        src={images[0].url || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>
                  <div className="w-full flex items-end relative gap-1 pr-1 pl-5 pt-5 pb-1">
                    <div className="self-center">
                      <h3 className="text-sm font-bold text-gray-900 leading-tight">
                        {product.name}
                      </h3>
                      <div className="text-sm font-medium flex items-center gap-2">
                        <span className="text-lg font-bold text-gray-900">
                          {product.price}
                        </span>{" "}
                        {product.originalPrice && (
                          <span className="text-sm text-base-color line-through">
                            {product.originalPrice}
                          </span>
                        )}{" "}
                      </div>
                      <div className="transition flex gap-3 w-fit items-center justify-center duration-700 ease-in-out cursor-pointer">
                        <Link
                          href={`/products/${product.slug}`}
                          className="hover:text-sec-main"
                        >
                          <ZoomOutIcon />
                        </Link>
                        {/* <div className="p-2 rounded-full hover:text-white bg-white hover:bg-secondary-color">
                                               <CartIcon />
                                             </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* <div className="flex items-center justify-between">
        <p className="text-gray-600">
          {filteredProducts.length} products found
        </p>
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => {
          const images = product.images as ProductImage[];
          return (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="w-[300px] transition-shadow group hover:ring-2 hover:ring-sec-main rounded-md shadow-sm border-white drop-shadow-sm bg-slate-50 border-2 flex flex-col items-center pt-30"
            >
              <Image
                width={300}
                height={300}
                src={images[0].url || "/placeholder.svg"}
                alt={product.name}
                className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
              />

              <div className="w-full flex items-center p-3 justify-between">
                <div className="w-full flex flex-col gap-1 ">
                  <h3 className="text-sm font-bold text-gray-900 leading-tight">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-gray-900">
                      ₦{product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-neutral-400 line-through">
                        ₦{product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
                <div className="space-y-1 flex flex-col">
                  <p
                    className={cn(
                      product.stock > 0
                        ? "text-green-500 bg-green-100 "
                        : "text-red-500",
                      "text-xs whitespace-nowrap py-1 px-2 rounded"
                    )}
                  >
                    {product.stock > 0 ? "In Stock" : "Out of Stock"}
                  </p>
                  <Link
                    href={`/products/${product.slug}`}
                    className="self-center"
                  >
                    <ZoomOutIcon className="hover:text-sec-main" />
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
