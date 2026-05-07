import React, { useContext, useMemo, useState } from "react";
import { motion } from "framer-motion";
import ProductModal from "./ProductModal";
import { Carpets } from "../DataBasee/AllProducts";
import { TelegramContext } from "../context/TelegramContext";
import { IoPricetagsSharp } from "react-icons/io5";

const AllCarpets = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // 🔥 FILTER STATES
  const [activeCountry, setActiveCountry] = useState("All");
  const [activeSize, setActiveSize] = useState("All");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const USD_TO_UZS = 12300;

  const { sendToTelegram } = useContext(TelegramContext);

  // 🔹 BARCHA MAHSULOTLAR
  const allProducts = useMemo(() => Object.values(Carpets).flat(), []);

  // 🔹 AVTOMAT SIZE LIST (qo‘lda yozish yo‘q)
  const allSizes = useMemo(() => {
    const sizes = allProducts.flatMap((product) => product.typeProduct || []);
    return ["All", ...new Set(sizes)];
  }, [allProducts]);

  // 🔹 COUNTRY FILTER
  const filteredByCountry = useMemo(() => {
    if (activeCountry === "All") return allProducts;

    return allProducts.filter((product) =>
      product.id.toLowerCase().startsWith(activeCountry.toLowerCase())
    );
  }, [activeCountry, allProducts]);

  // 🔹 SIZE FILTER (ARRAY orqali)
  const filteredBySize = useMemo(() => {
    if (activeSize === "All") return filteredByCountry;

    return filteredByCountry.filter((product) =>
      product.typeProduct?.includes(activeSize)
    );
  }, [activeSize, filteredByCountry]);

  // 🔹 PRICE FILTER
  const filteredProducts = useMemo(() => {
    const min = minPrice ? Number(minPrice) : 0;
    const max = maxPrice ? Number(maxPrice) : Infinity;

    return filteredBySize.filter(
      (product) => product.price >= min && product.price <= max
    );
  }, [filteredBySize, minPrice, maxPrice]);

  const handleProductClick = (product) => {
    sendToTelegram(product);
    setSelectedProduct(product);
  };

  return (
    <div>
      <div className="mt-[10px] m-auto w-[97%] mb-[70px]">
        {/* HEADER */}
        <div className="flex rounded-[50%] flex-col items-center mb-[15px]">
          <img
            src="/logo-512.png"
            alt="logo"
            className="rounded-[50%] object-contain  h-[80px] w-[120px]"
          />
          <h1 className="text-[25px] font-cormorant">
            Watch Avenue - магазин часов.
          </h1>
        </div>

        {/* COUNTRY FILTER */}
        <div className="flex gap-[5px] mb-[10px] flex-wrap">
          {["All", "Original", "Clone", "LuxCopy"].map((country) => (
            <button
              key={country}
              onClick={() => setActiveCountry(country)}
              className={`px-4 py-1 rounded-full font-mono font-bold
                ${
                  activeCountry === country
                    ? "bg-white text-black shadow-md"
                    : "bg-[#0B0F1A] text-white border border-white"
                }`}
            >
              {country}
            </button>
          ))}
        </div>

        {/* SIZE FILTER (AVTOMAT) */}
        <div className="flex gap-[5px] overflow-x-auto mt-[15px] mb-[15px]">
          {allSizes.map((size) => (
            <button
              key={size}
              onClick={() => setActiveSize(size)}
              className={`px-4 py-1 rounded-full font-mono font-bold
                ${
                  activeSize === size
                    ? "bg-white text-black shadow-md"
                    : "bg-[#0B0F1A] text-white border border-white"
                }`}
            >
              {size}
            </button>
          ))}
        </div>

        {/* PRICE FILTER */}
        <div className="flex gap-4 mb-[13px]">
          <input
            type="number"
            placeholder="Min price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="w-full bg-[#0B0F1A] rounded-[10px] border-2 border-white border-opacity-70 px-2 py-1 text-white font-mono"
          />
          <input
            type="number"
            placeholder="Max price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-full bg-[#0B0F1A] rounded-[10px] border-2 border-white px-2 py-1 border-opacity-70 text-white font-mono"
          />
        </div>

        {/* PRODUCTS */}
        <div className=" grid grid-cols-2 justify-center items-center gap-[5px]">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`${product.abs}  bg-[#0B0F1A] border-[2px] border-opacity-50 w-[100%] p-[15px] border-white rounded-[10px] cursor-pointer`}
              onClick={() => handleProductClick(product)}
            >
              {/* logo */}
              {/* <div className=" flex justify-center items-center">
                <img
                  src={product.countri}
                  alt="country"
                  className=" bg-white h-[35px] rounded-[10px] "
                />
              </div> */}
              <div className={`w-[100%] m-auto mt-[7px]`}>
                <motion.img
                  src={product.image}
                  alt={product.aboutProduct}
                  className=" w-full object-contain h-[270px] "
                  initial={{ opacity: 0, filter: "blur(12px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.6 }}
                />
              </div>

              <div className="m-2 flex justify-center flex-col gap-[15px] items-center">
                <div className="leading-5">
                  <h4 className="text-center text-[15px] font-mono font-bold">
                    {product.price}$
                  </h4>
                  <h4 className=" text-red-600 text-[15px] font-mono font-bold">
                    {(product.price * USD_TO_UZS).toLocaleString("uz-UZ")} so'm
                  </h4>
                  <h4 className="line-through text-center opacity-40 text-[10px] font-mono font-bold">
                    {(product.demoPrice * USD_TO_UZS).toLocaleString("uz-UZ")}{" "}
                    so'm
                  </h4>
                </div>
              </div>
              {/* RAZMERLAR */}
              {/* <div className="flex overflow-x-auto  gap-[5px] mt-[15px] ">
                {product.typeProduct.map((size) => (
                  <span
                    key={size}
                    className="text-[13px] font-mono font-bold px-2 py-[2px] bg-white text-black rounded-full"
                  >
                    {size}
                  </span>
                ))}
              </div> */}
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

export default AllCarpets;
