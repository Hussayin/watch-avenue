import React, { useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const ProductModal = ({ product, closeModal }) => {
  // 🔒 ORQA FON SCROLLNI O‘CHIRISH
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const USD_TO_UZS = 12300;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="fixed inset-0 bg-black/50 z-[100000000000000] "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* MODAL CONTENT */}
        <motion.div
          className="fixed  top-0 right-0 w-full h-full z-[100000000000000] bg-[#0B0F1A] overflow-y-auto"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
        >
          {/* HEADER */}
          <div className=" py-[12px] px-[13px] mb-[15px] border-b-2 border-[#9e7746] ">
            <button
              onClick={closeModal}
              className=" text-[23px] flex justify-center items-center text-[#9e7746] font-cormorant font-bold "
            >
              {" "}
              <IoIosArrowBack /> Назад
            </button>
          </div>

          {/* CONTENT */}
          <div className=" flex-1 overflow-y-auto mb-[50px] ">
            {/* name code */}
            <div className=" text-center m-auto ">
              <h1 className=" uppercase font-mono ">#{product.design}</h1>
            </div>
            <div
              className={`${product.rotate} mt-[20px]  mb-[20px] w-[100%] m-auto`}
            >
              <img
                src={product.image}
                className=" object-contain h-[100%] w-[120%]  "
                alt={product.aboutProduct}
              />
            </div>

            <div className=" flex flex-col justify-center gap-3 items-center mt-[15px] ">
              <img
                src={product.countri}
                alt={product.aboutProduct}
                className=" h-[20px] "
              />
              <h2 className=" font-cormorant font-bold text-[25px] leading-5 text-white ">
                {product.aboutProduct}
              </h2>
            </div>
            <div className="leading-6 text-center ">
              <h4 className=" text-[25px] font-mono font-bold">
                {(product.price * USD_TO_UZS).toLocaleString("uz-UZ")} so'm
              </h4>
              <h4 className="line-through text-center opacity-40 text-[15px] font-mono font-bold">
                {(product.demoPrice * USD_TO_UZS).toLocaleString("uz-UZ")} so'm
              </h4>
            </div>

            {/* RAZMERLAR */}
            <div className="flex flex-wrap px-[15px]  gap-[5px] mt-[25px] ">
              {product.typeProduct.map((size) => (
                <span
                  key={size}
                  className="text-[13px] font-mono font-bold px-2 py-[2px] bg-white text-black rounded-full"
                >
                  {size}
                </span>
              ))}
            </div>

            {/* <div className=" text-[#9e7746] font-bold text-[23px] mt-[10px] w-[95%] m-auto ">
              <p className=" font-cormorant ">Зичлиги: {product.zichligi}</p>
              <p className=" font-cormorant ">Материал: {product.material}</p>
              <p className=" font-cormorant ">
                Ип баландлиги: {product.ipBalandligi}
              </p>
            </div> */}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProductModal;
