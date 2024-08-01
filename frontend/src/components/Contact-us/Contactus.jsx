import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactusStyles.css';

const ContactusForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const form = React.createRef();  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d031fwv', 'template_j7vnx7b', form.current, '4rcP9ONkSzPtyasdG'  )
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className='w-full text-[#000]'>
      <form ref={form} onSubmit={sendEmail}>
        <div className='input-double-wrapper'>
          <div className='input-wrapper'>
            <div>First Name :</div>
            <input
              type='text'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder='First name..'
              className='input'
            />
          </div>
          <div className='input-wrapper'>
            <div>Last Name :</div>
            <input
              type='text'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='sample@gmail.com'
              className='input'
            />
          </div>
          <div className='input-wrapper'>
            <div>Phone number :</div>
            <input
              type='number'
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
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
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder='Your message'
              className='h-[130px] w-full border-solid border-2 border-cyan-700 rounded-md p-2 bg-[#f3f4f5] text-[#333]'
            />
          </div>
        </div>
        <button className='bg-cyan-500 text-[#000000] p-2 px-4 text-xl rounded '>Submit</button>
      </form>
    </div>
  );
};

export default ContactusForm;

// /* eslint-disable no-unused-vars */
// import React from 'react'
// import './ContactusStyles.css'
// import { Link } from 'react-router-dom'
// import emailjs from 'emailjs-com'

// const ContactusForm = () => {
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         phone: '',
//         message: ''
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         emailjs.send(
//             'service_d031fwv',    // Replace with your service ID
//             'template_j7vnx7b',    // Replace with your template ID
//             formData,
//             '4rcP9ONkSzPtyasdG'         // Replace with your user ID
//         ).then((response) => {
//             console.log('SUCCESS!', response.status, response.text);
//         }).catch((err) => {
//             console.error('FAILED...', err);
//         });
//     };

//     return (
//         <div className='w-full text-[#000]'>
//             <form onSubmit={handleSubmit}>
//                 <div className='input-double-wrapper'>
//                     <div className='input-wrapper'>
//                         <div>First Name :</div>
//                         <input 
//                             type='text' 
//                             name='firstName'
//                             placeholder='First name..'
//                             className='input'
//                             value={formData.firstName}
//                             onChange={handleChange}
//                         />
//                     </div>
//                     <div className='input-wrapper'>
//                         <div>Last Name :</div>
//                         <input 
//                             type='text' 
//                             name='lastName'
//                             placeholder='Last name..'
//                             className='input'
//                             value={formData.lastName}
//                             onChange={handleChange}
//                         />
//                     </div>
//                 </div>
//                 <div className='input-double-wrapper'>
//                     <div className='input-wrapper'>
//                         <div>Email :</div>
//                         <input 
//                             type='email' 
//                             name='email'
//                             placeholder='sample@gmail.com'
//                             className='input'
//                             value={formData.email}
//                             onChange={handleChange}
//                         />
//                     </div>
//                     <div className='input-wrapper'>
//                         <div>Phone number :</div>
//                         <input 
//                             type='tel' 
//                             name='phone'
//                             placeholder='12345678'
//                             className='input'
//                             value={formData.phone}
//                             onChange={handleChange}
//                         />
//                     </div>
//                 </div>
//                 <div>
//                     <div className='w-[95%] flex flex-col items-start gap-4 text-lg m-5'>
//                         <div>Message :</div>
//                         <textarea 
//                             name='message'
//                             placeholder='Your message'
//                             className='h-[130px] w-full border-solid border-2 border-cyan-700 rounded-md p-2 bg-[#f3f4f5] text-[#333]'
//                             value={formData.message}
//                             onChange={handleChange}
//                         />
//                     </div>
//                 </div>
//                 <button type='submit' className='bg-cyan-500 text-[#000000] p-2 px-4 text-xl rounded'>
//                     Submit
//                 </button>
//             </form>
//         </div>
//     )
// }

// export default ContactusForm;
