import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import car from "../../../assets/dashboard/cars/car.svg";
import { useDispatch } from "react-redux";

const CarCard = ({
  name,
  location,
  price_per_day,
  year,
  transmission,
  image,
  id,
  data,
}) => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  return (
    <div
      className="rounded-[20px] border-[1px] w-[400px] hover:border-[#808080] hover:border-[1px] duration-700 cursor-pointer"
      onClick={() => {
        // dispatch(setData(data))
        nav(`/dashboard/car?id=${id}`);
      }}
    >
      <img
        src={image || car}
        alt=""
        className="rounded-t-[20px] w-full h-[250px]"
      />

      <div className="p-4 flex flex-col justify-between gap-6 ">
        <div>
          <h3 className="font-bold text-[1.5rem]">{name}</h3>
          <p className="text-[1.1rem] text-[#808080] font-light">
            {" "}
            {location}, {year}, {transmission}
          </p>
        </div>

        <div>
          {/* <p className='font-light'><span className='text-[#808080] text-[1.1rem]'>User rating - </span> {user_ratings.toFixed(2)}/10</p> */}
          <p className="font-semibold text-egreen text-[1.4rem]">
            Ghc {price_per_day.toFixed(2)}/day
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
