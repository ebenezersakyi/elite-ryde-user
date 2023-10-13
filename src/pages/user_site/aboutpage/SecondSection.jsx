import React from "react";
import pic from "../../../assets/about/car.svg";
const SecondSection = () => {
  return (
    <div className=" py-[13rem] grid grid-cols-1 px-[4rem] gap-8 items-center bg-[#0000007b] sm:grid-cols-2">
      <div>
        <h2 className=" text-[30px] md:text-[4rem] leading-[2.5rem]">
          Best rental services for{" "}
          <span className="text-egreen">car renters.</span>
        </h2>
        <p className="text-[20px] md:text-[1.4rem] pr-[7rem] my-[2rem]">
          Car rentals have never been an easier experience. We make it simple to
          rent a car by offering straightforward search tools, user ratings, and
          a wide variety of pick-up locations nationwide.
        </p>
        <div>
          <span className="border-[#fff] border-2 text-[1.3rem]  px-4 py-3 rounded-lg">
            Play Video
          </span>
        </div>
      </div>
      <img src={pic} alt="" className="hidden sm:flex w-[100%]" />
    </div>
  );
};

export default SecondSection;
