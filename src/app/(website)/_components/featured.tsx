"use client";

import React from "react";
import Image from "next/image";
import LoveIcon from "../../../../icons/love-icon";
import CartIcon from "../../../../icons/cart-icon";
import ProductDetailsModal from "./modals/product-details-modal";
import ZoomOutIcon from "../../../../icons/zoom-out";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Featured = () => {
  return (
    <div className="bg-white">
      <div className=" flex flex-col wrapper lg:py-20 w-full py-10 px-5">
        <h2 className="text-2xl lg:text-4xl font-bold">Popular Products</h2>
        <p className="text-gray-500 text-sm">
          Showing our latest arrival on this summer
        </p>
        <div className="w-full flex flex-col gap-10 items-center justify-center">
          {" "}
          <div className="mt-5 hidden md:grid md:grid-cols-2 overflow-x-auto p-5 md:overflow-x-hidden animate-carousel md:animate-none hover:animate-none lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {Array(8)
              .fill("l")
              .map((e: any, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: [0.8, 1] }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: [0, 1], scale: [0.8, 1] }}
                  className="w-[300px] relative group hover:ring-2 hover:ring-sec-main rounded-md shadow-sm border-white drop-shadow-xs bg-slate-50 border-2 flex flex-col items-center pt-3"
                >
                  <Image
                    src="/images/pic11.png"
                    alt=""
                    width={200}
                    height={200}
                    priority
                    className=" object-contain group-hover:scale-105"
                  />
                  <div className="w-full flex items-center p-3 justify-between">
                    <div className="w-full flex flex-col gap-1 ">
                      <h3 className="text-sm font-bold text-gray-900 leading-tight">
                        Rainbow Sequin Dress
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-gray-900">
                          ₦12.99
                        </span>
                        {/* {product.originalPrice && (
                        <span className="text-sm text-neutral-400 line-through">
                          ₦{product.originalPrice}
                        </span
                        >
                      )} */}
                        <span className="text-sm text-neutral-400 line-through">
                          ₦{6.8}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-1  flex flex-col">
                      {/* <p
                      className={cn(
                        product.stock > 0
                          ? "text-green-500 bg-green-100 "
                          : "text-red-500",
                        "text-xs whitespace-nowrap py-1 px-2 rounded"
                      )}
                    >
                      {product.stock > 0 ? "In Stock" : "Out of Stock"}
                    </p> */}
                      <p className="text-xs whitespace-nowrap py-1 px-2 text-green-500 bg-green-100 rounded">
                        In Stock
                      </p>
                      <Link href={`/products/1`} className="self-center">
                        <ZoomOutIcon className="hover:text-sec-main " />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
          <Link href="/products">
            {" "}
            <Button className="w-[200px]">View All</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
