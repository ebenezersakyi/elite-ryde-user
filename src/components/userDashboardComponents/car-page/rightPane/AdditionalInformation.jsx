import React from 'react'
import DetailTab from './DetailTab'
const AdditionalInformation = () => {
  return (
    <div className='grid grid-cols-2 gap-4'>
        <div className='flex flex-col gap-4'>
            <DetailTab icon={'material-symbols:location-on-outline'} title={'Location'} value={'Spintex'}/>
            <DetailTab icon={'material-symbols:directions-car'} title={'License plate number'} value={'GT-2344-21'}/>
            <DetailTab icon={'material-symbols:directions-car'} title={'Vehicle identification number'} value={'4af2334fed2324ds'}/>
        </div>

        <div>
            map
        </div>
    </div>
  )
}

export default AdditionalInformation
