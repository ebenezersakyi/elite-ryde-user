import React from 'react'
import Dropdown from '../shared/Dropdown'
import { useLocation } from 'react-router-dom'
import { years, engine_sizes, number_of_seats, car_color } from '../../../utils/dropdowncontents'
import { set_engine_size, set_registration_year, set_color, set_number_of_seats } from '../../../store/dashboard_state_slice'
const DetailSelection = () => {
  const {pathname} = useLocation()
          // http://localhost:3000/dashboard/available?start_price=200&end_price=1500&car_model=&transmission=&engine_type=&body_style=&engine_size=&registration_year=&color=&number_of_seats=&location=&pick_up_date=17%2F05%2F23&return_date=17%2F08%2F23

  return (
    <div className={`${
      pathname == "/dashboard/available" ? 'pl-[0px] px-0 pt-[2rem]': ' pl-[1.5rem] py-0 '
    }  border-[#fff] grid grid-cols-2 items-center justify-center gap-4 `}>
        <Dropdown category={"Engine size"} options={engine_sizes} setState={set_engine_size} param={"engine_size"}/>
        <Dropdown category={"Registration year"} options={years} setState={set_registration_year} param={"registration_year"}/>
        <Dropdown category={"Seats"} options={number_of_seats} setState={set_number_of_seats} param={"number_of_seats"}/>
        <Dropdown category={"Color"} options={car_color} setState={set_color} param={"color"}/>
    </div>
  )
}

export default DetailSelection