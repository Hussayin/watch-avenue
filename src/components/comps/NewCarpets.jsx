import React, { useContext, useState } from "react";
import { Carpets } from "../DataBasee/AllProducts"; // yo‘lingni o‘zingga mosla
import ProductModal from "./ProductModal";
import { motion } from "framer-motion";
import { TelegramContext } from "../context/TelegramContext";

const NewCarpets = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { sendToTelegram } = useContext(TelegramContext);

  // 🔹 Barcha davlatlardagi productlarni bitta arrayga yig‘amiz
  const allProducts = Object.values(Carpets).flat();

  const handleProductClick = (product) => {
    sendToTelegram(product);
    setSelectedProduct(product);
  };

  return (
    <div className="mt-[20px] m-auto w-[95%] ">
      {/* text */}
      <h3 className="font-cormorant font-bold text-[30px]">Hовые товары:</h3>

      {/* products */}
      <div className=" grid grid-cols-2  mt-[10px] gap-[13px]">
        {allProducts.map((product) => (
          <div
            key={product.id}
            className="bg-[#0B0F1A] flex flex-col border-2 border-white rounded-[10px] cursor-pointer"
            onClick={() => handleProductClick(product)}
          >
            {/* image */}
            <div className="w-[95%] m-auto mt-[7px]">
              <motion.img
                src={product.image}
                alt={product.aboutProduct}
                className="h-[260px] rotate-90 "
                initial={{ opacity: 0, filter: "blur(12px)", scale: 1.05 }}
                animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </div>

            {/* price */}
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
                className="h-[25px] object-cover "
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
  );
};

export default NewCarpets;

//! 90° o‘ngga aylantirish (Right)
// <img
//   src="/images/carpet.webp"
//   className="rotate-90"
// />

//! 90° chapga aylantirish (Left)
// <img
//   src="/images/carpet.webp"
//   className="-rotate-90"
// />

//! 180° aylantirish (teskari)
// <img
//   src="/images/carpet.webp"
//   className="rotate-180"
// />

//! Umuman aylantirmaslik (default)
// <img
//   src="/images/carpet.webp"
//   className="rotate-0"
// />

//! Gorizontal ag‘darish (chap ↔ o‘ng flip)
// <img
//   src="/images/carpet.webp"
//   className="scale-x-[-1]"
// />

//! Vertikal ag‘darish (tepasi ↔ pasti)
// <img
//   src="/images/carpet.webp"
//   className="scale-y-[-1]"
// />

//! Aylantirib + markazga moslash (ENG KERAKLI) Agar rasm joyidan chiqib ketayotgan bo‘lsa:
// <img
//   src="/images/carpet.webp"
//   className="rotate-90 object-contain w-full h-full"
// />

//! Dynamic qilish (button bilan boshqarish)
// const [rotate, setRotate] = useState(0);
// <img
//   src="/images/carpet.webp"
//   className={`transition-transform duration-300 rotate-[${rotate}deg]`}
// />
// <button onClick={() => setRotate(rotate + 90)}>Aylantir</button>
