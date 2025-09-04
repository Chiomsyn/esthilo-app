"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
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
          Our Products
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: [0, 1], scale: [0.8, 1] }}
          whileInView={{ opacity: [0, 1], scale: [0.8, 1] }}
          transition={{ duration: 2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-sm text-white text-center self-center mt-2 max-w-[700px]"
        >
          Explore our curated collection of exquisite apparel, meticulously
          crafted from the finest fabrics to offer unparalleled elegance and
          timeless sophistication.
        </motion.p>
      </div>
      <div className="absolute top-0 left-0 bg-black/80 h-full w-full"></div>
    </div>
  );
};

export default Hero;
