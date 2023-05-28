import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import car from '../../../assets/dashboard/cars/car.svg'
import axios from 'axios'
const CarCard = ({name, location, price_per_day, year, transmission, image, user_ratings, id}) => {
  const [loc, setLoc] = useState('')
  // https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyAKT8LXpv2aVfHyHKo8N9LzQmzCSktAYQQ
  async function getLocation(){
    try {
      const res = await axios({
        url: `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location?.lat},${location.long}&key=AIzaSyAKT8LXpv2aVfHyHKo8N9LzQmzCSktAYQQ`
      })
      // console.log(res?.data?.results[5]?.formatted_address);
      setLoc(res?.data?.results[5]?.formatted_address)
    } catch (error) {
      console.log('====================================');
      console.log(error);
      console.log('====================================');
    }
    finally{

    }
  }

  useEffect(()=> {
    getLocation()
  }, [])
  const nav = useNavigate()
  return (
    <div className='rounded-[20px] pb-4 border-[1px] backdrop-blur-md border-[#808080] hover:border-[#fff] hover:border-[1px] duration-700 cursor-pointer' 
    onClick={() => {
      nav('/dashboard/car')
    }}
    >
        <img src={car} alt="" className='rounded-t-[20px]'/>

        <div className='p-4 flex flex-col h-[50%] justify-between '>
            <div>
            <h4 className='font-semibold'>{name}</h4>
            <p className='text-[0.8rem] text-[#808080] font-light'>{loc}, {year}, {transmission}</p>
            </div>


            <div>
                <p className='font-light'><span className='text-[#808080]'>User rating - </span> {user_ratings.toFixed(2)}/10</p>
                <p className='font-semibold text-egreen text-[1.1rem]'>Ghc {price_per_day.toFixed(2)}/day</p>
            </div>
        </div>
    </div>
  )
}

export default CarCard