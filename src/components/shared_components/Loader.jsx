import React from 'react'
import load from '../../assets/loading.svg'
const Loader = () => {
  return (
    <div>
        <img src={load} alt="" className='block mx-auto' />
    </div>
  )
}

export default Loader