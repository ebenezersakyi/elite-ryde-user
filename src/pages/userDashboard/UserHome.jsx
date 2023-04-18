import React from "react";
import { useNavigate } from "react-router-dom";
const UserHome = () => {
  
  return (
    <div className="text-[#fff] 2xl:container 2xl:mx-auto px-[2.5rem]">
      <div className="px-[8rem] py-[7rem] backdrop-blur-[10px] rounded-xl border-[1px] w-fit mx-auto mt-[3rem] flex flex-col items-center gap-[4rem]">
        <h2 className="text-center text-[3rem] leading-[3.2rem]">
          Welcome Back <br /> <span className="text-egreen">Richmann</span>
        </h2>
        <p className="text-[2rem] font-light">
          What would you like to do today?
        </p>

        <div className="grid grid-cols-2 gap-4">
          <CustBtn text={"Search Vendors"} link={"/dashboard/vendors"}/>
          <CustBtn text={"Browse car catalogue"} link={"/dashboard/cars"} />
        </div>
      </div>
    </div>
  );
};
const CustBtn = ({ text, link }) => {
  const nav = useNavigate();
  return (
    <p
      className="p-4 text-[1.5rem] cursor-pointer border-[1px] rounded-xl text-center font-semibold hover:bg-egreen/50 hover:border-egreen/50"
      onClick={() => {
        nav(link)
      }}
    >
      {text}
    </p>
  );
};
export default UserHome;
