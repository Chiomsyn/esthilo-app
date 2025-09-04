"use client";

import { services } from "@/lib/constants";
import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="lg:py-20 py-10 bg-white flex w-full items-center justify-center px-5 lg:px-20">
      <motion.div
        className="grid md:grid-cols-2 xl:grid-cols-4 w-fit gap-8 md:gap-10 lg:gap-20"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {services.map((e, i: number) => (
          <motion.div
            key={i}
            className="flex scale-85 group hover:scale-95 transition-transform items-center gap-3 hover:shadow-md p-4 rounded-xl"
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {/* Icon */}
            <motion.div
              className="group-hover:rotate-180 transition-all"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              {e.icon}
            </motion.div>

            {/* Text */}
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-xl lg:text-2xl">{e.title}</h2>
              <p className="text-base text-gray-600">{e.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
