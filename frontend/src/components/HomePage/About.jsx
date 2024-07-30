/* eslint-disable no-unused-vars */
import React from 'react'

const About = () => {
  return (
    <div>
    <section id='about' className=''>
      <div className='text-center '>
        <div className=' w-[78rem]  h-[40rem] flex justify-center items-center mb-6 rounded-xl py-9 flex-col shadow-b-xl border-l-4  '>
        <div className='mb-[4rem]'><span className='text-4xl py-2  px-4 bg-cyan-500 rounded shadow-xl'>About Us</span></div>
        <div className='flex flex-row justify-between items-center gap-x-10 mx-10'>
        <div className='text-xl w-[60%] flex items-center text-justify justify-center py-10 px-[2rem]'> At JournalProbe, our mission is to empower researchers, scholars, and practitioners worldwide by providing a dynamic platform for the exchange of ideas and the publication of high-quality, peer-reviewed articles. We are committed to fostering academic excellence, promoting interdisciplinary collaboration, and driving innovation forward. Our dedication to advancing knowledge and promoting inclusivity ensures that diverse perspectives are valued and contribute to meaningful discoveries. Through our comprehensive resources and community-driven approach, we strive to support the academic community in making significant advancements and impactful contributions to their fields.</div>
        <div className='w-[40%] flex items-center justify-center'><img className='h-[25rem] rounded-s-md mr-7' src={'https://journey.cloud/content_assets/journal/closeup-hands-writing-journal.jpg'} alt='hello'></img></div>
          </div>
        </div>
      </div>
    </section>
  </div>
  
  )
}

export default About