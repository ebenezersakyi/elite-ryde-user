import React from 'react'
import FeatureTab from './FeatureTab'
const CarFeatures = () => {
  const feature_list = [
    {
      icon: 'ic:baseline-gps-fixed',
      title: 'GPS',
      isChecked: true
    },
    {
      icon: 'mdi:audio-input-stereo-minijack',
      title: 'Audio Input',
      isChecked: false
    },
    {
      icon: 'ph:sun-dim',
      title: 'Sun Roof',
      isChecked: true
    },
    {
      icon: 'mdi:car-child-seat',
      title: 'Child Seat',
      isChecked: false
    },
    {
      icon: 'material-symbols:bluetooth-connected',
      title: 'Bluetooth',
      isChecked: true
    },
    {
      icon: 'mdi:usb-port',
      title: 'USB Input',
      isChecked: false
    },
    {
      icon: 'material-symbols:directions-bike',
      title: 'Bike Rack',
      isChecked: false
    },
    {
      icon: 'material-symbols:add',
      title: '3rd Row Seat',
      isChecked: true
    },
    {
      icon: 'mdi:tyre',
      title: 'Mud Tyres',
      isChecked: false
    },
    {
      icon: 'akar-icons:link-chain',
      title: 'Chains',
      isChecked: true
    },
    {
      icon: 'material-symbols:directions-car-outline',
      title: 'Car Taint',
      isChecked: false
    },
    {
      icon: 'material-symbols:directions-car-outline',
      title: 'Roof box',
      isChecked: true
    },
  ]


  const rental_condition = [
    {
      icon: 'uil:18-plus',
      title: '18 plus',
      isChecked: true
    },
    {
      icon: 'ic:baseline-smoking-rooms',
      title: 'Smoking Allowed',
      isChecked: false
    },
    {
      icon:'material-symbols:location-on',
      title: 'Trips Outside Accra'
    },
    {
      icon: 'material-symbols:directions-car-outline',
      title: 'Willing to deliver Car',
      isChecked: true
    },
  ]
  return (
    <div className=''>
        <h4 className='mb-4 text-[1.35rem]'>
          Feature list
        </h4>
        <div className='grid grid-cols-4 gap-4'>
          {
            feature_list.map(({title, icon, isChecked}, inx) => {
              return <FeatureTab title={title} icon={icon} isChecked={isChecked} key={inx}/>
            })
          }
        </div>
        <h4 className='my-4 text-[1.35rem]'>
          Rental Conditions
        </h4>
        <div className='grid grid-cols-4 gap-4'>
          {
            rental_condition.map(({title, icon, isChecked}, inx) => {
              return <FeatureTab title={title} icon={icon} isChecked={isChecked} key={inx}/>
            })
          }
        </div>
    </div>
  )
}

export default CarFeatures