import React from 'react'
import DetailTab from './DetailTab'
import { useSelector } from 'react-redux';
const AdditionalInformation = () => {
  const { data } = useSelector((d) => d?.selected_car);
  return (
    <div className='grid grid-cols-2 gap-4'>
        <div className='flex flex-col gap-4'>
            <DetailTab icon={'material-symbols:location-on-outline'} title={'Location'} value={data?.additionalInformation?.location}/>
            <DetailTab icon={'material-symbols:directions-car'} title={'License plate number'} value={data?.additionalInformation?.licensePlate}/>
            <DetailTab icon={'material-symbols:directions-car'} title={'Vehicle identification number'} value={data?.additionalInformation?.vehicleIdentificationNumber}/>
        </div>

        <div>
            map
        </div>
    </div>
  )
}

export default AdditionalInformation
