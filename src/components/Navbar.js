import React from "react";
import { SearchBar } from "./SearchBar";
import Logo from "../images/logo.svg";
import Menu from "../images/menu.svg";
import Cart from "../images/cart.svg";
var Link = require("react-router-dom").Link;
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
		<div>
			<div className="flex justify-between content-between bg-[#1456B8]  py-[1rem] mx-auto">
				<div className="flex content-center justify-center ">
					<img
						src={Menu}
						className="min-w-[1.5rem] max-w-[2rem] ms-3 lg:hidden "
						alt="menu"
						onClick={handleMenuToggle}
					/>
					<div className="h-3 w-5"></div>
					<img
						src={Logo}
						className="lg:min-w-[3.5rem] lg:max-w-[4rem] min-w-[2.8rem] max-w-[3rem] ps-[0.6rem]"
						alt="logo"
					></img>
					<h1 className="font-mainFont font-[500] lg:text-[1.2rem] text-[1rem]  text-white self-center ">
						GAME GROVE
					</h1>
					<ul className="hidden lg:flex font-mainFont text-white no-underline text-[1.1rem] gap-7 self-center ms-8 ">
						<li>
							<Link to="/home">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/genres">Genres</Link>
						</li>
						<li>
							<Link to="/support">Support</Link>
						</li>
					</ul>
				</div>
				<div className="flex">
					<Link to="/cart">
						<img
							src={Cart}
							className="min-w-[1.5rem] max-w-[2rem] lg:min-w-[2rem] lg:max-w-[2.5rem] mx-2 self-center mt-3"
							alt="cart"
						/>
					</Link>
					<div className="min-w-[2.5rem] min-h-[2.5rem] rounded-full bg-white mx-4  self-center"></div>
				</div>
			</div>

			<div
				className={`${
					isMenuOpen ? "flex" : "hidden"
				} lg:hidden justify-between content-between bg-[#1456B8] py-[0.8rem] px-5`}
			>
				<div className="flex ">
					<ul className="flex flex-col font-mainFont text-white no-underline text-[1.1rem] gap-7 self-center lg:hidden">
						<li>
							<Link to="/home">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/genres">Genres</Link>
						</li>
						<li>
							<Link to="/support">Support</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
