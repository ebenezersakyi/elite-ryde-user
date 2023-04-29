import React from 'react'
import CarCard from '../shared/CarCard'
import img from '../../../assets/dashboard/vendor/back.svg'
import { useNavigate } from 'react-router-dom'
import { cars } from '../../../utils/car'
const CarsPane = () => {
  const nav = useNavigate()
  return (
    <div className='px-[1.5rem] lg:max-h-[100vh] col-span-2 overflow-scroll scrollbar-hide'>
      <div className='py-[2.5rem] flex justify-between items-center'>
        <h4 className='font-normal text-[2rem]'>
          Search results: <span className='text-egreen font-semibold'>{cars.length} cars</span>
        </h4>
        <span className="flex gap-4 items-center cursor-pointer hover:text-egreen text-[1.5rem]" onClick={() => {
          nav('/dashboard/vendors')
        }}>
          <img src={img} alt="" className="w-[70%]" />
          Back</span>
      </div>
    {/* cars */}
      <div className='grid lg:grid-cols-3 md:grid-cols-2   gap-[1.5rem]'>
        {cars.map(({name, year, user_ratings, transmission, location, image, price_per_day}, inx) => {
            return(
              <CarCard name={name} price_per_day={price_per_day} user_ratings={user_ratings} key={inx} location={location} year={year} transmission={transmission} image={image}/>
            )
        })}
      </div>
    </div>
  )
}

export default CarsPane