import { useEffect, useState } from 'react'
import LeftPane from '../../components/userDashboardComponents/available-page/LeftPane'
import CarsPane from '../../components/userDashboardComponents/available-page/CarsPane'
import MapPane from '../../components/userDashboardComponents/available-page/MapPane'
import { useSearchParams } from 'react-router-dom'

import { useSelector } from 'react-redux'
const AvailablePage = () => {
  const vals = useSelector((state) => state.details)
  const [params, setParams] = useSearchParams()
  useEffect(() => {
    setParams(vals)
  },[vals])
  return (
    <div className='text-[#fff] grid grid-cols-4 2xl:container 2xl:mx-auto'>
        <LeftPane />
        <CarsPane />
        <MapPane />
    </div>
  )
}

export default AvailablePage