import React from "react";
import Image from "next/image";
import QuotesIcon from "../../../../icons/quotes";

const CustomerSays = () => {
  return (
    <div className=" bg-tertiary-color py-40">
      <div className="relative wrapper flex flex-col lg:flex-row gap-5 xl:gap-10 item-center justify-center ">
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl font-bold">What Customers Say About Us</h1>
          <p className="text-base font-medium ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="animate-fadeIn w-fit lg:w-[600px] z-10 shadow-md lg:gap-10 bg-white gap-5 flex flex-col p-10">
          <QuotesIcon className="text-base-color" size={40} />
          <p className="text-base font-medium text-justify italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="flex items-center gap-4">
            <Image
              src={"/images/pic12.png"}
              alt={`customer`}
              width={200}
              height={200}
              className="object-contain h-12 w-12 lg:h-20 lg:w-20 rounded-full bg-secondary-color"
            />
            <div className="flex-col flex gap-1">
              <h3 className="text-lg font-medium">Chikaima Ezeamama</h3>
              <p className="text-sm font-thin">CEO Kaima.INC</p>
            </div>
          </div>
        </div>
        <div className="hidden w-[600px] animate-fadeIn z-10 shadow-md lg:gap-10 bg-white gap-5 lg:flex flex-col p-10">
          <QuotesIcon className="text-base-color" size={40} />
          <p className="text-base font-medium text-justify italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="flex items-center gap-4">
            <Image
              src={"/images/pic12.png"}
              alt={`customer`}
              width={200}
              height={200}
              className="object-contain h-12 w-12 lg:h-20 lg:w-20 rounded-full bg-secondary-color"
            />
            <div className="flex-col flex gap-1">
              <h3 className="text-lg font-medium">Chikaima Ezeamama</h3>
              <p className="text-sm font-thin">CEO Kaima.INC</p>
            </div>
          </div>
        </div>
        <div className="lg:hidden flex gap-5 self-center items-center ">
          <div className="rounded-full w-3 h-3 bg-[#86E3EF]"></div>
          <div className="rounded-full w-3 h-3 bg-[#86E3EF]"></div>
          <div className="ring-1 ring-secondary-color rounded-full p-1">
            <div className="rounded-full w-2 h-2 bg-secondary-color"></div>
          </div>
        </div>
        <div className="absolute right-0 lg:h-full h-[50%] w-[40%] lg:top-0 bottom-0  rounded-l-full bg-secondary-color "></div>
      </div>
    </div>
  );
};

export default CustomerSays;
