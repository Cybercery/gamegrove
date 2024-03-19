import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

// Gamepg.js

const Gamepg = ({ setCartItems, cartItems }) => {
  const { slug } = useParams();
  const [game, setGame] = useState(null);
  const [screenshots, setScreenshots] = useState(null);
  const [requirements, setRequirements] = useState(null);
  // const [trailers, setTrailers] = useState(null);
  // console.log(slug);
  useEffect(() => {
    // Fetch game data based on slug
    fetch(
      `https://api.rawg.io/api/games/${slug}?key=407a808173854a60b9448adc36f88cf9`
    )
      .then((response) => response.json())
      .then((data) => {
        // Handle the received game data
        setGame(data);
      })
      .catch((error) => console.error("Error fetching game:", error));
  }, [slug]);

  useEffect(() => {
    fetch(
      `https://api.rawg.io/api/games/${slug}/screenshots?key=407a808173854a60b9448adc36f88cf9`
    )
      .then((response) => response.json())
      .then((data) => {
        // Handle the received game data
        setScreenshots(data);
      });
  }, [slug]);

  useEffect(() => {
    fetch(
      `https://api.rawg.io/api/games/${slug}?key=407a808173854a60b9448adc36f88cf9`
    )
      .then((response) => response.json())
      .then((data) => {
        // Handle the received game data
        setRequirements(data);
      });
  }, [slug]);

  // useEffect(() => {
  //   fetch(`https://api.rawg.io/api/games/${slug}/movies?key=407a808173854a60b9448adc36f88cf9`)
  //     .then(response => response.json())
  //     .then(data => {
  //       // Handle the received game data
  //       setTrailers(data);
  //     })
  // }, [slug]);

  if (!game) {
    return <div>Loading...</div>;
  }
  // console.log(game.movies);
  // console.log(game.short_screenshots);
  //  console.log(grand-theft-auto-v.screenshots);
  //  console.log(game);
  // console.log(screenshots);
  // console.log(trailers);
  console.log(game);
  // console.log(game.platforms[0].requirements.minimum);

  const handleAddToCart = () => {
    // Add the current slug to the cartItems array

    const name = game.name;
    console.log(name);
    const img_link = game.background_image;
    console.log(img_link);

    const newItem = {
      name: name,
      image: img_link,
    };

    const updatedCartItems = [...cartItems, newItem];
    setCartItems(updatedCartItems);
    // Store the updated cart items in localStorage
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  return (
    <div className="bg-[#181C24] w-screen min-h-screen">
      <Navbar />
      <div className="flex flex-col mt-8 content-center justify-center lg:flex-row lg:content-center lg:justify-center gap-[7vw] lg:mt-[5rem]  ">
        <img
          src={game.background_image}
          alt={game.name}
          className="w-[85vw] h-[25vh] self-center lg:w-[45vw] lg:h-[50vh] rounded-xl"
        />
        {/* <div className='w-[85vw] h-[25vh] self-center lg:w-[45vw] lg:h-[50vh] rounded-xl'>
          <video controls className='w-full h-full'>
            <source src={trailers.results[0].data.max} type='video/mp4' />
          </video>
        </div> */}
        <div className="flex flex-col">
          <div className="bg-[#2C2E33] rounded-3xl w-[85vw] min-h-[30vh] lg:w-[35vw] lg:min-h-[30vh] self-center lg:self-start py-7 p-2">
            <div className="flex content-between justify-between mx-7 ">
              <h1 className="text-white font-mainFont text-2xl lg:text-4xl font-regular">
                {game.name}
              </h1>
              <p className="text-white font-mainFont text-[0.9rem] lg:text-[1.2rem] self-center opacity-55 font-light">
                {game.released}
              </p>
            </div>
            <div>
              <div className="flex gap-3">
                <ul className="text-[#0066ff] text-[1rem]  font-mainFont mx-7 mt-3 flex gap-5">
                  {game.genres.map((genre) => (
                    <li key={genre.id}>{genre.name}</li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-white font-mainFont text-[0.9rem] lg:text-[1 rem] mx-7 mt-3 opacity-55 font-light">
              Age Rating:{" "}
              {game.esrb_rating ? game.esrb_rating.name : "Not available"}
            </p>
            <p className="text-white font-mainFont text-[0.8rem] lg:text-[0.9rem] mx-7 mt-3 font-light ">
              {game.description_raw.substring(0, 500)}...
            </p>
          </div>
          <div className="flex flex-row  mt-5 content-between space-between gap-5 ml-[2rem] lg:ml-0 lg:justify-between mb-10">
            <Link to="/cart">
              <button
                onClick={handleAddToCart}
                className="bg-[#2C2E33] border-[2px] border-[#37A134] rounded-3xl w-[40vw] h-[10vh] mt-5 lg:w-[16vw] lg:h-[10vh] self-center lg:self-start "
              >
                <h1 className="text-white font-mainFont text-lg lg:text-2xl font-light self-center">
                  Buy Now
                </h1>
              </button>
            </Link>
            <button
              onClick={handleAddToCart}
              className="bg-[#2C2E33] rounded-3xl w-[40vw] h-[10vh] mt-5 lg:w-[16vw] lg:h-[10vh] self-center lg:self-start border-[2px] border-[#1456B8]"
            >
              <h1 className="text-white font-mainFont  text-lg lg:text-2xl font-light self-center">
                Add to Cart
              </h1>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#101216] h-auto w-screen py-5 mt-5 lg:mt-[5rem] lg:pb-[5rem]">
        <h1 className="text-white font-mainFont text-2xl lg:text-4xl font-light text-center pt-5 pb-5">
          Screenshots
        </h1>
        <div className="flex flex-row gap-[5vh] lg:gap-[2vw] justify-center flex-wrap content-center mt-5">
          {screenshots.results.map((screenshot) => (
            <img
              key={screenshot.id}
              src={screenshot.image}
              alt={screenshot.name}
              className="w-[22rem] h-[20vh] lg:w-[24.3rem] lg:h-[21vh] rounded-xl"
            />
          ))}
        </div>
      </div>

      <div className="bg-[#181C24] w-screen py-5 mt-5 px-10 leading-6 flex flex-col lg:flex-row space-between gap-5 lg:gap-10 lg:pt-10 pb-10  ">
        <div className="bg-[#2C2E33] lg:h-[20rem] lg:flex lg:flex-col lg:items-center lg:justify-center p-5 lg:p-20 rounded-[2rem] mb-[1rem] mt-5 lg:mt-0 lg:w-1/2">
          <h1 className="text-white font-mainFont text-2xl lg:text-4xl font-light text-center pb-5">
            Requirements
          </h1>
          <div name="requirement-div" className="text-center font-mainFont">
            {game.platforms[0].requirements.minimum ? (
              <p className="text-white text-[0.8rem] lg:text-[1rem]">
                {
                  game.platforms[0].requirements.minimum.split(
                    "Additional Notes"
                  )[0]
                }
              </p>
            ) : (
              <p className="text-white text-[0.8rem] lg:text-[1rem]">
                Minimum requirements not declared.
              </p>
            )}

            {game.platforms[0].requirements.recommended ? (
              <p className="text-white text-[0.8rem] lg:text-[1rem]">
                {
                  game.platforms[0].requirements.recommended.split(
                    "Additional Notes"
                  )[0]
                }
              </p>
            ) : (
              <p className="text-white text-[0.8rem] lg:text-[1rem]">
                Recommended requirements not declared.
              </p>
            )}
          </div>
        </div>
        <div className="bg-[#2C2E33] lg:h-[20rem] lg:flex lg:flex-col lg:items-center lg:justify-center p-5 rounded-[2rem] lg:w-1/2">
          <h1 className="text-white font-mainFont text-2xl lg:text-4xl font-light text-center pb-5">
            More Details
          </h1>
          <div>
            <p className="text-white font-mainFont font-light text-center">
              Rating: {game.rating ? game.rating : "Not declared"}
            </p>
            <p className="text-white font-mainFont font-light text-center">
              Metacritic Rating:{" "}
              {game.metacritic ? game.metacritic : "Not declared"}
            </p>
            <p className="text-white font-mainFont font-light text-center">
              Publisher:{" "}
              {game.publishers[0] ? game.publishers[0].name : "Not declared"}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gamepg;
