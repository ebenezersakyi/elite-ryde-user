import React from 'react'
import CarCard from '../shared/CarCard'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Loader from '../../shared_components/Loader'
import { toast } from "react-toastify";
import axios from 'axios'
const CarsPane = () => {
  const nav = useNavigate()
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  async function fetchCars() {
    try {
      setLoading(true);
      const response = await axios({
        url: `https://elite-ryde-management-api.azurewebsites.net/api/car`,
        method: "get",
      });

      if (response?.data?.status) {
        console.log(response?.data?.data);
        setData(response?.data?.data);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <div className=''>
      <div className='py-[2.5rem] flex justify-between items-center'>
        <h4 className='font-normal text-[2rem]'>
          Search results: <span className='text-egreen font-semibold'>{data?.length} cars</span>
        </h4>
      </div>
    {/* cars */}

      {loading ? (
          <Loader />
        ) : data?.length === 0 ? (
          <p>No cars</p>
        ) : (
          <div className='grid lg:grid-cols-4 md:grid-cols-2  max-h-[60vh]  overflow-scroll scrollbar-hide gap-[1.5rem]'>
            {data?.map(
              (
                {
                  basicInformation: {make, model, year, transmission},
                  additionalInformation: {geolocation: {long, lat}},
                  _id
                },
                inx
              ) => {
                return (
                  <CarCard
                    name={`${make} ${model}`}
                    price_per_day={1000}
                    user_ratings={0}
                    key={inx}
                    location={{long, lat}}
                    year={year}
                    transmission={transmission}
                    image={''}
                    id={_id}
                  />
                );
              }
            )}
          </div>
        )}
      </div>
  )
}

export default CarsPane