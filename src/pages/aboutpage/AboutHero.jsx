import React from "react";
import Card from "../../components/about-page-components/Card";
import HeaderBtn from "../../components/header-components/HeaderBtn";
import { AboutCards } from "../../utils/aboutCards";
const AboutHero = () => {
  return (
    <div className="px-[4rem]">
      <p className="p-[2rem] text-center text-[1.8rem]">
        At <span className="text-egreen">Elite,</span> we bring car rentals
        right to your doorstep.
      </p>

      <div className="grid grid-cols-2 gap-x-[1.9rem] gap-y-[3rem]  lg:px-[5rem] pt-[1.5rem]  mx-auto">
        {AboutCards.map(({ title, icon, subtext }, inx) => {
          return <Card key={inx} text={title} icons={icon} subtext={subtext} />;
        })}
      </div>
      <div className="px-[5rem] my-[5rem] justify-between flex items-center">
        <p className="text-center text-[1.4rem] ">
          Do you want the perfect travel?.
        </p>
        <span className="uppercase border-[#fff] border-2  px-4 py-3 rounded-lg">
          Book the perfect ride
        </span>
      </div>
    </div>
  );
};

export default AboutHero;
