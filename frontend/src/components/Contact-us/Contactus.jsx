
import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import './ContactusStyles.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios for making API calls

const ContactusForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const formRef = useRef();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmailAndStoreData = async (e) => {
    e.preventDefault();

    const templateParams = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone_number: formData.phoneNumber,
      message: formData.message,
    };

    try {
      // Send email using emailjs
      await emailjs.send('service_mi71sks', 'template_24cv2x6', templateParams, '4rcP9ONkSzPtyasdG');

      // Store data in the database
      await axios.post('http://localhost:5000/api/contactus', formData); // Adjust the URL as necessary

      setShowSuccessPopup(true);
      setTimeout(() => {
        setShowSuccessPopup(false);
        navigate('/'); // Redirect to home page
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="contact-form-container">
        <form ref={formRef} onSubmit={sendEmailAndStoreData} className="contact-form">
          <div className='input-double-wrapper'>
            <div className='input-wrapper'>
              <div>FIRST NAME :</div>
              <input
                type='text'
                name='firstName'
                value={formData.firstName}
                onChange={handleChange}
                placeholder='First name..'
                className='input'
                required // Add required validation
              />
            </div>
            <div className='input-wrapper'>
              <div>LAST NAME :</div>
              <input
                type='text'
                name='lastName'
                value={formData.lastName}
                onChange={handleChange}
                placeholder='Last name..'
                className='input'
                required // Add required validation
              />
            </div>
          </div>
          <div className='input-double-wrapper'>
            <div className='input-wrapper'>
              <div>EMAIL :</div>
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='sample@gmail.com'
                className='input'
                required // Add required validation
              />
            </div>
            <div className='input-wrapper'>
              <div>PHONE NUMBER :</div>
              <input
                type='text'
                name='phoneNumber'
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder='12345678'
                className='input'
                required // Add required validation
              />
            </div>
          </div>
          <div className='w-[95%] flex flex-col items-start gap-4 text-lg m-5'>
            <div>YOUR MESSAGE :</div>
            <textarea
              name='message'
              value={formData.message}
              onChange={handleChange}
              placeholder='Your message'
              className='h-[130px] w-full border-solid border-2 border-cyan-700 rounded-md p-2 bg-[#ffffff] text-[#333]'
              required // Add required validation
            />
          </div>
          <button type="submit" className='bg-cyan-500 text-[#000000] p-2 px-4 text-xl rounded'>
            SUBMIT YOUR MESSAGE
          </button>
        </form>
        {showSuccessPopup && <div className="success-popup">Your message has been sent!</div>}
      </div>
    </>
  );
}

const Contactus = () => {
  return (
    <div className='flex flex-row sm:m-10 m-0 '>
      <div className='w-[40%] bg-[#9cf0ff] text-[#000000] hidden md:flex rounded-br-full justify-center items-center flex-col gap-10 text-xl'>
        <div className='w-[80%]'>
        YOUR FEEDBACK IS IMPORTANT TO US, AND WE ARE COMMITTED TO ASSISTING YOU WITH ANY QUESTIONS OR SUPPORT YOU MAY REQUIRE!
        </div>
      </div>
      <div className='w-full md:w-[60%] p-4'>
        <ContactusForm />
      </div>
    </div>
  )
};

export default Contactus;

