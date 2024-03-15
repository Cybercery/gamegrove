// Filename - pages/index.js
import React, { useEffect, useState } from 'react'
import NavBar from "../components/Navbar.js";
import Carouseel from "../components/Carousel.js";
import Game from "../components/Game.js";

const Home = () => {

  let [games, setGames] = useState([]);
  let [genres, setGenres] = useState([]);
  useEffect(() => {

    fetch("https://api.rawg.io/api/games?key=407a808173854a60b9448adc36f88cf9")
      .then((response) => response.json())
      .then((data) => {
        setGames(data.results);
        console.log(data);
      });
    
    
  }, []);

  return (
    <>
      <div className="bg-[#181C24] w-full h-full">
        <NavBar />
        <Carouseel />
        <h1 className='font-mainFont text-3xl mt-12 ms-10 text-white font-light'>Treanding Games</h1>

        <div className='justify-center content-center mt-5 gap-[5vw] flex pb-5 '>
          {
            games.slice(0,4).map((game) => {
              return (
                <Game game={game}/>
              )
            })
          }
        </div>

      </div>

    </>
  );
};

export default Home;
