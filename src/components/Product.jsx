"use client";
import React, { useState } from "react";
import products from "../../data/products";
import ProductCard from "./ProductCard";
import SideBar from "./SideBar";
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
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export default function Products() {
  const [openFilter, setOpenFilter] = useState(false);

  const handleFilter = () => {
    setOpenFilter(true);
  };

  const closeFilter = () => {
    setOpenFilter(false);
  };

  return (
    <section className="bg-[#F7F7F7] px-4 lg:px-0">
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

      <div className="max-w-7xl flex mx-auto lg:py-10 py-4">
        <div className="hidden lg:block w-1/4">
          <SideBar />
        </div>

        <main className="lg:w-3/4 text-black">
          <h1 className="text-2xl font-semibold text-customBlue block lg:hidden mb-2">
            Cautarea ta
          </h1>
          <div className="flex items-center justify-between gap-4 rounded-md">
            <h1 className="text-2xl font-semibold text-customBlue hidden lg:block">
              Cautarea ta
            </h1>
            <Select>
              <SelectTrigger className="lg:hidden" onClick={handleFilter}>
                <SelectValue placeholder="Filtrare" />
              </SelectTrigger>
            </Select>

            <Sheet open={openFilter} onOpenChange={setOpenFilter}>
              <SheetContent side="bottom" className="h-2/3 overflow-y-scroll">
                <SheetHeader>
                  <SheetTitle>Filtrare Produse</SheetTitle>
                </SheetHeader>
                <SideBar />
              </SheetContent>
            </Sheet>
            <Select>
              <SelectTrigger className="lg:w-[228px]">
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

          <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 mt-6 ">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
      </div>
    </section>
  );
}
