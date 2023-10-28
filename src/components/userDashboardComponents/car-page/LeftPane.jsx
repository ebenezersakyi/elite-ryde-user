import React, { useEffect, useState } from "react";
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
import { usePaystackPayment } from "react-paystack";
import { Icon } from "@iconify/react";
import { usePlacesWidget } from "react-google-autocomplete";
import Autocomplete from "react-google-autocomplete";

const LeftPane = () => {
  const [self, setSelf] = useState(false);
  const [out, setOut] = React.useState(0);
  const [isloading, setLoading] = React.useState(false);
  const [activeSessions, setActiveSessions] = React.useState([]);
  const [showImages, setShowImages] = React.useState(false);
  const [time, setTime] = useState("");
  const [pickupLocation, setPickupLocation] = useState(null);
  const [destinationLocation, setDestinationLocation] = useState(null);
  const [numberOfDays, setNumberOfDays] = useState(0);
  const { data } = useSelector((d) => d?.selected_car);
  const { pick_up_date, return_date } = useSelector((data) => data.details);
  const { user } = useAuth0();
  const nav = useNavigate();
  const scope = ["within_accra", "outside_accra", "cross_country"];

  console.log("data", data);

  const publicKey = process.env.REACT_APP_PAYSTACK_PUBLIC_KEY;

  const config = {
    reference: new Date().getTime().toString(),
    email: user.email,
    amount:
      (out == 0
        ? data?.booking?.price?.within_accra
        : out == 1
        ? data?.booking?.price?.outside_accra
        : data?.booking?.price?.cross_country) *
      100 *
      (numberOfDays < 1 ? 1 : numberOfDays), //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: publicKey,
    currency: "GHS",
    metadata: {
      name: user.name,
      phone: user.phone_number,
    },
  };

  useEffect(() => {
    // Input date strings
    const dateStr1 = pick_up_date;
    const dateStr2 = return_date;

    // Convert the date strings to Date objects
    const date1 = new Date(dateStr1);
    const date2 = new Date(dateStr2);

    // Calculate the time difference in milliseconds
    const timeDifference = date2 - date1;

    // Calculate the number of days (1 day = 24 hours * 60 minutes * 60 seconds * 1000 milliseconds)
    const daysDifference = Math.floor(timeDifference / (24 * 60 * 60 * 1000));
    setNumberOfDays(daysDifference);
    console.log("daysDifference", daysDifference);
  }, [pick_up_date, return_date]);

  const initializePayment = usePaystackPayment(config);

  const onSuccess = (reference) => {
    console.log("reference", reference);
    book(reference.reference);
  };

  const onClose = () => {
    console.log("closed");
  };

  const getActiveSessions = async () => {
    try {
      const response = await axios.get(
        `${baseURlUser}/active-car-session?carId=${data._id}`
      );
      console.log("response", response.data?.data);
      setActiveSessions(response.data?.data);
    } catch (error) {}
  };

  const checkIfDateIsWithin = (givenDateStr, type) => {
    // Given date in "Sun Oct 15 2023" format
    // const givenDateStr = givenDateStr;

    // Parse the given date into a JavaScript Date object
    const givenDate = new Date(givenDateStr);

    // Object containing pickupDate and returnDate
    const rentalObject = {
      pickupDate: activeSessions[0]?.pickupDate,
      returnDate: activeSessions[0]?.returnDate,
    };
    console.log("rentalObject", rentalObject);

    // Parse pickupDate and returnDate into JavaScript Date objects
    const pickupDate = new Date(rentalObject.pickupDate);
    const returnDate = new Date(rentalObject.returnDate);

    // Check if the given date is within the range defined by pickupDate and returnDate
    if (givenDate >= pickupDate && givenDate <= returnDate) {
      console.log(
        "The given date is within the pickupDate and returnDate range."
      );
      toast.error(`${type} is within an active session.`);
      return true;
    } else {
      console.log(
        "The given date is not within the pickupDate and returnDate range."
      );
      return false;
    }
  };

  useEffect(() => {
    getActiveSessions();
    // console.log("pick_up_date", pick_up_date);
  }, []);

  useEffect(() => {
    console.log("pick_up_date, return_date", pick_up_date, return_date);
    checkIfDateIsWithin(pick_up_date, "Pick Up Date");
    checkIfDateIsWithin(return_date, "Return Date");
  }, [pick_up_date, return_date, activeSessions]);

  async function book(id) {
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
            pickupLocation: pickupLocation || {},
            destinationLocation: destinationLocation || {},
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

  const options = {
    fields: ["address_components", "geometry", "icon", "name"],
    strictBounds: false,
    types: ["establishment"],
  };

  return (
    <>
      <div className="relative col-span-2 rounded-2xl flex flex-col gap-4   max-h-[100vh] ">
        <img
          src={data?.photos[0]}
          alt=""
          className="w-[100%] h-[450px] rounded-t-2xl border-bgrey border-[1px] object-cover"
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

          {!self && (
            <>
              <div className="flex flex-col mt-[10px]">
                <label htmlFor="time">Pickup Location</label>
                <div className="border-[1px] border-bgrey flex justify-between items-center text-bgrey rounded-2xl w-[100%] p-3 mt-[7px] relative gap-2">
                  <Autocomplete
                    apiKey={"AIzaSyAKT8LXpv2aVfHyHKo8N9LzQmzCSktAYQQ"}
                    onPlaceSelected={(place) => {
                      console.log(place);
                      setPickupLocation({
                        lat: place?.geometry?.location?.lat(),
                        long: place?.geometry?.location?.lng(),
                      });
                    }}
                    options={options}
                    className=" bg-[transparent] outline-none h-[100%] w-[100%] focus:border-none"
                  />
                </div>
              </div>

              <div className="flex flex-col mt-[10px]">
                <label htmlFor="time">Destination Location</label>
                <div className="border-[1px] border-bgrey flex justify-between items-center text-bgrey rounded-2xl w-[100%] p-3 mt-[7px] relative gap-2">
                  <Autocomplete
                    apiKey={"AIzaSyAKT8LXpv2aVfHyHKo8N9LzQmzCSktAYQQ"}
                    onPlaceSelected={(place) => {
                      console.log(place);
                      setDestinationLocation({
                        lat: place?.geometry?.location?.lat(),
                        long: place?.geometry?.location?.lng(),
                      });
                    }}
                    options={options}
                    className=" bg-[transparent] outline-none h-[100%] w-[100%] focus:border-none"
                  />
                </div>
              </div>
            </>
          )}

          <p
            onClick={() => {
              // book();
              if (
                checkIfDateIsWithin(pick_up_date, "Pick Up Date") ||
                checkIfDateIsWithin(return_date, "Return Date")
              ) {
                console.log("return");
                return;
              }

              if (!time) {
                toast.error("Please select a pick up time");
                return;
              }

              if (!self && (!pickupLocation || !destinationLocation)) {
                toast.error("Please add a pickup and destination location");
                return;
              }
              initializePayment(onSuccess, onClose);
            }}
            className="p-4 text-center border-[1px] flex justify-center items-center mt-5 border-bgrey rounded-2xl text-[1.5rem] font-[500] cursor-pointer hover:bg-egreen duration-700"
          >
            {isloading ? (
              <IconLoadingWhite />
            ) : (
              // <PaystackButton className="paystack-button" {...componentProps} />
              "Book now"
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default LeftPane;
