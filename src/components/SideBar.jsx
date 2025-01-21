import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Range } from "react-range";
import categories from "../../data/categories";
import brands from "../../data/brands";
import sellers from "../../data/sellers";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function SideBar() {
  const [priceRange, setPriceRange] = useState([10, 99]);
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [isBrandOpen, setIsBrandOpen] = useState(false);
  const [isSellerOpen, setIsSellerOpen] = useState(false);

  const STEP = 1;
  const MIN = 0;
  const MAX = 200;

  const handlePriceChange = (values) => {
    setPriceRange(values);
  };

  return (
    <div className="lg:pr-4 text-gray-800">
      <h2 className="text-lg font-semibold font-montserrat">
        Interval de preț
      </h2>
      <div className="mt-4">
        <Range
          step={STEP}
          min={MIN}
          max={MAX}
          values={priceRange}
          onChange={handlePriceChange}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              className="h-1 bg-gray-300 rounded-full relative"
              style={props.style}
            >
              <div
                className="h-1 bg-blue-500 absolute rounded-full"
                style={{
                  left: `${((priceRange[0] - MIN) / (MAX - MIN)) * 100}%`,
                  right: `${
                    100 - ((priceRange[1] - MIN) / (MAX - MIN)) * 100
                  }%`,
                }}
              />
              {React.Children.map(children, (child, index) =>
                React.cloneElement(child, { key: `track-${index}` })
              )}
            </div>
          )}
          renderThumb={({ props, index }) => (
            <div
              {...props}
              key={`thumb-${index}`}
              className="h-4 w-4 bg-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-700"
            />
          )}
        />
      </div>
      <div className="flex justify-between items-center mt-4 text-md border-b-2 border-gray-300 pb-4 font-poppins">
        <span>
          Pret: {priceRange[0]} RON - {priceRange[1]} RON
        </span>
        <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
          FILTREAZĂ
        </button>
      </div>

      {/* Filtrare după categorie */}
      <div className="mt-4 border-b-2 border-gray-300 pb-4 ml-2">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold font-montserrat">
            Filtrează după categorie
          </h3>
          <div
            onClick={() => setIsCategoryOpen(!isCategoryOpen)}
            className="cursor-pointer"
          >
            {isCategoryOpen ? (
              <FaMinus className="text-blue-500" />
            ) : (
              <FaPlus className="text-blue-500" />
            )}
          </div>
        </div>
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isCategoryOpen ? "max-h-40" : "max-h-0"
          }`}
        >
          <input
            type="text"
            placeholder="Cauta categorie"
            className="rounded-md px-2 font-poppins py-1 w-full bg-gray-300 placeholder:text-gray-900 outline-customBlue border-2 border-gray-500 mb-2"
          />
          <div className="flex flex-col max-h-36 overflow-y-scroll">
            {categories.map((category, index) => (
              <label key={index} className="flex items-center space-x-2">
                <Checkbox className="h-4 w-4" />
                <span className="font-poppins">{category.name}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Filtrare după brand */}
      <div className="mt-4 border-b-2 border-gray-300 pb-4 ml-2">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold font-poppins">
            Filtrează după brand
          </h3>
          <div
            onClick={() => setIsBrandOpen(!isBrandOpen)}
            className="cursor-pointer"
          >
            {isBrandOpen ? (
              <FaMinus className="text-blue-500" />
            ) : (
              <FaPlus className="text-blue-500" />
            )}
          </div>
        </div>
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isBrandOpen ? "max-h-40" : "max-h-0"
          }`}
        >
          <input
            type="text"
            placeholder="Cauta brand"
            className="rounded-md font-poppins px-2 py-1 w-full bg-transparent placeholder:text-gray-900 outline-customBlue border-2 border-gray-500 mb-2"
          />
          <div className="flex flex-col max-h-36 overflow-y-scroll">
            {brands.map((brand, index) => (
              <label key={index} className="flex items-center space-x-2">
                <Checkbox className="h-4 w-4" />
                <span className="font-poppins">{brand}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Filtrare după vânzător */}
      <div className="mt-4 border-b-2 border-gray-300 pb-4 ml-2">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold font-poppins">
            Filtrează după vânzător
          </h3>
          <div
            onClick={() => setIsSellerOpen(!isSellerOpen)}
            className="cursor-pointer"
          >
            {isSellerOpen ? (
              <FaMinus className="text-blue-500" />
            ) : (
              <FaPlus className="text-blue-500" />
            )}
          </div>
        </div>
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isSellerOpen ? "max-h-40" : "max-h-0"
          }`}
        >
          <input
            type="text"
            placeholder="Cauta vanzator"
            className="rounded-md font-poppins px-2 py-1 w-full bg-gray-300 placeholder:text-gray-900 outline-customBlue border-2 border-gray-500 mb-2"
          />
          <div className="flex flex-col max-h-36 overflow-y-scroll">
            {sellers.map((seller, index) => (
              <label key={index} className="flex items-center space-x-2">
                <Checkbox className="h-4 w-4" />
                <span className="font-poppins">{seller}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
