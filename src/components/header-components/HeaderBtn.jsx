import React from 'react'
import { useNavigate } from 'react-router-dom'
const HeaderBtn = ({text, link, authOFunc}) => {
    const nav = useNavigate()
  return (
    <div className='cursor-pointer'>
        <p  className='text-white px-4 py-2 text-[1rem] border-white rounded-md border-2 uppercase hover:text-egreen  duration-700 '  onClick={() => {
            link ? nav(link) : authOFunc({ logoutParams: { returnTo: window.location.origin } })
        }}>{text}</p>
    </div>
  )
}

export default HeaderBtn