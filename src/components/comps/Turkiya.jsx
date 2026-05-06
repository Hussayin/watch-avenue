import React, { useContext, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import ProductModal from "./ProductModal";
import { Carpets } from "../DataBasee/AllProducts"; // 🔴 yo‘lni tekshir
import { TelegramContext } from "../context/TelegramContext";

const Turkiya = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeType, setActiveType] = useState("all");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const { sendToTelegram } = useContext(TelegramContext);

  // 🔹 FAQAT ERON MAHSULOTLARI
  const eronProducts = Carpets.Turkiya;

  // 🔹 TYPE FILTER
  const filteredByType =
    activeType === "all"
      ? eronProducts
      : eronProducts.filter((product) => product.typeProduct === activeType);

  // 🔹 PRICE FILTER
  const filteredProducts = filteredByType.filter((product) => {
    const price = product.price;
    const min = minPrice ? Number(minPrice) : 0;
    const max = maxPrice ? Number(maxPrice) : Infinity;
    return price >= min && price <= max;
  });

  const handleProductClick = (product) => {
    sendToTelegram(product);
    setSelectedProduct(product);
  };

  return (
    <div>
      {/* EXIT */}
      <div className="border-b-2 border-b-[#9e7746] rounded-b-[30px] bg-white">
        <NavLink
          to="/"
          className="py-[13px] px-[10px] flex items-center gap-[3px]"
        >
          <IoIosArrowBack className="text-[#9e7746]" />
          <h3 className="font-cormorant text-[23px] text-[#9e7746] font-bold">
            Назад
          </h3>
        </NavLink>
      </div>

      {/* FILTERS + PRODUCTS */}
      <div className="mt-[10px] m-auto w-[95%] mb-[70px]">
        {/* TYPE FILTER */}
        <div className="flex gap-[5px] mb-[10px] flex-wrap">
          {["all", "Kvadratniy", "oval", "km", "daroshka"].map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={`px-4 font-cormorant font-bold py-1 rounded-full text-[15px] transition-all duration-300
        ${
          activeType === type
            ? "bg-[#9A7447] text-white shadow-md"
            : "bg-white text-[#9A7447] border border-[#9A7447]"
        }
      `}
            >
              {type}
            </button>
          ))}
        </div>

        {/* PRICE FILTER */}
        <div className="flex items-center gap-4 mt-[10px] w-[100%] mb-[15px] m-auto">
          <input
            type="number"
            placeholder="Min price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="w-full rounded-[10px] border-[#9A7447] border-[2px] font-cormorant font-bold px-[5px] py-[5px] text-black"
          />
          <input
            type="number"
            placeholder="Max price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-full rounded-[10px] border-[#9A7447] border-[2px] px-[5px] py-[5px] font-cormorant font-bold text-black"
          />
        </div>

        {/* PRODUCTS */}
        <div className="grid grid-cols-2 gap-[13px]">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white flex flex-col border-2 border-[#9A7447] rounded-[10px] cursor-pointer"
              onClick={() => handleProductClick(product)}
            >
              {/* IMAGE */}
              <div className="w-[95%] m-auto mt-[7px]">
                <motion.img
                  src={product.image}
                  alt={product.aboutProduct}
                  className="h-[260px]"
                  initial={{ opacity: 0, filter: "blur(12px)", scale: 1.05 }}
                  animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              </div>

              {/* PRICE */}
              <div className="m-[7px] flex justify-between">
                <div className="leading-5">
                  <h3 className="text-[17px] font-mono font-bold whitespace-nowrap">
                    {product.price.toLocaleString("de-DE")}$
                  </h3>
                  <h4 className="line-through text-[12px] font-mono font-bold whitespace-nowrap">
                    {product.demoPrice.toLocaleString("de-DE")}$
                  </h4>
                </div>

                <img
                  src={product.countri}
                  alt="country"
                  className="h-[25px] object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* MODAL */}
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            closeModal={() => setSelectedProduct(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Turkiya;
