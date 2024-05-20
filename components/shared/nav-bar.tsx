"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  return (
    <div className="sticky top-0 bg-white">
      <NavigationMenu>
        <NavigationMenuList className="flex h-16 w-[97vw] justify-between px-9">
          <NavigationMenuItem
            className={`${pathname === "/create-blog" ? "text-black" : "text-gray-500"}`}
          >
            <Link href="/create-blog">Create Blog</Link>
          </NavigationMenuItem>
          <NavigationMenuItem
            className={`${pathname === "/" ? "text-black" : "text-gray-500"}`}
          >
            <Link href="/">Home</Link>
          </NavigationMenuItem>
          <NavigationMenuItem
            className={`${pathname === "/contact" ? "text-black" : "text-gray-500"}`}
          >
            <Link href="/contact">Contact Us</Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavBar;
