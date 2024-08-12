import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Search = ({ search, setSearch, handleSearch }) => {
    return (
        <div className='p-4'>
            <input 
                type='text' 
                placeholder='Search the Journal...'
                value={search}
                className='border-0 border-b-2 border-solid border-b-cyan-600 md:min-w-[10rem] w-[50%] h-10 sm:p-2 '
                onChange={(e) => setSearch(e.target.value)}
            />
            <button className='h-10 w-20 bg-cyan-500 m-4 rounded' onClick={handleSearch}>SEARCH</button>
        </div>
    );
};

const Journals = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState([]);

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

    const handleSearch = () => {
        const value = search.toLowerCase();
        if (value === "") {
            setFilteredData(data);
            return;
        }
        const filtered = data.filter(
            item =>
                item.title.toLowerCase().includes(value) ||
                item.description.toLowerCase().includes(value) ||
                item.author.toLowerCase().includes(value)
        );
        setFilteredData(filtered);
    };

    useEffect(() => {
        const fetchData = async () => {
            const token = getCookieValue('journal_token');
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}journal/getJournals`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            setData(response.data.journals);
            setFilteredData(response.data.journals); // Initialize filtered data
        };
        fetchData();
    }, []);

    useEffect(() => {
        setFilteredData(data);
    }, [data]);

    return (
        <>
            <div>
                <Search search={search} setSearch={setSearch} handleSearch={handleSearch} />
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4'>
                {filteredData.map((journal, index) => (
                    <Link 
                        to={`/${journal._id}`} 
                        key={index} 
                        className='bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-200 transform hover:scale-105 hover:shadow-2xl flex flex-col p-4 hover:bg-cyan-50'
                    >
                        <img src={journal.image} alt='journal' className='w-full h-[200px] object-cover mb-4' />
                        <div className='flex-grow'>
                            <h3 className='text-xl font-bold mb-2 text-gray-800'>{journal.title}</h3>
                            <div className='flex justify-between text-sm text-gray-500 mb-4'>
                                <span>@{journal.author}</span>
                                <span>{(journal.date).split("T")[0]}</span>
                            </div>
                            <p className='text-gray-600 mb-4'>{journal.description}</p>
                        </div>
                        <div className='mt-4'>
                            <button className='w-full px-4 py-2 bg-cyan-500 text-black rounded-lg hover:bg-cyan-600 transition duration-200'>READ MORE</button>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default Journals;
