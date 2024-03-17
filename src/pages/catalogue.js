import React, { useState, useEffect } from 'react';
import Game from '../components/Game';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';

const Catalogue = () => {
  const { slug } = useParams();
  const [game, setGame] = useState(null);
  console.log(slug);
  useEffect(() => {
    // Fetch game data based on slug
    fetch(`https://api.rawg.io/api/games?genres=${slug}&key=407a808173854a60b9448adc36f88cf9`)
      .then(response => response.json())
      .then(data => {
      // Handle the received game data
      setGame(data);
      })
      .catch(error => console.error('Error fetching game:', error));
  }, [slug]);

  return (
    <div className='bg-[#181C24] w-full min-h-screen'>
      <Navbar />
      <div className='justify-center content-center mt-5 gap-[5vw] flex flex-wrap pb-5 '>
        {game?.results?.map(game => (
          <Game game={game} key={game.id} />
        ))}
      </div>
    </div>
  );
};

export default Catalogue;
