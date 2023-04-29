import React from "react";
import arrow from "../../../assets/dashboard/vendor/arrow.svg";
import { useLocation } from "react-router-dom";
const Picker = ({ img, cat, placeholder }) => {
  const {pathname} = useLocation()
  return (
    <div className="px-[2rem] flex  items-center gap-4 ">
      <div className="h-full">
        <img src={img} alt="" className={`w-[40px] ${
        pathname == "/dashboard/available" && "w-[30px]"
      }`} />
      </div>
      <div>
        <span className="flex items-center gap-2">
          <h4 className={`font-[500] text-[1.2rem] ${
        pathname == "/dashboard/available" && "text-[1.1rem]"
      }`}>{cat}</h4>
          <img src={arrow} alt="" />
        </span>

        <p className={`font-thin text-[1.2rem] ${
        pathname == "/dashboard/available" && "text-[1rem]"
      }`}>{placeholder}</p>
      </div>
    </div>
  );
};

export default Picker;
