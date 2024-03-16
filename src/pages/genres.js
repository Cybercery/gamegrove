import React, { useEffect } from 'react'
import Navbar from '../components/Navbar';
import { useState } from 'react';

const Genres = () => {
    let [genres, setGenres] = useState([]);
    useEffect(() => {
        fetch("https://api.rawg.io/api/genres?key=407a808173854a60b9448adc36f88cf9")
        .then((response) => response.json())
        .then((data) => {
            setGenres(data.results);
            console.log(data);
      });
    }, []);
  return (
    <div className='bg-[#181C24]'>
        <Navbar />
        <div className='flex flex-wrap gap-[2vw] justify-center content-center py-8'>
            {
                genres.map((genre) => {
                    return (
                    <div className='bg-[#2C2E33] w-[22vw] h-[30vh] rounded-xl'>
                        <div className='w-[20vw] h-[20vh] mx-auto  mt-5 rounded-xl'>
                            <img src={genre.image_background} alt="" className='w-full h-full object-cover rounded-xl z-40'/>
                        </div>
                        <h1 className='text-white font-mainFont ms-[2vw] mt-3 text-2xl font-extralight tracking-wide mb-5'>{genre.name}</h1>
                    </div>
                    )
                })
            }
        </div>
    </div> 
  )
}

export default Genres