import React from 'react'
import coupe from '../../../assets/dashboard/vendor/body-styles/coupe.svg'
import van from '../../../assets/dashboard/vendor/body-styles/van.svg'
import truck from '../../../assets/dashboard/vendor/body-styles/truck.svg'
import hatchback from '../../../assets/dashboard/vendor/body-styles/hatchBack.svg'
const BodyStyleComponent = () => {
  const types = [
    {
      name: "Coupe",
      image: coupe
    },
    {
      name: "hatchback",
      image: hatchback
    },
    {
      name: "truck",
      image: truck
    },
    {
      name: "van",
      image: van
    },
  ]
  return (
    <div className="px-[2rem] py-2 ">
       <h4 className="text-[1.2rem] mb-6">Body type:</h4>

       <div className='grid grid-cols-2 mx-auto justify-center  gap-[1.5rem]'>
        {
          types.map(({image, name}, inx) =>{
            return(
              <div key={inx} className='flex border-[1px] min-w-[100px] px-[2rem] rounded-xl py-[1rem] items-center flex-col'>
                <img src={image} alt="" className='h-[30px]' />
                <p className='capitalize'>{name}</p>
              </div>
            )
          })
        }
       </div>
    </div>
  )
}

export default BodyStyleComponent