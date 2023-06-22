import React from "react";
import DatePicker from "./LeftPane/DatePicker";
import { useSelector } from "react-redux";
const LeftPane = () => {
  const { data } = useSelector((d) => d?.selected_car);
  return (
    <div className="col-span-1 rounded-2xl flex flex-col gap-4   max-h-[80vh] ">
      <img
        src={
          data?.photos[0]
        }
        alt=""
        className="w-[100%] rounded-t-2xl border-bgrey border-[1px]"
      />


      <div className="rounded-b-2xl border-bgrey border-[1px] px-4 py-4 h-full flex flex-col justify-between">
            <h4 className="text-[2rem]">Booking</h4>
            <p className="text-egreen text-[2.5rem]">GHC {data?.booking?.price?.within_accra} - 1 day</p>
            <span className="flex gap-3">
                <DatePicker placeholder={"Pick up"}/>
                <DatePicker placeholder={"Drop off"}/>
            </span>

            <p className="p-6 text-center border-[1px] border-bgrey rounded-2xl text-[1.5rem] font-[500] cursor-pointer hover:bg-egreen duration-700">
                Book Now
            </p>
      </div>
    </div>
  );
};

export default LeftPane;
