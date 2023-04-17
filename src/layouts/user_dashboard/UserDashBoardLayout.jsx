// import Header from "../../components/shared_components/Header";
import { Outlet } from "react-router-dom";
import Dashboardheader from "../../components/userDashboardComponents/shared/Dashboardheader";
import { bg } from "../../utils/bg-landing-page";
import React from 'react'

const userDashBoardLayout = () => {
  const bgurl = "bg-[url('./assets/bg/bg7.png')]";
  return (
    <>
    <div className={`relative ${bgurl} min-h-[100vh] bg-no-repeat bg-fixed bg-cover bg-center hidden md:block `}>
      <div className=" top-0 bottom-0 fixed  h-full w-full bg-[#000000df] z-[-3]"></div>
        <Dashboardheader />
        <Outlet />
    </div>
    </>
  )
}

export default userDashBoardLayout