import React from 'react'
import SectionLayout from './rightPane/SectionLayout'
import BasicInformation from './rightPane/BasicInformation'
import AdditionalInformation from './rightPane/AdditionalInformation'
import CarFeatures from './rightPane/CarFeatures'
import TimeDetails from './rightPane/TimeDetails'
const Rightpane = () => {

  return (
    <div className='col-span-2 max-h-[85vh] overflow-y-scroll flex flex-col gap-[2.5rem] scrollbar-hide' >
        <SectionLayout title='Basic Information'>
          <BasicInformation />
        </SectionLayout>
        <SectionLayout title={'Additional Information'}>
          <AdditionalInformation />
        </SectionLayout>
        <SectionLayout title={'Car features'}>
          <CarFeatures />
        </SectionLayout>
        <SectionLayout title={'Time Details'}>
          <TimeDetails />
        </SectionLayout>
    </div>
  )
}

export default Rightpane