import React from 'react'
import LeftPane from '../../components/userDashboardComponents/available-page/LeftPane'
import CarsPane from '../../components/userDashboardComponents/available-page/CarsPane'
const AvailablePage = () => {
  return (
    <div className='text-[#fff] flex min-h-full 2xl:container 2xl:mx-auto'>
        <LeftPane />
        <CarsPane />
    </div>
  )
}

export default AvailablePage