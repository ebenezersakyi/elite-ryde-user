// import Header from "../../components/shared_components/Header";
import { Outlet } from "react-router-dom";
import { bg } from "../../utils/bg";
import Dashboardheader from "../../components/userDashboardComponents/shared/Dashboardheader";
import React, { useEffect, useState } from 'react'

const UserDashBoardLayout = () => {
  const [current, setCurrent] =useState(0)

    useEffect(() => {
      const interval = setInterval(() => {
        if(current < bg.length -1){
          setCurrent((_) => {
            return _ + 1
          } )
        }
        else{
          setCurrent(0)
        }
      }, 7000)
      return () => clearInterval(interval)
    }, [current])
  return (
    <>
    <div className={`relative min-h-[100vh] bg-no-repeat bg-fixed bg-cover bg-center hidden md:block duration-700 `}>
    <img src={bg[current]} alt="" className="fixed aspect-auto object-cover w-screen h-screen top-0 bottom-0 left-0 right-0 z-[-10]" />
        <Dashboardheader />
        <Outlet />
    </div>
    </>
  )
}

export default UserDashBoardLayout