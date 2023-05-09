import React from 'react'
import load from '../../assets/loading.svg'
const Loader = () => {
  return (
    <div className='text-[white] text-center'>
        <img src={load} alt="" className='block mx-auto' />
        <h4>Loading...</h4>
        <p>
          This screen usually appears when the app is updating itself. <br />
          If this persists for too long try closing the browser, waiting a few seconds, then opening again.
          </p>
    </div>
  )
}

export default Loader