import React from "react";
import { NavLink } from "react-router-dom";

const Countries = () => {
  return (
    <div className=" mt-[20px] flex justify-center items-center ">
      <div className=" w-[95%] px-[15px] py-[10px] border-2 rounded-[20px] border-[#9A7447] bg-white flex justify-between items-center flex-wrap">
        {/* eron */}
        <NavLink
          to="/eron"
          className=" flex flex-col justify-center items-center "
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/500px-Flag_of_Iran.svg.png"
            alt="Eron gilamlar"
            className=" h-[60px] w-[60px] rounded-[50%] object-cover "
          />
          <h3 className=" font-cormorant font-bold ">Иран</h3>
        </NavLink>
        {/* Turkiya */}
        <NavLink
          to="/turkiya"
          className=" flex flex-col justify-center items-center "
        >
          <img
            src="https://cdn.britannica.com/82/4782-050-8129909C/Flag-Turkey.jpg"
            alt="Eron gilamlar"
            className=" h-[60px] w-[60px] rounded-[50%] object-cover"
          />
          <h3 className=" font-cormorant font-bold ">Турция</h3>
        </NavLink>
      </div>
    </div>
  );
};

export default Countries;

// Assalamu alekum
