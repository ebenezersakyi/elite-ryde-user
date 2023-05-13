import React from 'react'
import Dropdown from '../shared/Dropdown'
import { useLocation } from 'react-router-dom'
import { years, engine_sizes, seats, car_color } from '../../../utils/dropdowncontents'
import { useSelector } from 'react-redux'
import { set_engine_size, set_registration_year, set_color, set_number_of_seats } from '../../../store/dashboard_state_slice'
const DetailSelection = () => {
  const {engine_size, registration_year, color, number_of_seats } = useSelector(data => data.details)
  const {pathname} = useLocation()
  return (
    <div className={`${
      pathname == "/dashboard/available" ? 'pl-[0px] px-0 pt-[2rem]': ' pl-[1.5rem] py-0 '
    }  border-[#fff] grid grid-cols-2 items-center justify-center gap-4 `}>
        <Dropdown category={"Engine size"} options={engine_sizes} val={engine_size} setState={set_engine_size} param={"engine_size"}/>
        <Dropdown category={"Registration year"} options={years} val={registration_year} setState={set_registration_year} param={"registration_year"}/>
        <Dropdown category={"Seats"} options={seats} setState={set_number_of_seats} val={color} param={"number_of_seats"}/>
        <Dropdown category={"Color"} options={car_color} setState={set_color} val={number_of_seats} param={"color"}/>
    </div>
  )
}

export default DetailSelection