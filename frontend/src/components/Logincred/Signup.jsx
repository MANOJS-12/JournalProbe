// /* eslint-disable no-unused-vars */
// import React, {useState} from 'react'
// import { useNavigate } from 'react-router-dom'
// import loginImg from '../../assets/image.png' 
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios'

// const SignupForm =()=>{
//   const navigate  = useNavigate()
//   const toSignup=()=>{
//     navigate('/login')
//   }
//   const [userName, setUserName] = useState('')
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [confirmPassword, setConfirmPassword] = useState('')

//   const handleSubmit = async(e) => {
//     e.preventDefault()
//     if(password !== confirmPassword){
//       toast.error("Password does not match");
//       return
//     }
//     try{
//       const response = await axios.post(`${import.meta.env.VITE_BASE_URL}users/signup`, {
//         userName, email, password
//       }, {
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       })
//       console.log(response)
//       if(response.status === 200){
//         toast.success("Registered Successfully")
//         document.cookie = `journal_token=${response.data.message.token}`
//         navigate('/')
//       }
//     }
//     catch(err){
//       toast.error("User already exists ")
//     }
//   }
//   return (
//     <>
//         <div
//                   style={{'animation': 'slideInFromLeft 1s ease-out'}}
//                   className="md:w-[50%] bg-gradient-to-r  shadow-2xl overflow-hidden p-10 space-y-8 ">
//                 <h2
//                     style={{'animation': 'appear 2s ease-out'}}
//                     className="text-center text-4xl font-extrabold text-gray-900"
//                 >
//                     REGISTER
//                 </h2>
//                 <p style={{'animation': 'appear 3s ease-out'}} className="text-center text-gray-900">
//                    GET STARTED WITH YOUR ACCOUNT
//                 </p>
//                     <form method="POST" action="#" className="space-y-6">
//                         <div className="relative">
//                         <input
//                             placeholder="Username"
//                             className="peer h-10 w-full border-b-2 border-solid border-gray-300 text-black bg-transparent placeholder-transparent focus:outline-none focus:border-gray-500"
//                             required=""
//                             id="name"
//                             name="name"
//                             type="text"
//                             onChange={(e) => setUserName(e.target.value)}
//                         />
//                         <label
//                             className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-cyan-500 peer-focus:text-sm"
//                             htmlFor="text"
//                             >USERNAME</label
//                         >
//                         </div>
//                         <div className="relative">
//                         <input
//                             placeholder="Email"
//                             className="peer h-10 w-full border-b-2 border-solid border-gray-300 text-black bg-transparent placeholder-transparent focus:outline-none focus:border-gray-500"
//                             required=""
//                             id="email"
//                             name="email"
//                             type="email"
//                             onChange={(e) => setEmail(e.target.value)}
//                         />
//                         <label
//                             className="absolute left-0 -top-3.5 text-gray-900 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-cyan-500 peer-focus:text-sm"
//                             htmlFor="email"
//                             >EMAIL</label
//                         >
//                         </div>
//                         <div className="relative">
//                         <input
//                             placeholder="Password"
//                             className="peer h-10 w-full border-b-2 border-solid border-gray-300 text-black bg-transparent placeholder-transparent focus:outline-none focus:border-gray-500"
//                             required=""
//                             id="password"
//                             name="password"
//                             type="password"
//                             onChange={(e) => setPassword(e.target.value)}
//                         />
//                         <label
//                             className="absolute left-0 -top-3.5 text-gray-900 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-cyan-500 peer-focus:text-sm"
//                             htmlFor="password"
//                             >PASSWORD</label
//                         >
//                         </div>
//                         <div className="relative">
//                         <input
//                             placeholder="Confirm Password"
//                             className="peer h-10 w-full border-b-2 border-solid border-gray-300 text-black bg-transparent placeholder-transparent focus:outline-none focus:border-gray-500"
//                             required=""
//                             id="password"
//                             name="password"
//                             type="password"
//                             onChange={(e) => setConfirmPassword(e.target.value)}
//                         />
//                         <label
//                             className="absolute left-0 -top-3.5 text-gray-900 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-cyan-500 peer-focus:text-sm"
//                             htmlFor="password"
//                             >CONFIRM PASSWORD</label
//                         >
//                         </div>
//                         <button
//                         className="w-full py-2 px-4 bg-cyan-500 hover:bg-cyan-600 rounded-md shadow-lg text-black font-semibold transition duration-200"
//                         type="submit"
//                         onClick={(e)=>handleSubmit(e)}  
//                         >
//                         REGISTER
//                         </button>
//                         <ToastContainer />
//                     </form>
//                         <div className="text-center text-gray-900">HAVE AN ACCOUNT ?
//                         <button className="text-cyan-700 px-2 hover:underline" onClick={()=>toSignup()}>LOGIN</button>
//                      </div>
//                 </div>
//     </>
//   )
// }

// const Signup = () => {
//   return (
//     <div>
//       <div className=''>
//       <div className='flex items-center justify-center h-[86vh]'>
//       <div className='bg-white w-[55rem] h-[35rem] flex '>
//              <div className='hidden w-[50%] md:block'>
//              <img className="w-full" src={loginImg}></img>  
//              </div>
//                <SignupForm/>
//              </div>
//          </div>
//     </div>
//     </div>
//   )
// }


import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import loginImg from '../../assets/image.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const SignupForm = () => {
  const navigate = useNavigate();
  const toSignup = () => {
    navigate('/login');
  };

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      toast.error("Invalid email format");
      return;
    }

    if (!validatePassword(password)) {
      toast.error("Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}users/signup`, {
        userName, email, password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(response);
      if (response.status === 200) {
        toast.success("Registered Successfully");
        document.cookie = `journal_token=${response.data.message.token}`;
        navigate('/');
      }
    } catch (err) {
      toast.error("User already exists");
    }
  };

  return (
    <>
      <div
        style={{ 'animation': 'slideInFromLeft 1s ease-out' }}
        className="md:w-[50%] bg-gradient-to-r shadow-2xl overflow-hidden p-10 space-y-8">
        <h2
          style={{ 'animation': 'appear 2s ease-out' }}
          className="text-center text-4xl font-extrabold text-gray-900">
          REGISTER
        </h2>
        <p style={{ 'animation': 'appear 3s ease-out' }} className="text-center text-gray-900">
          GET STARTED WITH YOUR ACCOUNT
        </p>
        <form method="POST" action="#" className="space-y-6">
          <div className="relative">
            <input
              placeholder="Username"
              className="peer h-10 w-full border-b-2 border-solid border-gray-300 text-black bg-transparent placeholder-transparent focus:outline-none focus:border-gray-500"
              required
              id="name"
              name="name"
              type="text"
              onChange={(e) => setUserName(e.target.value)}
            />
            <label
              className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-cyan-500 peer-focus:text-sm"
              htmlFor="name">
              USERNAME
            </label>
          </div>
          <div className="relative">
            <input
              placeholder="Email"
              className="peer h-10 w-full border-b-2 border-solid border-gray-300 text-black bg-transparent placeholder-transparent focus:outline-none focus:border-gray-500"
              required
              id="email"
              name="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              className="absolute left-0 -top-3.5 text-gray-900 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-cyan-500 peer-focus:text-sm"
              htmlFor="email">
              EMAIL
            </label>
          </div>
          <div className="relative">
            <input
              placeholder="Password"
              className="peer h-10 w-full border-b-2 border-solid border-gray-300 text-black bg-transparent placeholder-transparent focus:outline-none focus:border-gray-500"
              required
              id="password"
              name="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label
              className="absolute left-0 -top-3.5 text-gray-900 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-cyan-500 peer-focus:text-sm"
              htmlFor="password">
              PASSWORD
            </label>
          </div>
          <div className="relative">
            <input
              placeholder="Confirm Password"
              className="peer h-10 w-full border-b-2 border-solid border-gray-300 text-black bg-transparent placeholder-transparent focus:outline-none focus:border-gray-500"
              required
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <label
              className="absolute left-0 -top-3.5 text-gray-900 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-cyan-500 peer-focus:text-sm"
              htmlFor="confirmPassword">
              CONFIRM PASSWORD
            </label>
          </div>
          <button
            className="w-full py-2 px-4 bg-cyan-500 hover:bg-cyan-600 rounded-md shadow-lg text-black font-semibold transition duration-200"
            type="submit"
            onClick={(e) => handleSubmit(e)}>
            REGISTER
          </button>
          <ToastContainer />
        </form>
        <div className="text-center text-gray-900">
          HAVE AN ACCOUNT?
          <button className="text-cyan-700 px-2 hover:underline" onClick={() => toSignup()}>
            LOGIN
          </button>
        </div>
      </div>
    </>
  );
};

const Signup = () => {
  return (
    <div>
      <div className='flex items-center justify-center h-[86vh]'>
        <div className='bg-white w-[55rem] h-[35rem] flex'>
          <div className='hidden w-[50%] md:block'>
            <img className="w-full" src={loginImg} alt="Login" />
          </div>
          <SignupForm />
        </div>
      </div>
    </div>
  );
};

export default Signup;
