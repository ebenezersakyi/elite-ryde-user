import React, { useEffect, useState } from "react";
import InputField from "../../components/userDashboardComponents/home/InputField";
import CarsPane from "../../components/userDashboardComponents/home/CarsPane";
import { toast } from "react-toastify";
import axios from "axios";
import MapPane from "../../components/userDashboardComponents/available-page/MapPane";
// import { cars } from "../../../utils/car";

const UserHome = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  async function fetchCars() {
    try {
      setLoading(true);
      const response = await axios({
        url: `https://elite-ryde-management-api.azurewebsites.net/api/car`,
        method: "get",
      });

      if (response?.data?.status) {
        console.log(response?.data?.data);
        setData(response?.data?.data);
      }
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
