import Header from "../../components/shared_components/Header";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { bg } from "../../utils/bg";
// import img from '../../assets/bg/bg1.svg'
const inital = 0
const final = bg.length
const Layout = () => {
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
    <div  className={`relative  duration-700 bg-no-repeat bg-fixed bg-cover bg-center hidden md:block `}>
      {/* <div className=" top-0 bottom-0 fixed  h-full w-full bg-[#000000df] z-[-3]"></div> */}
      <img src={bg[current]} alt="" className="fixed aspect-auto object-cover w-screen h-screen top-0 bottom-0 left-0 right-0 z-[-10]" />
        <Header />
        <Outlet />
    </div>
    </>
  );
};

export default Layout;
