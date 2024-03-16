// Gamepg.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Gamepg = (id) => {
    console.log(id);
//   let id=3498;
//   const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    // Fetch game data based on slug
    fetch(`https://api.rawg.io/api/games/${id}?key=407a808173854a60b9448adc36f88cf9`)
      .then(response => response.json())
      .then(data => {
        // Handle the received game data
        setGame(data);
      })
      .catch(error => console.error('Error fetching game:', error));
  }, []);

  if (!game) {
    return <div>Loading...</div>;
  }

  return (
    <div className=''>
      <h1>{game.name}</h1>
      <p>Description: {game.description}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default Gamepg;
