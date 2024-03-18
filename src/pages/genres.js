import React, { useEffect } from 'react'
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Genres = () => {
    let [genres, setGenres] = useState([]);
    useEffect(() => {
        fetch("https://api.rawg.io/api/genres?key=407a808173854a60b9448adc36f88cf9")
        .then((response) => response.json())
        .then((data) => {
            setGenres(data.results);
            console.log(data);
      });
    }, []);
  return (
		<div className="bg-[#181C24]">
			<Navbar />
			<div className="flex mt-10">
				<h1 className="text-white text-4xl font-mainFont font-normal text-center lg:text-6xl ms-6 lg:ms-12">
					Game
				</h1>
				<h1 className="text-[#0066FF] text-4xl font-mainFont font-normal text-center lg:text-6xl  ">
					Genres
				</h1>
			</div>
			<div className="flex flex-wrap gap-[2vw] justify-center content-center py-8">
				{genres.map((genre) => {
					return (
						<Link to={`/catalogue/${genre.slug}`} key={genre.id}>
						<div className="bg-[#2C2E33] w-[92vw] min-h-[20vh] lg:w-[22vw] lg:h-[27vh] rounded-3xl">
							<div className="w-[86vw] h-[20vh] lg:w-[20vw] lg:h-[20vh] mx-auto  pt-5 rounded-xl">
								<img
									src={genre.image_background}
									alt=""
									className="w-full h-full object-cover rounded-xl z-40"
								/>
							</div>
							<h1 className="text-white font-mainFont ms-[2vw] p-4 text-[1.5rem] font-light tracking-wide ">
								{genre.name}
							</h1>
						</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
}

export default Genres