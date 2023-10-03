import dayjs from "dayjs";
import { useState } from "react";
import { genetate, months} from '../../../utils/calender_generator.js'
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
