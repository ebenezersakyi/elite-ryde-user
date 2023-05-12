import React from "react";
import InputField from "../../components/userDashboardComponents/home/InputField";
import CarsPane from "../../components/userDashboardComponents/home/CarsPane";
const UserHome = () => {
  return (
    <div className="text-[#fff] 2xl:container 2xl:mx-auto px-[2.5rem] pt-[2rem]">

      <div className="grid grid-cols-3 text-[#fff] ">
        <div className="col-span-2 ">
            <InputField />
            <CarsPane />
        </div>
      </div>
    </div>
  );
};

export default UserHome;
