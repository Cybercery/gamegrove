import React from 'react'
import { useEffect, useState } from 'react';
import Game from '../components/Game';
import Navbar from '../components/Navbar';

const GOTTpg = () => {
    let [GOTY, setGOTY] = useState([]);
    useEffect(() => {
          fetch("https://api.rawg.io/api/games?key=407a808173854a60b9448adc36f88cf9&dates=2015-01-01,2022-12-31&metacritic=90,100&ordering=-added")
          .then((response) => response.json())
          .then((data) => {
            setGOTY(data.results);
          });
      }, []);
  return (
    <>
    <div className='bg-[#181C24]'>
        <Navbar />
        <div className="flex mt-10 ms-3 gap-2">
				<h1 className="text-white text-4xl font-mainFont font-normal text-center lg:text-6xl ms-6 lg:ms-12">
					Game Of
				</h1>
				<h1 className="text-[#0066FF] text-4xl font-mainFont font-normal text-center lg:text-6xl  ">
					The Year
				</h1>
		</div>
        <div className='justify-center content-center mt-5 gap-[5vw] flex pb-5 flex-wrap '>
            {
                GOTY.map((game) => {
                return (
                    <Game game={game}/>
                )
                })
            }
        </div>
    </div>
    </>
  )
}

export default GOTTpg;