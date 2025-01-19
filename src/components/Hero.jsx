import Link from "next/link";
import React from "react";
import { FaCartPlus, FaSearch } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export default function Hero() {
  return (
    <section className="flex bg-gradient-to-r from-customBlue from-20%  to-[#0263A8] to-100% flex-col gap-3 justify-center items-center lg:py-12 py-6 text-center px-4">
      <h1 className="lg:text-4xl text-2xl font-bold text-white">
        Compara. Cumpara. Economiseste.
      </h1>
      <h2 className="lg:text-lg text-md text-center lg:font-semibold mb-6 text-white">
        Gaseste cele mai bune oferte, compara produsele dorite si
        <br /> economiseste bani pe fiecare achizitie.
      </h2>
      <div className="relative w-full max-w-[410px] lg:w-96">
        <input
          type="text"
          placeholder="Vreau să cumpăr..."
          className="rounded-md px-2 py-2 lg:w-96 w-full placeholder:text-gray-600 outline-4 outline-customBlue"
        />
        <button className="text-customBlue px-2 absolute right-0 top-[10px]">
          <FaSearch className="text-xl" />
        </button>
      </div>
      <Link href="/produse">
        <button className="px-4 py-1 bg-white text-gray-600 rounded-md mt-3">
          Exploreaza produsele noastre
        </button>
      </Link>
      {/* <button
        className={`relative flex items-center justify-center rounded-l-xl rounded-lg w-72 bg-white font-semibold transition hover:scale-105 text-black`}
      >
        <div className="absolute left-0 h-full flex items-center justify-center w-12 bg-black rounded-l-lg rounded-br-2xl">
          <MdKeyboardDoubleArrowRight className="text-3xl text-white" />
        </div>
        <span className={`m-2 ml-[50px] text-black`}>
          Exploreaza produsele noastre
        </span>
      </button>
      <button className="relative w-72 flex items-center justify-center gap-2 rounded-lg bg-white font-semibold h-9 group transition hover:scale-105 text-black hover:text-white">
        <div className="bg-black absolute top-0 left-0 h-full ease-out duration-200 w-10 rounded-lg px-2 group-hover:w-[100%] transition-width"></div>

        <div className="w-8 flex h-full justify-center absolute top-0 left-1 items-center">
          <MdKeyboardDoubleArrowRight className="text-3xl text-white" />
        </div>

        <span className=" text-center text-md z-10 ml-10">
          Exploreaza produsele noastre
        </span>
      </button> */}
    </section>
  );
}
