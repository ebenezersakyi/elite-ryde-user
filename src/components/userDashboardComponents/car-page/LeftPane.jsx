import React, { useState } from "react";
import DatePicker from "./LeftPane/DatePicker";
import { useSelector } from "react-redux";
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
import IconLoadingWhite from "../../shared_components/IconButton";
import { baseURlUser } from "../../../utils";
import { PaystackButton } from "react-paystack";

const LeftPane = () => {
  const [self, setSelf] = useState(false);
  const [out, setOut] = React.useState(0);
  const [isloading, setLoading] = React.useState(false);
  const [time, setTime] = useState("");
  const { data } = useSelector((d) => d?.selected_car);
  const { pick_up_date, return_date } = useSelector((data) => data.details);
  const { user } = useAuth0();
  const nav = useNavigate();
  const scope = ["within_accra", "outside_accra", "cross_country"];

  console.log("user", user);

  const publicKey = process.env.REACT_APP_PAYSTACK_PUBLIC_KEY;

  const componentProps = {
    email: user.email,
    amount: 100,
    metadata: {
      name: user.name,
      phone: user.phone_number,
    },
    publicKey,
    currency: "GHS",
    text: "Book ride",
    onclick: () => {
      // setShowCheckout(false);
    },
    onSuccess: (data) => {
      toast("Success");
      console.log("datadata", data);
      book(data.reference);
    },

    onClose: () => {},
  };

  async function book(id) {
    if (!time) {
      toast.error("Please select a pick up time");
      return;
    }
    try {
      setLoading(true);
      const [firstName, lastName] = user.name.split(" ");
      const response = await axios({
        url: `${baseURlUser}/approval`,
        method: "post",
        data: {
          type: "book_ride",
          content: JSON.stringify({
            userId: user?.sub.slice(6),
            carId: data?._id,
            pickupDate: pick_up_date,
            returnDate: return_date,
            scope: scope[out],
            time,
            selfDrive: self,
            email: user.email,
            firstName: firstName,
            lastName: lastName,
            location: data?.additionalInformation?.location,
            transactionId: id,
            price:
              out == 0
                ? data?.booking?.price?.within_accra
                : out == 1
                ? data?.booking?.price?.outside_accra
                : data?.booking?.price?.cross_country,
          }),
        },
      });

      if (response?.data?.status) {
        nav("/dashboard");
        toast.success("Booking Completed \n Vendor will reach you soon");
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occured");
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="col-span-2 rounded-2xl flex flex-col gap-4   max-h-[100vh] ">
      <img
        src={data?.photos[0]}
        alt=""
        className="w-[100%] rounded-t-2xl border-bgrey border-[1px]"
      />

      <div className="rounded-b-2xl border-bgrey border-[1px] px-4 py-4 h-full flex flex-col justify-between">
        <div className=" w-full flex justify-between items-center">
          <h4 className="text-[2rem]">Booking</h4>
          <div className="flex flex-col  gap-1 ">
            <p>Option</p>
            <select
              className=" bg-[transparent] border-bgrey border-[1px] p-2 outline-none rounded-sm "
              onChange={(e) => setOut(e.currentTarget.value)}
            >
              <option value={0}>Inside Accra</option>
              <option value={1}>Outside Accra</option>
              <option value={2}>Cross Country</option>
            </select>
          </div>
        </div>

        <p className="text-egreen text-4xl mt-3">
          GHC{" "}
          {out == 0
            ? data?.booking?.price?.within_accra
            : out == 1
            ? data?.booking?.price?.outside_accra
            : data?.booking?.price?.cross_country}
          / day
        </p>
        <div className="flex justify-between items-center gap-2 ">
          <div className="flex flex-col">
            <label htmlFor="time">Time</label>
            <div className="border-[1px] border-bgrey flex justify-between items-center text-bgrey rounded-2xl w-max p-2 relative gap-2">
              <input
                type="time"
                className=" bg-[transparent] outline-none focus:border-none"
                name="time"
                id="time"
                value={time}
                onChange={(e) => setTime(e.currentTarget.value)}
              />
            </div>
          </div>
          <div className="flex items-center gap-2 justify-between h-[3rem] ">
            <input
              type="checkbox"
              name="existing"
              value={self}
              onChange={() => setSelf(!self)}
              className="accent-egreen h-[1.5rem] w-[1.2rem] "
              id=""
            />
            <p className="text-[1.2rem] font-[100]">Self Drive</p>
          </div>
        </div>
        <span className="grid grid-cols-1 gap-2 sm:grid-cols-1">
          <DatePicker
            placeholder={pick_up_date}
            type={1}
            setDate={set_pick_up_date}
            p={"pick_up_date"}
            label={"PickUp Date"}
            // start={}
          />
          <DatePicker
            cat={"Return date"}
            placeholder={return_date}
            type={1}
            start={dayjs(pick_up_date)}
            setDate={set_return_date}
            p={"return_date"}
            label={"Return Date"}
          />
        </span>

        <p
          // onClick={() => book()}
          className="p-4 text-center border-[1px] flex justify-center items-center mt-5 border-bgrey rounded-2xl text-[1.5rem] font-[500] cursor-pointer hover:bg-egreen duration-700"
        >
          {isloading ? (
            <IconLoadingWhite />
          ) : (
            <PaystackButton className="paystack-button" {...componentProps} />
          )}
        </p>
      </div>
    </div>
  );
};

export default LeftPane;
