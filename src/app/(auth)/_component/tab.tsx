"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const AuthTab = () => {
  const links = [
    { name: "Login", url: "/login" },
    { name: "Register", url: "/register" },
  ];

  const pathname = usePathname();

  if (pathname === "/forgot-password") {
    return null;
  }

  return (
    <>
      <CardHeader className="text-center">
        <div className="flex items-center justify-center mb-4">
          <Link href="/">
            <Button variant="ghost" className="absolute left-4 top-4">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
        </div>
        <Image
          width={1000}
          height={1000}
          src="/images/logo.png"
          alt="logo"
          className="h-20 object-contain"
        />
        <CardTitle>Welcome to Esthilo</CardTitle>
        <CardDescription>
          Sign in to your account or create a new one
        </CardDescription>
      </CardHeader>
      <div
        className={cn(
          " text-muted-foreground my-5 bg-white py-2 inline-flex h-9 w-full items-center justify-center rounded-lg p-[3px]"
        )}
      >
        {links.map((link) => {
          const isActive = link.url === pathname;
          return (
            <Link href={link.url} key={link.name} className="w-full">
              <Button
                variant="ghost"
                className={cn(
                  "inline-flex h-[calc(100%-1px)] w-full flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                  isActive && "bg-sec-main/5 text-sec-main "
                )}
              >
                {link.name}
              </Button>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default AuthTab;
