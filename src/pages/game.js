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
      <div className='flex flex-col mt-8 content-center justify-center lg:flex-row lg:content-start lg:justify-start gap-[10vw] lg:mt-[5rem] lg:ms-[5rem] '>
        <img src={game.background_image} alt={game.name} className='w-[85vw] h-[25vh] self-center lg:w-[45vw] lg:h-[50vh] rounded-xl' />
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
      </div>
    </div>
  );
};

export default Gamepg;
