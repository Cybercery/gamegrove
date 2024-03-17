import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

// Gamepg.js



const Gamepg = () => {
  const { slug } = useParams();
  const [game, setGame] = useState(null);
  console.log(slug);
  useEffect(() => {
    // Fetch game data based on slug
    fetch(`https://api.rawg.io/api/games/${slug}?key=407a808173854a60b9448adc36f88cf9`)
      .then(response => response.json())
      .then(data => {
        // Handle the received game data
        setGame(data);
      })
      .catch(error => console.error('Error fetching game:', error));
  }, [slug]);

  if (!game) {
    return <div>Loading...</div>;
  }

  return (
    <div className='bg-[#181C24] w-screen min-h-screen'>
      <Navbar />
      <div className='flex flex-col mt-8 content-center justify-center lg:flex-row lg:content-center lg:justify-center gap-[7vw] lg:mt-[5rem]  '>
        <img src={game.background_image} alt={game.name} className='w-[85vw] h-[25vh] self-center lg:w-[45vw] lg:h-[50vh] rounded-xl' />
        {/* <div className='w-[85vw] h-[25vh] self-center lg:w-[45vw] lg:h-[50vh] rounded-xl'>
          <video controls className='w-full h-full'>
            <source src={game.movies} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div> */}
          <div className='flex flex-col'>
          <div className='bg-[#2C2E33] rounded-3xl w-[85vw] min-h-[30vh] lg:w-[35vw] lg:min-h-[30vh] self-center lg:self-start py-7'>
            <div className='flex content-between justify-between mx-7 '>
              <h1 className='text-white font-mainFont text-xl lg:text-3xl font-light'>{game.name}</h1>
              <p className='text-white font-mainFont text-[0.9rem] lg:text-[1.2rem] self-center opacity-55 font-light'>{game.released}</p>
            </div>
            <div>
              <div className='flex gap-3'>
                <ul className='text-[#0066ff] text-[1rem]  font-mainFont mx-7 mt-3 flex gap-5'>
                  {game.genres.map(genre => (
                    <li key={genre.id}>{genre.name}</li>
                  ))}
                </ul>
              </div>
            </div>
            <p className='text-white font-mainFont text-[0.9rem] lg:text-[1.2rem] mx-7 mt-3 opacity-55 font-light'>Age Rating: {game.esrb_rating ? game.esrb_rating.name : 'Not available'}</p>
            <p className='text-white font-mainFont text-[0.8rem] lg:text-[0.9rem] mx-7 mt-3 font-light '>{game.description_raw.substring(0, 500)}...</p>
          </div>
          <div className='flex flex-row  mt-5 content-between justify-between'>
            <button className='bg-[#2C2E33] border-[2px] border-[#37A134] rounded-3xl w-[40vw] h-[10vh] mt-5 lg:w-[16vw] lg:h-[10vh] self-center lg:self-start '>
              <h1 className='text-white font-mainFont text-lg lg:text-2xl font-light self-center'>Buy Now</h1>
            </button>
            <button className='bg-[#2C2E33] rounded-3xl w-[40vw] h-[10vh] mt-5 lg:w-[16vw] lg:h-[10vh] self-center lg:self-start border-[2px] border-[#1456B8]'>
              <h1 className='text-white font-mainFont  text-lg lg:text-2xl font-light self-center'>Add to Cart</h1>
            </button>
          </div>
          </div>
      </div>
      
      <div className='bg-[#101216] w-screen py-5'>
        <h1 className='text-white font-mainFont text-3xl font-light text-start'>Screenshots</h1>
        <div className='flex flex-row gap-5 justify-center content-center mt-5'>
          {/* {game.short_screenshots.slice(0, 4).map(screenshot => (
            <img key={screenshot.id} src={screenshot.image} alt={game.name} className='w-[20vw] h-[15vh] rounded-xl' />
            ))
          } */}
        </div>
      </div>  
    </div>
  );
};

export default Gamepg;
