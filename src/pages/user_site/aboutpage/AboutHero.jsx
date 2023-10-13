import React from "react";
import Card from "../../../components/about-page-components/Card";
// import HeaderBtn from "../../../components/header-components/HeaderBtn";
import { AboutCards } from "../../../utils/aboutCards";
const AboutHero = () => {
  return (
    <div className="px-[4rem]">
      <p className="p-[2rem] text-center text-[25px] sm:text-[1.8rem]">
        At <span className="text-egreen">Elite,</span> we bring car rentals
        right to your doorstep.
      </p>

      <div className="grid grid-cols-1 gap-x-[1.9rem] gap-y-[3rem] md:grid-cols-2  lg:px-[5rem] pt-[1.5rem]  mx-auto">
        {AboutCards.map(({ title, icon, subtext }, inx) => {
          return <Card key={inx} text={title} icons={icon} subtext={subtext} />;
        })}
      </div>
      <div className="px-[10px] my-[5rem] justify-between flex flex-col items-center md:flex-row md:px-[5rem]">
        <p className="text-center text-[1.4rem] mt-[20px]">
          Do you want the perfect travel?.
        </p>
        <span className="uppercase border-[#fff] border-2  px-4 py-3 rounded-lg mt-[20px]">
          Book the perfect ride
        </span>
      </div>
    </div>
  );
};

export default AboutHero;
