import React from "react";
import Image from "next/image";
import LoveIcon from "../../../../icons/love-icon";
import CartIcon from "../../../../icons/cart-icon";
import ProductDetailsModal from "./modals/product-details-modal";
import ZoomOutIcon from "../../../../icons/zoom-out";

const Featured = () => {
  const category = ["Men", "Women", "Kids", "Accessories"];
  const stars = ["⭐", "⭐", "⭐", "⭐", "⭐"];
  return (
    <div className=" flex flex-col items-center justify-center lg:py-20 w-full bg-gradient-to-t from-tertiary-color/30 to-white py-10 px-5 lg:p-10">
      <h2 className="text-2xl lg:text-4xl font-bold">Popular Products</h2>
      <div className="flex flex-col  gap-5 items-center text-base font-medium lg:justify-between">
        <p className="text-gray-500 text-sm">
          Showing our latest arrival on this summer
        </p>
      </div>
      <div className="mt-5 hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {Array(8)
          .fill("l")
          .map((e: any, i: number) => (
            <div
              key={i}
              className="w-[300px] relative group hover:ring-2 hover:ring-sec-main rounded-md shadow-sm border-white drop-shadow-sm bg-slate-50 border-2 flex flex-col items-center pt-3"
            >
              <Image
                src="/images/pic11.png"
                alt=""
                width={200}
                height={200}
                priority
                className=" object-contain"
              />
              <div className="w-full flex flex-col gap-1 pr-1 pl-5 pt-5 pb-1">
                <h3 className="text-base font-bold">Rainbow Sequin Dress</h3>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium flex items-center gap-2">
                    <p className="line-through text-gray-400">$12.99</p>
                    <p className="text-base-color font-semibold">$6.99</p>
                  </div>
                  <div className="transition flex gap-3 w-fit items-center justify-end duration-700 ease-in-out cursor-pointer">
                    <ZoomOutIcon />

                    <div className="p-2 rounded-full hover:text-white bg-white hover:bg-secondary-color">
                      <CartIcon />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="mt-5 grid md:hidden w-full">
        <ul className="flex gap-10 hover:overflow-x-auto focus:overflow-x-auto animate-carousel hover:animate-none">
          {Array(8)
            .fill("l")
            .map((e: any, i: number) => (
              <div
                key={i}
                className="w-[300px] relative group hover:ring-2 hover:ring-secondary-color rounded-md shadow-md bg-white flex flex-col items-center pt-3"
              >
                <Image
                  src="/images/pic11.png"
                  alt=""
                  width={200}
                  height={200}
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
                <div className="w-full flex flex-col gap-1 pr-1 pl-5 pt-5 pb-1">
                  <h3 className="text-base font-bold">Rainbow Sequin Dress</h3>
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium flex items-center gap-2">
                      <p className="line-through text-gray-400">$12.99</p>
                      <p className="text-base-color font-semibold">$6.99</p>
                    </div>
                    <div className="transition flex gap-3 w-fit items-center justify-end duration-700 ease-in-out cursor-pointer">
                      <ZoomOutIcon />

                      <div className="p-2 rounded-full hover:text-white bg-white hover:bg-secondary-color">
                        <CartIcon />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Featured;
