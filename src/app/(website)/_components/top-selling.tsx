"use client";

import React from "react";
import Image from "next/image";
import TopBrands from "./top-brands";
import { Button } from "@/components/ui/button";
import ZoomOutIcon from "../../../../icons/zoom-out";
import { motion } from "framer-motion";
import Link from "next/link";

const TopSelling = () => {
  const brands = [
    "/images/balenciaga.png",
    "/images/channel.png",
    "/images/dior.png",
    "/images/dolce.png",
    "/images/emporio.png",
    "/images/gucci.png",
    "/images/hermes.png",
    "/images/louis.png",
  ];

  const brandList = [...brands, ...brands, ...brands];

  return (
    <div className="bg-gradient-to-br py-20 from-tertiary-color/30 to-white">
      <div className=" pt-10  max-w-7xl mx-auto  flex flex-col items-center justify-center w-full px-5 pb-20 lg:px-0">
        <div className="w-full">
          <div className="">
            <h2 className="text-2xl lg:text-4xl font-semibold">Top Products</h2>
            <span className="text-sm text-gray-500">
              {`Our most-loved pieces, handpicked for style and quality.`}
            </span>
          </div>
          <div className="w-full flex flex-col gap-10 items-center justify-center">
            <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {Array(6)
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
                    className="w-fit group hover:ring-2 hover:ring-sec-main border-2 border-white rounded-md drop-shadow-sm bg-slate-50 flex "
                  >
                    <div className="relative flex items-center justify-center m-3 w-[200px] h-[150px] sm:w-[250px] sm:h-[200px]">
                      <div className="relative aspect-[3/9] w-full  m-3">
                        <Image
                          src="/images/pic11.png"
                          alt="Rainbow Sequin Dress"
                          fill
                          className="object-contain"
                          priority
                        />
                      </div>
                    </div>
                    <div className="w-full flex items-end relative gap-1 pr-1 pl-5 pt-5 pb-1">
                      <div className="self-center">
                        <h3 className="text-base font-bold">
                          Rainbow Sequin Dress
                        </h3>
                        <div className="text-sm font-medium flex items-center gap-2">
                          <p className="line-through text-gray-400">₦12.99</p>
                          <p className="text-black font-semibold">₦6.99</p>
                        </div>
                        <div className="transition mt-2 flex gap-3 w-fit items-center justify-center duration-700 ease-in-out cursor-pointer">
                          <p className="text-xs whitespace-nowrap py-1 px-2 text-green-500 bg-green-100 rounded">
                            In Stock
                          </p>
                          <ZoomOutIcon />
                        </div>
                      </div>
                      {/* <div className="absolute bottom-1 right-1 cursor-pointer hover:bg-gray-500 text-white rounded-tl-3xl rounded-br-[24px] p-3 bg-black">
                        <p className="text-sm font-bold hover:text-white">
                          Add to Cart
                        </p>
                      </div> */}
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
        <div className=" w-full overflow-x-auto py-6 mt-10 lg:mt-20 md:flex justify-center items-center md:gap-24">
          {/* <h2 className="text-2xl font-semibold mb-10">Top Brands</h2> */}
          <TopBrands slides={brandList} />
        </div>
      </div>
    </div>
  );
};

export default TopSelling;
