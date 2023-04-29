import React from 'react'
import LeftPane from '../../components/userDashboardComponents/available-page/LeftPane'
import CarsPane from '../../components/userDashboardComponents/available-page/CarsPane'
import MapPane from '../../components/userDashboardComponents/available-page/MapPane'
const AvailablePage = () => {
  return (
    <div className='text-[#fff] grid grid-cols-4 2xl:container 2xl:mx-auto'>
        <LeftPane />
        <CarsPane />
        <MapPane />
    </div>
  )
}

export default AvailablePage