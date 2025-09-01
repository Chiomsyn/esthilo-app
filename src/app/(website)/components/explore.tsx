import { Button } from "@/components/ui/button";
import React from "react";

const Explore = () => {
  return (
    <div className="w-full grid lg:grid-cols-2 lg:h-[950px] gap-10 lg:gap-0 my-10 md:py-24 px-5 lg:px-20">
      <div className=" h-[500px] rounded-lg lg:h-full bg-home1-bg bg-no-repeat bg-cover bg-center"></div>
      <div className="flex flex-col items-start lg:justify-center px-1 lg:px-10">
        <div className="w-fit flex flex-col gap-10">
          <div className="lg:w-[90%] lg:gap-10 gap-5 flex flex-col">
            <h1 className="font-bold text-3xl lg:text-5xl">
              Explore Our Latest Fashion Collection
            </h1>
            <h3 className=" text-justify text-base">
              We believe that fashion should be both funtional and Fabulous. Our
              Fashion Collection reflects our commitment to quality, comfort and
              style Embrace the season with confidence.
            </h3>
            <Button
              size="lg"
              type="submit"
              className="w-full lg:w-fit bg-base-color text-white"
            >
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
