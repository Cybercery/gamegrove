import React from "react";
import NavBar from "../components/Navbar.js";
import Icon1 from "../images/Vector.svg";

const About = () => {
  return (
    <div className=" w-screen h-screen bg-[#181C24]">
      <NavBar />
      <div className=" bg-red-700 w-full h-1/3">
        <div className="flex justify-center gap-3 lg:gap-5">
          <h1 className="text-white text-4xl font-mainFont font-normal text-center pt-10 lg:text-6xl">
            About
          </h1>
          <h1 className="text-[#0066FF] text-4xl font-mainFont font-normal text-center pt-10 lg:text-6xl  ">
            GameGrove
          </h1>
        </div>
        <p className="text-white font-mainFont font-[300] text-center w-4/5 mx-auto mt-5 lg:mt-10 lg:text-[1.2rem]">
          Welcome to GameGrove, your premier online gaming destination. Dive
          into a world of endless possibilities with our curated selection of
          the latest video games and accessories. Elevate your gaming experience
          with us, where the community thrives!
        </p>
      </div>
      <div>
        <div className="flex-col justify-center content-center">
          <img src={Icon1} alt="icon" className="w-1/3 h-1/3 mx-auto mt-10" />
          <h2 className=" text-[#0066FF] font-semibold text-[1.4rem] text-center mt-7 ">
            DIVE INTO A VARIETY OF GAMES
          </h2>
          <p className="text-center mx-10 text-white font-thin mt-4">
            Explore AAA blockbusters or indie gems at GameGrove, where gaming
            dreams come to life in every title. We also provide users with tons
            of new Games added every day!!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
