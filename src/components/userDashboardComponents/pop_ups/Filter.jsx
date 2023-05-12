import React from 'react'
import Picker from '../shared/Picker'
import PriceSlide from '../vendor-page/PriceSlide'
import BodyStyleComponent from '../vendor-page/BodyStyleComponent'
import DetailSelection from '../vendor-page/DetailSelection'
import calender from '../../../assets/dashboard/vendor/second-pane/calender.svg'
import location from '../../../assets/dashboard/vendor/second-pane/location.svg'
import dayjs from 'dayjs'
import { useSelector, useDispatch } from "react-redux";
import { set_pick_up_date, set_return_date } from '../../../store/dashboard_state_slice'
import { hide_modal } from '../../../store/modal_slide'
import { useNavigate } from 'react-router-dom'

const Filter = () => {
    const nav = useNavigate()
    const dispatch = useDispatch()
const {pick_up_date, return_date} = useSelector((data) => data.details)
  return (
    <div className="text-[#fff] 2xl:container 2xl:mx-auto px-[2.5rem] my-[1.5rem] backdrop-blur-[12px] ">
    
    <div className="border-[1px] rounded-2xl border-bgrey p-[2rem] flex flex-col gap-[2rem] relative">
    <p className='absolute right-4 top-4 cursor-pointer' onClick={() => {
        dispatch(hide_modal())
    }}>X</p>
      <div className="grid-cols-3 border-[1px] grid rounded-2xl border-bgrey p-8 divide-x-2 divide-bgrey">
        <PriceSlide  />
        <BodyStyleComponent />
        <DetailSelection/>
      </div>
      <div className=" grid grid-cols-3 gap-[2rem] items-center">
        <div className=" border-[1px] grid grid-cols-3 col-span-2 items-center rounded-2xl border-bgrey divide-bgrey py-[3.5rem] divide-x-2">
          <Picker img={location} cat={"Choose a location"} placeholder={"East Legon"} />
          <Picker img={calender} cat={"Pick-up date"} placeholder={pick_up_date} type={1} setDate={set_pick_up_date}/>
          <Picker img={calender} cat={"Return date"} placeholder={return_date} type={1} start={dayjs(pick_up_date)} setDate={set_return_date}/>
        </div>
        <div onClick={() =>{
            dispatch(hide_modal())
            nav('/dashboard/available')
        }} className="rounded-2xl border-bgrey border-[1px] h-fit grid place-items-center text-[2rem] hover:bg-egreen/50 hover:border-egreen/50 cursor-pointer  px-[3rem] py-[1rem]">
          Search
        </div>
      </div>
    </div>
  </div>
  )
}

export default Filter