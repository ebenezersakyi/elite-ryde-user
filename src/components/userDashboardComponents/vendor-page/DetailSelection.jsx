import React from 'react'
import Dropdown from '../shared/Dropdown'
import { years, engine_sizes, number_of_seats, car_color } from '../../../utils/dropdowncontents'
const DetailSelection = ({cls}) => {
  return (
    <div className={`${cls} border-[#fff] grid grid-cols-2 items-center justify-center gap-4`}>
        <Dropdown category={"Engine size"} options={engine_sizes}/>
        <Dropdown category={"Registration year"} options={years}/>
        <Dropdown category={"Seats"} options={number_of_seats}/>
        <Dropdown category={"Color"} options={car_color}/>
    </div>
  )
}

export default DetailSelection