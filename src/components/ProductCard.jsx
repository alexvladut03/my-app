import React from "react";
import { FaCartPlus, FaHeart, FaRegHeart } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useFavorites } from "@/utils/context/favorites-provider";

export default function ProductCard({ product }) {
  const { isFavorite, toggleFavorite } = useFavorites();

  return (
    <div className="border-2 border-black bg-white hover:border-customBlue rounded-md flex flex-col items-center p-2 relative">
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
        <p className="text-sm text-gray-500 border-b border-gray-500 pb-1">
          Vânzător: {product.shop}
        </p>
        <h2 className="font-bold line-clamp-2 overflow-hidden mt-1">
          {product.title}
        </h2>
        <p className="text-lg font-bold mt-1">{product.price} RON</p>
      </div>
      <button className="bg-customBlue text-white px-4 py-1 my-1 rounded-md">
        Cumpără acum
        <FaCartPlus className="w-6 h-6 inline ml-2" />
      </button>
    </div>
  );
}
