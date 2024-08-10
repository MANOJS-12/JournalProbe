// import { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import axios from 'axios';

// const JournalView = () => {
//   const { journalid } = useParams();
//   const [blog, setBlogs] = useState({});
//   const [date, setDate] = useState('');
//   const navigate = useNavigate();

//   const backClick = ()=>{
//     navigate('/journals');
//   }

//   function getCookieValue(name) {
//     const cookies = document.cookie.split(';');
//     for (let cookie of cookies) {
//       cookie = cookie.trim();
//       if (cookie.startsWith(name + '=')) {
//         return cookie.substring(name.length + 1);
//       }
//     }
//     return null;
//   }

//   useEffect(() => {
//     const fetchJournal = async () => {
//       const Token = getCookieValue('journal_token');
//       const response = await axios.post(`${import.meta.env.VITE_BASE_URL}journal/getJournalbyId`, { id: journalid }, {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${Token}`
//         }
//       });
//       setBlogs(response.data.message);
//     };
//     fetchJournal();
//   }, [journalid]);

//   useEffect(() => {
//     if (blog.date) {
//       setDate(blog.date.split('T')[0]);
//     }
//   }, [blog.date]);

//   return (
//     <div className='w-[100%] flex justify-center items-center'>
//       <div className='text-[#333] sm:w-[90%] flex flex-col justify-center items-center mb-5 py-10  rounded-md'>
//         <div className=' text-5xl sm:text-5xl sm:w-[90%] mt-10 sm:px-5'>
//           {blog.blogTitle}
//         </div>
//         <div className='flex flex-col sm:flex-row sm:w-[90%] sm:pt-10 sm:pb-10 justify-center items-center gap-5'>
//           <div className='w-[90%] mt-5 sm:w-[40%] sm:mt-0'>
//             <img src={blog.image} className='rounded-md' alt='Journal Cover'/>
//           </div>
//           <div className='flex flex-col w-[90%] gap-5 sm:w-[60%] py-5'>
//             <div className='text-l sm:text-3xl'>{blog.description}</div>
//             <div className='flex items-center gap-5 justify-between sm:justify-normal'>
//               <div className='flex flex-col items-end w-full'>
//                 <div className='bg-transparent p-[1rem] rounded-md flex flex-col items-start'>
//                   <div className='text-[1rem] text-gray-700'>Author : {blog.author}</div>
//                   <div className='text-[1rem] text-gray-700'>Date : {date}</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className='w-[90%] text-left'>
//           <div dangerouslySetInnerHTML={{ __html: blog.journalContent }}></div> 
//           {/* // removes the tag and adds its functionality to it - dangerouslySetInnerHTMl */}
//           <div className='flex items-center justify-center w-full mt-[2rem]'>
//               <button onClick={()=>backClick()} className='p-[1rem] bg-cyan-500 text-xl rounded-md'>Back to journals</button>
//           </div>
//         </div>
        
//       </div>
//     </div>
//   );
// };

// export default JournalView;


import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const JournalView = () => {
  const { journalid } = useParams();
  const [blog, setBlog] = useState({}); // Changed setBlogs to setBlog
  const [date, setDate] = useState('');
  const navigate = useNavigate();

  const backClick = () => {
    navigate('/journals');
  };

  function getCookieValue(name) {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      cookie = cookie.trim();
      if (cookie.startsWith(name + '=')) {
        return cookie.substring(name.length + 1);
      }
    }
    return null;
  }

  useEffect(() => {
    const fetchJournal = async () => {
      const Token = getCookieValue('journal_token');
      try {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}journal/getJournalbyId`, { id: journalid }, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Token}` // Added backticks for template literal
          }
        });
        setBlog(response.data.message); // Changed setBlogs to setBlog
      } catch (error) {
        console.error('Error fetching journal:', error); // Added error handling
      }
    };
    fetchJournal();
  }, [journalid]);

  useEffect(() => {
    if (blog.date) {
      setDate(blog.date.split('T')[0]);
    }
  }, [blog.date]);

  return (
    <div className='flex justify-center items-center min-h-14 py-10'>
      <div className='bg-transparent bg-opacity-90 shadow-2xl rounded-lg p-8 sm:w-4/5 w-full'>
        <h1 className='text-3xl font-bold text-center text-black mb-4 '>{blog.blogTitle}</h1>
        <p className='text-lg text-center text-grey mb-4' >{blog.description}</p>
        <div className='flex justify-center mb-4'>
          <img src={blog.image} className='rounded-md max-w-[40%] h-auto' alt='Journal Cover' />
        </div>
        <div className='flex justify-between text-black text-sm mb-4 font-semibold'>
          <span className='bg-cyan-500 p-1 rounded-md'>Author: {blog.author}</span>
          <span className='bg-cyan-500 p-1 rounded-md'>Date: {date}</span>
        </div>
        <div className='text-left text-gray-800 mb-4'>
          <div dangerouslySetInnerHTML={{ __html: blog.journalContent }} className='prose lg:prose-xl'></div>
        </div>
        <div className='flex justify-center'>
          <button onClick={backClick} className='px-6 py-3 bg-cyan-500 text-black font-semibold rounded-md hover:bg-cyan-600 transition duration-300'>
            BACK TO JOURNALS
          </button>
        </div>
      </div>
    </div>
  );
};

export default JournalView;


