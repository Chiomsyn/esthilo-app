import React from "react";
import Image from "next/image";

const Category = () => {
  return (
    <div className="flex flex-wrap w-full gap-4 py-10 lg:py-20 bg-white  items-center justify-center">
      <div className="flex flex-col gap-5">
        {/* card 1 */}
        <div className="relative w-[370px] lg:w-[400px] shadow-sm rounded-md h-80 flex hover:bg-gradient-to-l bg-gradient-to-r from-tertiary-color/30 to-white">
          <div className=" flex flex-col gap-2 mt-10 pl-10 w-72">
            <p className="font-medium "> Get 40% Off</p>
            <h3 className="text-2xl font-bold ">Man's Latest Collection</h3>
            <h3 className="font-medium text-sm text-gray-400 cursor-pointer">
              {" "}
              &gt; SHOP NOW
            </h3>
          </div>
          <div className="absolute w-[200px] h-[200px] right-0 self-end rounded-t-full rounded-br-lg rounded-bl-full bg-secondary-color/70"></div>
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
        <div className="relative w-[370px] lg:w-[400px] shadow-sm rounded-md h-[580px] flex justify-center hover:bg-gradient-to-l bg-gradient-to-r from-tertiary-color/30 to-white">
          <div className="self-center w-[200px] h-[200px] rounded-full bg-secondary-color/70"></div>
          <div className=" absolute bottom-0 flex flex-col gap-2 items-center h-fit justify-center mb-10 px-4 w-[80%]">
            <p className="font-medium text-xl"> New Arrival</p>
            <h3 className="text-2xl font-bold  text-center">
              Exclusive Shoes Collection
            </h3>
            <h3 className="font-medium text-sm text-gray-400 cursor-pointer">
              {" "}
              &gt; Explore NOW
            </h3>
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
        <div className="relative w-[370px] lg:w-[400px] shadow-sm rounded-md h-[580px] flex items-center justify-center hover:bg-gradient-to-t bg-gradient-to-b from-tertiary-color/30 to-white">
          <div className="absolute top-0 flex flex-col gap-2 mt-10 items-center justify-center px-4 w-[80%]">
            <p className="font-medium text-xl"> Couple Fashion</p>
            <h3 className="text-2xl font-bold text-center">
              Best collection for Stylish Couples
            </h3>
            <h3 className="font-medium text-sm text-gray-400 cursor-pointer">
              {" "}
              &gt; Explore NOW
            </h3>
          </div>
          <div className="self-end w-[250px] md:w-[300px] h-[250px] rounded-t-full bg-secondary-color/70"></div>
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
        <div className="relative w-[370px] lg:w-[400px] shadow-sm rounded-md h-80  flex bg-gradient-to-t hover:bg-gradient-to-b from-tertiary-color/30 to-white">
          <div className=" flex flex-col gap-2 mt-10 pl-4 w-52">
            <p className="font-medium "> Get 40% Off</p>
            <h3 className="text-2xl font-bold">Esthilo Trendy Accessories</h3>
            <h3 className="font-medium text-sm text-gray-400 cursor-pointer">
              {" "}
              &gt; SHOP NOW
            </h3>
          </div>
          <div className="absolute w-[200px] h-[200px] right-0 self-end rounded-t-full rounded-br-lg rounded-bl-full bg-secondary-color/70"></div>
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
        <div className="relative w-[370px] lg:w-[400px] shadow-sm rounded-md h-80 flex hover:bg-gradient-to-r bg-gradient-to-l from-tertiary-color/30 to-white">
          <div className=" flex z-10 flex-col gap-2 mt-10 pl-10 w-72">
            <p className="font-medium text-lg"> Be Stylish</p>
            <h3 className="text-2xl font-bold">Girl's Latest Collection</h3>
            <h3 className="font-medium text-sm text-gray-400 cursor-pointer">
              {" "}
              &gt; SHOP NOW
            </h3>
          </div>
          <div className="absolute w-[200px] h-[200px] right-0 self-start rounded-bl-full bg-secondary-color/70"></div>
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
        <div className="relative w-[370px] lg:w-[400px] shadow-sm rounded-md h-[580px] flex items-center justify-center hover:bg-gradient-to-r bg-gradient-to-l from-tertiary-color/30 to-white">
          <div className=" flex flex-col gap-2 mt-10 absolute top-0 items-center justify-center px-4 w-[80%]">
            <p className="font-medium text-lg"> Kids Fashion</p>
            <h3 className="text-2xl font-bold text-center">
              Best collection for Fashionable Kids
            </h3>
            <h3 className="font-medium text-sm text-gray-400 cursor-pointer">
              {" "}
              &gt; Explore NOW
            </h3>
          </div>
          <div className="self-center w-[200px] h-[200px] rounded-full   bg-secondary-color/70"></div>
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
