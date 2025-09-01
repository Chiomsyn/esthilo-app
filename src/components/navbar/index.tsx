"use client";

import React, { useState } from "react";
import MobileNavBar from "./mobile-nav-bar";
import HamburgerIcon from "../../../icons/hamburger-icon";
import CartIcon from "../../../icons/cart-icon";
import {
  LogIn,
  Package,
  Settings,
  User,
  UserIcon,
  UserPlus,
} from "lucide-react";
import MagnifyingGlassIcon from "../../../icons/magnifying-glass-icon";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { navLinks } from "@/lib/constants";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { signOutUser } from "@/app/actions/user.actions";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const pathname = usePathname();
  const session = useSession();

  const onOpen = () => {
    setOpenSidebar(true);
  };

  const onClose = () => {
    setOpenSidebar(false);
  };

  const router = useRouter();

  const email = session?.data?.user?.email;
  const name = session?.data?.user?.name;
  const role = session?.data?.user?.role;

  return (
    <div className="sticky top-0 xl:px-20 lg:px-10 px-4 bg-base-color lg:h-16 h-14 flex-row justify-between w-full flex items-center z-50">
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
      <div className="lg:flex flex-row gap-4 pr-4 hidden w-full max-w-7xl mx-auto items-center text-white justify-between">
        <div>Esthilo</div>
        <div className="flex gap-5 items-center">
          {navLinks.links.map((item, index) => {
            const isActive = pathname.startsWith(item.route);

            return (
              <div key={index}>
                <Link as={item.route} href={item.route}>
                  <div
                    className={
                      " flex items-center flex-row gap-3 text-sm " +
                      (isActive
                        ? "text-sec-main border-b border-sec-main rounded-sm"
                        : "")
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
          {/* <MagnifyingGlassIcon size="20" className="text-white" /> */}
          {/* <UserIcon size="20" className="text-white" /> */}
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button
                variant="ghost"
                size="sm"
                className="text-charcoal hover:bg-sec-main cursor-pointer"
              >
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-gray-50">
              {session.data ? (
                <>
                  <div className="px-3 py-2">
                    <p className="text-sm font-medium">{name}</p>
                    <p className="text-xs text-gray-500">{email}</p>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link
                      href={role === "admin" ? "/admin" : "/account"}
                      className="flex items-center"
                    >
                      <User className="mr-2 h-4 w-4" />
                      My Account
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      href={
                        role !== "admin" ? "/admin/orders" : "/account/orders"
                      }
                      className="flex items-center"
                    >
                      <Package className="mr-2 h-4 w-4" />
                      {role === "admin" ? "Orders" : "My Orders"}
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem>
                    <Link
                      href={
                        role === "admin"
                          ? "/admin/settings"
                          : "/account/settings"
                      }
                      className="flex items-center"
                    >
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={async () => {
                      await signOutUser();

                      router.push("/login");
                    }}
                    className="text-red-600 focus:text-red-600"
                  >
                    Sign Out
                  </DropdownMenuItem>
                </>
              ) : (
                <div>
                  <DropdownMenuItem className="group">
                    <Link href="/login" className="flex  items-center">
                      <LogIn className="mr-2 h-4 w-4 group-hover:text-sec-main" />
                      <p className="group-hover:text-sec-main">Sign In</p>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="group">
                    <Link href="/register" className="flex items-center">
                      <UserPlus className="mr-2 h-4 w-4 group-hover:text-sec-main" />
                      <p className="group-hover:text-sec-main">
                        Create Account
                      </p>
                    </Link>
                  </DropdownMenuItem>
                </div>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
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
