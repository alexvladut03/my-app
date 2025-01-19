"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaSearch } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { useFavorites } from "@/utils/context/favorites-provider";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import categories from "../../data/categories";

export default function NavBar() {
  const { countFavorites } = useFavorites();
  const pathname = usePathname();

  return (
    <nav
      className={`${
        pathname === "/"
          ? "bg-white"
          : "bg-gradient-to-r from-white from-50% to-customBlue to-70% drop-shadow-[0_4px_6px_rgba(0,139,234,0.3)]"
      }`}
    >
      <div
        className={`max-w-7xl flex items-center mx-auto h-16 ${
          pathname === "/" ? "justify-between" : ""
        }`}
      >
        {/* Logo-ul */}
        <div className="flex w-1/4">
          <Link href="/">
            <Image
              src="/LogoKLAUSNETIC.png"
              alt="KLAUSNETIC"
              width={500}
              height={500}
              className="h-14 w-64"
            />
          </Link>
        </div>

        {/* Secțiunea de căutare doar pe alte pagini */}
        {pathname !== "/" && (
          <div className="flex h-16 w-2/4 items-center bg-customBlue px-10 relative">
            <input
              type="text"
              placeholder="Vreau să cumpăr..."
              className="rounded-md pl-2 pr-12 py-2 w-full placeholder:text-gray-600 outline-customBlue"
            />
            <button className="absolute text-customBlue right-10 px-4 text-xl">
              <FaSearch />
            </button>
          </div>
        )}

        {/* Iconițele din dreapta */}
        <div
          className={`flex gap-4 justify-end items-center w-1/4 ${
            pathname === "/" ? "text-customBlue" : "text-white"
          }`}
        >
          {/* Favorite */}
          <div className="relative">
            <Link href="/favorite">
              <FaHeart className="w-6 h-6" />
            </Link>
            <span className="absolute -bottom-[1px] -right-1 bg-black text-xs rounded-full px-1 text-white ">
              {countFavorites()}
            </span>
          </div>
          <Sheet>
            <SheetTrigger>
              <IoMenu className="w-10 h-10" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="border-b-2 border-customBlue text-center text-2xl ">
                  Categoriile noastre
                </SheetTitle>
                <SheetDescription>
                  {categories.map((category) => (
                    <Link href="/produse" key={category.id}>
                      <span className="flex items-center gap-2 text-xl text-black p-2 group">
                        <span className="text-customBlue">
                          {React.createElement(category.icon)}
                        </span>
                        <span className="relative text-black group-hover:text-customBlue transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-customBlue after:transition-all after:duration-300 group-hover:after:w-full">
                          <SheetTrigger>{category.name}</SheetTrigger>
                        </span>
                      </span>
                    </Link>
                  ))}
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
