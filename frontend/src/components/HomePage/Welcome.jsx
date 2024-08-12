/* eslint-disable no-unused-vars */
import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from 'react-router';

const Welcome = () => {
  const navigate = useNavigate()
  const toExplore=()=>{
    navigate('/journals')
  }
  return (
    <section className='h-[70vh] mt-20 bg-transparent'>
    <div className='h-full flex justify-center items-center relative pb-10'>
        <div className='flex flex-col items-center px-10 z-10 text-center max-w-4xl mx-auto'>
            <p className='text-5xl font-extrabold text-black mb-6 leading-tight'>
                <TypeAnimation
                    sequence={[
                        'WELCOME TO JOURNAL PROBE: A BEACON OF SCHOLARLY EXCELLENCE',
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                />
            </p>
            <p className='text-lg text-black mb-10 max-w-2xl'>
                Join a global community of scholars and innovators in pushing the boundaries of knowledge. Discover, share, and grow with us.
            </p>
            <button 
                className='w-52 h-14 bg-cyan-500 text-black rounded text-xl font-semibold shadow-lg hover:bg-cyan-700 transition duration-300 transform hover:scale-105'
                onClick={toExplore}
            >
                EXPLORE
            </button>
        </div>
        <div className='absolute inset-0 z-0'>
        </div>
    </div>
</section>

  )
}
export default Welcome