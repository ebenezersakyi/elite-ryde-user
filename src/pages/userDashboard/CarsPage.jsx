import React from 'react'
import LeftPane from '../../components/userDashboardComponents/car-page/LeftPane'
import Rightpane from '../../components/userDashboardComponents/car-page/Rightpane'
const CarsPage = () => {
  return (
    <div className='text-[#fff] 2xl:container 2xl:mx-auto px-[2.5rem] gap-8 grid grid-cols-3 mt-5'>
      <LeftPane />
      <Rightpane />
    </div>
  )
}

export default CarsPage