"use client";
import { useState, useEffect } from "react";
import { FaCartPlus, FaHeart, FaRegHeart } from "react-icons/fa";
import products from "../../../../data/products";
import { FaCodeCompare } from "react-icons/fa6";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useFavorites } from "@/utils/context/favorites-provider";
import ProductCard from "@/components/ProductCard";

export default function ProductPage({ params }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const { id } = await params;
      const foundProduct = products.find((p) => p.id.toString() === id);
      setProduct(foundProduct);
    };

    fetchProduct();
  }, [params]);

  const { isFavorite, toggleFavorite } = useFavorites();

  if (!product) {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold">Produsul nu a fost găsit.</h1>
      </div>
    );
  }

  return (
    <section className="bg-white max-w-7xl mx-auto">
      <Breadcrumb className="pt-5 border-b-2 border-gray-300 pb-2">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Acasa</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/produse">Produse</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/produse/${product.id}`}>
              {product.title}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-col md:flex-row gap-8 text-black py-6">
        <Image
          src={product.image}
          alt="Imagine produs"
          width={1500}
          height={1500}
          className="rounded-md p-4 w-1/4"
        />

        <div className="w-3/4">
          <div className="border-b-2 border-gray-300 mb-4">
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <h2 className="text-lg font-bold">Detalii:</h2>
            <p className="text-gray-500 mb-4">{product.title}</p>
            <p className="text-black font-semibold mb-4">
              Vândut de: {""}
              <span className="text-blue-500 underline">{product.shop}</span>
            </p>
          </div>
          <h3 className="text-2xl font-bold text-red-500">
            {product.price} RON{" "}
            <span className="text-sm text-gray-300">- TVA Inclus</span>
          </h3>
          <span className="text-sm text-gray-300">
            Cel mai mic preț găsit de noi
          </span>
          <div className="flex gap-4 mt-4">
            <button className="bg-customBlue text-white px-4 py-1 my-1 rounded-md">
              Cumpără acum
              <FaCartPlus className="w-6 h-6 inline ml-2" />
            </button>
            <button className="border border-gray-300 text-gray-700 px-4 py-1 my-1 rounded-md ">
              Compara
              <FaCodeCompare className="w-6 h-6 inline ml-2" />
            </button>
            <button
              onClick={() => toggleFavorite(product.id)}
              className="border border-gray-300 text-gray-700 px-4 py-1 my-1 rounded-md"
            >
              {isFavorite(product.id) ? (
                <FaHeart className="w-6 h-6 inline text-customBlue" />
              ) : (
                <FaRegHeart className="w-6 h-6 inline" />
              )}
            </button>
          </div>
          <h4 className="text-lg font-bold my-2">Alte Detalii:</h4>
          <p className="text-gray-400">Brand: Hankook</p>
          <p className="text-gray-400">Vânzător: {product.shop}</p>
        </div>
      </div>
      <div className="mt-6">
        <p className="text-gray-300">S-ar putea sa-ti placa si...</p>
        <h2 className="text-2xl font-bold text-black ">Produse similare</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
            slidesToScroll: 1,
          }}
          className="my-8"
        >
          <CarouselContent>
            {products.map((product) => (
              <CarouselItem
                key={product.id}
                className="md:basis-1/2 lg:basis-1/4"
              >
                <ProductCard product={product} />
                {console.log(product)}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
