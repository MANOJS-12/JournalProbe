import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    
    <div className='flex flex-col gap-4 text-[#333] p-4'>
      <hr className='h-[0.1rem] flex justify-center bg-cyan-700 mt-4 shadow-2xl'></hr>  
        <div className='flex justify-around w-full'>
            <Link to={'/'}>HOME</Link>
            <Link to={'/about'}>ABOUT US</Link>
            <Link to={'/contactus'}>GET IN TOUCH</Link>
        </div>
        <div className='text-[12px]'>
            © COPYRIGHT 2024 - JOURNAL PROBE
        </div>
    </div>
  )
}

export default Footer