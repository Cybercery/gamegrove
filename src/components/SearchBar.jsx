import React, { useState, useRef, useEffect } from "react";

export const SearchBar = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const dropdownRef = useRef(null);

  const key = "18d8dc115d954615a6fe8522598e8a97";

  const fetchData = (value) => {
    fetch(`https://api.rawg.io/api/games?key=${key}&search=${value}`)
      .then((response) => response.json())
      .then((json) => {
        const filteredResults = json.results.filter(
          (game) =>
            game &&
            game.name &&
            game.name.toLowerCase().includes(value.toLowerCase()) &&
            game.slug // Ensure each game has a slug
        );
        setResults(filteredResults);
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

  const handleOptionClick = (slug) => {
    window.location.href = `/game/${slug}`;
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setResults([]); // Close the dropdown
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex justify-center">
      <div className="relative flex flex-col lg:w-[35vw] w-[90vw]">
        <input
          className="w-full min-h-[2.5rem] bg-white rounded-full"
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Search for games..."
        />
        {results.length > 0 && (
          <div
            ref={dropdownRef}
            className="absolute w-full mt-1 top-full rounded-lg bg-white shadow-md z-10"
          >
            {results.map((result, index) => (
              <div
                key={index}
                onClick={() => handleOptionClick(result.slug)}
                className="cursor-pointer px-4 py-2 hover:bg-gray-200"
              >
                {result.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
