import React from "react";
import { NavLink } from "react-router-dom";

const Controller = () => {
  return (
    <div className="fixed  w-[100%] bottom-0 z-[10000] ">
      <div className=" flex justify-center gap-[25px] pt-[10px] pb-[15px] px-[25px] items-center border-t-[3px] border-[#9A7447] rounded-t-[25px] bg-white ">
        <NavLink
          to="/"
          className=" w-[90%] py-[5px] px-[7px] text-center m-auto border-2 border-[#9A7447] rounded-[10px] font-cormorant "
        >
          <h3 className=" font-cormorant font-bold text-[15px] ">Home</h3>
        </NavLink>
        <NavLink
          to="/allCarpets"
          className=" w-[90%] py-[5px] px-[7px] text-center m-auto border-2 border-[#9A7447] rounded-[10px] font-cormorant  "
        >
          <h3 className=" font-cormorant font-bold text-[15px] ">
            All Carpets
          </h3>
        </NavLink>
      </div>
    </div>
  );
};

export default Controller;
