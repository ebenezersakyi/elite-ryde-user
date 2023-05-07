import React, { useState } from "react";
import dayjs from "dayjs";
import arrow from "../../../assets/dashboard/vendor/arrow.svg";
import { genetate, months } from "../../../utils/calender_generator.js";
import { useLocation } from "react-router-dom";
const Picker = ({ img, cat, placeholder }) => {
  const [show, setShow] = useState(false);
  const { pathname } = useLocation();
  return (
    <div
      className={`px-[2rem] relative flex ${
        pathname == "/dashboard/available" ? "gap-4 " : "justify-around"
      } items-center gap-4 `}
    >
      <div className="h-full">
        <img
          src={img}
          alt=""
          className={`w-[40px] ${
            pathname == "/dashboard/available" && "w-[30px]"
          }`}
        />
      </div>
      <div className="">
        <span className="flex items-center gap-2">
          <h4
            className={`font-[500] text-[1.2rem] ${
              pathname == "/dashboard/available" && "text-[1.1rem]"
            }`}
          >
            {cat}
          </h4>
          <img src={arrow} alt="" />
          {show && <CustomCalender hide={setShow}/>}
        </span>

        <p
          className={`font-thin text-[1.2rem] ${
            pathname == "/dashboard/available" && "text-[1rem]"
          }`}
        >
          {placeholder}
        </p>
      </div>
    </div>
  );
};

export function CustomCalender({setDate, hide}) {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);

  return (
    <div className="absolute top-[50%] right-1 px-3 py-1 rounded-md z-[100] bg-[#fff] text-[#000] text-center font-light ">
      <div>
        <div className="grid grid-cols-7 gap-x-4 gap-y-1">
          {days.map((element, index) => {
            return (
              <h4 key={index} className="font-bold">
                {element}
              </h4>
            );
          })}
        </div>
        <div className="grid grid-cols-7 gap-x-4 gap-y-1">
          {genetate(today.month(), today.year()).map(
            ({ date, istoday, currentMonth, pastMonth }, index) => {
              return (
                <h4
                  onClick={() => {
                    if(currentDate){
                      hide(false)
                    }
                  }}
                  key={index}
                  className={`${
                    pastMonth &&
                    "line-through font-[100] cursor-not-allowed text-[#e40000]"
                  } cursor-pointer ${
                    !currentMonth
                      ? "text-[#858585] cursor-not-allowed"
                      : " hover:text-egreen"
                  }`}
                >
                  {date.date()}
                </h4>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}
export default Picker;
