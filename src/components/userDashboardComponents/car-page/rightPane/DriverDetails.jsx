"use strict";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { Icon } from "@iconify/react";
import { useSelector } from "react-redux";
import "react-calendar/dist/Calendar.css";
import axios from "axios";

const DriverDetails = () => {
  const { data } = useSelector((d) => d?.selected_car);
  const [token, setToken] = useState("");

  const getToken = async () => {
    try {
      const response = await axios.get(
        "https://elite-ryde-management-api.azurewebsites.net/api/generate-sas-token"
      );
      if (response.data) {
        // console.log('token', response.data);
        setToken(response.data.data.token);
      } else {
        console.error("Failed to fetch token");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  console.log("data", data);
  // const Available = [
  //   {
  //     day: "Weekdays",
  //     value: data?.booking?.availability == "Weekdays",
  //   },
  //   {
  //     day: "Weekends",
  //     value: data?.booking?.availability == "Weekends",
  //   },
  //   {
  //     day: "Both",
  //     value: data?.booking?.availability == "Both",
  //   },
  // ];
  return (
    <div className="grid grid-cols-3 gap-[2.5rem] px-[15px] py-[10px] items-center">
      {/* <div className="col-span-3 text-[1.1rem] font-[500]">
        <span className="flex gap-4">
          <span className="w-[47%] justify-center items-center flex flex-col">
            <h4 className="mb-6">Available for booking from</h4>

            <Calendar
              className={"text-[#000] h-full"}
              value={new Date(data?.booking?.dates?.startDate)}
            />
          </span>
          <span className="w-[47%] justify-center items-center flex flex-col">
            <h4 className="mb-6">Available for booking to</h4>

            <Calendar
              className={"text-[#000] h-full"}
              value={new Date(data?.booking?.dates?.endDate)}
            />
          </span>
        </span>
      </div> */}

      <div className="flex gap-6 col-span-3 items-center">
        <img
          src={`${data?.driver?.image}?${token}`}
          alt=""
          className="w-[90px] h-[90px] object-cover rounded-full bg-bgrey"
        />
        <h4 className="text-[0.9rem] font-[300]  mb-4">
          Name:
          <br />
          {data?.driver?.name}
        </h4>
        {/* <span>
          <span className="flex justify-between gap-2 items-center">
            <p className="py-1 border-[1px] border-[#fff] rounded-md font-[100] text-center text-[0.9rem] flex-1">
              {String(new Date(data?.booking?.dates?.startDate))
                .split(" ")
                .slice(0, 4)
                .join(" ")}
            </p>
            <p>to</p>
            <p className="py-1 border-[1px] border-[#fff] rounded-md font-[100] text-center text-[0.9rem] flex-1">
              {String(new Date(data?.booking?.dates?.endDate))
                .split(" ")
                .slice(0, 4)
                .join(" ")}
            </p>
          </span>
        </span>
        <span>
          <p>Outside Accra</p>
          <p className="px-2 py-2 border-[0.7px] border-[#fff] rounded-md">
            GHC{" "}
            <input
              type="number"
              className="outline-none bg-[transparent] max-w-[70px] pl-1"
              value={data?.booking?.price?.outside_accra}
            />
            /day
          </p>
        </span>
        <span>
          <p>Within Accra</p>
          <p className="px-2 py-2 border-[0.7px] border-[#fff] rounded-md">
            GHC{" "}
            <input
              type="number"
              className="outline-none bg-[transparent] max-w-[70px] pl-1"
              value={data?.booking?.price?.within_accra}
            />
            /day
          </p>
        </span>
        <span className="flex flex-col gap-4">
          <h4 className="text-[0.9rem] font-[300]">Available for booking</h4>
          <div className="flex flex-col gap-3">
            {Available.map(({ day, value }) => (
              <div
                className={`flex items-center px-2 py-1 border-[1px] gap-3 rounded-md ${
                  value ? " border-egreen" : "border-bgrey"
                }`}
              >
                {value ? (
                  <Icon
                    icon={"material-symbols:check-box-sharp"}
                    className={`text-[16px] ${
                      !value ? "text-bgrey" : "text-egreen"
                    }`}
                  />
                ) : (
                  <div className="p-[5px] ml-[2px] border-bgrey border-[1px]"></div>
                )}
                <p className="text-[0.8rem] font-[100]">{day}</p>
              </div>
            ))}
          </div>
        </span> */}
      </div>
    </div>
  );
};

export default DriverDetails;
