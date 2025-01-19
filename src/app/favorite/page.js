"use client";
import React from "react";
import { useFavorites } from "@/utils/context/favorites-provider";
import products from "../../../data/products";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ProductCard from "@/components/ProductCard";
export default function Favorite() {
  const { items } = useFavorites();
  const favoriteProducts = products.filter((product) =>
    items.includes(product.id)
  );

  return (
    <section className="bg-white shadow-md p-4 rounded-md text-center">
      <Breadcrumb className="max-w-7xl mx-auto pt-1 border-b-2 border-gray-300 pb-2">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Acasa</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/produse">Favorite</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="max-w-7xl mx-auto min-h-96 py-4">
        <h2 className="lg:text-4xl text-2xl font-semibold mb-2 text-black">
          Produse Favorite
        </h2>
        <p className="text-gray-600 mb-4 lg:text-lg text-md">
          Acces rapid la produsele tale favorite.
        </p>

        {favoriteProducts.length === 0 ? (
          <p className="text-red-500 mt-2">Lipsă produse.</p>
        ) : (
          <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-5 gap-4">
            {favoriteProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
