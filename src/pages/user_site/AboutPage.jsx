import React from 'react'
import AboutHero from './aboutpage/AboutHero'
import SecondSection from './aboutpage/SecondSection'
import ThirdSection from './aboutpage/ThirdSection'
const AboutPage = () => {
  return (
    <div className='text-[#fff] 2xl:container 2xl:mx-auto'>
      <AboutHero />
      <SecondSection />
      <ThirdSection />
    </div>
  )
}

export default AboutPage