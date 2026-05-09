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
      <div className="bg-[#101625] flex justify-between px-[15px] items-center py-[10px] border-b-2 rounded-b-[30px] border-[#ffffff] relative z-50">
        {/* logo */}
        <div className=" bg-black w-[90px] flex justify-center items-center rounded-[10px] ">
          <img
            src="/logo-512.png"
            alt="logo"
            className=" rounded-lg object-cover h-[50px] "
          />
        </div>

        <div className="flex items-center gap-[30px]">
          <button onClick={() => setOpen(true)}>
            <MdMenuOpen className="text-[#ffffff]" size={30} />
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
                    href="https://yandex.uz/maps/-/CPcfa6k2"
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
                    href="https://www.instagram.com/bakhodir_watch/"
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
                    href="https://t.me/WatchAvenueTashkent"
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
              {/* <div className=" w-[95%] m-auto mt-[30px] ">
                <div className="  flex justify-center items-center flex-col ">
                  <a
                    href="https://www.instagram.com/maruf__mahkamov/"
                    target="_blank"
                    className=" border-[#9A7447] border-[3px] rounded-[22px] p-[10px] "
                  >
                    <img
                      src="https://instagram.ftas1-1.fna.fbcdn.net/v/t51.2885-19/505495171_17850907713475066_5010371811286718567_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.ftas1-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2gFHbiuskfYCiTABzdF2rpxRrEZ3-Zx-3qtwloOi2d6Hn-FEM_jf3GG_b5uKcPTBiz8&_nc_ohc=w-qf0D_abUkQ7kNvwHplOTy&_nc_gid=SL8igjYW1LBgMynJXGoX4w&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_Af5MDS1t61QJJ2_L-_ne1_XGGpcd1TIdfFLzoxtqT8eV0g&oe=6A04BFF5&_nc_sid=7a9f4b"
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
              </div> */}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
