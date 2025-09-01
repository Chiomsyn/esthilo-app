import { services } from "@/lib/constants";
import React from "react";

const Services = () => {
  return (
    <div className="lg:py-20 py-10 bg-white flex w-full items-center justify-center px-5 lg:px-20">
      <div className="grid md:grid-cols-2 xl:grid-cols-4 w-fit gap-8 md:gap-10 lg:gap-20">
        {services.map((e, i: number) => (
          <div
            key={i}
            className="flex scale-85 group hover:scale-90 items-center gap-3 hover:shadow-sm p-3"
          >
            <div className="group-hover:rotate-180 transition-all">
              {" "}
              {e.icon}
            </div>
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
