import React from "react";
import apple from "../../../assets/store-btns/apple.svg";
import android from "../../../assets/store-btns/android.svg";
import img from "../../../assets/about/phonemockup.svg";
import bg from "../../../assets/about/bg-3.jpeg";
const ThirdSection = () => {
  return (
    <div className="z-[100] relative  pt-[25rem] flex items-center justify-center ">
      <img src={bg} alt="" className="absolute z-[-2] left-0 top-0 w-[100%]" />
      <div className=" relative backdrop-blur-md flex py-[5rem] items-center justify-between px-[4rem] w-[100%]">
        <div>
          <h4 className=" leading-[3.7rem] mb-[3rem] text-[50px] lg:text-[4rem]">
            Rent in a few taps with <br /> the
            <span className="text-egreen"> app.</span>
          </h4>
          <div className="flex flex-col gap-4 md:flex-row w-[50%]">
            <img src={apple} alt="" />
            <img src={android} alt="" />
          </div>
        </div>
        <img
          src={img}
          alt=""
          className="absolute right-0 bottom-0 h-[200px] sm:h-[300px] lg:h-[100%]"
        />
      </div>
    </div>
  );
};

export default ThirdSection;
