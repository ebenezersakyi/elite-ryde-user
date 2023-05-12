import React from 'react'
import { show_filter } from '../../../store/modal_slide'
import { useDispatch } from 'react-redux'
import search from '../../../assets/dashboard/home/search.svg'
import filter from '../../../assets/dashboard/home/filter.svg'

const InputField = () => {
    const dispatch = useDispatch()
  return (
    <div className='border-[1px] border-bgrey rounded-[5px] px-4 py-[1.2rem] bg-[#00000042] backdrop-blur-lg flex justify-between items-center'>
        <img src={search} alt="" className='w-[20px]' />
        <input type='text'  className='w-[90%] outline-none bg-[transparent] text-bgrey text-[1.1rem] font-light' placeholder='Search for a car here'/>
        <img src={filter} alt="" className='w-[20px]'  onClick={() => {
            dispatch(show_filter())
        }}/>
    </div>
  )
}

export default InputField