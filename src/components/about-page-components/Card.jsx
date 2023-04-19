import React from "react";

const Card = ({ text, subtext, icons }) => {
  return (
    <div className="flex flex-row gap-[2rem]">
        {/* bg-[#fff] rounded-[50px] h-[100px] w-[100px] grid place-items-center */}
      <span className="h-fit">
        <img src={icons} alt="" className="w-[130px]"/>
      </span>
      <span>
        <h4 className="text-egreen font-medium text-[1.6rem] mb-4">{text}</h4>
        <p className="font-light text-[1.2rem] lg:pr-[5rem]">{subtext}</p>
      </span>
    </div>
  );
};

export default Card;
