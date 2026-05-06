import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsInstagram } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { TbPhoneCall } from "react-icons/tb";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdSell } from "react-icons/md";
import { BsFillMoonStarsFill } from "react-icons/bs";

// icons
import { FaShoppingBasket } from "react-icons/fa";
import { MdMenuOpen, MdClose } from "react-icons/md";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <div className="bg-[#101625] flex justify-between px-[15px] items-center py-[10px] border-b-2 rounded-b-[30px] border-[#9A7447] relative z-50">
        {/* logo */}
        <div className=" bg-black w-[90px] flex justify-center items-center rounded-[10px] ">
          <img
            src="/logo-512.png"
            alt="logo"
            className=" rounded-lg object-cover h-[65px] "
          />
        </div>

        <div className="flex items-center gap-[30px]">
          <button onClick={() => setOpen(true)}>
            <MdMenuOpen className="text-[#c08d4f]" size={30} />
          </button>
        </div>
      </div>

      {/* OVERLAY */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* SIDE MENU */}
            <motion.div
              className="fixed top-0 right-0 h-full w-[100%] bg-[#101625] z-[1000000000] shadow-xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
            >
              {/* close button */}
              <div className="flex justify-end p-4">
                <button onClick={() => setOpen(false)}>
                  <MdClose size={28} className="text-[#9A7447]" />
                </button>
              </div>

              {/* menu items */}
              {/* Social medi and servise */}
              <div className=" w-[90%] m-auto  ">
                <div className=" flex justify-center mt-[30px] items-center flex-col gap-[20px]">
                  <motion.a
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      ease: "easeOut", // Easing funksiyasi
                      duration: 1, // Animatsiya davomiyligi
                      delay: 0.2,
                    }}
                    href="https://maps.app.goo.gl/hXmR8HnFqTpARHRU8"
                    target="_blank"
                    className=" flex justify-center bg-[#101625] text-[#9A7447] border-[#9A7447] font-bold items-center relative border-2 p-[7px] rounded-[15px] text-center font-cormorant text-[20px] w-[100%] "
                  >
                    Location
                    <FaMapLocationDot className=" absolute left-[15px] text-[30px]  " />
                  </motion.a>

                  <motion.a
                    initial={{ opacity: 0, x: 52 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      ease: "easeOut", // Easing funksiyasi
                      duration: 1, // Animatsiya davomiyligi
                      delay: 0.3,
                    }}
                    href="https://www.instagram.com/maruf__mahkamov/"
                    target="_blank"
                    className=" flex justify-center bg-[#101625] text-[#9A7447] border-[#9A7447] font-bold items-center relative border-2 p-[7px] rounded-[15px] text-center font-cormorant text-[20px] w-[100%] "
                  >
                    Instagram
                    <BsInstagram className=" absolute left-[15px] text-[30px]  " />
                  </motion.a>

                  <motion.a
                    initial={{ opacity: 0, x: 54 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      ease: "easeOut", // Easing funksiyasi
                      duration: 1, // Animatsiya davomiyligi
                      delay: 0.4,
                    }}
                    href="https://t.me/khusko077"
                    target="_blank"
                    className=" flex justify-center bg-[#101625] text-[#9A7447] border-[#9A7447] font-extrabold items-center relative border-2 p-[7px] rounded-[15px] text-center font-cormorant text-[20px] w-[100%] "
                  >
                    Telegram
                    <BsTelegram className=" absolute left-[15px] text-[30px]  " />
                  </motion.a>

                  <motion.a
                    initial={{ opacity: 0, x: 56 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      ease: "easeOut", // Easing funksiyasi
                      duration: 1, // Animatsiya davomiyligi
                      delay: 0.5,
                    }}
                    href="tel:+998977122206"
                    className=" flex justify-center bg-[#101625] text-[#9A7447] border-[#9A7447] font-bold items-center relative border-2 p-[7px] rounded-[15px] text-center  text-[20px] w-[100%] "
                  >
                    +998 90 077 07 28
                    <TbPhoneCall className=" absolute left-[15px] text-[30px]  " />
                  </motion.a>
                </div>
              </div>

              {/* funder image */}
              <div className=" w-[95%] m-auto mt-[30px] ">
                <div className="  flex justify-center items-center flex-col ">
                  <a
                    href="https://www.instagram.com/maruf__mahkamov/"
                    target="_blank"
                    className=" border-[#9A7447] border-[3px] rounded-[22px] p-[10px] "
                  >
                    <img
                      src="/maruf.jpg"
                      alt="funder"
                      className=" h-[320px] rounded-[20px] "
                    />
                  </a>
                  <div className=" text-center leading-7 mt-[10px] ">
                    <h1 className=" font-cormorant text-[27px] text-[#9A7447] font-extrabold ">
                      Maruf Mahkamov
                    </h1>
                    <h1 className=" font-cormorant text-[20px] text-[#9A7447] font-extrabold ">
                      Funder: Sanat Hali
                    </h1>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
