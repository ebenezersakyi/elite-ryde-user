import React from 'react'
import CarCard from '../shared/CarCard'
import { useNavigate } from 'react-router-dom'
import { cars } from '../../../utils/car'
const CarsPane = () => {
  const nav = useNavigate()
  return (
    <div className=''>
      <div className='py-[2.5rem] flex justify-between items-center'>
        <h4 className='font-normal text-[2rem]'>
          Search results: <span className='text-egreen font-semibold'>{cars.length} cars</span>
        </h4>
      </div>
    {/* cars */}
      <div className='grid lg:grid-cols-4 md:grid-cols-2  max-h-[60vh]  overflow-scroll scrollbar-hide gap-[1.5rem]'>
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