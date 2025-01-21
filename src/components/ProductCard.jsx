import React from "react";
import { FaCartPlus, FaHeart, FaRegHeart } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useFavorites } from "@/utils/context/favorites-provider";

export default function ProductCard({ product }) {
  const { isFavorite, toggleFavorite } = useFavorites();

  return (
    <div className=" shadow-sm shadow-gray-300 bg-white hover:shadow-customBlue rounded-md flex flex-col items-center p-2 relative">
      <Link href={`/produse/${product.id}`}>
        <Image
          src={product.image}
          alt={product.title}
          width={250}
          height={250}
          className="object-cover rounded-md p-4"
        />
      </Link>
      <button
        onClick={() => toggleFavorite(product.id)}
        className="ml-5 absolute top-0 right-0 mt-2 mr-2"
      >
        {isFavorite(product.id) ? (
          <FaHeart className="w-6 h-6 text-customBlue" />
        ) : (
          <FaRegHeart className="w-6 h-6" />
        )}
      </button>
      <div className="text-center">
        <p className="text-xs lg:text-sm text-gray-900 border-b border-gray-500 pb-1 font-montserrat">
          {product.shop}
        </p>
        <Link href={`/produse/${product.id}`}>
          <h2 className="font-light text-sm line-clamp-2 overflow-hidden mt-1 text-gray-800 font-montserrat">
            {product.title}
          </h2>
        </Link>
        <p className="text-lg font-semibold mt-1">
          {product.price} <span className="text-xs font-thin">RON</span>
        </p>
      </div>
      <Link href="https://emag.ro/" target="_blank">
        <button className="bg-customBlue hover:bg-blue-600 text-white  px-8 py-1 my-1 rounded-md text-sm sm:text-base font-montserrat">
          Cumpără
        </button>
      </Link>
    </div>
  );
}
