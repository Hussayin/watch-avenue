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
          className="fixed  top-0 right-0 w-full h-full z-[100000000000000] bg-[#101625] overflow-y-auto"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
        >
          {/* HEADER */}
          <div className=" py-[12px] px-[13px] mb-[15px] bg-[#0B0F1A] border-b-2 border-[#ffffff] ">
            <button
              onClick={closeModal}
              className=" text-[23px] flex justify-center items-center text-[#ffffff] font-cormorant font-bold "
            >
              {" "}
              <IoIosArrowBack /> Назад
            </button>
          </div>

          {/* CONTENT */}
          <div className=" flex-1 overflow-y-auto mb-[50px] ">
            <div className=" mx-[10px] flex justify-between items-center text-center m-auto ">
              <img
                src={product.countri}
                alt={product.aboutProduct}
                className=" h-[50px] bg-white rounded-lg "
              />
              <div className=" bg-[#0b0f18] border-white border-[1px] px-[10px] py-[13px] rounded-[12px] ">
                <h1 className=" font-sans">Есть в наличии</h1>
              </div>
            </div>
            {/* product images */}
            <div
              className={` mt-[60px] flex justify-center items-center  mb-[20px] w-[100%] m-auto`}
            >
              <img
                src={product.image}
                className=" object-contain h-[100%] w-[70%]  "
                alt={product.aboutProduct}
              />
            </div>
            {/* product Prices */}
            <div className="leading-7 text-center flex justify-center items-center flex-col ">
              <h4 className=" text-center text-[20px] font-mono font-bold">
                {product.price}$
              </h4>
              <h4 className="  text-red-600 text-[25px] font-mono font-bold">
                {(product.price * USD_TO_UZS).toLocaleString("uz-UZ")} so'm
              </h4>
              <h4 className="line-through text-center opacity-40 text-[15px] font-mono font-bold">
                {(product.demoPrice * USD_TO_UZS).toLocaleString("uz-UZ")} so'm
              </h4>
              <div className=" bg-green-800 m-auto mt-[7px] flex justify-center items-center w-[130px] text-center rounded-[8px] ">
                <h1 className=" font-mono font-bold px-[5px] text-center text-[13px] py-[2px] ">
                  {product.type}
                </h1>
              </div>
            </div>
            {/* Infos Product */}
            <div className=" mt-[40px]">
              {/* buy in out store */}
              <div className=" text-center ">
                <h1 className=" text-[20px] mb-[10px] ">Характеристики</h1>
                <p className=" text-[15px] font-sans ">
                  Купить {product.design} {product.ref} в официальном магазине
                  Watch Avenue. Выбрать и заказать часы {product.design} - цена,
                  официальная гарантия, доставка по Uzbekistan. Покупку можно
                  оформить онлайн, выбрав для получения товара доставку или
                  официальный бутик, сделав заказ на самовывоз.
                </p>
              </div>
              {/* short infos */}
              <div className=" mt-[20px] px-[10px] ">
                <h3>-{product.design}</h3>
                <h3>-Ref: {product.ref}</h3>
                <h3>-Диаметр: {product.size}</h3>
                <h3>-{product.heart}</h3>
                <h3>-Cтекло: {product.glass}</h3>
                <h3>-Пол: {product.gender}</h3>
                <h3>-{product.rim}</h3>
                <h3>-Водонепроницаемость: {product.atm}</h3>
                <h3>Страна производитель: {product.made}</h3>
                <h3>-{product.garant}</h3>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProductModal;
