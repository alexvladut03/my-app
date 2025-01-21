import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white text-white py-8 flex flex-col items-center justify-center border-t-2 border-gray-400">
      <Image
        src="/LogoKLAUSNETIC.png"
        alt="Klikads Logo"
        width={500}
        height={500}
        className="w-56 h-12 mx-auto"
      />
      <button className="px-4 py-1 bg-customBlue text-white rounded-md my-6 font-poppins">
        <span className="opacity-80"> Obtine cea mai buna oferta</span>
      </button>
      <div className="flex lg:flex-row flex-col text-center text-black lg:gap-8 gap-2 font-poppins">
        <Link href="/politica-confidentialitate">
          <span>Politica Confidentialitate</span>
        </Link>
        <Link href={"/termeni-si-conditii"}>
          <span>Termeni si Conditii</span>
        </Link>
        <Link href={"/contact"}>
          <span>Contact</span>
        </Link>
        <Link href={"/faq"}>
          <span>Cum sa treci inapoi la google CSS?</span>
        </Link>
      </div>
    </footer>
  );
}
