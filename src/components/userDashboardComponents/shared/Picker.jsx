import React, { useState } from "react";
import dayjs from "dayjs";
import { toast } from 'react-toastify';
import { genetate, months } from "../../../utils/calender_generator";
import arrow from "../../../assets/dashboard/vendor/arrow.svg";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
const Picker = ({ img, cat, placeholder, type, start, setDate }) => {
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
      <div className="cursor-pointer">
        <span
          className="flex items-center justify-between gap-2 "
          onClick={() => setShow(!show)}
        >
          <h4
            className={`font-[500] text-[1.2rem] ${
              pathname == "/dashboard/available" && "text-[1.1rem]"
            }`}
          >
            {cat}
          </h4>
          <img
            src={arrow}
            alt=""
            className={`${show && "rotate-180"} duration-700`}
          />
          {show && type == 1 ? <CustomCalender hide={setShow} start={start} setDate={setDate}/> : ""}
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

function CustomCalender({ setDate, hide, start }) {
  const dispatch = useDispatch()
  const { pick_up_date, return_date } = useSelector((data) => data.details);
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [month, setMonth] = useState(currentDate.month())
  const [year, setYear] = useState(currentDate.year());
  const [selected, setSelected] = useState(currentDate)
  const presentYear = new Date().getFullYear();
  function generateYears() {
    let arr = [];
    for (let i = 0; i < 4; ++i) {
      arr.push(presentYear + i);
    }
    return arr;
  }
  const _years = generateYears()
  return (
    <div className="absolute bottom-[100%] w-[80%] right-[0%] pb-1  px-2 py-1 rounded-md z-[100] bg-[#fff] text-[#000] text-center font-light ">
      <div className="flex justify-between text-[0.9rem] gap-2 mb-2 pt-2">
        <select className=" outline-none" value={year} onChange={(e) => {
          setYear(e.currentTarget.value)
        }}>
          {_years.map((elem) => {
            return <option value={elem}>{elem}</option>;
          })}
        </select>

        <select className=" outline-none" value={month} onChange={(e) => {
          setMonth(e.target.value)
        }}>
          {[0,1,2,3,4,5,6,7,8,9,10,11].map((elem) => {
            return <option value={elem}>{months[elem]}</option>;
          })}
        </select>
      </div>
      <div>
        <div className="grid grid-cols-7 gap-x-1 gap-y-1">
          {days.map((element, index) => {
            return (
              <h4 key={index} className="font-bold text-[0.9rem]">
                {element}
              </h4>
            );
          })}
        </div>
        <div className="grid grid-cols-7 gap-x-1 gap-y-1">
          {genetate(month, year, start).map(
            ({ date, istoday, currentMonth, pastMonth, past }, index) => {
              return (
                <h4
                  onClick={() => {
                    if (past || pastMonth ) {
                      toast.error("Invalid Date")
                    }
                    else{
                      hide(true);
                      dispatch(setDate(date.format('DD/MM/YY')))
                      toast.success("Date selected")
                    }
                  }}
                  key={index}
                  className={`
                  text-[0.9rem]
                  ${
                    past ?
                    " line-through font-[100] cursor-not-allowed text-[#e40000] text-center hover:text-[#858585]" : ''
                  }
                  ${
                    pastMonth ?
                    "cursor-not-allowed line-through  text-[#858585] hover:text-[#858585] " : ""
                  }
                  ${
                    !currentMonth && !past
                      ? " text-[#858585] cursor-not-allowed "
                      : " hover:text-egreen cursor-pointer"
                  }
                  ${istoday ? " border-egreen border-[1px] px-1 " : ""}
                 
                  `}
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
