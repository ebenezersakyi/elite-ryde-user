import React from 'react'
import PriceSlide from '../../components/userDashboardComponents/vendor-page/PriceSlide'
const VendorsPage = () => {
  return (
    <div className='text-[#fff] 2xl:container 2xl:mx-auto px-[2.5rem]'>
      <div className='border-[1px] rounded-2xl border-[#fff] p-4'>
        <div className='grid grid-cols-3 border-[1px] rounded-2xl border-[#fff] p-4 divide-x-2'>
          <PriceSlide />
          <PriceSlide />
          <PriceSlide />
        </div>
      </div>
    </div>
  )
}

export default VendorsPage