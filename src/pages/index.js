import NavBar from "../components/Navbar.js";
import Carouseel from "../components/Carousel.js";
import Game from "../components/Game.js";
import Footer from "../components/Footer.js";
import React from "react";
import { useState, useEffect } from "react";

// import Api from "../rawg.js";

const Home = () => {
  // console.log(Api.count);
  let [games, setGames] = useState([]);

  let [game2023, setGame2023] = useState([]);
  let [highestrated, setHighestrated] = useState([]);
  let [GOTY, setGOTY] = useState([]);
  useEffect(() => {
    fetch("https://api.rawg.io/api/games?key=407a808173854a60b9448adc36f88cf9")
      .then((response) => response.json())
      .then((data) => {
        setGames(data.results);
      });

    fetch(
      "https://api.rawg.io/api/games?dates=2023-01-01,2023-12-31&ordering=-added&key=407a808173854a60b9448adc36f88cf9"
    )
      .then((response) => response.json())
      .then((data) => {
        setGame2023(data.results);
      });

    fetch(
      "https://api.rawg.io/api/games?dates=2023-01-01,2023-12-31&ordering=-rating&key=407a808173854a60b9448adc36f88cf9"
    )
      .then((response) => response.json())
      .then((data) => {
        setHighestrated(data.results);
      });

    fetch(
      "https://api.rawg.io/api/games?key=407a808173854a60b9448adc36f88cf9&dates=2015-01-01,2022-12-31&metacritic=90,100&ordering=-added"
    )
      .then((response) => response.json())
      .then((data) => {
        setGOTY(data.results);
      });
  }, []);

  return (
    <>
      <div className="bg-[#181C24] w-full h-full">
        <NavBar />
        <Carouseel />
        <div className="bg-[#101216] py-10">
          <div className="flex content-between justify-between max-w-full mx-4 lg:mx-10">
            <h1 className="font-mainFont text-2xl lg:text-3xl mt-6 lg:pt-15 lg:pl-[7.5rem] text-white font-light">
              Trending Games
            </h1>
            <a
              href="/trending"
              className="text-white font-mainFont self-center text-[1rem] lg:text-[1.2rem] lg:pr-[7.5rem] opacity-55 font-light mt-6 lg:mt-12"
            >
              View All
            </a>
          </div>

          <div className="justify-center content-center text-[0.75rem] mt-5 gap-[1rem] p-0 pt-0  lg:gap-[rem] flex pb-5 flex-wrap ">
            {games.slice(0, 4).map((game) => {
              return <Game game={game} />;
            })}
          </div>
        </div>
        <div className=" py-10">
          <div className="flex content-between justify-between max-w-full mx-4 lg:mx-10">
            <h1 className="font-mainFont text-2xl lg:text-3xl mt-6 lg:mt-15  lg:pl-[7.5rem] text-white font-light">
              2023 Top Grossing Games
            </h1>
            <a
              href="/grossing"
              className="text-white font-mainFont self-center text-[1rem] lg:text-[1.2rem] lg:pr-[7.5rem] opacity-55 font-light mt-6 lg:mt-12"
            >
              View All
            </a>
          </div>
          <div className="justify-center content-center text-[0.75rem] mt-5 gap-[1rem] p-0 pt-0  lg:gap-[rem] flex pb-5 flex-wrap ">
            {game2023.slice(0, 4).map((game) => {
              return <Game game={game} />;
            })}
          </div>
        </div>
        <div className="bg-[#101216] py-10">
          <div className="flex content-between justify-between max-w-full mx-4 lg:mx-10">
            <h1 className="font-mainFont text-2xl lg:text-3xl mt-6 lg:mt-15 lg:pl-[7.5rem]  text-white font-light">
              Top Rated Games
            </h1>
            <a
              href="/toprated"
              className="text-white font-mainFont self-center text-[1rem] lg:text-[1.2rem] lg:pr-[7.5rem] opacity-55 font-light mt-6 lg:mt-12"
            >
              View All
            </a>
          </div>
          <div className="justify-center content-center text-[0.75rem] mt-5 gap-[1rem] p-0 pt-0  lg:gap-[rem] flex pb-5 flex-wrap ">
            {highestrated.slice(0, 4).map((game) => {
              return <Game game={game} />;
            })}
          </div>
        </div>

        <div className="flex content-between justify-between max-w-full mx-4 lg:mx-10">
          <h1 className="font-mainFont text-2xl lg:text-3xl mt-6 lg:mt-15 lg:pl-[7.5rem]  text-white font-light pt-10 pb-5">
            Game Of The Year
          </h1>
          <a
            href="/GOTY"
            className="text-white font-mainFont self-center text-[1rem] lg:text-[1.2rem] lg:pr-[7.5rem] opacity-55 font-light mt-6 lg:mt-12"
          >
            View All
          </a>
        </div>
        <div className="justify-center content-center text-[0.75rem] mt-5 gap-[1rem] p-0 pt-0  lg:gap-[rem] flex pb-20 flex-wrap ">
          {GOTY.slice(0, 4).map((game) => {
            return <Game game={game} />;
          })}
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;
