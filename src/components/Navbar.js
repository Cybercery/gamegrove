// import React from "react";

// const Navbar = () => {
//   return <div></div>;
// };

// export default Navbar;
// Filename - "./components/Navbar.js

import React from "react";
import Logo from "../images/logo.svg";
import Menu from "../images/menu.svg";
import Cart from "../images/cart.svg";
import Search from "../images/search.svg";
var Link = require("react-router-dom").Link;

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between content-between bg-[#1456B8] lg:hidden py-[1.2rem]">
        <div className="flex content-center justify-center ">
          <img
            src={Menu}
            className="min-w-[1.5rem] max-w-[2rem]  "
            alt="menu"
          />
          <img
            src={Logo}
            className="min-w-[3.5rem] max-w-[4rem] ps-[0.6rem]"
            alt="logo"
          ></img>
          <h1 className="font-mainFont font-[500] text-[1.2rem] text-white self-center ">
            GAME GROVE
          </h1>
        </div>
        <div className="flex ">
          <img
            src={Search}
            className="min-w-[1.5rem] max-w-[2rem] mx-2 self-center"
            alt="search"
          />
          <img
            src={Cart}
            className="min-w-[1.5rem] max-w-[2rem] mx-2 self-center"
            alt="cart"
          />
          <div className="min-w-[2.5rem] min-h-[2.5rem] rounded-full bg-white mx-4  self-center"></div>
        </div>

        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul> */}
      </div>

      <div className="hidden lg:flex justify-start content-start bg-[#1456B8] py-[0.8rem] px-5 gap-14">
        <div className="flex gap-2">
          <img
            src={Logo}
            className="min-w-[4rem] max-w-[4rem] ps-[0.6rem]"
            alt="logo"
          />
          <h1 className="font-mainFont font-[500] text-[1.3rem] text-white self-center ">
            GAME GROVE
          </h1>
        </div>
        <ul className="flex text-white no-underline gap-4 self-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/genre">Genre</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/support">Support</Link>
          </li>
        </ul>
        <div className="min-w-[27rem] h-[2.5rem] bg-white self-center rounded-full"></div>
        <div className="flex self-center gap-4">
          <img src={Cart} className="w-6"></img>
          <div className="min-w-[2.5rem] min-h-[2.5rem] bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
