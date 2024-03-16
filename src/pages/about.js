import React from "react";
import NavBar from "../components/Navbar.js";
import Icon1 from "../images/Vector.svg";
import Icon2 from "../images/controller.svg";
import Ashmit from "../images/About-us-images/AshmitJain.jpg";
const About = () => {
	return (
		<div className=" w-screen h-screen bg-[#181C24]">
			<NavBar />

			<div className=" bg-[#151617] w-full h-1/3 lg:h-1/4 lg:pt-10 lg:pb-10">
				<div className="flex justify-center gap-3 lg:gap-5">
					<h1 className="text-white text-4xl font-mainFont font-normal text-center pt-10 lg:text-6xl">
						About
					</h1>
					<h1 className="text-[#0066FF] text-4xl font-mainFont font-normal text-center pt-10 lg:text-6xl  ">
						GameGrove
					</h1>
				</div>
				<p className="text-white font-mainFont font-[300] text-center w-4/5 mx-auto mt-5 lg:mt-10 lg:text-[1.2rem] lg:w-[60rem]">
					Welcome to GameGrove, your premier online gaming destination. Dive
					into a world of endless possibilities with our curated selection of
					the latest video games and accessories. Elevate your gaming experience
					with us, where the community thrives!
				</p>
			</div>

			<div className=" bg-[#181C24]">
				<div className="flex-col justify-center content-center bg-[#181C24]">
					<div className="m-10 lg:flex justify-center lg:mt-15">
						<img
							src={Icon1}
							alt="icon"
							className="w-1/3 h-1/3 mx-auto mt-10 lg:h-[10rem] lg:w-[10rem] lg:mx-0 lg:mr-[3rem]"
						/>
						<div className="lg:w-1/3">
							<h2 className=" text-[#0066FF] font-semibold text-[1.4rem] text-center mt-7 lg:text-left lg:text-3xl">
								DIVE INTO A VARIETY OF GAMES
							</h2>
							<p className="text-center text-white font-mainFont lg:text-xl font-light mt-4 lg:text-left">
								Explore AAA blockbusters or indie gems at GameGrove, where
								gaming dreams come to life in every title. We also provide users
								with tons of new Games added every day!! Jump on this thrill
								ride with us and join us on this journey
							</p>
						</div>
					</div>
				</div>

				<div className="flex-col justify-center content-center bg-[#181C24]">
					<div className="m-10 lg:flex justify-center lg:mt-5">
						<img
							src={Icon2}
							alt="icon"
							className=" mx-auto mt-10 h-[12rem] w-[12rem] lg:mx-0 lg:mr-[1rem] lg:mt-0"
						/>
						<div className="lg:w-1/3">
							<h2 className=" text-[#0066FF] font-semibold text-[1.4rem] text-center mt-7 lg:text-left lg:text-3xl">
								BUILT FOR ALL KINDS OF GAMERS
							</h2>
							<p className="text-center text-white font-mainFont mb-[5rem] lg:text-xl  font-light mt-4 lg:text-left">
								GameGrove's site offers seamless navigation, exclusive deals,
								and vibrant visuals for an immersive and enjoyable gaming
								adventure. Lorem Ipsum Doloret Chipi Chipi Chapa Chapa Dubi Dubi
								Daba
							</p>
						</div>
					</div>
				</div>

				{/* aaaa */}
				<div className="bg-[#151617] h-full w-full flex flex-col justify-center items-center pt-10">
					<div className="flex">
						<h1 className="text-white text-4xl font-mainFont font-normal text-center lg:text-6xl">
							Our
						</h1>
						<h1 className="text-[#0066FF] text-4xl font-mainFont font-normal text-center lg:text-6xl  ">
							Team
						</h1>
					</div>
					{/* images and circles div: */}
					<div
						name="People"
						className=" lg:w-[90rem] lg:mt-10 lg:flex lg:justify-between"
					>
						<div className="mt-10 flex flex-col items-center">
							<img
								src={Ashmit}
								alt="Ashmit photo"
								className="w-1/3 h-1/3 lg: h-[12rem] w-[12rem] rounded-full"
							/>
							<h1 className=" text-white text-2xl mt-5 font-regular">
								Ashmit Jain
							</h1>
							<p className="text-center text-white w-[20rem] font-thin mt-4 ">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. 
							</p>
							<div className="bg-white w-1/2 mt-10 h-1 rounded-full lg:hidden"></div>
						</div>
						<div className="mt-10 flex flex-col items-center">
							<img
								src={Ashmit}
								alt="Ashmit photo"
								className="w-1/3 h-1/3 lg: h-[12rem] w-[12rem] rounded-full"
							/>
							<h1 className=" text-white text-2xl mt-5 font-regular">
								Ashmit Jain
							</h1>
							<p className="text-center text-white w-[20rem] font-thin mt-4 ">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. 
							</p>
							<div className="bg-white w-1/2 mt-10 h-1 rounded-full lg:hidden"></div>
						</div>
						<div className="mt-10 flex flex-col items-center">
							<img
								src={Ashmit}
								alt="Ashmit photo"
								className="w-1/3 h-1/3 lg: h-[12rem] w-[12rem] rounded-full"
							/>
							<h1 className=" text-white text-2xl mt-5 font-regular">
								Ashmit Jain
							</h1>
							<p className="text-center text-white w-[20rem] font-thin mt-4 ">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. 
							</p>
							<div className="bg-white w-1/2 mt-10 h-1 rounded-full lg:hidden"></div>
						</div>
						<div className="mt-10 flex flex-col items-center">
							<img
								src={Ashmit}
								alt="Ashmit photo"
								className="w-1/3 h-1/3 lg: h-[12rem] w-[12rem] rounded-full"
							/>
							<h1 className=" text-white text-2xl mt-5 font-regular">
								Ashmit Jain
							</h1>
							<p className="text-center text-white w-[20rem] font-thin mt-4 ">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. 
							</p>
							<div className="bg-white w-1/2 mt-10 mb-10 h-1 rounded-full lg:hidden"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
