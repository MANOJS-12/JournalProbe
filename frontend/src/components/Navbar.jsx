/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import { FaFile } from "react-icons/fa";
import {Link,useNavigate} from 'react-router-dom'
import hamburger from '../assets/burger-menu-svgrepo-com.svg'
import close from '../assets/close-svgrepo-com.svg'
import About from './HomePage/About';


const Navbar = () => {
  const navigate = useNavigate()

   const [isMenuOpen, setIsMenuOpen] = useState(false)
   const toPublish=()=>{
     navigate('/addjournals')
   }

  return (
    <>
        <header className='flex items-center justify-between border-b-4 border-cyan-500 '>
             <span className='text-5xl'>J<span className='text-2xl mb-10 absolute'>P</span></span>
             <div className='flex flex-row gap-x-4 justify-center items-center'>
             <button onClick={toPublish} className='flex bg-cyan-500 w-[15rem] h-[3rem] items-center justify-center rounded gap-x-3'>
                <FaFile className='text-3xl px-2'></FaFile>
                <button className='text-xl'>ADD JOURNAL</button>
             </button>
             
             {/* hidden lg: */}
             <div className='block relative'>
                <ul className={`
                  lg:flex flex-col lg:flex-row absolute lg:static gap-x-12 text-xl
                   top-8  ${(isMenuOpen)?'-left-12':'hidden'} px-5 lg:p-0 shadow-lg lg:shadow-none lg: overflow-hidden
                `}>
                  {/* for text color we can add in ul "text-color-range ? */}
                    <Link to='/home'><li className='p-4 ml-3 lg:p-0 shadow-sm '>HOME</li></Link>
                    <Link to='/journals'><li className='p-4 lg:p-0'>JOURNALS</li></Link>
                    <Link to='/contactus'><li className='p-4 lg:p-0 transition-transform ease-in-out'>GET IN TOUCH</li></Link> 
                    <Link to='/profile'><li className='p-4 lg:p-0'>PROFILE</li></Link>
                </ul>
             </div>
             <button onClick={()=>{setIsMenuOpen(!isMenuOpen)}}>
               <img src={(isMenuOpen)?close:hamburger} className='h-8 lg:hidden'/>
             </button>
             </div>
        </header> 
        <hr className='h-[0.1rem] flex justify-center bg-cyan-700 mt-4 shadow-2xl'></hr>  
    </>
  )
}

export default Navbar