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


