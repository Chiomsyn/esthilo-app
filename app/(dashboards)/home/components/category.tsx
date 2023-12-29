import React from "react";
import Image from "next/image";

const Category = () => {
  return (
    <div className="flex flex-wrap w-full gap-4 my-10 items-center justify-center">
      <div className="flex flex-col gap-5">
        {/* card 1 */}
        <div className="relative w-[370px] lg:w-[400px] shadow-md rounded-md h-80 flex bg-tertiary-color">
          <div className=" flex flex-col gap-2 mt-10 pl-10 w-72">
            <p className="font-medium text-xl"> Get 40% Off</p>
            <h3 className="text-2xl lg:text-3xl font-semibold">
              Man's Latest Collection
            </h3>
            <h3 className="font-medium text-sm"> &gt; SHOP NOW</h3>
          </div>
          <div className="absolute w-[200px] h-[200px] right-0 self-end rounded-t-full rounded-br-lg rounded-bl-full bg-secondary-color"></div>
          <Image
            src="/images/pic3.png"
            alt=""
            width={350}
            height={350}
            priority
            className="absolute h-[350px] w-[350px] -top-[30px] -right-[115px] object-contain"
          />
        </div>
        {/* card 2 */}
        <div className="relative w-[370px] lg:w-[400px] shadow-md rounded-md h-[580px] flex justify-center bg-tertiary-color">
        <div className="self-center w-[200px] h-[200px] rounded-full bg-secondary-color"></div>
          <div className=" absolute bottom-0 flex flex-col gap-2 items-center h-fit justify-center mb-10 px-4 w-[80%]">
            <p className="font-medium text-xl"> New Arrival</p>
            <h3 className="text-2xl lg:text-3xl font-semibold text-center">
              Exclusive Shoes Collection
            </h3>
            <h3 className="font-medium text-sm"> &gt; Explore NOW</h3>
          </div>
          
          <Image
            src="/images/pic9.png"
            alt=""
            width={280}
            height={280}
            priority
            className="hidden md:flex absolute -top-0 object-contain"
          />

          <Image
            src="/images/pic7.png"
            alt=""
            width={280}
            height={280}
            priority
            className="flex md:hidden absolute -top-0 right-[90px] left-[90px] object-contain"
          />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        {/* card 3 */}
        <div className="relative w-[370px] lg:w-[400px] shadow-md rounded-md h-[580px] flex items-center justify-center bg-tertiary-color">
          <div className="absolute top-0 flex flex-col gap-2 mt-10 items-center justify-center px-4 w-[80%]">
            <p className="font-medium text-xl"> Couple Fashion</p>
            <h3 className="text-2xl lg:text-3xl font-semibold text-center">
              Best collection for Stylish Couples
            </h3>
            <h3 className="font-medium text-sm"> &gt; Explore NOW</h3>
          </div>
          <div className="self-end w-[250px] md:w-[300px] h-[250px] rounded-t-full bg-secondary-color"></div>
          <Image
            src="/images/pics4.png"
            alt=""
            width={280}
            height={280}
            priority
            className="absolute -bottom-7  object-contain"
          />
        </div>
        {/* card 4 */}
        <div className="relative w-[370px] lg:w-[400px] shadow-md rounded-md h-80  flex bg-tertiary-color">
          <div className=" flex flex-col gap-2 mt-10 pl-4 w-52">
            <p className="font-medium"> Get 40% Off</p>
            <h3 className="text-2xl font-semibold">Esthilo Trendy Accessories</h3>
            <h3 className="font-medium text-sm"> &gt; SHOP NOW</h3>
          </div>
          <div className="absolute w-[200px] h-[200px] right-0 self-end rounded-t-full rounded-br-lg rounded-bl-full bg-secondary-color"></div>
          <Image
            src="/images/pic10.png"
            alt=""
            width={350}
            height={350}
            priority
            className="absolute h-[350px] w-[350px] -top-[10px] -right-[60px] object-contain"
          />
        </div>
      </div>
      <div className="flex flex-col gap-5 lg:flex-row xl:flex-col">
        {/* Card 5 */}
        <div className="relative w-[370px] lg:w-[400px] shadow-md rounded-md h-80 flex bg-tertiary-color">
          <div className=" flex z-10 flex-col gap-2 mt-10 pl-10 w-72">
            <p className="font-medium text-xl"> Be Stylish</p>
            <h3 className="text-3xl font-semibold">Girl's Latest Collection</h3>
            <h3 className="font-medium text-sm"> &gt; SHOP NOW</h3>
          </div>
          <div className="absolute w-[200px] h-[200px] right-0 self-start rounded-bl-full bg-secondary-color"></div>
          <Image
            src="/images/pic5.png"
            alt=""
            width={350}
            height={350}
            priority
            className="absolute h-[350px] w-[350px] -top-[30px] -right-[100px] object-contain"
          />
        </div>
        {/* Card 6 */}
        <div className="relative w-[370px] lg:w-[400px] shadow-md rounded-md h-[580px] flex items-center justify-center bg-tertiary-color">
          <div className=" flex flex-col gap-2 mt-10 absolute top-0 items-center justify-center px-4 w-[80%]">
            <p className="font-medium text-xl"> Kids Fashion</p>
            <h3 className="text-2xl lg:text-3xl font-semibold text-center">
              Best collection for Fashionable Kids
            </h3>
            <h3 className="font-medium text-sm"> &gt; Explore NOW</h3>
          </div>
          <div className="self-center w-[200px] h-[200px] rounded-full   bg-secondary-color"></div>
          <Image
            src="/images/pic11.png"
            alt=""
            width={280}
            height={280}
            priority
            className="absolute bottom-0 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
