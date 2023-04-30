import React from 'react'
import Dropdown from '../shared/Dropdown'
import { useLocation } from 'react-router-dom'
import { years, engine_sizes, number_of_seats, car_color } from '../../../utils/dropdowncontents'
const DetailSelection = () => {
  const {pathname} = useLocation()
  return (
    <div className={`${
      pathname == "/dashboard/available" ? 'pl-[0px] px-0 pt-[2rem]': ' pl-[2rem] py-2 '
    }  border-[#fff] grid grid-cols-2 items-center justify-center gap-4 `}>
        <Dropdown category={"Engine size"} options={engine_sizes}/>
        <Dropdown category={"Registration year"} options={years}/>
        <Dropdown category={"Seats"} options={number_of_seats}/>
        <Dropdown category={"Color"} options={car_color}/>
    </div>
  )
}

export default DetailSelection