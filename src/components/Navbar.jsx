"use client";

import React, { useState } from "react";
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
import { CgClose } from "react-icons/cg";

export default function NavBar() {
  const { countFavorites } = useFavorites();
  const pathname = usePathname();
  const [searchopen, setSearchopen] = useState(false);

  const handleSearch = () => {
    setSearchopen(!searchopen);
    console.log(searchopen);
  };

  return (
    <nav
      className={`${
        pathname === "/"
          ? "bg-white"
          : "bg-gradient-to-r from-white lg:from-50% from-40% to-customBlue lg:to-60% to-40% drop-shadow-[0_4px_6px_rgba(0,139,234,0.3)]"
      }`}
    >
      <div
        className={`lg:max-w-7xl flex items-center lg:mx-auto lg:h-16 h-12 mx-4 ${
          pathname === "/" ? "justify-between" : ""
        }`}
      >
        {/* Logo-ul */}
        <div className="flex lg:w-1/4 w-2/5">
          <Link href="/">
            <Image
              src="/LogoKLAUSNETIC.png"
              alt="KLAUSNETIC"
              width={500}
              height={500}
              className="lg:h-14 lg:w-64 w-[135px] h-8"
            />
          </Link>
        </div>

        {pathname !== "/" && (
          <div className=" h-16 w-2/4 items-center bg-customBlue px-10 relative lg:flex hidden">
            <input
              type="text"
              placeholder="Vreau să cumpăr..."
              className="rounded-md font-poppins pl-2 pr-12 py-2 w-full placeholder:text-gray-600 outline-customBlue"
            />
            <button className="absolute text-customBlue right-10 px-4 text-xl">
              <FaSearch />
            </button>
          </div>
        )}

        {/* Iconițele din dreapta */}
        <div
          className={`flex gap-4 justify-end items-center mt-2 lg:mt-0 lg:w-1/4 w-3/5 ${
            pathname === "/" ? "text-customBlue" : "text-white"
          }`}
        >
          <button onClick={handleSearch}>
            {searchopen ? (
              <CgClose
                className={`w-8 h-8 lg:hidden ${
                  pathname === "/" ? "hidden" : "inline"
                }`}
              />
            ) : (
              <FaSearch
                className={`w-6 h-6 lg:hidden ${
                  pathname === "/" ? "hidden" : "inline"
                }`}
              />
            )}
          </button>
          <div
            className={`absolute top-12 left-0 w-full  bg-white lg:hidden transition-all duration-500 overflow-hidden ${
              searchopen ? "max-h-40" : "max-h-0"
            }`}
          >
            <div className="relative p-2 px-4">
              <input
                type="text"
                placeholder="Vreau să cumpăr..."
                className="rounded-md px-2 pr-9 py-2 w-full border border-customBlue text-gray-600 placeholder:text-gray-600 outline-4 outline-customBlue"
              />
              <button className="text-customBlue px-2 absolute right-4 top-5">
                <FaSearch className="text-xl" />
              </button>
            </div>
          </div>

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
                <SheetTitle className="border-b-2 border-customBlue sm:text-center sm:text-xl text-lg font-montserrat">
                  Categoriile noastre
                </SheetTitle>
                <SheetDescription>
                  {categories.map((category) => (
                    <Link href="/produse" key={category.id}>
                      <span className="flex items-center gap-2 text-xl text-black p-2 group font-poppins">
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
