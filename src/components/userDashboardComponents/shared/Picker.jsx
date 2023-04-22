import React from 'react'
import arrow from '../../../assets/dashboard/vendor/arrow.svg'

const Picker = ({img, cat, placeholder}) => {
  return (
    <div className='px-[2rem] flex justify-around  '>
        <img src={img} alt="" className='w-[40px]' />
        <div>
            <span className="flex items-center gap-2">
                <h4 className='font-[500] text-[1.2rem]'>{cat}</h4>
                <img src={arrow} alt="" />
            </span>

            <p className='font-thin text-[1.2rem]'>{placeholder}</p>
        </div>
    </div>
  )
}

export default Picker