"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const interval = 5000;

  const onboardingInfo = [
    {
      name: "Shirts Collection For Men",
      description:
        "We are more than just an online shopping destination, we're your personal gateway to a world of fashion, trendsetting styles and unparalleled convenience. We believe that fashion is a reflection of your individuality and our mission is to make every shopping experience with us.",
      img: "/images/man.jpg",
    },
    {
      name: "Skirts Collection For Women",
      description:
        "We are more than just an online shopping destination, we're your personal gateway to a world of fashion, trendsetting styles and unparalleled convenience. We believe that fashion is a reflection of your individuality and our mission is to make every shopping experience with us.",
      img: "/images/pics2.jpg",
    },
    {
      name: "Clothes Collection For Kids",
      description:
        "We are more than just an online shopping destination, we're your personal gateway to a world of fashion, trendsetting styles and unparalleled convenience. We believe that fashion is a reflection of your individuality and our mission is to make every shopping experience with us.",
      img: "/images/kid2.jpg",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % onboardingInfo.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, interval);
    return () => clearInterval(intervalId);
  }, [currentIndex, interval]);

  return (
    <div className="w-full bg-white">
      <div className="flex max-w-[1280px] mx-auto h-fit bg-white overflow-hidden relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="w-full grid lg:grid-cols-2 lg:h-[800px] gap-10"
          >
            <div className="flex flex-col items-start lg:justify-center px-4 lg:px-0">
              <div className="w-full flex flex-col gap-10">
                <div className="lg:gap-10 gap-5 flex flex-col">
                  <motion.h1
                    className="font-bold text-3xl lg:text-5xl"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {onboardingInfo[currentIndex].name}
                  </motion.h1>
                  <motion.h3
                    className="text-justify text-base"
                    // initial={{ opacity: 0, y: 20 }}
                    // animate={{ opacity: 1, y: 0 }}
                    // transition={{ delay: 0.4 }}
                  >
                    {onboardingInfo[currentIndex].description}
                  </motion.h3>
                  <motion.div
                  // initial={{ opacity: 0 }}
                  // animate={{ opacity: 1 }}
                  // transition={{ delay: 0.6 }}
                  >
                    <Button
                      size="lg"
                      type="submit"
                      className="bg-base-color w-[200px] text-white"
                    >
                      Shop Now
                    </Button>
                  </motion.div>
                </div>

                {/* Dots navigation */}
                <div className="lg:flex gap-5 items-center hidden">
                  {onboardingInfo.map((_, i) =>
                    currentIndex === i ? (
                      <div
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className="ring-1 ring-sec-main rounded-full p-1 cursor-pointer"
                      >
                        <div className="rounded-full w-2 h-2 bg-sec-ring-sec-main"></div>
                      </div>
                    ) : (
                      <div
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className="rounded-full w-3 h-3 bg-[#C6F2F7] cursor-pointer"
                      ></div>
                    )
                  )}
                </div>
              </div>
            </div>

            <motion.div
              style={{
                backgroundImage: `url(${onboardingInfo[currentIndex].img})`,
              }}
              className="order-first lg:order-last flex-1 h-[500px] self-center bg-no-repeat bg-cover rounded-tl-3xl rounded-br-[24px] shadow-2xl"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Onboarding;
