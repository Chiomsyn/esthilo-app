import React from "react";
import Image from "next/image";
import ProductDetailsModal from "./modals/product-details-modal";
import CartIcon from "@/icons/cart-icon";
import LoveIcon from "@/icons/love-icon";

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

  const brandList = [...brands, ...brands, ...brands]
  const stars = ["⭐", "⭐", "⭐", "⭐", "✰"];

  return (
    <div className=" pt-20 lg:pt-32  flex flex-col items-center justify-center w-full bg-[#F8F8F8] px-5 pb-20 lg:px-20">
      <div className="w-full">
        <div className="flex items-center justify-between text-black">
          <h2 className="text-2xl font-bold">Top Selling Products</h2>
          <p className="text-lg font-medium hover:border-b border-black">
            View All
          </p>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
        <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {Array(8)
            .fill("l")
            .map((e: any, i: number) => (
              <div
                key={i}
                className="w-fit group hover:ring-2 hover:ring-secondary-color rounded-md shadow-md bg-white flex "
              >
                <div className="relative flex items-center justify-center bg-tertiary-color m-3">
                  <Image
                    src="/images/pic11.png"
                    alt=""
                    width={250}
                    height={50}
                    priority
                    className=" object-contain"
                  />
                  <div className="transition absolute top-0 bottom-0 flex gap-3 w-fit items-center justify-center duration-700 ease-in-out opacity-0 group-hover:opacity-100 cursor-pointer">
                    <ProductDetailsModal />
                    <div className="p-2 rounded-full hover:text-white bg-white hover:bg-secondary-color">
                      <LoveIcon />
                    </div>
                    <div className="p-2 rounded-full hover:text-white bg-white hover:bg-secondary-color">
                      <CartIcon />
                    </div>
                  </div>
                </div>
                <div className="w-full flex items-end relative gap-1 pr-1 pl-5 pt-5 pb-1">
                  <div className="self-center">
                  <div className="flex items-center">
                    {stars.map((star, i) => (
                      <p key={i}>{star}</p>
                    ))}
                  </div>
                    <h3 className="text-base font-bold">
                      Rainbow Sequin Dress
                    </h3>
                    <div className="text-sm font-medium flex items-center gap-2">
                      <p className="line-through text-gray-400">$12.99</p>
                      <p className="text-secondary-color font-semibold">
                        $6.99
                      </p>
                    </div>
                  </div>
                  <div className="absolute bottom-1 right-1 cursor-pointer text-secondary-color hover:bg-secondary-color hover:text-white rounded-tl-3xl rounded-br-[24px] p-3 bg-tertiary-color">
                    <p className="text-sm font-bold ">Add to Cart</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
        </div>
      </div>
      <div className=" w-full bg-white overflow-x-auto py-6 mt-10 lg:mt-20">
          <ul className="flex animate-carousel gap-20 ">
            {brandList
              .map((brand, i) => (
                <li key={i} className="relative flex-none list-none">
                  <Image
                    src={brand}
                    alt={`brand${i+1}`}
                    width={50}
                    height={50}
                    priority
                    className="object-contain"
                  />
                </li>
              ))}
          </ul>
        </div>
    </div>
  );
};

export default TopSelling;
