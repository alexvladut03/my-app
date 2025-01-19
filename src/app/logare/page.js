import React from "react";
import { SiVerizon } from "react-icons/si";
export default function LoginPage() {
  return (
    <section className="bg-white grid grid-cols-3">
      <div className="max-w-7xl col-start-2 p-4 border-2 m-6 rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-2 text-black">Contul Meu</h2>
        <p className="text-gray-600 mb-4">Accesează-ți contul personal.</p>
        <form className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              placeholder="Introdu un email valid"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md placeholder:text-gray-500"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Parolă:
            </label>
            <input
              type="password"
              id="password"
              placeholder="Introdu parola ta"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md placeholder:text-gray-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-red-600 flex items-center justify-center gap-2"
          >
            <span>Intră în Cont</span>
            <SiVerizon />
          </button>
          <div className=" flex justify-between">
            <div className="text-sm text-red-500 hover:underline">
              Recuperare Parolă
            </div>
            <div className="text-sm text-black hover:underline">
              Nu ai cont? Inregistrează-te acum.
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
