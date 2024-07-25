import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex flex-col gap-4 text-[#333] bg-[#f3f4f5] p-4'>
        <div className='flex justify-around w-full'>
            <Link to={'/'}>Home</Link>
            <Link to={'/aboutus'}>About us</Link>
            <Link to={'/contactus'}>Contact us</Link>
        </div>
        <div className='text-[12px]'>
            © Copyright 2024 - JournalProbe
        </div>
    </div>
  )
}

export default Footer