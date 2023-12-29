"use client"

import { Button } from '@nextui-org/react'
import React from 'react'

const Onboarding = () => {
  return (
    <div className="w-full grid lg:grid-cols-2 lg:h-[700px] gap-10 lg:gap-0">
    <div className="flex flex-col items-start lg:justify-center px-5 lg:px-[10%] ">
    <div className="w-fit flex flex-col gap-10">
    <div className="lg:w-[90%] lg:gap-10 gap-5 flex flex-col">
     <h1 className="font-bold text-3xl lg:text-5xl">Skirts Collection For Women</h1>
      <h3 className=" text-justify text-base">
        We are more than just an online shopping destination, we're your
        personal gateway to a world of fashion, rendsetting styles and
        unparalleled convenience. We believe that fashion is a reflection of
        your individuality and our mission is to make every shopping
        experience with us.
      </h3>
      <Button size="lg" type="submit" className="w-full lg:w-fit bg-base-color text-white">
        Shop Now
      </Button>
     </div>
      <div className="lg:flex gap-5 items-center hidden ">
        <div className="rounded-full w-3 h-3 bg-[#C6F2F7]"></div>
        <div className="rounded-full w-3 h-3 bg-[#C6F2F7]"></div>
        <div className="ring-1 ring-secondary-color rounded-full p-1">
          <div className="rounded-full w-2 h-2 bg-secondary-color"></div>
        </div>
      </div>
    </div>
    </div>
    <div className="order-first lg:order-last flex-1 h-[500px] lg:h-full bg-home1-bg bg-no-repeat bg-cover bg-center "></div>
  </div>
  )
}

export default Onboarding
