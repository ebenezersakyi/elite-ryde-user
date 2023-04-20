import React from "react";
import { useState } from "react";
import img from "../../../assets/dashboard/vendor/arrow.svg";
const Dropdown = ({category, options}) => {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className="w-fit">
      <h4 className="text-[1.2rem] mb-4">{category}:</h4>
      <div
        className="px-[10px] py-2 capitalize border-2 relative rounded-md border-[#fff] flex gap-4  justify-between cursor-pointer w-[100%]"
        onClick={() => {
          setShow(!show);
        }}
      >
        {selected}
        <img
          src={img}
          alt=""
          className={`${show && "rotate-180"} cursor-pointer duration-300`}
        />
        {/* options */}
        {show && (
          <div className="absolute top-[100%] py-4 mt-2 backdrop-blur-[12px] rounded-md border-[#fff] border-[1px]  w-fit left-0 flex flex-col px-2">
            {options.map((elem, inx) => {
              return (
                <p
                  className="hover:bg-[#000] duration-500 capitalize text-[1rem] w-fit p-2"
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
