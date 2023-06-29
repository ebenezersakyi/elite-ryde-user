import React from "react";
import DatePicker from "./LeftPane/DatePicker";
import { useSelector } from "react-redux";
import { Icon } from "@iconify/react";
import {
  set_pick_up_date,
  set_return_date,
} from "../../../store/dashboard_state_slice";
import { getDaysDifference } from "../../../utils/converter";
import dayjs from "dayjs";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const LeftPane = () => {
  const [out, setOut] = React.useState(false);
  const [isloading, setLoading] = React.useState(false);
  const { data } = useSelector((d) => d?.selected_car);
  const { pick_up_date, return_date } = useSelector((data) => data.details);
  const { user } = useAuth0();
  const nav = useNavigate()
  async function book() {
    try {
      setLoading(true);
      const days = getDaysDifference(pick_up_date, return_date);
      const response = await axios({
        url: `https://elite-ryde-management-api.azurewebsites.net/api/book-a-ride`,
        method: "post",
        data: {
          userEmail: user?.email,
          carId: data?._id,
          rentalDuration: days,
          rentalPrice: !out
            ? data?.booking?.price?.within_accra
            : data?.booking?.price?.outside_accra,
          pickupDate: pick_up_date,
          returnDate: return_date,
          within_accra: !out,
        },
      });

      if(response?.data?.status){
        nav('/dashboard')
        toast.success("Booking Completed \n Vendor will reach you soon")
      }
    } catch (error) {
      console.log(error);
      toast.error("An erro occured")

    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="col-span-1 rounded-2xl flex flex-col gap-4   max-h-[84vh] ">
      <img
        src={data?.photos[0]}
        alt=""
        className="w-[100%] rounded-t-2xl border-bgrey border-[1px]"
      />

      <div className="rounded-b-2xl border-bgrey border-[1px] px-4 py-4 h-full flex flex-col justify-between">
        <h4 className="text-[2rem]">Booking</h4>
        <div className="flex items-center gap-3 h-[2rem]">
          <input
            type="checkbox"
            name="existing"
            value={out}
            onChange={() => {
              setOut(!out);
            }}
            className="accent-egreen h-[1.5rem] w-[1.2rem] "
            id=""
          />
          <p className="text-[1.2rem] font-[100]">Outside Accra?</p>
        </div>
        <p className="text-egreen text-[2.5rem]">
          GHC{" "}
          {!out
            ? data?.booking?.price?.within_accra
            : data?.booking?.price?.outside_accra}{" "}
          / day
        </p>
        <span className="flex gap-3">
          <DatePicker
            placeholder={pick_up_date}
            type={1}
            setDate={set_pick_up_date}
            p={"pick_up_date"}
          />
          <DatePicker
            cat={"Return date"}
            placeholder={return_date}
            type={1}
            start={dayjs(pick_up_date)}
            setDate={set_return_date}
            p={"return_date"}
          />
        </span>

        <p
          onClick={() => book()}
          className="p-6 text-center border-[1px] flex justify-center items-center border-bgrey rounded-2xl text-[1.5rem] font-[500] cursor-pointer hover:bg-egreen duration-700"
        >
          {isloading ? (
            <Icon
              icon="line-md:loading-loop"
              className="font-[900] text-center"
            />
          ) : (
            "Book ride"
          )}
        </p>
      </div>
    </div>
  );
};

export default LeftPane;
