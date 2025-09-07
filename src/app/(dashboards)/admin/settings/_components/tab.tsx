"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Tab = () => {
  const tabLinks = [
    { label: "General", href: "/admin/settings/basic-info" },
    { label: "Brand", href: "/admin/settings/brand" },
    { label: "Category", href: "/admin/settings/category" },
    { label: "Shipping", href: "/admin/settings/shipping" },
  ];

  const pathname = usePathname();
  return (
    <div className="flex space-x-2 bg-gray-100 p-2 w-fit">
      {tabLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-sec-main",
            pathname === link.href
              ? "bg-sec-main hover:bg-sec-main/90 hover:text-white text-white rounded"
              : ""
          )}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default Tab;
