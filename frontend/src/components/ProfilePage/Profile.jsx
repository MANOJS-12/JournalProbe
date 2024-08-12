
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { TbEdit } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {
    const navigator = useNavigate();
    const [userName, setUserName] = useState('');
    const [data, setData] = useState([]);
    const [flag, setFlag] = useState(1);

    // Function to get cookie value by name
    const getCookieValue = (name) => {
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
            cookie = cookie.trim();
            if (cookie.startsWith(name + '=')) {
                return cookie.substring(name.length + 1);
            }
        }
        return null;
    };

    // Fetch user journals
    const fetchData = async () => {
        const token = getCookieValue('journal_token');
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}journal/getUserJournal`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            setData(response.data.message);
        } catch (err) {
            console.log(err);
        }
    };

    // Fetch username
    const fetchUser = async () => {
        const token = getCookieValue('journal_token');
        try {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}users/getUser`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            setUserName(res.data.message.username);
        } catch (err) {
            console.log(err);
        }
    };

    // useEffect hooks to fetch data
    useEffect(() => {
        fetchUser();
        fetchData();
    }, []);

    useEffect(() => {
        fetchData();
    }, [flag]);

    // Handle edit button click
    const handleEdit = (journal_id) => {
        navigator(`/addjournals/${journal_id}`);
    };

    // Handle delete button click
    const handleDelete = async (userName, title) => {
        const token = getCookieValue('journal_token');
        try {
            await axios.post(`${import.meta.env.VITE_BASE_URL}journal/deleteJournal`, {
                userName,
                title
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            toast.success('Deleted Successfully');
            setFlag(!flag);
        } catch (err) {
            toast.error('Deletion failed');
            console.log(err.message);
        }
    };

    // Render the profile component
    return (
        <div className='w-full'>
            <div className='flex flex-col gap-x-5 my-5 rounded-xl'>
                <div className='w-[95%] rounded-xl'>
                    <div className='h-[20rem] flex flex-row shadow-xl items-center justify-center'>
                        <div className='hidden lg:block rounded-full'>
                            <img
                                src={'https://img.freepik.com/premium-photo/smiling-cartoon-character_1026065-8527.jpg'}
                                className='h-[15rem] p-4 rounded-[100%]'
                                alt='User Avatar'
                            />
                        </div>
                        <div className='flex flex-col ml-5'>
                            <p className='text-7xl'>{userName}</p>
                            <div className='py-2'><p className='0'>@{userName}</p></div>
                            <button className='bg-cyan-500 py-2 rounded' onClick={() => {
                                document.cookie = "journal_token='';max-age=0";
                                navigator('/login');
                            }}>LOGOUT</button>
                        </div>
                    </div>
                    <div className='mt-10'>
                        <hr className='h-[0.1rem] mb-[2rem] bg-cyan-500' />
                        <p className='text-5xl shadow-lg py-4 rounded bg-cyan-500'>YOUR ARTICLES</p>

                        <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                            {data.map((journal, index) => (
                                <div 
                                    key={index} 
                                    className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 flex flex-col border border-gray-200 hover:bg-cyan-50'
                                >
                                    <Link to={`/${journal._id}`} className='block p-4 flex-grow'>
                                        <img src={journal.image} alt='journal' className='w-full h-[200px] object-fill' />
                                        <h2 className='text-2xl mt-2'>{journal.title}</h2>
                                        <div className='flex justify-between mt-1'>
                                            <span className='text-gray-500'>@{journal.author}</span>
                                            <span className='text-gray-500'>{(journal.date).split("T")[0]}</span>
                                        </div>
                                        <p className='mt-2 text-gray-700'>{journal.description}</p>
                                    </Link>
                                    <div className='flex justify-between p-4 border-t'>
                                        <button className='p-[0.7rem] text-2xl bg-cyan-500 rounded-md' onClick={() => handleEdit(journal._id)}>
                                            <TbEdit />
                                        </button>
                                        <button className='p-[0.7rem] text-2xl bg-red-600 rounded-md' onClick={() => handleDelete(journal.userName, journal.title)}>
                                            <MdDeleteOutline />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Profile;

