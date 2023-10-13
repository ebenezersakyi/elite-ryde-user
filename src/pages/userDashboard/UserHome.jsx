import React, { useEffect, useState } from "react";
import InputField from "../../components/userDashboardComponents/home/InputField";
import CarsPane from "../../components/userDashboardComponents/home/CarsPane";
import { toast } from "react-toastify";
import axios from "axios";
import MapPane from "../../components/userDashboardComponents/available-page/MapPane";
import { useSelector } from "react-redux";
// import { cars } from "../../../utils/car";

const UserHome = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const {
    start_price,
    end_price,
    car_model,
    transmission,
    engine_type,
    body_style,
    engine_size,
    registration_year,
    color,
    number_of_seats,
    location,
    pick_up_date,
    return_date,
  } = useSelector((state) => state.details);

  async function fetchCars() {
    try {
      setLoading(true);
      const response = await axios({
        url: `https://elite-ryde-management-api.azurewebsites.net/api/car`,
        method: "get",
      });

      if (response?.data?.status) {
        setData(response?.data?.data);
      }
      console.log("response?.data?.data", response?.data?.data[0]);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCars();
  }, []);

  const filterCars = (cars, filters) => {
    return data.filter((car) => {
      return (
        car.price >= Number(start_price) &&
        car.price <= Number(end_price) &&
        (car_model === 0 || car.model === car_model) &&
        (transmission === 0 || car.transmission === transmission) &&
        (engine_type === 0 || car.engine_type === engine_type) &&
        (body_style === 0 || car.body_style === body_style) &&
        (engine_size === 0 || car.engine_size === engine_size) &&
        (registration_year === 0 ||
          car.registration_year === registration_year) &&
        (color === 0 || car.color === color) &&
        (number_of_seats === 0 || car.number_of_seats === number_of_seats) &&
        (location === "" || car.location === location)
        // Add more filter criteria as needed
        // dayjs(car.pick_up_date).isSameOrAfter(dayjs(pick_up_date)) &&
        // dayjs(car.return_date).isSameOrBefore(dayjs(return_date))
      );
    });
  };

  return (
    <div className="text-[#fff] 2xl:container 2xl:mx-auto px-[20px] pt-[2rem]">
      <InputField />
      <div className="grid grid-cols-3 text-[#fff] ">
        <div className="col-span-3 md:col-span-2">
          <CarsPane data={data} />
        </div>
        <div className="hidden md:block">
          <MapPane data={data} />
        </div>
      </div>
    </div>
  );
};

export default UserHome;
