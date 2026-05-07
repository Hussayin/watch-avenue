import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const logos = [
  "https://i0.wp.com/diamondsourcenyc.com/wp-content/uploads/2025/08/rolex-logo-.webp?w=1024&ssl=1",
  "https://1000logos.net/wp-content/uploads/2018/10/Omega-logo-768x432.png",
  "https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Fr%C3%A9d%C3%A9rique_Constant_Logo.svg/1280px-Fr%C3%A9d%C3%A9rique_Constant_Logo.svg.png?_=20241228022051",
  "https://1000logos.net/wp-content/uploads/2018/10/Tissot-Logo-768x432.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/TAG_Heuer_Logo.svg/500px-TAG_Heuer_Logo.svg.png",
  "https://images.seeklogo.com/logo-png/8/1/longines-logo-png_seeklogo-85484.png",
];

const logoss = [
  "/milatLogo.jpg",
  "/kartaLogo.jpg",
  "/milatCarpet.jpg",
  "/elexsusLogo.jpg",
  "/samerkentLogo.jpg",
  "/sanatHaliLogo.jpg",
  "/gilamMakonLogo.jpg",
];

const EnterComp = () => {
  return (
    <div className="bg-[#101625] h-[90vh] mt-[27px] flex items-center">
      {/* ASOSIY CONTAINER */}
      <div className="w-full mb-[40px] flex flex-col gap-[25px]">
        {/* tanishtiruv */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            ease: "easeOut", // Easing funksiyasi
            duration: 1, // Animatsiya davomiyligi
            delay: 0.2,
          }}
          className="w-[90%] mx-auto text-center"
        >
          <h1 className="text-[24px] text-[#ffffff] font-bold leading-6 font-cormorant">
            Более 10 лет экспертного опыта в мире элитных часов
          </h1>
        </motion.div>

        {/* brend egasi */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            ease: "easeOut", // Easing funksiyasi
            duration: 1, // Animatsiya davomiyligi
            delay: 0.2,
          }}
          className="text-center px-[17px] gap-[10px] flex justify-center items-center flex-col "
        >
          <div className="">
            <img
              src="/logo-512.png"
              alt=""
              className=" h-[150px] rounded-[30px] "
            />
          </div>
          <h1 className="text-[23px] leading-6 text-[#ffffff] font-cormorant font-bold mt-2">
            Watch Avenue — магазин часов. <br /> Продаём оригинальные часы,
            модели 1:1 и качественные копии. Также вы можете продать свои часы
            по выгодной цене. Качество и доверие — наш приоритет.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            ease: "easeOut", // Easing funksiyasi
            duration: 1, // Animatsiya davomiyligi
            delay: 0.2,
          }}
          className=" flex justify-center gap-[10px] items-center "
        >
          <div
            onClick={() => {
              document.getElementById("shop")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className=" bg-[#ffffff] rounded-[22px] "
          >
            <h3 className=" text-black font-bold font-serif text-[20px] px-[15px]  py-[8px] ">
              Купить
            </h3>
          </div>
          <div
            onClick={() => {
              document.getElementById("signup")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className=" bg-[#ffffff] rounded-[22px] "
          >
            <h3 className=" text-black font-bold font-serif text-[20px] px-[15px]  py-[8px] ">
              Продать
            </h3>
          </div>
        </motion.div>

        {/* LOGO SLIDER */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeOut", // Easing funksiyasi
            duration: 1, // Animatsiya davomiyligi
            delay: 0.2,
          }}
          className="w-full overflow-hidden mt-[15px] bg-[#00000029] py-[12px]"
        >
          <div className="flex w-max animate-marquee gap-[30px]">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[150px]"
              >
                <img
                  src={logo}
                  alt="logo"
                  className="h-[70px] object-cover bg-white opacity-90 transition p-[5px] rounded-[5px] "
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EnterComp;
