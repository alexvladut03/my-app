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
    <section className="bg-white max-w-7xl lg:mx-auto mx-4">
      <Breadcrumb className="truncate pt-5 border-b-2 border-gray-300 pb-2 font-montserrat">
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
      <div className="flex flex-col md:flex-row gap-8 text-black py-6 items-center lg:items-start">
        <Image
          src={product.image}
          alt="Imagine produs"
          width={1500}
          height={1500}
          className="lg:p-4 lg:w-1/4 w-2/4"
        />

        <div className="lg:w-3/4">
          <div className="border-b-2 border-gray-300 mb-4">
            <h1 className="lg:text-2xl text-xl font-bold mb-4 font-montserrat">
              {product.title}
            </h1>
            <h2 className="text-lg font-bold font-montserrat">Detalii:</h2>
            <p className="text-gray-500 mb-4 font-poppins">{product.title}</p>
            <p className="text-black font-semibold mb-4 font-montserrat">
              Vandut de: {""}
              <span className="text-blue-500 underline font-popins">
                {product.shop}
              </span>
            </p>
          </div>
          <h3 className="text-2xl font-semibold text-red-500 font-montserrat">
            {product.price} RON{" "}
            <span className="text-sm text-gray-500 font-poppins font-normal">
              - TVA Inclus
            </span>
          </h3>
          <span className="text-sm text-gray-500 font-poppins">
            Cel mai mic preț găsit de noi
          </span>
          <div className="lg:flex grid grid-cols-2 gap-1 mt-4">
            <button className="bg-customBlue col-span-2 text-white px-4 py-2 my-1 rounded-md font-poppins">
              <FaCartPlus className="w-5 h-5 inline mr-2" />
              Cumpără acum
            </button>
            <div className="col-span-2 flex gap-4">
              <button className="border border-gray-300 w-3/4 text-gray-700 px-4 py-2 my-1 rounded-md font-poppins">
                <FaCodeCompare className="w-5 h-5 inline mr-2" />
                Compara
              </button>
              <button
                onClick={() => toggleFavorite(product.id)}
                className="border border-gray-300 w-1/4 text-gray-700 px-4 py-2 my-1 rounded-md"
              >
                {isFavorite(product.id) ? (
                  <FaHeart className="w-5 h-5 inline text-customBlue" />
                ) : (
                  <FaRegHeart className="w-5 h-5 inline" />
                )}
              </button>
            </div>
          </div>
          <h4 className="text-lg font-bold my-2 font-montserrat">
            Alte Detalii:
          </h4>
          <p className="text-gray-500 font-poppins">Brand: Hankook</p>
          <p className="text-gray-500 font-poppins">Vânzător: {product.shop}</p>
        </div>
      </div>
      <div className="mt-6 border-t-2 pt-4 border-gray-300">
        <p className="text-gray-500 font-poppins">
          S-ar putea sa-ti placa si...
        </p>
        <h2 className="text-2xl font-bold text-black font-montserrat">
          Produse similare
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
            slidesToScroll: 1,
          }}
          className="my-8"
        >
          <CarouselContent className="m-2">
            {products.map((product) => (
              <CarouselItem
                key={product.id}
                className="basis-1/2 md:basis-1/3 lg:basis-1/3 xl:basis-1/4"
              >
                <ProductCard product={product} />
                {console.log(product)}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="customScreenBreak:block hidden" />
          <CarouselNext className="customScreenBreak:block hidden" />
        </Carousel>
      </div>
    </section>
  );
}
