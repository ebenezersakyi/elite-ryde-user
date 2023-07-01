import React from 'react'
import FeatureTab from './FeatureTab'
import { useSelector } from 'react-redux';
const CarFeatures = () => {
  const { data: {features, rentalConditions} } = useSelector((d) => d?.selected_car);
  // gps: false, 
  // aux: false,
  // sun_roof: false,
  // child_seat: false,
  // bluetooth: false,
  // bike_rack: false, 
  // third_row_seat: false,
  // mud_tyres: false,
  // chains: false,
  // car_taint: false,
  // roof_box: false, 
  // _18_plus: false,
  // smoking_allowed: false,
  // outside_accra: false,
  // deliver_car: false,
  // usb: false
  const feature_list = [
    {
      icon: 'ic:baseline-gps-fixed',
      title: 'GPS',
      isChecked: features?.includes("gps")
    },
    {
      icon: 'mdi:audio-input-stereo-minijack',
      title: 'Audio Input',
      isChecked: features?.includes("aux")
    },
    {
      icon: 'ph:sun-dim',
      title: 'Sun Roof',
      isChecked: features?.includes("sun_roof")
    },
    {
      icon: 'mdi:car-child-seat',
      title: 'Child Seat',
      isChecked: features?.includes("child_seat")
    },
    {
      icon: 'material-symbols:bluetooth-connected',
      title: 'Bluetooth',
      isChecked: features?.includes("bluetooth")
    },
    {
      icon: 'mdi:usb-port',
      title: 'USB Input',
      isChecked: features?.includes("usb")
    },
    {
      icon: 'material-symbols:directions-bike',
      title: 'Bike Rack',
      isChecked: features?.includes("bike_rack")
    },
    {
      icon: 'material-symbols:add',
      title: '3rd Row Seat',
      isChecked: features?.includes("third_row_seat")
    },
    {
      icon: 'mdi:tyre',
      title: 'Mud Tyres',
      isChecked: features?.includes("mud_tyres")
    },
    {
      icon: 'akar-icons:link-chain',
      title: 'Chains',
      isChecked: features?.includes("chains")
    },
    {
      icon: 'material-symbols:directions-car-outline',
      title: 'Car Taint',
      isChecked: features?.includes("car_taint")
    },
    {
      icon: 'material-symbols:directions-car-outline',
      title: 'Roof box',
      isChecked: features?.includes("roof_box")
    },
  ]


  const rental_condition = [
    {
      icon: 'uil:18-plus',
      title: '18 plus',
      isChecked: rentalConditions?.includes("_18_plus")
    },
    {
      icon: 'ic:baseline-smoking-rooms',
      title: 'Smoking Allowed',
      isChecked: rentalConditions?.includes("smooking_allowed")
    },
    {
      icon:'material-symbols:location-on',
      title: 'Trips Outside Accra', 
      isChecked: rentalConditions?.includes("outside_accra")
    },
    {
      icon: 'material-symbols:directions-car-outline',
      title: 'Willing to deliver Car',
      isChecked: rentalConditions?.includes("deliver_car")
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