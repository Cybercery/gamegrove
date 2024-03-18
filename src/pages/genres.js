import React, { useEffect } from 'react'
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Footer from "../components/Footer";

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
			<div className="flex mt-10 justify-center">
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
							<div className="bg-[#2C2E33] w-[23rem] min-h-[20vh] lg:w-[22vw] lg:h-[27vh] rounded-3xl">
								<div className="w-[20.5rem] h-[20vh] lg:w-[20vw] lg:h-[20vh] mx-auto pt-5 rounded-[3rem]">
									<img
										src={genre.image_background}
										alt=""
										className="w-full h-full object-cover rounded-[1rem] z-40"
									/>
								</div>
								<h1 className="text-white font-mainFont font-regular	 p-4 text-[1.5rem] tracking-wide text-center">
									{genre.name}
								</h1>
							</div>
						</Link>
					);
				})}
			</div>
			<Footer />
		</div>
	);
};

export default Genres;