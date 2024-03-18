import React from "react";

const Footer = () => {
	return (
		<div className="bg-[#181C24] w-screen h-auto">
			<div className="bg-[#2C2E33] rounded-t-3xl h-[25rem] flex flex-col justify-center gap-8">
				<p className=" font-mainFont text-white text-2xl text-center">
					Connect with Us
				</p>
				<div name="logos" className="flex justify-between mx-[46rem]">
					<div className="bg-[#1456B8] h-[5rem] w-[5rem] rounded-full">
						<img src=""></img>
					</div>
					<div className="bg-[#1456B8] h-[5rem] w-[5rem] rounded-full">
						<img src=""></img>
					</div>
					<div className="bg-[#1456B8] h-[5rem] w-[5rem] rounded-full">
						<img src=""></img>
					</div>
					<div className="bg-[#1456B8] h-[5rem] w-[5rem] rounded-full">
						<img src=""></img>
					</div>
				</div>
				<p className=" font-mainFont text-white text-2xl text-center">
					Get Support
				</p>
				<p className=" font-mainFont text-[#1456B8] text-2xl text-center">
					Dummylink.com
				</p>
			</div>
		</div>
	);
};

export default Footer;
