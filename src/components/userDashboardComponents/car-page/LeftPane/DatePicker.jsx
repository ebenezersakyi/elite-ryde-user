import React from 'react'
import arrow from '../../../../assets/dashboard/vendor/arrow.svg'
const DatePicker = ({placeholder}) => {
  return (
    <div className='border-[1px] border-bgrey flex justify-between text-bgrey rounded-2xl w-full p-6'>
        <p>{placeholder}</p>
        <img src={arrow} alt="" />
    </div>
  )
}

export default DatePicker