/* eslint-disable no-unused-vars */
import React from 'react'
import homeimg from '../../assets/homepage.png'
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from 'react-router';

const Welcome = () => {
  const navigate = useNavigate()
  const toExplore=()=>{
    navigate('/journals')
  }
  return (
    // <section  className='h-[70vh] mt-20'>
    //     <div className='h-full flex justify-center items-center relative pb-10 '>
    //     <div className='flex flex-col px-[9rem] z-10 '>
    //         <p className='text-6xl flex flex-start'> <TypeAnimation
    //            sequence={[
    //             'JOURNAL PROBE WELCOMES YOU',
    //               1000, 
    //                 ]}
    //               wrapper="span"
    //              speed={50}
    //               repeat={Infinity}
    //           /></p> 
    //         <p className='py-2'>Join a Global Community of Scholars and Innovators in Pushing the Boundaries of Knowledge</p>
    //         <div className='py-10 flex flex-start'><button className='w-[12rem] h-[3.5rem] bg-cyan-500 rounded' onClick={toExplore}>
    //             <span className='text-2xl'>EXPLORE</span>
    //         </button>
    //         </div> 
    //    </div>
    //        <div>
    //         {/* <img src={homeimg} alt="" className='absolute z-0 top-[5rem] left-[4rem]'></img> */}
    //        </div>
    //     </div>
    //   <div>  
    //   </div>
    // </section>
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
            {/* Add background image or illustration here */}
            {/* <img src={homeimg} alt="" className='w-full h-full object-cover opacity-10' /> */}
        </div>
    </div>
</section>

  )
}
export default Welcome