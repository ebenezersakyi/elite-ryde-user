import React from 'react'
import Card from '../../components/about-page-components/Card'
import { AboutCards } from '../../utils/aboutCards'
const AboutHero = () => {
  return (
    <div className=' container mx-auto'>
        <p className='p-[3rem] text-center text-[1.8rem]'>At <span className='text-egreen'>Elite,</span> we bring car rentals right to your doorstep.</p>

        <div className='grid grid-cols-2 gap-x-[1.9rem] gap-y-[3rem] pt-[1.5rem] px-[3rem] mx-auto'>
            {
                AboutCards.map(({title, icon, subtext}, inx) => {
                    return <Card key={inx} text={title} icons={icon} subtext={subtext}/>
                })
            }
        </div>
    </div>
  )
}

export default AboutHero