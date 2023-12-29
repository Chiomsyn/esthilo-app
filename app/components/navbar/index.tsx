"use client";

import React, { useState } from "react";
import { navLinks } from "../../constants";
import MobileNavBar from "./mobile-nav-bar";
import HamburgerIcon from "@/icons/hamburger-icon";
import CartIcon from "@/icons/cart-icon";
import { UserIcon } from "lucide-react";
import MagnifyingGlassIcon from "@/icons/magnifying-glass-icon";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const pathname = usePathname();
  const path = pathname.split("/")[1];

  const onOpen = () => {
    setOpenSidebar(true);
  };

  const onClose = () => {
    setOpenSidebar(false);
  };

  return (
    <div className="sticky top-0 xl:px-20 lg:px-10 px-4 z-20 bg-base-color lg:h-16 h-14 flex-row justify-between w-full flex items-center ">
      <div className="lg:hidden flex justify-between w-full items-center cursor-pointer">
        <div className="cursor-pointer" onClick={onOpen}>
          <HamburgerIcon size="36" className="text-white" />
        </div>
        <div className="flex gap-3 items-center">
          <MagnifyingGlassIcon size="20" className="text-white" />
          <UserIcon size="20" className="text-white" />
          <CartIcon size="20" className="text-white" />
        </div>
      </div>
      <div className="lg:flex flex-row gap-4 pr-4 hidden w-full items-center text-white justify-between">
        <div>Esthilo</div>
        <div className="flex gap-5 items-center">
        {navLinks.links.map((item, index) => {
          const isActive = pathname.startsWith(item.route);

          return (
            <div
              key={index}
             
            >
              <Link as={item.route} href={item.route}>
                <div
                  className={
                    " flex items-center flex-row gap-3 text-sm " +
                    (isActive ? "text-secondary-color border-b border-secondary-color rounded-sm" : "")
                  }
                >
                  {item.name}
                </div>
              </Link>
            </div>
          );
        })}
        </div>
         <div className="flex gap-3 items-center">
          <MagnifyingGlassIcon size="20" className="text-white" />
          <UserIcon size="20" className="text-white" />
          <CartIcon size="20" className="text-white" />
        </div>
      </div>

      {openSidebar && (
        <MobileNavBar onClose={onClose} openSidebar={openSidebar} />
      )}
    </div>
  );
};

export default Navbar;
