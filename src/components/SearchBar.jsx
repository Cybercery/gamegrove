import React, { useState } from "react";

export const SearchBar = () => {
  const [input, setInput] = useState("");

  const key = "18d8dc115d954615a6fe8522598e8a97";

  const fetchData = (value) => {
    fetch(`https://api.rawg.io/api/games?key=${key}&search=${value}`)
      .then((response) => response.json())
      .then((json) => {
        const results = Array.from(json.results).filter((game) => {
          return (
            game &&
            game.name &&
            game.name.toLowerCase().includes(value.toLowerCase())
          );
        });
        console.log(results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setInput(inputValue);
    fetchData(inputValue);
  };

  return (
    <div>
      <input
        className="min-w-[35vw] min-h-[2.5rem] bg-white rounded-full"
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Search for games..."
      />
    </div>
  );
};
