import React, { useState, useEffect } from 'react';
import Game from '../components/Game';
import Navbar from '../components/Navbar';

const Catalogue = (viewall) => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    fetch("viewall")
      .then((response) => response.json())
      .then((data) => {
        setGames(data.results);
        console.log(data);
      });
  }, []);

  return (
    <div className='bg-[#181C24] w-full h-screen'>
      <Navbar />
      <div className='justify-center content-center mt-5 gap-[5vw] flex flex-wrap pb-5 '>
        {
          games.map((game) => {
            return (
              <Game game={game}/>
            )
          })
        }
      </div>
    </div>
  );
};

export default Catalogue;
