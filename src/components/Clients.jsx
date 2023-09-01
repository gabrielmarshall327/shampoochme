import React from "react";
import Dog1 from "../assets/dog1.webp";
import Dog2 from "../assets/dog2.webp";
import Dog3 from "../assets/dog3.webp";
import "../index.css";

function Clients() {
	return (
		<div className=" bg-custom-pink">
			<div className=" flex flex-wrap justify-center py-12 max-w-6xl mx-auto text-white">
				<div className="aboutcards">
					<img src={Dog1} className=" rounded-full m-auto" />
					<h2 className="aboutHead">Quality Pet Care</h2>
					<p className="aboutDesc">
						At Shampooch Me, you can expect great service and a groomer that
						listens to your grooming needs. Your fur baby can expect someone
						that is loving and caring in an environment without distractions of
						other dogs and being locked in a kennel for hours. Making for a less
						stressful environment!
					</p>
				</div>
				<div className="aboutcards">
					<img src={Dog2} className="rounded-full m-auto" />
					<h2 className="aboutHead">Let Us Help You</h2>
					<p className="aboutDesc">
						When you live a busy life, it is hard to consistently provide the
						attention and care that your pets can demand. Let Shampooch Me take
						care of it for you, letting us pamper your fur baby to maintain
						their physical health and appearance. So when you see the yellow and
						pink van passing by, give us a call!
					</p>
				</div>
				<div className="aboutcards">
					<img src={Dog3} className="rounded-full m-auto" />
					<h2 className="aboutHead">Even The Small Things Matter</h2>
					<p className="aboutDesc">
						We are always prepared for your pet's needs and ensure that your pet
						will receive the best care and love. Their happiness is our priority
						and we strive to provide a service we would want our own pets to
						receive. Even small things matter to your pet for them to look and
						feel their best.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Clients;
