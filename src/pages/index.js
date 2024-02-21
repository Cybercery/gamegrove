// Filename - pages/index.js

import React from "react";
import NavBar from "../components/Navbar.js";
import Carouseel from "../components/Carousel.js";

const Home = () => {
  return (
    <div className="bg-[#181C24] min-h-[100vh] w-[100vw]">
      <NavBar className="" />
      <Carouseel />
    </div>
  );
};

export default Home;
