"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const isAndroid =
    typeof navigator !== "undefined"
      ? navigator.userAgent.toLowerCase().indexOf("android") !== -1
      : false;
  const isIOS =
    (typeof navigator !== "undefined"
      ? [
          "iPad Simulator",
          "iPhone Simulator",
          "iPod Simulator",
          "iPad",
          "iPhone",
          "iPod",
        ].includes(navigator.userAgent)
      : false) ||
    // iPad on iOS 13 detection
    (typeof navigator !== "undefined"
      ? navigator.userAgent.includes("Mac") && "ontouchend" in document
      : false);

  const handleClick = async (phone_no: string) => {
    if (typeof window !== "undefined") {
      if (!isAndroid || isIOS) {
        window.open(
          `https://api.whatsapp.com/send/?phone=${phone_no}&text&type=phone_number&app_absent=0`
        );
      } else {
        window.open(`https://wa.me/${phone_no}`, "_blank");
      }
    }
  };

  return (
    <div className="h-[500px] flex items-center relative">
      <Image
        width={1000}
        height={1000}
        src="/images/kid2.jpg"
        alt="logo"
        className="h-[500px] absolute top-0 left-0 object-cover object-center w-full"
      />
      <div className="relative m-auto flex flex-col z-30 w-full">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: [0, 1], scale: [0.8, 1] }}
          whileInView={{ opacity: [0, 1], scale: [0.8, 1] }}
          transition={{ duration: 2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-6xl font-bold text-white text-center"
        >
          Contact Us
        </motion.h2>
        <motion.p
          className="text-sm text-white text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: [0, 1], scale: [0.8, 1] }}
          whileInView={{ opacity: [0, 1], scale: [0.8, 1] }}
          transition={{ duration: 2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Get in touch with us to deliver your quality and exotic fashion and
          style
        </motion.p>
        <Button className="self-center flex items-center group gap-2 mt-6 px-20 ">
          Chat with us <ArrowRight className="w-6 h-5" />{" "}
          <Image
            onClick={() => handleClick("2348166879923")}
            src={"/images/whatsapp.svg"}
            alt={"blog"}
            width={1200}
            height={900}
            className="h-6 w-6 object-cover cursor-pointer group-hover:scale-110 transition-all"
          />
        </Button>
      </div>
      <div className="absolute top-0 left-0 bg-black/80 h-full w-full"></div>
    </div>
  );
};

export default Hero;
