/* eslint-disable no-unused-vars */
import React from 'react'
import './ContactusStyles.css'

const ContactusForm = () =>{
    return(
        <div className='w-full text-[#333]'>
            <div className='input-double-wrapper'>
                <div className='input-wrapper'>
                    <div>First Name :</div>
                    <input 
                        type='text' 
                        placeholder='First name..'
                        className='input'
                    />
                </div>
                <div className='input-wrapper'>
                    <div>Last Name :</div>
                    <input 
                        type='text' 
                        placeholder='Last name..'
                        className='input'
                    />
                </div>
            </div>
            <div className='input-double-wrapper'>
                <div className='input-wrapper'>
                    <div>Email :</div>
                    <input 
                        type='email' 
                        placeholder='sample@gmail.com'
                        className='input'
                    />
                </div>
                <div className='input-wrapper'>
                    <div>Phone number :</div>
                    <input 
                        type='number' 
                        placeholder='12345678'
                        className='input'
                    />
                </div>
            </div>
            <div>
            <div className='w-[95%] flex flex-col items-start gap-4 text-lg m-5'>
                    <div>Message :</div>
                    <textarea 
                        type='text' 
                        placeholder='Your message'
                        className='h-[130px] w-full border-solid border-2 border-[#333] rounded-md p-2 bg-[#f3f4f5] text-[#333]'
                    />
                </div>
            </div>
            <button className='bg-[#9ad5e0] text-[#000000] p-2 px-4 text-xl rounded-md'>Submit</button>
        </div>
    )
}

const Contactus = () => {
  return (
    <div className='flex flex-row sm:m-10 m-0 shadow-sm'>
        <div className='w-[40%] bg-[#9ad5e0] text-[#000000] hidden md:flex rounded-full justify-center items-center flex-col gap-10 text-xl'>
            <div className='w-[80%]'>
            We value your feedback and are here to assist you with any inquiries or support you may need. Whether you have questions about our services, need help with a specific issue, or just want to share your thoughts, our team is ready to provide personalized support
            </div>
            <div>
                <div>+1 (213) 555-3890</div>
                <div>journalprobe@gmail.com</div>
                <div>USA</div>
            </div>
        </div>
        <div className='w-[full] md:w-[60%] p-4'>
            <ContactusForm/>
        </div>
    </div>
  )
}

export default Contactus