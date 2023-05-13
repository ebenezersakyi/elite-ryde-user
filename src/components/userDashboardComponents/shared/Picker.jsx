import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { toast } from "react-toastify";
import { genetate, months } from "../../../utils/calender_generator";
import arrow from "../../../assets/dashboard/vendor/arrow.svg";
import { useLocation, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
const Picker = ({ img, cat, placeholder, type, start, setDate,p }) => {

  const [show, setShow] = useState(false);
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const [param ] = useSearchParams()
  useEffect(() => {
    if(param.get(p)){
      dispatch(setDate(param.get(p)))
    }
  },[])
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
        </span>

        <p
          className={`font-thin text-[1.2rem] ${
            pathname == "/dashboard/available" && "text-[1rem]"
          }`}
        >
          {placeholder}
        </p>
      </div>
      {show && type == 1 ? (
        <CustomCalender hide={setShow} start={start} setDate={setDate} p={p} />
      ) : (
        ""
      )}
    </div>
  );
};

function CustomCalender({ setDate, hide, start, p }) {
  const dispatch = useDispatch()
  const { pick_up_date, return_date } = useSelector((data) => data.details);
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [month, setMonth] = useState(dayjs(start).month()|| currentDate.month());
  const [year, setYear] = useState(dayjs(start).year() ||currentDate.year());
  const [selected, setSelected] = useState(currentDate);
  const presentYear = new Date().getFullYear();
  function generateYears() {
    let arr = [];
    for (let i = 0; i < 4; ++i) {
      arr.push(presentYear + i);
    }
    return arr;
  }
  const _years = generateYears();
  return (
    <div className="absolute bottom-[100%] w-[80%] right-[0%] pb-1  px-2 py-1 rounded-md z-[100] bg-[#fff] text-[#000] text-center font-light ">
      <div className="flex justify-between text-[0.9rem] gap-2 mb-2 pt-2">
        <select
          className=" outline-none"
          value={year}
          onChange={(e) => {
            setYear(e.currentTarget.value);
          }}
        >
          {_years.map((elem) => {
            return <option value={elem}>{elem}</option>;
          })}
        </select>

        <select
          className=" outline-none"
          value={month}
          onChange={(e) => {
            setMonth(e.target.value);
          }}
        >
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((elem) => {
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
                    if (past) {
                      toast.error("Invalid Date");
                    } else {
                      hide(false);
                      dispatch(setDate(date.toDate().toDateString()));
                      toast.success("Date selected");
                    }
                  }}
                  key={index}
                  className={`
                  cursor-pointer
                  text-[0.9rem] ${istoday && ' border-egreen border-[1px] px-1 '}
                  ${!currentMonth && 'font-[100] text-[#858585] ' }
                  ${past ? 'cursor-not-allowed line-through text-[red]' : 'hover:text-egreen'}


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
