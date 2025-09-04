"use client";

import { motion } from "framer-motion";
import React from "react";

const GoogleMap = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: [0, 1], scale: [0.8, 1] }}
      whileInView={{ opacity: [0, 1], scale: [0.8, 1] }}
      transition={{ duration: 2, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full py-20 max-w-7xl space-y-8 mx-auto "
    >
      <div>
        <h1 className="lg:text-5xl text-4xl text-center lg:text-start font-semibold  ">
          Locate Us on Map
        </h1>
        <span className="text-sm text-gray-500">
          {`Our most-loved pieces, handpicked for style and quality.`}
        </span>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.598921145985!2d7.0274444763808!3d4.838722995136836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cd7912364027%3A0x5ab25b765685057b!2sLoctech%20Training%20Institute!5e0!3m2!1sen!2sng!4v1737279688025!5m2!1sen!2sng"
        width="600"
        height="450"
        style={{ border: "0" }}
        title="myFrame"
        loading="lazy"
        className="w-full"
      ></iframe>
    </motion.div>
  );
};

export default GoogleMap;
