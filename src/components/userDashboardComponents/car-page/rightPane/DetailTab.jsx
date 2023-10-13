import React from "react";
import { Icon } from "@iconify/react";
const DetailTab = ({ icon, title, value }) => {
  return (
    <div
      className={`border-bgrey border-[1px] px-4 py-2 w-[300px] max-w-[100%] overflow-hidden m-[5px] flex relative items-center gap-[2rem]  text-[#fff] rounded-md`}
    >
      <span className="bg-[#ffffff] w-[3rem] h-[3rem] rounded-full grid place-items-center">
        <Icon icon={icon} className="text-egreen text-[1.5rem]" />
      </span>

      <span className="flex-1 font-[500] ">
        <h4 className="font-[500] mb-2 text-[1.1rem] ">{title}:</h4>
        <p className=" border-bgrey px-2 py-1 border-[1px] overflow-hidden rounded-md">
          {value}
        </p>
      </span>
    </div>
  );
};

export default DetailTab;
