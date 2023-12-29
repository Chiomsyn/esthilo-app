import { services } from "@/app/constants";
import React from "react";

const Services = () => {
  return (
    <div className="lg:my-20 my-10 flex w-full items-center justify-center px-5 lg:px-20">
        <div className="grid md:grid-cols-2 xl:grid-cols-4 w-fit gap-8 md:gap-10 lg:gap-20">
      {services.map((e, i: number) => (
        <div key={i} className="flex items-center gap-3">
          {e.icon}
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-xl lg:text-2xl">{e.title}</h2>
            <p className="text-base">{e.description}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Services;
