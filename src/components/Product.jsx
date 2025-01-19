"use client";
import React, { useState } from "react";
import categories from "../../data/categories";
import products from "../../data/products";
import brands from "../../data/brands";
import { Range } from "react-range";
import sellers from "../../data/sellers";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Checkbox } from "@/components/ui/checkbox";
import ProductCard from "./ProductCard";

export default function Products() {
  const [priceRange, setPriceRange] = useState([10, 99]);
  const STEP = 1;
  const MIN = 0;
  const MAX = 200;

  const handlePriceChange = (values) => {
    setPriceRange(values);
  };

  return (
    <section className=" bg-[#F7F7F7]">
      <Breadcrumb className="max-w-7xl mx-auto pt-5 border-b-2 border-gray-300 pb-2">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Acasa</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/produse">Produse</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="max-w-7xl flex mx-auto py-10">
        <div className="pr-4 w-1/4 text-gray-800">
          <h3 className="text-lg font-semibold">Interval de preț</h3>
          <div className="mt-4">
            <Range
              step={STEP}
              min={MIN}
              max={MAX}
              values={priceRange}
              onChange={handlePriceChange}
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  className="h-1 bg-gray-300 rounded-full relative"
                  style={props.style}
                >
                  <div
                    className="h-1 bg-blue-500 absolute rounded-full"
                    style={{
                      left: `${((priceRange[0] - MIN) / (MAX - MIN)) * 100}%`,
                      right: `${
                        100 - ((priceRange[1] - MIN) / (MAX - MIN)) * 100
                      }%`,
                    }}
                  />
                  {React.Children.map(children, (child, index) =>
                    React.cloneElement(child, { key: `track-${index}` })
                  )}
                </div>
              )}
              renderThumb={({ props, index }) => (
                <div
                  {...props}
                  key={`thumb-${index}`}
                  className="h-4 w-4 bg-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-700"
                />
              )}
            />
          </div>
          <div className="flex justify-between items-center mt-4 text-sm border-b-2 border-gray-300 pb-4">
            <span>
              Pret: {priceRange[0]} RON - {priceRange[1]} RON
            </span>
            <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
              FILTREAZĂ
            </button>
          </div>

          {/* Filtrare după categorie */}

          <div className="mt-4 border-b-2 border-gray-300 pb-4 ml-2">
            <h3 className="text-lg font-semibold mb-2">
              Filtrează după categorie
            </h3>
            <input
              type="text"
              placeholder="Cauta categorie"
              className="rounded-md px-2 py-1 w-full bg-gray-300 placeholder:text-gray-900 outline-customBlue border-2 border-gray-500"
            />
            <div className="flex flex-col mt-4 max-h-36 overflow-y-scroll">
              {categories.map((category, index) => (
                <label key={index} className="flex items-center space-x-2">
                  <Checkbox className="h-4 w-4" />
                  <span>{category.name}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Filtrare după brand */}
          <div className="mt-4 border-b-2 border-gray-300 pb-4 ml-2">
            <h3 className="text-lg font-semibold  mb-2">
              Filtrează după brand
            </h3>
            <input
              type="text"
              placeholder="Cauta brand"
              className="rounded-md px-2 py-1 w-full bg-gray-300 placeholder:text-gray-900 outline-customBlue border-2 border-gray-500"
            />
            <div className="flex flex-col mt-4 max-h-36 overflow-y-scroll">
              {brands.map((brand, index) => (
                <label key={index} className="flex items-center space-x-2">
                  <Checkbox className="h-4 w-4" />
                  <span>{brand}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Filtrare după vânzător */}
          <div className="mt-4 border-b-2 border-gray-300 pb-4 ml-2">
            <h3 className="text-lg font-semibold mb-2">
              Filtrează după vânzător
            </h3>
            <input
              type="text"
              placeholder="Cauta vanzator"
              className="rounded-md px-2 py-1 w-full bg-gray-300 placeholder:text-gray-900 outline-customBlue border-2 border-gray-500"
            />
            <div className="flex flex-col mt-4 max-h-36 overflow-y-scroll">
              {sellers.map((seller, index) => (
                <label key={index} className="flex items-center space-x-2">
                  <Checkbox className="h-4 w-4" />
                  <span>{seller}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <main className="w-3/4 text-black">
          <div className="flex items-center justify-between bg-gray-300 rounded-md p-3">
            <h1 className="text-xl font-semibold text-customBlue">
              Cautarea ta
            </h1>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sortare" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="De la A la Z">De la A la Z</SelectItem>
                <SelectItem value="Pret crescator">Pret crescator</SelectItem>
                <SelectItem value="Pret descrescator">
                  Pret descrescator
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-4 gap-4 mt-6 ">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
      </div>
    </section>
  );
}
