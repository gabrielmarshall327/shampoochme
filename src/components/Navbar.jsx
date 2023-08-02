import React, { useState } from "react";
import Paw from "../assets/paw.png";
import "../index.css";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

function Navbar() {
	const [nav, setNav] = useState(false);

	const handleNav = () => {
		setNav(!nav);
	};

	return (
		<nav className="sticky top-0 flex justify-between items-center bg-white h-12 border-b-[3px] border-b-black">
			<div className="flex justify-between items-center h-full w-full max-w-5xl mx-auto">
				<div className=" flex h-[50px] w-full">
					<a href="#" className="flex h-[50px] mx-2">
						<img src={Paw} alt="Logo" className="" />
					</a>
				</div>
				<div className="">
					<ul className=" list-none hidden md:flex w-[460px]">
						<li>
							<a href="#pictures" className="navbuttons">
								Gallery
							</a>
						</li>
						<li>
							<a href="#about" className="navbuttons">
								Hours
							</a>
						</li>
						<li>
							<a href="#prices" className="navbuttons">
								Services
							</a>
						</li>
						<li>
							<a href="#contact" className="navbuttons border-r-0">
								Contact Us!
							</a>
						</li>
					</ul>
				</div>
				<div onClick={handleNav} className="block pr-2 md:hidden">
					{!nav ? (
						<HiOutlineMenuAlt3 size={40} />
					) : (
						<AiOutlineClose size={40} />
					)}
				</div>
				<div
					className={
						!nav ? " hidden" : "absolute top-12 text-center w-full left-0"
					}
				>
					<ul className=" list-none w-full bg-custom-pink">
						<li className=" text-white border-b border-white p-1">
							<a className=" text-white" href="#pictures" onClick={handleNav}>
								Gallery
							</a>
						</li>
						<li className=" text-white border-b border-white p-1">
							<a className=" text-white" href="#about" onClick={handleNav}>
								Hours
							</a>
						</li>
						<li className=" text-white border-b border-white p-1">
							<a className=" text-white" href="#prices" onClick={handleNav}>
								Services
							</a>
						</li>
						<li className=" text-white border-b border-white p-1">
							<a className=" text-white" href="#contact" onClick={handleNav}>
								Contact Us!
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
