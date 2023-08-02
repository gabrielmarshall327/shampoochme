import React from "react";
import Yelp from "../assets/yelpLogo.png";
import Instagram from "../assets/instagramLogo.png";
import Facebook from "../assets/facebookLogo.png";

function Footer() {
	return (
		<div className=" h-60  text-center ">
			<div className="bg-custom-pink">
				<h1 className="p-4 text-white">Social</h1>
				<hr />
				<div className="flex justify-center p-6">
					<a
						href="https://www.facebook.com/shampoochme.pet/"
						target="_blank"
						className="socials"
					>
						<img src={Facebook} alt="Facebook Logo" />
					</a>
					<a
						href="https://www.instagram.com/shampoochme.pet/"
						target="_blank"
						className="socials"
					>
						<img src={Instagram} alt="Instagram Logo" />
					</a>
					<a
						href="https://www.yelp.com/biz/shampooch-me-bryan-2"
						target="_blank"
						className="socials"
					>
						<img src={Yelp} alt="Yelp Logo" />
					</a>
				</div>
			</div>
			<div className="p-8">
				<hr className=" w-[70vw] border-gray-200" />
				<p className=" font-semibold">ShampoochMePet LLC.</p>
				<div className=" justify-center gap flex flex-grow max-w-5xl mx-auto flex-wrap max-lg:flex-col">
					<p className=" p-4 text-sm basis-1/2 text-left flex-grow max-lg:text-center">
						2121 E Wm J Bryan Pkwy. #6435 Bryan, Texas 77802, United States
					</p>
					<p className="p-4 text-sm basis-1/2 text-right flex-grow max-lg:text-center">
						Copyright © 2023 Shampooch Me - All Rights Reserved.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Footer;
