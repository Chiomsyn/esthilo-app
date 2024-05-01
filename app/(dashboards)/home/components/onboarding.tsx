"use client";

import { Button } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % onboardingInfo.length);
  };

  const interval = 5000;

  const onboardingInfo = [
    {
      name: "Shirts Collection For Men",
      description:
        "We are more than just an online shopping destination, we're your personal gateway to a world of fashion, rendsetting styles and unparalleled convenience. We believe that fashion is a reflection of your individuality and our mission is to make every shopping experience with us.",
      img: "/images/man.jpg",
    },
    {
      name: "Skirts Collection For Women",
      description:
        "We are more than just an online shopping destination, we're your personal gateway to a world of fashion, rendsetting styles and unparalleled convenience. We believe that fashion is a reflection of your individuality and our mission is to make every shopping experience with us.",
      img: "/images/pics2.jpg",
    },
    {
      name: "Clothes Collection For Kids",
      description:
        "We are more than just an online shopping destination, we're your personal gateway to a world of fashion, rendsetting styles and unparalleled convenience. We believe that fashion is a reflection of your individuality and our mission is to make every shopping experience with us.",
      img: "/images/kid2.jpg",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(nextSlide, interval);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [currentIndex, interval]);

  const securedUrl: any = "/images/pics2.jpg";

  return (
    <div className="flex w-full h-fit bg-white">
      {onboardingInfo.map((info, index) => (
        <div
          key={index}
          className={`w-full ${
            index === currentIndex ? "block" : "hidden"
          } grid lg:grid-cols-2 lg:h-[800px] gap-10 lg:gap-0`}
        >
          <div className="flex flex-col items-start lg:justify-center px-5 lg:px-[10%] ">
            <div className="w-fit flex flex-col gap-10">
              <div className="lg:w-[90%] lg:gap-10 gap-5 flex flex-col">
                <h1 className="font-bold text-3xl lg:text-5xl">{info.name}</h1>
                <h3 className=" text-justify text-base">{info.description}</h3>
                <Button
                  size="lg"
                  type="submit"
                  className="w-full lg:w-fit bg-base-color text-white"
                >
                  Shop Now
                </Button>
              </div>
              <div className="lg:flex gap-5 items-center hidden ">
                {onboardingInfo.map((info, i) =>
                  currentIndex === i ? (
                    <div
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className="ring-1 ring-secondary-color rounded-full p-1"
                    >
                      <div className="rounded-full w-2 h-2 bg-secondary-color"></div>
                    </div>
                  ) : (
                    <div
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className="rounded-full w-3 h-3 bg-[#C6F2F7]"
                    ></div>
                  )
                )}
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${info.img})` }}
            className={`order-first lg:order-last flex-1 h-[500px] lg:h-full  bg-no-repeat bg-cover `}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default Onboarding;
