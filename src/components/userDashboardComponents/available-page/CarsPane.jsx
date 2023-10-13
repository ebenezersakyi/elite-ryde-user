import React from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import CarCard from "../shared/CarCard";
import img from "../../../assets/dashboard/vendor/back.svg";
import { useNavigate } from "react-router-dom";
import { cars } from "../../../utils/car";
import Loader from "../../shared_components/Loader";
const CarsPane = ({ data }) => {
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);
  // const [data, setData] = useState();
  // async function fetchCars() {
  //   try {
  //     setLoading(true);
  //     const response = await axios({
  //       url: `https://elite-ryde-management-api.azurewebsites.net/api/car`,
  //       method: "get",
  //     });

  //     if (response?.data?.status) {
  //       console.log(response?.data?.data);
  //       setData(response?.data?.data);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     toast.error(error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  // useEffect(() => {
  //   fetchCars();
  // }, []);
  return (
    <div className="px-[1.5rem] lg:max-h-[100vh] col-span-2 overflow-scroll scrollbar-hide">
      <div className="py-[2.5rem] flex justify-between items-center">
        <h4 className="font-normal text-[2rem]">
          Search results:{" "}
          <span className="text-egreen font-semibold">{data?.length} cars</span>
        </h4>
        <span
          className="flex gap-4 items-center cursor-pointer hover:text-egreen text-[1.5rem]"
          onClick={() => {
            nav("/dashboard");
          }}
        >
          <img src={img} alt="" className="w-[70%]" />
          Back
        </span>
      </div>
      {/* cars */}
      {loading ? (
        <Loader />
      ) : data?.length === 0 ? (
        <p>No cars</p>
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2  max-h-[60vh]  overflow-scroll scrollbar-hide gap-[1.5rem]">
          {data?.map((d, inx) => {
            let {
              basicInformation: { make, model, year, transmission },
              additionalInformation: {
                geolocation: { long, lat },
                location,
              },
              _id,
              photos,
              booking,
            } = d;
            return (
              <CarCard
                name={`${make} ${model}`}
                user_ratings={0}
                key={inx}
                location={location}
                year={year}
                transmission={transmission}
                image={photos[0]}
                id={_id}
                price_per_day={booking?.price?.within_accra || 1000}
                data={d}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CarsPane;
