import React from 'react'
import LeftPane from '../../components/userDashboardComponents/car-page/LeftPane'
import Rightpane from '../../components/userDashboardComponents/car-page/Rightpane'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const CarsPage = () => {
  const { data } = useSelector((d) => d?.selected_car);
  const nav = useNavigate()
  useEffect(() => {
    if (!data || data == '') {
      nav("/dashboard");
    }
  }, []);
  return (
    <div className='text-[#fff] 2xl:container 2xl:mx-auto px-[2.5rem] gap-8 grid grid-cols-3 mt-5'>
      <LeftPane />
      <Rightpane />
    </div>
  )
}

export default CarsPage