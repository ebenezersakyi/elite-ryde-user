import React from 'react'
// import sucess from '../../assets/auth/success.svg'

const SuccessPage = () => {
  return (
    <div className="text-[#fff] 2xl:container 2xl:mx-auto px-[2.5rem] pt-[2rem] grid place-items-center">
      <div className='block mx-auto'>
      {/* <img src={sucess} alt="" className='w-[100px] block mx-auto mb-4'/> */}
        <p className='font-[100] text-center text-[1.2rem]'>Thank you for signing up to elite ryde.
          <br />
           You would receive a confirmation email shortly. 
          <br /> 
          Use <strong className='font-[400]'>p@ssw0rd123</strong> as your default sign in password</p>
      </div>
    </div>
  )
}

export default SuccessPage