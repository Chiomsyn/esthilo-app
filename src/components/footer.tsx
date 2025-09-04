import React from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-border py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="">
            <Link href="/">
              <Image
                width={1000}
                height={1000}
                src="/images/logo.png"
                alt="logo"
                className="h-16 object-contain w-auto"
              />
            </Link>{" "}
            <p className="text-muted-foreground max-w-[350px] text-pretty text-sm">
              Premium clothing for the modern lifestyle. Quality, style, and
              sustainability in every piece.
            </p>
          </div>
          <div className="flex items-center text-muted-foreground gap-5 ">
            {" "}
            {navLinks.links.map((link) => (
              <Link
                href={link.route}
                key={link.name}
                className="hover:text-sec-main"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 Esthilo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
