import React from "react";
import { useState } from "react";
import img from "../../../assets/dashboard/vendor/arrow.svg";
import { useLocation } from "react-router-dom";
const Dropdown = ({category, options}) => {
  const{pathname} = useLocation()
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className={`${pathname == '/dashboard/available' && ''} w-full`}>
      <h4 className={`${pathname == '/dashboard/available' && 'text-[1rem]'} truncate text-[1.2rem] font-medium mb-4`}>{category}:</h4>
      <div
        className={`${pathname == '/dashboard/available' && 'text-[0.95rem] px-2 py-[0.3rem] gap-2'} px-[10px] py-2 capitalize border-2 relative rounded-md border-[#fff] flex gap-4  justify-between cursor-pointer w-[100%]`}
        onClick={() => {
          setShow(!show);
        }}
      >
        <p className="truncate">{selected}</p>
        <img
          src={img}
          alt=""
          className={`${show && "rotate-180"} cursor-pointer duration-300`}
        />
        {/* options */}
        {show && (
          <div className="absolute top-[100%] z-[100] bg-[#fff] text-[#000] max-h-[120px] overflow-y-auto py-1 mt-2 backdrop-blur-[12px] divide-y-[1px] rounded-md border-[#fff] border-[1px]  w-full left-0 flex flex-col px-2">
            {options.map((elem, inx) => {
              return (
                <p
                  className="cursor-pointer capitalize text-[1rem] p-2 text-ellipsis"
                  key={inx}
                  onClick={() => {
                    setSelected(elem);
                  }}
                >
                  {elem}
                </p>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
