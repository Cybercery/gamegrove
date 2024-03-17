import React from 'react'
import Gamepg from '../pages/game';
import { Link } from 'react-router-dom';

const Game = (game) => {
  console.log(game);
  const slug = game.game.slug;
  return (
    <Link to={`/game/${slug}`} className=''>
      <div className='min-w-[20vw] max-w-[20vw] min-h-[25vh] max-h-[49vh] bg-[#2C2E33] rounded-xl'>
        <div className='w-[18vw] h-[18vh] mx-auto pt-6 rounded-xl'>
          <img src={game.game.background_image} alt="" className='w-full h-full object-cover rounded-xl z-40'/>
        </div>
        <h1 className='text-white font-mainFont ms-[1vw] mt-3 text-xl font-extralight tracking-wide'>{game.game.name}</h1>
        <h1 className='text-[#37A134]	font-mainFont text-[1.5rem] ms-[1vw] pb-4'>699$</h1>
      </div>
    </Link>
  )
}

export default Game