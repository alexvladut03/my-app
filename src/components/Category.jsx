import React from "react";
import categories from "../../data/categories";
import Link from "next/link";

export default function Category() {
  return (
    <section className="bg-[#F7F7F7] px-4">
      <div className=" flex flex-col items-center justify-center py-10 max-w-7xl mx-auto">
        <h1 className="lg:text-4xl text-2xl text-black font-bold pb-10 text-center">
          Descopera Categoriile noastre
        </h1>
        <div className="grid lg:grid-cols-5 grid-cols-2 lg:gap-8 gap-6 mt-6">
          {categories.map((category) => (
            <Link href={`/produse`} key={category.id}>
              <div className="text-black flex flex-col items-center justify-center rounded-md shadow-md shadow-gray-300 group hover:shadow-customBlue lg:px-10 lg:py-4 p-3 lg:text-3xl text-xl">
                {React.createElement(category.icon)}
                <span className="relative text-black text-xl after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-customBlue after:transition-all after:duration-300 group-hover:after:w-full">
                  {category.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
